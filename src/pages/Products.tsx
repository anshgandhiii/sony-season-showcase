import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Flame,
  Leaf,
  UtensilsCrossed,
  Cherry,
  Droplets,
  Pizza,
  Soup,
  Star
} from "lucide-react";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
};

const heroVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Use-case based categories for B2B manufacturing clients
const productCategories = [
  {
    name: "Potato Chips",
    icon: UtensilsCrossed,
    color: "from-amber-400 to-yellow-500",
    bgColor: "bg-amber-50 dark:bg-amber-950/30",
    iconColor: "text-amber-500",
    products: [
      "Cheese Seasoning",
      "Cream & Onion Seasoning",
      "Peri Peri Seasoning",
      "Tomato Seasoning",
      "Tangy Tomato Seasoning",
      "Barbeque Seasoning",
      "Lime Chilli Seasoning",
      "Chatpata Seasoning",
    ]
  },
  {
    name: "Makhana",
    icon: Star,
    color: "from-emerald-400 to-teal-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
    iconColor: "text-emerald-500",
    products: [
      "Peri Peri Seasoning",
      "Cream & Onion Seasoning",
      "Cheese Seasoning",
      "Pudina Seasoning",
      "Butter Salt Seasoning",
      "Chatpata Seasoning",
    ]
  },
  {
    name: "Popcorn",
    icon: Flame,
    color: "from-orange-400 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/30",
    iconColor: "text-orange-500",
    products: [
      "Butter Salt Seasoning",
      "Caramel Premix Seasoning",
      "Cheese Seasoning",
      "Peri Peri Seasoning",
      "Barbeque Seasoning",
      "Jalapeno Seasoning",
    ]
  },
  {
    name: "Namkeen & Snacks",
    icon: Leaf,
    color: "from-lime-400 to-green-500",
    bgColor: "bg-lime-50 dark:bg-lime-950/30",
    iconColor: "text-lime-600",
    products: [
      "Aloo Bhujiya Seasoning",
      "Hing Jeera Seasoning",
      "Chatpata Seasoning",
      "Achar Masala Seasoning",
      "Kurkure Seasoning",
      "Pani Puri Seasoning",
    ]
  },
  {
    name: "Noodles & Pasta",
    icon: Soup,
    color: "from-red-500 to-rose-500",
    bgColor: "bg-red-50 dark:bg-red-950/30",
    iconColor: "text-red-500",
    products: [
      "Maggi Seasoning",
      "Schezwan Seasoning",
      "Manchurian Seasoning",
      "Cheese Seasoning",
      "Pizza Seasoning",
      "Tomato Seasoning",
    ]
  },
  {
    name: "Extruded Snacks",
    icon: Pizza,
    color: "from-indigo-400 to-purple-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/30",
    iconColor: "text-indigo-500",
    products: [
      "Cheese Hubs Seasoning",
      "Nacho Seasoning",
      "Mexican Seasoning",
      "Pizza Seasoning",
      "Cheese Jalapeno Seasoning",
      "Green Chilli Seasoning",
    ]
  },
  {
    name: "Nuts & Dry Fruits",
    icon: Cherry,
    color: "from-rose-400 to-pink-500",
    bgColor: "bg-rose-50 dark:bg-rose-950/30",
    iconColor: "text-rose-500",
    products: [
      "Peri Peri Seasoning",
      "Lime Pudina Seasoning",
      "Lime White Pepper Seasoning",
      "Chatpata Seasoning",
      "Schezwan Chutney Seasoning",
    ]
  },
  {
    name: "Ready-to-Cook",
    icon: Droplets,
    color: "from-violet-400 to-purple-500",
    bgColor: "bg-violet-50 dark:bg-violet-950/30",
    iconColor: "text-violet-500",
    products: [
      "Sony Manchurian Seasoning",
      "Sony Tomato Seasoning",
      "Schezwan Seasoning",
      "Kimchi Seasoning",
      "Soya Seasoning",
      "Tomato Spanish",
    ]
  },
];

// Flatten all products for the count
const allProducts = productCategories.flatMap(cat => cat.products);

// Images for each product used on this page
const productImages: Record<string, string> = {
  "Cheese Seasoning": "/images/products/cheese-seasoning.svg",
  "Cream & Onion Seasoning": "/images/products/cream-onion-seasoning.svg",
  "Peri Peri Seasoning": "/images/products/peri-peri-seasoning.svg",
  "Tomato Seasoning": "/images/products/tomato-seasoning.svg",
  "Tangy Tomato Seasoning": "/images/products/tangy-tomato-seasoning.svg",
  "Barbeque Seasoning": "/images/products/barbeque-seasoning.svg",
  "Lime Chilli Seasoning": "/images/products/lime-chilli-seasoning.svg",
  "Chatpata Seasoning": "/images/products/chatpata-seasoning.svg",
  "Pudina Seasoning": "/images/products/pudina-seasoning.svg",
  "Butter Salt Seasoning": "/images/products/butter-salt-seasoning.svg",
  "Caramel Premix Seasoning": "/images/products/caramel-premix-seasoning.svg",
  "Jalapeno Seasoning": "/images/products/jalapeno-seasoning.svg",
  "Aloo Bhujiya Seasoning": "/images/products/aloo-bhujiya-seasoning.svg",
  "Hing Jeera Seasoning": "/images/products/hing-jeera-seasoning.svg",
  "Achar Masala Seasoning": "/images/products/achar-masala-seasoning.svg",
  "Kurkure Seasoning": "/images/products/kurkure-seasoning.svg",
  "Pani Puri Seasoning": "/images/products/pani-puri-seasoning.svg",
  "Maggi Seasoning": "/images/products/maggi-seasoning.svg",
  "Schezwan Seasoning": "/images/products/schezwan-seasoning.svg",
  "Manchurian Seasoning": "/images/products/manchurian-seasoning.svg",
  "Pizza Seasoning": "/images/products/pizza-seasoning.svg",
  "Cheese Hubs Seasoning": "/images/products/cheese-hubs-seasoning.svg",
  "Nacho Seasoning": "/images/products/nacho-seasoning.svg",
  "Mexican Seasoning": "/images/products/mexican-seasoning.svg",
  "Cheese Jalapeno Seasoning": "/images/products/cheese-jalapeno-seasoning.svg",
  "Green Chilli Seasoning": "/images/products/green-chilli-seasoning.svg",
  "Lime Pudina Seasoning": "/images/products/lime-pudina-seasoning.svg",
  "Lime White Pepper Seasoning": "/images/products/lime-white-pepper-seasoning.svg",
  "Schezwan Chutney Seasoning": "/images/products/schezwan-chutney-seasoning.svg",
  "Sony Manchurian Seasoning": "/images/products/sony-manchurian-seasoning.svg",
  "Sony Tomato Seasoning": "/images/products/sony-tomato-seasoning.svg",
  "Kimchi Seasoning": "/images/products/kimchi-seasoning.svg",
  "Soya Seasoning": "/images/products/soya-seasoning.svg",
  "Tomato Spanish": "/images/products/tomato-spanish-seasoning.svg",
};

const Products = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Animated background gradients */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/20 text-primary text-sm font-medium mb-6 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>{allProducts.length} Premium Seasonings</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            </motion.div>

            {/* Title with gradient */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">Our </span>
              <span className="text-gradient">Product Range</span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Premium seasonings crafted with precision for food manufacturers, processors, and leading brands across the globe.
            </p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8 mt-10"
            >
              {[
                { label: "Categories", value: productCategories.length },
                { label: "Products", value: allProducts.length },
                { label: "Years of Excellence", value: "17+" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category-based Products Grid */}
      <section className="py-16 pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-16"
          >
            {productCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                variants={fadeUpVariants}
                custom={categoryIndex}
                className="relative"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center shadow-soft`}>
                    <category.icon className={`w-6 h-6 ${category.iconColor}`} />
                  </div>
                  <div>
                    <h2 className="font-serif text-xl md:text-2xl font-semibold text-foreground">
                      {category.name}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {category.products.length} products
                    </p>
                  </div>
                  <div className={`ml-auto h-1 flex-1 max-w-[200px] rounded-full bg-gradient-to-r ${category.color} opacity-30`} />
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {category.products.map((product, productIndex) => (
                    <motion.div
                      key={product}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: productIndex * 0.05 }}
                      whileHover={{
                        scale: 1.03,
                        y: -4,
                        transition: { duration: 0.2 }
                      }}
                      className="group relative"
                    >
                      {/* Gradient border wrapper */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`} />

                      {/* Card */}
                      <div className="relative h-full bg-card/95 backdrop-blur-sm border border-border/60 rounded-2xl p-5 transition-all duration-300 group-hover:border-transparent group-hover:shadow-elevated">
                        {/* Decorative corner accent */}
                        <div className={`absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-gradient-to-br ${category.color} opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300`} />

                        {/* Product image (always shown; falls back if missing) */}
                        <div className="w-full h-20 rounded-xl overflow-hidden mb-3 bg-muted/40">
                          <img
                            src={productImages[product] ?? "/placeholder.svg"}
                            alt={product}
                            loading="lazy"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              if (e.currentTarget.src.includes("placeholder.svg")) return;
                              e.currentTarget.src = "/placeholder.svg";
                            }}
                          />
                        </div>

                        {/* Icon */}
                        <div className={`w-10 h-10 rounded-lg ${category.bgColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                          <category.icon className={`w-5 h-5 ${category.iconColor}`} />
                        </div>

                        {/* Product Name */}
                        <h3 className="font-semibold text-foreground text-sm leading-snug group-hover:text-primary transition-colors duration-300">
                          {product}
                        </h3>

                        {/* Subtle category indicator */}
                        <p className="text-xs text-muted-foreground/70 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {category.name}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products Banner */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
        <div className="absolute inset-0 dot-pattern opacity-50" />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
              Our Bestsellers
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              These premium seasonings are trusted by leading food brands nationwide
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {["Peri Peri Seasoning", "Cheese Seasoning", "Schezwan Seasoning", "Manchurian Seasoning", "Pizza Seasoning"].map((product, index) => (
              <motion.div
                key={product}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-card border border-border/60 shadow-soft hover:shadow-elevated hover:border-primary/40 transition-all duration-300"
              >
                <Star className="w-4 h-4 text-spice-turmeric fill-spice-turmeric" />
                <span className="font-medium text-foreground text-sm">{product}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Custom Blends CTA */}
      <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-secondary-foreground relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-foreground/10 text-secondary-foreground/90 text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Custom Solutions</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Need Custom Blends?
            </h2>
            <p className="text-secondary-foreground/80 text-lg mb-8 leading-relaxed">
              We create bespoke seasoning formulations tailored to your brand's unique flavor profile and requirements.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary-foreground text-secondary hover:bg-primary-foreground/90">
                <Link to="/contact">
                  Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
