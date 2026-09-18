import React from 'react';
import { useApp } from '../context/AppContext';
import {
  HeartPulse,
  Eye,
  Salad,
  Briefcase,
  ShieldAlert,
  Stethoscope,
  ArrowRight,
  CheckCircle2,
  Calendar,
  MapPin,
  Building,
} from 'lucide-react';

export const HealthCampsSection: React.FC = () => {
  const { setCurrentPage, openPartnerModal } = useApp();

  const initiatives = [
    {
      title: 'Free Medical Camps',
      desc: 'Grassroots clinics facilitating physician consultations, vitals checking, and basic diagnostic referrals for local communities.',
      icon: <Stethoscope className="w-5 h-5 text-teal-600" />,
      tag: 'Community Care',
    },
    {
      title: 'Health Screening',
      desc: 'Blood pressure mapping, random blood glucose testing, and non-invasive cardiovascular risk evaluations.',
      icon: <HeartPulse className="w-5 h-5 text-emerald-600" />,
      tag: 'Early Detection',
    },
    {
      title: 'Eye Care Awareness',
      desc: 'Visual acuity testing, refraction assessment, digital eye strain mitigation, and subsidized corrective spectacles.',
      icon: <Eye className="w-5 h-5 text-indigo-600" />,
      tag: 'Vision Health',
    },
    {
      title: 'Nutrition Awareness',
      desc: 'Practical guidance on metabolic balance, anemia prevention, dietary diversity, and affordable wholesome meals.',
      icon: <Salad className="w-5 h-5 text-amber-600" />,
      tag: 'Preventive Nutrition',
    },
    {
      title: 'Workplace Health Drives',
      desc: 'On-site corporate wellness screening, desk ergonomics assessment, and postural health workshops for staff.',
      icon: <Briefcase className="w-5 h-5 text-blue-600" />,
      tag: 'Corporate Wellness',
    },
    {
      title: 'Preventive Health Sessions',
      desc: 'Expert-led educational lectures clarifying lifestyle disease prevention, sleep hygiene, and routine checkup protocols.',
      icon: <ShieldAlert className="w-5 h-5 text-rose-600" />,
      tag: 'Health Literacy',
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute -bottom-24 right-0 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30">
            <HeartPulse className="w-3.5 h-3.5" />
            <span>Outreach & Clinical Partnerships</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading text-white">
            Health Awareness That Reaches Communities
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Wisdom Therapy works with qualified healthcare professionals and partner organizations to facilitate health awareness activities, screening initiatives and free medical camps where appropriate.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {initiatives.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-teal-500/50 hover:bg-slate-800 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-900/60 px-2.5 py-1 rounded-full border border-slate-700/60">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Important Clinical Notice Box */}
        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start space-x-3.5">
            <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
              <Stethoscope className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                Ethical Health Delivery Standards
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
                All screening and diagnostic consultations are conducted exclusively by accredited physicians, licensed optometrists, and registered healthcare organizations. Wisdom Therapy facilitates educational awareness, organization logistics, and community volunteer mobilization.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={() => openPartnerModal('Healthcare Partners')}
              className="px-4 py-2.5 rounded-xl border border-slate-700 hover:border-teal-500/50 hover:bg-slate-900 text-xs font-bold text-slate-200 transition-colors"
            >
              Sponsor / Host a Camp
            </button>
            <button
              onClick={() => setCurrentPage('health-camps')}
              className="px-4 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-md transition-colors flex items-center space-x-1.5"
            >
              <span>Explore Health Initiatives</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
