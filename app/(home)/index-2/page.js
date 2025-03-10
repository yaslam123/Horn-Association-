import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home2/Banner"
import Brand from "@/components/sections/home2/Brand"
import About from "@/components/sections/home2/About"
import ServicesTwo from "@/components/sections/home2/ServicesTwo"
import ChooseTwo from "@/components/sections/home2/ChooseTwo"
import Testimonial from "@/components/sections/home2/Testimonial"
import CaseTwo from "@/components/sections/home2/CaseTwo"
import FaqOne from "@/components/sections/home2/FaqOne"
import ScrollingText from "@/components/sections/home2/ScrollingText"
import SuccessOne from "@/components/sections/home2/SuccessOne"
import Blog from "@/components/sections/home2/Blog"
import ContactOne from "@/components/sections/home2/ContactOne"

export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Banner />
                <Brand />
                <About />
                <ServicesTwo />
                <ChooseTwo />
                <Testimonial />
                <CaseTwo />
                <FaqOne />
                <ScrollingText />
                <SuccessOne />
                <Blog />
                <ContactOne />
            </Layout>
        </>
    )
}