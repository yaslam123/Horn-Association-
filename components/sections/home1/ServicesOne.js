"use client"; // Ensures the component runs on the client side

import Link from "next/link";
import { useState } from "react";

export default function ServicesOne() {
  // State for dynamic data (e.g., dynamic images, text, links)
  const [servicesContent, setServicesContent] = useState({
    backgroundImage: "/assets/img/background/services-v1-bg.jpg",
    sectionTitleIcon: "/assets/img/icon/sec-title-img1.png",
    sectionTitleText: "popular services",
    sectionMainTitle: "Everyone deserves legal best assistance",
    services: [
      {
        id: 1,
        title: "Corporate Legal Services",
        description:
          "Expert legal support for business incorporation, governance, and regulatory compliance.",
        link: "corporate-law",
      },
      {
        id: 2,
        title: "Foreign Investment Advisory",
        description:
          "Helping investors navigate Somalia’s legal landscape with tailored investment solutions.",
        link: "foreign-investment",
      },
      {
        id: 3,
        title: "Energy & Natural Resources Law",
        description:
          "Legal advisory for oil, gas, and renewable energy projects, ensuring compliance and risk management.",
        link: "energy-law",
      },
      {
        id: 4,
        title: "Maritime Law & Shipping Regulations",
        description:
          "Providing legal guidance for vessel registration, maritime disputes, and international shipping laws.",
        link: "maritime-law",
      },
    ],
  });

  return (
    <>
      {/* Start Services One */}
      <section className="services-one">
        <div
          className="services-one__bg wow fadeInRight"
          data-wow-delay="0ms"
          data-wow-duration="1500ms"
          style={{ backgroundImage: `url(${servicesContent.backgroundImage})` }}
        ></div>
        <div className="container">
          <div className="services-one__content">
            <div className="sec-title">
              <div className="sub-title">
                <div className="icon">
                  <img
                    src={servicesContent.sectionTitleIcon}
                    alt="Section Icon"
                  />
                </div>
                <div className="text">
                  <p>{servicesContent.sectionTitleText}</p>
                </div>
              </div>
              <h2>{servicesContent.sectionMainTitle}</h2>
            </div>

            <ul className="services-one__content-list">
              {servicesContent.services.map((service) => (
                <li key={service.id}>
                  <div className="content-box">
                    <div className="count-box">
                      <h2>{service.id.toString().padStart(2, "0")}/</h2>
                    </div>
                    <div className="text-box">
                      <h2>
                        <Link href={service.link}>{service.title}</Link>
                      </h2>
                      <p>{service.description}</p>
                    </div>
                  </div>

                  <div className="btn-box">
                    <Link href={service.link}>
                      read More <span className="icon-icon-8"></span>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* End Services One */}
    </>
  );
}
