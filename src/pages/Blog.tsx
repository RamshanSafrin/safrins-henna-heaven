import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import bridalImg from "@/assets/bridal-henna-1.jpg";
import organicImg from "@/assets/organic-products.jpg";
import minimalImg from "@/assets/minimal-henna.jpg";
import { Calendar } from "lucide-react";

const posts = [
  {
    slug: "top-bridal-mehndi-designs",
    title: "Top Bridal Mehndi Designs for Weddings",
    excerpt: "Discover the most trending bridal mehndi designs that will make your wedding day truly magical. From traditional full-hand patterns to modern fusion styles.",
    img: bridalImg,
    date: "March 10, 2026",
    category: "Bridal",
  },
  {
    slug: "benefits-of-organic-henna",
    title: "Benefits of Organic Henna",
    excerpt: "Learn why organic henna is the safest and best choice for your skin. Chemical-free, long-lasting color, and nourishing properties that protect your skin.",
    img: organicImg,
    date: "March 5, 2026",
    category: "Tips",
  },
  {
    slug: "how-to-make-mehndi-last-longer",
    title: "How to Make Mehndi Last Longer",
    excerpt: "Expert tips and tricks to get the darkest, longest-lasting henna stain. From preparation to aftercare, everything you need to know.",
    img: minimalImg,
    date: "February 28, 2026",
    category: "Guide",
  },
];

const Blog = () => (
  <Layout>
    <section className="py-20 bg-cream-dark">
      <div className="container mx-auto px-4">
        <SectionHeading title="Henna Blog" subtitle="Tips, trends, and inspiration for henna lovers" />
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-10">
          {posts.map((post, i) => (
            <motion.article key={post.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-card rounded-lg overflow-hidden border border-border shadow-maroon hover:shadow-gold transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover min-h-[200px]" />
                </div>
                <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-gold uppercase tracking-wider">{post.category}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground"><Calendar size={12} /> {post.date}</span>
                  </div>
                  <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3">{post.title}</h2>
                  <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="text-primary font-semibold text-sm hover:text-maroon-light transition-colors">
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
