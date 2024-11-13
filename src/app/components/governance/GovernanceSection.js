import React from "react";
import governance from "@/app/assets/images/governance.png";
import styles from "../../styles/governance.module.scss";
import Image from "next/image";

function governanceSection() {
  return (
    <div className={styles.aboutUsMainBg}>
      <div
        className={styles.aboutUsMain}
        // ref={section1Ref}
        smooth={true}
        duration={600}
      >
        <section className={`${styles.section1AboutUs} py-sm-5 py-3`}>
          <div className={styles.aboutImgMainDiv}>
            <Image src={governance} alt="" className={styles.aboutImg} />
          </div>

          <div className={`${styles["aboutUsSection1Card"]} px-sm-5 px-3`}>
            <div className={`${styles["aboutUsTitle"]} pb-3`}>About Us</div>

            {/* <Fade duration={1500} delay={100}> */}
            <div className={styles.aboutSec1Box}>
              <p className={styles.aboutUsSection1CardDesc}>
                In the vibrant world of blockchain, Lampros DAO stands as a
                beacon, illuminating the path for innovators, dreamers, and
                builders. Founded with a profound vision to seamlessly merge
                blockchain technology with mainstream applications, we've
                steadily grown into a robust community hub.
              </p>
            </div>
            {/* </Fade> */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default governanceSection;
