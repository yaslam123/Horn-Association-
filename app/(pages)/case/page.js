
// import PortfolioFilter1 from ""
import dynamic from 'next/dynamic'
const PortfolioFilter1 = dynamic(() => import('@/components/elements/PortfolioFilter1'), {
    ssr: false,
})
import ContactOne from '@/components/common/ContactOne'
import Layout from "@/components/layout/Layout"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Case studies">
                <section className="case-three">
                    <div className="auto-container">
                        {/*Sortable Galery*/}
                        <div className="sortable-masonry">
                            {/*Filter*/}
                            <PortfolioFilter1/>
                        </div>
                    </div>
                </section>
                <ContactOne />
            </Layout>
        </>
    )
}