import { Hero } from "../components/Hero";
import { motion } from "motion/react";
import { Stats } from "../components/Stats";
import { Services } from "../components/Services";
import { Features } from "../components/Features";
import { Process } from "../components/Process";
import { Portfolio } from "../components/Portfolio";
import { Testimonials } from "../components/Testimonials";
import { Clients } from "../components/Clients";
import { FAQ } from "../components/FAQ";
import { Newsletter } from "../components/Newsletter";

export function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Clients />
      <Stats />
      
      {/* Additional Home Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {[
              {
                emoji: "🚀",
                title: "Innovation First",
                description: "We leverage cutting-edge technology to deliver innovative solutions that drive your business forward.",
              },
              {
                emoji: "💼",
                title: "Business Growth",
                description: "Our solutions are designed to scale with your business and accelerate your growth trajectory.",
              },
              {
                emoji: "🎯",
                title: "Results Driven",
                description: "We focus on delivering measurable results that align with your business objectives.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary transition-colors"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">{item.emoji}</span>
                </div>
                <h3 className="mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Services />
      <Features />
      <Process />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Newsletter />
    </motion.div>
  );
}