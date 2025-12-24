import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-semibold leading-tight">
                  Sony Seasonings
                </span>
                <span className="text-xs text-secondary-foreground/70 tracking-wider uppercase">
                  & Spices
                </span>
              </div>
            </div>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              One of the leading manufacturers of seasonings and spices with 17+ years of experience, trusted by renowned food brands.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/products", label: "Products" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Our Products</h4>
            <ul className="space-y-3">
              {[
                "Whole Spices",
                "Ground Spices",
                "Seasoning Blends",
                "Bulk & Industrial Supply",
              ].map((product) => (
                <li key={product}>
                  <Link
                    to="/products"
                    className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-secondary-foreground/80 text-sm">
                  Godbunder Road, Thane, Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-secondary-foreground/80 text-sm">
                  +91 XXXX XXXXXX
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-secondary-foreground/80 text-sm">
                  info@sonyspices.com
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span className="text-secondary-foreground/80 text-sm">
                  Mon - Sat: 9:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm">
              © {new Date().getFullYear()} Sony Seasonings & Spices. All rights reserved.
            </p>
            <p className="text-secondary-foreground/60 text-sm">
              Crafting Authentic Flavours Since 2007
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
