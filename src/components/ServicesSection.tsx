'use client';

import Link from 'next/link';
import { Truck, Home, Package, Route, Clock, Heart, ConciergeBell, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const getServices = (language: 'fr' | 'en') => {
  if (language === 'en') {
    return [
      { id: 'transport-marchandises', title: 'Goods Transport', icon: Truck, description: 'Road freight transport up to 3.5 tons with driver throughout Europe.', link: '/services/transport-marchandises' },
      { id: 'demenagement', title: 'Moving Services', icon: Home, description: 'Complete moving service with furniture assembly and disassembly.', link: '/services/demenagement' },
      { id: 'convoyage-vehicules', title: 'Vehicle Convoying', icon: Package, description: 'Vehicle transport and convoying throughout Europe.', link: '/services/convoyage-vehicules' },
      { id: 'location-vehicules', title: 'Vehicle Rental', icon: Route, description: 'Industrial vehicle rental with or without driver.', link: '/services/location-vehicules' },
      { id: 'transport-urgent', title: 'Urgent Transport 24/7', icon: Clock, description: 'Urgent delivery 7/7 – 24/24 in France and worldwide. Express service available immediately.', link: '/services/transport-urgent' },
      { id: 'transport-sante', title: 'Health Transport', icon: Heart, description: 'Specialized transport for health products and medicines.', link: '/services/transport-sante' },
      { id: 'import-export', title: 'Import-Export', icon: Package, description: 'Vehicle and goods import-export services.', link: '/services/import-export' },
      { id: 'conciergerie', title: 'Concierge', icon: ConciergeBell, description: 'Concierge and personalized logistics services.', link: '/services/conciergerie' }
    ];
  }

  return [
    { id: 'transport-marchandises', title: 'Transport de marchandises', icon: Truck, description: 'Transport routier de marchandises jusqu\'à 3.5 tonnes avec conducteur dans toute l\'Europe.', link: '/services/transport-marchandises' },
    { id: 'demenagement', title: 'Déménagement', icon: Home, description: 'Service complet de déménagement avec montage et démontage de meubles.', link: '/services/demenagement' },
    { id: 'convoyage-vehicules', title: 'Convoyage de véhicules', icon: Package, description: 'Transport et convoyage de véhicules dans toute l\'Europe.', link: '/services/convoyage-vehicules' },
    { id: 'location-vehicules', title: 'Location de véhicules', icon: Route, description: 'Location de véhicules industriels avec ou sans chauffeur.', link: '/services/location-vehicules' },
    { id: 'transport-urgent', title: 'Transport urgent 24/7', icon: Clock, description: 'Livraison urgente 7j/7 – 24h/24 en France et dans le monde. Service express disponible immédiatement.', link: '/services/transport-urgent' },
    { id: 'transport-sante', title: 'Transport santé', icon: Heart, description: 'Transport spécialisé pour produits de santé et médicaments.', link: '/services/transport-sante' },
    { id: 'import-export', title: 'Import-Export', icon: Package, description: 'Services d\'import-export de véhicules et marchandises.', link: '/services/import-export' },
    { id: 'conciergerie', title: 'Conciergerie', icon: ConciergeBell, description: 'Services de conciergerie et logistique personnalisée.', link: '/services/conciergerie' }
  ];
};

export default function ServicesSection() {
  const { t, language } = useLanguage();
  const services = getServices(language);

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Nos services</p>
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('solutionsAdaptees')}
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Link key={service.id} href={service.link} className="group block">
                <div className="bg-slate-800 border border-slate-700/50 rounded-2xl p-6 h-full hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 card-hover">
                  <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-500/20 group-hover:border-blue-500/40 transition-all">
                    <IconComponent className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-blue-400 text-sm font-medium group-hover:gap-2 transition-all">
                    {t('enSavoirPlus')}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
