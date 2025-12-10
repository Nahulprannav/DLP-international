import { Services } from "../components/Services";
import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";

export function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      {/* Page Header */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary">Our Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl">
              Comprehensive Solutions for{" "}
              <span className="text-primary">Your Business</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              We provide end-to-end technology solutions that help businesses transform,
              scale, and succeed in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      <Services />

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl mb-4">Ready to Get Started?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business and achieve your goals.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="secondary" className="group">
                Contact Us Today
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
