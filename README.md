# BlueDev About Page

A polished single-page marketing site for BlueDev, a forward-thinking AI and AR innovation startup.

This repo contains an informational landing page built with React, Vite, and Tailwind CSS. It showcases BlueDev's mission, core capabilities, and a contact form for lead capture.

## What this project includes

- Hero section with a modern visual introduction to BlueDev
- About section describing the startup's focus on AI and augmented reality
- Feature cards for AI, AR, and innovation-first product design
- Contact form powered by a dedicated email endpoint
- Responsive layout with custom glassmorphism and animated design details
- Theme toggling and lightweight UI utilities via a component library

## Key technologies

- React 18
- Vite
- TypeScript
- Tailwind CSS
- Radix UI primitives
- Lucide icons
- Sonner toast notifications

## Project structure

- `src/pages/Index.tsx` - main landing page composition
- `src/components/HeroSection.tsx` - startup introduction and call-to-action
- `src/components/AboutSection.tsx` - company mission and capabilities
- `src/components/ContactSection.tsx` - contact form and social links
- `src/components/ThemeToggle.tsx` - dark/light theme switching
- `src/components/ui/` - reusable UI primitives and design system utilities

## Local development

```bash
npm install
npm run dev
```

Then open the local Vite server URL shown in the terminal.

## Build for production

```bash
npm run build
```

## Notes

- The contact form submits are auto redirected to the co-founders emails
- The startup branding centers on AI and AR innovation for immersive digital experiences
- Replace placeholder socials and deployment details with your actual BlueDev links before publishing
