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
        isActive: true,
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
    contactSubtitle: "Legal Expertise in Mining & Mineral Rights",
    contactLink: "/contact",
    contactButtonText: "Contact Us",
    downloadTitle: "Download File",
    downloads: [
      { text: "Mining Law Guide", link: "/mining-law-guide" },
      {
        text: "Regulatory Framework for Minerals",
        link: "/regulatory-framework",
      },
    ],
    mainImage: "/assets/img/service/service5.jpg",
    serviceTitle: "Mining Law & Mineral Rights",
    serviceDescription1:
      "Horn Associates provides comprehensive legal support for mining companies, investors, and stakeholders involved in mineral exploration, development, and extraction. We help navigate legal frameworks, acquire necessary permits, and ensure compliance with mining regulations.",
    serviceDescription2:
      "With Somalia's rich natural resources, mining presents significant opportunities, but also legal challenges. Our team offers expert guidance on mineral rights acquisition, environmental compliance, and contract negotiations to protect investments and promote responsible resource management.",
    benefitTitle: "Benefits of Our Mining Law Services",
    benefitDescription:
      "The mining sector requires strong legal oversight to ensure compliance and sustainability. Our services help companies mitigate legal risks, secure mineral rights, and comply with national and international mining laws.",
    benefits: [
      { icon: "icon-icon-9", title: "Mineral Rights Acquisition & Licensing" },
      { icon: "icon-icon-10", title: "Environmental & Regulatory Compliance" },
      { icon: "icon-icon-11", title: "Mining Contracts & Agreements" },
      {
        icon: "icon-icon-12",
        title: "Legal Dispute Resolution in Mining Sector",
      },
    ],
    videoThumbnail: "/assets/img/service/service-details-img2.jpg",
    videoId: "dQw4w9WgXcQ",
    justiceTitle: "Securing Resources with Legal Excellence",
    justiceText1:
      "Mining law governs the responsible extraction of resources while ensuring compliance with environmental and regulatory policies. We provide expert legal support for sustainable mining operations.",
    justiceList: [
      "Ensuring Compliance in Mining Operations",
      "Protecting Investments in the Mineral Sector",
      "Strategic Legal Advisory for Resource Development",
    ],
    contentImgs3: [
      "/assets/img/service/service-details-img3.jpg",
      "/assets/img/service/service-details-img4.jpg",
    ],
    faqTitle: "Frequently Asked Questions",
    faqIntro:
      "Mining law requires deep legal expertise. Here are answers to common questions regarding mineral rights and compliance in Somalia.",
    faqs: [
      {
        question:
          "What are the legal requirements for obtaining mineral rights in Somalia?",
        answer:
          "Companies must obtain exploration and mining licenses from the regulatory authorities, comply with environmental laws, and adhere to international mining standards.",
      },
      {
        question:
          "How can legal services help mitigate risks in mining investments?",
        answer:
          "We provide contract structuring, regulatory compliance assessments, and dispute resolution strategies to protect mining companies and investors.",
      },
      {
        question: "What environmental regulations apply to mining companies?",
        answer:
          "Mining operations must comply with strict environmental impact assessments and sustainability policies. We help businesses align with legal requirements to operate responsibly.",
      },
    ],
  };

  return (
    <Layout
      headerStyle={1}
      footerStyle={2}
      breadcrumbTitle="Mining Law & Mineral Rights"
    >
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}
