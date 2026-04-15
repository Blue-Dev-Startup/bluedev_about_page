import { Brain, Eye, Lightbulb } from "lucide-react";

const features = [
  { icon: Brain, title: "Artificial Intelligence", desc: "Leveraging machine learning and deep learning to create intelligent, adaptive systems." },
  { icon: Eye, title: "Augmented Reality", desc: "Building immersive AR experiences that bridge the digital and physical worlds." },
  { icon: Lightbulb, title: "Innovation First", desc: "Transforming bold ideas into impactful, user-centric digital experiences." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Who <span className="gradient-text">We Are</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            BlueDev is a startup driven by innovation, focused on AI and AR solutions.
            Our mission is transforming ideas into immersive and intelligent digital experiences
            that push the boundaries of what's possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass rounded-2xl p-8 text-center group hover:glow transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <f.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
