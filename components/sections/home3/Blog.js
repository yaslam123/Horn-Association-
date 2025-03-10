"use client";

import Link from "next/link";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      date: { day: "12", month: "Nov" },
      category: "corporate",
      comments: "(02) Comment",
      author: "by lavale",
      title: "likeness Beginer form cattle waters brought a whales midsted Light soled contest",
      imageSrc: "/assets/img/blog/blog-v2-img1.jpg",
      href: "/blog-details",
    },
    {
      id: 2,
      date: { day: "14", month: "Nov" },
      category: "corporate",
      comments: "(02) Comment",
      author: "by lavale",
      title: "Morning let use behold bird bearing beard that rules him that bring althouh sixth",
      imageSrc: "/assets/img/blog/blog-v2-img2.jpg",
      href: "/blog-details",
    },
  ];

  return (
    <>
      {/* Start Blog Two */}
      <section className="blog-one style3">
        <div className="container">
          <div className="blog-one__top">
            <div className="sec-title">
              <div className="sub-title">
                <div className="icon">
                  <img src="/assets/img/icon/sec-title-img1.png" alt="Section Title Icon" />
                </div>
                <div className="text">
                  <p>recent blog post</p>
                </div>
              </div>
              <h2>latest legal articles</h2>
            </div>

            <div className="btn-box">
              <Link href="#">All article <span className="icon-icon-8"></span></Link>
            </div>
          </div>

          <div className="row">
            {blogPosts.map((post) => (
              <div key={post.id} className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".1s">
                <div className="blog-one__single">
                  <div className="blog-one__single-img">
                    <img src={post.imageSrc} alt={post.title} />
                    <div className="date-box">
                      <h2>{post.date.day}</h2>
                      <span>{post.date.month}</span>
                    </div>

                    <div className="blog-one__single-img-hover-group">
                      {[...Array(8)].map((_, i) => (
                        <span key={i} className="blog-one__single-img-hover"></span>
                      ))}
                    </div>
                  </div>

                  <div className="blog-one__single-content">
                    <div className="meta-box">
                      <ul>
                        <li>
                          <Link href="#"><span className="icon-icon-23"></span> {post.category}</Link>
                        </li>
                      </ul>
                    </div>
                    <h2>
                      <Link href={post.href}>{post.title}</Link>
                    </h2>
                    <div className="btn-box">
                      <Link href={post.href}>read More <span className="icon-icon-22"></span></Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Blog Two */}
    </>
  );
};

export default Blog;
