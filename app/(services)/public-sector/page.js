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
        isActive: false,
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
        isActive: true,
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
    contactSubtitle: "Legal Expertise for Public Sector Entities",
    contactLink: "/contact",
    contactButtonText: "Contact Us",
    downloadTitle: "Download File",
    downloads: [
      { text: "Public Sector Legal Guide", link: "/public-sector-guide" },
      {
        text: "Government Contracting Regulations",
        link: "/government-contracting",
      },
    ],
    mainImage: "/assets/img/service/service6.jpg",
    serviceTitle: "Public Sector Advisory",
    serviceDescription1:
      "Horn Associates provides specialized legal services for government agencies, public institutions, and entities operating in the public sector. We assist in regulatory compliance, government contracting, and public-private partnerships (PPP).",
    serviceDescription2:
      "Our expertise in public sector law ensures that institutions navigate legal frameworks effectively, fostering transparency, accountability, and regulatory compliance. We provide strategic legal guidance to support government projects, infrastructure development, and policy implementation.",
    benefitTitle: "Benefits of Our Public Sector Legal Services",
    benefitDescription:
      "Public institutions require specialized legal expertise to navigate regulatory environments. Our services support government projects, legal compliance, and institutional growth.",
    benefits: [
      { icon: "icon-icon-9", title: "Regulatory Compliance & Legal Advisory" },
      {
        icon: "icon-icon-10",
        title: "Public-Private Partnership (PPP) Legal Support",
      },
      { icon: "icon-icon-11", title: "Government Contract Negotiation" },
      {
        icon: "icon-icon-12",
        title: "Dispute Resolution for Public Sector Entities",
      },
    ],
    videoThumbnail: "/assets/img/service/service-details-img2.jpg",
    videoId: "dQw4w9WgXcQ",
    justiceTitle: "Strengthening Public Institutions Through Legal Excellence",
    justiceText1:
      "Public sector legal advisory is critical for institutional efficiency and legal compliance. We work closely with government bodies to ensure smooth legal operations.",
    justiceList: [
      "Ensuring Compliance in Public Sector Operations",
      "Legal Expertise for Government Contracts & Partnerships",
      "Strategic Legal Solutions for Institutional Growth",
    ],
    contentImgs3: [
      "/assets/img/service/service-details-img3.jpg",
      "/assets/img/service/service-details-img4.jpg",
    ],
    faqTitle: "Frequently Asked Questions",
    faqIntro:
      "Public sector legal matters require specialized knowledge. Here are answers to common legal questions regarding government operations and compliance.",
    faqs: [
      {
        question: "What are the legal requirements for government contracting?",
        answer:
          "Public sector contracts must comply with procurement regulations, transparency laws, and budgetary constraints. We assist in drafting and reviewing government contracts to ensure compliance.",
      },
      {
        question: "How do public-private partnerships (PPPs) work legally?",
        answer:
          "PPPs involve contracts between public institutions and private entities. We provide legal structuring, risk assessments, and regulatory compliance support for successful partnerships.",
      },
      {
        question: "How can public institutions ensure legal compliance?",
        answer:
          "Government bodies must adhere to national and international legal frameworks. Our legal experts provide compliance assessments and strategic advisory services to prevent legal risks.",
      },
    ],
  };

  return (
    <Layout
      headerStyle={1}
      footerStyle={2}
      breadcrumbTitle="Public Sector Advisory"
    >
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}
