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
        isActive: true,
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
    contactSubtitle: "Legal Solutions Tailored for You",
    contactLink: "/contact",
    contactButtonText: "Contact Us",
    downloadTitle: "Download File",
    downloads: [
      { text: "Corporate Law Guide", link: "/corporate-law-guide" },
      { text: "Compliance Checklist", link: "/compliance-checklist" },
    ],
    mainImage: "/assets/img/service/service1.png",
    serviceTitle: "Corporate Legal Services",
    serviceDescription1:
      "Horn Associates provides expert corporate legal services, guiding businesses through company formation, regulatory compliance, and governance. We specialize in structuring corporate entities and ensuring legal protection at every stage of business growth.",
    serviceDescription2:
      "From contract negotiation to dispute resolution, our legal team ensures that businesses operate within legal frameworks while mitigating risks. Our in-depth understanding of Somalia’s legal landscape allows us to support both local and foreign enterprises with tailored legal solutions.",
    benefitTitle: "Benefits of Our Corporate Legal Services",
    benefitDescription:
      "Our corporate legal expertise helps businesses navigate complex regulations, minimize risks, and achieve sustainable growth. With Horn Associates, companies gain strategic legal protection and compliance support.",
    benefits: [
      {
        icon: "icon-icon-9",
        title: "Company Formation & Business Structuring",
      },
      {
        icon: "icon-icon-10",
        title: "Regulatory Compliance & Risk Management",
      },
      { icon: "icon-icon-11", title: "Contract Negotiation & Legal Advisory" },
      {
        icon: "icon-icon-12",
        title: "Corporate Governance & Shareholder Agreements",
      },
    ],
    videoThumbnail: "/assets/img/service/service-details-img2.jpg",
    videoId: "dQw4w9WgXcQ",
    justiceTitle: "Your Business, Legally Protected",
    justiceText1:
      "At Horn Associates, we ensure that your company operates within the law while maintaining a competitive edge. Our legal experts craft contracts, manage compliance, and safeguard your business interests at every step.",
    justiceList: [
      "Ensuring Compliance, Securing Growth",
      "Protecting Business Interests with Legal Expertise",
      "Strategic Legal Solutions for Corporate Success",
    ],
    contentImgs3: [
      "/assets/img/service/service-details-img3.jpg",
      "/assets/img/service/service-details-img4.jpg",
    ],
    faqTitle: "Frequently Asked Questions",
    faqIntro:
      "Navigating corporate law can be complex. Here are some common questions businesses ask when seeking legal assistance.",
    faqs: [
      {
        question:
          "What legal steps are required to start a business in Somalia?",
        answer:
          "Businesses must register with the appropriate regulatory authorities, obtain necessary licenses, and comply with corporate governance laws. Our legal team assists with all these steps.",
      },
      {
        question: "How can corporate legal services help in risk management?",
        answer:
          "We provide contract reviews, regulatory compliance checks, and dispute resolution strategies to minimize legal and financial risks for businesses.",
      },
      {
        question: "What are the benefits of corporate governance services?",
        answer:
          "Proper corporate governance ensures legal compliance, enhances stakeholder trust, and improves overall business efficiency. We assist in structuring governance policies and shareholder agreements.",
      },
    ],
  };

  return (
    <Layout
      headerStyle={1}
      footerStyle={2}
      breadcrumbTitle="Corporate Legal Services"
    >
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}
