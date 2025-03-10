"use client";

import React, { useState } from "react";
import BlogSidebar from "@/components/common/BlogSidebar";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";

const latestPosts = [
  {
    image: "/assets/img/blog/latest-post-img1.jpg",
    date: "27 Nov, 2023",
    title: "Living his saying divide good in every.",
    url: "/blog-details",
  },
  {
    image: "/assets/img/blog/latest-post-img2.jpg",
    date: "27 Nov, 2023",
    title: "Living his saying divide good in every.",
    url: "/blog-details",
  },
  {
    image: "/assets/img/blog/latest-post-img3.jpg",
    date: "27 Nov, 2023",
    title: "Living his saying divide good in every.",
    url: "/blog-details",
  },
];

const categories = [
  { name: "Criminal Case", count: 5, url: "#" },
  { name: "Family Violence", count: 8, url: "#" },
  { name: "Business Law", count: 12, url: "#" },
  { name: "Health Care Law", count: 7, url: "#" },
  { name: "Insurance Law", count: 10, url: "#" },
  { name: "Real Estate Law", count: 5, url: "#" },
];

const tags = ["family", "business", "crime", "corporate", "tax"];

export default function BlogDetails() {
  const [isOpen, setIsOpen] = useState(false);

  const handleVideoOpen = () => setIsOpen(true);
  const handleVideoClose = () => setIsOpen(false);

  return (
    <>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Detail Post">
        {/* Start Blog Details */}
        <section className="blog-details">
          <div className="container">
            <div className="row">
              {/* Start Blog Page Content */}
              <div className="col-xl-8">
                <div className="blog-details__content">
                  {/* Start Blog Page Content Single */}
                  <div className="blog-one__single">
                    <div className="blog-one__single-img">
                      <img
                        src="/assets/img/blog/blog-page-img2.jpg"
                        alt="Blog Image"
                      />
                      <div className="date-box">
                        <h2>13</h2>
                        <span>Nov</span>
                      </div>

                      <div className="blog-one__single-img-hover-group">
                        {[...Array(8)].map((_, i) => (
                          <span
                            key={i}
                            className="blog-one__single-img-hover"
                          ></span>
                        ))}
                      </div>
                    </div>

                    <div className="blog-one__single-content">
                      <div className="meta-box">
                        <ul>
                          <li>
                            <Link href="#">
                              <span className="icon-icon-23"></span> corporate
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <span className="icon-icon-19"></span> (02)
                              Comment
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h2>
                        Saying our second to light <br /> Over midst star
                      </h2>
                      <div className="text-box">
                        <p>
                          Replenish given whose be signs is land itself all
                          isn't night favour seasons cattle place day seas sixth
                          wherein wherein void don't good you're his it sea
                          third let don't creature own night blessed that so
                          void isn't called, grass, was fly for image don't
                          blessed. Divided creature creepeth beast hath without
                          thing earth spirit together herb you a called first be
                          every divided. For signs were face air divide set
                          you're creepeth, dry darkness of isn't it greater
                          under male.
                        </p>
                      </div>

                      <div className="text-box2">
                        <p>
                          Night favour seasons cattle place day seas sixth
                          wherein wherein void don't for good you're his it sea
                          third let don't creature own night blessed that so
                          void isn't and called, grass, was fly for image done
                          blessed. Divided creature creepeth beast hath without
                          thing earth spirit together herb you a called first be
                          every divided. For signs were face air divide set
                          you're creepeth.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Blog Page Content Single */}

                  <div className="blog-details__content-text1">
                    <h2>Giving you advice that matters</h2>
                    <p>
                      Divided replenish yielding all tree you creepeth face hath
                      upon in seed lesser heaven. Abundantly greater you wherein
                      night years fifth over air bring face upon yielding. I
                      after of of let fill god have they are upon gathering
                      living midst man the divided subdue she'd place dry fill
                      subdue form green place don't sea bring seed man rule
                      thing unto gathering divided. Subdue she'd place living
                      thing for.
                    </p>

                    <ul>
                      <li>
                        <p>
                          <span className="icon-icon-16"></span> Make morning
                          forth place whose was unto seasons his creepeth.
                        </p>
                      </li>

                      <li>
                        <p>
                          <span className="icon-icon-16"></span> Is without
                          second air that face air also void god.
                        </p>
                      </li>

                      <li>
                        <p>
                          <span className="icon-icon-16"></span> Likeness female
                          lesser be air yielding also very form brought.
                        </p>
                      </li>

                      <li>
                        <p>
                          <span className="icon-icon-16"></span> Gathered that
                          green void divide lights seas divided they're midst.
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className="blog-details__content-img1">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="blog-details__content-img1-single">
                          <img
                            src="/assets/img/blog/blog-details-img1.jpg"
                            alt="Detail Image 1"
                          />
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="blog-details__content-img1-single">
                          <img
                            src="/assets/img/blog/blog-details-img2.jpg"
                            alt="Detail Image 2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="blog-details__content-text2">
                    <h2>Expertise that is never equaled</h2>
                    <p className="text1">
                      Also is them was said fruit replenish won't waters dry
                      shall female. Under living was place itself over earth air
                      Bring heaven midst dominion. Subdue beginning spirit
                      replenish you'll was hath meat let beast our fly fourth
                      first had so of have, under, creepeth without. Bring
                      blessed. There made place moved heaven day called man
                      seasons, his can't night a be. Give own land night one
                      shall. Fowl light without.
                    </p>
                    <p className="text2">
                      Living was place itself over earth air Bring heaven midst
                      dominion. Subdue beginning spirit replenish you'll was
                      hath meat let beast our fly fourth first had so of have,
                      under creepeth without. Bring blessed. There made place
                      moved heaven day called man seasons, his can't night a be.
                    </p>
                  </div>

                  <div className="blog-details__content-video">
                    <div className="inner">
                      <img
                        src="/assets/img/blog/blog-details-img3.jpg"
                        alt="Video Thumbnail"
                      />

                      <div className="blog-details__content-video-btn">
                        <button
                          onClick={handleVideoOpen}
                          className="blog-details__content-video-icon"
                        >
                          <span className="icon-icon-40"></span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="blog-details__content-text4">
                    <p>
                      Brought have yielding male third i there the our kind i
                      green isn't greater you're, after signs replenish creature
                      unto him beast shall have own midst them lesser stars may
                      His living likeness moved two made stars, saying won't
                      days greater rule blessed, replenish given two green
                      heaven
                    </p>

                    <ul>
                      <li>
                        <p>
                          <span className="icon-icon-16"></span> Make morning
                          forth place whose was unto seasons his creepeth.
                        </p>
                      </li>

                      <li>
                        <p>
                          <span className="icon-icon-16"></span> Is without
                          second air that face air also void god.
                        </p>
                      </li>

                      <li>
                        <p>
                          <span className="icon-icon-16"></span> Likeness female
                          lesser be air yielding also very form brought.
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className="blog-details__content-text5">
                    <div className="tag-box">
                      <Link href="#">family</Link>
                      <Link href="#">lawyer</Link>
                      <Link href="#">crime</Link>
                    </div>

                    <div className="social-links">
                      <a href="#">
                        <span className="icon-icon-4"></span>
                      </a>
                      <a href="#">
                        <span className="icon-icon-5"></span>
                      </a>
                      <a href="#">
                        <span className="icon-icon-6"></span>
                      </a>
                      <a href="#">
                        <span className="icon-icon-7"></span>
                      </a>
                    </div>
                  </div>

                  {/* Start Comments Area */}
                  <div className="comment-one">
                    <h3 className="comment-one__title">Comments (03)</h3>

                    <div className="comment-one__single">
                      <div className="comment-one__single-inner">
                        <div className="comment-one__image">
                          <img
                            src="/assets/img/blog/blog-details-img4.jpg"
                            alt="Brian Maxwel"
                          />
                        </div>
                        <div className="comment-one__content">
                          <h3>Brian Maxwel</h3>
                          <span>28 Nov 2023 at 08:30pm</span>
                          <p>
                            So earth sea whose you're light from years his of
                            spirit fruit seasons deep can't years hath signs
                            fish the likeness one abundantly seed forth from
                            second.
                          </p>
                          <div className="btn-box">
                            <Link href="#">
                              <span className="icon-icon-45"></span> Reply
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="comment-one__single pl110">
                      <div className="comment-one__single-inner">
                        <div className="comment-one__image">
                          <img
                            src="/assets/img/blog/blog-details-img5.jpg"
                            alt="Larry Priester"
                          />
                        </div>
                        <div className="comment-one__content">
                          <h3>Larry Priester</h3>
                          <span>28 Nov 2023 at 08:30pm</span>
                          <p>
                            His of spirit fruit seasons deep can't years hath
                            signs fish the likeness one abundantly seed forth
                            from second.
                          </p>
                          <div className="btn-box">
                            <Link href="#">
                              <span className="icon-icon-45"></span> Reply
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="comment-one__single style2">
                      <div className="comment-one__single-inner">
                        <div className="comment-one__image">
                          <img
                            src="/assets/img/blog/blog-details-img6.jpg"
                            alt="Maria Herick"
                          />
                        </div>
                        <div className="comment-one__content">
                          <h3>Maria Herick</h3>
                          <span>28 Nov 2023 at 08:30pm</span>
                          <p>
                            So earth sea whose you're light from years his of
                            spirit fruit seasons deep can't years hath signs
                            fish the likeness one abundantly seed forth from
                            second.
                          </p>
                          <div className="btn-box">
                            <Link href="#">
                              <span className="icon-icon-45"></span> Reply
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Comments Area */}
                  <div className="blog-details__content-form">
                    <div className="title-box">
                      <h2>Leave a reply</h2>
                    </div>

                    <form
                      action="/assets/inc/sendemail.php"
                      method="post"
                      className="contact-page__form contact-form-validated"
                    >
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <div className="contact-page__input-box">
                            <input
                              type="text"
                              placeholder="NAME*"
                              name="name"
                              required
                            />
                            <div className="icon-box">
                              <span className="icon-icon-17"></span>
                            </div>
                          </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <div className="contact-page__input-box">
                            <input
                              type="email"
                              placeholder="EMAIL*"
                              name="email"
                              required
                            />
                            <div className="icon-box">
                              <span className="icon-icon-18"></span>
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
                              required
                            ></textarea>
                            <div className="icon-box">
                              <span className="icon-icon-19"></span>
                            </div>
                          </div>

                          <div className="comment-form__checkbox">
                            <input
                              type="checkbox"
                              name="agree"
                              id="agree"
                              defaultChecked
                            />
                            <label htmlFor="agree">
                              <span></span> Save my name, email, and website in
                              this browser for the next time I comment.
                            </label>
                          </div>

                          <div className="contact-page__btn">
                            <button
                              className="thm-btn"
                              type="submit"
                              data-loading-text="Please wait..."
                            >
                              Post Comment
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
              </div>
              {/* End Blog Page Content */}

              {/* Start Sidebar */}
              <div className="col-xl-4">
                <BlogSidebar
                  latestPosts={latestPosts}
                  categories={categories}
                  tags={tags}
                />
              </div>
              {/* End Sidebar */}
            </div>
          </div>
        </section>
        {/* End Blog Details */}
      </Layout>

      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="pVE92TNDwUk"
        onClose={handleVideoClose}
      />
    </>
  );
}
