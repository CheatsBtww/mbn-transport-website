'use client';

import { useState } from 'react';
import { MessageCircle, X, MessageSquare, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCallClick = () => {
    window.location.href = 'tel:0149605650';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:ismail.iy.pro@gmail.com';
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-500 hover:bg-blue-400 text-white p-4 rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-400/40 transition-all duration-200 blue-glow btn-hover"
          aria-label={isOpen ? "Fermer le chat" : "Ouvrir le chat"}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <div className="relative">
              <MessageCircle className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full">
                <span className="absolute inset-0 rounded-full bg-blue-300 animate-ping"></span>
              </span>
            </div>
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-slate-900 rounded-2xl shadow-2xl border border-slate-700">
          <div className="bg-slate-800 border-b border-slate-700 p-4 rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center">
                <MessageCircle className="h-4 w-4 text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">Besoin d&apos;aide ?</h3>
                <p className="text-xs text-slate-400">Notre équipe est là pour vous</p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="mb-4">
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-3">
                <p className="text-sm text-slate-300">
                  Bonjour ! Comment pouvons-nous vous aider aujourd&apos;hui ?
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-left p-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500/50 rounded-xl transition-all text-sm flex items-center gap-3 group"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 rounded-xl flex items-center justify-center transition-colors">
                  <MessageSquare className="h-5 w-5 text-blue-400" />
                </div>
                <span className="font-medium text-slate-200 group-hover:text-white transition-colors">Demander un devis</span>
              </Link>

              <button
                onClick={handleCallClick}
                className="w-full text-left p-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500/50 rounded-xl transition-all text-sm flex items-center gap-3 group"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 rounded-xl flex items-center justify-center transition-colors">
                  <Phone className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <div className="font-medium text-slate-200 group-hover:text-white transition-colors">Nous appeler</div>
                  <div className="text-xs text-slate-500">01 49 60 56 50</div>
                </div>
              </button>

              <button
                onClick={handleEmailClick}
                className="w-full text-left p-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500/50 rounded-xl transition-all text-sm flex items-center gap-3 group"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 rounded-xl flex items-center justify-center transition-colors">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <div className="font-medium text-slate-200 group-hover:text-white transition-colors">Envoyer un email</div>
                  <div className="text-xs text-slate-500">ismail.iy.pro@gmail.com</div>
                </div>
              </button>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-700">
              <p className="text-xs text-slate-500 text-center flex items-center justify-center gap-1">
                <Clock className="h-3 w-3" />
                <span>Réponse moyenne : 2 minutes</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
