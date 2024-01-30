import React, { useState } from "react";
import plus from "../../assets/images/plus.png";
import minus from "../../assets/images/minus.png";
import Image from "next/image";
import homeStyle from "../../styles/home.module.scss";

function FAQ({ question, answer }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={homeStyle.item}>
      <div className={homeStyle.faqQueMain}>
        <div className={homeStyle.faqQuestion} onClick={toggleExpanded}>
          <Image
            src={expanded ? minus : plus}
            className={`accordionIcon ${expanded ? "expanded" : "collapsed"}`}
          />
          <div className={homeStyle.accordionQue}>{question}</div>
        </div>

        {expanded && <div className={homeStyle.accordionAns}>{answer}</div>}
      </div>
    </div>
  );
}

export default FAQ;
