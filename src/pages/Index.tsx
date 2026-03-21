import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Leaf, Heart, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-henna.jpg";

import bridalImg from "@/assets/bridal-henna-1.jpg";
import arabicImg from "@/assets/arabic-henna.jpg";
import minimalImg from "@/assets/minimal-henna.jpg";
import festivalImg from "@/assets/festival-henna.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const featuredDesigns = [
  { img: bridalImg, title: "Bridal Mehndi", desc: "Intricate full-hand bridal designs" },
  { img: arabicImg, title: "Arabic Mehndi", desc: "Flowing vine & floral patterns" },
  { img: minimalImg, title: "Minimal Mehndi", desc: "Trendy minimalist designs" },
  { img: festivalImg, title: "Festival Mehndi", desc: "Festive celebration henna" },
];

const testimonials = [
  { name: "Aisha K.", text: "Safrin made my bridal mehndi absolutely stunning! Every guest complimented the designs. Truly magical work.", rating: 5 },
  { name: "Priya M.", text: "The organic henna products are amazing. Rich color and lasted for weeks. Highly recommend!", rating: 5 },
  { name: "Fatima R.", text: "Booked for my sister's wedding and the results were breathtaking. Professional and so talented!", rating: 5 },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Beautiful bridal henna mehndi design" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="font-heading text-lg md:text-xl italic text-primary-foreground tracking-wide mb-1">Safrin's</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gold-light mb-6">
              Henna Heaven
            </h1>
            <p className="text-primary-foreground/85 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
              Exquisite henna artistry for brides, festivals, and celebrations. Handcrafted with 100% organic, natural henna.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/bridal-henna"
                className="bg-gradient-gold text-accent-foreground px-8 py-3.5 rounded-md font-semibold hover:opacity-90 transition-opacity shadow-gold"
              >
                Book Bridal Henna
              </Link>
              <Link
                to="/gallery"
                className="border-2 border-gold text-gold-light px-8 py-3.5 rounded-md font-semibold hover:bg-gold/10 transition-colors"
              >
                View Designs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features strip */}
      <section className="bg-maroon text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Leaf, text: "100% Organic" },
              { icon: Heart, text: "Bridal Specialist" },
              { icon: Sparkles, text: "10+ Years Experience" },
              { icon: Star, text: "500+ Happy Brides" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex flex-col items-center gap-2">
                <Icon size={24} className="text-gold" />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Designs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading title="Featured Designs" subtitle="Explore our most popular henna styles for every occasion" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDesigns.map((d, i) => (
              <motion.div key={d.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}>
                <Link to="/gallery" className="group block bg-card rounded-lg overflow-hidden shadow-maroon hover:shadow-gold transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img src={d.img} alt={d.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-semibold text-foreground">{d.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{d.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-maroon text-primary-foreground">
        <div className="container mx-auto px-4">
          <SectionHeading title="What Our Brides Say" subtitle="Real stories from real clients" light />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.15 }}
                className="bg-maroon/40 backdrop-blur-sm border border-gold/20 rounded-lg p-6"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-primary-foreground/85 italic mb-4">"{t.text}"</p>
                <p className="font-heading font-semibold text-gold-light">— {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-cream-dark">
        <div className="container mx-auto px-4 max-w-xl text-center">
          <SectionHeading title="Stay Inspired" subtitle="Subscribe for henna design ideas, tips, and exclusive offers" />
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button type="submit" className="bg-gradient-gold text-accent-foreground font-semibold px-8 py-3 rounded-md hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
