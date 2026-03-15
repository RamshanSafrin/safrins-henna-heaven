import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionHeading = ({ title, subtitle, light }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-center mb-12"
  >
    <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-3 ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    <div className="flex items-center justify-center gap-3 mb-4">
      <span className="h-px w-12 bg-gold" />
      <span className="text-gold text-lg">✦</span>
      <span className="h-px w-12 bg-gold" />
    </div>
    {subtitle && (
      <p className={`max-w-2xl mx-auto ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
