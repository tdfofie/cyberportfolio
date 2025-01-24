"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            <Image
              src="/assets/images/pink3.png"
              alt="Thomas McDonnell"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Hi, I&apos;m <span className="text-primary">Thomas McDonnell.</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              I&apos;m a dedicated front-end software developer based in Ghana, with expertise in web and mobile app development. With a passion for intuitive design and problem-solving, I craft innovative digital solutions that are both user-friendly and efficient. 
            </p>
            <p className="text-muted-foreground mb-4">
              My technical background spans across various tools and modern frameworks, enabling me to turn complex ideas into simple, accessible interfaces.My approach is centered around solving real user problems through design and code, crafting applications that are visually engaging and highly responsive. I aim to build technology that feels natural to users, focusing not just on development, but also on refining performance and usability.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;