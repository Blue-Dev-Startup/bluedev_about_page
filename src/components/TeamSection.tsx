import teamAllani from "@/assets/team/allani.png";
import teamYassine from "@/assets/team/yassine.jpg";
import teamRefka from "@/assets/team/refka.jpg";
import teamHama from "@/assets/team/hama.jpg";

const team = [
  { name: "Yassine Zorgui", role: "CEO", img: teamYassine },
  { name: "Allani Mohamed", role: "CTO", img: teamAllani },
  { name: "Refka Mimouni", role: "CMO", img: teamRefka },
  { name: "Mohamed Bejaoui", role: "CFO", img: teamHama },
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

        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-xl mx-auto">
          {team.map((m) => (
            <div
              key={m.name}
              className="glass rounded-2xl p-6 text-center group hover:glow transition-all duration-300"
            >
              <div className="w-21 h-21 rounded-full overflow-hidden mx-auto mb-4 bg-white group-hover:scale-110 transition-transform ring-2 ring-primary/30">
                <img src={m.img} alt={m.name} loading="lazy" width={50} height={50} className="w-full h-full object-cover" />
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
