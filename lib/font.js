import { DM_Sans as DMSansFont, Marcellus as MarcellusFont } from "next/font/google";

export const DM_Sans = DMSansFont({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--thm-font",
  display: "swap",
});

export const Marcellus = MarcellusFont({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--thm-font-2",
  display: "swap",
});
