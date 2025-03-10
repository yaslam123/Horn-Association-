import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/onepagehome/Banner"
import FeautureOne from "@/components/sections/onepagehome/FeautureOne"
import About from "@/components/sections/onepagehome/About"
import ChooseOne from "@/components/sections/onepagehome/ChooseOne"
import ServicesOne from "@/components/sections/onepagehome/ServicesOne"
import Brand from "@/components/sections/onepagehome/Brand"
import CaseOne from "@/components/sections/onepagehome/CaseOne"
import Testimonial from "@/components/sections/onepagehome/Testimonial"
import Team from "@/components/sections/onepagehome/Team"
import Cta from "@/components/sections/onepagehome/Cta"
import Blog from "@/components/sections/onepagehome/Blog"


export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1}>
                <Banner />
                <FeautureOne />
                <About />
                <ChooseOne />
                <ServicesOne />
                <Brand /> 
                <CaseOne /> 
                <Testimonial />
                <Team />
                <Cta/>
                <Blog />
            </Layout>
        </>
    )
}