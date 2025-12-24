import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Factory, Leaf, Users } from "lucide-react";
import { SEO } from "@/components/SEO";
import heroImage from "@/assets/hero-spices.jpg";
import wholeSpicesImg from "@/assets/whole-spices.jpg";
import groundSpicesImg from "@/assets/ground-spices.jpg";
import seasoningBlendsImg from "@/assets/seasoning-blends.jpg";
import bulkSupplyImg from "@/assets/bulk-supply.jpg";
import { Layout } from "@/components/layout/Layout";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

const highlights = [
  {
    icon: Award,
    title: "17+ Years Experience",
    description: "Trusted expertise in crafting authentic flavours since 2007",
  },
  {
    icon: Factory,
    title: "Manufacturing Unit in Thane",
    description: "State-of-the-art facility ensuring quality at every step",
  },
  {
    icon: Users,
    title: "Trusted by Leading Brands",
    description: "Partnering with renowned food brands across India",
  },
  {
    icon: Leaf,
    title: "Authentic & Organic",
    description: "Pure, natural spices without any artificial additives",
  },
];

const productCategories = [
  {
    title: "Whole Spices",
    description: "Premium quality whole spices sourced from the finest farms",
    image: wholeSpicesImg,
  },
  {
    title: "Ground Spices",
    description: "Finely ground spices retaining maximum aroma and flavour",
    image: groundSpicesImg,
  },
  {
    title: "Seasoning Blends",
    description: "Expert crafted blends for authentic taste profiles",
    image: seasoningBlendsImg,
  },
  {
    title: "Bulk & Industrial Supply",
    description: "Large-scale supply for food manufacturers and distributors",
    image: bulkSupplyImg,
  },
];

const Index = () => {
  return (
    <Layout>
      <SEO />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Premium spices arrangement showcasing cinnamon, cardamom, turmeric and peppercorns"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-primary-foreground/80 text-sm uppercase tracking-widest mb-4"
            >
              Sony Seasonings & Spices
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
            >
              Authentic. Organic.
              <br />
              <span className="text-spice-turmeric">Trusted for 17+ Years.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-primary-foreground/90 text-lg md:text-xl mb-8 leading-relaxed max-w-xl"
            >
              One of the leading manufacturers of seasonings and spices, trusted by renowned food brands for authentic and organic flavours.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild variant="hero">
                <Link to="/products">
                  View Products <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Introduction Section */}
      <section className="py-20 lg:py-28 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeUpVariants}
              custom={0}
              className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6"
            >
              Crafting Authentic Flavours Since 2007
            </motion.h2>
            <motion.p
              variants={fadeUpVariants}
              custom={1}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              At Sony Seasonings & Spices, we combine traditional expertise with modern manufacturing excellence. Our state-of-the-art facility in Thane ensures every batch meets the highest quality standards, delivering consistent flavour profiles that food brands trust.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeUpVariants}
              custom={0}
              className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4"
            >
              Why Choose Us
            </motion.h2>
            <motion.p
              variants={fadeUpVariants}
              custom={1}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Discover what makes Sony Seasonings & Spices the preferred partner for leading food brands
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariants}
                custom={index + 2}
                className="group bg-card rounded-xl p-8 shadow-soft hover-lift border border-border/50"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-20 lg:py-28 bg-muted/50 spice-texture">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeUpVariants}
              custom={0}
              className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4"
            >
              Our Product Range
            </motion.h2>
            <motion.p
              variants={fadeUpVariants}
              custom={1}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              From whole spices to custom seasoning blends, we offer a comprehensive range for all your needs
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariants}
                custom={index + 2}
                className="group relative overflow-hidden rounded-xl aspect-[4/5] hover-lift"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-xl font-semibold text-secondary-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-secondary-foreground/80 text-sm">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            custom={6}
            className="text-center mt-12"
          >
            <Button asChild size="lg">
              <Link to="/products">
                Explore All Products <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeUpVariants}
              custom={0}
              className="font-serif text-3xl md:text-4xl font-semibold text-primary-foreground mb-6"
            >
              Ready to Partner with Us?
            </motion.h2>
            <motion.p
              variants={fadeUpVariants}
              custom={1}
              className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto"
            >
              Whether you need bulk supply, custom blends, or standard spice products, we are here to serve your business needs.
            </motion.p>
            <motion.div
              variants={fadeUpVariants}
              custom={2}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild variant="heroOutline">
                <Link to="/contact">
                  Get a Quote <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
