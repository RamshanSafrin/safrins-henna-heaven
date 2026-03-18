import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import bridalImg from "@/assets/bridal-henna-1.jpg";
import arabicImg from "@/assets/arabic-henna.jpg";
import minimalImg from "@/assets/minimal-henna.jpg";
import { Leaf, Award, Heart } from "lucide-react";

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="py-20 bg-cream-dark">
      <div className="container mx-auto px-4">
        <SectionHeading title="About Safrin" subtitle="The artist behind the art" />
        <div className="max-w-3xl mx-auto mt-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 text-center">A Passion for Mehndi Artistry</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With over 10 years of experience, Safrin has transformed the art of henna into breathtaking masterpieces for hundreds of brides and special occasions. Her journey began with a childhood fascination with traditional mehndi patterns and has blossomed into a full-fledged artistry career.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Specializing in intricate bridal mehndi, Arabic designs, and modern minimal henna, Safrin uses only 100% natural, organic henna paste—free from chemicals and harmful additives. Every design is crafted with love, precision, and a deep respect for cultural tradition.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Award, label: "10+ Years Experience" },
                { icon: Heart, label: "500+ Happy Clients" },
                { icon: Leaf, label: "100% Organic" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="text-center p-4 bg-card rounded-lg border border-border">
                  <Icon size={28} className="text-gold mx-auto mb-2" />
                  <span className="text-xs font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Work samples */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading title="My Work" subtitle="A glimpse into the artistry" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[bridalImg, arabicImg, minimalImg].map((img, i) => (
            <motion.img key={i} src={img} alt="Henna design work" className="rounded-lg shadow-maroon w-full aspect-square object-cover"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} />
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
