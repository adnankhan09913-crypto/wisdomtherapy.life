import React from 'react';
import { useApp } from '../context/AppContext';
import {
  UserCheck,
  Star,
  Sparkles,
  ArrowRight,
  Award,
  Globe,
} from 'lucide-react';

export const ExpertVoicesSection: React.FC = () => {
  const { experts, setSelectedExpert, setCurrentPage } = useApp();

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>Multidisciplinary Faculty</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Grounded in Science, Guided by Experience
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Our curriculum and community health initiatives are designed alongside doctors, organizational psychologists, AI technologists, and executive coaches.
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('experts')}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl border border-slate-300 hover:border-teal-600 text-slate-800 hover:text-teal-700 font-bold text-xs transition-colors flex items-center space-x-2"
          >
            <span>Explore All Faculty ({experts.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Expert Cards Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experts.slice(0, 4).map((expert) => (
            <div
              key={expert.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Photo & Category */}
                <div className="relative mb-4">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-slate-200 group-hover:border-teal-500 transition-colors">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-900 text-white shadow-xs whitespace-nowrap">
                    {expert.category}
                  </span>
                </div>

                {/* Name & Title */}
                <div className="text-center mb-3">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {expert.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{expert.designation}</p>
                </div>

                {/* Short Bio */}
                <p className="text-xs text-slate-600 text-center line-clamp-3 leading-relaxed mb-4">
                  {expert.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                  {expert.expertise.slice(0, 2).map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Profile Action */}
              <div className="pt-3 border-t border-slate-100 text-center">
                <button
                  onClick={() => {
                    setSelectedExpert(expert);
                    setCurrentPage('experts');
                  }}
                  className="w-full py-2 rounded-xl text-xs font-bold text-teal-700 hover:bg-teal-50 border border-teal-200 transition-colors"
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
