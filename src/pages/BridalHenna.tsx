import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import bridalImg1 from "@/assets/bridal-henna-1.jpg";
import bridalImg2 from "@/assets/bridal-henna-2.jpg";
import heroImg from "@/assets/hero-henna.jpg";

const packages = [
  { name: "Classic Bridal", price: "₹5,000", desc: "Both hands front & back, elegant traditional patterns", features: ["Full hand coverage", "2-3 hours session", "Natural organic henna"] },
  { name: "Royal Bridal", price: "₹15,000", desc: "Full arms, hands & feet with intricate detail", features: ["Arms up to elbow", "Feet coverage", "4-5 hours session", "Premium organic henna"], popular: true },
  { name: "Bridal Party", price: "₹2,000/person", desc: "Simple to medium designs for bridesmaids & guests", features: ["One hand design", "30-45 min each", "Group discounts available"] },
];

const BridalHenna = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", event: "Wedding", date: "", message: "" });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Bridal henna" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Bridal Henna
          </motion.h1>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">Make your special day unforgettable with exquisite bridal mehndi designs</p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading title="Bridal Packages" subtitle="Choose the perfect mehndi package for your wedding day" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div key={pkg.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-card rounded-lg p-8 border ${pkg.popular ? "border-gold shadow-gold ring-2 ring-gold/30" : "border-border shadow-maroon"} relative`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-accent-foreground text-xs font-bold px-4 py-1 rounded-full">Most Popular</span>
                )}
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <p className="text-3xl font-bold text-primary mb-3">{pkg.price}</p>
                <p className="text-muted-foreground text-sm mb-6">{pkg.desc}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="text-sm text-foreground flex items-center gap-2">
                      <span className="text-gold">✦</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="#booking" className="block text-center bg-primary text-primary-foreground py-2.5 rounded-md font-medium hover:bg-maroon-light transition-colors">
                  Book Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-cream-dark">
        <div className="container mx-auto px-4">
          <SectionHeading title="Bridal Gallery" subtitle="Our finest bridal mehndi work" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[bridalImg1, bridalImg2, heroImg].map((img, i) => (
              <motion.img key={i} src={img} alt="Bridal henna design" className="rounded-lg w-full aspect-square object-cover shadow-maroon"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} />
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <SectionHeading title="Book Your Bridal Mehndi" subtitle="Fill out the form and we'll get back to you within 24 hours" />
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4 bg-card p-8 rounded-lg border border-border shadow-maroon">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold" />
              <input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold" />
              <select value={form.event} onChange={(e) => setForm({ ...form, event: e.target.value })}
                className="px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold">
                <option>Wedding</option>
                <option>Engagement</option>
                <option>Bridal Shower</option>
                <option>Other</option>
              </select>
            </div>
            <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold" />
            <textarea placeholder="Tell us about your vision..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4}
              className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold resize-none" />
            <button type="submit" className="w-full bg-gradient-gold text-accent-foreground font-semibold py-3 rounded-md hover:opacity-90 transition-opacity">
              Request Booking
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default BridalHenna;
