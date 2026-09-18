import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Page } from '../types';
import {
  Menu,
  X,
  Search,
  ArrowRight,
  Handshake,
  ShieldCheck,
  ChevronRight,
  Layers,
  Sparkles,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    currentPage,
    setCurrentPage,
    openRegistrationModal,
    openPartnerModal,
    openSearchModal,
  } = useApp();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: Page }[] = [
    { label: 'HOME', page: 'home' },
    { label: 'ABOUT US', page: 'about' },
    { label: 'PROGRAMS', page: 'programs' },
    { label: 'TRAINING', page: 'training' },
    { label: 'WELLNESS', page: 'wellness' },
    { label: 'HEALTH CAMPS', page: 'health-camps' },
    { label: 'COMMUNITY IMPACT', page: 'community' },
    { label: 'EXPERTS', page: 'experts' },
    { label: 'EVENTS', page: 'events' },
    { label: 'RESOURCES', page: 'resources' },
    { label: 'CONTACT', page: 'contact' },
  ];

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800/80 text-white'
          : 'bg-slate-900 border-b border-slate-800 text-white'
      }`}
    >
      {/* Top micro announcement bar */}
      <div className="hidden lg:block bg-gradient-to-r from-teal-900/40 via-slate-900 to-teal-900/30 border-b border-slate-800/60 py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-slate-300">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-teal-500/20 text-teal-300 border border-teal-500/30">
              Platform Mission
            </span>
            <span className="text-slate-300 font-medium">
              “Learn Better. Live Healthier. Work Wiser. Create Impact.”
            </span>
          </div>
          <div className="flex items-center space-x-5 text-xs">
            <button
              onClick={() => handleNavClick('admin')}
              className="inline-flex items-center space-x-1.5 text-slate-400 hover:text-teal-300 transition-colors"
              title="View administrative portal & submissions"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>Admin Portal</span>
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={openSearchModal}
              className="inline-flex items-center space-x-1 text-slate-400 hover:text-white transition-colors"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span>Quick Search (⌘K)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 text-left group focus:outline-none"
            aria-label="Wisdom Therapy Homepage"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform duration-200">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-heading font-extrabold text-xl tracking-tight text-white group-hover:text-teal-300 transition-colors">
                  WISDOM THERAPY
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                Training • Wellness • Health • Impact
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  id={`nav-link-${link.page}`}
                  onClick={() => handleNavClick(link.page)}
                  className={`px-2.5 py-1.5 rounded-lg text-[13px] font-semibold tracking-wide transition-all duration-150 ${
                    isActive
                      ? 'bg-teal-500/15 text-teal-300 shadow-sm border border-teal-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              id="header-search-btn"
              onClick={openSearchModal}
              className="p-2 text-slate-400 hover:text-teal-300 hover:bg-slate-800 rounded-lg transition-colors"
              title="Search across all programs, events, and resources"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              id="header-partner-btn"
              onClick={() => openPartnerModal()}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-teal-300 border border-teal-500/40 hover:bg-teal-500/10 transition-colors flex items-center space-x-1.5"
            >
              <Handshake className="w-4 h-4" />
              <span>Partner With Us</span>
            </button>

            <button
              id="header-join-program-btn"
              onClick={() => openRegistrationModal()}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-white shadow-md shadow-teal-500/20 hover:shadow-teal-500/35 transition-all flex items-center space-x-1.5"
            >
              <span>Join a Program</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger toggle & search */}
          <div className="flex items-center space-x-2 xl:hidden">
            <button
              onClick={openSearchModal}
              className="p-2 text-slate-300 hover:text-teal-300 rounded-lg"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white rounded-lg hover:bg-slate-800"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-teal-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-900/98 border-b border-slate-800 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-60" />
                </button>
              );
            })}

            <div className="pt-3 pb-1 border-t border-slate-800 mt-2">
              <button
                onClick={() => handleNavClick('admin')}
                className="w-full text-left px-3.5 py-2 text-xs font-semibold text-slate-400 hover:text-teal-300 flex items-center space-x-2"
              >
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span>Admin & Registrations Management</span>
              </button>
            </div>

            {/* Mobile CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openPartnerModal();
                }}
                className="w-full py-2.5 text-center text-xs font-bold text-teal-300 border border-teal-500/40 rounded-xl hover:bg-teal-500/10"
              >
                Partner With Us
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openRegistrationModal();
                }}
                className="w-full py-2.5 text-center text-xs font-bold bg-teal-500 text-white rounded-xl shadow-md hover:bg-teal-400"
              >
                Join a Program
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
