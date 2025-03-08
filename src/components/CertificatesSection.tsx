import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award } from 'lucide-react';
import CERTIFICATE1 from "../assets/Certificates/Certificate1.jpg";
import { IoIosCloseCircle } from "react-icons/io";
import CERTIFICATE2 from '../assets/Certificates/developer_certificate_accenture.jpg'
import CERTIFICATE3 from '../assets/Certificates/Certificate3.jpg'
import CERTIFICATE4 from '../assets/Certificates/AWS.jpg'
import CERTIFICATE5 from '../assets/Certificates/google analystics.jpg'

const certificates = [
    {
        title: "Full Stack Java Developer",
        issuer: "Profound Edutech Private Limited",
        date: "Jan 2022",
        description: "",
        image: CERTIFICATE1
    },
    {
        title: "Developer and Technology Job Simulation",
        issuer: "Accenture",
        date: "Feb 2025",
        description: "",
        image: CERTIFICATE2
    },
    {
        title: "Android Developement Certificate",
        issuer: "SoftCrowd Technologies",
        date: "",
        description: "",
        image: CERTIFICATE3
    },
    {
        title: "Amazon Web Services Basics",
        issuer: "LearnTube",
        date: "May 2023",
        description: "",
        image: CERTIFICATE4
    },
    {
        title: "Google Analytics for Beginners",
        issuer: "Google Analytics Academy",
        date: "",
        description: "",
        image: CERTIFICATE5
    }
];

const CertificatesSection: React.FC = () => {
    const [certificatesRef, certificatesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const openModal = (image: string) => {
        setSelectedImage(image);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedImage(null);
    };

    return (
        <motion.section
            ref={certificatesRef}
            initial="hidden"
            animate={certificatesInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="pb-20 px-4 bg-black"
        >
            <div className="container mx-auto max-w-6xl">
                <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-12 flex items-center gap-2">
                    <Award className="text-purple-400" />
                    Certificates
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {certificates.map((certificate, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ scale: 1.02 }}
                            className="bg-gradient-to-br from-purple-800/20 to-black rounded-xl p-6"
                        >
                            {certificate.image && (
                                <img
                                    src={certificate.image}
                                    alt={certificate.title}
                                    className="w-full h-48 mb-4 rounded cursor-pointer"
                                    onClick={() => openModal(certificate.image)}
                                />
                            )}
                            <h3 className="text-xl font-bold mb-2">{certificate.title}</h3>
                            <p className="text-gray-400 mb-1"><strong>Issuer:</strong> {certificate.issuer}</p>
                            {certificate.date && <p className="text-gray-400 mb-4"><strong>Date:</strong> {certificate.date}</p>}
                            <p className="text-gray-300">{certificate.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {modalIsOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={closeModal} // Closes modal when clicking outside
                >
                    <div
                        className="relative bg-white p-2 rounded-lg max-w-3xl mx-auto"
                        onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-0 right-0 mt-2 mr-2 text-black text-2xl"
                        >
                            <IoIosCloseCircle className="text-red-400" />
                        </button>
                        <img src={selectedImage!} alt="Certificate" className="max-w-full max-h-full" />
                    </div>
                </div>
            )}
        </motion.section>
    );
};

export default CertificatesSection;
