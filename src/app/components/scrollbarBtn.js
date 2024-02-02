import React, { useState, useEffect, useRef } from "react";
import scroll from "../styles/scrollbar.module.scss";

function ScrollBtn({ section1Ref, section2Ref, section3Ref }) {
  const [showTopBtn, setShowTopBtn] = useState(true);
  const [activeSection, setActiveSection] = useState(1);

  const goToSection = (e, section) => {
    window.scrollTo({
      top: e.current.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const section1Top = section1Ref.current.offsetTop;
      const section2Top = section2Ref.current.offsetTop;
      const section3Top = section3Ref.current.offsetTop;

      if (scrollTop >= section1Top && scrollTop < section2Top) {
        setActiveSection(1);
      } else if (scrollTop >= section2Top && scrollTop < section3Top) {
        setActiveSection(2);
      } else if (scrollTop >= section3Top) {
        setActiveSection(3);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="top-to-btm">
      {showTopBtn && (
        <div style={{ height: "100vh", display: "flex", position: "fixed" }}>
          <div style={{ flexGrow: "0.3" }}></div>
          <div className={scroll.scrollmain}>
            <input
              type="radio"
              name="flexRadioNoLabel"
              id="radioNoLabel01"
              className="icon-position icon-style radio-color"
              onChange={() => goToSection(section1Ref, 1)}
              checked={activeSection === 1}
            />

            <input
              type="radio"
              name="flexRadioNoLabel"
              id="radioNoLabel02"
              className="icon-position2 icon-style"
              onChange={() => goToSection(section2Ref, 2)}
              checked={activeSection === 2}
            />

            <input
              type="radio"
              name="flexRadioNoLabel"
              id="radioNoLabel03"
              className="icon-position3 icon-style"
              onChange={() => goToSection(section3Ref, 3)}
              checked={activeSection === 3}
            />
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
}

export default ScrollBtn;
