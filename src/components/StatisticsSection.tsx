'use client';

import { MapPin, Users, Clock, Truck, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const getStatistics = (language: 'fr' | 'en') => {
  if (language === 'en') {
    return [
      { icon: Award, number: '+75', label: 'Years of experience', highlight: true },
      { icon: Truck, number: '150', label: 'Vehicles available', highlight: false },
      { icon: Users, number: '1000+', label: 'Satisfied clients', highlight: false },
      { icon: Clock, number: '24/7', label: 'Service available', highlight: false },
      { icon: MapPin, number: '1', label: 'Main agency', highlight: false },
    ];
  }

  return [
    { icon: Award, number: '+75', label: 'Années d\'expérience', highlight: true },
    { icon: Truck, number: '150', label: 'Véhicules disponibles', highlight: false },
    { icon: Users, number: '1000+', label: 'Clients satisfaits', highlight: false },
    { icon: Clock, number: '24/7', label: 'Service disponible', highlight: false },
    { icon: MapPin, number: '1', label: 'Agence principale', highlight: false },
  ];
};

export default function StatisticsSection() {
  const { t, language } = useLanguage();
  const statistics = getStatistics(language);

  return (
    <section className="py-20 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Chiffres clés</p>
          <h2 className="text-4xl font-bold text-white">
            {t('dejaAnsService')}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {statistics.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className={`relative rounded-2xl p-6 text-center transition-all duration-300 ${
                  stat.highlight
                    ? 'bg-blue-500/10 border border-blue-500/40 shadow-lg shadow-blue-500/10'
                    : 'bg-slate-800/50 border border-slate-700/50 hover:border-slate-600'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                  stat.highlight ? 'bg-blue-500/20 border border-blue-400/30' : 'bg-slate-700 border border-slate-600'
                }`}>
                  <IconComponent className={`h-6 w-6 ${stat.highlight ? 'text-blue-400' : 'text-slate-300'}`} />
                </div>
                <div className={`text-4xl font-extrabold mb-1 ${stat.highlight ? 'text-blue-400' : 'text-white'}`}>
                  {stat.number}
                </div>
                <p className={`text-sm font-medium ${stat.highlight ? 'text-blue-300' : 'text-slate-400'}`}>
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
