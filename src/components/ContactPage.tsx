import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ContactInquiryType } from '../types';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  Building,
  Handshake,
  MessageSquare,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { addContactInquiry } = useApp();

  const [inquiryType, setInquiryType] = useState<ContactInquiryType>('General Inquiry');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const inquiryOptions: ContactInquiryType[] = [
    'General Inquiry',
    'Training Inquiry',
    'Corporate Partnership',
    'Health Camp Inquiry',
    'Community Partnership',
    'Join as an Expert',
    'Volunteer Registration',
    'Sponsorship & Support',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg('Please enter your name, email, and message.');
      return;
    }

    addContactInquiry({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || 'Not provided',
      organization: organization.trim() || 'Individual',
      inquiryType,
      message: message.trim(),
    });

    setIsSuccess(true);
    setErrorMsg('');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800">
            Open Communication & Engagement
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            Let&apos;s Create Something Meaningful Together.
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Whether you are looking to upskill your corporate team, sponsor a community medical screening, or join our multidisciplinary faculty, our coordination team is ready to connect.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  Direct Inquiries
                </span>
                <h3 className="text-xl font-bold mt-1">Central Coordination Office</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Dedicated liaison officers review every inquiry to ensure timely, confidential responses.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block font-semibold">General & Partnerships:</span>
                    <a href="mailto:connect@wisdomtherapy.life" className="text-white hover:text-teal-300 font-bold">
                      connect@wisdomtherapy.life
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block font-semibold">Inquiry Hotline:</span>
                    <a href="tel:+923171224411" className="text-white hover:text-teal-300 font-bold">
                      +92 317 1224411
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block font-semibold">Secretariat & Knowledge Center:</span>
                    <span className="text-slate-200">
                      K-49 Block 9 Vincy Mall Clifton Karachi
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block font-semibold">Desk Operating Hours:</span>
                    <span className="text-slate-200">Monday &ndash; Friday: 9:00 AM &ndash; 6:00 PM EST</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400">
                <p className="font-semibold text-slate-300">Urgent Healthcare Notice:</p>
                <p>
                  Wisdom Therapy does not operate emergency mental health or clinical acute triage hotlines. If you are experiencing an immediate crisis, please call your local emergency services or national crisis helpline.
                </p>
              </div>
            </div>

            {/* Micro FAQ / Quick Links */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Frequently Addressed Topics
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Corporate workshops can be custom scheduled within 3 weeks</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Free health camps require 30 days operational lead time</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Accredited experts receive faculty stipends for all masterclasses</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md">
              {isSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mx-auto border border-teal-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Inquiry Dispatched Successfully</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900">{name}</strong>. Your message regarding{' '}
                    <strong className="text-teal-700">{inquiryType}</strong> has been assigned to our administrative team.
                  </p>
                  <p className="text-xs text-slate-400">
                    Confirmation has been logged in our system. We typically reply within 24–48 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setMessage('');
                    }}
                    className="px-6 py-2.5 rounded-xl bg-teal-600 text-white font-bold text-xs shadow-xs"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      Send an Inquiry or Partnership Proposal
                    </h3>
                    <p className="text-xs text-slate-500">
                      Fill out the details below to route your request to the appropriate department.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 text-xs bg-rose-50 text-rose-700 border border-rose-200 rounded-lg">
                      {errorMsg}
                    </div>
                  )}

                  {/* Inquiry Category Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Nature of Inquiry *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {inquiryOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setInquiryType(opt)}
                          className={`p-2 text-center rounded-xl text-xs font-bold border transition-all ${
                            inquiryType === opt
                              ? 'bg-teal-50 text-teal-900 border-teal-600 ring-1 ring-teal-500'
                              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rachel Adams"
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="rachel@organization.org"
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Organization / Entity
                      </label>
                      <input
                        type="text"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="Company, University, or NGO"
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number
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

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Message / Proposal Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please elaborate on your requirements, prospective timeline, questions, or ideas for collaboration..."
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end">
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-md shadow-teal-600/20 flex items-center space-x-2 transition-all"
                    >
                      <span>Transmit Inquiry</span>
                      <Send className="w-3.5 h-3.5" />
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
