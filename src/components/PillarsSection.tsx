import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Brain,
  Activity,
  Cpu,
  Building2,
  Coins,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { Page } from '../types';

export const PillarsSection: React.FC = () => {
  const { setCurrentPage } = useApp();

  const pillars: {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    bulletPoints: string[];
    icon: React.ReactNode;
    colorClasses: {
      badge: string;
      iconBg: string;
      hoverBorder: string;
    };
    targetPage: Page;
  }[] = [
    {
      id: 1,
      title: 'Mental Wellness',
      subtitle: 'Resilience & Emotional Well-being',
      description: 'Stress awareness, resilience, emotional well-being and healthy coping mechanisms for everyday life and high-pressure roles.',
      bulletPoints: ['Stress & burnout de-escalation', 'Psychological safety culture', 'Healthy cognitive boundaries'],
      icon: <Brain className="w-6 h-6" />,
      colorClasses: {
        badge: 'bg-teal-50 text-teal-800 border-teal-200',
        iconBg: 'bg-teal-100 text-teal-700',
        hoverBorder: 'hover:border-teal-400',
      },
      targetPage: 'wellness',
    },
    {
      id: 2,
      title: 'Physical Health',
      subtitle: 'Preventive Living & Nutrition',
      description: 'Preventive health, healthy lifestyle, nutrition, fitness and workplace health awareness grounded in medical science.',
      bulletPoints: ['Metabolic wellness & nutrition', 'Desk posture & ergonomics', 'Cardiovascular risk screening'],
      icon: <Activity className="w-6 h-6" />,
      colorClasses: {
        badge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
        iconBg: 'bg-emerald-100 text-emerald-700',
        hoverBorder: 'hover:border-emerald-400',
      },
      targetPage: 'wellness',
    },
    {
      id: 3,
      title: 'AI & Future Skills',
      subtitle: 'Digital Transformation & Leverage',
      description: 'Artificial intelligence, productivity, digital transformation and future-ready skills that empower human talent.',
      bulletPoints: ['Applied generative AI workflows', 'Ethical tech & privacy guardrails', 'Productivity without burnout'],
      icon: <Cpu className="w-6 h-6" />,
      colorClasses: {
        badge: 'bg-indigo-50 text-indigo-800 border-indigo-200',
        iconBg: 'bg-indigo-100 text-indigo-700',
        hoverBorder: 'hover:border-indigo-400',
      },
      targetPage: 'training',
    },
    {
      id: 4,
      title: 'Workplace Excellence',
      subtitle: 'Culture, Leadership & Dialogue',
      description: 'Leadership, communication, conflict management, employee engagement and compassionate high-performance team culture.',
      bulletPoints: ['Constructive dispute mediation', 'Empathetic people management', 'Executive presence & clarity'],
      icon: <Building2 className="w-6 h-6" />,
      colorClasses: {
        badge: 'bg-blue-50 text-blue-800 border-blue-200',
        iconBg: 'bg-blue-100 text-blue-700',
        hoverBorder: 'hover:border-blue-400',
      },
      targetPage: 'training',
    },
    {
      id: 5,
      title: 'Financial Well-being',
      subtitle: 'Literacy & Inflation Resilience',
      description: 'Inflation awareness, financial literacy, budgeting, debt mitigation, and practical financial confidence.',
      bulletPoints: ['Cash flow & emergency buffers', 'High-interest debt reduction', 'Stress-free retirement planning'],
      icon: <Coins className="w-6 h-6" />,
      colorClasses: {
        badge: 'bg-amber-50 text-amber-800 border-amber-200',
        iconBg: 'bg-amber-100 text-amber-700',
        hoverBorder: 'hover:border-amber-400',
      },
      targetPage: 'programs',
    },
    {
      id: 6,
      title: 'Community Impact',
      subtitle: 'Outreach, Camps & Volunteerism',
      description: 'Medical camps, awareness campaigns, outreach and social initiatives conducted alongside licensed health partners.',
      bulletPoints: ['Free screening & vitals clinics', 'Eye health & reading spectacles', 'Grassroots health literacy'],
      icon: <HeartHandshake className="w-6 h-6" />,
      colorClasses: {
        badge: 'bg-rose-50 text-rose-800 border-rose-200',
        iconBg: 'bg-rose-100 text-rose-700',
        hoverBorder: 'hover:border-rose-400',
      },
      targetPage: 'community',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800">
            <span>Our Foundational Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Six Pillars Uniting Learning, Wellness & Impact
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Wisdom Therapy bridges personal wellness, technological fluency, professional mastery, and grassroots community service into a unified ecosystem.
          </p>
        </div>

        {/* 6 Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className={`p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm transition-all duration-200 flex flex-col justify-between ${pillar.colorClasses.hoverBorder} hover:shadow-md group`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${pillar.colorClasses.iconBg} group-hover:scale-105 transition-transform`}>
                    {pillar.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-400">
                    Pillar 0{pillar.id}
                  </span>
                </div>

                <div className="space-y-1 mb-3">
                  <span className={`inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${pillar.colorClasses.badge}`}>
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {pillar.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100 mb-6">
                  {pillar.bulletPoints.map((pt, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setCurrentPage(pillar.targetPage)}
                className="inline-flex items-center space-x-2 text-xs font-bold text-teal-700 group-hover:text-teal-800 transition-colors pt-3 border-t border-slate-100"
              >
                <span>Explore {pillar.title}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
