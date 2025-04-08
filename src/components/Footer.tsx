import React from 'react';
import { Facebook, Youtube, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-blue-900 dark:bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* Left Side */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                            STEM Wander
                        </h3>
                        <p className="text-gray-300 max-w-md">
                            Empowering the Next Generation of Innovators
                        </p>
                    </div>

                    {/* Right Side */}
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        to="/about"
                                        className="text-gray-300 hover:text-orange-400 transition-colors"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/contact"
                                        className="text-gray-300 hover:text-orange-400 transition-colors"
                                    >
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/activity"
                                        className="text-gray-300 hover:text-orange-400 transition-colors"
                                    >
                                        Our Activity
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.facebook.com/stemwander"
                                    className="text-gray-300 hover:text-orange-400 transition-colors"
                                >
                                    <Facebook className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://www.youtube.com/@stemwander"
                                    className="text-gray-300 hover:text-orange-400 transition-colors"
                                >
                                    <Youtube className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://www.instagram.com/stemwander"
                                    className="text-gray-300 hover:text-orange-400 transition-colors"
                                >
                                    <Instagram className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/stemwander"
                                    className="text-gray-300 hover:text-orange-400 transition-colors"
                                >
                                    <Linkedin className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-8 text-center">
                    <p className="text-gray-400">
                        © 2025 STEM Wander. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;