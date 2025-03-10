"use client";

import ServiceDetails from "@/components/common/ServiceDetails";
import Layout from "@/components/layout/Layout";

export default function Home() {
  const serviceDetails = {
    serviceListTitle: "Service List",
    serviceList: [
      {
        name: "Corporate Legal Services",
        link: "/corporate-legal",
        isActive: false,
      },
      {
        name: "Foreign Investment Advisory",
        link: "/foreign-investment",
        isActive: false,
      },
      {
        name: "Energy & Natural Resources Law",
        link: "/energy-law",
        isActive: true,
      },
      {
        name: "Maritime Law & Shipping Regulations",
        link: "/maritime-law",
        isActive: false,
      },
      {
        name: "Mining Law & Mineral Rights",
        link: "/mining-law",
        isActive: false,
      },
      {
        name: "Public Sector Advisory",
        link: "/public-sector",
        isActive: false,
      },
      {
        name: "Infrastructure & Construction Law",
        link: "/infrastructure-law",
        isActive: false,
      },
      {
        name: "Financial & Regulatory Compliance",
        link: "/financial-law",
        isActive: false,
      },
      {
        name: "Risk Management & Dispute Resolution",
        link: "/risk-management",
        isActive: false,
      },
    ],
    contactPattern: "assets/img/pattern/sidebar-contact-pattern.png",
    contactIcon: "/assets/img/icon/about-v2-icon1.png",
    contactTitle: "Get in Touch",
    contactSubtitle: "Legal Expertise in Energy & Natural Resources",
    contactLink: "/contact",
    contactButtonText: "Contact Us",
    downloadTitle: "Download File",
    downloads: [
      { text: "Energy Law Guide", link: "/energy-law-guide" },
      {
        text: "Regulatory Compliance Checklist",
        link: "/compliance-checklist",
      },
    ],
    mainImage: "/assets/img/service/service3.jpg",
    serviceTitle: "Energy & Natural Resources Law",
    serviceDescription1:
      "Horn Associates provides expert legal guidance in the exploration, development, and regulation of natural resources, including oil, gas, and renewable energy projects. We help businesses navigate the complexities of licensing, environmental compliance, and contractual agreements.",
    serviceDescription2:
      "Our legal team ensures that energy and resource-related businesses comply with Somalia’s legal frameworks while maximizing investment opportunities. We offer specialized advisory services to mitigate risks and support sustainable energy development.",
    benefitTitle: "Benefits of Our Energy Law Services",
    benefitDescription:
      "The energy sector is a high-stakes industry that requires strategic legal planning. Our experts provide regulatory compliance, contract negotiation, and risk mitigation to support businesses in the energy and natural resources sector.",
    benefits: [
      { icon: "icon-icon-9", title: "Licensing & Regulatory Compliance" },
      {
        icon: "icon-icon-10",
        title: "Contract Negotiation for Energy Projects",
      },
      { icon: "icon-icon-11", title: "Environmental & Safety Compliance" },
      { icon: "icon-icon-12", title: "Legal Risk Management in Energy Sector" },
    ],
    videoThumbnail: "/assets/img/service/service-details-img2.jpg",
    videoId: "dQw4w9WgXcQ",
    justiceTitle: "Powering Growth with Legal Expertise",
    justiceText1:
      "The energy and natural resources sector is evolving rapidly. Our legal team provides strategic guidance to help businesses operate legally and efficiently while maximizing growth opportunities.",
    justiceList: [
      "Navigating Legal Challenges in the Energy Sector",
      "Ensuring Compliance, Maximizing Investment",
      "Strategic Legal Solutions for Resource Development",
    ],
    contentImgs3: [
      "/assets/img/service/service-details-img3.jpg",
      "/assets/img/service/service-details-img4.jpg",
    ],
    faqTitle: "Frequently Asked Questions",
    faqIntro:
      "Energy law requires deep legal expertise. Here are answers to common questions regarding energy and resource legal matters in Somalia.",
    faqs: [
      {
        question:
          "What are the legal requirements for starting an energy project in Somalia?",
        answer:
          "Energy projects require government approvals, environmental permits, and compliance with industry regulations. We assist clients through every legal step.",
      },
      {
        question:
          "How can legal services help mitigate risks in energy investments?",
        answer:
          "We provide contract structuring, regulatory compliance assessments, and dispute resolution strategies to protect investors and businesses in the energy sector.",
      },
      {
        question: "What environmental regulations apply to energy companies?",
        answer:
          "Businesses must adhere to national and international environmental laws. We help companies navigate these requirements to ensure full compliance and sustainability.",
      },
    ],
  };

  return (
    <Layout
      headerStyle={1}
      footerStyle={2}
      breadcrumbTitle="Energy & Natural Resources Law"
    >
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}
