"use client";
import React, { useEffect, useState } from "react";
import { MdExpandLess, MdOutlineExpandMore } from "react-icons/md";
import styles from "../../styles/vote.module.scss";
import Image from "next/image";

const VoteSection = () => {
  const [expandedItem, setExpandedItem] = useState(0);
  const [selectedProtocol, setSelectedProtocol] = useState(null);
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(true);

  const protocols = [
    {
      name: "Arbitrum",
      icon: "/governance/arbitrum.svg",
    },
    {
      name: "Optimism",
      icon: "/governance/optimism.svg",
    },
    {
      name: "Uniswap",
      icon: "/governance/uniswap.svg",
    },
    {
      name: "ENS",
      icon: "/governance/ens.svg",
    },
  ];

  // Function to parse forum URL and extract post ID and post number
  const parseForumUrl = (url) => {
    try {
      const urlWithoutQuery = url.split("?")[0];
      const matches = urlWithoutQuery.match(/\/(\d+)\/(\d+)$/);
      if (!matches) return null;

      return {
        postId: matches[1],
        postNumber: matches[2],
      };
    } catch (error) {
      console.error("Error parsing forum URL:", error);
      return null;
    }
  };

  // Update the fetchForumPost function
  const fetchForumPost = async (url) => {
    try {
      const parsed = parseForumUrl(url);
      if (!parsed) return null;

      const { postId, postNumber } = parsed;

      // Use the new route handler
      const response = await fetch(
        `/api/fetch-forum-post?postId=${postId}&postNumber=${postNumber}`
      );
      const data = await response.json();
      // Return the content of the specific post
      return data?.cooked || null;
    } catch (error) {
      console.error("Error fetching forum post:", error);
      return null;
    }
  };

  const determineProtocol = (forumLink, proposalName) => {
    const link = forumLink.toLowerCase();
    const name = proposalName.toLowerCase();

    if (link.includes("arbitrum") || name.includes("arbitrum"))
      return "Arbitrum";
    if (link.includes("optimism") || name.includes("optimism"))
      return "Optimism";
    if (link.includes("uniswap") || name.includes("uniswap")) return "Uniswap";
    if (link.includes("ens") || name.includes("gnosis")) return "ENS";
    return "Arbitrum"; // default fallback
  };

  // Function to determine icon based on protocol
  const getProtocolIcon = (protocol) => {
    return `/governance/${protocol}.svg`;
  };

  useEffect(() => {
    const fetchProposals = async () => {
      try {
        const response = await fetch("/api/notion-proposals");
        const data = await response.json();

        console.log("Raw API Response:", data);

        if (data.success && data.data) {
          const allMonthlyData = [
            ...(data.data.page1 || []),
            ...(data.data.page2 || []),
          ];

          const allProposals = allMonthlyData.reduce((acc, monthData) => {
            if (monthData && Array.isArray(monthData.proposals)) {
              return [...acc, ...monthData.proposals];
            }
            return acc;
          }, []);

          console.log("Extracted all proposals:", allProposals);

          const transformedProposals = await Promise.allSettled(
            allProposals.map(async (proposal, index) => {
              console.log("Processing proposal:", proposal);
              console.log(
                `Proposal ${index + 1} Comment Link:`,
                proposal["Our Comments Link"]
              );

              const protocol = determineProtocol(
                proposal["Forum Post Link"] || "",
                proposal["Proposal Name"] || ""
              );

              let date = new Date();
              if (proposal["Start Date"]) {
                const [day, month, year] = proposal["Start Date"].split("/");
                date = new Date(year, month - 1, day);
              }

              let forumContent = null;
              if (proposal["Our Comments Link"]) {
                try {
                  forumContent = await fetchForumPost(
                    proposal["Our Comments Link"]
                  );
                } catch (error) {
                  console.error("Failed to fetch forum content:", error);
                }
              }

              return {
                id: index + 1,
                protocol: protocol,
                icon: getProtocolIcon(protocol),
                title: proposal["Proposal Name"] || "Untitled Proposal",
                tag: "Governance",
                result:
                  proposal["Voting Done (Yes/No)"]?.toLowerCase?.() === "yes"
                    ? "For"
                    : "Against",
                content: proposal["Comment Draft"] || "",
                commentLink: proposal["Our Comments Link"] || "",
                forumContent: forumContent,
                voter: {
                  icon: "🌐",
                  name: proposal["Commented By"] || "helloo",
                  date: `On ${date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}`,
                },
              };
            })
          );

          const successfulProposals = transformedProposals
            .filter((result) => result.status === "fulfilled")
            .map((result) => result.value);

          console.log("Final transformed proposals:", successfulProposals);

          if (successfulProposals.length > 0) {
            setProposals(successfulProposals);
          } else {
            console.warn("No proposals were transformed");
          }
        } else {
          console.error("Invalid data structure:", data);
          throw new Error("Invalid data structure received from API");
        }
      } catch (error) {
        console.error("Failed to fetch proposals:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProposals();
  }, []);

  const filteredProposals = selectedProtocol
    ? proposals.filter((proposal) => proposal.protocol === selectedProtocol)
    : proposals;

  const SkeletonLoader = () => {
    return (
      <div className={styles.skeletonList}>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className={styles.skeletonItem}></div>
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className={styles.outerdiv}>
        <SkeletonLoader />
      </div>
    );
  }

  return (
    <div className={styles.outerdiv}>
      <div className={styles.upperpart}>
        <h1 className={styles.heading}>Recent Voted</h1>
        <div className={styles.filter}>
          {protocols.map((protocol) => (
            <button
              key={protocol.name}
              onClick={() =>
                setSelectedProtocol(
                  selectedProtocol === protocol.name ? null : protocol.name
                )
              }
              className={`${styles.protocolButton} ${
                selectedProtocol === protocol.name ? styles.active : ""
              }`}
            >
              <Image
                src={protocol.icon}
                alt={`${protocol.name} icon`}
                width={24}
                height={24}
              />
              <p>{protocol.name}</p>
            </button>
          ))}
        </div>
      </div>

      {filteredProposals.map((proposal, index) => (
        <div key={proposal.id} className={styles.votelist}>
          <div
            className={styles.votes}
            onClick={() =>
              setExpandedItem(expandedItem === index ? null : index)
            }
          >
            <div className={styles.left}>
              <span className={styles.icon}>
                <Image
                  src={proposal.icon}
                  alt={`Proposal ${proposal.id} icon`}
                  width={40}
                  height={40}
                />
              </span>
              <div className={styles.content}>
                <h3 className={styles.contentTitle}>{proposal.title}</h3>
                <p>
                  <span className={styles.contentTag}>onchain-tally</span>
                  <span className={styles.contentTag}>offchain-snapshot</span>
                </p>
                <span className={styles.arbitrumTag}>Arbitrum</span>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.result}>
                <span className={styles.r1}>Vote</span>
                <span className={styles.r2}>{proposal.result}</span>
              </div>
              {expandedItem === index ? (
                <MdExpandLess className={styles.arrowyellow} />
              ) : (
                <MdOutlineExpandMore className={styles.arrowwhite} />
              )}
            </div>
          </div>

          {expandedItem === index && (
            <div className={styles.belowdiv}>
              {proposal.voter && (
                <div className={styles.voter}>
                  <div className={styles.profile}>
                    <div className={styles.profileicon}>
                      {proposal.voter.icon}
                    </div>
                    <div className={styles.profilecontent}>
                      <div>{proposal.voter.name}</div>
                      <div className={styles.dateline}>
                        Vote{" "}
                        <span className={styles.for}>{proposal.result}</span> on{" "}
                        {proposal.voter.date}
                      </div>
                    </div>
                  </div>

                  <div className={styles.comment}>
                    {proposal.forumContent ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: proposal.forumContent,
                        }}
                      />
                    ) : (
                      <p>{proposal.commentLink}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default VoteSection;
