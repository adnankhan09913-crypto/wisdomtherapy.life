import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Program, ProgramCategory } from '../types';
import {
  Search,
  Clock,
  Laptop,
  User,
  Calendar,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  Filter,
  X,
  Users,
} from 'lucide-react';

export const ProgramsPage: React.FC = () => {
  const { programs, selectedProgram, setSelectedProgram, openRegistrationModal } = useApp();

  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeMode, setActiveMode] = useState<string>('All');

  const categories: (string | ProgramCategory)[] = [
    'All',
    'Mental Wellness',
    'Physical Health',
    'AI & Technology',
    'Leadership',
    'HR & Workplace',
    'Financial Awareness',
    'Safety',
    'Community',
  ];

  const filteredPrograms = programs.filter((p) => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch =
      search.trim() === '' ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.learningOutcomes.some((o) => o.toLowerCase().includes(search.toLowerCase()));
    const matchesMode = activeMode === 'All' || p.mode.includes(activeMode);
    return matchesCategory && matchesSearch && matchesMode;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title & Intro */}
        <div className="mb-10 text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800">
            Comprehensive Programs Directory
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Learn Better. Work Wiser.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Multidisciplinary cohorts and practical masterclasses bridging AI tools, emotional resilience, occupational ergonomics, and leadership communication.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search programs by keyword, topic, or learning outcome..."
                className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Mode Selector */}
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">Mode:</span>
              <select
                value={activeMode}
                onChange={(e) => setActiveMode(e.target.value)}
                className="px-3 py-2 text-xs border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 font-semibold text-slate-700"
              >
                <option value="All">All Formats</option>
                <option value="Virtual">Virtual Live</option>
                <option value="In-Person">In-Person</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 text-xs scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-teal-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6">
          <span>
            Showing <strong>{filteredPrograms.length}</strong> available programs
          </span>
          {(activeCategory !== 'All' || search || activeMode !== 'All') && (
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearch('');
                setActiveMode('All');
              }}
              className="text-teal-700 hover:underline font-semibold"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-white text-slate-800 shadow-xs">
                    {prog.category}
                  </span>
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-900/80 text-white backdrop-blur-xs">
                    {prog.mode}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-3 text-xs text-slate-500 mb-2">
                    <span className="flex items-center space-x-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-teal-600" />
                      <span>{prog.duration}</span>
                    </span>
                    <span>•</span>
                    <span className="line-clamp-1">{prog.audience}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug mb-2">
                    {prog.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {prog.description}
                  </p>

                  {/* Learning Outcomes */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                      Target Competencies:
                    </p>
                    {prog.learningOutcomes.slice(0, 3).map((outcome, idx) => (
                      <div key={idx} className="flex items-start space-x-1.5 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{outcome}</span>
                      </div>
                    ))}
                  </div>

                  {/* Trainer & Upcoming */}
                  <div className="bg-slate-50 p-3 rounded-xl space-y-1 text-xs text-slate-600">
                    <div className="flex items-center space-x-1.5 font-medium text-slate-800">
                      <User className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span className="line-clamp-1">{prog.trainer}</span>
                    </div>
                    {prog.upcomingDates[0] && (
                      <div className="flex items-center space-x-1.5 text-slate-500 text-[11px]">
                        <Calendar className="w-3 h-3 text-teal-600 shrink-0" />
                        <span>Next Cohort: {prog.upcomingDates[0]}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  onClick={() => setSelectedProgram(prog)}
                  className="flex-1 py-2.5 px-3 rounded-xl border border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-800 text-xs font-bold transition-colors"
                >
                  Full Syllabus
                </button>
                <button
                  onClick={() =>
                    openRegistrationModal({
                      type: 'program',
                      id: prog.id,
                      name: prog.title,
                    })
                  }
                  className="flex-1 py-2.5 px-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold shadow-xs transition-colors"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Program Modal / Drawer if one is selected */}
        {selectedProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[85vh] flex flex-col">
              <div className="bg-slate-900 text-white p-6 flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                    {selectedProgram.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2">{selectedProgram.title}</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    {selectedProgram.duration} • {selectedProgram.mode}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-5">
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Program Overview
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedProgram.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Learning Outcomes & Practical Skills
                  </h4>
                  <div className="space-y-2">
                    {selectedProgram.learningOutcomes.map((item, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <div>
                    <span className="text-slate-500 font-semibold block">Intended Audience</span>
                    <span className="text-slate-800 font-bold">{selectedProgram.audience}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 font-semibold block">Lead Trainer</span>
                    <span className="text-slate-800 font-bold">{selectedProgram.trainer}</span>
                    <span className="block text-slate-500 text-[11px]">{selectedProgram.trainerRole}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Upcoming Cohort Dates
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProgram.upcomingDates.map((d, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg bg-teal-50 border border-teal-200 text-teal-900 text-xs font-semibold"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end space-x-3">
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const p = selectedProgram;
                    setSelectedProgram(null);
                    openRegistrationModal({
                      type: 'program',
                      id: p.id,
                      name: p.title,
                    });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold shadow-md flex items-center space-x-1.5"
                >
                  <span>Register for this Program</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
