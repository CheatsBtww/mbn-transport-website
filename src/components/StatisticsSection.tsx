'use client';

import { MapPin, Users, Clock, Truck, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const getStatistics = (language: 'fr' | 'en') => {
  if (language === 'en') {
    return [
      {
        icon: MapPin,
        number: '1',
        label: 'Main agency'
      },
      {
        icon: Truck,
        number: '150',
        label: 'Vehicles available'
      },
      {
        icon: Users,
        number: '1000+',
        label: 'Satisfied clients'
      },
      {
        icon: Clock,
        number: '24/7',
        label: 'Service available'
      },
      {
        icon: Award,
        number: '+75',
        label: 'Years of experience'
      }
    ];
  }
  
  return [
    {
      icon: MapPin,
      number: '1',
      label: 'Agence principale'
    },
    {
      icon: Truck,
      number: '150',
      label: 'Véhicules disponibles'
    },
    {
      icon: Users,
      number: '1000+',
      label: 'Clients satisfaits'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Service disponible'
    },
    {
      icon: Award,
      number: '+75',
      label: 'Années d\'expérience'
    }
  ];
};

export default function StatisticsSection() {
  const { t, language } = useLanguage();
  const statistics = getStatistics(language);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('dejaAnsService')}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {statistics.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <IconComponent className="h-8 w-8 text-primary-700" />
                </div>
                <div className="text-3xl font-bold text-primary-700 mb-2">
                  {stat.number}
                  {stat.unit && <span className="text-lg">{stat.unit}</span>}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
