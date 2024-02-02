// import { useRef, useEffect, useState } from "react";
import daoimg1 from "../assets/images/daoimg1.webp";
import daoimg2 from "../assets/images/daoimg2.png";
import daoimg3 from "../assets/images/daoimg3.png";
import daoimg4 from "../assets/images/daoimg4.png";
import daoimg5 from "../assets/images/daoimg5.png";
import daoimg6 from "../assets/images/daoimg6.png";
import daoimg7 from "../assets/images/daoimg7.png";
import daoimg8 from "../assets/images/daoimg8.png";
import daoFooterImg from "../assets/images/dao-page-footer-img.png";
import daoline from "../assets/images/daoline.png";
// import { Fade } from "react-reveal";
import daoStyle from "../styles/dao.module.scss";
import Image from "next/image";
// import ScrollBtn from "../components/scrollbarBtn";

export default function daoPage() {
  // const section1Ref = useRef(null);
  // const section2Ref = useRef(null);
  // const section3Ref = useRef(null);
  // const [opacity, setOpacity] = useState(1);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const newOpacity = 1 - scrollPosition / 1000; // Adjust 500 based on when you want the opacity change to occur

  //     if (newOpacity >= 0) {
  //       setOpacity(newOpacity);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className={daoStyle.daomainbg}>
      {/* <ScrollBtn
        section1Ref={section1Ref}
        section2Ref={section2Ref}
        section3Ref={section3Ref}
      /> */}
      <div className="dao-roadmap">
        <div
          className={`${daoStyle["daosec1main"]} d-none d-md-flex`}
          // ref={section1Ref}
          smooth={true}
          duration={600}
        >
          {/* <Fade bottom duration={1000} distance="20px"> */}
          <div className={daoStyle.daosec1flex1}>
            <div className={daoStyle.daoroadmap2}>DAO Roadmap</div>
            <div className={daoStyle.weEnvisionA}>
              We envision a future where Lampros Labs transforms into a
              decentralized autonomous organization (DAO), a nexus where
              collective intelligence drives innovation and growth. Our roadmap
              sketches the pathway to this transformation, highlighting the
              pivotal milestones that will shape our decentralized future. Here,
              we outline the structured phases that will lead us to become a
              more collaborative, autonomous, and community-driven entity.
            </div>
          </div>
          {/* </Fade> */}

          <div className={daoStyle.daosec1flex2}>
            <Image
              className={daoStyle.illustration141}
              alt=""
              src={daoimg1}
              style={{ opacity }}
            />
            <Image
              className={daoStyle.mobileImg7}
              alt=""
              src={daoimg7}
              style={{ opacity }}
            />
          </div>
        </div>

        {/* <Fade bottom duration={1000} distance="20px"> */}
        <div
          className={`${daoStyle["lamproslabsroadmapcontainer"]} for-laptops d-none d-md-block`}
        >
          <div smooth={true} duration={200}>
            Lampros Labs <span className={daoStyle.roadmap}>Roadmap</span>
          </div>
          <div>to Becoming a DAO</div>
        </div>
        {/* </Fade> */}
        <div className="d-md-none">
          <div className={daoStyle.daosec1flex1}>
            {/* <Fade bottom duration={1000} distance="20px"> */}
            <div className={daoStyle.daoroadmap2}>DAO Roadmap</div>
            <div className={daoStyle.weEnvisionA}>
              We envision a future where Lampros Labs transforms into a
              decentralized autonomous organization (DAO), a nexus where
              collective intelligence drives innovation and growth. Our roadmap
              sketches the pathway to this transformation, highlighting the
              pivotal milestones that will shape our decentralized future. Here,
              we outline the structured phases that will lead us to become a
              more collaborative, autonomous, and community-driven entity.
            </div>
            {/* </Fade> */}
            <Image className={daoStyle.mobiledaoImg} alt="" src={daoimg7} />
          </div>
        </div>

        <div className="for-mobiles d-md-none">
          {/* <Fade bottom duration={1000} distance="50px"> */}
          <div className={daoStyle.lamproslabsroadmapcontainer}>
            <div>
              Lampros Labs <br />
              <span className={daoStyle.roadmap}>Roadmap</span> TO <br />
              Becoming a dao
            </div>
            <div className="d-md-none">
              <Image
                className={daoStyle.mobileheadingleftImage}
                alt=""
                src={daoimg8}
              />
            </div>
          </div>
          {/* </Fade> */}
        </div>

        <div
          className={daoStyle.daosec2main}
          // ref={section3Ref}
          smooth={true}
          duration={600}
        >
          <Image className={daoStyle.daoroadmapInner} alt="" src={daoline} />
          <div className="dao-sec2-first">
            <Image className="design311" alt="" src={daoimg2} />
            <Image
              className="design-32-1 d-none d-md-block"
              alt=""
              src={daoimg3}
            />

            <div
              className={`${daoStyle["daobox1main"]} ${daoStyle["daoboxstyleleft"]} `}
            >
              <div className={daoStyle.daoboxheading}>Foundation Phase</div>
              <div>
                <ul
                  className={`${daoStyle["daoboxpera"]} ${daoStyle["customlist"]} `}
                >
                  <li className={daoStyle.daoLi}>DAO Concept Introduction</li>
                  <li className={daoStyle.daoLi}>Community Brainstorming</li>
                  <li className={daoStyle.daoLi}>Feasibility Analysis</li>
                </ul>
              </div>
            </div>

            <div
              className={`${daoStyle["daobox2main"]} ${daoStyle["daoboxstyleleft"]} `}
            >
              <div className={daoStyle.daoboxheading}>
                Development & Design Phase
              </div>
              <div>
                <ul
                  className={`${daoStyle["daoboxpera"]} ${daoStyle["customlist"]} `}
                >
                  <li className={daoStyle.daoLi}>DAO Framework Formulation</li>
                  <li className={daoStyle.daoLi}>
                    Technical Architecture Design
                  </li>
                  <li className={daoStyle.daoLi}>Pilot DAO Launch</li>
                </ul>
              </div>
            </div>

            <div
              className={`${daoStyle["daobox3main"]} ${daoStyle["customlist"]} ${daoStyle["daoboxstyleleft"]} `}
            >
              <div className={daoStyle.daoboxheading}>Implementation Phase</div>
              <div>
                <ul
                  className={`${daoStyle["daoboxpera"]} ${daoStyle["customlist"]} `}
                >
                  <li className={daoStyle.daoLi}>Governance Token Issuance</li>
                  <li className={daoStyle.daoLi}>Infrastructure Integration</li>
                  <li className={daoStyle.daoLi}>Community Education</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="dao-sec2-second">
            <div
              className={`${daoStyle["daobox4main"]} ${daoStyle["daoboxstyleright"]} `}
            >
              <div className={daoStyle.daoboxheading}>
                Iteration & Enhancement Phase
              </div>
              <div>
                <ul className={daoStyle.daoboxpera1}>
                  <li className={daoStyle.daoLi}>
                    Community Feedback and Adjustments
                  </li>
                  <li className={daoStyle.daoLi}>
                    Continuous Learning Modules
                  </li>
                  <li className={daoStyle.daoLi}>
                    Proposal Mechanisms Initiated
                  </li>
                </ul>
              </div>
            </div>

            <div
              className={`${daoStyle["daobox5main"]} ${daoStyle["daoboxstyleright"]} `}
            >
              <div className={daoStyle.daoboxheading}>
                Full Decentralization Phase
              </div>
              <div>
                <ul className={daoStyle.daoboxpera1}>
                  <li className={daoStyle.daoLi}>
                    Complete Operational Transition to DAO
                  </li>
                  <li className={daoStyle.daoLi}>
                    Decentralized Revenue Distribution
                  </li>
                  <li className={daoStyle.daoLi}>
                    Community-Led Growth and Innovation
                  </li>
                </ul>
              </div>
            </div>

            <div
              className={`${daoStyle["daobox6main"]} ${daoStyle["daoboxstyleright"]} `}
            >
              <div className={daoStyle.daoboxheading}>
                Review & Future Prospects Phase
              </div>
              <div>
                <ul className={daoStyle.daoboxpera1}>
                  <li className={daoStyle.daoLi}>
                    Periodic Operational Review
                  </li>
                  <li className={daoStyle.daoLi}>Future Goal Outlining</li>
                  <li className={daoStyle.daoLi}>
                    Staying Ahead in the Web3 Evolution
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <Image
                className={`${daoStyle["daorightImg1"]}  d-none d-md-block`}
                alt=""
                src={daoimg4}
              />
            </div>
            <div>
              <Image
                className={`${daoStyle["daorightImg2"]}  d-none d-md-block`}
                alt=""
                src={daoimg5}
              />
            </div>
            <div>
              <Image
                className={`${daoStyle["daorightImg3"]}  d-none d-md-block`}
                alt=""
                src={daoimg6}
              />
            </div>
            <div className="d-md-none">
              <Image
                className={daoStyle.daofooterImg}
                alt=""
                src={daoFooterImg}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export const metadata = {
  title: "Dao Page",
  description: "Dao Page Description...",
  openGraph: {
    title: "Next.js About Page",
    description: "The React Framework for the Web",
    url: "https://lampros-labs-nextjs-new.vercel.app/dao-roadmap",
    type: "website",
    siteName: "Next.js",
    images: [
      {
        url: "https://www.kresko.fi/apple-touch-icon.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://www.kresko.fi/apple-touch-icon.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
  },
};
