import { useState } from "react";
import { X } from "lucide-react";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";

const categories = ["All", "Team Moments", "Events & Competitions", "Projects & Demos"] as const;

type Category = (typeof categories)[number];

interface GalleryImage {
  id: number;
  src: string;
  caption: string;
  category: Exclude<Category, "All">;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: gallery1, caption: "Team collaboration session", category: "Team Moments" },
  { id: 2, src: gallery2, caption: "Presenting at IEEE TN56 Challenge", category: "Events & Competitions" },
  { id: 3, src: gallery3, caption: "Winning moment – 1st Place", category: "Events & Competitions" },
  { id: 4, src: gallery4, caption: "Draw2Life live demo", category: "Projects & Demos" },
  { id: 5, src: gallery5, caption: "Behind the scenes development", category: "Team Moments" },
  { id: 6, src: gallery6, caption: "Brainstorming new AR concepts", category: "Team Moments" },
  { id: 7, src: gallery7, caption: "Award ceremony – IEEE TN56", category: "Events & Competitions" },
  { id: 8, src: gallery8, caption: "AR prototype testing", category: "Projects & Demos" },
  { id: 9, src: gallery9, caption: "Team building day", category: "Team Moments" },
  { id: 10, src: gallery10, caption: "Project showcase event", category: "Projects & Demos" },
  { id: 11, src: gallery11, caption: "Hackathon weekend", category: "Events & Competitions" },
  { id: 12, src: gallery12, caption: "Draw2Life user testing session", category: "Projects & Demos" },
];

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const filtered = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A glimpse into our journey, events, and creations
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "gradient-bg text-primary-foreground shadow-lg"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {filtered.map((img, i) => (
            <div
              key={img.id}
              onClick={() => setLightboxImage(img)}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
              style={{ animationDelay: `${i * 60}ms`, animation: "fade-in-up 0.5s ease-out forwards", opacity: 0 }}
            >
              <img
                src={img.src}
                alt={img.caption}
                loading="lazy"
                width={1024}
                height={1024}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-background/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                <p className="text-sm font-medium text-foreground">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-xl flex items-center justify-center p-6"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground/70 hover:text-foreground transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="glass rounded-3xl overflow-hidden max-w-3xl w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage.src}
              alt={lightboxImage.caption}
              className="w-full aspect-video object-cover"
            />
            <div className="p-6">
              <p className="font-heading font-semibold text-lg">{lightboxImage.caption}</p>
              <p className="text-muted-foreground text-sm mt-1">{lightboxImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
