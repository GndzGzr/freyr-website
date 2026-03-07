import ServicesHero from "../components/common/hero/ServicesHero";
import SectionDescription from "../components/common/SectionDescription";
import ProcessScheme from "../components/ProcessScheme";
import SectionHeader from "../components/common/SectionHeader";
import ReviewPoints from "../components/ReviewPoints";
import ReviewCard from "../components/ReviewCard";
import FAQAccordion from "../components/FAQAccordion";
import Image from "next/image";
import AboutStory from "../components/AboutStory";
import AboutTeam from "../components/AboutTeam";
import ClientMarquee from "../components/ClientMarquee";

const AboutPage = () => {
    return (
        <div className="min-h-screen font-sans">
            <ServicesHero spanFirst="FREYR" spanSecond="Hakkında" />

            {/* STORY SECTION */}
            <div className="mt-16 md:mt-24 lg:mt-36">
                <AboutStory />
            </div>

            {/* TEAM SECTION */}
            <div className="mt-16 md:mt-24 lg:mt-36">
                <SectionHeader
                    titleSpanFirst="Our"
                    titleSpanSecond="Team"
                    order={true}
                />
                <SectionDescription description="Discover the story behind our success." />
                <AboutTeam />
            </div>

            {/* CLIENT SECTION */}
            <div className="mt-16 md:mt-24 lg:mt-36">
                <SectionHeader
                    titleSpanFirst="Our"
                    titleSpanSecond="Client"
                    order={true}
                />
                <SectionDescription description="Discover the story behind our success." />
                <ClientMarquee />
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
};

export default AboutPage;
