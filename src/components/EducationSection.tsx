import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Book } from 'lucide-react';

const education = [
    {
        degree: "MSc (Computer Science)",
        institution: "K.R.T. Arts, B. H. Commerce and Science College, Nashik-01",
        date: "2023 - 2025",
        CGPA: ""
    },
    {
        degree: "BSc(Computer Science)",
        institution: "Kr. Vasantrav Naik Art's, Commerce and Science College, Nashik-01",
        date: "2019 - 2022  ",
        CGPA: ""
    }
];

const EducationSection: React.FC = () => {
    const [educationRef, educationInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.section
            ref={educationRef}
            initial="hidden"
            animate={educationInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="py-20 px-4 bg-black"
        >
            <div className="container mx-auto max-w-6xl">
                <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-12 flex items-center gap-2">
                    <Book className="text-purple-400" />
                    Education
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ scale: 1.02 }}
                            className="bg-gradient-to-br from-purple-900/20 to-black rounded-xl p-6"
                        >
                            <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                            <p className="text-gray-400 mb-1"><strong>Institution:</strong> {edu.institution}</p>
                            <p className="text-gray-400 mb-4"><strong>Date:</strong> {edu.date}</p>
                            {edu.CGPA && <p className="text-gray-400 mb-4"><strong>CGPA:</strong> {edu.CGPA}</p>}
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default EducationSection;