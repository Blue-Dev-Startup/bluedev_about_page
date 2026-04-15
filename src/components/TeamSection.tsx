const team = [
  { name: "Alex Chen", role: "AI Engineer", avatar: "AC" },
  { name: "Maya Rodriguez", role: "AR Developer", avatar: "MR" },
  { name: "Jordan Park", role: "Full Stack Developer", avatar: "JP" },
  { name: "Sam Nakamura", role: "UX Designer", avatar: "SN" },
  { name: "Riley Ahmed", role: "ML Researcher", avatar: "RA" },
  { name: "Taylor Kim", role: "Product Manager", avatar: "TK" },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-muted-foreground text-lg">A team of creators, engineers, and innovators.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {team.map((m) => (
            <div
              key={m.name}
              className="glass rounded-2xl p-6 text-center group hover:glow transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4 text-primary-foreground font-heading font-bold text-xl group-hover:scale-110 transition-transform">
                {m.avatar}
              </div>
              <h3 className="font-heading font-semibold text-lg">{m.name}</h3>
              <p className="text-muted-foreground text-sm">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
