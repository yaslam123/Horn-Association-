"use client";
// src/pages/index.js
import Layout from "@/components/layout/Layout";
import BlogSidebar from "@/components/common/BlogSidebar";
import Link from "next/link";
// src/data/blogData.js
export const blogData = [
  {
    id: 1,
    date: { day: "12", month: "Nov" },
    image: "/assets/img/blog/blog-page-img1.jpg",
    category: "corporate",
    comments: 2,
    title: "days replenish to gathering morning one",
    excerpt:
      "Replenish given whose be signs is land itself all isn't night favour seasons cattle place day seas sixth wherein wherein void don't good you're his it sea third let don't creature own",
    detailsLink: "/blog-details",
  },
  {
    id: 2,
    date: { day: "13", month: "Nov" },
    image: "/assets/img/blog/blog-page-img2.jpg",
    category: "corporate",
    comments: 2,
    title: "Saying our second to light Over midst star",
    excerpt:
      "Replenish given whose be signs is land itself all isn't night favour seasons cattle place day seas sixth wherein wherein void don't good you're his it sea third let don't creature own",
    detailsLink: "/blog-details",
  },
  {
    id: 3,
    date: { day: "13", month: "Nov" },
    image: "/assets/img/blog/blog-page-img3.jpg",
    category: "corporate",
    comments: 2,
    title: "Days yielding forth sea give seasons creature",
    excerpt:
      "Replenish given whose be signs is land itself all isn't night favour seasons cattle place day seas sixth wherein wherein void don't good you're his it sea third let don't creature own",
    detailsLink: "/blog-details",
  },
  {
    id: 4,
    date: { day: "13", month: "Nov" },
    image: "/assets/img/blog/blog-page-img4.jpg",
    category: "corporate",
    comments: 2,
    title: "Living Sixth of greater fowl great dominion",
    excerpt:
      "Replenish given whose be signs is land itself all isn't night favour seasons cattle place day seas sixth wherein wherein void don't good you're his it sea third let don't creature own",
    detailsLink: "/blog-details",
  },
  {
    id: 5,
    date: { day: "13", month: "Nov" },
    image: "/assets/img/blog/blog-page-img5.jpg",
    category: "corporate",
    comments: 2,
    title: "Image created Second also Had gathered",
    excerpt:
      "Replenish given whose be signs is land itself all isn't night favour seasons cattle place day seas sixth wherein wherein void don't good you're his it sea third let don't creature own",
    detailsLink: "/blog-details",
  },
  // Add more blog items here...
];

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

export default function Home() {
  return (
    <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Blog standard">
      <div>
        {/* Start Blog Page */}
        <section className="blog-page">
          <div className="container">
            <div className="row">
              {/* Start Blog Page Content */}
              <div className="col-xl-8">
                <div className="blog-page__content">
                  {blogData.map((blog) => (
                    <div key={blog.id} className="blog-one__single">
                      <div className="blog-one__single-img">
                        <img src={blog.image} alt={blog.title} />
                        <div className="date-box">
                          <h2>{blog.date.day}</h2>
                          <span>{blog.date.month}</span>
                        </div>
                        <div className="blog-one__single-img-hover-group">
                          {Array(8)
                            .fill(null)
                            .map((_, index) => (
                              <span
                                key={index}
                                className="blog-one__single-img-hover"
                              ></span>
                            ))}
                        </div>
                      </div>
                      <div className="blog-one__single-content">
                        <div className="meta-box">
                          <ul>
                            <li>
                              <a href="#">
                                <span className="icon-icon-23"></span>{" "}
                                {blog.category}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="icon-icon-19"></span> (
                                {blog.comments}) Comment
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h2>
                          <Link href={blog.detailsLink}>{blog.title}</Link>
                        </h2>
                        <div className="text-box">
                          <p>{blog.excerpt}</p>
                        </div>
                        <div className="btn-box">
                          <Link href={blog.detailsLink}>
                            read More <span className="icon-icon-22"></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* End Blog Page Content Single */}

                  {/* Start Pagination */}
                  <ul className="styled-pagination clearfix">
                    <li className="arrow previous">
                      <a href="#">
                        <span className="icon-icon-52"></span>
                      </a>
                    </li>
                    <li className="active">
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li className="arrow next">
                      <a href="#">
                        <span className="icon-icon-22"></span>
                      </a>
                    </li>
                  </ul>
                  {/* End Pagination */}
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
        {/* End Blog Page */}
      </div>
    </Layout>
  );
}
