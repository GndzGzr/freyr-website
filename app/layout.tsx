import type { Metadata } from "next";
import { Inter, Montserrat, EB_Garamond } from "next/font/google";
import "./globals.css";
import FreyerHeader from "./components/common/header/FreyrHeader";
import FreyrFooter from "./components/common/FreyrFooter";
import CTASection from "./components/CTASection";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

const EBGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

const EBGaramondItalic = EB_Garamond({
  variable: "--font-eb-garamond-italic",
  subsets: ["latin"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "Freyr Event & Congress",
  description:
    "Elevating Events to Global Standards with Flawless Precision and Unmatched Excellence.",
  openGraph: {
    title: "Freyr Event & Congress",
    description:
      "Elevating Events to Global Standards with Flawless Precision and Unmatched Excellence.",
    url: "https://www.freyreventcongress.com.tr",
    siteName: "Freyr Event & Congress",
    images: [
      {
        url: "/freyr-og-image.png",
        width: 1200,
        height: 630,
        alt: "Freyr Event & Congress - Elevating Events to Global Standards",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freyr Event & Congress",
    description:
      "Elevating Events to Global Standards with Flawless Precision and Unmatched Excellence.",
    images: ["/freyr-og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${interSans.variable} ${montserrat.variable} ${EBGaramond.variable} ${EBGaramondItalic.variable} antialiased`}
      >
        <FreyerHeader />
        {children}
        {/* CTA SECTION */}
        <div id="cta" className="mt-16 md:mt-24 lg:mt-36 px-6 md:px-12 lg:px-16">
          <CTASection />
        </div>
        <div id="contact" className="mt-16 md:mt-24 lg:mt-36">
          <FreyrFooter />
        </div>
      </body>

    </html>
  );
}
