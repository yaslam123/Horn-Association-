"use client"; // This directive makes sure the component runs on the client side

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CaseOne() {
  const [cases, setCases] = useState([
    {
      delay: ".1s",
      subTitleImg: "/assets/img/icon/sec-title-img1.png",
      subTitleText: "latest case studies",
      title: "recent case studies showcase for our happy victim",
      imgSrc: "/assets/img/project/case-v1-img1.jpg",
      category: "business / public",
      caseTitle: "public company case",
      caseLink: "/case-details",
    },
    {
      delay: ".2s",
      imgSrc: "/assets/img/project/case-v1-img2.jpg",
      category: "Family / domestic",
      caseTitle: "Family violence case",
      caseLink: "/case-details",
    },
    {
      delay: ".3s",
      imgSrc: "/assets/img/project/case-v1-img3.jpg",
      category: "corporate / tax",
      caseTitle: "business tax consultancy",
      caseLink: "/case-details",
      buttonText: "all project",
      buttonLink: "/case",
    },
    {
      delay: ".4s",
      imgSrc: "/assets/img/project/case-v1-img4.jpg",
      category: "Family / domestic",
      caseTitle: "marriage agreement",
      caseLink: "/case-details",
    },
  ]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const Isotope = require("isotope-layout");

      const masonryLayout = document.querySelector(".masonary-layout");
      const postFilter = document.querySelector(".post-filter");

      if (masonryLayout) {
        new Isotope(masonryLayout, {
          layoutMode: "masonry",
        });
      }

      if (postFilter) {
        postFilter.querySelectorAll("li .filter-text").forEach((filterText) => {
          filterText.addEventListener("click", (event) => {
            event.preventDefault();
            const Self = event.currentTarget;
            const selector = Self.parentElement.getAttribute("data-filter");
            postFilter.querySelectorAll("li").forEach((li) => li.classList.remove("active"));
            Self.parentElement.classList.add("active");

            new Isotope(masonryLayout, {
              filter: selector,
              animationOptions: {
                duration: 500,
                easing: "linear",
                queue: false,
              },
            });
          });
        });

        // Dynamic filter counter logic
        const activeFilterItem = postFilter.querySelectorAll("li");
        activeFilterItem.forEach((item) => {
          const filterElement = item.getAttribute("data-filter");
          const count = masonryLayout.querySelectorAll(filterElement).length;
          item.querySelector(".filter-text").innerHTML += `<span class="count">${count}</span>`;
        });
      }
    }
  }, []);

  return (
    <>
      {/* Start Case One */}
      <section className="case-one">
        <div className="container">
          <div className="row filter-layout masonary-layout">
            {cases.map((caseItem, index) => (
              <div
                key={index}
                className={`col-xl-6 col-lg-6 wow fadeInUp`}
                data-wow-delay={caseItem.delay}
              >
                <div className={`case-one__single ${caseItem.style || ""}`}>
                  {caseItem.subTitleImg && (
                    <div className="sec-title">
                      <div className="sub-title">
                        <div className="icon">
                          <img src={caseItem.subTitleImg} alt="Section Title Icon" />
                        </div>
                        <div className="text">
                          <p>{caseItem.subTitleText}</p>
                        </div>
                      </div>
                      <h2 className="">{caseItem.title.split(" <br>").map((text, i) => (
                        <span key={i}>
                          {text}
                          <br />
                        </span>
                      ))}
                      </h2>
                    </div>
                  )}
                  <div className="case-one__single-img">
                    <div className="inner">
                      <img src={caseItem.imgSrc} alt={caseItem.caseTitle} />
                      <div className="overlay-icon">
                        <Link href={caseItem.caseLink}>
                          <span className="icon-icon-8"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="case-one__single-content">
                    <p>{caseItem.category}</p>
                    <h2>
                      <Link href={caseItem.caseLink}>{caseItem.caseTitle}</Link>
                    </h2>
                    {caseItem.buttonText && (
                      <div className="btn-box">
                        <Link className="thm-btn" href={caseItem.buttonLink}>
                          {caseItem.buttonText}
                          <span className="thm-btn__icon">
                            <i className="icon-icon-8"></i>
                          </span>
                          <span className="thm-btn__hover-group">
                            <span className="thm-btn__hover thm-btn__hover--1"></span>
                            <span className="thm-btn__hover thm-btn__hover--2"></span>
                            <span className="thm-btn__hover thm-btn__hover--3"></span>
                            <span className="thm-btn__hover thm-btn__hover--4"></span>
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Case One */}
    </>
  );
}
