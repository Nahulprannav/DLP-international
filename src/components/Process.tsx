import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Lightbulb, FileCode, Rocket, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Discovery",
    description: "We start by understanding your business goals, challenges, and requirements through detailed consultations.",
  },
  {
    icon: FileCode,
    title: "Design & Development",
    description: "Our team creates intuitive designs and develops robust solutions using cutting-edge technologies.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "We carefully deploy your solution, ensuring everything works perfectly and meets quality standards.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support",
    description: "Ongoing maintenance and support to ensure your solution continues to perform optimally.",
  },
];

export function Process() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary">Our Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl">How We Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our proven process ensures successful project delivery from start to finish.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2 opacity-20"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="border-border hover:border-primary transition-all h-full bg-card">
                  <CardContent className="p-6 text-center space-y-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto"
                    >
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </motion.div>
                    <div className="text-4xl font-bold text-primary/20">0{index + 1}</div>
                    <h3 className="text-xl">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
