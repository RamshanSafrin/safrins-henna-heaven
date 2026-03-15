import { Link } from "react-router-dom";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-maroon-dark text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-2xl font-bold mb-4">
            Safrin's <span className="text-gold-light">Henna Heaven</span>
          </h3>
          <p className="text-primary-foreground/80 text-sm leading-relaxed">
            Crafting exquisite henna artistry for brides, festivals, and special occasions with 100% organic, natural henna.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center hover:bg-gold/40 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center hover:bg-gold/40 transition-colors">
              <Facebook size={18} />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center hover:bg-gold/40 transition-colors">
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.94-.2-2.4.04-3.44l1.43-6.08s-.37-.73-.37-1.82c0-1.7.99-2.97 2.22-2.97 1.05 0 1.56.79 1.56 1.73 0 1.05-.67 2.63-1.02 4.1-.29 1.22.61 2.22 1.82 2.22 2.18 0 3.86-2.3 3.86-5.63 0-2.94-2.12-5-5.14-5-3.5 0-5.56 2.63-5.56 5.35 0 1.06.41 2.2.92 2.81a.37.37 0 0 1 .08.36l-.34 1.4c-.05.23-.18.28-.42.17-1.56-.73-2.54-3.01-2.54-4.84 0-3.95 2.87-7.58 8.28-7.58 4.35 0 7.73 3.1 7.73 7.24 0 4.32-2.72 7.8-6.5 7.8-1.27 0-2.46-.66-2.87-1.44l-.78 2.98c-.28 1.08-1.04 2.44-1.55 3.27A12 12 0 1 0 12 0z"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4 text-gold-light">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/bridal-henna", label: "Bridal Henna" },
              { to: "/festival-henna", label: "Festival Henna" },
              { to: "/products", label: "Organic Products" },
              { to: "/gallery", label: "Gallery" },
              { to: "/blog", label: "Blog" },
              { to: "/book", label: "Book Appointment" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="text-primary-foreground/70 hover:text-gold-light transition-colors text-sm">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4 text-gold-light">Contact Us</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/80">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-gold-light transition-colors">
              <Phone size={16} /> +1 (234) 567-890
            </a>
            <a href="mailto:hello@safrinshenna.com" className="flex items-center gap-2 hover:text-gold-light transition-colors">
              <Mail size={16} /> hello@safrinshenna.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} /> New York, NY
            </span>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4 text-gold-light">Newsletter</h4>
          <p className="text-sm text-primary-foreground/70 mb-4">Get henna tips, offers, and design inspiration.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2.5 rounded-md bg-maroon/50 border border-gold/30 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:border-gold"
            />
            <button type="submit" className="bg-gradient-gold text-accent-foreground font-semibold py-2.5 rounded-md text-sm hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gold/20 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
        <p>© {new Date().getFullYear()} Safrin's Henna Heaven. All rights reserved.</p>
      </div>
    </div>

    {/* Google Analytics placeholder */}
    {/* <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script> */}
  </footer>
);

export default Footer;
