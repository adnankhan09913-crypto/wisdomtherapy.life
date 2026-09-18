import React from 'react';
import { useApp } from '../context/AppContext';
import { Page } from '../types';
import {
  Sparkles,
  Heart,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  ArrowUpRight,
  Stethoscope,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentPage, openPartnerModal, openRegistrationModal } = useApp();

  const handleNav = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top Value Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-teal-950/40 to-slate-900 border-b border-slate-800/80 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 text-teal-400 font-semibold text-xs uppercase tracking-widest mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Wisdom Therapy Mandate</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              “Building Healthier Minds, Stronger People & Wiser Workplaces.”
            </h3>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Practical Learning. Meaningful Wellness. Sustainable Impact. Where professional training meets community care.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => openRegistrationModal()}
              className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-white font-bold text-xs shadow-md shadow-teal-500/20 transition-all"
            >
              Join a Program
            </button>
            <button
              onClick={() => openPartnerModal('Corporate Partners')}
              className="px-5 py-2.5 rounded-xl border border-slate-700 hover:border-teal-500/50 hover:bg-slate-900 text-slate-200 font-bold text-xs transition-all"
            >
              Partner With Us
            </button>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                WISDOM THERAPY
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Wisdom Therapy is a comprehensive learning, wellness and community-impact platform connecting people and organizations with practical knowledge, health awareness, professional training and meaningful social initiatives.
            </p>
            <div className="pt-2 flex items-center space-x-3 text-slate-400">
              <a
                href="#social-linkedin"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-teal-400 hover:border-teal-500/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#social-facebook"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-teal-400 hover:border-teal-500/40 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#social-instagram"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-teal-400 hover:border-teal-500/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#social-youtube"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-teal-400 hover:border-teal-500/40 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-teal-300 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('programs')}
                  className="hover:text-teal-300 transition-colors"
                >
                  Programs Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('training')}
                  className="hover:text-teal-300 transition-colors"
                >
                  Corporate Training
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('wellness')}
                  className="hover:text-teal-300 transition-colors"
                >
                  Wellness Pillars
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('health-camps')}
                  className="hover:text-teal-300 transition-colors"
                >
                  Health Camps
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('community')}
                  className="hover:text-teal-300 transition-colors"
                >
                  Community Impact
                </button>
              </li>
            </ul>
          </div>

          {/* Platform Exploration */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Platform & Media
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => handleNav('experts')}
                  className="hover:text-teal-300 transition-colors"
                >
                  Expert Faculty
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('events')}
                  className="hover:text-teal-300 transition-colors"
                >
                  Events Calendar
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('resources')}
                  className="hover:text-teal-300 transition-colors"
                >
                  Knowledge Hub & Guides
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-teal-300 transition-colors"
                >
                  Contact & Inquiries
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('admin')}
                  className="inline-flex items-center space-x-1 text-teal-400 hover:text-teal-300 transition-colors"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Admin Dashboard</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Partnership & Outreach */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Partnership & CSR
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => openPartnerModal('Corporate Partners')}
                  className="hover:text-teal-300 transition-colors flex items-center space-x-1"
                >
                  <span>Partner With Us</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('experts')}
                  className="hover:text-teal-300 transition-colors"
                >
                  Become an Expert
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-teal-300 transition-colors"
                >
                  Volunteer Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('health-camps')}
                  className="hover:text-teal-300 transition-colors"
                >
                  Sponsor a Health Camp
                </button>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-500 space-y-1.5">
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <a href="mailto:connect@wisdomtherapy.life" className="hover:text-teal-300 transition-colors">
                  connect@wisdomtherapy.life
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <a href="tel:+923171224411" className="hover:text-teal-300 transition-colors">
                  +92 317 1224411
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>K-49 Block 9 Vincy Mall Clifton Karachi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Health Disclaimer Banner */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-start space-x-3">
          <Stethoscope className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-slate-300 mb-0.5">Educational & Wellness Notice</p>
            <p className="leading-relaxed">
              “Wisdom Therapy provides educational, wellness and awareness initiatives. Medical and mental-health services, where offered, should be delivered by qualified professionals and appropriate partner organizations.”
            </p>
          </div>
        </div>

        {/* Copyright & Tagline */}
        <div className="mt-8 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Wisdom Therapy. All Rights Reserved.</p>
          <p className="font-medium text-slate-400">
            “Learn Better. Live Healthier. Work Wiser. Create Impact.”
          </p>
        </div>
      </div>
    </footer>
  );
};
