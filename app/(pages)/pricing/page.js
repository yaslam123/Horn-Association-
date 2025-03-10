import React from 'react';
import Layout from '@/components/layout/Layout';
import TestimonialThree from '@/components/slider/TestimonialThree';

// Example of dynamic data for the component
Home.defaultProps = {
    pricingPackages: [
      {
        title: 'Business',
        price: '$58.00',
        iconClass: 'icon-icon-12',
        buttonText: 'get started',
        features: [
          'Defending Your Future',
          'Justice Deserve',
          'Resilience Representation',
          'Justice High Definition',
          'Committed Success',
        ],
      },
      {
        title: 'Standard',
        price: '$69.00',
        iconClass: 'icon-icon-42',
        buttonText: 'get started',
        features: [
          'Defending Your Future',
          'Justice Deserve',
          'Resilience Representation',
          'Justice High Definition',
          'Committed Success',
        ],
      },
      {
        title: 'Premium',
        price: '$82.00',
        iconClass: 'icon-icon-43',
        buttonText: 'get started',
        features: [
          'Defending Your Future',
          'Justice Deserve',
          'Resilience Representation',
          'Justice High Definition',
          'Committed Success',
        ],
      },
    ],
    whyChooseUs: {
      subtitle: 'why choose us',
      title: 'Proven and trusted legal counsel',
      description:
        "Likeness had fruit moved herb you're earth sea dry you're creature own man give It fish cattle they male creepeth give male saying sixth lesser divide great over that fowlena make second can after",
      images: [
        { src: '/assets/img/resource/why-choose-v2-img1.jpg', alt: 'Why Choose Us Image 1' },
        { src: '/assets/img/resource/why-choose-v2-img2.jpg', alt: 'Why Choose Us Image 2' },
      ],
      features: [
        { title: 'Satisfied legal defense', iconClass: 'icon-icon-9' },
        { title: 'Legal advice service', iconClass: 'icon-icon-10' },
        { title: 'high skilled lawyer', iconClass: 'icon-icon-11' },
        { title: 'online client support', iconClass: 'icon-icon-12' },
      ],
    },
  };  

export default function Home({ pricingPackages, whyChooseUs }) {
  return (
    <>
      <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Pricing plan">
        {/* Start Pricing One */}
        <section className="pricing-one">
          <div className="container">
            <div className="sec-title text-center">
              <div className="sub-title center">
                <div className="icon">
                  <img src="/assets/img/icon/sec-title-img1.png" alt="Affordable Price" />
                </div>
                <div className="text">
                  <p>affordable price</p>
                </div>
              </div>
              <h2 className="">our pricing package</h2>
            </div>
            <div className="row">
              {pricingPackages.map((pkg, index) => (
                <div key={index} className="col-xl-4 col-lg-4">
                  <div className="pricing-one__single">
                    <div className="table-header text-center">
                      <div className="icon-box">
                        <span className={pkg.iconClass}></span>
                      </div>
                      <div className="table-header__inner">
                        <div className="text-box">
                          <h3>{pkg.title}</h3>
                          <h2>{pkg.price}</h2>
                        </div>
                      </div>
                    </div>
                    <div className="table-content text-center">
                      <ul>
                        {pkg.features.map((feature, i) => (
                          <li key={i}>
                            <p>
                              <span className="icon-icon-16"></span> {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="table-footer text-center">
                      <div className="btn-box">
                        <a className="thm-btn" href="#">
                          {pkg.buttonText}
                          <span className="thm-btn__icon">
                            <i className="icon-icon-8"></i>
                          </span>
                          <span className="thm-btn__hover-group">
                            <span className="thm-btn__hover thm-btn__hover--1"></span>
                            <span className="thm-btn__hover thm-btn__hover--2"></span>
                            <span className="thm-btn__hover thm-btn__hover--3"></span>
                            <span className="thm-btn__hover thm-btn__hover--4"></span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* End Pricing One */}

        {/* Start Why Choose Two */}
        <section className="why-choose-two">
          <div className="shape1">
            <img src="/assets/img/shape/why-choose-v2-shape1.png" alt="Shape 1" />
          </div>
          <div className="shape2 float-bob-y">
            <img src="/assets/img/shape/why-choose-v2-shape2.png" alt="Shape 2" />
          </div>
          <div className="container">
            <div className="row">
              {/* Start Why Choose Two Img */}
              <div className="col-xl-6">
                <div className="why-choose-two__img">
                  <ul>
                    {whyChooseUs.images.map((img, i) => (
                      <li key={i}>
                        <div className="img-box">
                          <img src={img.src} alt={img.alt} />
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
                        <img src="/assets/img/icon/sec-title-img1.png" alt="Why Choose Us" />
                      </div>
                      <div className="text">
                        <p>{whyChooseUs.subtitle}</p>
                      </div>
                    </div>
                    <h2>{whyChooseUs.title}</h2>
                  </div>

                  <div className="why-choose-two__content-text">
                    <p>{whyChooseUs.description}</p>
                  </div>

                  <div className="why-choose-two__content-bottom">
                    <div className="row">
                      {whyChooseUs.features.map((feature, i) => (
                        <div key={i} className="col-xl-6 col-lg-6 col-md-6">
                          <div className="single-box">
                            <div className="icon-box">
                              <span className={feature.iconClass}></span>
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
        {/* Testimonial Section */}
        <TestimonialThree />
      </Layout>
    </>
  );
}

