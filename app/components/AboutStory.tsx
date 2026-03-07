import Image from "next/image";

const AboutStory = () => (
  <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

      {/* LEFT — text blocks + stats */}
      <div className="flex-1 flex flex-col gap-10">

        {/* Our Story */}
        <div>
          <h2 className="mb-3">
            <span className="titleSpanFirst">Our </span>
            <span className="titleSpanSecond font-serif">Story</span>
          </h2>
          <p className="paragraph text-[#c4c4c4] leading-relaxed">
            FREYR Event &amp; Congress is an event management company that prioritises
            quality, reliability and an innovative approach in the events sector. With our
            experienced team, we offer a wide range of services, from scientific conferences
            to corporate launches, gala evenings to private events. Every project is a
            matter of prestige for us.
          </p>
        </div>

        {/* Our Mission */}
        <div>
          <h2 className="mb-3">
            <span className="titleSpanFirst">Our </span>
            <span className="titleSpanSecond font-serif">Mission</span>
          </h2>
          <p className="paragraph text-[#c4c4c4] leading-relaxed">
            To provide our customers with a seamless, impressive and high-standard
            organisational experience.
          </p>
        </div>

        {/* Our Vision */}
        <div>
          <h2 className="mb-3">
            <span className="titleSpanFirst">Our </span>
            <span className="titleSpanSecond font-serif">Vision</span>
          </h2>
          <p className="paragraph text-[#c4c4c4] leading-relaxed">
            To be a globally preferred, powerful event brand.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-row gap-12 mt-2">
          <div>
            <p className="text-white" style={{ fontSize: "3.5rem", fontWeight: 900, lineHeight: 1 }}>150+</p>
            <p className="mt-1" style={{ color: "#D2AD7A", fontSize: "1rem" }}>Happy Clients</p>
          </div>
          <div>
            <p className="text-white" style={{ fontSize: "3.5rem", fontWeight: 900, lineHeight: 1 }}>70+</p>
            <p className="mt-1" style={{ color: "#D2AD7A", fontSize: "1rem" }}>Completed Projects</p>
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
