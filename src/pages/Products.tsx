import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.02,
      duration: 0.4,
      ease: "easeOut" as const,
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
    },
  },
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
      <section className="pt-28 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
              <Sparkles className="w-4 h-4" />
              <span>40+ Premium Seasonings</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Our Product Range
            </h1>
            <p className="text-muted-foreground">
              Premium seasonings crafted for food manufacturers, processors, and brands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
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
                whileHover={{ scale: 1.02, y: -2 }}
                className="group relative bg-card border border-border/50 rounded-xl px-4 py-4 text-sm text-foreground hover:border-primary/40 hover:shadow-soft transition-all duration-300 cursor-default"
              >
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-accent/60 group-hover:bg-primary transition-colors" />
                <span className="font-medium">{product}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Custom Blends CTA */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-3">
              Need Custom Blends?
            </h2>
            <p className="text-secondary-foreground/80 mb-6">
              We create custom seasoning formulations tailored to your brand's unique requirements.
            </p>
            <Button asChild variant="heroOutline" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
              <Link to="/contact">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
