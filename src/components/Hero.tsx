import React from 'react';
import { useApp } from '../context/AppContext';
import {
  ArrowRight,
  Handshake,
  Brain,
  Activity,
  Cpu,
  Building2,
  Users,
  Sparkles,
  CheckCircle2,
  Shield,
  HeartPulse,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { setCurrentPage, openPartnerModal, openRegistrationModal } = useApp();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-800">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-teal-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -top-10 right-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Mission Narrative & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-semibold tracking-wide shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span>Training • Wellness • Health Awareness • Community Impact</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-[1.12] text-white">
              Building Healthier Minds,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-400">
                Stronger People
              </span>{' '}
              & Wiser Workplaces.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Wisdom Therapy is a learning, wellness and community-impact platform connecting people and organizations with practical knowledge, health awareness, professional training and meaningful social initiatives.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                id="hero-explore-programs-btn"
                onClick={() => setCurrentPage('programs')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-white font-bold text-sm shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all flex items-center justify-center space-x-2"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-partner-btn"
                onClick={() => openPartnerModal('Corporate Partners')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-slate-700 hover:border-teal-500/60 bg-slate-800/60 hover:bg-slate-800 text-slate-200 font-bold text-sm transition-all flex items-center justify-center space-x-2"
              >
                <Handshake className="w-4 h-4 text-teal-400" />
                <span>Partner With Us</span>
              </button>
            </div>

            {/* Credibility micro markers */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-3 text-left">
              <div className="flex items-center space-x-2 text-slate-300 text-xs">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="leading-tight">Evidence-Informed Curricula</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300 text-xs">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="leading-tight">Certified Multidisciplinary Faculty</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300 text-xs">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="leading-tight">Licensed Health Camp Partners</span>
              </div>
            </div>
          </div>

          {/* Right Column: Sophisticated Multi-Pillar Collage (Non-hospital, modern, human-centric) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Bento Collage Grid */}
              <div className="grid grid-cols-2 gap-3.5">
                {/* Tile 1: AI & Future Skills */}
                <div
                  onClick={() => setCurrentPage('training')}
                  className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700/80 hover:border-teal-500/60 hover:bg-slate-800 transition-all cursor-pointer group shadow-lg"
                >
                  <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300">
                    Technology & AI
                  </span>
                  <h4 className="text-sm font-bold text-white mt-0.5 group-hover:text-teal-300 transition-colors">
                    AI for Professionals
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-snug">
                    Workflow automation, ethical AI & future-ready skills.
                  </p>
                </div>

                {/* Tile 2: Mental Wellness */}
                <div
                  onClick={() => setCurrentPage('wellness')}
                  className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700/80 hover:border-emerald-500/60 hover:bg-slate-800 transition-all cursor-pointer group shadow-lg"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <Brain className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                    Resilience
                  </span>
                  <h4 className="text-sm font-bold text-white mt-0.5 group-hover:text-emerald-300 transition-colors">
                    Mental Wellness
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-snug">
                    Stress mitigation, emotional balance & healthy coping.
                  </p>
                </div>

                {/* Tile 3: Workplace Leadership */}
                <div
                  onClick={() => setCurrentPage('training')}
                  className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700/80 hover:border-amber-500/60 hover:bg-slate-800 transition-all cursor-pointer group shadow-lg"
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                    Corporate Excellence
                  </span>
                  <h4 className="text-sm font-bold text-white mt-0.5 group-hover:text-amber-300 transition-colors">
                    Leadership & Conflict
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-snug">
                    High-trust dialogue, psychological safety & culture.
                  </p>
                </div>

                {/* Tile 4: Health Camps & Community Impact */}
                <div
                  onClick={() => setCurrentPage('health-camps')}
                  className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700/80 hover:border-rose-500/60 hover:bg-slate-800 transition-all cursor-pointer group shadow-lg"
                >
                  <div className="w-9 h-9 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-300">
                    Community Health
                  </span>
                  <h4 className="text-sm font-bold text-white mt-0.5 group-hover:text-rose-300 transition-colors">
                    Preventive Camps
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-snug">
                    Screening & outreach via qualified medical partners.
                  </p>
                </div>
              </div>

              {/* Floating Highlight Banner */}
              <div className="mt-3.5 p-3.5 rounded-2xl bg-gradient-to-r from-teal-950/90 via-slate-900 to-slate-900 border border-teal-500/30 flex items-center justify-between shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-500 text-white flex items-center justify-center font-extrabold text-sm shadow-md">
                    24k+
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Community & Workforce Reach</h5>
                    <p className="text-[11px] text-slate-300">Across 380+ sessions & 48+ verified health camps</p>
                  </div>
                </div>
                <button
                  onClick={() => setCurrentPage('community')}
                  className="text-xs font-bold text-teal-400 hover:text-teal-300 flex items-center space-x-1"
                >
                  <span>Impact</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
