import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook } from "lucide-react";

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
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                  <MessageCircle size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-foreground">WhatsApp</p>
                  <p className="text-muted-foreground">Chat with us on WhatsApp</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">New York, NY</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-8">
              <p className="font-medium text-foreground mb-3">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { href: "https://instagram.com", icon: Instagram },
                  { href: "https://facebook.com", icon: Facebook },
                ].map(({ href, icon: Icon }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Icon size={18} className="text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="rounded-lg overflow-hidden border border-border shadow-maroon h-full min-h-[400px]">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304903!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1"
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
