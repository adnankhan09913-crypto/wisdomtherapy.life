import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Brain,
  Activity,
  Briefcase,
  Salad,
  Moon,
  ShieldAlert,
  HeartPulse,
  Sparkles,
  ArrowRight,
  Info,
  CheckCircle2,
  Smile,
  Compass,
} from 'lucide-react';

export const WellnessPage: React.FC = () => {
  const { setCurrentPage, openRegistrationModal } = useApp();

  const wellnessTopics = [
    {
      title: 'Mental Wellness Awareness',
      category: 'Mental',
      desc: 'Understanding cognitive stress signals, de-stigmatizing dialogue, and creating healthy personal boundaries.',
      icon: <Brain className="w-5 h-5 text-teal-600" />,
      bullets: ['Emotional regulation techniques', 'Recognizing chronic burnout early', 'Safe peer support avenues'],
    },
    {
      title: 'Physical Wellness & Lifestyle',
      category: 'Physical',
      desc: 'Grounding everyday vitality in sustainable routines, hydration, mobility, and preventive movement.',
      icon: <Activity className="w-5 h-5 text-emerald-600" />,
      bullets: ['Sedentary risk reduction', 'Cardio-respiratory maintenance', 'Accessible daily micro-habits'],
    },
    {
      title: 'Workplace Wellness Ecosystems',
      category: 'Workplace',
      desc: 'Helping teams balance high-output quarters without sacrificing human health and mental clarity.',
      icon: <Briefcase className="w-5 h-5 text-blue-600" />,
      bullets: ['Meeting fatigue management', 'Psychologically safe team rituals', 'Manager empathy training'],
    },
    {
      title: 'Evidence-Based Nutrition',
      category: 'Lifestyle',
      desc: 'Clear, sensible guidance on metabolic health, gut-brain connection, and avoiding extreme dietary fads.',
      icon: <Salad className="w-5 h-5 text-amber-600" />,
      bullets: ['Energy-sustaining meal design', 'Blood sugar stabilization basics', 'Hydration and cognitive acuity'],
    },
    {
      title: 'Sleep Architecture & Recovery',
      category: 'Restoration',
      desc: 'The neuro-biological foundations of restorative rest, circadian alignment, and non-stimulant wind-downs.',
      icon: <Moon className="w-5 h-5 text-indigo-600" />,
      bullets: ['Digital curfew protocols', 'Optimizing REM and deep stages', 'Mitigating shift-work strain'],
    },
    {
      title: 'Desk Posture & Occupational Ergonomics',
      category: 'Ergonomics',
      desc: 'Preventing repetitive strain injuries, cervical spine tension, and visual fatigue during computer-heavy work.',
      icon: <ShieldAlert className="w-5 h-5 text-rose-600" />,
      bullets: ['Correct monitor & chair geometry', 'Hourly micro-movement drills', '20-20-20 visual rest rule'],
    },
    {
      title: 'Resilience in High-Stakes Environments',
      category: 'Resilience',
      desc: 'Building neuroplastic stamina to navigate abrupt organizational change, loss, or market uncertainty.',
      icon: <Compass className="w-5 h-5 text-cyan-600" />,
      bullets: ['Cognitive reframing practices', 'Locus of control reinforcement', 'Somatic grounding in crisis'],
    },
    {
      title: 'Work-Life Harmony & Boundary Setting',
      category: 'Work-Life',
      desc: 'Uncoupling personal identity from work output and reclaiming evenings, family presence, and genuine leisure.',
      icon: <Smile className="w-5 h-5 text-purple-600" />,
      bullets: ['Asynchronous disconnect norms', 'Overcoming guilt during rest', 'Intentional weekend replenishment'],
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30">
            Wellness Awareness & Education
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-white">
            Practical Health & Well-being for Everyday Living
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Wisdom Therapy provides non-clinical educational workshops, lifestyle awareness series, and workplace well-being frameworks to nurture mindful individuals and supportive organizations.
          </p>

          <div className="pt-2">
            <button
              onClick={() => setCurrentPage('programs')}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-md transition-all"
            >
              <span>Explore Wellness Sessions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Important Healthcare Disclaimer */}
        <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start space-x-3.5 shadow-xs">
          <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs space-y-1">
            <p className="font-bold uppercase tracking-wide">
              Educational & Awareness Notice
            </p>
            <p className="text-amber-800 leading-relaxed">
              All wellness programs, articles, and guides delivered by Wisdom Therapy are designed strictly for educational awareness and lifestyle enrichment. They do not constitute formal psychiatric treatment, individual psychotherapy, or personalized medical prescription. Individuals experiencing acute health symptoms or psychological crises are encouraged to seek assistance from accredited healthcare institutions or certified clinical specialists.
            </p>
          </div>
        </div>

        {/* 8 Wellness Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wellnessTopics.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-teal-400 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.desc}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-4">
                  {item.bullets.map((b, i) => (
                    <div key={i} className="flex items-start space-x-1.5 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() =>
                  openRegistrationModal({
                    type: 'program',
                    id: `wellness-${idx}`,
                    name: item.title,
                  })
                }
                className="w-full py-2 rounded-xl text-xs font-bold text-teal-700 bg-teal-50 hover:bg-teal-100 border border-teal-200 transition-colors text-center mt-2"
              >
                Join Upcoming Session
              </button>
            </div>
          ))}
        </div>

        {/* Holistic Wellness Callout */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
              Workplace Wellness Audits
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Bring a Culture of Wholeness to Your Organization
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We conduct confidential workplace wellness surveys, ergonomics audits, and mental resilience workshops for companies aiming to retain top talent with empathy.
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('training')}
            className="px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-md transition-all whitespace-nowrap"
          >
            Schedule Workplace Audit
          </button>
        </div>
      </div>
    </div>
  );
};
