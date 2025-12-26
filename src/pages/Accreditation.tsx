import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Shield, CheckCircle } from "lucide-react";
import fssaiCertificate from "@/assets/fssai-certificate.png";

const Accreditation = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-gradient-to-b from-accent/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm mb-4">
              <Shield className="w-4 h-4" />
              <span>Certified & Compliant</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Our Accreditations
            </h1>
            <p className="text-muted-foreground">
              We maintain the highest standards of food safety and quality compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FSSAI Certificate Section */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-card rounded-2xl border border-border/50 p-6 md:p-8 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h2 className="font-serif text-xl font-semibold text-foreground">
                    FSSAI License
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Food Safety and Standards Authority of India
                  </p>
                </div>
              </div>
              
              <div className="bg-background rounded-xl p-4 border border-border/30">
                <img
                  src={fssaiCertificate}
                  alt="FSSAI License Certificate - Sony Seasonings & Spices"
                  className="w-full h-auto rounded-lg"
                />
              </div>

              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="text-center p-3 bg-muted/30 rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">License Number</p>
                  <p className="font-medium text-foreground text-sm">11525020000156</p>
                </div>
                <div className="text-center p-3 bg-muted/30 rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">Category</p>
                  <p className="font-medium text-foreground text-sm">State License</p>
                </div>
                <div className="text-center p-3 bg-muted/30 rounded-lg col-span-2 md:col-span-1">
                  <p className="text-xs text-muted-foreground mb-1">Valid Until</p>
                  <p className="font-medium text-foreground text-sm">June 2026</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">
              Our Commitment to Quality
            </h2>
            <p className="text-muted-foreground">
              At Sony Seasonings & Spices, we adhere to strict food safety standards and maintain all necessary certifications to ensure our products meet the highest quality benchmarks required by the food industry.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Accreditation;
