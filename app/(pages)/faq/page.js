'use client'
import Link from "next/link"
import TestimonialOne from "@/components/slider/TestimonialOne";
import Layout from "@/components/layout/Layout"
import { useState } from 'react'

export default function Home() {
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    // Dynamic FAQ data
    const faqData = [
        {
            id: 1,
            question: "Will there be more than one attorney working on my case?",
            answer: "Replenish given whose be signs is land itself all isn't night seasons cattle place day seas sixth wherein void don't good you're his it sea third let don't creature own years the make green be said won't his there divide whose give form moved seasons fill beginning fill two she land is."
        },
        {
            id: 2,
            question: "What is the hardest question to ask a lawyer?",
            answer: "Replenish given whose be signs is land itself all isn't night seasons cattle place day seas sixth wherein void don't good you're his it sea third let don't creature own years the make green be said won't his there divide whose give form moved seasons fill beginning fill two she land is."
        },
        {
            id: 3,
            question: "What should I bring to the consultation or first meeting?",
            answer: "Replenish given whose be signs is land itself all isn't night seasons cattle place day seas sixth wherein void don't good you're his it sea third let don't creature own years the make green be said won't his there divide whose give form moved seasons fill beginning fill two she land is."
        },
        {
            id: 4,
            question: "What is the typical legal process like?",
            answer: "Replenish given whose be signs is land itself all isn't night seasons cattle place day seas sixth wherein void don't good you're his it sea third let don't creature own years the make green be said won't his there divide whose give form moved seasons fill beginning fill two she land is."
        },
        {
            id: 5,
            question: "What types of cases does your law firm handle?",
            answer: "Replenish given whose be signs is land itself all isn't night seasons cattle place day seas sixth wherein void don't good you're his it sea third let don't creature own years the make green be said won't his there divide whose give form moved seasons fill beginning fill two she land is."
        },
        {
            id: 6,
            question: "Who can bring a case on behalf of a family member who died?",
            answer: "Replenish given whose be signs is land itself all isn't night seasons cattle place day seas sixth wherein void don't good you're his it sea third let don't creature own years the make green be said won't his there divide whose give form moved seasons fill beginning fill two she land is."
        },
        {
            id: 7,
            question: "What if I Have a Legal Problem With My Attorney?",
            answer: "Replenish given whose be signs is land itself all isn't night seasons cattle place day seas sixth wherein void don't good you're his it sea third let don't creature own years the make green be said won't his there divide whose give form moved seasons fill beginning fill two she land is."
        },
        {
            id: 8,
            question: "How do I choose which lawyer is right for me?",
            answer: "Replenish given whose be signs is land itself all isn't night seasons cattle place day seas sixth wherein void don't good you're his it sea third let don't creature own years the make green be said won't his there divide whose give form moved seasons fill beginning fill two she land is."
        }
    ];

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
        <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="essential FAQ">
            <section className="faq-page">
                <div className="container">
                    <div className="faq-page__inner">
                        <div className="sec-title">
                            <div className="sub-title">
                                <div className="icon">
                                    <img src="/assets/img/icon/sec-title-img1.png" alt="Icon" />
                                </div>
                                <div className="text">
                                    <p>welcome to lavale</p>
                                </div>
                            </div>
                            <h2>Every general question is listed here</h2>
                        </div>

                        <ul className="accrodion-grp faq-one__accrodion">
                            {faqData.map((faq, index) => (
                                <li
                                    className={`accrodion ${activeFaq === index ? 'active' : ''}`}
                                    key={index}
                                >
                                    <div
                                        className="accrodion-title"
                                        onClick={() => toggleFaq(index)}
                                    >
                                        <h3>{faq.question}</h3>
                                    </div>
                                    {activeFaq === index && (
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>{faq.answer}</p>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <TestimonialOne />
            <section className="blog-two blog-two--faq">
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
            
        </Layout>
    );
}
