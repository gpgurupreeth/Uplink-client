import React, { useState, useEffect } from 'react';
import type { PageId } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ITServicesPage from './pages/ITServicesPage';
import SoftwarePage from './pages/SoftwarePage';
import QuizPage from './pages/QuizPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [contactPrefill, setContactPrefill] = useState<string>('');

  // Synchronize with URL hash for browser back/forward and direct links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (
        hash === 'it-services' ||
        hash === 'software-automation' ||
        hash === 'quiz' ||
        hash === 'about' ||
        hash === 'contact'
      ) {
        setActivePage(hash as PageId);
      } else {
        setActivePage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId, prefill?: string) => {
    if (prefill) {
      setContactPrefill(prefill);
    }
    setActivePage(page);
    window.location.hash = page === 'home' ? '' : `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen min-h-[100dvh] bg-white text-[#0F172A] flex flex-col font-sans selection:bg-[#0B3D91] selection:text-white antialiased">
      {/* 1. Global Corporate Navbar */}
      <Navbar activePage={activePage} onNavigate={handleNavigate} />

      {/* 2. Main Page Content View */}
      <main className="flex-1 w-full">
        {activePage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {activePage === 'it-services' && <ITServicesPage onNavigate={handleNavigate} />}
        {activePage === 'software-automation' && <SoftwarePage onNavigate={handleNavigate} />}
        {activePage === 'quiz' && <QuizPage onNavigate={handleNavigate} />}
        {activePage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {activePage === 'contact' && <ContactPage prefillMessage={contactPrefill} />}
      </main>

      {/* 3. Global MNC Dark Navy Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
