"use client";

import Link from "next/link";

// Sample data for blog posts
const blogPosts = [
  {
    id: 1,
    imgSrc: "/assets/img/blog/blog-v2-img1.jpg",
    date: { day: "12", month: "Nov" },
    category: "family law",
    title: "days replenish to gathering lesser morning one",
    detailsLink: "/blog",
  },
  {
    id: 2,
    imgSrc: "/assets/img/blog/blog-v2-img2.jpg",
    date: { day: "14", month: "Nov" },
    category: "corporate",
    title: "Form Place Created so had said from Called",
    detailsLink: "/blog",
  },
];

export default function Blog() {
  return (
    <>
      {/* Start Blog One */}
      <section className="blog-one">
        <div className="container">
          <div className="blog-one__top">
            <div className="sec-title">
              <div className="sub-title">
                <div className="icon">
                  <img
                    src="/assets/img/icon/sec-title-img1.png"
                    alt="Section Title Icon"
                  />
                </div>
                <div className="text">
                  <p>recent blog post</p>
                </div>
              </div>
              <h2>latest legal articles</h2>
            </div>

            <div className="btn-box">
              <Link href="/blog">
                All article <span className="icon-icon-8"></span>
              </Link>
            </div>
          </div>

          <div className="row">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay=".1s"
              >
                <div className="blog-one__single">
                  <div className="blog-one__single-img">
                    <img src={post.imgSrc} alt={`Blog Image ${post.id}`} />
                    <div className="date-box">
                      <h2>{post.date.day}</h2>
                      <span>{post.date.month}</span>
                    </div>

                    <div className="blog-one__single-img-hover-group">
                      <span className="blog-one__single-img-hover"></span>
                      {/* Add more hover elements as needed */}
                    </div>
                  </div>

                  <div className="blog-one__single-content">
                    <div className="meta-box">
                      <ul>
                        <li>
                          <Link href="#">
                            <span className="icon-icon-23"></span>{" "}
                            {post.category}
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <h2>
                      <Link href={post.detailsLink}>{post.title}</Link>
                    </h2>
                    <div className="btn-box">
                      <Link href={post.detailsLink}>
                        read More <span className="icon-icon-22"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Blog One */}
    </>
  );
}
