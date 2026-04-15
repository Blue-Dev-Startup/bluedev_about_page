import { Award, Trophy } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Finalists — IEEE TN56 Challenge",
    desc: "Recognized among top innovators for our AI-driven approach to solving real-world problems.",
  },
  {
    icon: Trophy,
    title: "1st Place — IEEE TN56 Challenge",
    desc: "Awarded first place for excellence in innovation, technical execution, and impact.",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg">Competing, innovating, and winning on the global stage.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {achievements.map((a) => (
            <div
              key={a.title}
              className="glass rounded-2xl p-8 text-center animate-pulse-glow"
            >
              <div className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-6">
                <a.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">{a.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
