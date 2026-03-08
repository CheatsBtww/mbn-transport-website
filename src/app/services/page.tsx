'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const getServicesPageData = (language: 'fr' | 'en') => {
  if (language === 'en') {
    return {
      title: 'Our Services',
      subtitle: 'Discover our complete range of transport and logistics services adapted to all your needs.',
      ctaTitle: 'Need a personalized service?',
      ctaSubtitle: 'Contact us to discuss your specific needs.',
      ctaButton: 'Contact us',
      learnMore: 'Learn more',
      services: [
        { id: 'coursier', title: 'Courier', description: 'Home delivery for 1 or 2 people.', link: '/services/coursier' },
        { id: 'livraison-domicile', title: 'Home Delivery', subtitle: 'for 1 or 2 people', description: 'Last mile delivery. Agency open 7/7 – 24/7.', link: '/services/livraison-domicile' },
        { id: 'logistique-services', title: 'Logistics & Services', description: '60,000 m² of storage. Pallet and parcel preparation and shipping.', link: '/services/logistique-services' },
        { id: 'distributions-dediees', title: 'Dedicated Distributions', description: 'From your platforms or our platforms. Cross docking.', link: '/services/distributions-dediees' },
        { id: 'fret-solutions', title: 'Freight Solutions', description: 'Multimodal transport in France and Europe.', link: '/services/fret-solutions' },
        { id: 'transport-urgent', title: 'Urgent Transport', description: 'Urgent delivery in France and worldwide. 7/7 – 24/7.', link: '/services/transport-urgent' },
        { id: 'transport-sante', title: 'Healthcare Transport', description: 'Secure delivery of blood products and health products.', link: '/services/transport-sante' },
        { id: 'conciergerie', title: 'Concierge', description: 'Storage, order preparation, packaging.', link: '/services/conciergerie' }
      ]
    };
  }

  return {
    title: 'Nos services',
    subtitle: 'Découvrez notre gamme complète de services de transport et logistique adaptés à tous vos besoins.',
    ctaTitle: 'Besoin d\'un service personnalisé ?',
    ctaSubtitle: 'Contactez-nous pour discuter de vos besoins spécifiques.',
    ctaButton: 'Nous contacter',
    learnMore: 'En savoir plus',
    services: [
      { id: 'coursier', title: 'Coursier', description: 'Livraison à domicile à 1 ou 2 pers.', link: '/services/coursier' },
      { id: 'livraison-domicile', title: 'Livraison à domicile', subtitle: 'à 1 ou 2 personnes', description: 'Livraison du dernier Km. Agence ouverte 7J/7 – H24.', link: '/services/livraison-domicile' },
      { id: 'logistique-services', title: 'Logistique & Services', description: '60 000 m² de stockage. Préparation et expédition de palettes et colis.', link: '/services/logistique-services' },
      { id: 'distributions-dediees', title: 'Distributions dédiées', description: 'Depuis vos plateformes ou nos plateformes. Cross docking.', link: '/services/distributions-dediees' },
      { id: 'fret-solutions', title: 'Fret solutions', description: 'Transport multimodal en France et en Europe.', link: '/services/fret-solutions' },
      { id: 'transport-urgent', title: 'Transport urgent', description: 'Livraison urgente en France et dans le monde. 7j/7 – H24.', link: '/services/transport-urgent' },
      { id: 'transport-sante', title: 'Transport santé', description: 'Livraison sécurisée des PSL et produits de santé.', link: '/services/transport-sante' },
      { id: 'conciergerie', title: 'Conciergerie', description: 'Stockage, préparation de commande, conditionnement.', link: '/services/conciergerie' }
    ]
  };
};

export default function ServicesPage() {
  const { language } = useLanguage();
  const pageData = getServicesPageData(language);

  return (
    <Layout>
      <div className="bg-slate-950">
        {/* Hero */}
        <section className="py-20 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Services</p>
            <h1 className="text-5xl font-extrabold text-white mb-4">{pageData.title}</h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">{pageData.subtitle}</p>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pageData.services.map((service) => (
                <div key={service.id} className="bg-slate-900 border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 card-hover group">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">{service.title}</h3>
                  {service.subtitle && (
                    <p className="text-sm text-blue-400 mb-2 font-medium">{service.subtitle}</p>
                  )}
                  <p className="text-slate-400 text-sm mb-5 leading-relaxed">{service.description}</p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors group-hover:gap-2.5"
                  >
                    {pageData.learnMore}
                    <ArrowRight className="h-4 w-4 transition-all" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-900 border-t border-slate-800">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">{pageData.ctaTitle}</h2>
            <p className="text-lg text-slate-400 mb-8">{pageData.ctaSubtitle}</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-400/40"
            >
              {pageData.ctaButton}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
