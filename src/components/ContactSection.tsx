import { useState } from "react";
import { Github, Facebook, Twitter, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg">Our socials for connecting with us.</p>
          </div>

          <div className="flex justify-center gap-6 mt-8">
            {[
              { icon: Twitter, href: "#", label: "Twitter" },
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Facebook, href: "#", label: "Facebook" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow transition-all"
              >
                <s.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
