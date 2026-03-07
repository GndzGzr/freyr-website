import type { Metadata } from "next";
import { Inter, Montserrat, EB_Garamond } from "next/font/google";
import "./globals.css";
import FreyerHeader from "./components/common/header/FreyrHeader";
import FreyrFooter from "./components/common/FreyrFooter";
import CTASection from "./components/CTASection";
import LoadingOverlay from "./components/LoadingOverlay";
import SmoothScroll from "./components/SmoothScroll";

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
  metadataBase: new URL("https://www.freyreventcongress.com"),
  title: {
    default: "Freyr Event & Congress | Etkinlik ve Kongre Yönetimi",
    template: "%s | Freyr Event & Congress",
  },
  description:
    "İstanbul merkezli profesyonel etkinlik ve kongre yönetim şirketi. Uluslararası kongreler, kurumsal etkinlikler, gala geceleri ve fuar organizasyonlarında uzman ekibimizle yanınızdayız.",
  keywords: [
    "Freyr Event Congress",
    "Freyr etkinlik",
    "etkinlik yönetimi",
    "kongre organizasyonu",
    "kongre yönetimi",
    "İstanbul etkinlik şirketi",
    "uluslararası kongre",
    "kurumsal etkinlik",
    "gala organizasyonu",
    "fuar yönetimi",
    "event management Turkey",
    "congress organization Istanbul",
    "event company Turkey",
    "freyreventcongress",
  ],
  authors: [{ name: "Freyr Event & Congress" }],
  creator: "Freyr Event & Congress",
  publisher: "Freyr Event & Congress",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Freyr Event & Congress | Etkinlik ve Kongre Yönetimi",
    description:
      "İstanbul merkezli profesyonel etkinlik ve kongre yönetim şirketi. Uluslararası kongreler, kurumsal etkinlikler, gala geceleri ve fuar organizasyonlarında uzman ekibimizle yanınızdayız.",
    url: "https://www.freyreventcongress.com",
    siteName: "Freyr Event & Congress",
    images: [
      {
        url: "/freyr-og-image.png",
        width: 1200,
        height: 630,
        alt: "Freyr Event & Congress - Etkinlik ve Kongre Yönetimi",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freyr Event & Congress | Etkinlik ve Kongre Yönetimi",
    description:
      "İstanbul merkezli profesyonel etkinlik ve kongre yönetim şirketi.",
    images: ["/freyr-og-image.png"],
  },
  alternates: {
    canonical: "https://www.freyreventcongress.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">

      <body
        className={`${interSans.variable} ${montserrat.variable} ${EBGaramond.variable} ${EBGaramondItalic.variable} antialiased mt-16`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EventPlanningService",
              name: "Freyr Event & Congress",
              url: "https://www.freyreventcongress.com",
              logo: "https://www.freyreventcongress.com/freyr-og-image.png",
              telephone: "+905422473635",
              email: "ufuk@freyreventcongress.com",
              description:
                "Ankara merkezli profesyonel etkinlik ve kongre yönetim şirketi.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1131 Cad. No:7-9, Huzur Mah., Cevizlidere",
                addressLocality: "Çankaya",
                addressRegion: "Ankara",
                postalCode: "06204",
                addressCountry: "TR",
              },
              areaServed: ["TR", "Worldwide"],
              serviceType: [
                "Kongre Organizasyonu",
                "Kurumsal Etkinlik",
                "Fuar Yönetimi",
                "Gala Organizasyonu",
              ],
              sameAs: [
                "https://www.freyreventcongress.com",
              ],
            }),
          }}
        />
        <LoadingOverlay />
        <SmoothScroll />
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
