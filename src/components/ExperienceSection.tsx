import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, CheckCircle } from 'lucide-react';

const experience = [
    {
        position: "Software Developer",
        company: "Rigved Technologies",
        date: "July 2024 - Feb2025",
        description: ["Designed, developed, and deployed RPA bots to streamline and automate repetitive processes, achieving up to 40%.", "Improved operational efficiency by automating 90% of repetitive tasks using RPA. ", 'Enhanced market compliance tracking and error detection capabilities, resulting in 25% faster issue resolution.'],
        tech: ["Java", "Spring", "Springboot", "Microservices", "Rest API", "SQL", "HTML", "CSS", "RPA"]
    },
    {
        position: "Data Analyst Intern",
        company: "UVK Link Pvt Ltd",
        date: "Mar 2023 - Apr 2023",
        description: [" Data-Driven Project Support: Identified and gathered relevant data by analysing user needs, ensuring data readiness and improving project alignment with business objectives.", "Cross-Functional Collaboration: Worked closely with teams to translate data into actionable insights."],
        tech: ["Python", "Streamlet", "MySQL"]
    },
    {
        position: "Java Intern",
        company: "SoftCrowed Technologies",
        date: "Feb 2022 - May 2022",
        description: ["Java Application Development: Developed and maintained Java applications, enhancing functionality and meeting customer requirements, which improved application reliability and user satisfaction by 20%.", "Full-Stack & Integration: Participated in development, testing, and troubleshooting using Java, Hibernate, JDBC, HTML, CSS, JavaScript, Postman API, MySQL, Collection Framework, and Angular TypeScript for full-stack development."],
        tech: ["Java", "Hibernate", "JDBC", "HTML",
            "CSS", "JavaScript", "Postman API", "MySQL", "Collection Framework", "Angular TypeScript"]
    }
];

const ExperienceSection: React.FC = () => {
    const [experienceRef, experienceInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.section
            ref={experienceRef}
            initial="hidden"
            animate={experienceInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="pb-20 px-4 bg-black"
        >
            <div className="container mx-auto max-w-6xl">
                <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-12 flex items-center gap-2">
                    <Briefcase className="text-purple-400" />
                    Experience
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ scale: 1.02 }}
                            className="bg-gradient-to-br from-purple-900/20 to-black rounded-xl p-6"
                        >
                            <h3 className="text-xl font-bold mb-2">{exp.position}</h3>
                            <p className="text-gray-400 mb-1"><strong>Company:</strong> {exp.company}</p>
                            <p className="text-gray-400 mb-4"><strong>Date:</strong> {exp.date}</p>
                            <div className='mb-8'>
                                {exp.description.map((desc, index) => (
                                    <div key={index} className="flex gap-3 mb-2">
                                        <span><CheckCircle className="text-green-500 mt-[5px]" size={16} /></span>
                                        <p> {desc}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {exp.tech.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 bg-purple-900/30 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default ExperienceSection;