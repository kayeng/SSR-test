import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Experience from './pages/Experience';

import './index.css'; // Your global styles

function App() {
  return (
   <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exp" element={<Experience />} />

            {/* Optional: Add a 404 Not Found page */}
            <Route path="*" element={<div><h1>404</h1><p>Page Not Found</p></div>} />
          </Routes>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default App;