import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Resource } from '../types';
import {
  FileText,
  Video,
  Headphones,
  Search,
  BookOpen,
  ArrowRight,
  Clock,
  Sparkles,
  Download,
  X,
  Share2,
  CheckCircle2,
} from 'lucide-react';

export const ResourcesPage: React.FC = () => {
  const { resources, selectedResource, setSelectedResource } = useApp();

  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const types = ['All', 'Article', 'Guide', 'Video', 'Podcast'];
  const categories = [
    'All',
    'AI & Technology',
    'Mental Wellness',
    'HR & Leadership',
    'Financial Awareness',
    'Preventive Health',
  ];

  const filteredResources = resources.filter((r) => {
    const matchesType = selectedType === 'All' || r.type === selectedType;
    const matchesCategory = selectedCategory === 'All' || r.category === selectedCategory;
    const matchesSearch =
      search.trim() === '' ||
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.description.toLowerCase().includes(search.toLowerCase()) ||
      r.author.toLowerCase().includes(search.toLowerCase());
    return matchesType && matchesCategory && matchesSearch;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Video':
        return <Video className="w-4 h-4 text-rose-500" />;
      case 'Podcast':
        return <Headphones className="w-4 h-4 text-purple-500" />;
      case 'Guide':
        return <Download className="w-4 h-4 text-blue-500" />;
      default:
        return <FileText className="w-4 h-4 text-teal-600" />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800">
            Expert Knowledge Hub
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Curated Insights, Field Guides & Media
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Access free educational frameworks, evidence summaries, video lectures, and operational toolkits to empower your personal wellness and organizational resilience.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search publications, podcasts, guides, author..."
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

            {/* Type selector */}
            <div className="flex items-center space-x-1.5 overflow-x-auto pb-1">
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedType(t)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                    selectedType === t
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 text-xs scrollbar-none">
            <span className="text-slate-400 font-semibold whitespace-nowrap mr-1">Topics:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-teal-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="h-44 overflow-hidden bg-slate-100 relative">
                  <img
                    src={res.image}
                    alt={res.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 flex items-center space-x-1 px-2.5 py-1 rounded-md text-[10px] font-bold bg-white/95 text-slate-800 shadow-xs">
                    {getTypeIcon(res.type)}
                    <span>{res.type}</span>
                  </div>
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-900/80 text-white backdrop-blur-xs">
                    {res.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-3 text-xs text-slate-500 mb-2">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-teal-600" />
                      <span>{res.readTime}</span>
                    </span>
                    <span>•</span>
                    <span className="line-clamp-1">By {res.author}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-2 leading-snug">
                    {res.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {res.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedResource(res)}
                  className="w-full py-2.5 rounded-xl border border-slate-200 hover:border-teal-500 hover:bg-teal-50/50 text-slate-800 hover:text-teal-800 text-xs font-bold transition-all flex items-center justify-center space-x-1.5"
                >
                  <span>Read / Explore Resource</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Resource Reader Modal */}
        {selectedResource && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[85vh] flex flex-col">
              <div className="bg-slate-900 text-white p-6 flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                      {selectedResource.type}
                    </span>
                    <span className="text-xs text-slate-400">{selectedResource.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mt-1 leading-snug">{selectedResource.title}</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Author: {selectedResource.author} • {selectedResource.readTime}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedResource(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-4">
                <div className="h-56 rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src={selectedResource.image}
                    alt={selectedResource.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Executive Summary & Takeaways
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedResource.description}
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-2">
                  <p className="font-bold text-slate-900">Practical Application Checklist:</p>
                  <ul className="space-y-1.5 list-disc pl-4 text-slate-600">
                    <li>Evaluate existing baseline metrics within your team or personal routine.</li>
                    <li>Implement one micro-habit change for 14 consecutive days before scaling.</li>
                    <li>Conduct a retrospective audit to ensure psychological safety and cognitive clarity.</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center">
                <span className="text-[11px] text-slate-400">Wisdom Therapy Open Knowledge Charter</span>
                <button
                  onClick={() => setSelectedResource(null)}
                  className="px-5 py-2 rounded-xl bg-teal-600 text-white font-bold text-xs shadow-xs"
                >
                  Close Reader
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
