import { Team } from "../components/Team";
import { motion } from "motion/react";

export function TeamPage() {
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
              <span className="text-primary">Our Team</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl">
              Meet the Talented People{" "}
              <span className="text-primary">Behind DLP International</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Our team of experts brings together diverse skills and experience to deliver
              exceptional results for every client.
            </p>
          </motion.div>
        </div>
      </section>

      <Team />

      {/* Company Culture Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4">Our Culture</h2>
              <p className="text-muted-foreground text-lg">
                We believe in fostering a collaborative environment where innovation thrives.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation",
                  description: "We encourage creative thinking and embrace new technologies to stay ahead.",
                },
                {
                  title: "Collaboration",
                  description: "We work together as one team, sharing knowledge and supporting each other.",
                },
                {
                  title: "Excellence",
                  description: "We strive for excellence in everything we do, delivering quality results.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-card border border-border rounded-2xl p-8 text-center"
                >
                  <h3 className="mb-3 text-primary">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
