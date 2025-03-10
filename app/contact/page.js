import Layout from "@/components/layout/Layout";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="CONTACT US">
        <div>
          {/* Start Contact Page */}
          <section className="contact-page">
            <div className="contact-page__top">
              <div className="container">
                <div className="sec-title text-center">
                  <div className="sub-title center">
                    <div className="icon">
                      <img
                        src="/assets/img/icon/sec-title-img1.png"
                        alt="Icon"
                      />
                    </div>
                    <div className="text">
                      <p>support information</p>
                    </div>
                  </div>
                  <h2 className="">contact information</h2>
                </div>

                <div className="row">
                  {/* Start Contact Page Top Single */}
                  <div className="col-xl-4">
                    <div className="contact-page__top-single">
                      <div className="contact-page__top-single-inner">
                        <div className="icon-box">
                          <span className="icon-icon-46"></span>
                        </div>

                        <div className="content-box">
                          <div className="title-box">
                            <div className="line"></div>
                            <div className="text">
                              <p>location</p>
                            </div>
                          </div>
                          <h2>
                            Adden Adde <br />
                            International Airport
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Contact Page Top Single */}

                  {/* Start Contact Page Top Single */}
                  <div className="col-xl-4">
                    <div className="contact-page__top-single">
                      <div className="contact-page__top-single-inner">
                        <div className="icon-box style2">
                          <span className="icon-icon-47"></span>
                        </div>

                        <div className="content-box">
                          <div className="title-box">
                            <div className="line"></div>
                            <div className="text">
                              <p>eMail us</p>
                            </div>
                          </div>
                          <h2>
                            <a href="mailto:yourmail@email.com">
                              support@horn.com
                            </a>
                          </h2>
                          <h2>
                            <a href="mailto:yourmail@email.com">
                              info@horn.com
                            </a>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Contact Page Top Single */}

                  {/* Start Contact Page Top Single */}
                  <div className="col-xl-4">
                    <div className="contact-page__top-single">
                      <div className="contact-page__top-single-inner">
                        <div className="icon-box">
                          <span className="icon-icon-48"></span>
                        </div>

                        <div className="content-box">
                          <div className="title-box">
                            <div className="line"></div>
                            <div className="text">
                              <p>Phone no</p>
                            </div>
                          </div>
                          <h2>
                            <a href="tel:123456789">+252 (61) 7535337</a>
                          </h2>
                          <h2>
                            <a href="tel:123456789">+252 (61) 0697070</a>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Contact Page Top Single */}
                </div>
              </div>
            </div>

            <div className="contact-page__bottom">
              <div className="container">
                <div className="row">
                  <div className="col-xl-4">
                    <div className="contact-page__bottom-img">
                      <img
                        src="/assets/img/resource/contact-page-img1.jpg"
                        alt="Contact Page"
                      />
                    </div>
                  </div>

                  <div className="col-xl-8">
                    <div className="contact-page__form">
                      <div className="sec-title">
                        <div className="sub-title">
                          <div className="icon">
                            <img
                              src="/assets/img/icon/sec-title-img1.png"
                              alt="Icon"
                            />
                          </div>
                          <div className="text">
                            <p>get in touch</p>
                          </div>
                        </div>
                        <h2 className="">send us free message</h2>
                      </div>

                      <form id="contact-form" action="/" method="POST">
                        <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="contact-page__input-box">
                              <input
                                type="text"
                                placeholder="NAME*"
                                name="name"
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
                                name="number"
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
                                placeholder="company*"
                                name="company"
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
                                placeholder="COMMENT"
                              ></textarea>
                              <div className="icon-box">
                                <span className="icon-icon-19"></span>
                              </div>
                            </div>
                            <div className="contact-page__btn">
                              <button
                                type="submit"
                                className="thm-btn contact-one__btn"
                                data-loading-text="Please wait..."
                              >
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
                      <p className="ajax-response mb-0 error"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Contact Page */}

          {/* Start Google Map One */}
          <section className="google-map-one">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
              className="google-map-one__map"
              allowFullScreen
            ></iframe>
          </section>
          {/* End Google Map One */}
        </div>
      </Layout>
    </>
  );
}
