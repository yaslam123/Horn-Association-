import Link from "next/link";

export default function Menu() {
    return (
        <ul className="navigation one-page-scroll-menu">
            <li className="scrollToLink">
                <Link href="#home">Home</Link>
            </li>
            <li className="scrollToLink">
                <Link href="#about">About</Link>
            </li>
            <li className="scrollToLink">
                <Link href="#service">Service</Link>
            </li>
            <li className="scrollToLink">
                <Link href="#team">Team</Link>
            </li>
            <li className="scrollToLink">
                <Link href="#blog">Blog</Link>
            </li>
            <li className="menu-item-has-children">
                <Link href="#">Pages</Link>
                <ul className="sub-menu">
                    <li>
                        <Link href="/">Home One</Link>
                    </li>
                    <li>
                        <Link href="/index-2">Home Two</Link>
                    </li>
                    <li>
                        <Link href="/index-3">Home Three</Link>
                    </li>
                </ul>
            </li>
        </ul>
    );
}
