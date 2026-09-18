import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Calendar,
  Clock,
  MapPin,
  User,
  ArrowRight,
  Sparkles,
  Ticket,
  Laptop,
} from 'lucide-react';

export const UpcomingEventsSection: React.FC = () => {
  const { events, setSelectedEvent, openRegistrationModal, setCurrentPage } = useApp();

  const upcoming = events.filter((ev) => !ev.isPast).slice(0, 4);

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800">
              <Calendar className="w-3.5 h-3.5" />
              <span>Live Dialogue & Community Gathering</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Upcoming Events & Wisdom Talks
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Connect with leading practitioners, join interactive problem-solving workshops, or support upcoming grassroots health camps.
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('events')}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl border border-slate-300 hover:border-teal-600 text-slate-800 hover:text-teal-700 font-bold text-xs transition-colors flex items-center space-x-2"
          >
            <span>View All Events ({events.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {upcoming.map((ev) => (
            <div
              key={ev.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row gap-6 group"
            >
              {/* Event Image */}
              <div className="sm:w-48 h-44 sm:h-auto rounded-xl overflow-hidden bg-slate-100 shrink-0 relative">
                <img
                  src={ev.image}
                  alt={ev.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 left-2 px-2 py-1 rounded-md text-[10px] font-bold bg-white/95 text-slate-800 backdrop-blur-xs shadow-xs">
                  {ev.mode}
                </div>
              </div>

              {/* Event Details */}
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

                {/* Bottom Bar with Seats & Register */}
                <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <div className="text-[11px] text-slate-500">
                    <span className="font-bold text-teal-700">{ev.seatsAvailable}</span> of {ev.seatsTotal} seats open
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        setSelectedEvent(ev);
                        setCurrentPage('events');
                      }}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
                    >
                      Details
                    </button>
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
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
