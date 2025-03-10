'use client';

import React from 'react';
import CountUp from 'react-countup';

const defaultCounters = [
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
        count: 212,
        suffix: '+',
        text: 'Global Award win',
    },
    {
        icon: 'icon-icon-29',
        count: 122,
        suffix: '+',
        text: 'Business Partners',
    },
];

export default function CounterOne({ counters = defaultCounters }) {
    return (
        <>
            {/* Start Counter One */}
            <section className="counter-one">
                <div className="container">
                    <ul className="row">
                        {counters.map((counter, index) => (
                            <li
                                key={index}
                                className={`col-xl-3 col-lg-6 col-md-6 wow fadeIn${index % 2 === 0 ? 'Left' : 'Right'}`}
                                data-wow-delay={`${index * 100}ms`}
                                data-wow-duration="1500ms"
                            >
                                {/* Start Counter One Single */}
                                <div className="counter-one__single">
                                    <div className="icon-box">
                                        <span className={counter.icon}></span>
                                    </div>
                                    <div className="text-box">
                                        <h2 className="count">
                                            <CountUp end={counter.count} /> <span className="suffix">{counter.suffix}</span>
                                        </h2>
                                        <p>{counter.text}</p>
                                    </div>
                                </div>
                                {/* End Counter One Single */}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            {/* End Counter One */}
        </>
    );
}
