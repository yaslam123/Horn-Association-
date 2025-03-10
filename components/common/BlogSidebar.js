import Link from "next/link";
const BlogSidebar = ({ latestPosts, categories, tags }) => {
    return (
            <div className="sidebar">
                {/* Search */}
                <div className="sidebar__single sidebar__search">
                    <div className="title-box">
                        <div className="shape-box">
                            <div className="line"></div>
                            <div className="round"></div>
                        </div>
                        <div className="text">
                            <h3>Search</h3>
                        </div>
                    </div>
                    <form action="#" className="sidebar__search-form">
                        <input type="search" placeholder="KEYWORDS" />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>

                {/* Latest Posts */}
                <div className="sidebar__single sidebar__single-latest-post">
                    <div className="title-box">
                        <div className="shape-box">
                            <div className="line"></div>
                            <div className="round"></div>
                        </div>
                        <div className="text">
                            <h3>Latest Post</h3>
                        </div>
                    </div>
                    <ul className="sidebar__single-latest-post-list">
                        {latestPosts.map((post, index) => (
                            <li key={index}>
                                <div className="img-box">
                                    <img src={post.image} alt={post.title} />
                                </div>
                                <div className="text-box">
                                    <p><span className="icon-icon-44"></span> {post.date}</p>
                                    <h3><Link href={post.url}>{post.title}</Link></h3>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Categories */}
                <div className="sidebar__single sidebar__single-service categories">
                    <div className="title-box">
                        <div className="shape-box">
                            <div className="line"></div>
                            <div className="round"></div>
                        </div>
                        <div className="text">
                            <h3>Post Categories</h3>
                        </div>
                    </div>
                    <ul className="sidebar__single-service-list">
                        {categories.map((category, index) => (
                            <li key={index}>
                                <Link href={category.url}>
                                    <div className="text-box">
                                        {category.name} <i className="txt">({category.count})</i>
                                    </div>
                                    <span className="icon-icon-8"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div className="sidebar__single sidebar__single-contact text-center">
                    <div className="sidebar__single-contact-pattern" style={{ backgroundImage: "url('/assets/img/pattern/sidebar-contact-pattern.png')" }}></div>
                    <div className="sidebar__single-contact-inner">
                        <div className="icon-box">
                            <img src="/assets/img/icon/about-v2-icon1.png" alt="" />
                        </div>
                        <div className="text-box">
                            <h3>get in touch</h3>
                            <h2>legal justice <br /> for you</h2>
                        </div>
                        <div className="btn-box">
                            <Link href="#">contact us <span className="icon-icon-8"></span></Link>
                        </div>
                    </div>
                </div>

                {/* Tags */}
                <div className="sidebar__single sidebar__single-tag">
                    <div className="title-box">
                        <div className="shape-box">
                            <div className="line"></div>
                            <div className="round"></div>
                        </div>
                        <div className="text">
                            <h3>Popular Tag</h3>
                        </div>
                    </div>
                    <ul className="sidebar__single-tag-list">
                        {tags.map((tag, index) => (
                            <li key={index}><Link href="#">{tag}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
        
    );
};

export default BlogSidebar;
