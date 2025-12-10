import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-90"></div>
          <motion.div
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 bg-gradient-to-r from-primary/50 via-transparent to-accent/50"
            style={{ backgroundSize: "200% 100%" }}
          ></motion.div>
          
          <div className="relative p-12 text-center text-white">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Mail className="w-8 h-8" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl mb-4 text-white">Stay Updated</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest updates on technology trends,
              industry insights, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/20 backdrop-blur-sm border-white/30 text-white placeholder:text-white/60 flex-1"
              />
              <Button
                type="submit"
                variant="secondary"
                className="whitespace-nowrap"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
