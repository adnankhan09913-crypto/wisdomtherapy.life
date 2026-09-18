import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { HealthCampItem } from '../types';
import {
  Stethoscope,
  HeartPulse,
  Eye,
  Salad,
  Users,
  Briefcase,
  ShieldCheck,
  ShieldAlert,
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Info,
  Building,
  Sparkles,
  Phone,
  Mail,
  X,
} from 'lucide-react';

interface CampCategoryTrack {
  tag: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  focus: string[];
}

export const HealthCampsPage: React.FC = () => {
  const { healthCamps, addCampRequest, openRegistrationModal } = useApp();
  const [selectedCamp, setSelectedCamp] = useState<HealthCampItem | null>(null);
  const [selectedTrack, setSelectedTrack] = useState<CampCategoryTrack | null>(null);

  const campCategories: CampCategoryTrack[] = [
    {
      tag: 'Community Care',
      title: 'Free Medical Camps',
      desc: 'Grassroots clinics facilitating physician consultations, vitals checking, and basic diagnostic referrals for local communities.',
      icon: <Stethoscope className="w-5 h-5 text-teal-600" />,
      focus: [
        'Vital checks (BP, Pulse, SpO2, Temperature)',
        'Physician triage & doctor consultations',
        'Basic diagnostic referrals & essential medication advice',
      ],
    },
    {
      tag: 'Early Detection',
      title: 'Health Screening',
      desc: 'Blood pressure mapping, random blood glucose testing, and non-invasive cardiovascular risk evaluations.',
      icon: <HeartPulse className="w-5 h-5 text-emerald-600" />,
      focus: [
        'Blood pressure mapping & hypertension screening',
        'Random blood glucose / diabetes testing',
        'Non-invasive cardiovascular & metabolic risk evaluations',
      ],
    },
    {
      tag: 'Vision Health',
      title: 'Eye Care Awareness',
      desc: 'Visual acuity testing, refraction assessment, digital eye strain mitigation, and subsidized corrective spectacles.',
      icon: <Eye className="w-5 h-5 text-indigo-600" />,
      focus: [
        'Optometrist visual acuity testing & refraction assessment',
        'Digital eye strain & Computer Vision Syndrome mitigation',
        'Subsidized / partner-sponsored corrective spectacles distribution',
      ],
    },
    {
      tag: 'Preventive Nutrition',
      title: 'Nutrition Awareness',
      desc: 'Practical guidance on metabolic balance, anemia prevention, dietary diversity, and affordable wholesome meals.',
      icon: <Salad className="w-5 h-5 text-amber-600" />,
      focus: [
        'Practical guidance on metabolic balance & glucose stability',
        'Iron deficiency & anemia prevention blueprints',
        'Dietary diversity & affordable wholesome meal planning',
      ],
    },
    {
      tag: 'Corporate Wellness',
      title: 'Workplace Health Drives',
      desc: 'On-site corporate wellness screening, desk ergonomics assessment, and postural health workshops for staff.',
      icon: <Briefcase className="w-5 h-5 text-blue-600" />,
      focus: [
        'On-site corporate wellness screening & vitals panel',
        'Desk ergonomics assessment & spinal alignment audit',
        'Postural health workshops & micro-break habits for staff',
      ],
    },
    {
      tag: 'Health Literacy',
      title: 'Preventive Health Sessions',
      desc: 'Expert-led educational lectures clarifying lifestyle disease prevention, sleep hygiene, and routine checkup protocols.',
      icon: <ShieldAlert className="w-5 h-5 text-rose-600" />,
      focus: [
        'Expert-led educational lectures on lifestyle disease prevention',
        'Circadian rhythm & restorative sleep hygiene guidance',
        'Routine checkup protocols & debunking health myths',
      ],
    },
  ];

  // Camp Request Form State
  const [organization, setOrganization] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [expectedParticipants, setExpectedParticipants] = useState('100 - 300 beneficiaries');
  const [preferredDate, setPreferredDate] = useState('');
  const [campType, setCampType] = useState('Free Medical Camp & Screening');
  const [supportRequired, setSupportRequired] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!organization.trim() || !contactPerson.trim() || !email.trim() || !location.trim()) {
      setErrorMsg('Please complete all required fields (organization, contact, email, location).');
      return;
    }

    addCampRequest({
      organization: organization.trim(),
      contactPerson: contactPerson.trim(),
      email: email.trim(),
      phone: phone.trim() || 'Not provided',
      location: location.trim(),
      expectedParticipants,
      preferredDate: preferredDate.trim() || 'Q4 2026',
      campType,
      supportRequired: supportRequired.trim() || 'Standard Medical Camp Logistics & Partner Doctors',
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
            Community Outreach & Preventive Health
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-white">
            Accessible Health Camps & Clinical Partnerships
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Delivering preventive screenings, vision camps, and doctor-led awareness initiatives in collaboration with licensed healthcare facilities and registered NGO partners.
          </p>

          <div className="pt-2">
            <a
              href="#sponsor-camp-form"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-md transition-all"
            >
              <span>Request / Sponsor a Health Camp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Strict Medical Compliance Statement */}
        <div className="p-5 rounded-2xl bg-teal-50 border border-teal-200 text-teal-950 flex items-start space-x-3.5 shadow-xs">
          <ShieldCheck className="w-6 h-6 text-teal-700 shrink-0 mt-0.5" />
          <div className="text-xs space-y-1">
            <p className="font-bold uppercase tracking-wide text-teal-900">
              Accreditation & Medical Protocol Statement
            </p>
            <p className="text-teal-800 leading-relaxed">
              Wisdom Therapy acts as a community convener, health awareness facilitator, and operational coordinator. All diagnostic tests, physical screenings, and clinical consultations are conducted solely by licensed physicians, registered optometrists, and accredited hospital staff. Wisdom Therapy does not manufacture medical products or claim therapeutic cures.
            </p>
          </div>
        </div>

        {/* 6 Camp Tracks */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
            Our 6 Core Health Initiatives
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Comprehensive Preventive Health Tracks
          </h2>
          <p className="text-sm text-slate-600">
            Designed to address the primary preventive health needs of underserved communities and corporate workforces alike. Click any track to inspect detailed clinical protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campCategories.map((item, idx) => (
            <div
              key={idx}
              id={`camp-category-${idx}`}
              onClick={() => setSelectedTrack(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedTrack(item);
                }
              }}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-teal-400 hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.desc}
                </p>
                <div className="space-y-1.5 pt-3 border-t border-slate-100">
                  {item.focus.map((f, i) => (
                    <div key={i} className="flex items-start space-x-1.5 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 mt-4 flex items-center justify-between text-[11px] font-semibold text-slate-400 group-hover:text-teal-700 transition-colors">
                <span>View initiative details</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Selected Track Modal */}
        {selectedTrack && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
            role="dialog"
            aria-modal="true"
            aria-labelledby="track-modal-title"
          >
            <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]">
              <div className="bg-slate-900 text-white p-6 flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 uppercase tracking-wider">
                    {selectedTrack.tag}
                  </span>
                  <h3 id="track-modal-title" className="text-xl font-bold text-white mt-1.5">
                    {selectedTrack.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedTrack(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Close track modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-5 text-left">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Initiative Overview
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedTrack.desc}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                    Clinical Delivery & Focus Areas
                  </h4>
                  <div className="space-y-2">
                    {selectedTrack.focus.map((point, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <p className="text-slate-600 leading-relaxed">
                    Delivered in partnership with accredited healthcare institutions, registered hospitals, and licensed medical practitioners in full compliance with public health standards.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end space-x-3">
                <button
                  onClick={() => setSelectedTrack(null)}
                  className="px-4 py-2 rounded-xl border border-slate-300 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition-colors"
                >
                  Close
                </button>
                <a
                  href="#sponsor-camp-form"
                  onClick={() => setSelectedTrack(null)}
                  className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold transition-colors"
                >
                  Sponsor this Initiative
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Upcoming & Active Health Camps List */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                Ground Deployments
              </span>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Scheduled Health Camps & Screening Drives
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Community members can register in advance for queue-free screening.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthCamps.map((camp) => (
              <div
                key={camp.id}
                id={`camp-card-${camp.id}`}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:border-teal-400 hover:shadow-md transition-all group"
              >
                <div
                  className="cursor-pointer"
                  onClick={() => setSelectedCamp(camp)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedCamp(camp);
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-100 text-teal-800">
                      {camp.type}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">{camp.date}</span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-1">
                    {camp.title}
                  </h4>

                  <p className="text-xs text-slate-600 line-clamp-2 mb-3">
                    {camp.description}
                  </p>

                  <div className="space-y-1.5 text-xs text-slate-500 my-3">
                    <div className="flex items-center space-x-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{camp.location}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>Partner: <strong>{camp.partnerHospital || (camp.partnerOrgs && camp.partnerOrgs.length > 0 ? camp.partnerOrgs.join(', ') : 'Medical Partner Network')}</strong></span>
                    </div>
                    <div className="flex items-center space-x-1.5 text-teal-700 font-medium">
                      <Users className="w-3.5 h-3.5 shrink-0" />
                      <span>Capacity: {camp.beneficiariesExpected || camp.beneficiariesCount || 350} individuals</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <p className="text-[11px] font-bold text-slate-700 mb-1">Services Provided:</p>
                    <div className="flex flex-wrap gap-1">
                      {(camp.servicesOffered || camp.services || []).map((s, i) => (
                        <span key={i} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedCamp(camp)}
                    className="text-xs font-bold text-teal-700 hover:text-teal-800 hover:underline flex items-center space-x-1"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() =>
                      openRegistrationModal({
                        type: 'camp',
                        id: camp.id,
                        name: camp.title,
                      })
                    }
                    className="px-3.5 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold transition-colors shadow-xs"
                  >
                    Register
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Camp Detail Modal */}
          {selectedCamp && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
              role="dialog"
              aria-modal="true"
              aria-labelledby="camp-detail-title"
            >
              <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]">
                <div className="bg-slate-900 text-white p-6 flex items-start justify-between">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 uppercase tracking-wider">
                      {selectedCamp.type}
                    </span>
                    <h3 id="camp-detail-title" className="text-xl font-bold text-white mt-2">
                      {selectedCamp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 pt-1">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3.5 h-3.5 text-teal-400" />
                        <span>{selectedCamp.date}</span>
                      </span>
                      <span>•</span>
                      <span>{selectedCamp.time || '9:00 AM – 3:00 PM'}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedCamp(null)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    aria-label="Close camp details"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6 overflow-y-auto space-y-5 text-left">
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Camp Overview & Purpose
                    </h4>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {selectedCamp.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <div>
                      <span className="text-slate-500 font-semibold block mb-0.5">Deployment Venue</span>
                      <span className="text-slate-900 font-bold flex items-center space-x-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{selectedCamp.location}</span>
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500 font-semibold block mb-0.5">Capacity & Target</span>
                      <span className="text-slate-900 font-bold flex items-center space-x-1.5">
                        <Users className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{selectedCamp.beneficiariesExpected || selectedCamp.beneficiariesCount || 350} community members</span>
                      </span>
                    </div>
                    <div className="sm:col-span-2">
                      <span className="text-slate-500 font-semibold block mb-0.5">Accredited Clinical Leads & Partners</span>
                      <span className="text-slate-900 font-medium">
                        {selectedCamp.qualifiedMedicalLead || 'Licensed Medical Officers & Accredited Clinical Volunteers'}
                        {selectedCamp.partnerHospital && ` • ${selectedCamp.partnerHospital}`}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                      Clinical Services & Diagnostics Included
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {(selectedCamp.servicesOffered || selectedCamp.services || []).map((service, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-xs flex items-start space-x-3 text-teal-950">
                    <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      Consultations and screening tests are completely free of charge for registered community participants. Early registration is recommended to avoid on-site queues.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedCamp(null)}
                    className="px-4 py-2 rounded-xl border border-slate-300 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const c = selectedCamp;
                      setSelectedCamp(null);
                      openRegistrationModal({
                        type: 'camp',
                        id: c.id,
                        name: c.title,
                      });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold transition-colors shadow-md shadow-teal-600/20"
                  >
                    Register for this Camp
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Request / Sponsor a Health Camp Form */}
        <div
          id="sponsor-camp-form"
          className="rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950 text-white p-8 sm:p-10 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  CSR & Community Sponsorship
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Request or Sponsor a Health Camp
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Bring free physician consultations, blood screenings, and vision clinics to your neighborhood, workplace campus, or educational institution.
                </p>

                <div className="space-y-2.5 pt-4 text-xs text-slate-300">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Complete operational coordination & volunteer management</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Deployment of licensed medical officers and diagnostic staff</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Full post-camp beneficiary summary report for CSR audits</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 text-xs text-slate-400">
                <p className="font-semibold text-slate-300">Health Camp Operations Desk:</p>
                <p>contact@wisdomtherapy.life • +92 317 1224411</p>
              </div>
            </div>

            <div className="lg:col-span-7 p-8 sm:p-10">
              {isSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mx-auto border border-teal-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Health Camp Application Received</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900">{contactPerson}</strong> from{' '}
                    <strong className="text-slate-900">{organization}</strong>. Your proposal to host a{' '}
                    <strong className="text-teal-700">{campType}</strong> in <strong>{location}</strong> has been assigned to our field outreach coordinator.
                  </p>
                  <p className="text-xs text-slate-500">
                    We will review local medical partner availability and contact you via {email} within 2 business days.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2 rounded-xl bg-teal-600 text-white text-xs font-bold"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    Camp Organization & Sponsorship Details
                  </h4>

                  {errorMsg && (
                    <div className="p-3 text-xs bg-rose-50 text-rose-700 border border-rose-200 rounded-lg">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Sponsoring Entity / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="e.g. United Metro Foundation"
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
                        placeholder="e.g. David Vance"
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="david@unitedmetro.org"
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
                        placeholder="+1 (555) 123-4567"
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Proposed Location / Venue *
                      </label>
                      <input
                        type="text"
                        required
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. Westside Community Center, Block 4"
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Expected Beneficiaries
                      </label>
                      <select
                        value={expectedParticipants}
                        onChange={(e) => setExpectedParticipants(e.target.value)}
                        className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                      >
                        <option value="50 - 100 beneficiaries">50 - 100 beneficiaries</option>
                        <option value="100 - 300 beneficiaries">100 - 300 beneficiaries</option>
                        <option value="300 - 600 beneficiaries">300 - 600 beneficiaries</option>
                        <option value="600+ large scale camp">600+ large scale camp</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Primary Type of Camp *
                      </label>
                      <select
                        value={campType}
                        onChange={(e) => setCampType(e.target.value)}
                        className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                      >
                        <option value="Free Medical Camp & Screening">Free Medical Camp & Screening</option>
                        <option value="Eye Health & Spectacles Drive">Eye Health & Spectacles Drive</option>
                        <option value="Workplace Wellness & Ergonomics">Workplace Wellness & Ergonomics</option>
                        <option value="Nutrition & Diabetes Clinic">Nutrition & Diabetes Clinic</option>
                        <option value="Women's Preventive Health Day">Women&apos;s Preventive Health Day</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Preferred Date / Window
                      </label>
                      <input
                        type="text"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        placeholder="e.g. October 24, 2026 or Weekend"
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Support Required / Venue Infrastructure Available
                    </label>
                    <textarea
                      rows={3}
                      value={supportRequired}
                      onChange={(e) => setSupportRequired(e.target.value)}
                      placeholder="Specify if venue space, seating, power, or volunteer assistance will be provided by your team..."
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end">
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-md shadow-teal-600/20 flex items-center space-x-2 transition-all"
                    >
                      <span>Submit Camp Sponsorship Request</span>
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
