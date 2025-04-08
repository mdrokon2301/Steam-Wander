import React from 'react';
import deloar from '../assets/deloar.jpg';
import soroar from '../assets/soroar.jpg';
import rokon from '../assets/rokon.jpg';
import ebrahim from '../assets/ebrahim.jpg';
import papri from '../assets/papri.jpg';
import asif from '../assets/asif.jpg';

const advisors = [
    {
        name: 'Md Ebrahim Khalil',
        title: 'Vice President of STEM Wander',
        img: ebrahim,
    },

    {
        name: 'Md Ashif Ali',
        title: 'Treseurar of STEM Wander',
        img: asif,
    },

    
    {
        name: 'Soroar Jahan',
        title: 'Secretary of STEM Wander',
        img: soroar,
    },

    {
        name: 'Sanzida Rahman Papri',
        title: 'Deputy Secretary of STEM Wander',
        img: papri,
    },
    
    {
        name: 'Deloar Jahan',
        title: 'Programme Director of STEM Wander',
        img: deloar,
    },

    {
        name: 'Md Rokonuzzaman',
        title: 'Deputy program director of STEM Wander',
        img: rokon,
    },

    
];

const Alumni: React.FC = () => {
    return (
        <section className="py-20 bg-blue-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                    Meet Our Adviser Panel
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {advisors.map((advisor, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center"
                        >
                            <img
                                src={advisor.img}
                                alt={advisor.name}
                                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                            />
                            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                {advisor.name}
                            </h3>
                            <p className="text-blue-600 dark:text-blue-400 mb-2">
                                {advisor.title}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                                "STEM Wander provided the foundation for my success in the tech industry."
                            </p>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-colors duration-200">
                        Learn More Adviser Panel
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Alumni;
