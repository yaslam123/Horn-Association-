'use client';

import React from 'react';

// Dynamic data for the component
const featureData = {
  title: 'Proven and trusted legal counsel',
  subTitle: 'why choose us',
  description:
    "Likeness had fruit moved herb you're earth sea dry you're creature own man give It fish cattle they male creepeth give male saying sixth lesser divide great over that fowlena make second can after",
  features: [
    {
      icon: 'icon-icon-9',
      title: 'Satisfied legal defense',
    },
    {
      icon: 'icon-icon-10',
      title: 'Legal advice service',
    },
    {
      icon: 'icon-icon-11',
      title: 'High skilled lawyer',
    },
    {
      icon: 'icon-icon-12',
      title: 'Online client support',
    },
  ],
  images: [
    'assets/img/resource/why-choose-v2-img1.jpg',
    'assets/img/resource/why-choose-v2-img2.jpg',
  ],
  shapeImages: [
    'assets/img/shape/why-choose-v2-shape1.png',
    'assets/img/shape/why-choose-v2-shape2.png',
  ],
};

export default function ChooseTwo({
  title = featureData.title,
  subTitle = featureData.subTitle,
  description = featureData.description,
  features = featureData.features,
  images = featureData.images,
  shapeImages = featureData.shapeImages,
}) {
  return (
    <>
      {/* Start Why Choose Two */}
      <section className="why-choose-two">
        <div className="shape1">
          <img src={shapeImages[0]} alt="Shape 1" />
        </div>
        <div className="shape2 float-bob-y">
          <img src={shapeImages[1]} alt="Shape 2" />
        </div>
        <div className="container">
          <div className="row">
            {/* Start Why Choose Two Img */}
            <div className="col-xl-6">
              <div className="why-choose-two__img">
                <ul>
                  {images.map((image, index) => (
                    <li key={index}>
                      <div className="img-box">
                        <img src={image} alt={`Why Choose Image ${index + 1}`} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* End Why Choose Two Img */}

            {/* Start Why Choose Two Content */}
            <div className="col-xl-6">
              <div className="why-choose-two__content">
                <div className="sec-title">
                  <div className="sub-title">
                    <div className="icon">
                      <img src="assets/img/icon/sec-title-img1.png" alt="Icon" />
                    </div>
                    <div className="text">
                      <p>{subTitle}</p>
                    </div>
                  </div>
                  <h2>{title}</h2>
                </div>

                <div className="why-choose-two__content-text">
                  <p>{description}</p>
                </div>

                <div className="why-choose-two__content-bottom">
                  <div className="row">
                    {features.map((feature, index) => (
                      <div className="col-xl-6 col-lg-6 col-md-6" key={index}>
                        <div className="single-box">
                          <div className="icon-box">
                            <span className={feature.icon}></span>
                          </div>
                          <div className="title-box">
                            <h2>{feature.title}</h2>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* End Why Choose Two Content */}
          </div>
        </div>
      </section>
      {/* End Why Choose Two */}
    </>
  );
}
