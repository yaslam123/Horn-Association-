
'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter1() {
    // Isotope
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("*")
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".items-container", {
                itemSelector: ".masonry-item",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".masonry-item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key)
    },
        []
    )

    const activeBtn = (value) => (value === filterKey ? "filter active" : "filter")



    return (
        <>

            <div className="case-three__menu-box text-center">
                <ul className="project-filter clearfix post-filter has-dynamic-filters-counter">
                    <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}><span className="filter-text">all</span> </li>
                    <li className={activeBtn("cat-1")} onClick={handleFilterKeyChange("cat-1")}><span className="filter-text">business</span></li>
                    <li className={activeBtn("cat-2")} onClick={handleFilterKeyChange("cat-2")}><span className="filter-text">violence</span></li>
                    <li className={activeBtn("cat-3")} onClick={handleFilterKeyChange("cat-3")}><span className="filter-text">civil law</span></li>
                    <li className={activeBtn("cat-4")} onClick={handleFilterKeyChange("cat-4")}><span className="filter-text">health care</span></li>
                    <li className={activeBtn("cat-5")} onClick={handleFilterKeyChange("cat-5")}><span className="filter-text">insurance</span></li>
                </ul>
            </div>
            <div className="items-container row clearfix">
                {/* Case Block */}
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item all cat-1 col-lg-4 col-md-6 col-sm-12">
                    <div className="case-three__single">
                        <div className="case-three__single-img">
                            <div className="inner">
                            <img src="assets/img/resource/case-v3-img1.jpg" alt="" />

                            <div className="overlay-icon">
                                <Link href="/case-details">
                                <span className="icon-icon-22"></span>
                                </Link>
                            </div>
                            </div>
                        </div>

                        <div className="case-three__single-content">
                            <p>Corporate / tax</p>
                            <h2>
                            <Link href="/case-details">Business consultancy</Link>
                            </h2>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="col-lg-4 col-md-6 col-sm-12  masonry-item all cat-2 col-lg-4 col-md-6 col-sm-12">
                    <div className="case-three__single">
                        <div className="case-three__single-img">
                            <div className="inner">
                            <img src="assets/img/resource/case-v3-img2.jpg" alt="" />

                            <div className="overlay-icon">
                                <Link href="/case-details">
                                <span className="icon-icon-22"></span>
                                </Link>
                            </div>
                            </div>
                        </div>

                        <div className="case-three__single-content">
                            <p>family / couple</p>
                            <h2>
                            <Link href="/case-details">family violence law</Link>
                            </h2>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item all cat-1 cat-2 cat-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="case-three__single">
                        <div className="case-three__single-img">
                            <div className="inner">
                            <img src="assets/img/resource/case-v3-img3.jpg" alt="" />

                            <div className="overlay-icon">
                                <Link href="/case-details">
                                <span className="icon-icon-22"></span>
                                </Link>
                            </div>
                            </div>
                        </div>

                        <div className="case-three__single-content">
                            <p>family / couple</p>
                            <h2>
                            <Link href="/case-details">marriage agreement</Link>
                            </h2>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item all cat-1 cat-3 col-lg-4 col-md-6 col-sm-12">
                    <div className="case-three__single">
                        <div className="case-three__single-img">
                            <div className="inner">
                            <img src="/assets/img/resource/case-v3-img4.jpg" alt="" />

                            <div className="overlay-icon">
                                <Link href="/case-details">
                                <span className="icon-icon-22"></span>
                                </Link>
                            </div>
                            </div>
                        </div>

                        <div className="case-three__single-content">
                            <p>Corporate / tax</p>
                            <h2>
                            <Link href="/case-details">Public company law</Link>
                            </h2>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item all cat-2 cat-1 col-lg-4 col-md-6 col-sm-12">
                    <div className="case-three__single">
                        <div className="case-three__single-img">
                            <div className="inner">
                            <img src="/assets/img/resource/case-v3-img5.jpg" alt="" />

                            <div className="overlay-icon">
                                <Link href="/case-details">
                                <span className="icon-icon-22"></span>
                                </Link>
                            </div>
                            </div>
                        </div>

                        <div className="case-three__single-content">
                            <p>crime / accident</p>
                            <h2>
                            <Link href="/case-details">car accident law</Link>
                            </h2>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item all cat-2 cat-3 col-lg-4 col-md-6 col-sm-12">
                <div className="case-three__single">
                    <div className="case-three__single-img">
                        <div className="inner">
                        <img src="/assets/img/resource/case-v3-img6.jpg" alt="" />

                        <div className="overlay-icon">
                            <Link href="/case-details">
                            <span className="icon-icon-22"></span>
                            </Link>
                        </div>
                        </div>
                    </div>

                    <div className="case-three__single-content">
                        <p>Corporate / tax</p>
                        <h2>
                        <Link href="/case-details">Business tax law</Link>
                        </h2>
                    </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item all cat-4 cat-3 col-lg-4 col-md-6 col-sm-12">
                    <div className="case-three__single">
                        <div className="case-three__single-img">
                            <div className="inner">
                            <img src="/assets/img/resource/case-v3-img7.jpg" alt="" />

                            <div className="overlay-icon">
                                <Link href="/case-details">
                                <span className="icon-icon-22"></span>
                                </Link>
                            </div>
                            </div>
                        </div>

                        <div className="case-three__single-content">
                            <p>medical / health</p>
                            <h2>
                            <Link href="/case-details">health care law</Link>
                            </h2>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item all cat-5 cat-3 col-lg-4 col-md-6 col-sm-12">
                    <div className="case-three__single">
                        <div className="case-three__single-img">
                            <div className="inner">
                            <img src="/assets/img/resource/case-v3-img8.jpg" alt="" />

                            <div className="overlay-icon">
                                <Link href="/case-details">
                                <span className="icon-icon-22"></span>
                                </Link>
                            </div>
                            </div>
                        </div>

                        <div className="case-three__single-content">
                            <p>business / tax</p>
                            <h2>
                            <Link href="/case-details">company insurance</Link>
                            </h2>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item all cat-5 cat-3 col-lg-4 col-md-6 col-sm-12">
                    <div className="case-three__single">
                        <div className="case-three__single-img">
                            <div className="inner">
                            <img src="/assets/img/resource/case-v3-img9.jpg" alt="" />

                            <div className="overlay-icon">
                                <Link href="/case-details">
                                <span className="icon-icon-22"></span>
                                </Link>
                            </div>
                            </div>
                        </div>

                        <div className="case-three__single-content">
                            <p>home / interior</p>
                            <h2>
                            <Link href="/case-details">real estate law</Link>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
