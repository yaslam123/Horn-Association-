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
        isActive: true,
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
    contactSubtitle: "Expert Financial & Regulatory Compliance Advisory",
    contactLink: "/contact",
    contactButtonText: "Contact Us",
    downloadTitle: "Download File",
    downloads: [
      {
        text: "Financial Compliance Guide",
        link: "/financial-compliance-guide",
      },
      { text: "Banking & Regulatory Framework", link: "/banking-regulations" },
    ],
    mainImage: "/assets/img/service/service8.jpg",
    serviceTitle: "Financial & Regulatory Compliance",
    serviceDescription1:
      "Horn Associates provides expert legal advisory services on financial compliance, banking regulations, and corporate governance. We assist financial institutions, businesses, and investors in ensuring compliance with national and international regulatory frameworks.",
    serviceDescription2:
      "Navigating financial regulations requires specialized expertise. Our team offers guidance on anti-money laundering (AML) compliance, tax regulations, corporate finance laws, and financial risk assessments to protect businesses and investors.",
    benefitTitle: "Benefits of Our Financial Compliance Services",
    benefitDescription:
      "Strong regulatory compliance ensures financial security and operational success. Our legal team helps businesses and financial institutions remain compliant while mitigating risks.",
    benefits: [
      {
        icon: "icon-icon-9",
        title: "Regulatory Compliance & Governance Advisory",
      },
      {
        icon: "icon-icon-10",
        title: "Banking & Financial Services Legal Support",
      },
      { icon: "icon-icon-11", title: "Anti-Money Laundering (AML) Compliance" },
      { icon: "icon-icon-12", title: "Corporate Finance & Taxation Law" },
    ],
    videoThumbnail: "/assets/img/service/service-details-img2.jpg",
    videoId: "dQw4w9WgXcQ",
    justiceTitle: "Ensuring Compliance, Strengthening Financial Security",
    justiceText1:
      "Financial compliance is key to preventing legal risks and ensuring sustainable business growth. Our legal team provides strategic advisory for regulatory adherence and financial integrity.",
    justiceList: [
      "Ensuring Compliance in Financial Operations",
      "Legal Expertise for Banking & Corporate Finance",
      "Strategic Solutions for Regulatory Compliance",
    ],
    contentImgs3: [
      "/assets/img/service/service-details-img3.jpg",
      "/assets/img/service/service-details-img4.jpg",
    ],
    faqTitle: "Frequently Asked Questions",
    faqIntro:
      "Financial and regulatory compliance is a critical area of legal support. Here are answers to common questions regarding financial compliance and governance.",
    faqs: [
      {
        question:
          "What are the key financial regulations businesses must comply with in Somalia?",
        answer:
          "Businesses must comply with tax laws, banking regulations, and anti-money laundering policies. We provide comprehensive legal guidance on financial compliance.",
      },
      {
        question:
          "How can companies ensure AML (Anti-Money Laundering) compliance?",
        answer:
          "AML compliance requires strong internal policies, reporting mechanisms, and adherence to global regulatory standards. Our team assists businesses in implementing AML strategies.",
      },
      {
        question:
          "What legal support is available for corporate finance and tax compliance?",
        answer:
          "We provide advisory services on tax regulations, corporate finance structuring, and financial governance to help businesses remain legally compliant and financially sound.",
      },
    ],
  };

  return (
    <Layout
      headerStyle={1}
      footerStyle={2}
      breadcrumbTitle="Financial & Regulatory Compliance"
    >
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}
