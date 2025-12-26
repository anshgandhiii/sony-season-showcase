import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: "easeOut" as const,
    },
  }),
};

const seasonings = [
  "Achar Masala Seasoning",
  "Aloo Bhujiya Seasoning",
  "Barbeque Seasoning",
  "Butter Salt Seasoning",
  "Caramel Premix Seasoning",
  "Chatpata Seasoning",
  "Cheese Hubs Seasoning",
  "Cheese Jalapeno Seasoning",
  "Cheese Seasoning",
  "Chilli Tomato Seasoning",
  "Cream & Onion Seasoning",
  "Green Chilli Seasoning",
  "Hing Jeera Seasoning",
  "Jalapeno Seasoning",
  "Kurkure Seasoning",
  "Lime Pudina Seasoning",
  "Lime White Pepper Seasoning",
  "Lime Chilli Seasoning",
  "Manchurian Seasoning",
  "Maggi Seasoning",
  "Mexican Seasoning",
  "Nacho Seasoning",
  "Pani Puri Seasoning",
  "Peri Peri Seasoning",
  "Pizza Seasoning",
  "Pudina Seasoning",
  "Schezwan Seasoning",
  "Schezwan Chutney Seasoning",
  "Sony Manchurian Seasoning",
  "Sony Tomato Seasoning",
  "Soya Seasoning",
  "Tangy Tomato Seasoning",
  "Tomato Seasoning",
  "Tomato Ketchup",
  "Tomato Spanish",
  "Kimchi Seasoning",
  "Jain Peri Peri",
  "Jain Barbeque",
  "Jain Lime Chilli",
  "Jain Maggi",
];

const Products = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.h1
              variants={fadeUpVariants}
              custom={0}
              className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4"
            >
              Our Products
            </motion.h1>
            <motion.p
              variants={fadeUpVariants}
              custom={1}
              className="text-muted-foreground leading-relaxed"
            >
              Premium seasonings and spices crafted for food manufacturers, processors, and brands.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
          >
            {seasonings.map((product, index) => (
              <motion.div
                key={product}
                variants={fadeUpVariants}
                custom={index}
                className="bg-card border border-border/50 rounded-lg px-4 py-3 text-sm text-foreground hover:border-primary/30 transition-colors"
              >
                {product}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Custom Blends CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">
              Need Custom Blends?
            </h2>
            <p className="text-muted-foreground mb-6">
              We create custom seasoning formulations tailored to your brand's requirements.
            </p>
            <Button asChild>
              <Link to="/contact">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
