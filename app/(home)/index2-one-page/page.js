import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/onepagetwo/Banner"
import Brand from "@/components/sections/onepagetwo/Brand"
import About from "@/components/sections/onepagetwo/About"
import ServicesTwo from "@/components/sections/onepagetwo/ServicesTwo"
import ChooseTwo from "@/components/sections/onepagetwo/ChooseTwo"
import Testimonial from "@/components/sections/onepagetwo/Testimonial"
import CaseTwo from "@/components/sections/onepagetwo/CaseTwo"
import FaqOne from "@/components/sections/onepagetwo/FaqOne"
import ScrollingText from "@/components/sections/onepagetwo/ScrollingText"
import SuccessOne from "@/components/sections/onepagetwo/SuccessOne"
import Blog from "@/components/sections/onepagetwo/Blog"
import ContactOne from "@/components/sections/onepagetwo/ContactOne"

export default function Home() {

    return (
        <>
            <Layout headerStyle={5} footerStyle={2}>
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