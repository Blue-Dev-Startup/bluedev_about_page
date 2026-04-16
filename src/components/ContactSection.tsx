import { useState } from "react";
import { Github, Facebook, Twitter, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder
    alert("Thanks for reaching out! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg">Give us a feedback and don't forget to check our socials!</p>
          </div>

          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 md:p-12 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full gradient-bg px-6 py-4 rounded-lg font-semibold text-primary-foreground hover:opacity-90 transition-opacity glow flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>
          </form>

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
