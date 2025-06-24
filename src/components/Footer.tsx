import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: About */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">About</h3>
          <p className="text-sm">
            We build modern web and mobile solutions tailored to your needs. Powered by passion, built with precision.
          </p>
        </div>

        {/* Column 2: Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">Follow Me</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg className="w-6 h-6 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.89h-2.33v6.99C18.34 21.13 22 17 22 12z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg className="w-6 h-6 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.53A8.36 8.36 0 0022 5.92a8.18 8.18 0 01-2.36.65 4.1 4.1 0 001.8-2.27 8.2 8.2 0 01-2.6.99 4.1 4.1 0 00-7 3.74A11.65 11.65 0 013 4.89a4.1 4.1 0 001.27 5.47 4.07 4.07 0 01-1.86-.51v.05a4.1 4.1 0 003.29 4.02 4.11 4.11 0 01-1.85.07 4.1 4.1 0 003.83 2.85A8.24 8.24 0 012 18.58 11.62 11.62 0 008.29 20" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg className="w-6 h-6 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM4 8h2v12H4zM10 8h1.85v1.71h.03c.26-.49.91-1.01 1.88-1.01 2.01 0 2.38 1.32 2.38 3.05V20h-2v-6.28c0-1.5-.53-2.53-1.85-2.53-1.01 0-1.6.68-1.86 1.34-.1.24-.13.58-.13.92V20h-2z" />
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg className="w-6 h-6 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 00-1.33-1.75c-1.09-.74.08-.73.08-.73a2.52 2.52 0 011.83 1.23 2.56 2.56 0 003.5 1 2.57 2.57 0 01.76-1.61c-2.67-.3-5.47-1.33-5.47-5.93a4.65 4.65 0 011.24-3.23 4.3 4.3 0 01.12-3.19s1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.3-1.23 3.3-1.23a4.3 4.3 0 01.12 3.19 4.65 4.65 0 011.24 3.23c0 4.61-2.8 5.62-5.47 5.92a2.89 2.89 0 01.82 2.24v3.32c0 .32.21.69.83.58A12 12 0 0012 0z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">Contact</h3>
          <ul className="space-y-1 text-sm">
            <li>Email: kayengvang1993@gmail.com</li>
            <li>Phone: +856 20 7614 0903</li>
            <li>Location: Vientiane, Laos</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        <span>©</span> {new Date().getFullYear()}  All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;