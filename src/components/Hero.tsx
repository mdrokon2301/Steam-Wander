import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Hero: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();

    const slides = [
        {
            image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=1920",
            alt: "Students working on robotics"
        },
        {
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920",
            alt: "Advanced AI Research"
        },
        {
            image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=1920",
            alt: "Quantum Computing Lab"
        },
        {
            image: " https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920",
            alt: "Nanotechnology Research"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 2500); // Reduced to 2.5 seconds for faster transitions

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen overflow-hidden">
            {/* Carousel */}
            <div className="absolute inset-0">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.alt}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900/80"></div>
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                        Explore. Innovate.{' '}
                        <span className="text-orange-500">Transform</span> the Future.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                        Join STEM Wander and be part of groundbreaking projects in Science,
                        Technology, Engineering, and Mathematics.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => navigate('/activity')}
                            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200 text-lg"
                        >
                            Learn More
                        </button>
                        <button
                            onClick={() => navigate('/join-us')}
                            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-colors duration-200 text-lg"
                        >
                            Join Us
                        </button>
                    </div>
                </div>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-200 ${currentSlide === index
                                ? 'bg-orange-500'
                                : 'bg-white/50 hover:bg-white/75'
                            }`}
                    ></button>
                ))}
            </div>
        </section>
    );
};

export default Hero;