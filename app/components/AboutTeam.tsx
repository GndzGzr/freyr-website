const team = [
  {
    name: "Ufuk Kanburoğlu",
    role: "Kurucu",
    bio: "FREYR Event & Congress; kaliteyi, güvenilirliği ve etkinlik sektöründe yenilikçi bir yaklaşımı ön planda tutan bir etkinlik yönetim şirketidir.",
    imageUrl: "/images/profile1.png",
  },
  {
    name: "Ufuk Kanburoğlu",
    role: "Kurucu",
    bio: "FREYR Event & Congress; kaliteyi, güvenilirliği ve etkinlik sektöründe yenilikçi bir yaklaşımı ön planda tutan bir etkinlik yönetim şirketidir.",
    imageUrl: "/images/profile2.png",
  },
  {
    name: "Ufuk Kanburoğlu",
    role: "Kurucu",
    bio: "FREYR Event & Congress; kaliteyi, güvenilirliği ve etkinlik sektöründe yenilikçi bir yaklaşımı ön planda tutan bir etkinlik yönetim şirketidir.",
    imageUrl: "/images/profile3.png",
  },
];

const AboutTeam = () => (
  <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-4">
      {team.map((member, i) => (
        <div key={i} className="flex flex-col items-center text-center gap-4">
          {/* Circular photo */}
          <div
            className="rounded-full overflow-hidden shrink-0"
            style={{
              width: "clamp(120px, 15vw, 180px)",
              height: "clamp(120px, 15vw, 180px)",
              border: "2px solid rgba(210,173,122,0.35)",
            }}
          >
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name */}
          <div>
            <p className="service-card-text-header text-base">{member.name}</p>
            <p className="titleSpanSecond font-serif" style={{ fontSize: "1rem" }}>{member.role}</p>
          </div>

          {/* Divider */}
          <div
            className="w-8 h-[1px]"
            style={{ background: "rgba(210,173,122,0.5)" }}
          />

          {/* Bio */}
          <p className="text-sm text-[#c4c4c4] leading-relaxed">{member.bio}</p>
        </div>
      ))}
    </div>
  </section>
);

export default AboutTeam;
