import CFAButton from "./common/CFAButton";

const CTASection = () => {
  return (
    <div className="cta-section relative flex flex-col items-center gap-8 py-24 overflow-hidden">
      {/* spotlight glow */}
      <div className="cta-glow" />
      <h2 className="gradient-golden-text cta-header text-center font-serif italic relative z-10">
        Bir Sonraki Etkinliğinizi Zirveye Taşımaya Hazır mısınız?
      </h2>
      <p className="cta-description text-center relative z-10">
        Vizyonunuzu mükemmellik ve hassasiyet dokunuşumuzla hayata nasıl geçirebileceğimizi konuşalım.
      </p>
      <div className="relative z-10">
        <CFAButton />
      </div>
    </div>
  );
};

export default CTASection;