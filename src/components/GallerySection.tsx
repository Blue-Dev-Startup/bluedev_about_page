import { useState } from "react";
import { X } from "lucide-react";

import workshop1 from "@/assets/gallery/workshops/workshop1-1.jpg";
import workshop2 from "@/assets/gallery/workshops/workshop1-2.jpg";
import workshop3 from "@/assets/gallery/workshops/workshop1-3.jpg";
import workshop4 from "@/assets/gallery/workshops/workshop1-4.jpg";
import tsyp from "@/assets/gallery/events/tsyp-finalist.jpg";
import tn56firstplace from "@/assets/gallery/events/tn56-firstplace.jpg";
import tn56award from "@/assets/gallery/events/tn56-firstaward.jpg";
import incubation from "@/assets/gallery/events/incubation-firstplace.jpg";

const categories = ["All", "Workshops", "Events & Competitions"] as const;

type Category = (typeof categories)[number];

interface GalleryImage {
  id: number;
  src: string;
  caption: string;
  category: Exclude<Category, "All">;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: workshop1, caption: "Workshop with students", category: "Workshops" },
  { id: 2, src: workshop2, caption: "Interactive presentation", category: "Workshops" },
  { id: 3, src: workshop3, caption: "Showing off our capabilities", category: "Workshops" },
  { id: 4, src: workshop4, caption: "Draw2Life live demo", category: "Workshops" },
  { id: 5, src: tsyp, caption: "TSYP13 Finalists Award", category: "Events & Competitions" },
  { id: 6, src: tn56firstplace, caption: "TN56 First Place", category: "Events & Competitions" },
  { id: 7, src: tn56award, caption: "TN56 First Place Award", category: "Events & Competitions" },
  { id: 8, src: incubation, caption: "Bizerte Incubation Program First Place", category: "Events & Competitions" },
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
