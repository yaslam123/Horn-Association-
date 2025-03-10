import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/onepagethree/Banner"
import CounterOne from "@/components/sections/onepagethree/CounterOne"
import ChooseOne from "@/components/sections/onepagethree/ChooseOne"
import ScrollingText from "@/components/sections/onepagetwo/ScrollingText"
import ServicesTwo from "@/components/sections/onepagethree/ServicesTwo"
import SuccessOne from "@/components/sections/onepagethree/SuccessOne"
import Testimonial from "@/components/sections/onepagethree/Testimonial"
import FaqOne from "@/components/sections/onepagethree/FaqOne"
import Team from "@/components/sections/onepagethree/Team"
import ContactOne from "@/components/sections/onepagethree/ContactOne"
import Blog from "@/components/sections/onepagethree/Blog"

export default function Home() {

    return (
        <>
            <Layout headerStyle={6} footerStyle={3}>
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