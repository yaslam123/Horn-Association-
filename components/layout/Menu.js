import Link from "next/link";

export default function Menu() {
  return (
    <ul className="main-menu__list">
      <li>
        <Link href="/">The Firm</Link>
      </li>
      <li>
        <Link href="/about">Culture</Link>
      </li>
      <li className="dropdown menu-item-has-children">
        <Link href="#">Practices</Link>
        <ul className="sub-menu">
          <li>
            <Link href="/corporate-legal">Corporate Legal Services</Link>
          </li>
          <li>
            <Link href="/foreign-investment">Foreign Investment Advisory</Link>
          </li>
          <li>
            <Link href="/energy-law">Energy & Natural Resources Law</Link>
          </li>
          <li>
            <Link href="/maritime-law">
              Maritime Law & Shipping Regulations
            </Link>
          </li>
          <li>
            <Link href="/mining-law">Mining Law & Mineral Rights</Link>
          </li>
          <li>
            <Link href="/public-sector">Public Sector Advisory</Link>
          </li>
          <li>
            <Link href="/infrastructure-law">
              Infrastructure & Construction
            </Link>
          </li>
          <li>
            <Link href="/financial-law">Financial & Regulatory Compliance</Link>
          </li>
          <li>
            <Link href="/risk-management">
              Risk Management & Dispute Resolution
            </Link>
          </li>
        </ul>
      </li>

      {/* <li className="dropdown menu-item-has-children">
        <Link href="#">Pages</Link>
        <ul className="sub-menu">
          <li>
            <Link href="/case">Case</Link>
          </li>
          <li>
            <Link href="/case-details">Case Details</Link>
          </li>
          <li>
            <Link href="/team">Team</Link>
          </li>
          <li>
            <Link href="/pricing">Price</Link>
          </li>
          <li>
            <Link href="/faq">Faq</Link>
          </li>
        </ul>
      </li> */}
      <li>
        <Link href="/blog">Insights</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
}
