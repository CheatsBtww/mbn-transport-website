'use client';

import Link from 'next/link';
import { Truck, Home, Package, Route, Clock, Heart, ConciergeBell } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const getServices = (language: 'fr' | 'en') => {
  if (language === 'en') {
    return [
      {
        id: 'transport-marchandises',
        title: 'Goods Transport',
        icon: Truck,
        description: 'Road freight transport up to 3.5 tons with driver throughout Europe.',
        link: '/services/transport-marchandises'
      },
      {
        id: 'demenagement',
        title: 'Moving Services',
        icon: Home,
        description: 'Complete moving service with furniture assembly and disassembly.',
        link: '/services/demenagement'
      },
      {
        id: 'convoyage-vehicules',
        title: 'Vehicle Convoying',
        icon: Package,
        description: 'Vehicle transport and convoying throughout Europe.',
        link: '/services/convoyage-vehicules'
      },
      {
        id: 'location-vehicules',
        title: 'Vehicle Rental',
        icon: Route,
        description: 'Industrial vehicle rental with or without driver.',
        link: '/services/location-vehicules'
      },
      {
        id: 'transport-urgent',
        title: 'Urgent Transport 24/7',
        icon: Clock,
        description: 'Urgent delivery 7/7 – 24/24 in France and worldwide. Express service available immediately.',
        link: '/services/transport-urgent'
      },
      {
        id: 'transport-sante',
        title: 'Health Transport',
        icon: Heart,
        description: 'Specialized transport for health products and medicines.',
        link: '/services/transport-sante'
      },
      {
        id: 'import-export',
        title: 'Import-Export',
        icon: Package,
        description: 'Vehicle and goods import-export services.',
        link: '/services/import-export'
      },
      {
        id: 'conciergerie',
        title: 'Concierge',
        icon: ConciergeBell,
        description: 'Concierge and personalized logistics services.',
        link: '/services/conciergerie'
      }
    ];
  }
  
  return [
    {
      id: 'transport-marchandises',
      title: 'Transport de marchandises',
      icon: Truck,
      description: 'Transport routier de marchandises jusqu\'à 3.5 tonnes avec conducteur dans toute l\'Europe.',
      link: '/services/transport-marchandises'
    },
    {
      id: 'demenagement',
      title: 'Déménagement',
      icon: Home,
      description: 'Service complet de déménagement avec montage et démontage de meubles.',
      link: '/services/demenagement'
    },
    {
      id: 'convoyage-vehicules',
      title: 'Convoyage de véhicules',
      icon: Package,
      description: 'Transport et convoyage de véhicules dans toute l\'Europe.',
      link: '/services/convoyage-vehicules'
    },
    {
      id: 'location-vehicules',
      title: 'Location de véhicules',
      icon: Route,
      description: 'Location de véhicules industriels avec ou sans chauffeur.',
      link: '/services/location-vehicules'
    },
    {
      id: 'transport-urgent',
      title: 'Transport urgent 24/7',
      icon: Clock,
      description: 'Livraison urgente 7j/7 – 24h/24 en France et dans le monde. Service express disponible immédiatement.',
      link: '/services/transport-urgent'
    },
    {
      id: 'transport-sante',
      title: 'Transport santé',
      icon: Heart,
      description: 'Transport spécialisé pour produits de santé et médicaments.',
      link: '/services/transport-sante'
    },
    {
      id: 'import-export',
      title: 'Import-Export',
      icon: Package,
      description: 'Services d\'import-export de véhicules et marchandises.',
      link: '/services/import-export'
    },
    {
      id: 'conciergerie',
      title: 'Conciergerie',
      icon: ConciergeBell,
      description: 'Services de conciergerie et logistique personnalisée.',
      link: '/services/conciergerie'
    }
  ];
};

export default function ServicesSection() {
  const { t, language } = useLanguage();
  const services = getServices(language);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('solutionsAdaptees')}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="group">
                <Link href={service.link} className="block">
                  <div className="bg-gray-50 rounded-lg p-6 h-full hover:shadow-lg transition-all duration-300 card-hover border-2 border-transparent hover:border-primary-200">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors shadow-md">
                        <IconComponent className="h-8 w-8 text-primary-700" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 flex-grow">
                        {service.description}
                      </p>
                      <span className="text-primary-700 font-medium text-sm hover:text-brand-orange transition-colors">
                        {t('enSavoirPlus')}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
