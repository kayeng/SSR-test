import React from 'react';
import Photo from '../assets/Profile.png'

const Home: React.FC = () => {
  return (
    <section className="home-section">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8   text-gray-800">


                <main className="py-8">
                    <div className="bg-white rounded-2xl shadow-md p-6 w-full">
                        {/* Profile Section */}
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <img
                                src={Photo}
                                alt="Profile"
                                className="w-36 h-36 rounded-full object-cover border-2 border-gray"
                            />
                            <div className="text-center md:text-left">
                                <h2 className="text-2xl font-bold">Kayeng Vang</h2>
                                <p className="text-gray-500">Full-Stack Developer</p>
                                <p className="mt-2 text-sm text-gray-600">
                                    Passionate about building modern web  applications using PHP, CodeIgniter, Vue, React, and more.
                                </p>
                            </div>
                        </div>

                        {/* Info Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                            {/* Basic Info */}
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Basic Information</h3>
                                <ul className="space-y-1 text-sm">
                                    <li><strong>Gender:</strong> Male</li>
                                    <li><strong>Date of Birth:</strong> Jul 7, 1993</li>
                                    <li><strong>Nationality:</strong> Lao</li>
                                    <li><strong>Languages:</strong> Lao, Thai, English</li>
                                </ul>
                            </div>

                            {/* Contact Info */}
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Contact</h3>
                                <ul className="space-y-1 text-sm">
                                    <li><strong>Email:</strong> kayengvang1993@gmail.com</li>
                                    <li><strong>Phone:</strong> +856 20 1234 5678</li>
                                    <li><strong>Address:</strong> Vientiane Capital, Laos</li>
                                    <li><strong>LinkedIn:</strong> linkedin.com/in/kayeng</li>
                                </ul>
                            </div>

                            {/* Skills */}
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Skills</h3>
                                <ul className="space-y-1 text-sm">
                                    <li>✔ PHP / CodeIgniter / Laravel</li>
                                    <li>✔ Vue / React / TypeScript</li>
                                    <li>✔ MySQL / MariaDB</li>
                                    <li>✔ Server & System Admin</li>
                                </ul>
                            </div>
                        </div>

                        {/* About Me */}
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold mb-2">About Me</h3>
                            <p className="text-sm text-gray-700">
                                Dynamic and results-driven IT professional with a Bachelor's degree in
                                Computer Science and over 7 years of experience leading IT operations in the
                                insurance industry. Proven expertise in system development, infrastructure
                                management, and business process automation. Adept in a wide range of
                                technologies including PHP, Vue.js, CodeIgniter, Laravel, .NET, and SQL-based
                                databases. Demonstrated success in developing enterprise-level systems,
                                managing IT budgets, and overseeing complex projects from concept to
                                completion. Known for strong problem-solving skills, meticulous attention to
                                detail, and effective collaboration with cross-functional teams and third-party
                                vendors.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
    </section>
  );
};
export default Home;