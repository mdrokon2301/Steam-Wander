import React from 'react';

const Dashboard: React.FC = () => {
    return (
        <div className="py-20 bg-gray-50 dark:bg-gray-800 min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
                    Welcome to Your Dashboard
                </h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Upcoming Events */}
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                            Upcoming Events
                        </h2>
                        <div className="space-y-4">
                            {['STEM Fair 2025', 'Robotics Workshop', 'Coding Hackathon'].map((event, index) => (
                                <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <h3 className="font-medium text-gray-900 dark:text-white">{event}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">March {15 + index}, 2025</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Your Progress */}
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                            Your Progress
                        </h2>
                        <div className="space-y-4">
                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between">
                                    <div>
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                                            Projects Completed
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs font-semibold inline-block text-blue-600">
                                            80%
                                        </span>
                                    </div>
                                </div>
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                                    <div style={{ width: "80%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Activities */}
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                            Recent Activities
                        </h2>
                        <div className="space-y-4">
                            {[
                                'Completed Python Workshop',
                                'Submitted Research Paper',
                                'Joined Robotics Team'
                            ].map((activity, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <p className="text-gray-700 dark:text-gray-300">{activity}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;