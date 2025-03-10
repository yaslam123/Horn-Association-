"use client";  // Add this line at the top

import Link from "next/link";
import { useState } from "react";

export default function Banner() {
    // State for dynamic data (e.g., dynamic images or text)
    const [bannerContent, setBannerContent] = useState({
        description: "Fill unto likeness had shall is herb air set midst land in meat green had creepeth days bearing winged together malea moving also two replenish spirit set moving. All moving give form deep upon grass man it fread creepeth moveth.",
        socialLinks: [
            { icon: "icon-icon-1", url: "/link1" },
            { icon: "icon-icon-2", url: "/link2" },
            { icon: "icon-icon-3", url: "/link3" },
            { icon: "icon-icon-4", url: "/link4" }
        ],
        backgroundImage: "/assets/img/pattern/banner-v1-pattern.png",
        bannerImage: "/assets/img/background/banner-v1-bg.jpg"
    });

    return (
        <>
            {/* Start Banner One */}
            <section className="banner-one" id="home">
                <div className="banner-one__content">
                    <div className="banner-one__social-links">
                        <div className="banner-one__social-links-inner">
                            {bannerContent.socialLinks.map((link, index) => (
                                <Link href={link.url} key={index}>
                                    <span className={link.icon}></span>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div 
                        className="banner-one__content-pattern"
                        style={{ backgroundImage: `url(${bannerContent.backgroundImage})` }}
                    ></div>
                    <div className="container">
                        <div className="banner-one__content-inner">
                            <div className="banner-one__content-left">
                                <h2>BEST LAW FIRM <br /> SINCE 1980</h2>
                            </div>
                            <div className="banner-one__content-right">
                                <p>{bannerContent.description}</p>
                                <div className="btn-box">
                                    <Link href="#">
                                        Learn More <span className="icon-icon-8"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="banner-one__img">
                    <div 
                        className="banner-one__img-bg" 
                        style={{ backgroundImage: `url(${bannerContent.bannerImage})` }}
                    ></div>
                </div>
            </section>
            {/* End Banner One */}
        </>
    );
}
