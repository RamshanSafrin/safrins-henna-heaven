import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import bridalImg1 from "@/assets/bridal-henna-1.jpg";
import bridalImg2 from "@/assets/bridal-henna-2.jpg";
import arabicImg from "@/assets/arabic-henna.jpg";
import minimalImg from "@/assets/minimal-henna.jpg";
import festivalImg from "@/assets/festival-henna.jpg";
import heroImg from "@/assets/hero-henna.jpg";
import mandalaImg from "@/assets/mandala-henna.jpg";
import fingerImg from "@/assets/finger-henna.jpg";
import armImg from "@/assets/arm-henna.jpg";
import feetImg from "@/assets/feet-henna.jpg";
import arabicTrailImg from "@/assets/arabic-trail-henna.jpg";
import eidImg from "@/assets/eid-henna.jpg";

const categories = ["All", "Bridal", "Arabic", "Minimal", "Festival"];

const galleryItems = [
  { img: bridalImg1, cat: "Bridal", title: "Classic Bridal Mehndi" },
  { img: arabicImg, cat: "Arabic", title: "Arabic Vine Pattern" },
  { img: minimalImg, cat: "Minimal", title: "Modern Minimal Design" },
  { img: festivalImg, cat: "Festival", title: "Festive Celebration" },
  { img: bridalImg2, cat: "Bridal", title: "Royal Bridal Design" },
  { img: heroImg, cat: "Bridal", title: "Full Hand Bridal" },
  { img: mandalaImg, cat: "Arabic", title: "Mandala Back-Hand" },
  { img: fingerImg, cat: "Minimal", title: "Finger Geometric Art" },
  { img: armImg, cat: "Bridal", title: "Full Arm Bridal Mehndi" },
  { img: feetImg, cat: "Bridal", title: "Bridal Feet Mehndi" },
  { img: arabicTrailImg, cat: "Arabic", title: "Arabic Leaf Trail" },
  { img: eidImg, cat: "Festival", title: "Eid Moon & Stars" },
];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? galleryItems : galleryItems.filter((g) => g.cat === active);

  return (
    <Layout>
      <section className="py-20 bg-cream-dark">
        <div className="container mx-auto px-4">
          <SectionHeading title="Henna Design Gallery" subtitle="Browse our collection of stunning mehndi artistry" />
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === cat ? "bg-primary text-primary-foreground" : "bg-card border border-border text-foreground hover:bg-secondary"
                }`}>
                {cat}
              </button>
            ))}
          </div>
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {filtered.map((item, i) => (
              <motion.div key={item.title + active} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}
                className="group bg-card rounded-lg overflow-hidden shadow-maroon hover:shadow-gold transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <span className="text-xs text-gold font-semibold uppercase tracking-wider">{item.cat}</span>
                  <h3 className="font-heading text-lg font-semibold text-foreground mt-1">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
