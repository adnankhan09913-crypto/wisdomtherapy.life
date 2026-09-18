import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { X, CheckCircle2, Calendar, User, Mail, Phone, Building, Briefcase, MessageSquare, ArrowRight } from 'lucide-react';

export const RegistrationModal: React.FC = () => {
  const {
    isRegistrationModalOpen,
    closeRegistrationModal,
    registrationPrefill,
    programs,
    events,
    healthCamps,
    addRegistration,
  } = useApp();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [designation, setDesignation] = useState('');
  const [itemType, setItemType] = useState<'program' | 'event' | 'camp'>('program');
  const [itemId, setItemId] = useState('');
  const [itemName, setItemName] = useState('');
  const [preferredMode, setPreferredMode] = useState('Virtual');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (registrationPrefill) {
      setItemType(registrationPrefill.type);
      setItemId(registrationPrefill.id);
      setItemName(registrationPrefill.name);
    } else if (programs.length > 0) {
      setItemType('program');
      setItemId(programs[0].id);
      setItemName(programs[0].title);
    }
    setIsSuccess(false);
    setErrorMsg('');
  }, [registrationPrefill, programs, isRegistrationModalOpen]);

  if (!isRegistrationModalOpen) return null;

  const handleItemSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    setItemId(selectedId);

    if (itemType === 'program') {
      const match = programs.find((p) => p.id === selectedId);
      if (match) setItemName(match.title);
    } else if (itemType === 'event') {
      const match = events.find((ev) => ev.id === selectedId);
      if (match) setItemName(match.title);
    } else {
      const match = healthCamps.find((c) => c.id === selectedId);
      if (match) setItemName(match.title);
    }
  };

  const handleTypeChange = (type: 'program' | 'event' | 'camp') => {
    setItemType(type);
    if (type === 'program' && programs.length > 0) {
      setItemId(programs[0].id);
      setItemName(programs[0].title);
    } else if (type === 'event' && events.length > 0) {
      setItemId(events[0].id);
      setItemName(events[0].title);
    } else if (type === 'camp' && healthCamps.length > 0) {
      setItemId(healthCamps[0].id);
      setItemName(healthCamps[0].title);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) {
      setErrorMsg('Please provide your full name and email address.');
      return;
    }

    addRegistration({
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim() || 'Not specified',
      organization: organization.trim() || 'Independent Participant',
      designation: designation.trim() || 'Learner / Attendee',
      itemType,
      itemId,
      itemName,
      preferredMode,
      message: message.trim(),
    });

    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 text-white p-6 flex items-start justify-between">
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30 mb-2">
              Registration System
            </span>
            <h3 className="text-xl font-bold tracking-tight">Join a Session or Initiative</h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Secure your place in professional programs, expert talks, or health awareness events.
            </p>
          </div>
          <button
            onClick={closeRegistrationModal}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mx-auto border border-teal-200 shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900">Registration Confirmed!</h4>
                <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{fullName}</strong>. Your registration for{' '}
                  <span className="text-teal-700 font-semibold">{itemName}</span> has been logged.
                </p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-500 text-left space-y-1">
                <p>
                  <strong>Registered Email:</strong> {email}
                </p>
                <p>
                  <strong>Session Mode:</strong> {preferredMode}
                </p>
                <p>
                  <strong>Status:</strong> Confirmed & synced with Admin Dashboard
                </p>
                <p className="text-[11px] text-teal-700 pt-1">
                  *A verification notification architecture is initialized for enterprise mail gateways.
                </p>
              </div>
              <div className="pt-2">
                <button
                  onClick={closeRegistrationModal}
                  className="px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm shadow-md transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 text-xs bg-rose-50 text-rose-700 border border-rose-200 rounded-lg">
                  {errorMsg}
                </div>
              )}

              {/* Category tabs */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Registration Category
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => handleTypeChange('program')}
                    className={`py-2 px-3 text-xs font-bold rounded-lg border text-center transition-all ${
                      itemType === 'program'
                        ? 'bg-teal-50 border-teal-600 text-teal-800'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Program
                  </button>
                  <button
                    type="button"
                    onClick={() => handleTypeChange('event')}
                    className={`py-2 px-3 text-xs font-bold rounded-lg border text-center transition-all ${
                      itemType === 'event'
                        ? 'bg-teal-50 border-teal-600 text-teal-800'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Event / Talk
                  </button>
                  <button
                    type="button"
                    onClick={() => handleTypeChange('camp')}
                    className={`py-2 px-3 text-xs font-bold rounded-lg border text-center transition-all ${
                      itemType === 'camp'
                        ? 'bg-teal-50 border-teal-600 text-teal-800'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Health Camp
                  </button>
                </div>
              </div>

              {/* Selection Dropdown */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Selected {itemType === 'program' ? 'Program' : itemType === 'event' ? 'Event' : 'Camp'}
                </label>
                <select
                  value={itemId}
                  onChange={handleItemSelect}
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                >
                  {itemType === 'program' &&
                    programs.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title} ({p.duration})
                      </option>
                    ))}
                  {itemType === 'event' &&
                    events.map((ev) => (
                      <option key={ev.id} value={ev.id}>
                        {ev.title} — {ev.date}
                      </option>
                    ))}
                  {itemType === 'camp' &&
                    healthCamps.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.title} — {c.location}
                      </option>
                    ))}
                </select>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                    />
                  </div>
                </div>
              </div>

              {/* Phone & Mode */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Mode
                  </label>
                  <select
                    value={preferredMode}
                    onChange={(e) => setPreferredMode(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                  >
                    <option value="Virtual Live">Virtual Live Stream</option>
                    <option value="In-Person">In-Person Attendee</option>
                    <option value="Hybrid">Hybrid Access</option>
                    <option value="On-Demand">Recorded Archive</option>
                  </select>
                </div>
              </div>

              {/* Organization & Designation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Organization / Company
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="e.g. Acme Corp / Self"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Job Title / Role
                  </label>
                  <div className="relative">
                    <Briefcase className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                      placeholder="e.g. People Manager"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                    />
                  </div>
                </div>
              </div>

              {/* Message / Goals */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Specific Learning Goals or Note (Optional)
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what you hope to gain from this experience..."
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                />
              </div>

              {/* Disclaimer */}
              <p className="text-[11px] text-slate-500 leading-tight">
                By registering, you agree to receive educational session links. Wisdom Therapy adheres strictly to ethical data privacy.
              </p>

              {/* Actions */}
              <div className="pt-2 flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={closeRegistrationModal}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-md shadow-teal-600/20 transition-all flex items-center space-x-1.5"
                >
                  <span>Confirm Registration</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
