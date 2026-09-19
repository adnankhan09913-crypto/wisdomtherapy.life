import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { COMMUNITY_IMPACT_PROGRAMS, CommunityImpactItem } from '../data/communityImpactData';
import { ShareModal } from './ShareModal';
import { BackupModule } from './BackupModule';
import {
  HeartPulse,
  GraduationCap,
  Sparkles,
  Users,
  Handshake,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  MapPin,
  Building,
  Search,
  Share2,
  Filter,
  Briefcase,
  Layers,
  HeartHandshake,
  Check,
  Mail,
  ChevronRight,
  ShieldCheck,
  Award,
  Globe2,
  ExternalLink,
  Target,
  Sparkle,
} from 'lucide-react';

export const CommunityImpactPage: React.FC = () => {
  const { impactMetrics, impactStories, openPartnerModal, openRegistrationModal, setCurrentPage, showToast } = useApp();

  // Search & Filter state for the 40+ initiatives
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedItemForDetails, setSelectedItemForDetails] = useState<CommunityImpactItem | null>(null);

  // Share Modal State
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [shareData, setShareData] = useState<{ title: string; category: string }>({
    title: 'Wisdom Therapy Community Impact & CSR Programs',
    category: 'CSR & Employee Engagement',
  });

  const categories = [
    'All',
    'Healthcare & Clinical Drives',
    'Education, Youth & Scholarships',
    'Technology, Vocational & Livelihood',
    'Environment, Water & Climate',
    'Civic, Safety & Disaster Relief',
    'Social Welfare, Women & Senior Care',
  ];

  const filteredPrograms = useMemo(() => {
    return COMMUNITY_IMPACT_PROGRAMS.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.csrRelevance.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.beneficiaryDemographic.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenShare = (item: CommunityImpactItem) => {
    setShareData({
      title: item.title,
      category: item.category,
    });
    setShareModalOpen(true);
  };

  const handleSponsorInitiative = (item: CommunityImpactItem) => {
    openPartnerModal(`CSR Partner: ${item.title}`);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CSR & Employee Engagement Ecosystem • Pakistani Market</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading text-white">
            Community Impact & Corporate Social Responsibility
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Wisdom Therapy collaborates with premier Pakistani corporations, financial institutions, and multinational brands to execute 40+ high-yield CSR and hands-on Employee Engagement drives across Sindh, Punjab, Balochistan, and KPK.
          </p>

          <div className="pt-3 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => openPartnerModal('Corporate CSR & Engagement')}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-md transition-all"
            >
              <Briefcase className="w-4 h-4" />
              <span>Partner as CSR Sponsor</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('initiatives-catalog');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-200 font-bold text-xs bg-slate-900/60 transition-all"
            >
              <span>Explore 40+ Initiatives</span>
            </button>
            <button
              onClick={() => {
                setShareData({
                  title: 'Wisdom Therapy Community Impact Portfolio',
                  category: 'CSR & Employee Engagement',
                });
                setShareModalOpen(true);
              }}
              className="inline-flex items-center space-x-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 font-bold text-xs border border-slate-700 transition-all"
            >
              <Share2 className="w-4 h-4" />
              <span>Share Ecosystem</span>
            </button>
          </div>

          <p className="text-xs text-slate-400 pt-2 flex items-center justify-center space-x-1.5">
            <Mail className="w-3.5 h-3.5 text-teal-400" />
            <span>Direct CSR & Sponsorship Desk: </span>
            <a href="mailto:contact@wisdomtherapy.life" className="text-teal-300 font-bold hover:underline">
              contact@wisdomtherapy.life
            </a>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Live Statistical Dashboard Strip */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                Verified Quantitative Indicators
              </span>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Cumulative Social Impact Metrics
              </h2>
            </div>
            <div className="flex items-center space-x-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-slate-500">
                Synchronized with Field Operations & CSR Audits
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {impactMetrics.map((m) => (
              <div key={m.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                  {m.value}
                </div>
                <div className="text-xs font-bold text-teal-800 uppercase tracking-wide mt-1">
                  {m.label}
                </div>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CSR & LinkedIn Employee Engagement Strategic Overview */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-teal-950 text-white border border-blue-900/60 shadow-xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
                Pakistan Corporate Market Insights
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                Engineered for Corporate CSR, ESG & LinkedIn Visibility
              </h3>
            </div>
            <div className="flex items-center space-x-2 text-xs text-slate-300 bg-white/10 px-3.5 py-1.5 rounded-full shrink-0">
              <Award className="w-4 h-4 text-teal-300" />
              <span>SECP CSR Guidelines & Shariah Zakat Compliant</span>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
            In Pakistan’s evolving corporate landscape, employee engagement has shifted from passive office events to purpose-driven, camera-ready field volunteerism. Leading banks, FMCGs, telcos, and software houses partner with Wisdom Therapy to turn CSR allocations into high-impact employee experiences that earn genuine praise on LinkedIn, satisfy ESG mandates, and deliver measurable relief to vulnerable communities.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="text-teal-400 font-bold text-sm">Hands-on Volunteerism</div>
              <p className="text-xs text-slate-300">
                Staff participate in patient registration, eye testing triage, ration assembly, and tree planting.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="text-teal-400 font-bold text-sm">Professional PR & Media</div>
              <p className="text-xs text-slate-300">
                High-definition photography, executive soundbites, and LinkedIn-ready post templates delivered within 24 hours.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="text-teal-400 font-bold text-sm">Rigorous CSR Auditing</div>
              <p className="text-xs text-slate-300">
                Transparent beneficiary logs, GPS coordinates, and third-party verified impact metrics for corporate annual reports.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="text-teal-400 font-bold text-sm">Zero Operational Burden</div>
              <p className="text-xs text-slate-300">
                Wisdom Therapy manages site permissions, physician teams, equipment, refreshments, and volunteer safety end-to-end.
              </p>
            </div>
          </div>
        </div>

        {/* 40+ Initiatives Catalog Section */}
        <div id="initiatives-catalog" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-teal-100 text-teal-800">
                  {filteredPrograms.length} Initiatives Active
                </span>
                <span className="text-xs text-slate-500 uppercase font-semibold">
                  Catalog of 40 Corporate & Public Drives
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mt-1">
                Community Impact & CSR Action Tracks
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                Filter by thematic sector or search for specific programs to explore detailed employee engagement activities, CSR relevance, and deliverables.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search camps, education, water..."
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800 shadow-xs"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const count =
                cat === 'All'
                  ? COMMUNITY_IMPACT_PROGRAMS.length
                  : COMMUNITY_IMPACT_PROGRAMS.filter((p) => p.category === cat).length;
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                    isSelected
                      ? 'bg-teal-600 text-white shadow-sm'
                      : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                      isSelected ? 'bg-teal-700 text-teal-100' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Program Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-xl hover:border-teal-300 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top Badges */}
                  <div className="flex items-start justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-teal-50 text-teal-700 border border-teal-200">
                      {item.categoryTag}
                    </span>
                    <button
                      onClick={() => handleOpenShare(item)}
                      title="Share this CSR drive"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-teal-600 hover:bg-teal-50 transition-colors"
                      aria-label="Share initiative"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Title & Short Description */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                      {item.shortDesc}
                    </p>
                  </div>

                  {/* CSR Relevance Highlight */}
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex items-center space-x-1.5 text-[11px] font-bold text-slate-900">
                      <Briefcase className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>Pakistani CSR Focus:</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-2">
                      {item.csrRelevance}
                    </p>
                  </div>

                  {/* Employee Engagement Snippet */}
                  <div className="space-y-1.5">
                    <div className="flex items-center space-x-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      <Users className="w-3.5 h-3.5 text-teal-600" />
                      <span>Employee Volunteer Activities</span>
                    </div>
                    <ul className="space-y-1 text-[11px] text-slate-600">
                      {item.employeeEngagementActivities.slice(0, 2).map((act, i) => (
                        <li key={i} className="flex items-start space-x-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-5 border-t border-slate-100 flex items-center justify-between gap-2 mt-4">
                  <button
                    onClick={() => setSelectedItemForDetails(item)}
                    className="text-xs font-bold text-teal-700 hover:text-teal-800 flex items-center space-x-1"
                  >
                    <span>View Full Track</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleSponsorInitiative(item)}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-teal-600 text-white font-bold text-xs shadow-xs transition-colors"
                  >
                    Sponsor / Plan Drive
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="p-12 text-center rounded-3xl bg-white border border-slate-200 space-y-3">
              <Search className="w-8 h-8 text-slate-400 mx-auto" />
              <h4 className="text-base font-bold text-slate-900">No initiatives matched your search</h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try searching for different keywords like "blood", "education", "camp", or clear your category filter.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-xl bg-teal-600 text-white font-bold text-xs"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Detailed Modal for Selected Initiative */}
        {selectedItemForDetails && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
            role="dialog"
            aria-modal="true"
          >
            <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
              {/* Modal Header */}
              <div className="p-6 bg-slate-900 text-white flex items-start justify-between gap-4 border-b border-slate-800">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30 uppercase">
                    {selectedItemForDetails.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mt-1">
                    {selectedItemForDetails.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Official CSR & Corporate Engagement Blueprint
                  </p>
                </div>
                <button
                  onClick={() => setSelectedItemForDetails(null)}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6 text-slate-800">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Overview & Operational Scope
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedItemForDetails.fullDetails}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200/80 space-y-1.5">
                  <div className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-teal-900">
                    <Briefcase className="w-4 h-4 text-teal-700" />
                    <span>Pakistani CSR & ESG Alignment</span>
                  </div>
                  <p className="text-xs text-teal-900 leading-relaxed">
                    {selectedItemForDetails.csrRelevance}
                  </p>
                </div>

                {/* Employee Volunteer Engagement Details */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center space-x-1.5">
                    <Users className="w-4 h-4 text-teal-600" />
                    <span>How Corporate Employees Participate (Hands-on Volunteerism)</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedItemForDetails.employeeEngagementActivities.map((act, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-2 text-xs text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables & Beneficiaries */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Measurable Deliverables
                    </h5>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {selectedItemForDetails.keyDeliverables.map((del, i) => (
                        <li key={i} className="flex items-start space-x-1.5">
                          <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Beneficiary Demographic
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {selectedItemForDetails.beneficiaryDemographic}
                    </p>

                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 pt-2">
                      Local Partners
                    </h5>
                    <p className="text-xs text-teal-800 font-semibold">
                      {selectedItemForDetails.partners.join(' • ')}
                    </p>
                  </div>
                </div>

                {/* Email Dispatch Info */}
                <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-[11px] text-slate-600 flex items-center justify-between">
                  <span className="flex items-center space-x-1.5">
                    <Mail className="w-3.5 h-3.5 text-teal-600" />
                    <span>Inquiries automatically dispatch to: <strong>contact@wisdomtherapy.life</strong></span>
                  </span>
                  <span className="font-semibold text-teal-700">Audit Guaranteed</span>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => {
                    handleOpenShare(selectedItemForDetails);
                  }}
                  className="px-4 py-2 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 flex items-center space-x-1.5"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share on LinkedIn</span>
                </button>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setSelectedItemForDetails(null)}
                    className="px-4 py-2 rounded-xl text-xs text-slate-600 font-bold hover:text-slate-900"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const item = selectedItemForDetails;
                      setSelectedItemForDetails(null);
                      handleSponsorInitiative(item);
                    }}
                    className="px-5 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-sm"
                  >
                    Sponsor this Initiative
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Existing Ground Reality Stories Cards */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                Ground Reality
              </span>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Featured Impact Deployments
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Photographic documentation of collaborative deployments on ground.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactStories.map((story) => (
              <div
                key={story.id}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 overflow-hidden bg-slate-100 relative">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/95 text-slate-800 shadow-xs">
                      {story.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-3 text-xs text-slate-500 mb-2">
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-3.5 h-3.5 text-teal-600" />
                        <span>{story.location}</span>
                      </span>
                      <span>•</span>
                      <span>{story.date}</span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                      {story.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {story.summary}
                    </p>

                    <div className="p-3 bg-teal-50/70 border border-teal-200/60 rounded-xl space-y-1 text-xs">
                      <div className="font-bold text-teal-900 flex items-center space-x-1.5">
                        <Users className="w-3.5 h-3.5 text-teal-700" />
                        <span>Impact: {story.beneficiaries}</span>
                      </div>
                      <div className="text-teal-800 text-[11px]">
                        Clinical Partner: <strong>{story.partner}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Drive & Apps Script Backup Module Section */}
        <div id="backup-module-section" className="space-y-4">
          <BackupModule />
        </div>

        {/* Volunteer & Partner Action Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Ready to Mobilize Your Corporate CSR or Volunteer Workforce?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Whether you are planning an annual CSR allocation, scheduling a corporate blood drive, or setting up a clean water RO plant in an industrial belt, contact our CSR desk at <strong className="text-teal-300">contact@wisdomtherapy.life</strong>.
            </p>
          </div>
          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={() => openPartnerModal('Corporate CSR & Engagement')}
              className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-md transition-all"
            >
              Partner as Sponsor
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-5 py-2.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-200 font-bold text-xs transition-colors"
            >
              Contact Advisory Desk
            </button>
          </div>
        </div>
      </div>

      {/* Share Modal Dialog */}
      <ShareModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
        title={shareData.title}
        category={shareData.category}
      />
    </div>
  );
};
