import { motion } from "motion/react";

const clients = [
  "TechCorp", "InnovateLabs", "StartupXYZ", "GlobalTech", "FutureSoft", "DataStream"
];

export function Clients() {
  return (
    <section className="py-20 px-4 border-y border-border/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground">Trusted by industry leaders</p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex gap-16 items-center"
          >
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-2xl font-semibold text-muted-foreground/40 hover:text-primary transition-colors whitespace-nowrap">
                  {client}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
