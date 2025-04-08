import React from 'react';
import ebrahim from '../assets/ebrahim.jpg';
import deloar from '../assets/deloar.jpg';
import papri from '../assets/papri.jpg';
import asif from '../assets/asif.jpg';

const About: React.FC = () => {
    return (
        <div className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                    About STEM Wander
                </h1>

                {/* Mission Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">Our Mission</h2>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="h-full flex items-center">
                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                At STEM Wander, our mission is to nurture young minds with a deep curiosity for the world through Science, Technology, Engineering, and Mathematics. We are committed to cultivating a space where critical thinking thrives, creativity is encouraged, and innovation is the norm.
                                <br /><br />
                                Through immersive learning experiences, mentorship, and practical projects, we inspire students to embrace challenges, collaborate with peers, and grow their problem-solving capabilities. STEM Wander isn’t just a platform—it’s a movement to empower the next generation of scientists, engineers, and visionaries who will shape the future.
                            </p>
                        </div>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920"
                                alt="Students collaborating"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white">Our Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Innovation",
                                description: "Encouraging creative thinking and problem-solving through hands-on experiences."
                            },
                            {
                                title: "Collaboration",
                                description: "Building strong partnerships between students, educators, and industry professionals."
                            },
                            {
                                title: "Excellence",
                                description: "Striving for the highest standards in STEM education and research."
                            }
                        ].map((value, index) => (
                            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team Section */}
                <div>
                    <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white">Our Team</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            {
                                name: "Ebrahim Ahmed",
                                role: "Vice President",
                                image: ebrahim
                            },
                            {
                                name: "Soroar Hossain",
                                role: "Programme Director",
                                image: deloar
                            },
                            {
                                name: "Papri Khatun",
                                role: "Deputy Secretary",
                                image: papri
                            },
                            {
                                name: "Asif Reza",
                                role: "Treasurer",
                                image: asif
                            }
                        ].map((member, index) => (
                            <div key={index} className="text-center">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                                />
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {member.name}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
