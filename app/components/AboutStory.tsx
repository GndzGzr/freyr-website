import Image from "next/image";

const AboutStory = () => (
  <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

      {/* LEFT — text blocks + stats */}
      <div className="flex-1 flex flex-col gap-10">

        <div>
          <h2 className="mb-3">
            <span className="titleSpanFirst">Bizim </span>
            <span className="titleSpanSecond font-serif">Hikayemiz</span>
          </h2>
          <p className="paragraph text-[#c4c4c4] leading-relaxed">
            FREYR Event &amp; Congress; kaliteyi, güvenilirliği ve etkinlik sektöründe yenilikçi bir yaklaşımı ön planda tutan bir etkinlik yönetim şirketidir.
            Deneyimli ekibimizle bilimsel kongrelerden kurumsal lansmanllara, gala gecelerinden özel organizasyonlara kadar geniş bir hizmet yelpazesi sunuyoruz.
            Her proje bizim için bir prestij meselesidir.
          </p>
        </div>

        <div>
          <h2 className="mb-3">
            <span className="titleSpanFirst">Bizim </span>
            <span className="titleSpanSecond font-serif">Misyonumuz</span>
          </h2>
          <p className="paragraph text-[#c4c4c4] leading-relaxed">
            Müşterilerimize kusursuz, etkileyici ve yüksek standartta bir organizasyon deneyimi sunmak.
          </p>
        </div>

        <div>
          <h2 className="mb-3">
            <span className="titleSpanFirst">Bizim </span>
            <span className="titleSpanSecond font-serif">Vizyonumuz</span>
          </h2>
          <p className="paragraph text-[#c4c4c4] leading-relaxed">
            Küresel ölçekte tercih edilen, güçlü bir etkinlik markası olmak.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-row gap-12 mt-2">
          <div>
            <p className="text-white" style={{ fontSize: "3.5rem", fontWeight: 900, lineHeight: 1 }}>150+</p>
            <p className="mt-1" style={{ color: "#D2AD7A", fontSize: "1rem" }}>Mutlu Müşteri</p>
          </div>
          <div>
            <p className="text-white" style={{ fontSize: "3.5rem", fontWeight: 900, lineHeight: 1 }}>70+</p>
            <p className="mt-1" style={{ color: "#D2AD7A", fontSize: "1rem" }}>Tamamlanan Proje</p>
          </div>
        </div>

      </div>

      {/* RIGHT — tall image */}
      <div className="w-full lg:w-[420px] shrink-0">
        <div
          className="relative w-full rounded-2xl overflow-hidden"
          style={{ height: "520px" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80"
            alt="Freyr event"
            fill
            className="object-cover"
            unoptimized
          />
          {/* subtle golden bottom gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)",
            }}
          />
        </div>
      </div>

    </div>
  </section>
);

export default AboutStory;
