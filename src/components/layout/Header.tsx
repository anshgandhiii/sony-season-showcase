import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Flame, UtensilsCrossed, Cherry, Droplets, Soup, Pizza, Leaf, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpeg";

// Product categories for dropdown
// Use-case based categories for B2B manufacturing clients
const productCategories = [
  { name: "Potato Chips", icon: UtensilsCrossed, color: "text-amber-500", bgColor: "bg-amber-50" },
  { name: "Makhana", icon: Star, color: "text-emerald-500", bgColor: "bg-emerald-50" },
  { name: "Popcorn", icon: Flame, color: "text-orange-500", bgColor: "bg-orange-50" },
  { name: "Namkeen & Snacks", icon: Leaf, color: "text-lime-600", bgColor: "bg-lime-50" },
  { name: "Noodles & Pasta", icon: Soup, color: "text-red-500", bgColor: "bg-red-50" },
  { name: "Extruded Snacks", icon: Pizza, color: "text-indigo-500", bgColor: "bg-indigo-50" },
  { name: "Nuts & Dry Fruits", icon: Cherry, color: "text-rose-500", bgColor: "bg-rose-50" },
  { name: "Ready-to-Cook", icon: Droplets, color: "text-violet-500", bgColor: "bg-violet-50" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/accreditation", label: "Accreditation" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/30">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Sony Seasonings & Spices" className="w-12 h-12 rounded-full object-cover" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${location.pathname === "/" ? "text-primary" : "text-muted-foreground"
                }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${location.pathname === "/about" ? "text-primary" : "text-muted-foreground"
                }`}
            >
              About Us
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 hover:text-primary ${location.pathname === "/products" || location.pathname === "/products2"
                  ? "text-primary"
                  : "text-muted-foreground"
                  }`}
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-card border border-border rounded-xl shadow-elevated overflow-hidden"
                  >
                    {/* Header */}
                    <div className="px-4 py-3 bg-muted/50 border-b border-border">
                      <Link
                        to="/products"
                        className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        View All Products →
                      </Link>
                    </div>

                    {/* Categories Grid */}
                    <div className="p-3 grid grid-cols-2 gap-2">
                      {productCategories.map((category) => (
                        <Link
                          key={category.name}
                          to="/products"
                          className={`flex items-center gap-2.5 p-2.5 rounded-lg ${category.bgColor} hover:scale-[1.02] transition-all duration-200 group`}
                        >
                          <div className={`w-8 h-8 rounded-lg bg-white/80 flex items-center justify-center shadow-sm`}>
                            <category.icon className={`w-4 h-4 ${category.color}`} />
                          </div>
                          <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                            {category.name}
                          </span>
                        </Link>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="px-4 py-3 bg-primary/5 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        <span className="font-semibold text-primary">40+</span> Premium Seasonings Available
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/accreditation"
              className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${location.pathname === "/accreditation" ? "text-primary" : "text-muted-foreground"
                }`}
            >
              Accreditation
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${location.pathname === "/contact" ? "text-primary" : "text-muted-foreground"
                }`}
            >
              Contact
            </Link>
            <Button asChild variant="default" size="sm">
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-medium py-2 transition-colors ${location.pathname === "/" ? "text-primary" : "text-muted-foreground"
                  }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-medium py-2 transition-colors ${location.pathname === "/about" ? "text-primary" : "text-muted-foreground"
                  }`}
              >
                About Us
              </Link>

              {/* Mobile Products Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                  className={`w-full flex items-center justify-between text-base font-medium py-2 transition-colors ${location.pathname.includes("/products") ? "text-primary" : "text-muted-foreground"
                    }`}
                >
                  Products
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileProductsOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {isMobileProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 py-2 space-y-1">
                        <Link
                          to="/products"
                          onClick={() => { setIsMenuOpen(false); setIsMobileProductsOpen(false); }}
                          className="block py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                          View All Products →
                        </Link>
                        <div className="grid grid-cols-2 gap-2 pt-2">
                          {productCategories.map((category) => (
                            <Link
                              key={category.name}
                              to="/products"
                              onClick={() => { setIsMenuOpen(false); setIsMobileProductsOpen(false); }}
                              className={`flex items-center gap-2 p-2 rounded-lg ${category.bgColor} transition-all`}
                            >
                              <category.icon className={`w-4 h-4 ${category.color}`} />
                              <span className="text-xs font-medium text-foreground">{category.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/accreditation"
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-medium py-2 transition-colors ${location.pathname === "/accreditation" ? "text-primary" : "text-muted-foreground"
                  }`}
              >
                Accreditation
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-medium py-2 transition-colors ${location.pathname === "/contact" ? "text-primary" : "text-muted-foreground"
                  }`}
              >
                Contact
              </Link>
              <Button asChild variant="default" className="mt-2">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get Quote
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
