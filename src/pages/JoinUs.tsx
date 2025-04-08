import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JoinUs: React.FC = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        institution: '',
        class: '',
        phone: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login attempted:', loginData);
        // In a real application, you would verify credentials here
        navigate('/dashboard');
    };

    return (
        <div className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <div className="flex justify-center space-x-4 mb-8">
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`px-6 py-2 rounded-full transition-colors duration-200 ${!isLogin
                                    ? 'bg-orange-500 text-white'
                                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                                }`}
                        >
                            Join Us
                        </button>
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`px-6 py-2 rounded-full transition-colors duration-200 ${isLogin
                                    ? 'bg-orange-500 text-white'
                                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                                }`}
                        >
                            Login
                        </button>
                    </div>

                    {isLogin ? (
                        // Login Form
                        <form onSubmit={handleLogin} className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                                Login to Your Account
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={loginData.email}
                                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={loginData.password}
                                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    ) : (
                        // Registration Form
                        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                                Join STEM Wander
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* First Name */}
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>

                                {/* Last Name */}
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        value={formData.lastName}
                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Institution Name */}
                            <div className="mt-6">
                                <label htmlFor="institution" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Institution Name
                                </label>
                                <input
                                    type="text"
                                    id="institution"
                                    value={formData.institution}
                                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Class Selection Dropdown */}
                            <div className="mt-6">
                                <label htmlFor="class" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Class
                                </label>
                                <select
                                    id="class"
                                    value={formData.class}
                                    onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                >
                                    <option value="">Select Class</option>
                                    {[...Array(12)].map((_, index) => (
                                        <option key={index} value={index + 1}>
                                            Class {index + 1}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Phone Number */}
                            <div className="mt-6">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="mt-8">
                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-colors duration-200"
                                >
                                    Join Us
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default JoinUs;