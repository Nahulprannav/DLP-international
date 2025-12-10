import { Button } from "./ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { ThreeDHero } from "./ThreeDHero";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 overflow-hidden relative min-h-screen flex items-center">
      <ThreeDHero />
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
      ></motion.div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary">Welcome to DLP International</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl"
            >
              Innovate Your Business with{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Cutting-Edge Solutions
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg"
            >
              Transform your business with our advanced technology platform. We deliver
              exceptional results that drive growth and innovation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="gap-2 border-primary/20 hover:bg-primary/10">
                  <Play className="h-4 w-4" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-8 pt-4"
            >
              {[
                { value: "500+", label: "Clients" },
                { value: "98%", label: "Satisfaction" },
                { value: "50+", label: "Awards" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-3xl text-primary">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl"
            ></motion.div>
            <div className="relative bg-gradient-to-br from-primary to-accent p-1 rounded-2xl">
              <div className="bg-card rounded-xl p-8">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                  {/* Animated grid background */}
                  <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                  }}></div>

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-20 h-20 bg-primary rounded-full flex items-center justify-center cursor-pointer relative z-10"
                  >
                    <Play className="h-10 w-10 text-primary-foreground ml-1" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}