"use client"

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, FileText, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          Contact
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-muted-foreground mb-6">
              I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex flex-col space-y-4">
              <a
                href="https://www.linkedin.com/in/thomas-mcdonnell-fofie-462b67134"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
              <a
                href="https://github.com/tdfofie"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
              <a
                href="https://www.instagram.com/mrfofie_/profilecard/?igsh=Yzg2cW5sYjRwMzRi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="mr-2 h-5 w-5" />
                Instagram
              </a>
              <a
                href="mailto:fofie.tech@gmail.com"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="mr-2 h-5 w-5" />
                fofie.tech@gmail.com
              </a>
              <a
                href=""
                download="Thomas_McDonnell_Resume.pdf"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <FileText className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2"
          >
            <form
              action="https://getform.io/f/bxojmgla"
              method="POST"
              className="space-y-4"
            >
              <Input type="text" placeholder="Name" name="name" required />
              <Input type="email" placeholder="Email" name="email" required />
              <Textarea placeholder="Message" name="message" required rows={5} />
              <Button type="submit" className="w-full border-2 border-[#ff014f]">Send Message</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;