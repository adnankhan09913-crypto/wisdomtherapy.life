import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Stethoscope,
  HeartPulse,
  Eye,
  Salad,
  Users,
  Briefcase,
  ShieldCheck,
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Info,
  Building,
  Sparkles,
  Phone,
  Mail,
} from 'lucide-react';

export const HealthCampsPage: React.FC = () => {
  const { healthCamps, addCampRequest, openRegistrationModal } = useApp();

  const campCategories = [
    {
      title: 'Free Medical Camps',
      desc: 'Community-level primary triage, general physician consultations, and essential medication dispensing by licensed medical officers.',
      icon: <Stethoscope className="w-5 h-5 text-teal-600" />,
      focus: ['Vital checks (BP, Pulse, SpO2)', 'Doctor triage', 'Free prescription guidance'],
    },
    {
      title: 'Health Screening & Diagnostics',
      desc: 'Rapid non-invasive diagnostic points for blood glucose, lipid profile indicators, and body mass index analysis.',
      icon: <HeartPulse className="w-5 h-5 text-emerald-600" />,
      focus: ['Random blood glucose testing', 'Hypertension screening', 'Cardiovascular risk mapping'],
    },
    {
      title: 'Specialist Awareness Sessions',
      desc: 'Consultative interactive town halls led by cardiologists, diabetologists, and oncologists addressing early warning signals.',
      icon: <Users className="w-5 h-5 text-indigo-600" />,
      focus: ['Lifestyle chronic illness prevention', 'Cancer screening education', 'Geriatric health guidance'],
    },
    {
      title: 'Eye Health & Vision Awareness',
      desc: 'Refraction clinics identifying cataracts, myopia, and presbyopia, supported by free distribution of reading spectacles.',
      icon: <Eye className="w-5 h-5 text-blue-600" />,
      focus: ['Computer vision syndrome review', 'Optometrist visual acuity testing', 'Corrective lens referrals'],
    },
    {
      title: 'Nutrition & Metabolic Awareness',
      desc: 'Dietitians providing contextual meal guidance focused on regional produce, combating iron-deficiency anemia, and child growth.',
      icon: <Salad className="w-5 h-5 text-amber-600" />,
      focus: ['Anemia mitigation blueprints', 'Affordable wholesome protein diets', 'Metabolic syndrome education'],
    },
    {
      title: 'Women’s Preventive Health',
      desc: 'Dignified, confidential spaces for women to learn about reproductive health, maternal nutrition, and routine mammography/pap guidelines.',
      icon: <HeartPulse className="w-5 h-5 text-rose-600" />,
      focus: ['PCOS awareness & care paths', 'Iron & folate fortification', 'Confidential doctor consultations'],
    },
    {
      title: 'Workplace Health Drives',
      desc: 'Corporate campus health initiatives assessing desk ergonomics, metabolic vitals, and providing executive health counsel.',
      icon: <Briefcase className="w-5 h-5 text-cyan-600" />,
      focus: ['Desk posture evaluations', 'Corporate cholesterol & sugar test', 'Stress electrocardiograms on request'],
    },
    {
      title: 'Preventive Health Awareness',
      desc: 'Interactive visual workshops designed to dispel harmful medical myths, vaccine hesitancy, and encourage annual diagnostic checkups.',
      icon: <ShieldCheck className="w-5 h-5 text-purple-600" />,
      focus: ['Evidence vs myth seminars', 'Immunization schedules across ages', 'Early diagnostic protocols'],
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

        {/* 8 Camp Tracks */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
            Our 8 Community Initiatives
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Comprehensive Preventive Health Tracks
          </h2>
          <p className="text-sm text-slate-600">
            Designed to address the primary preventive health needs of underserved communities and corporate workforces alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {campCategories.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-teal-400 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {item.icon}
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
            </div>
          ))}
        </div>

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
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-100 text-teal-800">
                      {camp.type}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">{camp.date}</span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 mb-1">{camp.title}</h4>

                  <div className="space-y-1.5 text-xs text-slate-500 my-3">
                    <div className="flex items-center space-x-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{camp.location}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>Partner: <strong>{camp.partnerHospital}</strong></span>
                    </div>
                    <div className="flex items-center space-x-1.5 text-teal-700 font-medium">
                      <Users className="w-3.5 h-3.5 shrink-0" />
                      <span>Capacity: {camp.beneficiariesExpected} individuals</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <p className="text-[11px] font-bold text-slate-700 mb-1">Services Provided:</p>
                    <div className="flex flex-wrap gap-1">
                      {camp.services.map((s, i) => (
                        <span key={i} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-500">{camp.time}</span>
                  <button
                    onClick={() =>
                      openRegistrationModal({
                        type: 'camp',
                        id: camp.id,
                        name: camp.title,
                      })
                    }
                    className="px-4 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold transition-colors"
                  >
                    Register for Screening
                  </button>
                </div>
              </div>
            ))}
          </div>
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
                <p>connect@wisdomtherapy.life • +92 317 1224411</p>
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
