import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  LayoutDashboard,
  Users,
  Calendar,
  BookOpen,
  HeartPulse,
  Mail,
  Edit3,
  CheckCircle2,
  TrendingUp,
  FileText,
  Shield,
  Clock,
  Sparkles,
  Download,
  AlertCircle,
  Building,
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const {
    registrations,
    contactInquiries,
    corporateInquiries,
    campRequests,
    expertApplications,
    impactMetrics,
    updateMetric,
    programs,
    events,
    healthCamps,
    experts,
  } = useApp();

  const [activeTab, setActiveTab] = useState<
    'overview' | 'registrations' | 'inquiries' | 'camps' | 'corporate' | 'metrics'
  >('overview');

  // Metric edit state
  const [editingMetricId, setEditingMetricId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');

  const handleSaveMetric = (id: string) => {
    if (editValue.trim()) {
      updateMetric(id, editValue.trim());
      setEditingMetricId(null);
      setEditValue('');
    }
  };

  return (
    <div className="bg-slate-100 min-h-screen py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Admin Header Strip */}
        <div className="bg-slate-900 text-white p-6 rounded-3xl mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl border border-slate-800">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                Administrative Control Panel
              </span>
              <span className="text-xs text-slate-400">v2.4 Prototype</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white font-heading">
              Wisdom Therapy Operations Hub
            </h1>
            <p className="text-xs text-slate-300">
              Manage live participant registrations, corporate proposals, expert applications, and impact statistics.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs bg-slate-800/80 px-3 py-2 rounded-xl border border-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300">Storage: Local State & localStorage Sync</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 mb-6 text-xs scrollbar-none">
          {[
            { id: 'overview', label: 'Overview', icon: <LayoutDashboard className="w-3.5 h-3.5" /> },
            { id: 'registrations', label: `Registrations (${registrations.length})`, icon: <Users className="w-3.5 h-3.5" /> },
            { id: 'inquiries', label: `General Inquiries (${contactInquiries.length})`, icon: <Mail className="w-3.5 h-3.5" /> },
            { id: 'camps', label: `Camp Requests (${campRequests.length})`, icon: <HeartPulse className="w-3.5 h-3.5" /> },
            { id: 'corporate', label: `Corporate Proposals (${corporateInquiries.length})`, icon: <Building className="w-3.5 h-3.5" /> },
            { id: 'metrics', label: 'Impact Statistics Editor', icon: <TrendingUp className="w-3.5 h-3.5" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* 4 Key Count Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="text-xs font-bold text-slate-500 uppercase">Participant Enrollments</div>
                <div className="text-3xl font-black text-slate-900 mt-1 font-heading">
                  {registrations.length}
                </div>
                <div className="text-[11px] text-teal-700 mt-1 font-semibold">Active cohort registrations</div>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="text-xs font-bold text-slate-500 uppercase">Programs Catalog</div>
                <div className="text-3xl font-black text-slate-900 mt-1 font-heading">
                  {programs.length}
                </div>
                <div className="text-[11px] text-slate-500 mt-1">Across 6 multidisciplinary tracks</div>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="text-xs font-bold text-slate-500 uppercase">Pending Inquiries</div>
                <div className="text-3xl font-black text-slate-900 mt-1 font-heading">
                  {contactInquiries.length + corporateInquiries.length + campRequests.length}
                </div>
                <div className="text-[11px] text-amber-600 mt-1 font-semibold">Across public & B2B channels</div>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="text-xs font-bold text-slate-500 uppercase">Community Health Camps</div>
                <div className="text-3xl font-black text-slate-900 mt-1 font-heading">
                  {healthCamps.length}
                </div>
                <div className="text-[11px] text-teal-700 mt-1 font-semibold">Active & scheduled field clinics</div>
              </div>
            </div>

            {/* Quick Summary Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Latest Registrations */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Recent Cohort & Camp Signups
                  </h3>
                  <button
                    onClick={() => setActiveTab('registrations')}
                    className="text-xs text-teal-700 font-bold hover:underline"
                  >
                    View All
                  </button>
                </div>

                <div className="divide-y divide-slate-100">
                  {registrations.slice(0, 4).map((r) => (
                    <div key={r.id} className="py-2.5 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-bold text-slate-900">{r.fullName}</div>
                        <div className="text-slate-500 text-[11px]">{r.itemName}</div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-50 text-teal-800 uppercase">
                        {r.itemType}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Latest Corporate Proposals */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Corporate Proposals in Pipeline
                  </h3>
                  <button
                    onClick={() => setActiveTab('corporate')}
                    className="text-xs text-teal-700 font-bold hover:underline"
                  >
                    View All
                  </button>
                </div>

                <div className="divide-y divide-slate-100">
                  {corporateInquiries.slice(0, 4).map((c) => (
                    <div key={c.id} className="py-2.5 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-bold text-slate-900">{c.organization}</div>
                        <div className="text-slate-500 text-[11px]">{c.trainingRequirement}</div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700">
                        {c.participantsCount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Architecture Integration Blueprint Notice */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2 text-xs text-slate-600">
              <div className="flex items-center space-x-2 text-slate-900 font-bold">
                <AlertCircle className="w-4 h-4 text-teal-600" />
                <span>Production Architecture Notes</span>
              </div>
              <p>
                In a full-scale deployment, this dashboard connects to your secure server-side API endpoints (`/api/admin/*`) backed by Cloud SQL or Firestore with role-based authentication (e.g. Admin, Field Coordinator, Medical Lead). All actions currently persist directly via the application&apos;s client state and browser storage cache.
              </p>
            </div>
          </div>
        )}

        {/* TAB 2: REGISTRATIONS */}
        {activeTab === 'registrations' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="p-5 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">Participant Registrations</h3>
                <p className="text-xs text-slate-500">Live feed of enrollments across masterclasses, talks, and health camps</p>
              </div>
              <span className="text-xs font-semibold text-slate-500">{registrations.length} Records</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-600">
                <thead className="bg-slate-50 text-slate-700 font-bold uppercase tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="p-3.5">Date</th>
                    <th className="p-3.5">Name</th>
                    <th className="p-3.5">Email / Phone</th>
                    <th className="p-3.5">Program / Event</th>
                    <th className="p-3.5">Track Type</th>
                    <th className="p-3.5">Role</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {registrations.map((reg) => (
                    <tr key={reg.id} className="hover:bg-slate-50/80">
                      <td className="p-3.5 text-slate-500 whitespace-nowrap">{reg.registeredAt}</td>
                      <td className="p-3.5 font-bold text-slate-900">{reg.fullName}</td>
                      <td className="p-3.5">
                        <div>{reg.email}</div>
                        <div className="text-slate-400 text-[11px]">{reg.phone}</div>
                      </td>
                      <td className="p-3.5 font-medium text-slate-800">{reg.itemName}</td>
                      <td className="p-3.5">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-50 text-teal-800 uppercase">
                          {reg.itemType}
                        </span>
                      </td>
                      <td className="p-3.5 text-slate-500">{reg.occupation || 'Participant'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: INQUIRIES */}
        {activeTab === 'inquiries' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="p-5 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">General Inquiries & Feedback</h3>
                <p className="text-xs text-slate-500">Incoming inquiries from Contact and Partnership pages</p>
              </div>
              <span className="text-xs font-semibold text-slate-500">{contactInquiries.length} Inquiries</span>
            </div>

            <div className="divide-y divide-slate-100">
              {contactInquiries.map((inq) => (
                <div key={inq.id} className="p-5 hover:bg-slate-50 transition-colors space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-sm text-slate-900">{inq.name}</span>
                      {inq.organization && (
                        <span className="text-xs text-slate-500">({inq.organization})</span>
                      )}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-800">
                      {inq.inquiryType}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-slate-500">
                    <span>Email: <strong>{inq.email}</strong></span>
                    <span>Phone: {inq.phone}</span>
                    <span>Submitted: {inq.submittedAt}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 whitespace-pre-wrap">
                    {inq.message}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: CAMPS */}
        {activeTab === 'camps' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="p-5 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">Health Camp Sponsorship Requests</h3>
                <p className="text-xs text-slate-500">Communities and entities proposing to host or fund medical camps</p>
              </div>
              <span className="text-xs font-semibold text-slate-500">{campRequests.length} Proposals</span>
            </div>

            <div className="divide-y divide-slate-100">
              {campRequests.map((cr) => (
                <div key={cr.id} className="p-5 hover:bg-slate-50 transition-colors space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{cr.organization}</h4>
                      <p className="text-xs text-slate-500">
                        Contact: {cr.contactPerson} ({cr.email} • {cr.phone})
                      </p>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-50 text-teal-800">
                      {cr.campType}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div>
                      <span className="text-slate-400 block font-semibold">Location:</span>
                      <span className="text-slate-800 font-medium">{cr.location}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-semibold">Expected Beneficiaries:</span>
                      <span className="text-slate-800 font-medium">{cr.expectedParticipants}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-semibold">Preferred Date:</span>
                      <span className="text-slate-800 font-medium">{cr.preferredDate}</span>
                    </div>
                  </div>

                  {cr.supportRequired && (
                    <div className="text-xs text-slate-600">
                      <strong>Support / Logistics Notes:</strong> {cr.supportRequired}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: CORPORATE */}
        {activeTab === 'corporate' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="p-5 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">Corporate Training Proposals</h3>
                <p className="text-xs text-slate-500">Custom organizational blueprints and masterclass requests</p>
              </div>
              <span className="text-xs font-semibold text-slate-500">{corporateInquiries.length} Requests</span>
            </div>

            <div className="divide-y divide-slate-100">
              {corporateInquiries.map((corp) => (
                <div key={corp.id} className="p-5 hover:bg-slate-50 transition-colors space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{corp.organization}</h4>
                      <p className="text-xs text-slate-500">
                        Lead Contact: {corp.contactPerson} &lt;{corp.email}&gt;
                      </p>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-900">
                      {corp.trainingRequirement}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div>
                      <span className="text-slate-400 block font-semibold">Cohort Size:</span>
                      <span className="text-slate-800 font-medium">{corp.participantsCount}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-semibold">Delivery Mode:</span>
                      <span className="text-slate-800 font-medium">{corp.deliveryMode}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-semibold">Target Timeline:</span>
                      <span className="text-slate-800 font-medium">{corp.preferredDate}</span>
                    </div>
                  </div>

                  {corp.message && (
                    <div className="text-xs text-slate-600">
                      <strong>Specific Objectives:</strong> {corp.message}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: IMPACT METRICS EDITOR */}
        {activeTab === 'metrics' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Impact Statistics Editor</h3>
              <p className="text-xs text-slate-500">
                Update verified public numbers live. Changes immediately synchronize across the home page and community impact views.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {impactMetrics.map((m) => {
                const isEditing = editingMetricId === m.id;
                return (
                  <div
                    key={m.id}
                    className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 flex flex-col justify-between space-y-3"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                          {m.label}
                        </span>
                        {!isEditing && (
                          <button
                            onClick={() => {
                              setEditingMetricId(m.id);
                              setEditValue(m.value);
                            }}
                            className="p-1 rounded text-slate-400 hover:text-teal-700"
                            title="Edit Metric"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      {isEditing ? (
                        <div className="mt-2 space-y-2">
                          <input
                            type="text"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            className="w-full px-3 py-1.5 text-base font-bold border border-teal-500 rounded-lg bg-white"
                            placeholder="e.g. 28,000+"
                          />
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleSaveMetric(m.id)}
                              className="px-3 py-1 bg-teal-600 text-white rounded-md text-xs font-bold"
                            >
                              Save Live
                            </button>
                            <button
                              onClick={() => setEditingMetricId(null)}
                              className="px-3 py-1 text-slate-500 hover:bg-slate-200 rounded-md text-xs"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="text-3xl font-black text-slate-900 font-heading mt-1">
                          {m.value}
                        </div>
                      )}

                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {m.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-200/80 text-[10px] text-slate-400">
                      Metric ID: {m.id} • Live in Context
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
