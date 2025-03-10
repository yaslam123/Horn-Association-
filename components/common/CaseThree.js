const CaseThree = ({ caseStudies}) => {
    return (
      <section className="case-three case-three--team">
        <div className="container">
          <div className="sec-title">
            <div className="sub-title">
              <div className="icon">
                <img src="/assets/img/icon/sec-title-img1.png" alt="" />
              </div>
              <div className="text">
                <p>latest case studies</p>
              </div>
            </div>
            <h2>successful case studies <br/>
                showcase here
            </h2>
          </div>
          <div className="row">
            {caseStudies.map((study, index) => (
              <div key={index} className="col-xl-4 col-lg-4">
                <div className="case-three__single">
                  <div className="case-three__single-img">
                    <div className="inner">
                      <img src={study.image} alt={study.title} />
                    </div>
                  </div>
                  <div className="case-three__single-content">
                    <p>{study.category}</p>
                    <h2><a href={study.link}>{study.title}</a></h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default CaseThree;
  