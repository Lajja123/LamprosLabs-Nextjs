"use client";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { MdExpandLess, MdOutlineExpandMore, FaExclamationCircle } from "react-icons/md";
import { ExternalLink } from "lucide-react";
import styles from "../../styles/vote.module.scss";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";

const VoteSection = () => {
  const [expandedItem, setExpandedItem] = useState(0);
  const [selectedProtocol, setSelectedProtocol] = useState(null);
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noData, setNoData] = useState(false);
  const [error, setError] = useState(null);

  // Add a ref to track the latest request ID
  const latestRequestIdRef = useRef(0);
  const currentRequestId = useRef(0);

  const protocols = [
    {
      name: "Arbitrum", // Changed to proper display name
      value: "arbitrum", // Added value for internal handling
      icon: "/governance/arbitrum.svg",
      link: "https://forum.arbitrum.foundation/t/lampros-dao-delegate-communication-thread/26642",
    },
    {
      name: "Optimism", // Changed to proper display name
      value: "optimism",
      icon: "/governance/optimism.svg",
      link: "https://vote.optimism.io/delegates/lamprosdao.eth",
    },
    {
      name: "Uniswap", // Changed to proper display name
      value: "uniswap",
      icon: "/governance/uniswap.svg",
      link: "",
    },
    {
      name: "Superfluid", // Changed to proper display name
      value: "superfluid",
      icon: "/governance/superfluid_green.svg",
      link: "https://forum.superfluid.org/t/lampros-dao-delegate-thread/266",
    },
    // {
    //   name: "ENS", // Changed to proper display name
    //   value: "ens",
    //   icon: "/governance/ens.svg",
    //   link: "",
    // },
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

  const fetchForumPost = async (url, protocol) => {
    try {
      // Parse the forum URL to extract relevant details
      const parsed = parseForumUrl(url);
      if (!parsed) return null;

      const { postId, postNumber } = parsed;

      // Call the API route handler on your server with protocol parameter
      const response = await fetch(
        `/api/fetch-forum-post?postId=${postId}&postNumber=${postNumber}&protocol=${protocol.toLowerCase()}`
      );
      const data = await response.json();

      // Return both cooked content and created_at
      return {
        content: data?.cooked || null,
        createdAt: data?.created_at || null,
      };
    } catch (error) {
      console.error("Error fetching forum post:", error);
      return null;
    }
  };

  const determineProtocol = (forumLink, commentlink) => {
    const link = forumLink.toLowerCase();
    // const comment = commentlink.toLowerCase();

    if (link.includes("arbitrum")) return "Arbitrum";
    if (link.includes("optimism")) return "Optimism";
    if (link.includes("uniswap")) return "Uniswap";
    if (link.includes("ens")) return "ENS";
    if (link.includes("superfluid")) return "Superfluid";
    return "Arbitrum"; // default fallback
  };

  // Function to determine icon based on protocol
  const getProtocolIcon = (protocol) => {
    console.log("protocol is::", protocol);
    
    // Create mapping from protocol names to their correct icon paths
    const iconMapping = {
      'arbitrum': '/governance/arbitrum.svg',
      'optimism': '/governance/optimism.svg',
      'uniswap': '/governance/uniswap.svg',
      'superfluid': '/governance/superfluid_green.svg',
      'ens': '/governance/ens.svg'
    };
    
    return iconMapping[protocol.toLowerCase()] || `/governance/${protocol.toLowerCase()}.svg`;
  };

  const fetchProposals = useCallback(async () => {
    // Increment and capture the current request ID
    currentRequestId.current += 1;
    const thisRequestId = currentRequestId.current;
    latestRequestIdRef.current = thisRequestId;

    try {
      setLoading(true);
      setNoData(false); // Reset noData state
      setError(null); // Reset error state
      // Find the protocol object from the protocols array
      const protocolObj = protocols.find((p) => p.name === selectedProtocol);
      // Use the value (lowercase) for API calls
      const queryString = protocolObj ? `?protocol=${protocolObj.value}` : "";
      console.log(`Fetching data for ${selectedProtocol || 'all protocols'}, request ID: ${thisRequestId}`);
      const response = await fetch(`/api/notion-proposals${queryString}`);
      
      const data = await response.json();
      console.log("data", data);

      // Check if this is still the latest request
      if (thisRequestId !== latestRequestIdRef.current) {
        console.log(`Ignoring stale request ${thisRequestId}, latest is ${latestRequestIdRef.current}`);
        return; // Discard this response if a newer request has been made
      }

      if (data.success && data.data) {
        const validProposals = data.data.filter(
          (proposal) => proposal["Commented By"]
        );

        if (validProposals.length === 0) {
          setNoData(true); // Set noData if no valid proposals
        }

        const transformedProposals = await Promise.allSettled(
          validProposals.slice(0, 5).map(async (proposal, index) => {
            // Get the display name for the protocol
            const protocol = selectedProtocol  || determineProtocol(
              proposal["Forum Post Link"] || "",
              proposal["Communication Rationale"] || ""
            );

            let date = new Date();
            if (proposal["Start Date"]) {
              const [day, month, year] = proposal["Start Date"].split("/");
              date = new Date(year, month - 1, day);
            }

            let endDate = new Date();
            if (proposal["End Date"]) {
              console.log("end date", proposal["End Date"]);
              const [day, month, year] = proposal["End Date"].split("/");
              endDate = new Date(year, month - 1, day);
            }

            let forumContent = null;
            let forumCreatedAt = null;
            
            // Only fetch forum content for Arbitrum and Superfluid proposals
            if (proposal["Communication Rationale"] && 
                (protocol.toLowerCase() === 'arbitrum' || protocol.toLowerCase() === 'superfluid')) {
              try {
                const rawContent = await fetchForumPost(
                  proposal["Communication Rationale"],
                  protocol
                );
                forumContent = processForumContent(rawContent.content);
                forumCreatedAt = rawContent?.createdAt || null;
              } catch (error) {
                console.error("Failed to fetch forum content:", error);
              }
            }

            // Check again before completing the transformation
            if (thisRequestId !== latestRequestIdRef.current) {
              return { cancelled: true }; // Mark as cancelled
            }

            return {
              id: index + 1,
              protocol: protocol, // This will now be properly capitalized
              icon: getProtocolIcon(protocol.toLowerCase()),
              title: proposal["Proposal Name"] || "Untitled Proposal",
              tag: "Governance",
              result: proposal["Voted"],
              content: proposal["Comment Draft"] || "",
              commentLink: proposal["Communication Rationale"] || "",
              forumContent: forumContent,
              forumCreatedAt: forumCreatedAt,
              endDate: endDate,
              hasRationale: !!proposal["Communication Rationale"],
              voter: {
                icon: "/governance/voter.svg",
                name: proposal["Commented By"] || "Anonymous",
                date: `On ${date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}`,
              },
              type: proposal["Type"],
            };
          })
        );

        // Check one final time before updating state
        if (thisRequestId !== latestRequestIdRef.current) {
          console.log(`Aborting state update for request ${thisRequestId}`);
          return;
        }

        const successfulProposals = transformedProposals
        .filter((result) => result.status === "fulfilled" && !result.value.cancelled)
        .map((result) => result.value);

      setProposals(successfulProposals);
      } else {
        setNoData(true);
      }
    } catch (error) {
      console.error(`Error in request ${thisRequestId}:`, error);
      
      // Only update error state if this is still the latest request
      if (thisRequestId === latestRequestIdRef.current) {
        setError(
          "Something went wrong while fetching proposals. Please try again later."
        );
        setProposals([]);
      }
    } finally {
      // Only update loading state if this is still the latest request
      if (thisRequestId === latestRequestIdRef.current) {
        setLoading(false);
      }
    }
  }, [selectedProtocol]); 

  // Update the protocol selection handler
  const handleProtocolSelection = (protocol) => {
    setExpandedItem(null);
    const newSelection = selectedProtocol === protocol.name ? null : protocol.name;
    console.log(`Protocol selected: ${newSelection || 'none'}`);
    setSelectedProtocol(newSelection);
  };

  // Update useEffect to reset the expanded item when protocol changes
  useEffect(() => {
    setExpandedItem(null); // Reset expanded item when protocol changes
    fetchProposals();
  }, [fetchProposals]);

  // Content processing function
  const processForumContent = (content) => {
    const baseUrl = "https://forum.arbitrum.foundation";

    // Replace relative URLs with absolute URLs
    const updatedContent = content.replace(
      /href="\/(?!\/)/g, // Match hrefs that start with a single "/"
      `href="${baseUrl}/`
    );

    // Ensure all anchor tags open in a new tab with security attributes
    const updatedLinks = updatedContent.replace(
      /<a\b([^>]*?)>/g, // Match all anchor tags
      '<a target="_blank" rel="noopener noreferrer" $1>'
    );

    // Remove HTML tags for images
    const contentWithoutImages = updatedLinks.replace(/<img[^>]*>/g, "");

    // Process blockquotes with username
    const processedContent = contentWithoutImages.replace(
      /<aside[^>]*data-username="([^"]*)"[^>]*>.*?<blockquote>/gs,
      (match, username) =>
        `<div class="${styles.quotedText}"><blockquote><span class="${styles.quoteUsername}">${username}:</span><br/>`
    );

    // Clean up closing tags
    const contentProcessed = processedContent.replace(
      /<\/blockquote><\/aside>/g,
      "</blockquote></div>"
    );

    // Extract mentioned usernames from the 'cooked' property
    const mentionedUsernames = extractMentionedUsernames(contentProcessed);

    // Apply custom CSS classes to the mentioned usernames
    const finalContent = contentProcessed.replace(
      /@(\w+)/g,
      (match, username) => {
        if (mentionedUsernames.includes(username)) {
          return `<a class="${styles.mentionedUsernamesStyle}" href="https://forum.arbitrum.foundation/u/${username}" target="_blank" rel="noopener noreferrer">@${username}</a>`;
        } else {
          return match;
        }
      }
    );

    const processedContentFinal = finalContent.replace(
      /href="(https:\/\/forum.arbitrum.foundation\/[^"]+)"/g,
      (match, url) => {
        if (url.includes("/u/")) {
          // Links to user profiles
          return `href="${url}" class="${styles.mentionedUsernamesStyle}" target="_blank" rel="noopener noreferrer"`;
        } else {
          // Other links
          return `href="${url}" class="${styles.mentionedHyperlinkStyle}" target="_blank" rel="noopener noreferrer"`;
        }
      }
    );

    return processedContentFinal;
  };

  const extractMentionedUsernames = (content) => {
    // Use a regular expression or other parsing method to extract the mentioned usernames from the 'cooked' property
    const regex = /@(\w+)/g;
    const matches = content.match(regex);
    return matches ? matches.map((match) => match.slice(1)) : [];
  };

  const formatDate = (date) => {
    console.log("date", date);
    return date
      ? new Date(date).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
      : "";
  };

  const SkeletonLoader = () => {
    return (
      <div className={styles.skeletonList}>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className={styles.skeletonItem}></div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.outerdiv}>
      {/* Our Delegations Section */}
      <div className={styles.delegationsSection}>
        <h2 className={styles.delegationsHeading}>Our Delegations</h2>
        <div className={styles.delegationsContainer}>
          {protocols.map((protocol, index) =>
            protocol.link && (
              <a
                key={index}
                href={protocol.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.delegationCard}
              >
                <Image
                  src={protocol.icon}
                  alt={`${protocol.name} Icon`}
                  width={50}
                  height={50}
                />
                <p>{protocol.name}</p>
              </a>
            ) 
          )}
        </div>
      </div>

      <div className={styles.upperpart}>
        <h1 className={styles.heading}>Recent Votes</h1>
        <div className={styles.filter}>
          {protocols.map((protocol) => (
            <button
              key={protocol.name}
              onClick={() => handleProtocolSelection(protocol)}
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

      {loading ? (
        <SkeletonLoader /> // Render SkeletonLoader while loading is true
      ) : error ? (
        <div className={styles.messageContainer}>
          {/* <Image
            src="/governance/error-icon.svg" // Add an error icon to your public folder
            alt="Error Icon"
            width={50}
            height={50}
            color="#ffffff"
          /> */}
          <h3 className={styles.messageTitle}>Oops! Something Went Wrong</h3>
          <p className={styles.messageText}>{error}</p>
        </div>
      ) : noData ? (
        <div className={styles.messageContainer}>
          {/* <Image
            src="/governance/no-data.png" // Add a no-data icon to your public folder
            alt="No Data Icon"
            width={40}
            height={40}
            color="white"
          /> */}
          {/* <FaExclamationCircle className={styles.arrowyellow} /> */}

          <h3 className={styles.messageTitle}>No Votes Available</h3>
          <p className={styles.messageText}>
            There are no recent votes to display for{" "}
            <span className={styles.selectedProtocolName}>{selectedProtocol ?  selectedProtocol : "this selection"}</span> at the
            moment. Please check back later!
          </p>
        </div>
      ) : (
        proposals.map((proposal, index) => (
          <div 
            key={proposal.id} 
            className={`${styles.votelist} ${expandedItem === index ? 'expanded' : ''}`}
          >
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
                  <div className={styles.chainDiv}>
                    <span
                      className={`${styles.arbitrumTag} ${
                        styles[`${proposal.protocol.toLowerCase()}-tag`]
                      }`}
                    >
                      {proposal.protocol.charAt(0).toUpperCase() +
                        proposal.protocol.slice(1)}
                    </span>
                    <span
                      className={` ${styles.votingCommon} ${
                        proposal.type === "On-chain Voting"
                          ? styles.onchain
                          : styles.offchain
                      }`}
                    >
                      {proposal.type}
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.result}>
                  <span className={styles.r1}>Voted</span>
                  <span
                    className={`${styles.r2} ${
                      proposal.result === "For"
                        ? styles.for
                        : proposal.result === "Against"
                        ? styles.against
                        : proposal.result === "Abstain"
                        ? styles.abstain
                        : styles.for
                    }`}
                  >
                    {proposal.result}
                  </span>
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
                        <Image
                          src={proposal.voter.icon}
                          alt={`${proposal.voter.name} icon`}
                          width={32} // Adjust dimensions as needed
                          height={32}
                        />
                      </div>
                      <div className={styles.profilecontent}>
                        <div>{proposal.voter.name}</div>
                        <div className={styles.dateline}>
                          Voted{" "}
                          <span
                            className={`${styles.r2} ${
                              proposal.result === "For"
                                ? styles.for
                                : proposal.result === "Against"
                                ? styles.against
                                : proposal.result === "Abstain"
                                ? styles.abstain
                                : styles.for
                            }`}
                          >
                            {proposal.result}
                          </span>{" "}
                          on{" "}
                          <span className={styles.dateVote}>
                            {proposal.hasRationale && proposal.forumCreatedAt
                              ? formatDate(proposal.forumCreatedAt)
                              : formatDate(proposal.endDate)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {proposal.hasRationale && (
                      <div className={styles.comment}>
                        <div className={styles.rationaleDiv}>
                          <span className={styles.rationale}>Rationale</span>
                        </div>
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
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        ))
      )}

      <div className={styles.btnGovernanceDiv}>
        <a
          href="https://lamprosdao.notion.site/governance"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnGovernance}
        >
          <div className={styles.btnSeeMore}>
            <span>See more</span>
            <ExternalLink className={styles.linkIcon} />
          </div>
        </a>
      </div>

      <div className={styles.delegateNow}>
        <h1 className={styles.delegateNowHeading}>Delegate to Lampros DAO</h1>
        <div className={styles.delegateNowPara}>
          <div>Your delegation matters!! </div>
          <br />
          <div>
            By delegating your tokens to our team, you enable us to represent
            your interests and drive meaningful governance decisions. Empower
            effective governance in Web3.
          </div>
          <br />

          <div>
            Delegate your tokens to our team and become a part of shaping the
            future of decentralized ecosystems.
          </div>
        </div>
        <div className={styles.btnGovernanceContainer}>
          <Link
            href="https://www.tally.xyz/gov/arbitrum/delegate/0xf070cd4b5ba73a6b6a939dde513f79862bffcd25"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <button className={styles.delegateNowButton}>
              <Image
                src="/governance/arbitrum.svg"
                alt="arbitrum logo"
                width={30}
                height={40}
              />
              <span className={styles.textBtn}>
                Delegate on Arbitrum{" "}
                <ExternalLink className={styles.linkIcon} />
              </span>
            </button>
          </Link>
          <Link
            href="https://vote.optimism.io/delegates/lamprosdao.eth"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <button className={styles.delegateNowButton}>
              <Image
                src="/governance/optimism.svg"
                alt="optimism logo"
                width={30}
                height={40}
              />
              <span className={styles.textBtn}>
                Delegate on Optimism{" "}
                <ExternalLink className={styles.linkIcon} />
              </span>
            </button>
          </Link>
          <Link
            href="https://www.tally.xyz/gov/uniswap/delegate/0xf070cd4b5ba73a6b6a939dde513f79862bffcd25"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <button className={styles.delegateNowButton}>
              <Image
                src="/governance/uniswap.svg"
                alt="superfluid logo"
                width={30}
                height={40}
              />
              <span className={styles.textBtn}>
                Delegate on Uniswap{" "}
                <ExternalLink className={styles.linkIcon} />
              </span>
            </button>
          </Link>
          <Link
            href="https://claim.superfluid.org/governance"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <button className={styles.delegateNowButton}>
              <Image
                src="/governance/superfluid.svg"
                alt="superfluid logo"
                width={30}
                height={40}
              />
              <span className={styles.textBtn}>
                Delegate on Superfluid{" "}
                <ExternalLink className={styles.linkIcon} />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VoteSection;
