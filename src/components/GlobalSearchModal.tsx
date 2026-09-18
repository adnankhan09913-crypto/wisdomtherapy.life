import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import {
  Search,
  X,
  BookOpen,
  Calendar,
  UserCheck,
  FileText,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export const GlobalSearchModal: React.FC = () => {
  const {
    isSearchModalOpen,
    closeSearchModal,
    programs,
    events,
    experts,
    resources,
    setCurrentPage,
    setSelectedProgram,
    setSelectedEvent,
    setSelectedExpert,
    setSelectedResource,
  } = useApp();

  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'programs' | 'events' | 'experts' | 'resources'>('all');
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
        programs: programs.slice(0, 3),
        events: events.slice(0, 2),
        experts: experts.slice(0, 3),
        resources: resources.slice(0, 3),
      };
    }

    return {
      programs: programs.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      ),
      events: events.filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.speaker.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q)
      ),
      experts: experts.filter(
        (ex) =>
          ex.name.toLowerCase().includes(q) ||
          ex.category.toLowerCase().includes(q) ||
          ex.designation.toLowerCase().includes(q) ||
          ex.expertise.some((s) => s.toLowerCase().includes(q))
      ),
      resources: resources.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.category.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q)
      ),
    };
  }, [query, programs, events, experts, resources]);

  if (!isSearchModalOpen) return null;

  const totalResults =
    results.programs.length + results.events.length + results.experts.length + results.resources.length;

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
            placeholder="Search programs, upcoming talks, experts, articles, guides..."
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
          {(['all', 'programs', 'events', 'experts', 'resources'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-full font-semibold capitalize whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto space-y-6 divide-y divide-slate-100 flex-1">
          {totalResults === 0 ? (
            <div className="py-12 text-center text-slate-500 space-y-2">
              <Search className="w-8 h-8 mx-auto text-slate-300" />
              <p className="text-sm font-semibold">No direct results found for &quot;{query}&quot;</p>
              <p className="text-xs text-slate-400">
                Try searching for keywords like &quot;AI&quot;, &quot;Wellness&quot;, &quot;Conflict&quot;, or &quot;Health Camp&quot;.
              </p>
            </div>
          ) : (
            <>
              {/* Programs */}
              {(activeTab === 'all' || activeTab === 'programs') && results.programs.length > 0 && (
                <div className="pt-2 first:pt-0">
                  <div className="flex items-center space-x-2 text-xs font-bold text-teal-800 uppercase tracking-wider mb-2">
                    <BookOpen className="w-3.5 h-3.5 text-teal-600" />
                    <span>Programs ({results.programs.length})</span>
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
                            <span className="text-xs text-slate-500 font-medium">{p.duration}</span>
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

              {/* Events */}
              {(activeTab === 'all' || activeTab === 'events') && results.events.length > 0 && (
                <div className="pt-4 first:pt-0">
                  <div className="flex items-center space-x-2 text-xs font-bold text-indigo-800 uppercase tracking-wider mb-2">
                    <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Events & Talks ({results.events.length})</span>
                  </div>
                  <div className="space-y-2">
                    {results.events.map((ev) => (
                      <div
                        key={ev.id}
                        onClick={() => {
                          setSelectedEvent(ev);
                          setCurrentPage('events');
                          closeSearchModal();
                        }}
                        className="p-3 rounded-xl border border-slate-100 hover:border-indigo-300 hover:bg-indigo-50/40 cursor-pointer transition-all flex items-start justify-between group"
                      >
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 font-semibold">
                              {ev.date}
                            </span>
                            <span className="text-xs text-slate-500">{ev.mode}</span>
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-700 mt-1">
                            {ev.title}
                          </h4>
                          <p className="text-xs text-slate-600 mt-0.5">Speaker: {ev.speaker}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 shrink-0 ml-2 mt-2" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Experts */}
              {(activeTab === 'all' || activeTab === 'experts') && results.experts.length > 0 && (
                <div className="pt-4 first:pt-0">
                  <div className="flex items-center space-x-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
                    <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Expert Faculty ({results.experts.length})</span>
                  </div>
                  <div className="space-y-2">
                    {results.experts.map((ex) => (
                      <div
                        key={ex.id}
                        onClick={() => {
                          setSelectedExpert(ex);
                          setCurrentPage('experts');
                          closeSearchModal();
                        }}
                        className="p-3 rounded-xl border border-slate-100 hover:border-emerald-300 hover:bg-emerald-50/40 cursor-pointer transition-all flex items-center justify-between group"
                      >
                        <div className="flex items-center space-x-3">
                          <img
                            src={ex.image}
                            alt={ex.name}
                            className="w-10 h-10 rounded-full object-cover border border-slate-200"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700">
                              {ex.name}
                            </h4>
                            <p className="text-xs text-slate-600">{ex.designation}</p>
                          </div>
                        </div>
                        <span className="text-[11px] px-2 py-1 rounded bg-slate-100 text-slate-700 font-medium">
                          {ex.category}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Resources */}
              {(activeTab === 'all' || activeTab === 'resources') && results.resources.length > 0 && (
                <div className="pt-4 first:pt-0">
                  <div className="flex items-center space-x-2 text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">
                    <FileText className="w-3.5 h-3.5 text-amber-600" />
                    <span>Knowledge Hub ({results.resources.length})</span>
                  </div>
                  <div className="space-y-2">
                    {results.resources.map((r) => (
                      <div
                        key={r.id}
                        onClick={() => {
                          setSelectedResource(r);
                          setCurrentPage('resources');
                          closeSearchModal();
                        }}
                        className="p-3 rounded-xl border border-slate-100 hover:border-amber-300 hover:bg-amber-50/40 cursor-pointer transition-all flex items-start justify-between group"
                      >
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-semibold">
                              {r.type}
                            </span>
                            <span className="text-xs text-slate-500">{r.readTime}</span>
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-700 mt-1">
                            {r.title}
                          </h4>
                          <p className="text-xs text-slate-600 line-clamp-1 mt-0.5">{r.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 shrink-0 ml-2 mt-2" />
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
          <span className="font-semibold text-teal-700">Explore 100+ Topics & Initiatives</span>
        </div>
      </div>
    </div>
  );
};
