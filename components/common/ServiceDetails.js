import { useState } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";

const ServiceDetails = ({ serviceDetails }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section className="service-details">
      <div className="container">
        <div className="row">
          {/* Service Details Sidebar */}
          <div className="col-xl-4">
            <div className="sidebar">
              {/* Service List */}
              <div className="sidebar__single sidebar__single-service">
                <div className="title-box">
                  <div className="shape-box">
                    <div className="line"></div>
                    <div className="round"></div>
                  </div>
                  <div className="text">
                    <h3>{serviceDetails.serviceListTitle}</h3>
                  </div>
                </div>
                <ul className="sidebar__single-service-list">
                  {serviceDetails.serviceList.map((service, index) => (
                    <li key={index}>
                      <Link href={service.link} legacyBehavior>
                        <a className={service.isActive ? "active" : ""}>
                          {service.name} <span className="icon-icon-8"></span>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Us */}
              <div className="sidebar__single sidebar__single-contact text-center">
                <div
                  className="sidebar__single-contact-pattern"
                  style={{
                    backgroundImage: `url(${serviceDetails.contactPattern})`,
                  }}
                ></div>
                <div className="sidebar__single-contact-inner">
                  <div className="icon-box">
                    <img src={serviceDetails.contactIcon} alt="Contact Icon" />
                  </div>
                  <div className="text-box">
                    <h3>{serviceDetails.contactTitle}</h3>
                    <h2>{serviceDetails.contactSubtitle}</h2>
                  </div>
                  <div className="btn-box">
                    <Link href={serviceDetails.contactLink} legacyBehavior>
                      <a>
                        {serviceDetails.contactButtonText}{" "}
                        <span className="icon-icon-8"></span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Downloads */}
              {/* <div className="sidebar__single sidebar__single-download">
                <div className="title-box">
                  <div className="shape-box">
                    <div className="line"></div>
                    <div className="round"></div>
                  </div>
                  <div className="text">
                    <h3>{serviceDetails.downloadTitle}</h3>
                  </div>
                </div>
                <ul className="sidebar__single-download-list">
                  {serviceDetails.downloads.map((download, index) => (
                    <li key={index}>
                      <Link href={download.link} legacyBehavior>
                        <a>
                          <div className="text-box">
                            <i className="icon-icon-41"></i>
                            <p>{download.text}</p>
                          </div>
                          <div className="icon-box">
                            <span className="icon-icon-8"></span>
                          </div>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>

          {/* Service Details Content */}
          <div className="col-xl-8">
            <div className="service-details__content">
              <div className="service-details__content-img1">
                <img src={serviceDetails.mainImage} alt="Service" />
              </div>

              <div className="service-details__content-text1">
                <h2>{serviceDetails.serviceTitle}</h2>
                <p className="text1">{serviceDetails.serviceDescription1}</p>
                <p className="text2">{serviceDetails.serviceDescription2}</p>
              </div>

              <div className="service-details__content-text2">
                <h2>{serviceDetails.benefitTitle}</h2>
                <p>{serviceDetails.benefitDescription}</p>
              </div>

              {/* Service Benefits */}
              <div className="service-details__content-text3">
                <div className="row">
                  {serviceDetails.benefits.map((benefit, index) => (
                    <div className="col-xl-3 col-lg-3 col-md-3" key={index}>
                      <div className="service-details__content-text3-single">
                        <div className="icon-box">
                          <span className={benefit.icon}></span>
                        </div>
                        <div className="text-box">
                          <h2>{benefit.title}</h2>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Video Section */}
              {/* <div className="service-details__content-img2">
                <div className="inner">
                  <img
                    src={serviceDetails.videoThumbnail}
                    alt="Video Thumbnail"
                  />
                  <div className="service-details__video-btn">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(true);
                      }}
                      className="service-details__icon"
                    >
                      <span className="icon-icon-40"></span>
                    </a>
                  </div>
                  <ModalVideo
                    channel="youtube"
                    isOpen={isOpen}
                    videoId="pVE92TNDwUk"
                    onClose={() => setIsOpen(false)}
                  />
                </div>
              </div> */}

              {/* Justice Section */}
              <div className="service-details__content-text4">
                <h2>{serviceDetails.justiceTitle}</h2>
                <p className="text1">{serviceDetails.justiceText1}</p>
                <ul>
                  {serviceDetails.justiceList.map((item, index) => (
                    <li key={index}>
                      <h3>
                        <span className="icon-icon-16"></span> {item}
                      </h3>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional Images */}
              {/* <div className="service-details__content-img3">
                <div className="row">
                  {serviceDetails.contentImgs3.map((img, index) => (
                    <div className="col-xl-6 col-lg-6 col-md-6" key={index}>
                      <div className="service-details__content-img3-single">
                        <img src={img} alt={`Content Image ${index + 1}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}

              {/* FAQ Section */}
              <div className="service-details__content-text5">
                <div className="text-box">
                  <h2>{serviceDetails.faqTitle}</h2>
                  <p>{serviceDetails.faqIntro}</p>
                </div>
                <ul
                  className="accrodion-grp faq-one__accrodion"
                  data-grp-name="faq-one-accrodion"
                >
                  {serviceDetails.faqs.map((faq, index) => (
                    <li
                      className={`accrodion ${
                        activeFaq === index ? "active" : ""
                      }`}
                      key={index}
                    >
                      <div
                        className="accrodion-title"
                        onClick={() => toggleFaq(index)}
                      >
                        <h3>{faq.question}</h3>
                      </div>
                      {activeFaq === index && (
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
