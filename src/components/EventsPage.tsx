import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { EventItem } from '../types';
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Search,
  CheckCircle2,
  Ticket,
  ArrowRight,
  Filter,
  X,
} from 'lucide-react';

export const EventsPage: React.FC = () => {
  const { events, selectedEvent, setSelectedEvent, openRegistrationModal } = useApp();

  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming');
  const [search, setSearch] = useState('');
  const [selectedMode, setSelectedMode] = useState('All');

  const filteredEvents = events.filter((ev) => {
    const matchesTab = tab === 'upcoming' ? !ev.isPast : ev.isPast;
    const matchesSearch =
      search.trim() === '' ||
      ev.title.toLowerCase().includes(search.toLowerCase()) ||
      ev.speaker.toLowerCase().includes(search.toLowerCase()) ||
      ev.venue.toLowerCase().includes(search.toLowerCase());
    const matchesMode = selectedMode === 'All' || ev.mode === selectedMode;
    return matchesTab && matchesSearch && matchesMode;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800">
            Live Dialogues & Community Assemblies
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Wisdom Talks, Workshops & Summits
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Participate in interactive discussions, town halls, and applied skill clinics with pioneers across health, AI, and corporate culture.
          </p>
        </div>

        {/* Filter & Tab Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Upcoming vs Past Tabs */}
            <div className="flex items-center space-x-2 bg-slate-100 p-1 rounded-xl w-full sm:w-auto">
              <button
                onClick={() => setTab('upcoming')}
                className={`flex-1 sm:flex-none px-5 py-2 rounded-lg text-xs font-bold transition-all ${
                  tab === 'upcoming'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Upcoming Sessions ({events.filter((e) => !e.isPast).length})
              </button>
              <button
                onClick={() => setTab('past')}
                className={`flex-1 sm:flex-none px-5 py-2 rounded-lg text-xs font-bold transition-all ${
                  tab === 'past'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Past Event Archive ({events.filter((e) => e.isPast).length})
              </button>
            </div>

            {/* Mode Filter */}
            <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
              <span className="text-xs font-semibold text-slate-500">Format:</span>
              <select
                value={selectedMode}
                onChange={(e) => setSelectedMode(e.target.value)}
                className="px-3 py-1.5 text-xs border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 font-semibold text-slate-700"
              >
                <option value="All">All Formats</option>
                <option value="Virtual Live">Virtual Live</option>
                <option value="In-Person">In-Person</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
          </div>

          {/* Search bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search talks by speaker, title, or venue..."
              className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
            />
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length === 0 ? (
          <div className="py-16 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 space-y-2">
            <Calendar className="w-8 h-8 text-slate-300 mx-auto" />
            <p className="text-sm font-semibold">No events matching your filter criteria.</p>
            <button
              onClick={() => {
                setSearch('');
                setSelectedMode('All');
              }}
              className="text-xs text-teal-700 font-bold hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredEvents.map((ev) => (
              <div
                key={ev.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col sm:flex-row gap-6 group"
              >
                <div className="sm:w-48 h-44 sm:h-auto rounded-xl overflow-hidden bg-slate-100 shrink-0 relative">
                  <img
                    src={ev.image}
                    alt={ev.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-2 left-2 px-2 py-1 rounded-md text-[10px] font-bold bg-white text-slate-800 shadow-xs">
                    {ev.mode}
                  </span>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-3 text-xs text-slate-500 mb-1.5 font-medium">
                      <span className="flex items-center space-x-1 text-teal-700 font-bold">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{ev.date}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{ev.time}</span>
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug mb-2">
                      {ev.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                      {ev.description}
                    </p>

                    <div className="space-y-1 text-xs text-slate-500">
                      <div className="flex items-center space-x-1.5">
                        <User className="w-3.5 h-3.5 text-teal-600" />
                        <span>Speaker: <strong>{ev.speaker}</strong></span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span className="line-clamp-1">{ev.venue}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                    <div className="text-[11px] text-slate-500">
                      {ev.isPast ? (
                        <span className="text-slate-400 font-semibold">Event Concluded</span>
                      ) : (
                        <span>
                          <strong className="text-teal-700">{ev.seatsAvailable}</strong> seats left
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setSelectedEvent(ev)}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100"
                      >
                        Details
                      </button>
                      {!ev.isPast && (
                        <button
                          onClick={() =>
                            openRegistrationModal({
                              type: 'event',
                              id: ev.id,
                              name: ev.title,
                            })
                          }
                          className="px-4 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold shadow-xs transition-colors"
                        >
                          Register Free
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Selected Event Details Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[85vh] flex flex-col">
              <div className="bg-slate-900 text-white p-6 flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                    {selectedEvent.mode}
                  </span>
                  <h3 className="text-xl font-bold mt-1">{selectedEvent.title}</h3>
                  <p className="text-xs text-slate-300">
                    {selectedEvent.date} • {selectedEvent.time}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Event Synopsis
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedEvent.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                  <div>
                    <span className="text-slate-500 font-semibold block">Keynote / Facilitator</span>
                    <span className="text-slate-800 font-bold">{selectedEvent.speaker}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 font-semibold block">Venue</span>
                    <span className="text-slate-800 font-bold">{selectedEvent.venue}</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-teal-50 border border-teal-200 text-xs text-teal-900">
                  <p>
                    <strong>Participant Note:</strong> Materials, session recordings, and attendee Q&A access are shared digitally following the session.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end space-x-3">
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200"
                >
                  Close
                </button>
                {!selectedEvent.isPast && (
                  <button
                    onClick={() => {
                      const e = selectedEvent;
                      setSelectedEvent(null);
                      openRegistrationModal({
                        type: 'event',
                        id: e.id,
                        name: e.title,
                      });
                    }}
                    className="px-5 py-2 rounded-xl bg-teal-600 text-white font-bold text-xs shadow-xs"
                  >
                    Confirm Attendance
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
