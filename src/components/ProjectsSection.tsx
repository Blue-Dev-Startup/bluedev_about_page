import draw2life from "@/assets/draw2life.jpg";
import { ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">Where innovation comes to life.</p>
        </div>

        {/* Featured project */}
        <div className="glass rounded-3xl overflow-hidden max-w-5xl mx-auto mb-12 group hover:glow transition-all duration-500">
          <div className="grid md:grid-cols-2">
            <div className="relative overflow-hidden">
              <img
                src={draw2life}
                alt="Draw2Life — drawings becoming 3D augmented reality"
                className="w-full h-full object-cover min-h-[300px] group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={1024}
                height={768}
              />
              <div className="absolute top-4 left-4 gradient-bg px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground">
                Featured
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="font-heading text-3xl font-bold mb-4 gradient-text">Draw2Life</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                An AI + AR educational application that transforms user drawings into interactive augmented reality experiences.
                Empowering creativity, learning, and immersion through cutting-edge technology.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["AI", "AR", "Education", "Creative"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Placeholder projects */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Project Alpha", desc: "AI-powered analytics platform for real-time insights.", tags: ["AI", "Analytics"] },
            { title: "Project Lens", desc: "AR navigation assistant for indoor environments.", tags: ["AR", "Navigation"] },
            { title: "Project Nexus", desc: "Intelligent automation suite for enterprise workflows.", tags: ["AI", "Automation"] },
          ].map((p) => (
            <div key={p.title} className="glass rounded-2xl p-6 group hover:glow transition-all duration-300">
              <div className="h-32 rounded-xl bg-muted mb-4 flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Coming Soon</span>
              </div>
              <h4 className="font-heading font-semibold text-lg mb-2">{p.title}</h4>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.desc}</p>
              <div className="flex gap-2">
                {p.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-full text-xs bg-muted text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
