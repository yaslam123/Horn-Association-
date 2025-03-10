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
        isActive: false,
      },
      {
        name: "Risk Management & Dispute Resolution",
        link: "/risk-management",
        isActive: true,
      },
    ],
    contactPattern: "assets/img/pattern/sidebar-contact-pattern.png",
    contactIcon: "/assets/img/icon/about-v2-icon1.png",
    contactTitle: "Get in Touch",
    contactSubtitle: "Expert Legal Solutions for Risk & Dispute Resolution",
    contactLink: "/contact",
    contactButtonText: "Contact Us",
    downloadTitle: "Download File",
    downloads: [
      { text: "Risk Management Strategies", link: "/risk-management-guide" },
      {
        text: "Dispute Resolution Framework",
        link: "/dispute-resolution-framework",
      },
    ],
    mainImage: "/assets/img/service/service9.jpg",
    serviceTitle: "Risk Management & Dispute Resolution",
    serviceDescription1:
      "Horn Associates provides expert legal advisory services for businesses and institutions looking to manage legal risks effectively and resolve disputes efficiently. We specialize in alternative dispute resolution (ADR), arbitration, mediation, and litigation support.",
    serviceDescription2:
      "Our team works closely with clients to identify potential legal risks, implement proactive mitigation strategies, and represent their interests in dispute resolution processes. We ensure that businesses navigate conflicts with minimal disruption and legal exposure.",
    benefitTitle:
      "Benefits of Our Risk Management & Dispute Resolution Services",
    benefitDescription:
      "Effective risk management and dispute resolution safeguard business continuity. Our legal team provides tailored strategies to resolve conflicts efficiently and prevent future legal issues.",
    benefits: [
      { icon: "icon-icon-9", title: "Legal Risk Assessment & Mitigation" },
      { icon: "icon-icon-10", title: "Alternative Dispute Resolution (ADR)" },
      { icon: "icon-icon-11", title: "Litigation & Arbitration Support" },
      { icon: "icon-icon-12", title: "Corporate Conflict Resolution" },
    ],
    videoThumbnail: "/assets/img/service/service-details-img2.jpg",
    videoId: "dQw4w9WgXcQ",
    justiceTitle: "Resolving Disputes, Protecting Your Interests",
    justiceText1:
      "Disputes can disrupt businesses, but strategic legal solutions can resolve conflicts efficiently. We provide expert dispute resolution services to safeguard business operations and protect client interests.",
    justiceList: [
      "Effective Legal Risk Management",
      "Strategic Solutions for Business Disputes",
      "Alternative Dispute Resolution & Litigation Expertise",
    ],
    contentImgs3: [
      "/assets/img/service/service-details-img3.jpg",
      "/assets/img/service/service-details-img4.jpg",
    ],
    faqTitle: "Frequently Asked Questions",
    faqIntro:
      "Dispute resolution and risk management are essential to business success. Here are answers to common legal questions regarding conflict resolution.",
    faqs: [
      {
        question: "What are the best legal strategies for risk management?",
        answer:
          "Risk management requires proactive legal assessments, contract structuring, and compliance reviews. Our team helps businesses implement strong legal risk mitigation frameworks.",
      },
      {
        question: "How does alternative dispute resolution (ADR) work?",
        answer:
          "ADR includes mediation and arbitration as alternatives to litigation. We help clients resolve disputes quickly and cost-effectively without going to court.",
      },
      {
        question: "What legal support do businesses need for litigation?",
        answer:
          "Litigation requires strong legal representation, case preparation, and strategy. We assist businesses in navigating the legal process while protecting their interests.",
      },
    ],
  };

  return (
    <Layout
      headerStyle={1}
      footerStyle={2}
      breadcrumbTitle="Risk Management & Dispute Resolution"
    >
      <ServiceDetails serviceDetails={serviceDetails} />
    </Layout>
  );
}
