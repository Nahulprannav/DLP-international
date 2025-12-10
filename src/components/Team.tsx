import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1758691737535-57edd2a11d73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2MTE0Mjk0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1758691737535-57edd2a11d73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2MTE0Mjk0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1758691737535-57edd2a11d73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2MTE0Mjk0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1758691737535-57edd2a11d73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2MTE0Mjk0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Team() {
  return (
    <section id="team" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary">Our Team</span>
          </div>
          <h2 className="text-3xl md:text-4xl">Meet the Experts</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our talented team of professionals is dedicated to delivering exceptional results
            for every project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="border-border overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden relative">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4"
                  >
                    <div className="flex gap-2">
                      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                        <Button variant="ghost" size="icon" className="h-8 w-8 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                        <Button variant="ghost" size="icon" className="h-8 w-8 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                          <Twitter className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
                <CardContent className="p-6 space-y-3">
                  <div>
                    <h3>{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}