import ServicesHero from "../components/common/hero/ServicesHero";
import SectionDescription from "../components/common/SectionDescription";
import ProcessScheme from "../components/ProcessScheme";
import SectionHeader from "../components/common/SectionHeader";
import ReviewPoints from "../components/ReviewPoints";
import ReviewCard from "../components/ReviewCard";
import ServicesSection from "../components/ServicesSection";
import PreviousWorks from "../components/PreviousWorks";

const ServicesPage = () => {
  return (
    <div className="min-h-screen font-sans">
      <ServicesHero spanFirst="Özel" spanSecond="Hizmetlerimiz" />

      {/* SERVICES SECTION */}
      <div className="mt-16 md:mt-24 lg:mt-36">
        <SectionHeader
          titleSpanFirst="Hizmet"
          titleSpanSecond="Alanlarımız"
          order={true}
        />
        <SectionDescription description="Her etkinlik için özel çözümler sunuyoruz. İhtiyacınıza uygun hizmetimizi seçin." />
        <ServicesSection />
      </div>
      {/* PROCESS SECTION */}
      <div className="mt-16 md:mt-24 lg:mt-36">
        <SectionHeader
          titleSpanFirst="Organizasyon"
          titleSpanSecond="Sürecimiz"
          order={true}
        />
        <SectionDescription description="İlk konseptten final rapora kadar, her aşamada titizlik ve özenle size rehberlik ediyoruz." />
        <ProcessScheme />
      </div>
      {/* PREVIOUS WORKS SECTION */}
      <div className="mt-16 md:mt-24 lg:mt-36">
        <SectionHeader
          titleSpanFirst="Previous"
          titleSpanSecond="Works"
          order={true}
        />
        <SectionDescription description="From initial concept to final reporting, we guide you through every stage with precision and care." />
        <PreviousWorks />
      </div>
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
    </div>
  );
};

export default ServicesPage;
