import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Building2,
  Cpu,
  Users,
  Brain,
  ShieldCheck,
  Coins,
  MessageSquare,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  Calendar,
  Layers,
  Award,
} from 'lucide-react';

export const TrainingPage: React.FC = () => {
  const { addCorporateInquiry } = useApp();

  const trainingCategories = [
    { title: 'AI & Digital Transformation', desc: 'GenAI copilots, process automation & tech adaptability', icon: <Cpu className="w-5 h-5 text-teal-600" /> },
    { title: 'Leadership Development', desc: 'Transitioning to people multipliers & coaching teams', icon: <Award className="w-5 h-5 text-indigo-600" /> },
    { title: 'Communication Skills', desc: 'Executive presence, cross-team alignment & briefings', icon: <MessageSquare className="w-5 h-5 text-blue-600" /> },
    { title: 'Conflict Management', desc: 'Mediation frameworks & psychological safety labs', icon: <ShieldCheck className="w-5 h-5 text-rose-600" /> },
    { title: 'Team Building', desc: 'Hybrid collaboration & intentional trust architecture', icon: <Users className="w-5 h-5 text-emerald-600" /> },
    { title: 'Emotional Intelligence', desc: 'Self-awareness, empathetic response & social agility', icon: <Brain className="w-5 h-5 text-purple-600" /> },
    { title: 'Workplace Culture', desc: 'Inclusive practices, anti-burnout policies & values', icon: <Building2 className="w-5 h-5 text-teal-600" /> },
    { title: 'Employee Engagement', desc: 'Motivation diagnostics, recognition & autonomy systems', icon: <Sparkles className="w-5 h-5 text-amber-600" /> },
    { title: 'HR & People Management', desc: 'Modern talent development & transparent evaluations', icon: <Layers className="w-5 h-5 text-cyan-600" /> },
    { title: 'Workplace Health', desc: 'Ergonomics, sedentary recovery & metabolic awareness', icon: <ShieldCheck className="w-5 h-5 text-emerald-600" /> },
    { title: 'Safety Awareness', desc: 'Occupational health standards & hazard mitigation', icon: <ShieldCheck className="w-5 h-5 text-rose-600" /> },
    { title: 'Financial Literacy', desc: 'Inflation resilience, family budgeting & debt management', icon: <Coins className="w-5 h-5 text-amber-600" /> },
    { title: 'Stress Management', desc: 'Neuro-somatic resets & restorative sleep hygiene', icon: <Brain className="w-5 h-5 text-indigo-600" /> },
    { title: 'Productivity', desc: 'Deep work frameworks & eliminating asynchronous clutter', icon: <Sparkles className="w-5 h-5 text-blue-600" /> },
    { title: 'Future Skills', desc: 'Critical thinking, adaptive problem solving & tech ethics', icon: <Cpu className="w-5 h-5 text-teal-600" /> },
  ];

  // Corporate Inquiry Form State
  const [organization, setOrganization] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [trainingRequirement, setTrainingRequirement] = useState('AI & Digital Transformation');
  const [participantsCount, setParticipantsCount] = useState('20 - 50 participants');
  const [preferredDate, setPreferredDate] = useState('');
  const [deliveryMode, setDeliveryMode] = useState('Hybrid');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!organization.trim() || !contactPerson.trim() || !email.trim()) {
      setErrorMsg('Please provide your organization name, contact person, and email.');
      return;
    }

    addCorporateInquiry({
      organization: organization.trim(),
      contactPerson: contactPerson.trim(),
      email: email.trim(),
      phone: phone.trim() || 'Not specified',
      trainingRequirement,
      participantsCount,
      preferredDate: preferredDate.trim() || 'Flexible / Q4 2026',
      deliveryMode,
      message: message.trim(),
    });

    setIsSubmitted(true);
    setErrorMsg('');
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30">
            Professional Institute & Corporate Learning
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-white">
            Enterprise Training for Resilient, High-Performing Teams
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Wisdom Therapy partners with leading corporations, public sector institutions, and high-growth organizations to deliver tailored training programs that integrate modern digital skills with mental wellness and empathetic leadership.
          </p>
          <div className="pt-2">
            <a
              href="#custom-program-form"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-md shadow-teal-500/20 transition-all"
            >
              <span>Design a Customized Learning Program</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* 15 Training Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
            15 Specialized Enterprise Tracks
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Curriculum Tailored to the Demands of Today’s Workplace
          </h2>
          <p className="text-sm text-slate-600">
            Each track can be deployed as an intensive half-day masterclass, multi-week cohort lab, or integrated company-wide retreat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trainingCategories.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-teal-400 hover:shadow-md transition-all group flex items-start space-x-4"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                {item.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Inquiry Form Box */}
        <div
          id="custom-program-form"
          className="rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Narrative */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950 text-white p-8 sm:p-10 flex flex-col justify-between">
              <div className="space-y-5">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  Custom Architecture
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Design a Customized Learning Program
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Tell us about your team’s developmental goals, pain points, or upcoming leadership transitions. Our instructional design team will curate a tailored blueprint.
                </p>

                <div className="space-y-3 pt-4 text-xs text-slate-300">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Executive alignment interview prior to syllabus freeze</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Interactive practice labs over passive lectures</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Post-session implementation toolkits & pulse surveys</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-800 text-xs text-slate-400">
                <p className="font-semibold text-slate-300">Direct Corporate Advisory:</p>
                <p>connect@wisdomtherapy.life • +92 317 1224411</p>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7 p-8 sm:p-10">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mx-auto border border-teal-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Custom Training Inquiry Logged</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900">{contactPerson}</strong>. Your training blueprint request for{' '}
                    <strong className="text-slate-900">{organization}</strong> has been received by our enterprise director.
                  </p>
                  <p className="text-xs text-slate-500">
                    Our lead facilitator will review your cohort requirements ({participantsCount} • {deliveryMode}) and respond with an introductory syllabus within 48 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-teal-600 text-white font-bold text-xs"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    Corporate Training Inquiry Form
                  </h4>

                  {errorMsg && (
                    <div className="p-3 text-xs bg-rose-50 text-rose-700 border border-rose-200 rounded-lg">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Organization / Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="e.g. Apex Global Industries"
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={contactPerson}
                        onChange={(e) => setContactPerson(e.target.value)}
                        placeholder="e.g. Jennifer Taylor"
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jennifer@apex.example"
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Direct Phone
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Primary Training Requirement *
                      </label>
                      <select
                        value={trainingRequirement}
                        onChange={(e) => setTrainingRequirement(e.target.value)}
                        className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                      >
                        {trainingCategories.map((tc) => (
                          <option key={tc.title} value={tc.title}>
                            {tc.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Estimated Participants
                      </label>
                      <select
                        value={participantsCount}
                        onChange={(e) => setParticipantsCount(e.target.value)}
                        className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                      >
                        <option value="Under 20 participants">Small Team (&lt; 20)</option>
                        <option value="20 - 50 participants">Mid-size Cohort (20 - 50)</option>
                        <option value="50 - 150 participants">Department Wide (50 - 150)</option>
                        <option value="150+ enterprise participants">Enterprise-wide (150+)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Preferred Timeline / Date
                      </label>
                      <input
                        type="text"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        placeholder="e.g. November 2026 or Flexible"
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Delivery Mode
                      </label>
                      <select
                        value={deliveryMode}
                        onChange={(e) => setDeliveryMode(e.target.value)}
                        className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                      >
                        <option value="Hybrid">Hybrid (Kickoff + Digital Labs)</option>
                        <option value="Virtual Live">100% Virtual Interactive</option>
                        <option value="On-Site Corporate Office">On-Site at Company HQ</option>
                        <option value="Executive Offsite">Executive Retreat Location</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Organizational Context & Key Objectives
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share current challenges, desired behavior changes, or specific executive goals..."
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end">
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-md shadow-teal-600/20 flex items-center space-x-2 transition-all"
                    >
                      <span>Request Customized Proposal</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
