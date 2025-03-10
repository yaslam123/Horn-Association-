"use client";

import Link from "next/link";

export default function Blog() {
  const blogData = [
    {
      id: 1,
      date: '12',
      month: 'Nov',
      category: 'corporate',
      comments: '(02) Comment',
      imageSrc: '/assets/img/blog/blog-v2-img1.jpg',
      author: 'by lavale',
      title: 'Likeness Beginer form cattle waters brought a whales midsted Light soled contest',
      link: '/blog-details',
    },
    {
      id: 2,
      date: '14',
      month: 'Nov',
      category: 'corporate',
      comments: '(02) Comment',
      imageSrc: '/assets/img/blog/blog-v2-img2.jpg',
      author: 'by lavale',
      title: 'Morning let use behold bird bearing beard that rules him that bring althouh sixth',
      link: '/blog-details',
    },
    {
      id: 3,
      date: '18',
      month: 'Nov',
      category: 'corporate',
      comments: '(02) Comment',
      imageSrc: '/assets/img/blog/blog-v2-img3.jpg',
      author: 'by lavale',
      title: 'Fowl life great bed tree forth light mids deep abundantly upon were land fowl heaven',
      link: '/blog-details',
    },
  ];
  

  return (
    <>
      {/* Start Blog Two */}
      <section className="blog-two">
          <div className="container">
            <div className="sec-title text-center">
            <div className="sub-title center">
                <div className="icon">
                <img src="/assets/img/icon/sec-title-img1.png" alt="Icon" />
                </div>
                <div className="text">
                <p>recent blog post</p>
                </div>
            </div>
            <h2>latest legal articles</h2>
            </div>
            <div className="row">
            {blogData.map((blog) => (
                <div key={blog.id} className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                <div className="blog-two__single">
                    <div className="blog-two__single-top">
                    <div className="date-box">
                        <h2>{blog.date}</h2>
                        <p>{blog.month}</p>
                    </div>

                    <div className="meta-box">
                        <ul>
                        <li>
                            <Link legacyBehavior href="#">
                                <a><span className="icon-icon-23"></span> {blog.category}</a>
                            </Link>
                        </li>
                        <li>
                            <Link legacyBehavior href="#">
                                <a><span className="icon-icon-19"></span> {blog.comments}</a>
                            </Link>
                        </li>
                        </ul>
                    </div>
                    </div>

                    <div className="blog-two__single-img">
                    <div className="inner">
                        <img src={blog.imageSrc} alt="Blog Image" />
                    </div>
                    </div>

                    <div className="blog-two__single-content">
                    <div className="meta-box2">
                        <ul>
                        <li>
                            <Link legacyBehavior href="#">
                                <a><span className="icon-icon-36"></span> {blog.author}</a>
                            </Link>
                        </li>
                        </ul>
                    </div>
                    <h2>
                        <Link legacyBehavior href={blog.link}>
                            <a>{blog.title}</a>
                        </Link>
                    </h2>

                    <div className="btn-box">
                        <Link legacyBehavior href={blog.link}>
                            <a>read More <span className="icon-icon-8"></span></a>
                        </Link>
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
}
