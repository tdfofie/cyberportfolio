"use client"

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {  ArrowRight, Code, Paintbrush, Terminal, Monitor, Rocket, Cloud, Globe, Server, Database, Layers, Squirrel} from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-4 font-sans"
        >
          Hi, I&apos;m <span className="text-[#ff014f]">Thomas McDonnell.</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-4xl font-semibold mb-6 font-sans"
        >
          I&apos;m a{' '}
          <TypeAnimation
            sequence={[
              'FrontEnd Developer',
              2000,
              'Tech Creator',
              2000,
              'UI Designer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-[#9e9d9e]"
          />
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-8 text-sans"
        >
          I specialize in building exceptional digital experiences. Currently, I&apos;m focused on creating responsive front-end web applications.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button asChild className="group border-2 border-[#ff014f]">
            <a href="#work">
              View projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute inset-0 pointer-events-none"
      >
        <Code className="squiggle-hero-html absolute top-1/2 md:right-[10%] w-20 h-20 text-primary" />
        <Paintbrush className="squiggle-hero-html absolute bottom-[25%] left-[13%] md:left-1/3 w-24 h-24 text-primary" style={{ animationDelay: "3.2s" }}/>
        <Terminal className="squiggle-hero-html absolute top-10 left-1/4 w-20 h-20 text-primary" />
        <Monitor className="squiggle-hero-html absolute bottom-1/2 right-1/4 w-20 h-20 text-primary" />
        <Rocket className="sqD squiggle-hero-html absolute top-[20%] right-[25%] md:right[40%] w-20 h-20 text-primary" style={{ animationDelay: "2.2s" }}/>
        <Database className="squiggle-hero-html absolute bottom-10 left-1/4 w-20 h-20 text-primary" />
        <Cloud className="hidden absolute top-1/2 right-5 w-20 h-20 text-primary" />
        <Globe className="squiggle-hero-html absolute bottom-32 md:bottom-32 right-[5%] md:right-[30%] w-32 h-32 text-primary" />
        <Server className="squiggle-hero-html absolute bottom-1/5 right-20 w-20 h-20 text-primary" />
        <Layers className="squiggle-hero-html absolute left-[1%] top-[20%] md:left-1/3 w-28 h-28 text-primary" />

        <Code className="squiggle-hero-html absolute top-[30%] left-[8%] md:left-[15%] w-20 h-20 text-primary hidden md:block" />
        <Squirrel className="squiggle-hero-html absolute top-[60%] left-[10%] md:left-[20%] w-20 h-20 text-primary hidden md:block" />
        <Paintbrush className="squiggle-hero-html absolute top-[80%] left-[12%] md:left-[18%] w-20 h-20 text-primary hidden md:block" />
        <Server className="squiggle-hero-html absolute top-[40%] left-[5%] w-20 h-20 text-primary hidden md:block" />

      </motion.div>
    </section>
  );
};

export default Hero;