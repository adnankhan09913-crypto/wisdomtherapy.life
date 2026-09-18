import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  CheckCircle2,
  Handshake,
  Building,
  Mail,
  Phone,
  User,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export const PartnerModal: React.FC = () => {
  const { isPartnerModalOpen, closePartnerModal, partnerPrefillType, addContactInquiry } = useApp();

  const partnershipTypes = [
    { title: 'Corporate Partners', desc: 'Workplace wellness, employee training & future skills' },
    { title: 'Healthcare Partners', desc: 'Hospitals, diagnostic clinics & medical camp faculty' },
    { title: 'Academic Partners', desc: 'Universities, research collaborations & student learning' },
    { title: 'NGO / Community Partners', desc: 'Grassroots outreach, volunteer mobilization & relief' },
    { title: 'Technology Partners', desc: 'AI tools, digital infrastructure & software co-creation' },
    { title: 'Training Partners', desc: 'Co-branded certifications & specialized masterclasses' },
    { title: 'Media Partners', desc: 'Health journalism, wellness advocacy & public awareness' },
    { title: 'CSR Partners', desc: 'Corporate Social Responsibility funding for community camps' },
  ];

  const [selectedType, setSelectedType] = useState('Corporate Partners');
  const [orgName, setOrgName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [scopeDetails, setScopeDetails] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (partnerPrefillType) {
      setSelectedType(partnerPrefillType);
    }
    setIsSuccess(false);
    setErrorMsg('');
  }, [partnerPrefillType, isPartnerModalOpen]);

  if (!isPartnerModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orgName.trim() || !contactName.trim() || !email.trim()) {
      setErrorMsg('Please complete all required organization & contact fields.');
      return;
    }

    addContactInquiry({
      name: contactName.trim(),
      organization: orgName.trim(),
      email: email.trim(),
      phone: phone.trim() || 'Not provided',
      inquiryType: 'Corporate Partnership',
      message: `[Partnership Track: ${selectedType}]\nScope & Goals: ${scopeDetails.trim()}`,
    });

    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white p-6 flex items-start justify-between">
          <div className="space-y-1">
            <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30">
              <Handshake className="w-3.5 h-3.5" />
              <span>Partnership System</span>
            </span>
            <h3 className="text-xl font-bold tracking-tight">Start a Partnership Conversation</h3>
            <p className="text-xs text-slate-300">
              Join hands with Wisdom Therapy to co-create sustainable learning and community health impact.
            </p>
          </div>
          <button
            onClick={closePartnerModal}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[78vh] overflow-y-auto">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mx-auto border border-teal-200 shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900">Partnership Inquiry Received</h4>
                <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{contactName}</strong> from{' '}
                  <strong className="text-slate-900">{orgName}</strong>. Our partnership lead will review your
                  inquiry for the <span className="text-teal-700 font-semibold">{selectedType}</span> track.
                </p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 text-left space-y-1">
                <p>
                  <strong>Inquiry Reference:</strong> Registered in Central Administrative Queue
                </p>
                <p>
                  <strong>Contact Email:</strong> {email}
                </p>
                <p>
                  <strong>Typical Turnaround:</strong> 2 business days for introductory dialogue
                </p>
              </div>
              <div className="pt-2">
                <button
                  onClick={closePartnerModal}
                  className="px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm shadow-md transition-all"
                >
                  Close Window
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

              {/* Partnership Types Grid */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Select Partnership Category *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {partnershipTypes.map((pt) => {
                    const isSelected = selectedType === pt.title;
                    return (
                      <button
                        key={pt.title}
                        type="button"
                        onClick={() => setSelectedType(pt.title)}
                        className={`p-2.5 text-left rounded-xl border transition-all ${
                          isSelected
                            ? 'bg-teal-50/70 border-teal-600 text-teal-950 ring-1 ring-teal-500/40'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold">{pt.title}</span>
                          {isSelected && <Sparkles className="w-3.5 h-3.5 text-teal-600" />}
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{pt.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Organization & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Organization / Entity Name *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      value={orgName}
                      onChange={(e) => setOrgName(e.target.value)}
                      placeholder="e.g. Horizon Health Systems"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Contact Person Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Dr. Arthur Miller"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                    />
                  </div>
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="partner@organization.org"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Direct Phone
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                    />
                  </div>
                </div>
              </div>

              {/* Scope */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Collaboration Objectives & Desired Outcomes
                </label>
                <textarea
                  rows={3}
                  value={scopeDetails}
                  onChange={(e) => setScopeDetails(e.target.value)}
                  placeholder="Outline your prospective initiative, target audience, timeline, or sponsorship details..."
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                />
              </div>

              {/* Actions */}
              <div className="pt-2 flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={closePartnerModal}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-md shadow-teal-600/20 transition-all flex items-center space-x-1.5"
                >
                  <span>Submit Partnership Request</span>
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
