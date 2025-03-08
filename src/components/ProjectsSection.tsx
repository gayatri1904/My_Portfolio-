import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, ExternalLink, CheckCircle, Github } from 'lucide-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IMP1 from '../assets/Projects/Imperial Salon/IMG1.webp'
import IMP2 from '../assets/Projects/Imperial Salon/IMG3.webp'
import IMP3 from '../assets/Projects/Imperial Salon/IMG4.webp'
import IMP4 from '../assets/Projects/Imperial Salon/IMG7.webp'
import IMP6 from '../assets/Projects/Imperial Salon/IMP1.webp'
import IMP7 from '../assets/Projects/Imperial Salon/IMP6.webp'


import PRO1 from '../assets/Projects/Project2/1.ideamagix_project.png'
import PRO2 from '../assets/Projects/Project2/2.ideamagix_project_2.png'
import PRO3 from '../assets/Projects/Project2/3.ideamagix_project_3.png'
import PRO4 from '../assets/Projects/Project2/4.ideamagix_project_4.png'
import PRO5 from '../assets/Projects/Project2/5.ideamagix_project_5.png'
import PRO6 from '../assets/Projects/Project2/6_ideamagix_project_6.png'
import PRO7 from '../assets/Projects/Project2/7_ideamagix_project_7.png'
import PRO8 from '../assets/Projects/Project2/8_ideamagix_project_8.png'
import PRO9 from '../assets/Projects/Project2/9_ideamagix_project_9.png'

const projects = [
    {
        title: "Imperial Family Salon",
        description: ["Built a platform serving lakhs of aspirants with detailed information on  salon's services and information from anywhere."],
        tech: ["HTML", "CSS", "JavaScript", "SQL", "REACT.JS", "EXPRESS.JS", "NODE.JS"],
        externalLink: "https://imperialfamilysalon.com/",
        githubLink: "https://github.com/gayatri1904/Project-11-Imperial-Family-Salon",
        images: [
            IMP1, IMP2, IMP3, IMP4, IMP6, IMP7
        ]
    },
    {
        title: "Hospital management - ideamagix",
        description: ["An online platform for connecting patients and doctors efficiently.", " Patients can book appointments, access medical records, and get doctor suggestions.", "Doctors can *manage schedules, view patient details, and provide consultations.", "Secure database integration ensures efficient data storage and retrieval."],
        tech: ["HTML", "CSS", "Bootstrap", "Javascript", "SQL"],
        externalLink: " https://scarlet-worries.000webhostapp.com/",
        githubLink: "https://github.com/gayatri1904/Project-12-Hospital-IdeaMagix",
        images: [
            PRO1, PRO2, PRO3, PRO4, PRO5, PRO6, PRO7, PRO8, PRO9
        ]
    }
];

interface NextArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

const NextArrow: React.FC<NextArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', borderRadius: '50%', zIndex: 1, marginRight: '2.5rem', backgroundColor: 'purple' }}
            onClick={onClick}
        >
            →
        </div>
    );
};

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

const PrevArrow: React.FC<ArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', borderRadius: '50%', zIndex: 1, marginLeft: '2.5rem', backgroundColor: 'purple' }}
            onClick={onClick}
        >
            ←
        </div>
    );
};

const ProjectsSection: React.FC = () => {
    const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <motion.section
            ref={projectsRef}
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="pb-20 px-4 bg-black"
        >
            <div className="container mx-auto max-w-6xl">
                <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-12 flex items-center gap-2">
                    <Code2 className="text-purple-400" />
                    Featured Projects
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ scale: 1.02 }}
                            className="bg-gradient-to-br from-purple-900/20 to-black rounded-xl overflow-hidden"
                        >
                            {project.images.length > 1 ? (
                                <Slider {...settings}>
                                    {project.images.map((image, i) => (
                                        <div key={i}>
                                            <img src={image} alt={project.title} className="w-full h-52 " />
                                        </div>
                                    ))}
                                </Slider>
                            ) : (
                                <img src={project.images[0]} alt={project.title} className="w-full h-48 object-cover" />
                            )}
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                                <div className="text-gray-400 mb-4">
                                    {project.description.map((desc, index) => (
                                        <div key={index} className="flex gap-3 mb-2">
                                            <span><CheckCircle className="text-green-500 mt-[5px]" size={16} /></span>
                                            <p> {desc}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-purple-900/30 rounded-full text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-4 flex gap-4">
                                    {project.externalLink &&
                                        <a href={project.externalLink} className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300">
                                            View Project <ExternalLink size={16} />
                                        </a>
                                    }
                                    {project.githubLink &&
                                        <a href={project.githubLink} className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300">
                                            GitHub <Github size={16} />
                                        </a>
                                    }
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default ProjectsSection;