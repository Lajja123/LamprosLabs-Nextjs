"use client";
import React, { useState } from "react";
import { MdExpandMore, MdExpandLess, MdOutlineExpandMore } from "react-icons/md";
import styles from "../../styles/vote.module.scss";
import Image from "next/image";

const VoteSection = () => {
  const [expandedItem, setExpandedItem] = useState(0);
  const [selectedProtocol, setSelectedProtocol] = useState(null);

  const protocols = [
    {
      name: "arbitrum",
      icon: "/governance/arbitrum.svg",
    },
    {
      name: "optimism",
      icon: "/governance/optimism.svg",
    },
    {
      name: "uniswap",
      icon: "/governance/uniswap.svg",
    },
    {
      name: "gnosis",
      icon: "/governance/gnosis.svg",
    },
  ];

  const proposals = [
    {
      id: 1,
      protocol: "arbitrum",
      icon: "/governance/arbitrum.svg",
      title: "ARB Staking: Unlock ARB Utility and Align Governance",
      tag: "Grants",
      result: "For",
      content:
        "We vote 'yes' to support activating the additional bps fee tiers as a time-bound experiment. By implementing these for a defined period, we can gather valuable data on their impact on trading volume, revenue, and market share. If successful, this experiment could inform future strategies not just on Base, but potentially on other chains as well. However, our support for this snapshot does not automatically extend to an on-chain vote. We expect to see more comprehensive research conducted and clear answers about the plan and details of community remaining questions.",
      voter: {
        icon: "🌐",
        name: "Curia - curia-delegate.eth",
        date: "On Aug 9, 2024",
      },
    },
    {
      id: 2,
      protocol: "optimism",
      icon: "/governance/optimism.svg",
      title: "Upgrade Proposal #10: Granite Network Upgrade",
      tag: "Network Upgrade",
      result: "For",
      content:
        "We vote 'yes' to support activating the additional bps fee tiers as a time-bound experiment. By implementing these for a defined period, we can gather valuable data on their impact on trading volume, revenue, and market share. If successful, this experiment could inform future strategies not just on Base, but potentially on other chains as well. However, our support for this snapshot does not automatically extend to an on-chain vote. We expect to see more comprehensive research conducted and clear answers about the plan and details of community remaining questions.",
      voter: {
        icon: "🌐",
        name: "Curia - curia-delegate.eth",
        date: "On Aug 23, 2024",
      },
    },
    {
      id: 3,
      protocol: "uniswap",
      icon: "/governance/uniswap.svg",
      title:
        "[Temp Check] Activate 2, 3, 4 bps fee tiers on Uniswap v3 on Base",
      tag: "Protocol Upgrade",
      result: "For",
      content:
        "We vote 'yes' to support activating the additional bps fee tiers as a time-bound experiment. By implementing these for a defined period, we can gather valuable data on their impact on trading volume, revenue, and market share. If successful, this experiment could inform future strategies not just on Base, but potentially on other chains as well. However, our support for this snapshot does not automatically extend to an on-chain vote. We expect to see more comprehensive research conducted and clear answers about the plan and details of community remaining questions.",
      voter: {
        icon: "🌐",
        name: "Curia - curia-delegate.eth",
        date: "On Aug 19, 2024",
      },
    },
    {
      id: 4,
      protocol: "gnosis",
      icon: "/governance/gnosis.svg",
      title:
        "GIP-110: Should the Gnosis DAO create and fund a Gnosis Pay rewards program with 10k GNO?",
      tag: "Grant",
      result: "For",
      content:
        "We vote 'yes' to support activating the additional bps fee tiers as a time-bound experiment. By implementing these for a defined period, we can gather valuable data on their impact on trading volume, revenue, and market share. If successful, this experiment could inform future strategies not just on Base, but potentially on other chains as well. However, our support for this snapshot does not automatically extend to an on-chain vote. We expect to see more comprehensive research conducted and clear answers about the plan and details of community remaining questions.",
      voter: {
        icon: "🌐",
        name: "Curia - curia-delegate.eth",
        date: "On Aug 9, 2024",
      },
    },
    {
      id: 5,
      protocol: "arbitrum",
      icon: "/governance/arbitrum.svg",
      title: "Should the DAO Create COI & Self Voting Policies?",
      tag: "Policy Update",
      result: "For",
      content:
        "We vote 'yes' to support activating the additional bps fee tiers as a time-bound experiment. By implementing these for a defined period, we can gather valuable data on their impact on trading volume, revenue, and market share. If successful, this experiment could inform future strategies not just on Base, but potentially on other chains as well. However, our support for this snapshot does not automatically extend to an on-chain vote. We expect to see more comprehensive research conducted and clear answers about the plan and details of community remaining questions.",
      voter: {
        icon: "🌐",
        name: "Curia - curia-delegate.eth",
        date: "On Aug 16, 2024",
      },
    },
  ];

  const filteredProposals = selectedProtocol
    ? proposals.filter((proposal) => proposal.protocol === selectedProtocol)
    : proposals;

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
                selectedProtocol === protocol.name ? styles.active : ''
              }`}            >
              <Image
                src={protocol.icon}
                alt={`${protocol.name} icon`}
                width={30}
                height={30}
              />
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
                <span className={styles.contentTag}>{proposal.tag}</span>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.result}>
                <span className={styles.r1}>Result</span>
                <span className={styles.r2}>{proposal.result}</span>
              </div>
              {expandedItem === index ? (
                <MdExpandLess className={styles.arrowyellow} />
              ) : (
                <MdOutlineExpandMore className={styles.arrowwhite} />
              )}
            </div>
          </div>

          {expandedItem === index && proposal.content && (
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

                  <p className={styles.comment}>{proposal.content}</p>
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
