import React from "react";
import governance from "@/app/assets/images/governance.png";
import styles from "../../styles/governance.module.scss";
import Image from "next/image";
import { FaFire } from "react-icons/fa";
import { FaShapes } from "react-icons/fa6";
import { TbChecklist } from "react-icons/tb";
import VoteSection from "./VoteSection";

function GovernanceSection() {
  return (
    <div className={styles.mainsection}>
      <div className={styles.bgimage}>
        <Image src={governance} alt="ring" className={styles.img}></Image>
      </div>
      <div className={styles.maindiv}>
        <h1 className={styles.mainheading}>GOVERNANCE</h1>
        <p className={styles.info}>
        Lampros DAO is an open community of builders and governance enthusiasts committed to transparency, decentralization, and inclusivity. Through active participation in governance and collaborative efforts, we strive to create a more transparent, inclusive, and resilient web3 landscape
        </p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <p className={styles.icon}>
              <FaFire />
            </p>
            <div className={styles.sideDiv}>
              <h3 className={styles.heading2}>$1,000,000+</h3>
              <h4 className={styles.subheading}>Voting power value</h4>
            </div>
          </div>

          <div className={styles.card}>
            <p className={styles.icon}>
              <FaShapes />
            </p>
            <div className={styles.sideDiv}>
              <h3 className={styles.heading2}>10</h3>
              <h4 className={styles.subheading}>Protocols engaged</h4>
            </div>
          </div>

          <div className={styles.card}>
            <p className={styles.icon}>
              <TbChecklist />
            </p>
            <div className={styles.sideDiv}>
              <h3 className={styles.heading2}>350+</h3>
              <h4 className={styles.subheading}>Voted proposals</h4>
            </div>
          </div>
        </div>
      </div>

      <VoteSection />
    </div>
  );
}

export default GovernanceSection;
