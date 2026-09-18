import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Program, ProgramCategory } from '../types';
import {
  Clock,
  Laptop,
  ArrowRight,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Calendar,
} from 'lucide-react';

export const FeaturedProgramsSection: React.FC = () => {
  const { programs, setSelectedProgram, openRegistrationModal, setCurrentPage } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'AI & Technology',
    'Mental Wellness',
    'HR & Workplace',
    'Leadership',
    'Physical Health',
    'Financial Awareness',
  ];

  const filteredPrograms =
    selectedCategory === 'All'
      ? programs
      : programs.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>Professional Curriculum</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Learn. Grow. Transform.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Explore evidence-backed masterclasses and practical cohort programs built to elevate your mental clarity, leadership aptitude, and future-readiness.
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('programs')}
            className="self-start lg:self-auto px-5 py-2.5 rounded-xl border border-slate-300 hover:border-teal-600 text-slate-700 hover:text-teal-700 font-bold text-xs transition-colors flex items-center space-x-2"
          >
            <span>View Full Program Directory ({programs.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 text-xs scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredPrograms.slice(0, 6).map((prog) => (
            <div
              key={prog.id}
              className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Image & Badge */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/95 backdrop-blur-xs text-slate-800 shadow-sm">
                    {prog.category}
                  </span>
                  {prog.featured && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-teal-600 text-white shadow-sm">
                      Featured
                    </span>
                  )}
                </div>

                {/* Body Content */}
                <div className="p-6">
                  {/* Meta Specs */}
                  <div className="flex items-center space-x-4 text-xs text-slate-500 mb-2.5 font-medium">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-teal-600" />
                      <span>{prog.duration}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Laptop className="w-3.5 h-3.5 text-teal-600" />
                      <span>{prog.mode}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug mb-2">
                    {prog.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {prog.description}
                  </p>

                  {/* Learning Highlights preview */}
                  <div className="pt-3 border-t border-slate-100 space-y-1.5 mb-4">
                    <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                      Key Takeaways:
                    </p>
                    {prog.learningOutcomes.slice(0, 2).map((outcome, idx) => (
                      <div key={idx} className="flex items-start space-x-1.5 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{outcome}</span>
                      </div>
                    ))}
                  </div>

                  {/* Next Date */}
                  {prog.upcomingDates[0] && (
                    <div className="flex items-center space-x-1.5 text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg">
                      <Calendar className="w-3.5 h-3.5 text-teal-600" />
                      <span>Upcoming Cohort: <strong>{prog.upcomingDates[0]}</strong></span>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedProgram(prog);
                    setCurrentPage('programs');
                  }}
                  className="flex-1 py-2.5 px-3 rounded-xl border border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-800 text-xs font-bold text-center transition-colors"
                >
                  View Program
                </button>
                <button
                  onClick={() =>
                    openRegistrationModal({
                      type: 'program',
                      id: prog.id,
                      name: prog.title,
                    })
                  }
                  className="flex-1 py-2.5 px-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold text-center shadow-xs transition-colors"
                >
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
