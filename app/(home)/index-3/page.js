import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home3/Banner"
import CounterOne from "@/components/sections/home3/CounterOne"
import ChooseOne from "@/components/sections/home3/ChooseOne"
import ScrollingText from "@/components/sections/home2/ScrollingText"
import ServicesTwo from "@/components/sections/home3/ServicesTwo"
import SuccessOne from "@/components/sections/home3/SuccessOne"
import Testimonial from "@/components/sections/home3/Testimonial"
import FaqOne from "@/components/sections/home3/FaqOne"
import Team from "@/components/sections/home3/Team"
import ContactOne from "@/components/sections/home3/ContactOne"
import Blog from "@/components/sections/home3/Blog"

export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={3}>
                <Banner />
                <CounterOne />
                <ChooseOne />
                <ScrollingText />
                <ServicesTwo />
                <SuccessOne />
                <Testimonial />
                <FaqOne />
                <Team />
                <ContactOne />
                <Blog />
            </Layout>
        </>
    )
}