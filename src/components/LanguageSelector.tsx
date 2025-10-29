'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors">
        <Globe className="h-4 w-4" />
        <span className="text-sm font-medium">{language.toUpperCase()}</span>
      </button>
      
      <div className="absolute right-0 top-full mt-2 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-1">
          <button
            onClick={() => setLanguage('fr')}
            className={`w-full px-4 py-2 text-left text-sm hover:bg-primary-50 transition-colors ${
              language === 'fr' ? 'bg-primary-50 text-primary-700 font-semibold' : 'text-gray-700'
            }`}
          >
            🇫🇷 Français
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`w-full px-4 py-2 text-left text-sm hover:bg-primary-50 transition-colors ${
              language === 'en' ? 'bg-primary-50 text-primary-700 font-semibold' : 'text-gray-700'
            }`}
          >
            🇬🇧 English
          </button>
        </div>
      </div>
    </div>
  );
}

