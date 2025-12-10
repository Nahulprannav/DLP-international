import { motion } from "motion/react";
import { AnimatedCounter } from "./AnimatedCounter";

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 150, suffix: "+", label: "Team Members" },
  { value: 50, suffix: "+", label: "Awards Won" },
];

export function Stats() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
      ></motion.div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-4xl md:text-5xl lg:text-6xl text-primary mb-2"
              >
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </motion.div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
