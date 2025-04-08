import React from 'react';

const Events: React.FC = () => {
    const events = [
        {
            title: 'STEM Fair 2025',
            date: 'March 15, 2025',
            image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
            description: 'Join us for an exciting day of innovation, learning, and collaboration with fellow STEM enthusiasts.'
        },
        {
            title: 'Robotics Workshop',
            date: 'March 16, 2025',
            image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&q=80&w=800',
            description: 'Learn the fundamentals of robotics and automation in this hands-on workshop.'
        },
        {
            title: 'Coding Hackathon',
            date: 'March 17, 2025',
            image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
            description: 'Put your coding skills to the test in this 24-hour hackathon event.'
        },
        {
            title: 'Guest Lecture Series',
            date: 'March 18, 2025',
            image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
            description: 'Distinguished speakers share their insights on the latest STEM innovations.'
        }
    ];

    return (
        <section className="py-20 bg-blue-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                    Upcoming Events
                </h2>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
                        >
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                    {event.title}
                                </h3>
                                <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                                    {event.date}
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    {event.description}
                                </p>
                                <button className="w-full px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-colors duration-200">
                                    Register
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
