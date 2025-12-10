import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <Link to="/">
              <div className="flex items-center gap-2 cursor-pointer">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center"
                >
                  <span className="text-primary-foreground">D</span>
                </motion.div>
                <span>DLP International</span>
              </div>
            </Link>
            <p className="text-secondary-foreground/80">
              Transforming businesses with innovative technology solutions.
            </p>
            <div className="flex gap-2">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button variant="ghost" size="icon" className="h-9 w-9 text-secondary-foreground hover:text-primary hover:bg-secondary-foreground/10">
                    <Icon className="h-4 w-4" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {[
            {
              title: "Company",
              links: [
                { name: "About Us", path: "/" },
                { name: "Careers", path: "/" },
                { name: "Blog", path: "/" },
                { name: "Press", path: "/" }
              ]
            },
            {
              title: "Services",
              links: [
                { name: "Web Development", path: "/services" },
                { name: "Mobile Apps", path: "/services" },
                { name: "Cloud Services", path: "/services" },
                { name: "Consulting", path: "/services" }
              ]
            },
            {
              title: "Legal",
              links: [
                { name: "Privacy Policy", path: "/" },
                { name: "Terms of Service", path: "/" },
                { name: "Cookie Policy", path: "/" },
                { name: "GDPR", path: "/" }
              ]
            }
          ].map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
            >
              <h4 className="mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link to={link.path} className="text-secondary-foreground/80 hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-secondary-foreground/20 text-center text-secondary-foreground/80"
        >
          <p>&copy; 2025 DLP International. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}