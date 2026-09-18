import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Compass,
  Eye,
  Target,
  Sparkles,
  Heart,
  Shield,
  Users,
  BookOpen,
  Award,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { setCurrentPage, openPartnerModal, openRegistrationModal } = useApp();

  const values = [
    { title: 'Wisdom', desc: 'Seeking deep understanding and evidence-based insight beyond superficial information.', icon: <Sparkles className="w-5 h-5 text-teal-600" /> },
    { title: 'Empathy', desc: 'Meeting individuals and workplaces where they are with compassion and psychological safety.', icon: <Heart className="w-5 h-5 text-rose-600" /> },
    { title: 'Integrity', desc: 'Zero commercial medical conflicts; absolute transparency in clinical partnerships and data.', icon: <Shield className="w-5 h-5 text-indigo-600" /> },
    { title: 'Inclusion', desc: 'Accessible learning and free community health outreach that leaves no demographic behind.', icon: <Users className="w-5 h-5 text-emerald-600" /> },
    { title: 'Learning', desc: 'Fostering continuous, lifelong curiosity and future-proof professional competencies.', icon: <BookOpen className="w-5 h-5 text-blue-600" /> },
    { title: 'Service', desc: 'Committing organizational capacity toward sustainable community wellness and grassroots relief.', icon: <Award className="w-5 h-5 text-amber-600" /> },
    { title: 'Innovation', desc: 'Leveraging ethical AI, modern pedagogy, and digital reach to amplify positive human outcomes.', icon: <Lightbulb className="w-5 h-5 text-cyan-600" /> },
    { title: 'Community', desc: 'Building supportive networks where knowledge translates into mutual empowerment.', icon: <Compass className="w-5 h-5 text-purple-600" /> },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30">
            About Wisdom Therapy
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-white">
            Where Practical Learning Meets Community Care
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Wisdom Therapy is a purpose-driven platform created to bridge the divide between professional upskilling, holistic wellness awareness, and grassroots social initiatives.
          </p>
        </div>
      </div>

      {/* Main Narrative & Philosophy */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Who We Are & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Who We Are
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              A Comprehensive Training, Wellness & Community Impact Platform
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Wisdom Therapy was established with a singular realization: true human resilience cannot be built in isolation. A thriving individual needs mental wellness awareness, physical health literacy, modern career competencies like AI and leadership, and an active connection to their community.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We operate not as a clinical hospital, but as an integrative hub connecting corporate workforces, civic organizers, licensed medical partners, and everyday individuals with the knowledge and tools required to make wiser life choices.
            </p>
            <div className="pt-2 flex items-center space-x-4">
              <button
                onClick={() => setCurrentPage('programs')}
                className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-xs"
              >
                Explore What We Offer
              </button>
              <button
                onClick={() => openPartnerModal('Academic Partners')}
                className="px-5 py-2.5 rounded-xl border border-slate-300 hover:border-teal-600 text-slate-700 text-xs font-bold"
              >
                Collaborate With Us
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
              <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
                  Our Philosophy
                </span>
                <blockquote className="text-base sm:text-lg font-bold text-slate-900 mt-1 italic leading-snug">
                  “Better knowledge leads to better choices. Better choices lead to healthier people, stronger workplaces and stronger communities.”
                </blockquote>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Our Integrated Triangle
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-xs font-bold text-slate-900">Learn Better</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">AI, leadership & skills</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-xs font-bold text-slate-900">Live Healthier</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">Mental & physical health</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-xs font-bold text-slate-900">Create Impact</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">Camps & outreach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                Our Vision
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                “To build a healthier, wiser and more resilient society through accessible learning, wellness awareness and community impact.”
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We envision a world where organizations foster genuine psychological safety, and where quality preventive health awareness reaches every tier of society.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Our Mission
              </span>
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mt-0.5">
                Six Commitments Guiding Every Initiative
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-700">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>Promote mental and physical well-being awareness across all life stages.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>Deliver practical professional learning in AI, leadership, and future skills.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>Facilitate health initiatives and free medical screening camps in communities.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>Connect communities with credible health guidance and evidence-based learning without commercial bias.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>Support healthier, more empathetic and resilient corporate workplace cultures.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>Encourage continuous learning, volunteer participation, and active civic responsibility.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Values Section */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Ethical Anchor
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Our Core Organizational Values
            </h2>
            <p className="text-sm text-slate-600">
              The ethical compass directing our team, our clinical partners, and our training faculty.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-teal-300 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  {v.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-1">
                  {v.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Approach & Impact Pillars */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950 text-white">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
              The Wisdom Therapy Approach
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Evidence-Informed. Human-Centered. Socially Accountable.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We never promote untested fads or sensationalist claims. In mental wellness, we focus on stress de-escalation and professional support pathways. In physical health, our camps are staffed by board-certified physicians. In corporate training, our sessions emphasize practical productivity alongside emotional wellness.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => setCurrentPage('training')}
                className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center space-x-1.5"
              >
                <span>Corporate Training Platform</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setCurrentPage('health-camps')}
                className="px-5 py-2.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-200 text-xs font-bold transition-colors"
              >
                Community Health Camps
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
