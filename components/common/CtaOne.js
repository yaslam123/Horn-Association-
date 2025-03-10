const CtaOne = ({ queryText, ctaTitle }) => {
    return (
      <section className="cta-one">
        <div className="cta-one__bg" style={{ backgroundImage: `url(/assets/img/background/cta-v1-bg.jpg)` }}></div>
        <div className="container">
          <div className="cta-one__inner text-center">
            <div className="cta-one__icon">
              <img src="/assets/img/icon/cta-icon.png" alt="" />
            </div>
            <h2>{ctaTitle}</h2>
            <div className="btn-box">
              <a className="thm-btn" href="#">
                {queryText}
                <span className="thm-btn__icon">
                  <i className="icon-icon-8"></i>
                </span>
                <span className="thm-btn__hover-group">
                  <span className="thm-btn__hover thm-btn__hover--1"></span>
                  <span className="thm-btn__hover thm-btn__hover--2"></span>
                  <span className="thm-btn__hover thm-btn__hover--3"></span>
                  <span className="thm-btn__hover thm-btn__hover--4"></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default CtaOne;
  