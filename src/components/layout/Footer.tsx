import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.jpeg";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Sony Seasonings & Spices" className="w-16 h-16 rounded-full object-cover" />
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Manufacturers of premium seasonings and spices with 17+ years of experience.
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
                { href: "/accreditation", label: "Accreditation" },
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
            <h4 className="font-serif text-base font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-secondary-foreground/80 text-sm">
                  Block-F, Vishal Industrial Complex, Ghodbunder Road, Thane-401104
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-secondary-foreground/80 text-sm">
                  +91 98193 01070
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-secondary-foreground/80 text-sm">
                  sonyseasoningsandspics@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-secondary-foreground/10">
          <p className="text-secondary-foreground/60 text-sm text-center">
            © {new Date().getFullYear()} Sony Seasonings & Spices. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
