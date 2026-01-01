import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Target, Eye, CheckCircle, Handshake } from "lucide-react";
import manufacturingImg from "@/assets/manufacturing.jpg";
import spicesFlatlayImg from "@/assets/spices-flatlay.jpg";
import qualityTeamImg from "@/assets/quality-team.jpg";
import premiumSpicesImg from "@/assets/premium-spices.jpg";

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

const values = [
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Rigorous quality control at every stage of production ensures consistent excellence.",
  },
  {
    icon: Handshake,
    title: "Long-term Partnerships",
    description: "We believe in building lasting relationships with our clients based on trust and reliability.",
  },
  {
    icon: Target,
    title: "Authenticity",
    description: "Pure, unadulterated spices that preserve traditional flavour profiles.",
  },
  {
    icon: Eye,
    title: "Consistency",
    description: "Every batch meets the same high standards, ensuring reliable results for your products.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section with Image */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={spicesFlatlayImg} 
            alt="Colorful Indian spices in wooden bowls" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.p
              variants={fadeUpVariants}
              custom={0}
              className="text-primary text-sm uppercase tracking-widest mb-4"
            >
              About Us
            </motion.p>
            <motion.h1
              variants={fadeUpVariants}
              custom={1}
              className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6"
            >
              Crafting Excellence in Every Spice
            </motion.h1>
            <motion.p
              variants={fadeUpVariants}
              custom={2}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              For over 17 years, Sony Seasonings & Spices has been at the forefront of spice manufacturing, delivering authentic flavours to renowned food brands across India.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                variants={fadeUpVariants}
                custom={0}
                className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6"
              >
                Our Story
              </motion.h2>
              <motion.div
                variants={fadeUpVariants}
                custom={1}
                className="space-y-4 text-muted-foreground leading-relaxed"
              >
                <p>
                  Founded in 2007, Sony Seasonings & Spices began with a simple mission: to provide the food industry with the finest quality spices that honour traditional flavours while meeting modern manufacturing standards.
                </p>
                <p>
                  Over the years, we have grown from a small operation into one of the leading spice manufacturers in the region. Our manufacturing plant, strategically located at Godbunder Road, Thane, is equipped with state-of-the-art machinery and follows stringent quality control protocols.
                </p>
                <p>
                  Today, we are proud to be the trusted partner of renowned food brands who rely on us for consistent quality, authentic taste, and reliable supply. Our commitment to excellence has made us a name synonymous with premium spices in the industry.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={qualityTeamImg}
                  alt="Quality control team inspecting spices"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-xl p-6 shadow-elevated">
                <p className="font-serif text-4xl font-bold">17+</p>
                <p className="text-sm opacity-90">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              custom={0}
              className="bg-card rounded-xl p-8 lg:p-10 shadow-soft border border-border/50"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and preferred spice manufacturing partner for food brands globally, known for our unwavering commitment to authenticity, quality, and innovation in flavour solutions.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              custom={1}
              className="bg-card rounded-xl p-8 lg:p-10 shadow-soft border border-border/50"
            >
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver premium quality spices and seasonings that enhance the taste of every dish, while maintaining the highest standards of hygiene, sustainability, and customer satisfaction in all our operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              Our Core Values
            </motion.h2>
            <motion.p
              variants={fadeUpVariants}
              custom={1}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              The principles that guide everything we do
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariants}
                custom={index + 2}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={manufacturingImg} 
            alt="Modern spice manufacturing facility" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/90" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center text-secondary-foreground"
          >
            <motion.h2
              variants={fadeUpVariants}
              custom={0}
              className="font-serif text-3xl md:text-4xl font-semibold mb-6"
            >
              Manufacturing Excellence
            </motion.h2>
            <motion.p
              variants={fadeUpVariants}
              custom={1}
              className="text-secondary-foreground/80 text-lg leading-relaxed mb-8"
            >
              Our manufacturing facility in Thane is equipped with modern processing equipment that ensures optimal grinding, blending, and packaging of spices. We maintain strict quality control measures at every stage.
            </motion.p>
            <motion.div
              variants={fadeUpVariants}
              custom={2}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {[
                { number: "100%", label: "Quality Tested Batches" },
                { number: "ISO", label: "Certified Processes" },
                { number: "24/7", label: "Production Capability" },
              ].map((stat) => (
                <div key={stat.label} className="bg-secondary-foreground/10 rounded-lg p-6 backdrop-blur-sm">
                  <p className="font-serif text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </p>
                  <p className="text-sm text-secondary-foreground/80">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
