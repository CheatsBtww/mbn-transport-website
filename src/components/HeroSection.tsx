'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full py-32 overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/hero-mbn.jpg"
          alt="MBN TRANSPORT - Camion de transport"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay filter */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                {t('heroTitle')}
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-blue-300 mb-6">
                {t('heroSubtitle')}
              </h2>
              <p className="text-lg text-gray-100 leading-relaxed">
                {t('heroDescription')}
              </p>
            </div>
          </div>
          
          {/* Right side - Empty space to maintain layout */}
          <div className="relative">
            {/* Empty div to maintain grid layout */}
          </div>
        </div>
      </div>
    </section>
  );
}
