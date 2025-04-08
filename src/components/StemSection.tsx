import React from 'react';
import { Microscope, Code, Calculator, Atom } from 'lucide-react';

const StemSection: React.FC = () => {
    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                    What is STEM Wander?
                </h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Image */}
                    <div className="relative rounded-lg overflow-hidden shadow-xl">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1920"
                            alt="STEM Wander members collaborating"
                            className="w-full h-[400px] object-cover"
                        />
                    </div>

                    {/* Right Column - Content */}
                    <div className="space-y-6">
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            STEM Wander is a dynamic community dedicated to fostering innovation and excellence
                            in Science, Technology, Engineering, and Mathematics. We believe in hands-on
                            learning, collaborative projects, and pushing the boundaries of what's possible.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-center space-x-3">
                                <Microscope className="w-8 h-8 text-blue-600" />
                                <span className="text-gray-700 dark:text-gray-300">Science</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Code className="w-8 h-8 text-orange-500" />
                                <span className="text-gray-700 dark:text-gray-300">Technology</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Calculator className="w-8 h-8 text-blue-600" />
                                <span className="text-gray-700 dark:text-gray-300">Engineering</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Atom className="w-8 h-8 text-orange-500" />
                                <span className="text-gray-700 dark:text-gray-300">Mathematics</span>
                            </div>
                        </div>

                        <button className="mt-8 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-colors duration-200">
                            Learn More About STEM
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StemSection;