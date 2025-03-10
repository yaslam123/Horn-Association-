"use client";

import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import ServicesTwo from '@/components/common/ServicesTwo';
import AboutOne from '@/components/common/AboutOne';
import Layout from "@/components/layout/Layout";

const services = [
    {
        id: 1,
        imgSrc: '/assets/img/service/services-v2-img1.jpg',
        icon: 'icon-icon-30',
        title: 'family violence',
        description: 'Likeness had fruit moved herb earth sea drying creature own',
        link: '/criminal-case'
    },
    {
        id: 2,
        imgSrc: '/assets/img/service/services-v2-img2.jpg',
        icon: 'icon-icon-31',
        title: 'Criminal Case',
        description: 'Likeness had fruit moved herb earth sea drying creature own',
        link: '/criminal-case'
    },
    {
        id: 3,
        imgSrc: '/assets/img/service/services-v2-img3.jpg',
        icon: 'icon-icon-32',
        title: 'Business Law',
        description: 'Likeness had fruit moved herb earth sea drying creature own',
        link: '/criminal-case'
    },
    {
        id: 4,
        imgSrc: '/assets/img/service/services-v2-img4.jpg',
        icon: 'icon-icon-33',
        title: 'Insurance Law',
        description: 'Likeness had fruit moved herb earth sea drying creature own',
        link: '/criminal-case'
    },
    {
        id: 5,
        imgSrc: '/assets/img/service/services-v2-img5.jpg',
        icon: 'icon-icon-38',
        title: 'Health care law',
        description: 'Likeness had fruit moved herb earth sea drying creature own',
        link: '/criminal-case'
    },
    {
        id: 6,
        imgSrc: '/assets/img/service/services-v2-img6.jpg',
        icon: 'icon-icon-39',
        title: 'real estate law',
        description: 'Likeness had fruit moved herb earth sea drying creature own',
        link: '/criminal-case'
    }
];

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const sectionClassName = 'about-one';
    const content = {
        subtitle: 'welcome to lavale',
        title: 'Compassion for Representation Passion in Justice',
        text: 'Fill unto likeness had shall is herb air set midst land in meat green had creepeth days bearing winged together malea moving also two replenish spirit set moving. All moving give form deep upon grass man it fread',
        buttonText: 'Learn More',
        buttonLink: '#',
        signature: 'Hector Scudder, CEO'
    };
    const imageSrc = '/assets/img/about/about-v1-img1.jpg';
    const counterData = [
        {
            icon: 'icon-icon-13',
            count: 245,
            suffix: '+',
            text: 'Global total Platform',
        },
        {
            icon: 'icon-icon-14',
            count: 45,
            suffix: 'k+',
            text: 'Total Case Solved',
        },
        {
            icon: 'icon-icon-15',
            count: 552,
            suffix: '+',
            text: 'Global Award win',
        },
    ];
    const dynamicClassName = 'services-two services-two--service';

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="Services">
                <div>
                    <AboutOne
                        sectionClassName={sectionClassName}
                        content={content}
                        imageSrc={imageSrc}
                        counterData={counterData}
                    />
                    {/* Start Success One Content */}
                    <section className="success-one success-one--service">
                        <div className="shape1">
                            <img src="/assets/img/shape/success-v1-shape1.png" alt="Shape" />
                        </div>
                        <div className="container">
                            <div className="row">
                                {/* Start Success One Content */}
                                <div className="col-xl-5">
                                    <div className="success-one__content">
                                        <div className="sec-title">
                                            <div className="sub-title">
                                                <div className="icon">
                                                    <img src="/assets/img/icon/sec-title-img1.png" alt="Icon" />
                                                </div>
                                                <div className="text">
                                                    <p>Skill Percentage</p>
                                                </div>
                                            </div>
                                            <h2 className="">
                                                Delivering solution <br />
                                                by expert lawyer
                                            </h2>
                                        </div>

                                        <div className="success-one__content-text">
                                            <p>
                                                Likeness had fruit moved herb you earth sea dry you're creature own man give It fish
                                                cattle they're male creepeth give male
                                            </p>
                                        </div>

                                        <div className="success-one__progress">
                                            <div className="success-one__progress-single">
                                                <div className="title">
                                                    <p>Family Law</p>
                                                </div>
                                                <div className="bar">
                                                    <div className="bar-inner-one count-bar" data-percent="90%">
                                                        <div className="count-text">90%</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="success-one__progress-single">
                                                <div className="title">
                                                    <p>Business Law</p>
                                                </div>
                                                <div className="bar">
                                                    <div className="bar-inner-two count-bar" data-percent="80%">
                                                        <div className="count-text">80%</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="success-one__progress-single mb0">
                                                <div className="title">
                                                    <p>Crime Law</p>
                                                </div>
                                                <div className="bar">
                                                    <div className="bar-inner-three count-bar" data-percent="90%">
                                                        <div className="count-text">90%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Success One Content */}

                                {/* Start Success One Img */}
                                <div className="col-xl-7">
                                    <div className="success-one__img clearfix">
                                        <img src="/assets/img/resource/success-v1-img1.jpg" alt="Success Image" />
                                    </div>
                                </div>
                                {/* End Success One Img */}
                            </div>
                        </div>
                    </section>
                    {/* End Success One Content */}

                    <section className={dynamicClassName}>
                        <ServicesTwo services={services} />
                    </section>

                    {/* Start Video One */}
                    <section className="video-one">
                        <div className="video-one__bg" style={{ backgroundImage: 'url(/assets/img/background/video-v1-bg.jpg)' }}></div>
                        <div className="container">
                            <div className="video-one__inner">
                                <div className="video-one__video-btn">
                                    <button 
                                        className="video-one__icon video-popup" 
                                        onClick={() => setIsOpen(true)}
                                    >
                                        <span className="icon-icon-40"></span>
                                    </button>
                                </div>
                                <div className="title-box text-center">
                                    <p>intro video</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* End Video One */}
                </div>

                {/* ModalVideo component initialization */}
                <ModalVideo
                    channel='youtube'
                    isOpen={isOpen}
                    videoId='pVE92TNDwUk'
                    onClose={() => setIsOpen(false)}
                />
            </Layout>
        </>
    );
}
