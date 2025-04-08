import React from 'react';
import deloar from '../assets/deloar.jpg';
import rokon from '../assets/rokon.jpg';

const Community: React.FC = () => {
    const testimonials = [
        {
            name: 'Deloar Jahan',
            role: 'Computer Science Student',
            image: deloar,
            quote: 'STEM Wander has been an incredible journey of discovery and innovation. The community here is supportive, knowledgeable, and passionate about making a difference.'
        },
        {
            name: 'Md Rokonuzzaman',
            role: 'Robotics Enthusiast',
            image: rokon,
            quote: 'STEM Wander opened up endless opportunities for collaboration and learning. I’ve met some of the brightest minds here!'
        }
    ];

    return (
        <section className="py-20 bg-orange-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                    Our Community
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Testimonials */}
                    <div className="space-y-8">
                        {testimonials.map((person, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                            >
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    "{person.quote}"
                                </p>
                                <div className="flex items-center">
                                    <img
                                        src={person.image}
                                        alt={person.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div className="ml-4">
                                        <h4 className="font-semibold text-gray-900 dark:text-white">
                                            {person.name}
                                        </h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            {person.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Community Images */}
                    <div className="grid grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((index) => (
                            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src={`https://images.unsplash.com/photo-${index === 1
                                        ? '1522071820081-009f0129c71c'
                                        : index === 2
                                            ? '1523580846011-d3a5bc25702b'
                                            : index === 3
                                                ? '1531482615713-2afd69097998'
                                                : '1517245386807-bb43f82c33c4'
                                        }?auto=format&fit=crop&q=80&w=800`}
                                    alt={`Community Activity ${index}`}
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-center mt-12">
                    <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200">
                        Join the Community
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Community;
