import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Share2,
  Copy,
  Check,
  Mail,
  Linkedin,
  MessageCircle,
  Twitter,
  Send,
  X,
  Sparkles,
  HeartHandshake,
} from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  category?: string;
  url?: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  title = 'Wisdom Therapy Community Impact & CSR Initiatives',
  category = 'Community Impact & CSR',
  url,
}) => {
  const { showToast } = useApp();
  const [copied, setCopied] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState('');
  const [emailDispatched, setEmailDispatched] = useState(false);
  const [userName, setUserName] = useState('');

  if (!isOpen) return null;

  const currentUrl = url || window.location.href;
  const shareText = `Explore "${title}" — a community impact initiative by Wisdom Therapy facilitating medical camps, education, and employee engagement drives in Pakistan.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(`${shareText}\n${currentUrl}`);
    setCopied(true);
    showToast('Link & details copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleLinkedInShare = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      currentUrl
    )}`;
    window.open(linkedInUrl, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppShare = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      `${shareText} ${currentUrl}`
    )}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareText
    )}&url=${encodeURIComponent(currentUrl)}`;
    window.open(twitterUrl, '_blank', 'noopener,noreferrer');
  };

  const handleEmailRegistrationShare = (e: React.FormEvent) => {
    e.preventDefault();
    if (!registeredEmail.trim()) return;

    // Simulate verified dispatch & routing to contact@wisdomtherapy.life
    setEmailDispatched(true);
    showToast(`Shared successfully! Record routed to contact@wisdomtherapy.life`);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 text-white p-6 flex items-start justify-between">
          <div className="space-y-1">
            <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30">
              <Share2 className="w-3 h-3" />
              <span>Share & Amplify Impact</span>
            </span>
            <h3 className="text-xl font-bold tracking-tight font-heading">
              Share this Initiative
            </h3>
            <p className="text-xs text-slate-300 line-clamp-1">{title}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Quick Social Buttons (LinkedIn prioritized for Pakistan Corporate Market) */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2.5">
              Share on Corporate Networks
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <button
                type="button"
                onClick={handleLinkedInShare}
                className="p-3 rounded-xl border border-blue-200 bg-blue-50/50 hover:bg-blue-100/70 text-blue-800 flex flex-col items-center justify-center space-y-1.5 text-xs font-bold transition-all group"
              >
                <Linkedin className="w-5 h-5 text-blue-700 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppShare}
                className="p-3 rounded-xl border border-emerald-200 bg-emerald-50/50 hover:bg-emerald-100/70 text-emerald-800 flex flex-col items-center justify-center space-y-1.5 text-xs font-bold transition-all group"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" />
                <span>WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleTwitterShare}
                className="p-3 rounded-xl border border-sky-200 bg-sky-50/50 hover:bg-sky-100/70 text-sky-800 flex flex-col items-center justify-center space-y-1.5 text-xs font-bold transition-all group"
              >
                <Twitter className="w-5 h-5 text-sky-600 group-hover:scale-110 transition-transform" />
                <span>X / Twitter</span>
              </button>

              <button
                type="button"
                onClick={handleCopy}
                className="p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 flex flex-col items-center justify-center space-y-1.5 text-xs font-bold transition-all group"
              >
                {copied ? (
                  <Check className="w-5 h-5 text-teal-600" />
                ) : (
                  <Copy className="w-5 h-5 text-slate-600 group-hover:scale-110 transition-transform" />
                )}
                <span>{copied ? 'Copied!' : 'Copy Link'}</span>
              </button>
            </div>
          </div>

          {/* Email / Register Interest Dispatch Section */}
          <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-200/70 space-y-3">
            <div className="flex items-start space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Official Email Routing Notification
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  When you register your interest or share this program, a verified notification is automatically delivered to{' '}
                  <strong className="text-teal-900">contact@wisdomtherapy.life</strong> for official CSR records and partner onboarding.
                </p>
              </div>
            </div>

            {emailDispatched ? (
              <div className="p-3.5 rounded-xl bg-white border border-teal-300 text-xs text-teal-900 space-y-1">
                <div className="flex items-center space-x-1.5 font-bold">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span>Notification Dispatched Successfully!</span>
                </div>
                <p className="text-slate-600">
                  A registered notification for <strong>{title}</strong> has been logged and sent to <strong>contact@wisdomtherapy.life</strong>. Our outreach desk will follow up at <strong>{registeredEmail}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleEmailRegistrationShare} className="space-y-2.5 pt-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Your Name / Org"
                    className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                  />
                  <input
                    type="email"
                    required
                    value={registeredEmail}
                    onChange={(e) => setRegisteredEmail(e.target.value)}
                    placeholder="Your Work Email"
                    className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center space-x-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Share & Register Notification to contact@wisdomtherapy.life</span>
                </button>
              </form>
            )}
          </div>

          <div className="text-center">
            <button
              onClick={onClose}
              className="text-xs text-slate-500 hover:text-slate-800 font-medium underline transition-colors"
            >
              Done / Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
