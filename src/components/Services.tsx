import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Code, Globe, Smartphone, Zap, Shield, Database } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with the latest technologies and best practices.",
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description: "Native and cross-platform mobile apps that engage your users.",
  },
  {
    icon: Globe,
    title: "Cloud Services",
    description: "Scalable cloud infrastructure and migration services for your business.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Boost your application performance with our expert optimization services.",
  },
  {
    icon: Shield,
    title: "Security Solutions",
    description: "Enterprise-grade security to protect your data and applications.",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Turn your data into actionable insights with advanced analytics.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl">What We Offer</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet your business needs and drive digital transformation.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="border-border hover:border-primary transition-colors group h-full hover:shadow-xl">
                <CardHeader>
                  <motion.div 
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </motion.div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}