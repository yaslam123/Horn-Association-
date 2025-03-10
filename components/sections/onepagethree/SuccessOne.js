"use client";

import React from 'react';

export default function SuccessOne() {
  const content = {
    subTitle: "Skill Percentage",
    mainTitle: "Delivering solution by expert lawyer",
    description:
      "Likeness had fruit moved herb you earth sea dry you're creature own man give It fish cattle they're male creepeth give male",
    images: {
      shape1: "/assets/img/shape/success-v1-shape1.png",
      icon: "/assets/img/icon/sec-title-img1.png",
      mainImg: "/assets/img/resource/success-v1-img1.jpg",
    },
  };

  return (
    <>
      {/* Start Success Style2 */}
      <section className="success-one style2">
        <div className="container">
          <div className="row">
            {/* Start Success One Content */}
            <div className="col-xl-5">
              <div className="success-one__content">
                <div className="sec-title">
                  <div className="sub-title">
                    <div className="icon">
                      <img
                        src={content.images.icon}
                        alt="Subtitle Icon"
                      />
                    </div>
                    <div className="text">
                      <p>{content.subTitle}</p>
                    </div>
                  </div>
                  <h2>
                    {content.mainTitle.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </h2>
                </div>

                <div className="success-one__content-text">
                  <p>{content.description}</p>
                </div>

                <div className="success-one__progress">
                    <div className="success-one__progress-single">
                        <div className="title">
                            <p>Family Law</p>
                        </div>
                        <div className="bar">
                            <div className="bar-inner-one count-bar" data-percent="90%">
                                <div className="count-text">90%</div>
                            </div>
                        </div>
                    </div>

                    <div className="success-one__progress-single">
                        <div className="title">
                            <p>Business Law</p>
                        </div>
                        <div className="bar">
                            <div className="bar-inner-two count-bar" data-percent="80%">
                                <div className="count-text">80%</div>
                            </div>
                        </div>
                    </div>

                    <div className="success-one__progress-single mb0">
                        <div className="title">
                            <p>Crime Law</p>
                        </div>
                        <div className="bar">
                            <div className="bar-inner-three count-bar" data-percent="90%">
                                <div className="count-text">90%</div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            {/* End Success One Content */}

            {/* Start Success One Img */}
            <div className="col-xl-7">
              <div className="success-one__img clearfix">
                <img
                  src={content.images.mainImg}
                  alt="Success Image"
                />
              </div>
            </div>
            {/* End Success One Img */}
          </div>
        </div>
      </section>
      {/* End Success Style2 */}
    </>
  );
}
