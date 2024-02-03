"use client";
import { useRef } from "react";
import aboutImg from "../../assets/images/aboutUsImg.webp";
import vision from "../../assets/images/Vision.jpg";
import mission from "../../assets/images/Mission.jpg";
import blockchain from "../../assets/images/blockchain.png";
import blockchainImg from "../../assets/images/blockchain-img.png";
import idea from "../../assets/images/idea.png";
import technology from "../../assets/images/technology.png";
import website from "../../assets/images/website.png";
import aboutImg2 from "../../assets/images/about-img2.webp";
import journey from "../../assets/images/journey-img.png";
import journey1 from "../../assets/images/journey1.png";
import { Fade } from "react-reveal";
import aboutStyle from "../../styles/aboutUs.module.scss";
import Image from "next/image";
import ScrollBtn from "../scrollbarBtn";

export default function aboutPage() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  return (
    <div>
      <div className={aboutStyle.aboutUsMainBg}>
        <ScrollBtn
          section1Ref={section1Ref}
          section2Ref={section2Ref}
          section3Ref={section3Ref}
        />
        <div
          className={aboutStyle.aboutUsMain}
          ref={section1Ref}
          smooth={true}
          duration={600}
        >
          <section className={`${aboutStyle.section1AboutUs} py-sm-5 py-3`}>
            <div className={aboutStyle.aboutImgMainDiv}>
              <Image src={aboutImg} alt="" className={aboutStyle.aboutImg} />
            </div>

            <div
              className={`${aboutStyle["aboutUsSection1Card"]} px-sm-5 px-3`}
            >
              <div className={`${aboutStyle["aboutUsTitle"]} pb-3`}>
                About Us
              </div>

              <Fade duration={1500} delay={100}>
                <div className={aboutStyle.aboutSec1Box}>
                  <p className={aboutStyle.aboutUsSection1CardDesc}>
                    In the vibrant world of blockchain, Lampros Labs stands as a
                    beacon, illuminating the path for innovators, dreamers, and
                    builders. Founded with a profound vision to seamlessly merge
                    blockchain technology with mainstream applications, we've
                    steadily grown into a robust community hub.
                  </p>
                  <p className={aboutStyle.aboutUsSection1CardDesc}>
                    Our ethos is rooted in fostering growth – both of the
                    individual and the collective. With each project we support,
                    every developer we guide, and each event we host, we inch
                    closer to a future where blockchain isn't just a buzzword,
                    but an integral part of our digital tapestry.
                  </p>
                  <p className={aboutStyle.aboutUsSection1CardDesc}>
                    At Lampros Labs, it's not just about code and technology.
                    It's about the humans behind it. We prioritize well-being,
                    ensuring that our members thrive in an environment that
                    values creativity, innovation, and collaboration.
                  </p>
                  <p className={aboutStyle.aboutUsSection1CardDesc}>
                    Through the Lampros Labs Collective, we’re championing a
                    unique movement. A movement where public goods take center
                    stage, where developers receive unparalleled support, and
                    where blockchain technology finds its rightful place in
                    mainstream use.
                  </p>
                  <p className={aboutStyle.aboutUsSection1CardDesc}>
                    Join us in this monumental journey as we reshape the
                    contours of the digital realm, making Web3 more accessible,
                    inclusive, and influential.
                  </p>
                </div>
              </Fade>
            </div>
          </section>

          <section className={aboutStyle.section2AboutUs}>
            <div
              className={`${aboutStyle["aboutsecflexmain"]} justify-content-around py-lg-2 pb-lg-5`}
            >
              <div className="aboutsec-flex col-lg-5 col-10">
                <Fade bottom duration={1000} distance="50px">
                  <div className={aboutStyle.aboutsecVisionDiv}>
                    <div className={aboutStyle.aboutsecVision}>Vision</div>
                  </div>
                  <div className={aboutStyle.aboutsecPeraBox}>
                    <div className={aboutStyle.sec2AboutPeraVision}>
                      To be the global nexus where blockchain technology
                      seamlessly integrates into everyday life, creating a
                      decentralized and empowered future for all.
                    </div>
                  </div>
                </Fade>
              </div>
              <Fade bottom duration={1000} distance="50px">
                <div
                  className={`${aboutStyle["visionimg"]} col-5 d-none d-lg-block`}
                >
                  <Image src={vision}></Image>
                </div>
              </Fade>
            </div>

            <div
              className={`${aboutStyle["aboutsecflexmain"]} justify-content-around py-lg-2`}
            >
              <Fade bottom duration={1000} distance="50px">
                <div
                  className={`${aboutStyle["visionimg"]} col-5 d-none d-lg-block`}
                >
                  <Image src={mission}></Image>
                </div>
              </Fade>

              <div className="aboutsec-flex col-lg-5 col-10">
                <Fade bottom duration={1000} distance="50px">
                  <div className={aboutStyle.aboutsecVisionDiv}>
                    <div className={aboutStyle.aboutsecMission}>Mission</div>
                  </div>
                  <div className={aboutStyle.aboutsecPeraBox}>
                    <div className={aboutStyle.sec2AboutPeraMission}>
                      Lampros Labs is dedicated to cultivating trailblazing web3
                      leaders, amplifying open-source breakthroughs across
                      multiple blockchain terrains, and building a community
                      bound by shared growth and decentralized principles.
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </section>

          <section
            className={`${aboutStyle["section3AboutUs"]} pb-5 d-none d-lg-block`}
            ref={section2Ref}
            smooth={true}
            duration={600}
          >
            <div className={aboutStyle.aboutsec3flex1}>
              <div className={aboutStyle.sec3AboutImg1div}>
                <Image
                  className={aboutStyle.sec3AboutImg1}
                  src={blockchain}
                ></Image>
              </div>

              <div className={aboutStyle.sec3Aboutblockflex}>
                <p className={aboutStyle.sec3Aboutheading}>
                  The Blockchain Mainstream Movement
                </p>
                <p className={aboutStyle.sec3Aboutpera}>
                  Lampros Labs stands at the frontier of innovation. Our
                  mission? To propel all projects harnessing blockchain
                  technology to mainstream consciousness. When we talk about
                  blockchain, we're talking about the future, and we're here to
                  lead the charge.
                </p>
              </div>
            </div>

            <div className={`${aboutStyle["aboutimgflex"]} py-2`}>
              <div className={`${aboutStyle["aboutsec3hero"]} col-6`}>
                <Image src={aboutImg2} className={aboutStyle.aboutImg2}></Image>
                <div className={aboutStyle.sec3Imgheading}>Our Ethos</div>
              </div>
              <div className="py-3">
                <div className={`${aboutStyle["aboutsec3flex2"]} py-2`}>
                  <div className={aboutStyle.sec3AboutImg1div}>
                    <Image
                      className={aboutStyle.sec3AboutImg1}
                      src={idea}
                    ></Image>
                  </div>

                  <div className={aboutStyle.sec3Aboutblockflex}>
                    <div className={aboutStyle.sec3Aboutheading}>
                      Opportunities Await
                    </div>
                    <p className={aboutStyle.sec3Aboutpera}>
                      We're constantly on the lookout. Each day, established
                      blockchains present new chances to contribute, and we
                      ensure we're first in line to seize them.
                    </p>
                  </div>
                </div>

                <div className={`${aboutStyle["aboutsec3flex3"]} py-5`}>
                  <div className={aboutStyle.sec3AboutImg1div}>
                    <Image
                      className={aboutStyle.sec3AboutImg1}
                      src={blockchainImg}
                    ></Image>
                  </div>
                  <div className={aboutStyle.sec3Aboutblockflex}>
                    <div className={aboutStyle.sec3Aboutheading}>
                      Public Goods for a Shared Future
                    </div>
                    <p className={aboutStyle.sec3Aboutpera}>
                      In our pursuit of advancing the blockchain community,
                      we're dedicated to offering public goods. Together, we'll
                      build bridges and fill gaps, ensuring a flourishing
                      ecosystem.
                    </p>
                  </div>
                </div>

                <div className={`${aboutStyle["aboutsec3flex4"]} py-3`}>
                  <div className={aboutStyle.sec3AboutImg1div}>
                    <Image
                      className={aboutStyle.sec3AboutImg1}
                      src={technology}
                    ></Image>
                  </div>
                  <div className={aboutStyle.sec3Aboutblockflex}>
                    <div className={aboutStyle.sec3Aboutheading}>
                      Sustainability Meets Innovation
                    </div>
                    <p className={aboutStyle.sec3Aboutpera}>
                      Novel ideas need nurturing. Lampros Labs recognizes this
                      and is committed to pooling the necessary resources,
                      ensuring groundbreaking projects aren't just dreams, but
                      tangible realities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={aboutStyle.aboutsec3flex1}>
              <div className={aboutStyle.sec3AboutImg1div}>
                <Image
                  className={aboutStyle.sec3AboutImg1}
                  src={website}
                ></Image>
              </div>
              <div className={aboutStyle.sec3Aboutblockflex}>
                <div className={aboutStyle.sec3Aboutheading}>
                  Your Web3 Journey, Amplified
                </div>
                <p className={aboutStyle.sec3Aboutpera}>
                  Web3 can be uncharted territory for many. That's why we're
                  committed to supporting developers on this transformative
                  journey. With comprehensive training, enticing monetary
                  incentives, and an uplifting community, we ensure your passion
                  remains ignited.
                </p>
              </div>
            </div>
          </section>

          <section
            className="section3-aboutUs pb-5 d-lg-none"
            ref={section3Ref}
            smooth={true}
            duration={600}
          >
            <Fade bottom duration={2000} distance="20px">
              <div className={aboutStyle.sec3Imgheading}>Our Ethos</div>
            </Fade>

            <div style={{ position: "relative" }}>
              <Image src={aboutImg2} className={aboutStyle.aboutImg2}></Image>
            </div>
            <div className="py-5">
              <div className={aboutStyle.aboutsec3flex1Res}>
                <div className={aboutStyle.sec3Aboutblockflex}>
                  <div className={aboutStyle.sec3AboutImg1div}>
                    <Image
                      className={aboutStyle.sec3AboutImg1}
                      src={blockchain}
                    ></Image>
                  </div>

                  <div className="px-4">
                    <div className={aboutStyle.sec3Aboutheading}>
                      The Blockchain Mainstream Movement
                    </div>
                    <div className={aboutStyle.sec3Aboutpera}>
                      Lampros Labs stands at the frontier of innovation. Our
                      mission? To propel all projects harnessing blockchain
                      technology to mainstream consciousness. When we talk about
                      blockchain, we're talking about the future, and we're here
                      to lead the charge.
                    </div>
                  </div>
                </div>
              </div>

              <div className={aboutStyle.aboutsec3flex1Res}>
                <div className={aboutStyle.sec3Aboutblockflex}>
                  <div className={aboutStyle.sec3AboutImg1div}>
                    <Image
                      className={aboutStyle.sec3AboutImg1}
                      src={idea}
                    ></Image>
                  </div>

                  <div className="px-4">
                    <div className={aboutStyle.sec3Aboutheading}>
                      Opportunities Await
                    </div>
                    <div className={aboutStyle.sec3Aboutpera}>
                      We're constantly on the lookout. Each day, established
                      blockchains present new chances to contribute, and we
                      ensure we're first in line to seize them.
                    </div>
                  </div>
                </div>
              </div>

              <div className={aboutStyle.aboutsec3flex1Res}>
                <div className={aboutStyle.sec3Aboutblockflex}>
                  <div className={aboutStyle.sec3AboutImg1div}>
                    <Image
                      className={aboutStyle.sec3AboutImg1}
                      src={blockchainImg}
                    ></Image>
                  </div>

                  <div className="px-4">
                    <div className={aboutStyle.sec3Aboutheading}>
                      Public Goods for a Shared Future
                    </div>
                    <div className={aboutStyle.sec3Aboutpera}>
                      In our pursuit of advancing the blockchain community,
                      we're dedicated to offering public goods. Together, we'll
                      build bridges and fill gaps, ensuring a flourishing
                      ecosystem.
                    </div>
                  </div>
                </div>
              </div>

              <div className={aboutStyle.aboutsec3flex1Res}>
                <div className={aboutStyle.sec3Aboutblockflex}>
                  <div className={aboutStyle.sec3AboutImg1div}>
                    <Image
                      className={aboutStyle.sec3AboutImg1}
                      src={technology}
                    ></Image>
                  </div>

                  <div className="px-4">
                    <div className={aboutStyle.sec3Aboutheading}>
                      Sustainability Meets Innovation
                    </div>
                    <div className={aboutStyle.sec3Aboutpera}>
                      Novel ideas need nurturing. Lampros Labs recognizes this
                      and is committed to pooling the necessary resources,
                      ensuring groundbreaking projects aren't just dreams, but
                      tangible realities.
                    </div>
                  </div>
                </div>
              </div>
              <div className={aboutStyle.aboutsec3flex1Res}>
                <div className={aboutStyle.sec3Aboutblockflex}>
                  <div className={aboutStyle.sec3AboutImg1div}>
                    <Image
                      className={aboutStyle.sec3AboutImg1}
                      src={website}
                    ></Image>
                  </div>

                  <div className="px-4">
                    <div className={aboutStyle.sec3Aboutheading}>
                      Your Web3 Journey, Amplified
                    </div>
                    <div className={aboutStyle.sec3Aboutpera}>
                      Web3 can be uncharted territory for many. That's why we're
                      committed to supporting developers on this transformative
                      journey. With comprehensive training, enticing monetary
                      incentives, and an uplifting community, we ensure your
                      passion remains ignited.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className={`${aboutStyle["section4aboutUs"]} pb-sm-5`}
            ref={section3Ref}
            smooth={true}
            duration={600}
          >
            <Fade bottom duration={2000} distance="20px">
              <h1 className={`${aboutStyle["sec4aboutheading"]} pb-4`}>
                Our Web3 Journey
              </h1>
            </Fade>

            <div className="d-flex d-lg-inline">
              <div className="d-none d-lg-inline">
                <Image className={`${aboutStyle["union"]} hackathon`} src={journey}></Image>
              </div>

              <div
                className={`${aboutStyle["journeyimagediv"]} col-2 d-lg-none`}
              >
                <Image
                  className={`${aboutStyle["union1"]} hackathon`}
                  src={journey1}
                ></Image>
              </div>

              <div className={aboutStyle.aboutsec4mainboxflex}>
                <Fade duration={1000} delay={500}>
                  <div className={aboutStyle.aboutboxsec4}>
                    <div className={aboutStyle.aboutsec4boxheading}>
                      Hackathon Highlights
                    </div>
                    <div className={aboutStyle.aboutsec4boxpera}>
                      Lampros Labs stands tall in global hackathons, leaving
                      imprints across diverse blockchains.
                    </div>
                  </div>
                </Fade>
                <Fade duration={1000} delay={600}>
                  <div className={aboutStyle.aboutboxsec4}>
                    <div className={aboutStyle.aboutsec4boxheading}>
                      Journey from Web2 to Web3
                    </div>
                    <div className={aboutStyle.aboutsec4boxpera}>
                      We've guided 30+ developers through the transformation,
                      turning passion into web3 expertise.
                    </div>
                  </div>
                </Fade>
                <Fade duration={1000} delay={700}>
                  <div className={aboutStyle.aboutboxsec4}>
                    <div className={aboutStyle.aboutsec4boxheading}>
                      Opportunities at Lampros
                    </div>
                    <div className={aboutStyle.aboutsec4boxpera}>
                      For the new and the curious, Lampros is a beacon. Learn
                      and earn in the world of web3.
                    </div>
                  </div>
                </Fade>
                <Fade duration={1000} delay={800}>
                  <div className={aboutStyle.aboutboxsec4}>
                    <div className={aboutStyle.aboutsec4boxheading}>
                      Global Workshops
                    </div>
                    <div className={aboutStyle.aboutsec4boxpera}>
                      Broaden your horizons. Our sessions offer both global
                      exposure and skill refinement.
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
