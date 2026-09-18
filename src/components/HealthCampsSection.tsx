import React, { useState } from 'react';
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
  X,
  Sparkles,
} from 'lucide-react';

interface HealthCampInitiative {
  tag: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  highlights: string[];
  audience: string;
}

export const HealthCampsSection: React.FC = () => {
  const { setCurrentPage, openPartnerModal, openRegistrationModal } = useApp();
  const [selectedInitiative, setSelectedInitiative] = useState<HealthCampInitiative | null>(null);

  const initiatives: HealthCampInitiative[] = [
    {
      tag: 'Community Care',
      title: 'Free Medical Camps',
      desc: 'Grassroots clinics facilitating physician consultations, vitals checking, and basic diagnostic referrals for local communities.',
      icon: <Stethoscope className="w-5 h-5 text-teal-600" />,
      highlights: [
        'Vital signs checking (Blood Pressure, Pulse, SpO2, Temperature)',
        'Qualified physician & general medical consultations',
        'Basic diagnostic referrals and essential medicine advisory',
        'Triage for vulnerable, elderly, and underserved families',
      ],
      audience: 'Underprivileged neighborhoods, rural clusters, and underserved urban localities',
    },
    {
      tag: 'Early Detection',
      title: 'Health Screening',
      desc: 'Blood pressure mapping, random blood glucose testing, and non-invasive cardiovascular risk evaluations.',
      icon: <HeartPulse className="w-5 h-5 text-emerald-600" />,
      highlights: [
        'Random blood glucose testing (Diabetes indicators)',
        'Hypertension monitoring & cardiovascular risk profile',
        'Body Mass Index (BMI) & metabolic health advisory',
        'Early warning lifestyle illness counseling',
      ],
      audience: 'Adults aged 30+, sedentary workers, and high-risk demographic groups',
    },
    {
      tag: 'Vision Health',
      title: 'Eye Care Awareness',
      desc: 'Visual acuity testing, refraction assessment, digital eye strain mitigation, and subsidized corrective spectacles.',
      icon: <Eye className="w-5 h-5 text-indigo-600" />,
      highlights: [
        'Comprehensive visual acuity & optometrist refraction tests',
        'Early screening for cataracts, presbyopia, and myopia',
        'Digital eye strain & Computer Vision Syndrome prevention',
        'Subsidized or sponsored corrective reading glasses distribution',
      ],
      audience: 'Elderly citizens, students, and digital screen-heavy workforces',
    },
    {
      tag: 'Preventive Nutrition',
      title: 'Nutrition Awareness',
      desc: 'Practical guidance on metabolic balance, anemia prevention, dietary diversity, and affordable wholesome meals.',
      icon: <Salad className="w-5 h-5 text-amber-600" />,
      highlights: [
        'Iron deficiency & anemia prevention pathways',
        'Balanced meal planning utilizing affordable local produce',
        'Child growth nutrition and maternal dietary guidance',
        'Reduction of refined sugars, trans-fats, and ultra-processed foods',
      ],
      audience: 'Families, expectant mothers, young adults, and community wellness leaders',
    },
    {
      tag: 'Corporate Wellness',
      title: 'Workplace Health Drives',
      desc: 'On-site corporate wellness screening, desk ergonomics assessment, and postural health workshops for staff.',
      icon: <Briefcase className="w-5 h-5 text-blue-600" />,
      highlights: [
        'On-site desk ergonomics & spinal alignment audit',
        'Employee metabolic panel & stress index checks',
        'Micro-break routines and anti-sedentary posture training',
        'Corporate executive wellness & burnout prevention talks',
      ],
      audience: 'Corporate enterprises, IT campuses, industrial teams, and modern offices',
    },
    {
      tag: 'Health Literacy',
      title: 'Preventive Health Sessions',
      desc: 'Expert-led educational lectures clarifying lifestyle disease prevention, sleep hygiene, and routine checkup protocols.',
      icon: <ShieldAlert className="w-5 h-5 text-rose-600" />,
      highlights: [
        'Evidence-based lifestyle disease prevention seminars',
        'Sleep hygiene, circadian rhythm, and restorative rest',
        'Routine health checkup & diagnostic screening schedules',
        'Debunking viral medical misinformation and health myths',
      ],
      audience: 'Community centers, schools, colleges, and civic associations',
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
            Wisdom Therapy works with qualified healthcare professionals and partner organizations to facilitate health awareness activities, screening initiatives and free medical camps where appropriate. Click any initiative below to inspect track details.
          </p>
        </div>

        {/* 6 Cards Grid - Clickable */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {initiatives.map((item, idx) => (
            <div
              key={idx}
              id={`initiative-card-${idx}`}
              onClick={() => setSelectedInitiative(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedInitiative(item);
                }
              }}
              className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-teal-400/80 hover:bg-slate-800/95 transition-all duration-200 group cursor-pointer flex flex-col justify-between text-left shadow-xs hover:shadow-lg hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300 bg-teal-950/60 px-2.5 py-1 rounded-full border border-teal-800/50">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] font-semibold text-slate-400 group-hover:text-teal-300 transition-colors">
                <span>View initiative details</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Selected Initiative Modal */}
        {selectedInitiative && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
            role="dialog"
            aria-modal="true"
            aria-labelledby="initiative-modal-title"
          >
            <div className="relative w-full max-w-xl bg-slate-900 border border-slate-700 text-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
              {/* Modal Header */}
              <div className="p-6 bg-slate-950 border-b border-slate-800 flex items-start justify-between">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 uppercase tracking-wider">
                    {selectedInitiative.tag}
                  </span>
                  <h3 id="initiative-modal-title" className="text-xl font-bold text-white mt-1">
                    {selectedInitiative.title}
                  </h3>
                </div>
                <button
                  id="close-initiative-modal-btn"
                  onClick={() => setSelectedInitiative(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-5 text-left">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Core Overview
                  </h4>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {selectedInitiative.desc}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    Key Scope & Focus Areas
                  </h4>
                  <div className="space-y-2">
                    {selectedInitiative.highlights.map((point, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs space-y-1">
                  <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px]">
                    Target Demographics & Reach
                  </span>
                  <p className="text-slate-300 font-medium">
                    {selectedInitiative.audience}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-teal-950/40 border border-teal-800/40 flex items-start space-x-2.5 text-xs text-teal-200">
                  <Sparkles className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>
                    Clinically guided by licensed medical officers, certified optometrists, and registered partner hospitals.
                  </span>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    setSelectedInitiative(null);
                    setCurrentPage('health-camps');
                  }}
                  className="px-4 py-2 rounded-xl border border-slate-700 hover:border-teal-500 hover:bg-slate-800 text-xs font-semibold text-slate-200 transition-colors"
                >
                  View Scheduled Ground Camps
                </button>
                <button
                  onClick={() => {
                    setSelectedInitiative(null);
                    openPartnerModal('Healthcare Partners');
                  }}
                  className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold transition-colors"
                >
                  Sponsor / Host this Track
                </button>
              </div>
            </div>
          </div>
        )}

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

