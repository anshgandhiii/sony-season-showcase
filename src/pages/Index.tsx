import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Factory, Leaf, Users } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/assets/hero-spices.jpg";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

const highlights = [
  {
    icon: Award,
    title: "17+ Years Experience",
    description: "Trusted expertise since 2007",
  },
  {
    icon: Factory,
    title: "Manufacturing Unit",
    description: "State-of-the-art facility in Thane",
  },
  {
    icon: Users,
    title: "Trusted by Brands",
    description: "Partnering with leading food brands",
  },
  {
    icon: Leaf,
    title: "Authentic Flavours",
    description: "Pure, natural spices",
  },
];

const Index = () => {
  return (
    <Layout>
      <SEO />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Premium spices arrangement"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-primary-foreground/80 text-sm uppercase tracking-widest mb-3"
            >
              Since 2007
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight mb-5"
            >
              Authentic. Organic.
              <br />
              <span className="text-spice-turmeric">Trusted for 17+ Years.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-primary-foreground/90 text-lg mb-8 max-w-lg"
            >
              Leading manufacturers of seasonings and spices, trusted by renowned food brands for authentic flavours.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild variant="hero">
                <Link to="/products">
                  View Products <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Highlights Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariants}
                custom={index}
                className="text-center group"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-muted-foreground mb-8">
              Whether you need bulk supply, custom blends, or standard spice products, we're here to serve your business needs.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Get a Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
