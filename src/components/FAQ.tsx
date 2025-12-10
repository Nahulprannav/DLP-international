import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "What services does DLP International offer?",
    answer: "We offer a comprehensive range of services including web development, mobile app development, cloud services, performance optimization, security solutions, and data analytics. Our team specializes in creating custom solutions tailored to your business needs.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while complex enterprise applications can take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive support and maintenance packages. This includes regular updates, security patches, performance monitoring, and technical support to ensure your application runs smoothly 24/7.",
  },
  {
    question: "What technologies do you work with?",
    answer: "We work with cutting-edge technologies including React, Node.js, Python, AWS, Azure, Google Cloud, and many more. We choose the best technology stack based on your specific requirements and business goals.",
  },
  {
    question: "How do you ensure project security?",
    answer: "Security is our top priority. We implement industry-standard security practices including encryption, secure authentication, regular security audits, and compliance with data protection regulations like GDPR.",
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible pricing models including fixed-price projects, time and materials, and retainer agreements. We'll work with you to find the best pricing structure that fits your budget and project requirements.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">
            Find answers to common questions about our services and process.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 hover:border-primary transition-colors"
              >
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
