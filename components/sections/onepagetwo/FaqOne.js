"use client";

import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

// Default data for the FAQ component
const faqData = [
  {
    question: 'What are good questions to ask law firms?',
    answer: "Likeness had fruit moved herb you're earth sea dry you're creature own man give It fish cattle they're male creepeth give male",
  },
  {
    question: 'What are your non-academic interests?',
    answer: "Likeness had fruit moved herb you're earth sea dry you're creature own man give It fish cattle they're male creepeth give male",
  },
  {
    question: 'What is the hardest question to ask a lawyer?',
    answer: "Likeness had fruit moved herb you're earth sea dry you're creature own man give It fish cattle they're male creepeth give male",
  },
];

export default function FaqOne({ faqs = faqData }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true after the component mounts
  }, []);

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      {/* Start Faq One */}
      <section className="faq-one">
        <div className="container">
          <div className="row">
            {/* Start Faq One Img */}
            <div className="col-xl-6">
              <div className="faq-one__img">
                <div className="faq-one__img-inner">
                  <img src="/assets/img/resource/faq-v1-img1.jpg" alt="FAQ" />
                  <div className="overlay-content">
                    <div className="counter-box">
                      <h2 className="count">
                        {isClient ? (
                          <CountUp start={0} end={24} duration={2.75} />
                        ) : (
                          24 // Static number during server render
                        )}
                      </h2>
                    </div>
                    <div className="text-box">
                      <h3>
                        years of <br />
                        experience
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Faq One Img */}

            {/* Start Faq One Content */}
            <div className="col-xl-6">
              <div className="faq-one__content">
                <div className="sec-title">
                  <div className="sub-title">
                    <div className="icon">
                      <img src="/assets/img/icon/sec-title-img1.png" alt="Icon" />
                    </div>
                    <div className="text">
                      <p>General questions</p>
                    </div>
                  </div>
                  <h2 className="">
                    Every essential query <br />
                    for our clients
                  </h2>
                </div>

                <ul className="accrodion-grp faq-one__accrodion" data-grp-name="faq-one-accrodion">
                  {faqs.map((faq, index) => (
                    <li
                      key={index}
                      className={`accrodion wow animated fadeInRight ${
                        isActive.key === index && isActive.status ? 'active' : ''
                      }`}
                      data-wow-delay="0.1s"
                      onClick={() => handleToggle(index)}
                    >
                      <div className="accrodion-title">
                        <h3>{faq.question}</h3>
                      </div>
                      <div className="accrodion-content" style={{ display: isActive.key === index && isActive.status ? 'block' : 'none' }}>
                        <div className="inner">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* End Faq One Content */}
          </div>
        </div>
      </section>
      {/* End Faq One */}
    </>
  );
}
