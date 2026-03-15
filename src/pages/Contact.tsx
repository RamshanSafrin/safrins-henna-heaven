import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const Contact = () => (
  <Layout>
    <section className="py-20 bg-cream-dark">
      <div className="container mx-auto px-4">
        <SectionHeading title="Contact Us" subtitle="We'd love to hear from you. Reach out for bookings, inquiries, or just to say hello!" />
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <a href="tel:+1234567890" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-muted-foreground">+1 (234) 567-890</p>
                </div>
              </a>
              <a href="mailto:hello@safrinshenna.com" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">hello@safrinshenna.com</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">Alwarthirunagari, Thoothukudi<br />Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-8">
              <p className="font-medium text-foreground mb-3">Follow Us</p>
              <div className="flex gap-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Instagram size={18} className="text-primary" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="rounded-lg overflow-hidden border border-border shadow-maroon h-full min-h-[400px]">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15795.038839498498!2d78.09!3d8.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03efc586e3e4a7%3A0x2a4e4f935ef20!2sAlwar%20Tirunagari%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
