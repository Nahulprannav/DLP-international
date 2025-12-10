import { Check } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "framer-motion";

const features = [
  "Advanced AI-powered automation",
  "24/7 customer support",
  "99.9% uptime guarantee",
  "Enterprise-grade security",
  "Scalable infrastructure",
  "Real-time analytics dashboard",
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl"
              ></motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzYxMTI5OTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Technology"
                  className="relative rounded-2xl w-full h-auto shadow-xl"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-primary/10 rounded-full"
            >
              <span className="text-primary">Why Choose Us</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl">
              Built for the Future of{" "}
              <span className="text-primary">Digital Business</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our platform is designed with cutting-edge technology to help you stay ahead
              of the competition and achieve your business goals.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-3"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </motion.div>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}