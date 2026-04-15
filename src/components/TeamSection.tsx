import teamAlex from "@/assets/team-alex.jpg";
import teamMaya from "@/assets/team-maya.jpg";
import teamJordan from "@/assets/team-jordan.jpg";
import teamSam from "@/assets/team-sam.jpg";
import teamRiley from "@/assets/team-riley.jpg";
import teamTaylor from "@/assets/team-taylor.jpg";

const team = [
  { name: "Alex Chen", role: "AI Engineer", img: teamAlex },
  { name: "Maya Rodriguez", role: "AR Developer", img: teamMaya },
  { name: "Jordan Park", role: "Full Stack Developer", img: teamJordan },
  { name: "Sam Nakamura", role: "UX Designer", img: teamSam },
  { name: "Riley Ahmed", role: "ML Researcher", img: teamRiley },
  { name: "Taylor Kim", role: "Product Manager", img: teamTaylor },
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
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 group-hover:scale-110 transition-transform ring-2 ring-primary/30">
                <img src={m.img} alt={m.name} loading="lazy" width={80} height={80} className="w-full h-full object-cover" />
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
