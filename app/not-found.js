

import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Error404() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="404 Error">
          
            <div>
                {/*Error Page Start*/}
                <section className="error-page">
                    <div className="error-page-shape-one float-bob-x">
                    </div>
                    <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                        <div className="error-page__inner">
                            <div className="error-page__title-box">
                            <h2 className="error-page__title">404</h2>
                            </div>
                            <h3 className="error-page__tagline">
                            Sorry we can't find that page!
                            </h3>
                            <p className="error-page__text">
                            The page you are looking for was never existed.
                            </p>
                            <form className="error-page__form">
                            <div className="error-page__form-input">
                                <input type="search" placeholder="Search here" />
                                <button type="submit">
                                <i className="fas fa-search" />
                                </button>
                            </div>
                            </form>
                            <div className="btn-box">
                                <Link href="/">
                                    <div className="thm-btn">
                                        Back to home
                                        <span className="thm-btn__icon"></span>
                                        <span className="thm-btn__hover-group">
                                            <span className="thm-btn__hover thm-btn__hover--1"></span>
                                            <span className="thm-btn__hover thm-btn__hover--2"></span>
                                            <span className="thm-btn__hover thm-btn__hover--3"></span>
                                            <span className="thm-btn__hover thm-btn__hover--4"></span>
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/*Error Page End*/}
            </div>
            
            </Layout>
        </>
    )
}
