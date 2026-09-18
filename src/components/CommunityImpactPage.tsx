import React from 'react';
import { useApp } from '../context/AppContext';
import {
  HeartPulse,
  GraduationCap,
  Sparkles,
  Users,
  Handshake,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  MapPin,
  Building,
} from 'lucide-react';

export const CommunityImpactPage: React.FC = () => {
  const { impactMetrics, impactStories, openPartnerModal, setCurrentPage } = useApp();

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30">
            Community Outreach & Public Benefit
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-white">
            Knowledge into Action. Action into Health.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Wisdom Therapy measures success not by commercial metrics alone, but by the tangible improvements we bring to vulnerable communities through free medical screening, public health literacy, and purpose-driven corporate partnerships.
          </p>

          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={() => openPartnerModal('CSR Partners')}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-md transition-all"
            >
              <span>Become an Impact Partner</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Live Statistical Dashboard Strip */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                Verified Quantitative Indicators
              </span>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Cumulative Social Impact Metrics
              </h2>
            </div>
            <span className="text-xs text-slate-400">
              Real-time synchronization with Field Operations
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {impactMetrics.map((m) => (
              <div key={m.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                  {m.value}
                </div>
                <div className="text-xs font-bold text-teal-800 uppercase tracking-wide mt-1">
                  {m.label}
                </div>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Community Impact Matters */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Our Guiding Logic
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Why Grassroots Community Impact Matters
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              In most societies, high-quality preventative healthcare and cutting-edge professional learning are luxuries reserved for urban executive enclaves. Wisdom Therapy intentionally redirects a significant portion of our intellectual, corporate, and organizational resources toward closing this gap.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              When a low-income elder receives early hypertension diagnosis at a community camp, or when a non-profit worker learns how to use AI productivity tools free of charge, the ripple effect stabilizes families and strengthens entire communities.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-3">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">Zero Commercial Endorsements</h4>
                <p className="text-xs text-slate-600 mt-0.5">We strictly prohibit pharmaceutical product pitches or marketing schemes during public medical camps.</p>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">Accredited Physician Partners</h4>
                <p className="text-xs text-slate-600 mt-0.5">All diagnostics, refraction exams, and clinical referrals are handled by certified healthcare partners.</p>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">Auditable CSR Tracking</h4>
                <p className="text-xs text-slate-600 mt-0.5">Corporate sponsors receive complete, transparent field reports with privacy-safe demographic impact logs.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stories Cards */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                Ground Reality
              </span>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Featured Impact Initiatives
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Real-world accounts of collaborative initiatives in action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactStories.map((story) => (
              <div
                key={story.id}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 overflow-hidden bg-slate-100 relative">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/95 text-slate-800 shadow-xs">
                      {story.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-3 text-xs text-slate-500 mb-2">
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-3.5 h-3.5 text-teal-600" />
                        <span>{story.location}</span>
                      </span>
                      <span>•</span>
                      <span>{story.date}</span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                      {story.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {story.summary}
                    </p>

                    <div className="p-3 bg-teal-50/70 border border-teal-200/60 rounded-xl space-y-1 text-xs">
                      <div className="font-bold text-teal-900 flex items-center space-x-1.5">
                        <Users className="w-3.5 h-3.5 text-teal-700" />
                        <span>Impact: {story.beneficiaries}</span>
                      </div>
                      <div className="text-teal-800 text-[11px]">
                        Clinical Partner: <strong>{story.partner}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteer & Partner Action Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Ready to Expand Health & Learning Access?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Whether you represent a corporate CSR committee, a hospital diagnostic wing, or a grassroots youth volunteer corps, there is a role for you at Wisdom Therapy.
            </p>
          </div>
          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={() => openPartnerModal('NGO / Community Partners')}
              className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-md transition-all"
            >
              Partner on Ground
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-5 py-2.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-200 font-bold text-xs transition-colors"
            >
              Volunteer With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
