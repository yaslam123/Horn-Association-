import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/home1/Banner";
import FeautureOne from "@/components/sections/home1/FeautureOne";
import About from "@/components/sections/home1/About";
import ChooseOne from "@/components/sections/home1/ChooseOne";
import ServicesOne from "@/components/sections/home1/ServicesOne";
import Brand from "@/components/sections/home1/Brand";
import CaseOne from "@/components/sections/home1/CaseOne";
import Testimonial from "@/components/sections/home1/Testimonial";
import Team from "@/components/sections/home1/Team";
import Cta from "@/components/sections/home1/Cta";
import Blog from "@/components/sections/home1/Blog";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={2}>
        <Banner />
        <FeautureOne />
        <About />
        <ChooseOne />
        <ServicesOne />
        <Brand />
        <Blog />
      </Layout>
    </>
  );
}
