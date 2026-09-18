import React, { useState } from 'react';
import { INITIAL_TESTIMONIALS } from '../data/mockData';
import { Quote, Star, UserCheck, ShieldCheck } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Corporate Client', 'Participant', 'HR Leader', 'Medical Partner', 'Expert'];

  const filtered =
    filter === 'All'
      ? INITIAL_TESTIMONIALS
      : INITIAL_TESTIMONIALS.filter((t) => t.category === filter);

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
            <span>Community Feedback & Partnerships</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Voices from Our Learning Ecosystem
          </h2>
          <p className="text-sm text-slate-500">
            Sample testimonials and illustrative reflections from corporate leaders, participants, medical collaborators, and faculty.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-4 mb-8 text-xs scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full font-bold whitespace-nowrap transition-all ${
                filter === cat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-amber-500">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-white text-slate-600 border border-slate-200">
                    {item.category}
                  </span>
                </div>

                <Quote className="w-6 h-6 text-teal-600/40 mb-2" />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center space-x-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-300"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{item.name}</h4>
                  <p className="text-[11px] text-slate-500">{item.title}</p>
                  <p className="text-[10px] text-teal-700 font-semibold">{item.organization}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sample notice indicator */}
        <p className="text-center text-[11px] text-slate-400 mt-8">
          *Note: All organizational names and person endorsements in this prototype are illustrative sample placeholders adhering to privacy standards.
        </p>
      </div>
    </section>
  );
};
