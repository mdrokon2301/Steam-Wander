import React from 'react';

const Magazine: React.FC = () => {
    const magazines = [
        {
            title: 'Innovation in STEM: Winter 2025',
            image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800',
            description: 'Discover the latest breakthroughs in quantum computing and artificial intelligence.'
        },
        {
            title: 'Future of Technology: Spring 2025',
            image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
            description: 'Exploring robotics, automation, and the future of manufacturing.'
        },
        {
            title: 'Engineering Tomorrow: Summer 2025',
            image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800',
            description: 'Sustainable engineering solutions for a better future.'
        }
    ];

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                    STEM Wander Magazine
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {magazines.map((magazine, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
                        >
                            <img
                                src={magazine.image}
                                alt={magazine.title}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                    {magazine.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    {magazine.description}
                                </p>
                                <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200">
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-colors duration-200">
                        Explore All Issues
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Magazine;