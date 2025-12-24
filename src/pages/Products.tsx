import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import wholeSpicesImg from "@/assets/whole-spices.jpg";
import groundSpicesImg from "@/assets/ground-spices.jpg";
import seasoningBlendsImg from "@/assets/seasoning-blends.jpg";
import bulkSupplyImg from "@/assets/bulk-supply.jpg";

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

const productCategories = [
  {
    id: "whole-spices",
    title: "Whole Spices",
    description: "Premium quality whole spices sourced from the finest farms across India. Our whole spices retain their natural oils and aromatic compounds, delivering authentic flavours to your products.",
    image: wholeSpicesImg,
    products: [
      "Black Pepper",
      "Cardamom (Green & Black)",
      "Cinnamon Sticks",
      "Cloves",
      "Cumin Seeds",
      "Coriander Seeds",
      "Mustard Seeds",
      "Fenugreek Seeds",
      "Bay Leaves",
      "Star Anise",
      "Nutmeg & Mace",
      "Dried Red Chillies",
    ],
  },
  {
    id: "ground-spices",
    title: "Ground Spices",
    description: "Expertly ground spices that preserve the full spectrum of flavour and aroma. Our grinding process ensures optimal particle size for maximum taste release in your recipes.",
    image: groundSpicesImg,
    products: [
      "Turmeric Powder",
      "Red Chilli Powder",
      "Coriander Powder",
      "Cumin Powder",
      "Black Pepper Powder",
      "Ginger Powder",
      "Garlic Powder",
      "Cinnamon Powder",
      "Cardamom Powder",
      "Nutmeg Powder",
      "White Pepper Powder",
      "Paprika",
    ],
  },
  {
    id: "seasoning-blends",
    title: "Seasoning Blends",
    description: "Crafted by our expert blenders, our seasoning mixes combine multiple spices in perfect proportions to create authentic regional flavours and signature taste profiles.",
    image: seasoningBlendsImg,
    products: [
      "Garam Masala",
      "Biryani Masala",
      "Tandoori Masala",
      "Chaat Masala",
      "Pav Bhaji Masala",
      "Sambar Powder",
      "Rasam Powder",
      "Meat Masala",
      "Fish Masala",
      "Pickle Masala",
      "Tea Masala",
      "Custom Blends",
    ],
  },
  {
    id: "bulk-supply",
    title: "Bulk & Industrial Supply",
    description: "Large-scale supply solutions for food manufacturers, processors, and distributors. We offer flexible packaging options and consistent quality for your industrial requirements.",
    image: bulkSupplyImg,
    products: [
      "Bulk Raw Spices (25kg-50kg bags)",
      "Industrial Grade Powders",
      "Custom Formulations",
      "Private Label Solutions",
      "Contract Manufacturing",
      "Export Quality Spices",
    ],
  },
];

const Products = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-warm overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUpVariants}
              custom={0}
              className="text-primary text-sm uppercase tracking-widest mb-4"
            >
              Our Products
            </motion.p>
            <motion.h1
              variants={fadeUpVariants}
              custom={1}
              className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6"
            >
              Premium Spices for Every Need
            </motion.h1>
            <motion.p
              variants={fadeUpVariants}
              custom={2}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Explore our comprehensive range of whole spices, ground spices, seasoning blends, and bulk supply options tailored for food manufacturers and brands.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      {productCategories.map((category, categoryIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={`py-20 lg:py-28 ${categoryIndex % 2 === 1 ? "bg-muted/50" : ""}`}
        >
          <div className="container mx-auto px-4">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                categoryIndex % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={categoryIndex % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-[350px] lg:h-[450px] object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={categoryIndex % 2 === 1 ? "lg:order-1" : ""}
              >
                <motion.h2
                  variants={fadeUpVariants}
                  custom={0}
                  className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4"
                >
                  {category.title}
                </motion.h2>
                <motion.p
                  variants={fadeUpVariants}
                  custom={1}
                  className="text-muted-foreground text-lg leading-relaxed mb-8"
                >
                  {category.description}
                </motion.p>

                <motion.div
                  variants={fadeUpVariants}
                  custom={2}
                  className="grid grid-cols-2 gap-3"
                >
                  {category.products.map((product) => (
                    <div
                      key={product}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {product}
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Custom Blends Section */}
      <section className="py-20 lg:py-28 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              variants={fadeUpVariants}
              custom={0}
              className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-spice-turmeric" />
              <span className="text-primary-foreground text-sm font-medium">
                Custom Solutions
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUpVariants}
              custom={1}
              className="font-serif text-3xl md:text-4xl font-semibold text-primary-foreground mb-6"
            >
              Need Custom Seasoning Blends?
            </motion.h2>
            <motion.p
              variants={fadeUpVariants}
              custom={2}
              className="text-primary-foreground/90 text-lg mb-8"
            >
              We specialize in creating custom seasoning blends tailored to your brand&apos;s unique requirements. Our R&D team works closely with you to develop signature flavour profiles that set your products apart.
            </motion.p>
            <motion.div variants={fadeUpVariants} custom={3}>
              <Button asChild variant="heroOutline">
                <Link to="/contact">
                  Discuss Your Requirements <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quality Note */}
      <section className="py-16 bg-card border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                Quality Assurance
              </h3>
              <p className="text-muted-foreground">
                All our products undergo rigorous quality testing to ensure they meet the highest standards of purity and flavour.
              </p>
            </div>
            <Button asChild>
              <Link to="/contact">Request Product Samples</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
