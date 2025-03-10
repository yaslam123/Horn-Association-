import CaseThree from "@/components/common/CaseThree";
import TeamOne from "@/components/common/TeamOne";
import CtaOne from "@/components/common/CtaOne";
import Layout from "@/components/layout/Layout";

export default function Home() {
  const caseStudies = [
    {
      category: "Medical / Health",
      title: "Health Care Law",
      image: "/assets/img/resource/case-v3-img7.jpg",
      link: "/case-details",
    },
    {
      category: "business / tax",
      title: "Business Contracts",
      image: "/assets/img/resource/case-v3-img8.jpg",
      link: "/case-details",
    },
    {
      category: "home / interior",
      title: "real estate law",
      image: "/assets/img/resource/case-v3-img9.jpg",
      link: "/case-details",
    },
    // Add more case studies as needed...
  ];

  return (
    <>
      <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Expert lawyer">
        <>
          {/* Team Page Start */}
          <TeamOne
            className="team-one team-one--team"
            sectionTitle="Experienced Attorneys"
            subTitle="Meet Our Lawyers"
            teamData={[
              {
                name: "Pamela Lasen",
                position: "Senior Partner",
                image: "/assets/img/team/team-v1-img1.png",
                social: [
                  { url: "#", iconClass: "icon-icon-4" },
                  { url: "#", iconClass: "icon-icon-3" },
                  { url: "#", iconClass: "icon-icon-2" },
                  { url: "#", iconClass: "icon-icon-1" },
                ],
              },
              {
                name: "Beverly Daniels",
                position: "Senior Partner",
                image: "/assets/img/team/team-v1-img2.png",
                social: [
                  { url: "#", iconClass: "icon-icon-4" },
                  { url: "#", iconClass: "icon-icon-3" },
                  { url: "#", iconClass: "icon-icon-2" },
                  { url: "#", iconClass: "icon-icon-1" },
                ],
              },
              {
                name: "Fred Vaughan",
                position: "Senior Partner",
                image: "/assets/img/team/team-v1-img3.png",
                social: [
                  { url: "#", iconClass: "icon-icon-4" },
                  { url: "#", iconClass: "icon-icon-3" },
                  { url: "#", iconClass: "icon-icon-2" },
                  { url: "#", iconClass: "icon-icon-1" },
                ],
              },
            ]}
          />
          {/* Team Page End */}

          {/* CTA One Start */}
          <CtaOne
            ctaTitle="Have any query, contact us!"
            queryText="Contact with us"
          />
          {/* CTA One End */}

          {/* Case Studies Start */}
          <CaseThree caseStudies={caseStudies} />
          {/* Case Studies End */}
        </>
      </Layout>
    </>
  );
}
