import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Users,
  GraduationCap,
  HeartPulse,
  Sparkles,
  HandHeart,
  TrendingUp,
} from 'lucide-react';

export const ImpactStrip: React.FC = () => {
  const { impactMetrics, setCurrentPage } = useApp();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-6 h-6" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'HandHeart':
        return <HandHeart className="w-6 h-6" />;
      default:
        return <TrendingUp className="w-6 h-6" />;
    }
  };

  return (
    <section className="bg-white border-b border-slate-200 py-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Measurable Progress
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Transforming Awareness into Tangible Social Impact
            </h2>
          </div>
          <button
            onClick={() => setCurrentPage('community')}
            className="text-xs font-bold text-teal-700 hover:text-teal-800 flex items-center space-x-1"
          >
            <span>View Full Community Impact Report</span>
            <span>&rarr;</span>
          </button>
        </div>

        {/* 5-Column statistical cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {impactMetrics.map((metric) => (
            <div
              key={metric.id}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-300 hover:shadow-md transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-teal-500/10 text-teal-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                {getIcon(metric.icon)}
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-heading">
                {metric.value}
              </div>
              <h3 className="text-xs font-bold text-slate-800 mt-1 uppercase tracking-wide">
                {metric.label}
              </h3>
              <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
