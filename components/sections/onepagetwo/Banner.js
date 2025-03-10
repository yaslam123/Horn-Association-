import React from 'react';
import Link from 'next/link';

export default function Banner({
  backgroundUrl = '/assets/img/slider/banner-v2-img1.jpg',
  shapes = [
    { src: '/assets/img/shape/banner-v2-shape1.png', alt: 'Shape 1', className: 'shape1 float-bob-y' },
    { src: '/assets/img/shape/banner-v2-shape2.png', alt: 'Shape 2', className: 'shape2 float-bob-y' },
  ],
  socialLinks = [
    { href: '#', iconClass: 'icon-icon-1' },
    { href: '#', iconClass: 'icon-icon-2' },
    { href: '#', iconClass: 'icon-icon-3' },
    { href: '#', iconClass: 'icon-icon-4' },
  ],
  title = 'Everyone deserves legal assistance',
  buttonText = 'Learn More',
  buttonLink = '#'
}) {
  return (
    <section className="banner-two" id="home">
      <div
        className="banner-two__bg wow fadeInRight"
        data-wow-delay="0ms"
        data-wow-duration="1500ms"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      ></div>
      {shapes.map((shape, index) => (
        <div key={index} className={shape.className}>
          <img src={shape.src} alt={shape.alt} />
        </div>
      ))}
      <div className="banner-two__social-links">
        <ul>
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href}>
                <span className={link.iconClass}></span>
              </a>
            </li>
          ))}
        </ul>
        <div className="title-box">
          <p>follow us ----</p>
        </div>
      </div>

      <div className="container">
        <div
          className="banner-two__content wow fadeInLeft"
          data-wow-delay="0ms"
          data-wow-duration="1500ms"
        >
          <h2>
            {title.split(' ').map((word, index) => (
              <React.Fragment key={index}>
                {word} <br />
              </React.Fragment>
            ))}
          </h2>
          <div className="btn-box">
            <Link href={buttonLink} className="thm-btn">
              {buttonText}
              <span className="thm-btn__icon">
                <i className="icon-icon-8"></i>
              </span>
              <span className="thm-btn__hover-group">
                <span className="thm-btn__hover thm-btn__hover--1"></span>
                <span className="thm-btn__hover thm-btn__hover--2"></span>
                <span className="thm-btn__hover thm-btn__hover--3"></span>
                <span className="thm-btn__hover thm-btn__hover--4"></span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
