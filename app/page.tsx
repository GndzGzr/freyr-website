import FreyerHeader from "./components/common/header/FreyrHeader";
import Image from "next/image";
import SpannedHeader from "./components/common/SpannedHeader";
import CFAButton from "./components/common/CFAButton";
import CFAButtonSecondary from "./components/common/CFAButtonSecondary";
import CFAButtonSecondaryLarger from "./components/common/hero/CFAButtonSecondaryLarger";
import CFAButtonLarger from "./components/common/hero/CFAButtonLarger";
import MainHero from "./components/common/hero/MainHero";
import SectionHeader from "./components/common/SectionHeader";
import SectionDescription from "./components/common/SectionDescription";
import ServiceCard from "./components/ServiceCard";
import ProcessScheme from "./components/ProcessScheme";
import ReviewCard from "./components/ReviewCard";
import ReviewPoints from "./components/ReviewPoints";
import FAQAccordion from "./components/FAQAccordion";
import CTASection from "./components/CTASection";
import FreyrFooter from "./components/common/FreyrFooter";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <MainHero
        spanFirst="Prestijli Organizasyonlar. Kusursuz Deneyimler."
        spanSecond="Global Standartlar."
      />

      {/* ABOUT SECTION — narrower container */}
      <div id="about" className="mt-8 md:mt-4">
        <SectionHeader
          titleSpanFirst="FREYR"
          titleSpanSecond="Hakkında"
          order={true}
        />
        <SectionDescription description="Başarımızın arkasındaki hikayeyi keşfedin." />
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row px-6 md:px-8 mt-8 md:mt-16 gap-8 md:gap-12">
          <p className="paragraph text-left">
            FREYR Event &amp; Congress; etkinlik sektöründe kaliteyi, güveni ve
            yenilikçi bakış açısını merkezine alan bir organizasyon firmasıdır.
            Bilimsel kongrelerden kurumsal etkinliklere, özel gala gecelerinden
            prestijli ödül törenlerine kadar her organizasyonu global
            standartlara taşıyoruz.<br></br>
            <br></br> Sadece bir operasyon ajansı değiliz; markanızın stratejik
            çözüm ortağıyız. Deneyimli ekibimizle kusursuz ve uçtan uca yönetimi
            garanti ediyoruz. Vizyonunuzu hayata geçiriyor, markanızı zirveye
            taşıyoruz.
          </p>
          <Image
            src="/images/about.png"
            width={400}
            height={384}
            alt="About Freyr"
            className="w-full md:w-auto max-w-[400px] mx-auto md:mx-0 h-auto"
          />
        </div>
      </div>

      {/* SERVICES SECTION */}
      <div id="services" className="mt-16 md:mt-24 lg:mt-36">
        <SectionHeader
          titleSpanFirst="Özel"
          titleSpanSecond="Hizmetlerimiz"
          order={true}
        />
        <SectionDescription description="Vizyonunuza özel kusursuz etkinlikler." />
        <div className="max-w-7xl mx-auto grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pt-8 md:pt-16 px-6 md:px-8">
          <ServiceCard
            title="Kongre &amp; Zirve Organizasyonları"
            description="Ulusal ve uluslararası kongrelerde profesyonel çözüm ortağınız."
            imageSrc="/[service1].svg"
            href="#cta"
          />
          <ServiceCard
            title="Kurumsal Etkinlikler"
            description="Marka kimliğinizi güçlendiren profesyonel organizasyonlar."
            imageSrc="/[service2].svg"
            href="#cta"
          />
          <ServiceCard
            title="Gala &amp; Ödül Törenleri"
            description="Prestijli etkinlikler için kusursuz planlama."
            imageSrc="/[service3].svg"
            href="#cta"
          />
        </div>
      </div>

      {/* PROCESS SECTION — desktop: component, mobile: static image */}
      <div className="mt-16 md:mt-24 lg:mt-36">
        <SectionHeader
          titleSpanFirst="Organizasyon"
          titleSpanSecond="Sürecimiz"
          order={true}
        />
        <SectionDescription description="İlk konseptten final rapora kadar, her aşamada titizlik ve özenle size rehberlik ediyoruz." />
        <ProcessScheme />
      </div>

      {/* REVIEWS SECTION */}
      <div className="mt-16 md:mt-24 lg:mt-36">
        <SectionHeader
          titleSpanFirst="Müşteri"
          titleSpanSecond="Yorumları"
          order={true}
        />
        <SectionDescription description="Birlikte çalışmak güven ile ilgilidir. İşte son projelerimizden dürüst geri bildirimler." />
        <ReviewPoints />
        <div className="max-w-7xl mx-auto grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 pt-8 md:pt-16 px-6 md:px-8">
          <ReviewCard
            review={{
              name: "Dr. Selin Arslan",
              role: "Dernek Başkanı",
              feedback:
                "Uluslararası bir zirveyi yönetmek stresli olabilir ama Freyr bunu zahmetsiz gösterdi. Titizlikleri ve profesyonel yaklaşımları bize tam bir huzur verdi.",
              point: 5,
              imageURL: "/images/profile1.png",
            }}
          />
          <ReviewCard
            review={{
              name: "Marcus Weber",
              role: "Pazarlama Direktörü",
              feedback:
                "Sadece bir etkinlik değil, bir manifesto istiyorduk. Markamızı anında kavradılar ve nefes kesici bir tasarım sundular. Sadece uygulama yapmıyorlar; yükseltiyorlar.",
              point: 4,
              imageURL: "/images/profile2.png",
            }}
          />
          <ReviewCard
            review={{
              name: "Leyla K.",
              role: "Bireysel Müşteri",
              feedback:
                "Zamanlama konusunda endişeliydim ama ekip sakin kaldı ve her detayı mükemmel şekilde yönetti. Kendi etkinliğimin tadını endişe duymadan çıkarabildim.",
              point: 5,
              imageURL: "/images/profile3.png",
            }}
          />
        </div>
      </div>

      {/* FAQ SECTION — narrower container with background */}
      <div className="mt-16 md:mt-24 lg:mt-36 relative overflow-hidden">
        <Image
          src="/faq-bg.svg"
          alt=""
          fill
          className="object-contain z-0 pointer-events-none"
        />
        <div className="relative z-10">
          <SectionHeader
            titleSpanFirst="Sıkça Sorulan"
            titleSpanSecond="Sorular"
            order={true}
          />
          <SectionDescription description="En sık sorulan sorularınıza yanıtlar." />
          <div className="max-w-3xl mx-auto mt-8 md:mt-16 px-4 md:px-6">
            <FAQAccordion
              items={[
                {
                  question: "Hangi ölçekte etkinlikleri yönetiyorsunuz?",
                  answer:
                    "Küçük toplantılardan büyük ölçekli konferanslara ve uluslararası zirvelere kadar her ölçekte etkinlik yönetiyoruz.",
                },
                {
                  question:
                    "Bir etkinliğin başarısını nasıl garanti ediyorsunuz?",
                  answer:
                    "Sürecimiz titiz planlama, detaylara özen ve müşterilerle sürekli iletişim içerir. Her unsurun vizyonlarıyla uyumlu olmasını sağlarız.",
                },
                {
                  question: "Etkinlik sonrası destek sunuyor musunuz?",
                  answer:
                    "Evet, müşteri memnuniyetini sağlamak için geri bildirim toplama, raporlama ve takip hizmetleri dahil kapsamlı etkinlik sonrası destek sunuyoruz.",
                },
                {
                  question:
                    "Özel istekleri veya benzersiz gereksinimleri karşılayabiliyor musunuz?",
                  answer:
                    "Kesinlikle. Esnekliğimiz ve etkinlikleri belirli müşteri ihtiyaç ve tercihlerine göre özelleştirme yeteneğimizle gurur duyuyoruz.",
                },
              ]}
            />
          </div>
        </div>
      </div>


    </div>
  );
}
