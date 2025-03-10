"use client";

import { useState } from "react";

export default function ContactOne() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted", formData);
  };

  return (
    <>
      {/* Start Contact One */}
      <section className="contact-one">
        <div className="shape1">
          <img src="/assets/img/shape/contact-v1-shape1.png" alt="Shape" />
        </div>
        <div className="container clearfix">
          <div className="contact-one__form">
            <div className="sec-title">
              <div className="sub-title">
                <div className="icon">
                  <img src="/assets/img/icon/sec-title-img1.png" alt="Icon" />
                </div>
                <div className="text">
                  <p>Skill Percentage</p>
                </div>
              </div>
              <h2 className="">send us free message</h2>
            </div>

            <form onSubmit={handleSubmit} className="contact-page__form">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="contact-page__input-box">
                    <input
                      type="text"
                      placeholder="NAME*"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <div className="icon-box">
                      <span className="icon-icon-17"></span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="contact-page__input-box">
                    <input
                      type="text"
                      placeholder="PHONE*"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <div className="icon-box">
                      <span className="icon-icon-37"></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="contact-page__input-box">
                    <input
                      type="email"
                      placeholder="EMAIL*"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <div className="icon-box">
                      <span className="icon-icon-18"></span>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="contact-page__input-box">
                    <input
                      type="text"
                      placeholder="SUBJECT*"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    <div className="icon-box">
                      <span className="icon-icon-23"></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="contact-page__input-box">
                    <textarea
                      name="message"
                      placeholder="COMMENT*"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    <div className="icon-box">
                      <span className="icon-icon-19"></span>
                    </div>
                  </div>
                  <div className="contact-page__btn">
                    <button className="thm-btn" type="submit">
                      send message
                      <span className="thm-btn__icon">
                        <i className="icon-icon-8"></i>
                      </span>
                      <span className="thm-btn__hover-group">
                        <span className="thm-btn__hover thm-btn__hover--1"></span>
                        <span className="thm-btn__hover thm-btn__hover--2"></span>
                        <span className="thm-btn__hover thm-btn__hover--3"></span>
                        <span className="thm-btn__hover thm-btn__hover--4"></span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="contact-one__google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
            className="contact-one-google-map__one"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      {/* End Contact One */}
    </>
  );
}
