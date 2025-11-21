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
          className="bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-gray-700 transition-all btn-hover"
          aria-label={isOpen ? "Fermer le chat" : "Ouvrir le chat"}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <div className="relative">
              <MessageCircle className="h-6 w-6" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-800 rounded-full animate-pulse"></div>
              </div>
            </div>
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-lg shadow-2xl border border-gray-300">
          <div className="bg-gray-800 text-white p-4 rounded-t-lg">
            <h3 className="font-semibold text-lg">Besoin d'aide ?</h3>
            <p className="text-sm text-gray-300">Notre équipe est là pour vous</p>
          </div>
          
          <div className="p-4">
            <div className="space-y-3 mb-4">
              <div className="bg-gray-100 rounded-lg p-3 border-l-4 border-gray-800">
                <p className="text-sm text-gray-700">
                  Bonjour ! Comment pouvons-nous vous aider aujourd'hui ?
                </p>
              </div>
            </div>
            
            <div className="space-y-2">
              <Link 
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 hover:border-gray-400 border border-transparent transition-all text-sm flex items-center gap-3"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
                <span className="font-medium">Demander un devis</span>
              </Link>
              <button 
                onClick={handleCallClick}
                className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 hover:border-gray-400 border border-transparent transition-all text-sm flex items-center gap-3"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-medium">Nous appeler</div>
                  <div className="text-xs text-gray-500">01 49 60 56 50</div>
                </div>
              </button>
              <button 
                onClick={handleEmailClick}
                className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 hover:border-gray-400 border border-transparent transition-all text-sm flex items-center gap-3"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-medium">Envoyer un email</div>
                  <div className="text-xs text-gray-500">ismail.iy.pro@gmail.com</div>
                </div>
              </button>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-1">
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

