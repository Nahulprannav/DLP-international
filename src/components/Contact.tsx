import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "hello@dlpinternational.com",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+1 (555) 123-4567",
  },
  {
    icon: MapPin,
    title: "Office",
    content: "123 Innovation Drive, Tech City, TC 12345",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl">Contact Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="border-border hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      className="space-y-2"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <label htmlFor="name">Name</label>
                      <Input id="name" placeholder="Your name" />
                    </motion.div>
                    <motion.div
                      className="space-y-2"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <label htmlFor="email">Email</label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    className="space-y-2"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label htmlFor="subject">Subject</label>
                    <Input id="subject" placeholder="How can we help?" />
                  </motion.div>
                  <motion.div
                    className="space-y-2"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label htmlFor="message">Message</label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your project..."
                      rows={6}
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="w-full md:w-auto">Send Message</Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <Card className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex gap-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                        className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"
                      >
                        <info.icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <div>
                        <h4>{info.title}</h4>
                        <p className="text-muted-foreground">{info.content}</p>
                      </div>
                    </div>
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