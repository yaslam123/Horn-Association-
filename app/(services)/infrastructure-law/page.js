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
        isActive: true,
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
    contactSubtitle: "Expert Legal Support for Infrastructure & Construction",
    contactLink: "/contact",
    contactButtonText: "Contact Us",
    downloadTitle: "Download File",
    downloads: [
      { text: "Infrastructure Law Guide", link: "/infrastructure-law-guide" },
      {
        text: "Construction Regulations Overview",
        link: "/construction-regulations",
      },
    ],
    mainImage: "/assets/img/service/service7.jpg",
    serviceTitle: "Infrastructure & Construction Law",
    serviceDescription1:
      "Horn Associates provides legal advisory services for infrastructure and construction projects, ensuring regulatory compliance, contract security, and risk mitigation. We assist in drafting, reviewing, and negotiating construction contracts, public-private partnerships, and project financing agreements.",
    serviceDescription2:
      "With Somalia’s growing infrastructure sector, legal compliance is essential for smooth operations. Our team supports developers, contractors, and public institutions by ensuring their projects adhere to national and international construction laws and procurement regulations.",
    benefitTitle: "Benefits of Our Infrastructure & Construction Law Services",
    benefitDescription:
      "Construction projects involve complex legal challenges. We provide expert legal support to help clients navigate contract negotiations, procurement regulations, and risk management strategies.",
    benefits: [
      {
        icon: "icon-icon-9",
        title: "Construction Contract Drafting & Negotiation",
      },
      {
        icon: "icon-icon-10",
        title: "Regulatory Compliance & Risk Management",
      },
      {
        icon: "icon-icon-11",
        title: "Public-Private Partnership (PPP) Legal Support",
      },
      {
        icon: "icon-icon-12",
        title: "Dispute Resolution & Litigation Support",
      },
    ],
    videoThumbnail: "/assets/img/service/service-details-img2.jpg",
    videoId: "dQw4w9WgXcQ",
    justiceTitle: "Building a Stronger Future with Legal Excellence",
    justiceText1:
      "Infrastructure and construction projects require a solid legal foundation. Our team ensures smooth operations through expert legal advisory services.",
    justiceList: [
      "Ensuring Compliance in Construction & Infrastructure Projects",
      "Legal Expertise for Public-Private Partnerships",
      "Strategic Legal Support for Developers & Contractors",
    ],
    contentImgs3: [
      "/assets/img/service/service-details-img3.jpg",
      "/assets/img/service/service-details-img4.jpg",
    ],
    faqTitle: "Frequently Asked Questions",
    faqIntro:
      "Infrastructure law is complex, requiring expert legal insight. Here are answers to common legal questions regarding construction projects and compliance.",
    faqs: [
      {
        question:
          "What are the legal requirements for infrastructure projects in Somalia?",
        answer:
          "Infrastructure projects require government approvals, contract compliance, and adherence to public procurement laws. We provide full legal guidance throughout the project lifecycle.",
      },
      {
        question:
          "How do public-private partnerships (PPPs) work in infrastructure projects?",
        answer:
          "PPPs involve collaboration between the government and private entities. Our legal experts assist with structuring agreements and ensuring compliance with relevant laws.",
      },
      {
        question: "What legal challenges do construction projects face?",
        answer:
          "Construction projects must comply with contract law, environmental regulations, and procurement policies. We help clients mitigate risks and resolve legal disputes efficiently.",
      },
    ],
  };

  return (
    <Layout
      headerStyle={1}
      footerStyle={2}
      breadcrumbTitle="Infrastructure & Construction Law"
    >
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}
