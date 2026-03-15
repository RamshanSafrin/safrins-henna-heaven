import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import festivalImg from "@/assets/festival-henna.jpg";
import arabicImg from "@/assets/arabic-henna.jpg";
import minimalImg from "@/assets/minimal-henna.jpg";

const festivals = [
  { name: "Eid Mehndi", desc: "Beautiful designs to celebrate Eid with elegance", price: "From $40" },
  { name: "Diwali Mehndi", desc: "Traditional & modern patterns for the festival of lights", price: "From $35" },
  { name: "Wedding Guest", desc: "Stylish designs for wedding celebrations", price: "From $30" },
  { name: "Party Mehndi", desc: "Fun & trendy designs for birthdays and events", price: "From $25" },
];

const FestivalHenna = () => (
  <Layout>
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={festivalImg} alt="Festival henna" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      <div className="relative container mx-auto px-4 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
          Festival Henna
        </motion.h1>
        <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">Celebrate every occasion with stunning mehndi artistry</p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading title="Festival Services" subtitle="Special mehndi for every celebration" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {festivals.map((f, i) => (
            <motion.div key={f.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-card rounded-lg p-6 border border-border shadow-maroon text-center hover:shadow-gold transition-shadow">
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{f.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{f.desc}</p>
              <p className="text-primary font-bold text-xl mb-4">{f.price}</p>
              <Link to="/book" className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-md text-sm font-medium hover:bg-maroon-light transition-colors">
                Book Now
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Special Offers */}
    <section className="py-20 bg-gradient-maroon text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <SectionHeading title="Festival Offers" subtitle="Group discounts and seasonal deals available" light />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { title: "Group of 5+", offer: "15% Off", desc: "Book for your friend group" },
            { title: "Eid Special", offer: "20% Off", desc: "Limited time festival offer" },
            { title: "Party Package", offer: "From $200", desc: "Up to 10 guests included" },
          ].map((o, i) => (
            <motion.div key={o.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-maroon/40 border border-gold/20 rounded-lg p-6">
              <p className="text-gold text-2xl font-bold mb-1">{o.offer}</p>
              <h3 className="font-heading text-lg font-semibold mb-2">{o.title}</h3>
              <p className="text-primary-foreground/70 text-sm">{o.desc}</p>
            </motion.div>
          ))}
        </div>
        <Link to="/book" className="inline-block mt-10 bg-gradient-gold text-accent-foreground px-10 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity">
          Book Festival Henna
        </Link>
      </div>
    </section>

    {/* Gallery preview */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading title="Festival Designs" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[festivalImg, arabicImg, minimalImg].map((img, i) => (
            <motion.img key={i} src={img} alt="Festival henna design" className="rounded-lg w-full aspect-square object-cover"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} />
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default FestivalHenna;
