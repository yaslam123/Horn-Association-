'use client'
import Link from 'next/link';
import { useState } from 'react';

const ContactOne = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <section className="contact-one contact-one--case">
      <div
        className="contact-one--case__bg"
        style={{ backgroundImage: 'url(/assets/img/resource/contact-one-case-bg.jpg)' }}
      ></div>
      <div className="container clearfix">
        <div className="contact-one__form">
          <div className="sec-title">
            <div className="sub-title">
              <div className="icon">
                <img src="/assets/img/icon/sec-title-img1.png" alt="" />
              </div>
              <div className="text">
                <p>get in touch</p>
              </div>
            </div>
            <h2 className="">send us free message</h2>
          </div>

          <form className="contact-page__form contact-form-validated" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="contact-page__input-box">
                  <input
                    type="text"
                    placeholder="NAME*"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
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
    </section>
  );
};

export default ContactOne;
