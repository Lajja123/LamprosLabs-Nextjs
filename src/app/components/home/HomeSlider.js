"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrow from "../../assets/images/right-arrow.png";
import homeStyle from "../../styles/home.module.scss";

const HomeSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleBeforeChange = (current, next) => {
        setActiveIndex(next);
    };

    const slickSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        dots: true,
        speed: 300,
        centerPadding: "0px",
        infinite: true,
        autoplaySpeed: 3000,
        autoplay: false,
        beforeChange: handleBeforeChange,

    };

    const slides = [
        {
            title: "Our Journey & Impact",
            description: "From leading research projects to becoming an Active Delegate in DAOs, Lampros DAO has played a vital role in Web3 governance.",
            link: "/about-us",
            buttonText: "Know more"
        },
        {
            title: "Governance & Research",
            description: "Driving decentralized governance through research, proposal discussions, and active participation in Arbitrum DAO and Optimism Collective.",
            link: "/governance",
            buttonText: "Join Us"
        },
        {
            title: "Workshops & Education",
            description: "Empowering Web3 contributors through workshops, seminars, and hackathons. Learn, build, and engage with DAOs like Arbitrum & Optimism.",
            link: "/arbitrum",
            buttonText: "Know more"
        }
    ];

    return (
        <section className={homeStyle.homepageSecion3MainTemplate}>
            <Slider {...slickSettings} className={homeStyle.slickslider}>
                {slides.map((slide, index) => (
                    <div key={index} className={activeIndex === index ? "slick-active" : ""}>
                        <div className={homeStyle.section3Card}>
                            <h1 className={homeStyle.section3CardTitle}>{slide.title}</h1>
                            <h3 className={homeStyle.section3CardDesc}>{slide.description}</h3>
                            <Link href={slide.link}>
                                <button className={homeStyle.section3CardButton} id={homeStyle.button7}>
                                    <div id={homeStyle.dubArrow}>
                                        <Image src={arrow} alt="" />
                                    </div>
                                    {slide.buttonText}
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default HomeSlider; 