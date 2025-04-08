import React from 'react';

const Activity: React.FC = () => {
    const activities = [
        {
            title: "Science Experiments Lab",
            description: "Weekly hands-on experiments covering physics, chemistry, and biology concepts.",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1920",
        },
        {
            title: "Coding Workshops",
            description: "Learn programming through practical projects and real-world applications.",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1920",
        },
        {
            title: "Robotics Club",
            description: "Build and program robots while learning about mechanical engineering and automation.",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1920",
        },
        {
            title: "Math Olympiad Training",
            description: "Prepare for mathematics competitions with advanced problem-solving techniques.",
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1920",
        }
    ];

    return (
        <div className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                    Our Activities
                </h1>
                <div className="grid md:grid-cols-2 gap-8">
                    {activities.map((activity, index) => (
                        <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                            <img
                                src={activity.image}
                                alt={activity.title}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                                    {activity.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    {activity.description}
                                </p>
                                <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-colors duration-200">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Activity;