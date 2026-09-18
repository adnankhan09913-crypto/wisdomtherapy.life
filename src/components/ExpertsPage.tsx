import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Expert } from '../types';
import {
  UserCheck,
  Search,
  Sparkles,
  ArrowRight,
  Star,
  CheckCircle2,
  Mail,
  Building,
  GraduationCap,
  X,
  FileText,
} from 'lucide-react';

export const ExpertsPage: React.FC = () => {
  const { experts, selectedExpert, setSelectedExpert, addExpertApplication } = useApp();

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  // Application form state
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantCategory, setApplicantCategory] = useState('Psychologists / Mental Wellness');
  const [applicantDesignation, setApplicantDesignation] = useState('');
  const [applicantBio, setApplicantBio] = useState('');
  const [applicantLinkedin, setApplicantLinkedin] = useState('');
  const [appSubmitted, setAppSubmitted] = useState(false);
  const [appError, setAppError] = useState('');

  const categories = [
    'All',
    'Psychologists / Mental Wellness',
    'Doctors / Healthcare Professionals',
    'HR & Leadership Experts',
    'AI & Technology Professionals',
    'Financial Awareness Experts',
    'Trainers & Facilitators',
    'Academics & Researchers',
    'Industry Leaders',
  ];

  const filteredExperts = experts.filter((ex) => {
    const matchesCategory = selectedCategory === 'All' || ex.category === selectedCategory;
    const matchesSearch =
      search.trim() === '' ||
      ex.name.toLowerCase().includes(search.toLowerCase()) ||
      ex.designation.toLowerCase().includes(search.toLowerCase()) ||
      ex.bio.toLowerCase().includes(search.toLowerCase()) ||
      ex.expertise.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName.trim() || !applicantEmail.trim() || !applicantDesignation.trim()) {
      setAppError('Please fill in your name, email, and current professional title.');
      return;
    }

    addExpertApplication({
      name: applicantName.trim(),
      email: applicantEmail.trim(),
      phone: applicantPhone.trim() || 'Not specified',
      category: applicantCategory,
      designation: applicantDesignation.trim(),
      bio: applicantBio.trim(),
      linkedinOrWebsite: applicantLinkedin.trim() || 'Not specified',
    });

    setAppSubmitted(true);
    setAppError('');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800">
              Multidisciplinary Advisory & Faculty
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Our Expert Voices & Practitioners
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every course syllabus, wellness module, and community medical screening initiative is guided by certified professionals committed to ethical, evidence-based practices.
            </p>
          </div>

          <button
            onClick={() => {
              setAppSubmitted(false);
              setIsApplyModalOpen(true);
            }}
            className="self-start md:self-auto px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-md shadow-teal-600/20 flex items-center space-x-2 transition-all"
          >
            <Sparkles className="w-4 h-4 text-teal-200" />
            <span>Become a Wisdom Therapy Expert</span>
          </button>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs mb-8 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search faculty by name, medical or tech specialization, or keyword..."
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

          {/* Categories */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 text-xs scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full font-bold whitespace-nowrap transition-all ${
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

        {/* Experts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredExperts.map((expert) => (
            <div
              key={expert.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative mb-4">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-slate-200 group-hover:border-teal-500 transition-colors">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-900 text-white shadow-xs whitespace-nowrap max-w-[90%] truncate">
                    {expert.category}
                  </span>
                </div>

                <div className="text-center mb-3">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {expert.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{expert.designation}</p>
                </div>

                <p className="text-xs text-slate-600 text-center line-clamp-3 leading-relaxed mb-4">
                  {expert.bio}
                </p>

                <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                  {expert.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-center">
                <button
                  onClick={() => setSelectedExpert(expert)}
                  className="w-full py-2 rounded-xl text-xs font-bold text-teal-700 hover:bg-teal-50 border border-teal-200 transition-colors"
                >
                  View Profile & Background
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Expert Modal */}
        {selectedExpert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[85vh] flex flex-col">
              <div className="bg-slate-900 text-white p-6 flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={selectedExpert.image}
                    alt={selectedExpert.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-teal-400"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                      {selectedExpert.category}
                    </span>
                    <h3 className="text-xl font-bold mt-1">{selectedExpert.name}</h3>
                    <p className="text-xs text-slate-300">{selectedExpert.designation}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedExpert(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Professional Biography
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedExpert.bio}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Core Specializations & Practice Areas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExpert.expertise.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-teal-50 text-teal-900 text-xs font-semibold border border-teal-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
                  <p>
                    <strong>Faculty Integrity Policy:</strong> All expert sessions adhere to Wisdom Therapy&apos;s ethical charter. Faculty members do not endorse prescription therapeutics or unvalidated fads during official Wisdom Therapy platforms.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setSelectedExpert(null)}
                  className="px-6 py-2 rounded-xl bg-teal-600 text-white font-bold text-xs shadow-xs"
                >
                  Close Profile
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Apply as Expert Modal */}
        {isApplyModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[85vh] flex flex-col">
              <div className="bg-slate-900 text-white p-6 flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                    Faculty Onboarding
                  </span>
                  <h3 className="text-xl font-bold mt-1">Become a Wisdom Therapy Expert</h3>
                  <p className="text-xs text-slate-300">
                    Join our multidisciplinary roster of master trainers, psychologists, medical officers, and technologists.
                  </p>
                </div>
                <button
                  onClick={() => setIsApplyModalOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto">
                {appSubmitted ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mx-auto border border-teal-200">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">Application Received</h4>
                    <p className="text-sm text-slate-600">
                      Thank you, <strong className="text-slate-900">{applicantName}</strong>. Our academic advisory council will review your credentials and reach out via {applicantEmail} within 5 business days.
                    </p>
                    <button
                      onClick={() => setIsApplyModalOpen(false)}
                      className="px-6 py-2 rounded-xl bg-teal-600 text-white font-bold text-xs"
                    >
                      Done
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplySubmit} className="space-y-4">
                    {appError && (
                      <div className="p-2.5 text-xs bg-rose-50 text-rose-700 border border-rose-200 rounded-lg">
                        {appError}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Full Legal Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={applicantName}
                          onChange={(e) => setApplicantName(e.target.value)}
                          placeholder="e.g. Dr. Maya Patel"
                          className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={applicantEmail}
                          onChange={(e) => setApplicantEmail(e.target.value)}
                          placeholder="maya@domain.org"
                          className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Faculty Category *
                        </label>
                        <select
                          value={applicantCategory}
                          onChange={(e) => setApplicantCategory(e.target.value)}
                          className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                        >
                          <option value="Psychologists / Mental Wellness">Psychologists / Mental Wellness</option>
                          <option value="Doctors / Healthcare Professionals">Doctors / Healthcare Professionals</option>
                          <option value="HR & Leadership Experts">HR & Leadership Experts</option>
                          <option value="AI & Technology Professionals">AI & Technology Professionals</option>
                          <option value="Financial Awareness Experts">Financial Awareness Experts</option>
                          <option value="Trainers & Facilitators">Trainers & Facilitators</option>
                          <option value="Academics & Researchers">Academics & Researchers</option>
                          <option value="Industry Leaders">Industry Leaders</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Professional Title / Designation *
                        </label>
                        <input
                          type="text"
                          required
                          value={applicantDesignation}
                          onChange={(e) => setApplicantDesignation(e.target.value)}
                          placeholder="e.g. Lead Clinical Neuropsychologist"
                          className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        LinkedIn Profile or Professional Website
                      </label>
                      <input
                        type="url"
                        value={applicantLinkedin}
                        onChange={(e) => setApplicantLinkedin(e.target.value)}
                        placeholder="https://linkedin.com/in/username"
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Summary of Expertise & Teaching/Clinical Background
                      </label>
                      <textarea
                        rows={3}
                        value={applicantBio}
                        onChange={(e) => setApplicantBio(e.target.value)}
                        placeholder="Share your degrees, years of practice, or focus areas..."
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-end space-x-3">
                      <button
                        type="button"
                        onClick={() => setIsApplyModalOpen(false)}
                        className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-md"
                      >
                        Submit Application
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
