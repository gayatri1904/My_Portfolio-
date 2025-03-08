import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Code2, Rocket, Star } from 'lucide-react';
import { FaReact, FaPython, FaJava, FaWindows, FaLinux } from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiRedux, SiSpring, SiSpringboot, SiDjango, SiMysql } from 'react-icons/si';
import { FaCogs } from 'react-icons/fa';

const skills = [
    {
        icon: <Code2 size={24} />,
        title: "Programming Languages",
        skills: [
            { name: "C++", icon: <SiCplusplus /> },
            { name: "Java", icon: <FaJava /> },
            { name: "Python", icon: <FaPython /> },
            { name: "JavaScript", icon: <SiJavascript /> },
            { name: "SQL", icon: <SiMysql /> },
            { name: "TypeScript", icon: <SiTypescript /> }
        ]
    },
    {
        icon: <Rocket size={24} />,
        title: "Frontend Development",
        skills: [
            { name: "HTML", icon: <SiHtml5 /> },
            { name: "CSS", icon: <SiCss3 /> },
            { name: "JavaScript", icon: <SiJavascript /> },
            { name: "React.js", icon: <FaReact /> },
            { name: "Ajax", icon: <SiJavascript /> },
            { name: "Redux", icon: <SiRedux /> }
        ]
    },
    {
        icon: <Star size={24} />,
        title: "Backend Development",
        skills: [
            { name: "Spring", icon: <SiSpring /> },
            { name: "Spring Boot", icon: <SiSpringboot /> },
            { name: "Microservices", icon: <FaCogs /> },
            { name: "Django", icon: <SiDjango /> }
        ]
    },
    {
        icon: <Brain size={24} />,
        title: "Operating Systems",
        skills: [
            { name: "Windows", icon: <FaWindows /> },
            { name: "Linux", icon: <FaLinux /> }
        ]
    }
];

const SkillsSection: React.FC = () => {
    const [skillsRef, skillsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const skillIconAnimation = {
        initial: { scale: 1, rotate: 0 },
        hover: {
            scale: 1.2,
            rotate: [0, -10, 10, 0],
            transition: {
                rotate: {
                    duration: 0.6,
                    ease: "easeInOut"
                },
                scale: {
                    duration: 0.2,
                    ease: "easeOut"
                }
            }
        }
    };

    return (
        <motion.section
            ref={skillsRef}
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="pb-20 px-4 bg-black"
        >
            <div className="container mx-auto max-w-6xl">
                <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-12 flex items-center gap-2">
                    <Brain className="text-purple-400" />
                    Skills & Expertise
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05 }}
                            className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-black group"
                        >
                            <div className=' flex items-center gap-4 mb-2'>
                                <motion.div
                                    className="text-purple-400 mb-4 inline-block"
                                    initial="initial"
                                    whileHover="hover"
                                    variants={skillIconAnimation}
                                >
                                    {category.icon}
                                </motion.div>
                                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                            </div>
                            <ul className="space-y-2">
                                {category.skills.map((skill, i) => (
                                    <li key={i} className="text-gray-300 flex items-center gap-2">
                                        <span className="text-purple-400">{skill.icon}</span>
                                        {skill.name}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default SkillsSection;