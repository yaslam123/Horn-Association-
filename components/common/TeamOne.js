import Link from 'next/link';

export default function TeamOne({ teamData, sectionTitle, subTitle, className }) {
  return (
    <section className={className} id="team">
      <div className="container">
        <div className="sec-title text-center">
          <div className="sub-title center">
            <div className="icon">
            <img src="/assets/img/icon/sec-title-img1.png" alt="" />
            </div>
            <div className="text">
              <p>{subTitle}</p>
            </div>
          </div>
          <h2>{sectionTitle}</h2>
        </div>

        <div className="row">
          {teamData.map((member, index) => (
            <div key={index} className={`col-xl-4 col-lg-4 wow fadeInUp`} data-wow-delay=".3s">
              <div className="team-one__single text-center">
                <div className="team-one__single-img">
                  <div className="round-box"></div>
                  <div className="inner">
                    <img src={member.image} alt={member.name} />
                  </div>
                </div>
                <div className="team-one__single-content">
                  <p>{member.position}</p>
                  <h2><Link href="#">{member.name}</Link></h2>
                  <div className="social-links">
                    {member.social.map((socialLink, index) => (
                      <a key={index} href={socialLink.url}>
                        <span className={socialLink.iconClass}></span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
