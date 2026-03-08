'use client';

import { Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function UrgentBanner() {
  const { t } = useLanguage();

  return (
    <div className="bg-blue-600 text-white py-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
            <span className="font-semibold text-sm tracking-wide">{t('transportUrgent247')}</span>
          </div>

          <div className="hidden sm:block w-px h-4 bg-blue-400"></div>

          <a
            href="tel:+33123456789"
            className="flex items-center gap-2 hover:text-blue-100 transition-colors group"
          >
            <Phone className="h-4 w-4" />
            <span className="font-bold tracking-wide">01 XX XX XX XX</span>
          </a>
        </div>
      </div>
    </div>
  );
}
