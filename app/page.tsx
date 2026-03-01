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
      <FreyerHeader />
      <MainHero
        spanFirst="Prestijli Organizasyonlar. Kusursuz Deneyimler."
        spanSecond="Global Standartlar."
      />
      <div className="mt-4">
        <SectionHeader
          titleSpanFirst="FREYR"
          titleSpanSecond="Hakkında"
          order={true}
        />
        <SectionDescription description="Başarımızın arkasındaki hikayeyi keşfedin." />
        <div className="flex px-128 mt-16 gap-16">
          <p className="paragraph text-left">
            FREYR Event & Congress; etkinlik sektöründe kaliteyi, güveni ve yenilikçi bakış açısını merkezine alan bir organizasyon firmasıdır.
            Bilimsel kongrelerden kurumsal etkinliklere, özel gala gecelerinden prestijli ödül törenlerine kadar her organizasyonu global standartlara taşıyoruz.<br></br>
            <br></br> Sadece bir operasyon ajansı değiliz; markanızın stratejik çözüm ortağıyız. Deneyimli ekibimizle kusursuz ve uçtan uca yönetimi garanti ediyoruz. Vizyonunuzu hayata geçiriyor, markanızı zirveye taşıyoruz.
          </p>
          <Image
            src="/images/about.png"
            width={400}
            height={384}
            alt="About Freyr"
          />
        </div>
      </div>
      <div id="services" className="mt-36">
        <SectionHeader
          titleSpanFirst="Özel"
          titleSpanSecond="Hizmetlerimiz"
          order={true}
        />
        <SectionDescription description="Vizyonunuza özel kusursuz etkinlikler." />
        <div className="grid justify-center items-center grid-cols-3 gap-8 pt-16 px-24">
          <ServiceCard
            title="Kongre & Zirve Organizasyonları"
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
            title="Gala & Ödül Törenleri"
            description="Prestijli etkinlikler için kusursuz planlama."
            imageSrc="/[service3].svg"
            href="#cta"
          />
        </div>
      </div>
      <div className="mt-36">
        <SectionHeader
          titleSpanFirst="Organizasyon"
          titleSpanSecond="Sürecimiz"
          order={true}
        />
        <SectionDescription description="İlk konseptten final rapora kadar, her aşamada titizlik ve özenle size rehberlik ediyoruz." />
        <div className="flex justify-center items-center">
          <Image
            src={"/images/process-image.svg"}
            alt="Process"
            width={1200}
            height={600}
            className="h-auto mt-16"
          />
        </div>
      </div>
      <div className="mt-36">
        <SectionHeader
          titleSpanFirst="Müşteri"
          titleSpanSecond="Yorumları"
          order={true}
        />
        <SectionDescription description="Birlikte çalışmak güven ile ilgilidir. İşte son projelerimizden dürüst geri bildirimler." />
        <ReviewPoints />
        <div className="grid justify-center items-center grid-cols-3 gap-12 pt-16 px-32">
          <ReviewCard
            review={{
              name: "Dr. Selin Arslan",
              role: "Association President",
              feedback:
                "Managing an international summit is stressful, but Freyer made it look effortless. Their precision and professional demeanor gave us complete peace of mind.",
              point: 5,
              imageURL: "/images/profile1.png",
            }}
          />
          <ReviewCard
            review={{
              name: "Marcus Weber",
              role: "Marketing Director",
              feedback:
                "We wanted a statement, not just an event. They understood our brand instantly and delivered a breathtaking design. They don’t just execute; they elevate.",
              point: 4,
              imageURL: "/images/profile2.png",
            }}
          />
          <ReviewCard
            review={{
              name: "Leyla K.",
              role: "Private Client",
              feedback:
                "I was anxious about the timing, but the team remained calm and handled every detail perfectly. I could actually enjoy my own event without worrying.",
              point: 5,
              imageURL: "/images/profile3.png",
            }}
          />
        </div>
      </div>
      <div className="mt-36">
        <SectionHeader
          titleSpanFirst="Sıkça Sorulan"
          titleSpanSecond="Sorular"
          order={true}
        />
        <SectionDescription description="En sık sorulan sorularınıza yanıtlar." />

        <div className="faq-div relative w-full aspect-[1240/577] mt-16">
          <Image
            src="/faq-bg.svg"
            alt="faq"
            fill
            className="object-cover px-48"
          />
          <FAQAccordion
            items={[
              {
                question: "Hangi ölçekte etkinlikleri yönetiyorsunuz?",
                answer:
                  "Küçük toplantılardan büyük ölçekli konferanslara ve uluslararası zirvelere kadar her ölçekte etkinlik yönetiyoruz.",
              },
              {
                question: "Bir etkinliğin başarısını nasıl garanti ediyorsunuz?",
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
      <div id="#cta" className="mt-36 px-24">
        <CTASection />
      </div>
      <div className="mt-36">
        <FreyrFooter />
      </div>
    </div>
  );
}
