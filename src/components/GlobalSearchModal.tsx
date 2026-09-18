import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { Search, X, ArrowRight, BookOpen, HeartPulse } from 'lucide-react';

export const GlobalSearchModal: React.FC = () => {
  const {
    isSearchModalOpen,
    closeSearchModal,
    programs,
    healthCamps,
    setCurrentPage,
    setSelectedProgram,
    setSelectedCamp,
  } = useApp();

  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'programs' | 'camps'>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchModalOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isSearchModalOpen]);

  // Filter items based on query
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return {
        programs: programs.slice(0, 4),
        camps: healthCamps.slice(0, 3),
      };
    }

    return {
      programs: programs.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      ),
      camps: healthCamps.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.location.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q)
      ),
    };
  }, [query, programs, healthCamps]);

  if (!isSearchModalOpen) return null;

  const totalResults = results.programs.length + results.camps.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-20 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]">
        {/* Search input header */}
        <div className="p-4 border-b border-slate-200 flex items-center space-x-3 bg-slate-50">
          <Search className="w-5 h-5 text-teal-600 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search programs, masterclasses, health camps..."
            className="w-full bg-transparent text-slate-800 text-sm sm:text-base focus:outline-none placeholder:text-slate-400 font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-md text-xs font-semibold"
            >
              Clear
            </button>
          )}
          <button
            onClick={closeSearchModal}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="px-4 py-2.5 border-b border-slate-100 flex items-center space-x-2 text-xs overflow-x-auto bg-white">
          <span className="text-slate-400 font-medium whitespace-nowrap">Filter:</span>
          {(['all', 'programs', 'camps'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-full font-semibold capitalize whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab === 'all' ? 'All Results' : tab === 'programs' ? 'Programs' : 'Health Camps'}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto space-y-6 divide-y divide-slate-100 flex-1">
          {totalResults === 0 ? (
            <div className="py-12 text-center text-slate-500 space-y-2">
              <Search className="w-8 h-8 mx-auto text-slate-300" />
              <p className="text-sm font-semibold">No results found for "{query}"</p>
              <p className="text-xs text-slate-400">
                Try searching for "Wellness", "AI", "Leadership", "Cardiology", or "Ergonomics".
              </p>
            </div>
          ) : (
            <>
              {/* Programs */}
              {(activeTab === 'all' || activeTab === 'programs') && results.programs.length > 0 && (
                <div className="pt-4 first:pt-0">
                  <div className="flex items-center space-x-2 text-xs font-bold text-teal-800 uppercase tracking-wider mb-2">
                    <BookOpen className="w-3.5 h-3.5 text-teal-600" />
                    <span>Programs & Masterclasses ({results.programs.length})</span>
                  </div>
                  <div className="space-y-2">
                    {results.programs.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => {
                          setSelectedProgram(p);
                          setCurrentPage('programs');
                          closeSearchModal();
                        }}
                        className="p-3 rounded-xl border border-slate-100 hover:border-teal-300 hover:bg-teal-50/40 cursor-pointer transition-all flex items-start justify-between group"
                      >
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 font-semibold">
                              {p.category}
                            </span>
                            <span className="text-xs text-slate-500">{p.duration}</span>
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 mt-1">
                            {p.title}
                          </h4>
                          <p className="text-xs text-slate-600 line-clamp-1 mt-0.5">{p.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600 shrink-0 ml-2 mt-2 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Health Camps */}
              {(activeTab === 'all' || activeTab === 'camps') && results.camps.length > 0 && (
                <div className="pt-4 first:pt-0">
                  <div className="flex items-center space-x-2 text-xs font-bold text-rose-800 uppercase tracking-wider mb-2">
                    <HeartPulse className="w-3.5 h-3.5 text-rose-600" />
                    <span>Community Health Camps ({results.camps.length})</span>
                  </div>
                  <div className="space-y-2">
                    {results.camps.map((c) => (
                      <div
                        key={c.id}
                        onClick={() => {
                          setSelectedCamp(c);
                          setCurrentPage('health-camps');
                          closeSearchModal();
                        }}
                        className="p-3 rounded-xl border border-slate-100 hover:border-rose-300 hover:bg-rose-50/40 cursor-pointer transition-all flex items-start justify-between group"
                      >
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 font-semibold">
                              {c.status}
                            </span>
                            <span className="text-xs text-slate-500">{c.date}</span>
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-rose-700 mt-1">
                            {c.title}
                          </h4>
                          <p className="text-xs text-slate-600 line-clamp-1 mt-0.5">{c.location}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-rose-600 shrink-0 ml-2 mt-2 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-center text-[11px] text-slate-500 flex items-center justify-between">
          <span>Wisdom Therapy Search • Press ESC to close</span>
          <span className="font-semibold text-teal-700">Explore Educational Programs & Health Camps</span>
        </div>
      </div>
    </div>
  );
};
