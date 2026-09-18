import React from 'react';
import { useApp } from '../context/AppContext';
import {
  GraduationCap,
  Sparkles,
  HeartPulse,
  Handshake,
  Users,
  Compass,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const CommunityImpactSection: React.FC = () => {
  const { openPartnerModal, setCurrentPage } = useApp();

  const impactChannels = [
    {
      title: 'Training',
      desc: 'Subsidized & open-access digital masterclasses for public service workers, educators, and community organizers.',
      icon: <GraduationCap className="w-5 h-5 text-teal-600" />,
    },
    {
      title: 'Awareness',
      desc: 'Evidence-based mental wellness and de-stigmatization campaigns reaching schools, workplaces, and civic groups.',
      icon: <Sparkles className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: 'Health',
      desc: 'Grassroots medical camps, vision testing, diabetes screening, and nutrition counseling with licensed physicians.',
      icon: <HeartPulse className="w-5 h-5 text-rose-600" />,
    },
    {
      title: 'Partnership',
      desc: 'Collaborative alliances with hospitals, corporate CSR programs, and regional NGOs to multiply resource delivery.',
      icon: <Handshake className="w-5 h-5 text-indigo-600" />,
    },
    {
      title: 'Volunteerism',
      desc: 'Mobilizing hundreds of registered youth, paramedical, and corporate volunteers for organized ground drives.',
      icon: <Users className="w-5 h-5 text-amber-600" />,
    },
    {
      title: 'Community Outreach',
      desc: 'Taking preventive healthcare and occupational literacy into underserved peripheral and rural zones.',
      icon: <Compass className="w-5 h-5 text-blue-600" />,
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30">
              <span>Social Mission</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading text-white leading-tight">
              Knowledge Creates{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300">
                Impact.
              </span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Wisdom Therapy believes that knowledge is only as powerful as the positive change it generates in human lives. We convert professional learning and wellness awareness into tangible community action through free medical camps, grassroots health literacy, and purpose-driven corporate partnerships.
            </p>

            <div className="space-y-2.5 pt-2 text-sm text-slate-300">
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Over 48+ verified health camps conducted with accredited medical teams</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Transparent CSR impact reporting and beneficiary follow-up pathways</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Zero commercial product promotion in public welfare camps</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => openPartnerModal('NGO / Community Partners')}
                className="px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-md shadow-teal-500/20 transition-all flex items-center space-x-2"
              >
                <span>Become an Impact Partner</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setCurrentPage('community')}
                className="px-6 py-3 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-200 font-bold text-xs transition-colors"
              >
                Explore Impact Stories
              </button>
            </div>
          </div>

          {/* Right 6-Channel Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {impactChannels.map((ch, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-teal-500/50 hover:bg-slate-800 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    {ch.icon}
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors">
                    {ch.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {ch.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
