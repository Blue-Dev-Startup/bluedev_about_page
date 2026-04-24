import { useEffect, useState } from "react";
import { Github, Facebook, Youtube, Instagram, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsLight(document.documentElement.classList.contains("light"));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const SOCIALS = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61586931833819",
      label: "Facebook", darkModeHover: "hover:text-blue-600", lightModeHover: "hover:text-blue-700" },
    { icon: Instagram, href: "https://www.instagram.com/bluedev2026",
      label: "Instagram", darkModeHover: "hover:text-pink-500", lightModeHover: "hover:text-pink-700" },
    { icon: Youtube, href: "https://www.youtube.com/@BlueDev2026",
      label: "YouTube", darkModeHover: "hover:text-red-500", lightModeHover: "hover:text-red-600" },
    { icon: Github, href: "https://github.com/Blue-Dev-Startup",
      label: "GitHub", darkModeHover: "hover:text-white", lightModeHover: "hover:text-black" },
  ];

  const sendEmail = async (emailData) => {
    const response = await fetch("https://bluedev-contact-form-script.vercel.app/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emailData),
    });
    if (!response.ok) {
      throw new Error("Failed to send email, Error: " + response.statusText);
    }
    return await response.json();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendEmail(form);
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

          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 md:p-12 space-y-6 hover:glow transition-all">
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
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                className={`w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground ${isLight ? s.lightModeHover : s.darkModeHover} hover:glow transition-all`}
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
