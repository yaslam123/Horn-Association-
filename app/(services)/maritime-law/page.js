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
        isActive: true,
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
    contactSubtitle: "Legal Expertise in Maritime & Shipping",
    contactLink: "/contact",
    contactButtonText: "Contact Us",
    downloadTitle: "Download File",
    downloads: [
      { text: "Maritime Law Guide", link: "/maritime-law-guide" },
      {
        text: "International Shipping Regulations",
        link: "/shipping-regulations",
      },
    ],
    mainImage: "/assets/img/service/service4.jpg",
    serviceTitle: "Maritime Law & Shipping Regulations",
    serviceDescription1:
      "Horn Associates specializes in maritime law, providing legal guidance on vessel registration, international shipping compliance, cargo claims, and maritime dispute resolution. Our team assists businesses in navigating complex regulatory frameworks for shipping and logistics.",
    serviceDescription2:
      "With Somalia’s strategic location along a vast coastline, maritime activities play a crucial role in trade and commerce. We help shipping companies, investors, and businesses comply with international maritime laws and resolve disputes efficiently.",
    benefitTitle: "Benefits of Our Maritime Legal Services",
    benefitDescription:
      "The maritime industry requires specialized legal expertise to handle compliance, risk management, and dispute resolution. Our services ensure smooth operations in shipping, logistics, and international trade.",
    benefits: [
      { icon: "icon-icon-9", title: "Vessel Registration & Licensing" },
      { icon: "icon-icon-10", title: "International Maritime Compliance" },
      { icon: "icon-icon-11", title: "Maritime Dispute Resolution" },
      { icon: "icon-icon-12", title: "Cargo Claims & Legal Advisory" },
    ],
    videoThumbnail: "/assets/img/service/service-details-img2.jpg",
    videoId: "dQw4w9WgXcQ",
    justiceTitle: "Navigating Legal Waters with Confidence",
    justiceText1:
      "Our legal team ensures that shipping companies and investors comply with maritime laws while protecting their business interests. From contract negotiation to dispute resolution, we provide expert legal support.",
    justiceList: [
      "Ensuring Compliance in International Shipping",
      "Resolving Maritime Disputes Efficiently",
      "Strategic Legal Advisory for Shipping & Logistics",
    ],
    contentImgs3: [
      "/assets/img/service/service-details-img3.jpg",
      "/assets/img/service/service-details-img4.jpg",
    ],
    faqTitle: "Frequently Asked Questions",
    faqIntro:
      "Maritime law involves various legal complexities. Here are answers to common questions regarding shipping regulations and compliance.",
    faqs: [
      {
        question:
          "What are the legal requirements for vessel registration in Somalia?",
        answer:
          "All vessels must be registered with the relevant maritime authority and comply with international shipping standards. We assist with the entire registration process.",
      },
      {
        question: "How can maritime law help with cargo claims?",
        answer:
          "We provide legal representation for cargo claims, ensuring businesses recover losses from shipping disputes and damaged goods.",
      },
      {
        question:
          "What are the key regulations governing international shipping?",
        answer:
          "Shipping companies must comply with international maritime laws, safety regulations, and trade agreements. We guide businesses through the legal requirements for smooth operations.",
      },
    ],
  };

  return (
    <Layout
      headerStyle={1}
      footerStyle={2}
      breadcrumbTitle="Maritime Law & Shipping Regulations"
    >
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}
