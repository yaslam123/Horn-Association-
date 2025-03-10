
export default function BackToTop({ scroll }) {

    return (
        <>
            {scroll && (
                <a href="#" className="scroll-top scroll-to-target">
                    <i className="icon-icon-50" />
                </a>
            )}
        </>
    )
}