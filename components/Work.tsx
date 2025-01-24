"use client"

import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    name: "iNotebook-cloud",
    description: "A dynamic notebook application using the MERN stack.",
    demoUrl: "https://iinotebook.vercel.app/",
    githubUrl: "https://github.com/Yuvraj210103",
    imageSrc: "/assets/images/site4.jpg"
  },
  {
    name: "E-commerce Application",
    description: "A robust e-commerce platform using React.js, delivering a great online shopping experience.",
    demoUrl: "https://ecommerce-yuvraj.vercel.app/",
    githubUrl: "https://github.com/Yuvraj210103",
    imageSrc: "/assets/images/site3.jpg"
  },
  {
    name: "News Application",
    description: "News application made with React.js that delivers the latest daily news.",
    demoUrl: "https://daily-news-mocha.vercel.app/",
    githubUrl: "https://github.com/Yuvraj210103",
    imageSrc: "/assets/images/site2.jpg"
  },
  {
    name: "Text Analyzer",
    description: "Text analyzer made using React.js. Analyze your text seamlessly at your fingertips.",
    demoUrl: "https://yuvraj210103.github.io/Text-Utils/",
    githubUrl: "https://github.com/Yuvraj210103",
    imageSrc: "/assets/images/site1.jpg"
  }
];

const Work = () => {
  return (
    <section id="work" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <Image
                  src={project.imageSrc}
                  alt={project.name}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between p-4">
                  <Button asChild variant="outline" size="sm">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button asChild size="sm" className="border-2 border-[#ff014f]">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;