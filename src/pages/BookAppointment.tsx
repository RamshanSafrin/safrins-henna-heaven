import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const BookAppointment = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", event: "", date: "", location: "", message: "" });

  return (
    <Layout>
      <section className="py-20 bg-cream-dark">
        <div className="container mx-auto px-4">
          <SectionHeading title="Book an Appointment" subtitle="Schedule your henna session and let us create something beautiful for you" />
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} onSubmit={(e) => e.preventDefault()}
            className="space-y-5 bg-card p-8 md:p-10 rounded-lg border border-border shadow-maroon">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Full Name *</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Email *</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Phone Number *</label>
                <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Event Type *</label>
                <select required value={form.event} onChange={(e) => setForm({ ...form, event: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold">
                  <option value="">Select event</option>
                  <option>Wedding</option>
                  <option>Engagement</option>
                  <option>Eid</option>
                  <option>Diwali</option>
                  <option>Birthday Party</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Preferred Date *</label>
                <input type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Location</label>
                <input type="text" placeholder="City / Venue" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Message</label>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} placeholder="Tell us about your vision, number of guests, etc."
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold resize-none" />
            </div>
            <button type="submit" className="w-full bg-gradient-gold text-accent-foreground font-semibold py-3.5 rounded-md hover:opacity-90 transition-opacity text-lg">
              Book Appointment
            </button>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

export default BookAppointment;
