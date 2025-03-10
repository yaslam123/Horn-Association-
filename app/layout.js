import "@/node_modules/react-modal-video/css/modal-video.css";
import "../public/assets/css/style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { DM_Sans, Marcellus } from "@/lib/font";

export const metadata = {
  title: "Horn Associates",
  description: "A Legal Firm By All",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${DM_Sans.variable} ${Marcellus.variable}`}>
      <body>{children}</body>
    </html>
  );
}
