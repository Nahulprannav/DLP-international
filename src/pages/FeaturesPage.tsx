import { Features } from "../components/Features";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { TrendingUp, Users, Lock, Zap, Globe, Headphones } from "lucide-react";

const additionalFeatures = [
  {
    icon: TrendingUp,
    title: "Growth Analytics",
    description: "Track your business metrics and make data-driven decisions with our comprehensive analytics dashboard.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Enhanced collaboration tools that keep your team connected and productive from anywhere.",
  },
  {
    icon: Lock,
    title: "Data Security",
    description: "Bank-level encryption and security protocols to keep your sensitive data safe and secure.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Lightning-fast load times and optimized performance for the best user experience.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Expand your business globally with our multi-region infrastructure and CDN support.",
  },
  {
    icon: Headphones,
    title: "Premium Support",
    description: "24/7 dedicated support team ready to help you succeed at every step of your journey.",
  },
];

export function FeaturesPage() {
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
              <span className="text-primary">Features</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl">
              Powerful Features for{" "}
              <span className="text-primary">Modern Businesses</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Everything you need to build, scale, and manage your digital presence with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      <Features />

      {/* Additional Features Grid */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">More Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover additional features that make DLP International the perfect choice for your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="border-border hover:border-primary transition-colors h-full">
                  <CardHeader>
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
                    >
                      <feature.icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
