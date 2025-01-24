"use client"

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const skillsArray = [
  { skillName: "Next.js", skillImgSrc: "/assets/images/next_js.svg", skillImgIsInvert: true },
  { skillName: "React", skillImgSrc: "/assets/images/react.png" },
  { skillName: "Tailwind CSS", skillImgSrc: "/assets/images/tailwind_css.png", skillImgIsInvert: true },
  { skillName: "HTML", skillImgSrc: "/assets/images/html.png" },
  { skillName: "CSS", skillImgSrc: "/assets/images/css3.png" },
  { skillName: "JavaScript", skillImgSrc: "/assets/images/javascript.png" },
  { skillName: "TypeScript", skillImgSrc: "/assets/images/typescript1.png", skillImgIsInvert: false },
  { skillName: "Node.js", skillImgSrc: "/assets/images/nodejs.png" },
  { skillName: "MongoDB", skillImgSrc: "/assets/images/mongodb.png" },
  { skillName: "Express.js", skillImgSrc: "/assets/images/express_js.png", skillImgIsInvert: true },
  { skillName: "GitHub", skillImgSrc: "/assets/images/github.png", skillImgIsInvert: true },
  { skillName: "Figma", skillImgSrc: "/assets/images/figma.png", skillImgIsInvert: false },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          Skills
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {skillsArray.map((skill, index) => (
            <motion.div
              key={skill.skillName}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center justify-center p-4 h-36">
                  <Image
                    src={skill.skillImgSrc}
                    alt={skill.skillName}
                    width={64}
                    height={64}
                    className={`mb-4 ${skill.skillImgIsInvert ? 'dark:invert' : ''}`}
                  />
                  <p className="text-sm font-medium text-center">{skill.skillName}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;