"use client";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";
import logo from "../assets/images/logo.png";
import discord from "../assets/images/discord.png";
import twitter from "../assets/images/twitter.png";
import mirror from "../assets/images/mirror.png";
import telegram from "../assets/images/telegram.png";
import footerStyles from "../styles/footer.module.scss"; // Updated import

export default function Footer() {
  const currentYear = new Date().getFullYear();
  // Updated function name to start with a capital letter
  const navRef = useRef();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can use "auto" for an instant scroll
    });
  };

  return (
    <div className={footerStyles.footerMain}>
      <div className={footerStyles.footerFlex1}>
        <div className={footerStyles.footerLogoMain}>
          <Link href="/">
            <Image
              src={logo}
              className={footerStyles.footerLogo}
              onClick={scrollToTop}
              alt=""
            ></Image>
          </Link>
        </div>
        <footer ref={navRef} className={footerStyles.footerNavbar}>
          <Link
            href="/about-us"
            activeClassName={footerStyles.active}
            onClick={scrollToTop}
            className={footerStyles.footerLink}
          >
            <span>About Us</span>
          </Link>
          <Link
            href="/programs/hackathon"
            activeClassName={footerStyles.active}
            onClick={scrollToTop}
            className={footerStyles.footerLink}
          >
            Hackathon
          </Link>
          <Link
            href="/dao-roadmap"
            activeClassName={footerStyles.active}
            onClick={scrollToTop}
            className={footerStyles.footerLink}
          >
            DAO Roadmap
          </Link>
        </footer>
      </div>
      {/* <div className={footerStyles.footer-border}></div> */}
      <div className={footerStyles.footerIconMain}>
        <Link href="https://twitter.com/lamproslabsdao" target="_blank">
          <Image
            src={twitter}
            className={footerStyles.footerIcon}
            alt=""
          ></Image>
        </Link>

        <Link href="https://discord.gg/5jxNq8bDt2" target="_blank">
          <Image
            src={discord}
            className={footerStyles.footerIcon}
            alt=""
          ></Image>
        </Link>

        <Link href="https://t.me/lamproslabsdao" target="_blank">
          <Image
            src={telegram}
            className={footerStyles.footerIcon}
            alt=""
          ></Image>
        </Link>

        <Link
          href="https://mirror.xyz/0xF362eaCAf0a28651d6f6218e5fD0Faf360fa779F"
          target="_blank"
        >
          <Image
            src={mirror}
            className={footerStyles.footerIcon}
            alt=""
          ></Image>
        </Link>
      </div>
      <p className={footerStyles.footerCopyright}>
        Copyright © {currentYear} Lampros labs | All rights reserved
      </p>
    </div>
  );
}
