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
        isActive: true,
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
    contactSubtitle: "Expert Legal Guidance for Investors",
    contactLink: "/contact",
    contactButtonText: "Contact Us",
    downloadTitle: "Download File",
    downloads: [
      { text: "Foreign Investment Guide", link: "/investment-guide" },
      { text: "Regulatory Compliance Overview", link: "/compliance-overview" },
    ],
    mainImage: "/assets/img/service/service2.jpg",
    serviceTitle: "Foreign Investment Advisory",
    serviceDescription1:
      "Horn Associates provides strategic legal advisory services to foreign investors looking to enter the Somali market. We assist in investment structuring, regulatory compliance, and risk assessment to ensure smooth business operations.",
    serviceDescription2:
      "With our in-depth knowledge of Somalia’s evolving legal landscape, we help investors secure the necessary approvals, draft joint venture agreements, and navigate regulatory frameworks to protect their investments.",
    benefitTitle: "Benefits of Our Foreign Investment Services",
    benefitDescription:
      "Investing in a new market comes with risks, but with our expert legal guidance, foreign investors can confidently establish and expand their businesses in Somalia while ensuring full compliance with regulations.",
    benefits: [
      {
        icon: "icon-icon-9",
        title: "Legal Structuring & Investment Compliance",
      },
      { icon: "icon-icon-10", title: "Regulatory Approvals & Licensing" },
      { icon: "icon-icon-11", title: "Joint Venture & Shareholder Agreements" },
      { icon: "icon-icon-12", title: "Dispute Resolution & Risk Mitigation" },
    ],
    videoThumbnail: "/assets/img/service/service-details-img2.jpg",
    videoId: "dQw4w9WgXcQ",
    justiceTitle: "Secure Your Investments with Legal Expertise",
    justiceText1:
      "Our legal experts ensure that foreign investors have a smooth market entry experience by guiding them through Somalia’s legal frameworks, contract negotiations, and risk management processes.",
    justiceList: [
      "Navigating Legal Complexities for Foreign Investors",
      "Ensuring Compliance, Protecting Investments",
      "Strategic Advisory for Successful Market Entry",
    ],
    contentImgs3: [
      "/assets/img/service/service-details-img3.jpg",
      "/assets/img/service/service-details-img4.jpg",
    ],
    faqTitle: "Frequently Asked Questions",
    faqIntro:
      "Investing in a foreign market requires legal understanding. Here are answers to common questions regarding foreign investments in Somalia.",
    faqs: [
      {
        question:
          "What are the legal requirements for foreign investment in Somalia?",
        answer:
          "Foreign investors must comply with national regulations, obtain necessary licenses, and structure their investments within the legal framework. We provide full guidance on this process.",
      },
      {
        question:
          "How does Horn Associates assist in securing investment approvals?",
        answer:
          "Our team helps investors navigate government regulations, acquire permits, and structure agreements that align with Somali laws.",
      },
      {
        question:
          "What legal protections exist for foreign investors in Somalia?",
        answer:
          "We assist in securing investment protection agreements and structuring businesses to minimize risks while ensuring compliance with investment laws.",
      },
    ],
  };

  return (
    <Layout
      headerStyle={1}
      footerStyle={2}
      breadcrumbTitle="Foreign Investment Advisory"
    >
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}
