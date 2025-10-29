'use client';

import { Phone, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function UrgentBanner() {
  const { t } = useLanguage();

  return (
    <div className="bg-gradient-to-r from-amber-800/60 via-amber-700 to-amber-800/60 text-white py-3 shadow-md" style={{background: 'linear-gradient(to right, rgba(180, 130, 40, 0.6), rgb(180, 130, 40), rgba(180, 130, 40, 0.6))'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center sm:text-left">
          {/* Service 24/7 */}
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 animate-pulse" />
            <span className="font-bold text-lg">{t('transportUrgent247')}</span>
          </div>

          {/* Separator */}
          <div className="hidden sm:block w-px h-6 bg-white/30"></div>

          {/* Phone */}
          <a 
            href="tel:+33123456789" 
            className="flex items-center gap-2 hover:scale-105 transition-transform group"
          >
            <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors">
              <Phone className="h-4 w-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs opacity-90">{t('appelezNous')}</span>
              <span className="font-bold text-xl tracking-wide">01 XX XX XX XX</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

