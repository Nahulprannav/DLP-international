import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A scalable e-commerce solution with real-time inventory management",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Development",
    description: "Secure and user-friendly banking application for iOS and Android",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    tags: ["React Native", "Firebase", "Stripe"],
  },
  {
    title: "Healthcare Dashboard",
    category: "Data Analytics",
    description: "Real-time analytics dashboard for healthcare providers",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Vue.js", "Python", "AWS"],
  },
  {
    title: "AI Chatbot Solution",
    category: "AI & ML",
    description: "Intelligent customer service chatbot with natural language processing",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["Python", "TensorFlow", "NLP"],
  },
  {
    title: "Cloud Infrastructure",
    category: "Cloud Services",
    description: "Enterprise-grade cloud infrastructure migration and optimization",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop",
    tags: ["AWS", "Docker", "Kubernetes"],
  },
  {
    title: "IoT Platform",
    category: "IoT",
    description: "Complete IoT solution for smart home automation",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
    tags: ["IoT", "Node.js", "MQTT"],
  },
];

export function Portfolio() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary">Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl">Our Recent Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore some of our recent projects and see how we've helped businesses transform digitally.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-border hover:border-primary transition-all group overflow-hidden h-full bg-card/50 backdrop-blur-sm">
                <div className="relative overflow-hidden aspect-video">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="w-12 h-12 bg-primary rounded-full flex items-center justify-center"
                    >
                      <ExternalLink className="w-6 h-6 text-primary-foreground" />
                    </motion.div>
                  </div>
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="text-sm text-primary">{project.category}</div>
                  <h3 className="text-xl">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
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
