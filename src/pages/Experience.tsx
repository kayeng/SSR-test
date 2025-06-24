import React from 'react';

const Experience: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  ">
                <div className="px-2 sm:px-6 lg:px-8 rounded-2xl shadow-md bg-white p-6 ">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Experience</h2>

                    {/* Experience Item 1 */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-blue-600">Phongsavanh Insurance (APA) Co., Ltd</h3>
                        <p className="text-sm text-gray-500">Head of IT &middot; 2017 – Present</p>
                        <ul className="list-disc list-inside mt-2 text-sm text-gray-700 space-y-1">
                            <li>Managed and maintained the entire IT infrastructure.</li>
                            <li>Oversaw installation, configuration, and maintenance of servers, networks, and software.</li>
                            <li>Developed and implemented a comprehensive insurance system.</li>
                            <li>Created business-driven management systems based on company requirements.</li>
                            <li>Collaborated with vendors sto procure IT equipment.</li>
                            <li>Provided full technical support to staff, including PABX systems.</li>
                            <li>Planned annual IT budgets.</li>
                            <li>Managed Office 365 administration for the School for Gifted and Ethnic group (Ministry of Finance).</li>
                        </ul>
                    </div>

                    {/* Experience Item 2 */}
                    <div>
                        <h3 className="text-xl font-semibold text-blue-600">Ministry of Finance – Internship</h3>
                        <p className="text-sm text-gray-500">Help Desk & Developer Intern</p>
                        <ul className="list-disc list-inside mt-2 text-sm text-gray-700 space-y-1">
                            <li>Provided Help Desk support for end-users (hardware/software).</li>
                            <li>Generated reports from the Asycuda system for financial analysis.</li>
                            <li>Developed and tested a new Stock Management System.</li>
                            <li>Installed and configured computers and printers for user needs.</li>
                        </ul>
                    </div>
                </div>

            </div>
  );
};
export default Experience;