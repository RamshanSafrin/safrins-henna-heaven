import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import productsImg from "@/assets/organic-products.jpg";
import { Leaf, Package, Droplets } from "lucide-react";

const products = [
  { icon: Droplets, name: "Organic Henna Cones", price: "$8 each", desc: "Ready-to-use premium henna cones made from 100% natural Rajasthani henna. Rich, dark stain guaranteed.", img: productsImg },
  { icon: Leaf, name: "Herbal Henna Powder", price: "$15 / 100g", desc: "Triple-sifted, body-art quality henna powder. Perfect for mixing your own paste with essential oils.", img: productsImg },
  { icon: Package, name: "DIY Henna Kit", price: "$35", desc: "Everything you need: henna powder, applicator bottles, essential oils, stencils, and step-by-step guide.", img: productsImg },
];

const Products = () => {
  const [form, setForm] = useState({ name: "", email: "", product: "", message: "" });

  return (
    <Layout>
      <section className="py-20 bg-cream-dark">
        <div className="container mx-auto px-4">
          <SectionHeading title="Organic Henna Products" subtitle="Natural, chemical-free henna for beautiful, safe results" />
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {products.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-card rounded-lg overflow-hidden border border-border shadow-maroon hover:shadow-gold transition-shadow">
                <img src={p.img} alt={p.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <p.icon size={28} className="text-gold mb-3" />
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">{p.name}</h3>
                  <p className="text-primary font-bold text-lg mb-3">{p.price}</p>
                  <p className="text-muted-foreground text-sm">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-20 bg-cream-dark">
        <div className="container mx-auto px-4 max-w-xl">
          <SectionHeading title="Order Request" subtitle="Submit your order and we'll confirm availability" />
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4 bg-card p-8 rounded-lg border border-border shadow-maroon">
            <input type="text" placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold" />
            <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold" />
            <select value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold">
              <option value="">Select Product</option>
              <option>Organic Henna Cones</option>
              <option>Herbal Henna Powder</option>
              <option>DIY Henna Kit</option>
            </select>
            <textarea placeholder="Order details & quantity" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4}
              className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold resize-none" />
            <button type="submit" className="w-full bg-gradient-gold text-accent-foreground font-semibold py-3 rounded-md hover:opacity-90 transition-opacity">
              Submit Order Request
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
