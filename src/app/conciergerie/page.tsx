'use client';

import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const getConciergerieData = (language: 'fr' | 'en') => {
  if (language === 'en') {
    return {
      title: 'Concierge',
      subtitle: 'High-end concierge services to simplify your professional and personal daily life.',
      servicesTitle: 'Our concierge services',
      servicesSubtitle: 'A complete range of services to meet all your needs',
      service1: 'Reservations',
      service1Desc: 'Restaurant, hotel, show and cultural event reservations.',
      service2: 'Errands',
      service2Desc: 'Personalized errands, meal delivery and various purchases.',
      service3: 'Administrative services',
      service3Desc: 'Management of administrative procedures and various formalities.',
      service4: 'Emergencies',
      service4Desc: '24/7 emergency service for your unexpected needs.',
      service5: 'Location',
      service5Desc: 'Search and location of addresses, services and businesses.',
      service6: 'Customer support',
      service6Desc: 'Personalized support and follow-up of your requests.',
      howTitle: 'How does it work?',
      step1Title: 'Call us',
      step1Desc: 'Contact our team of concierges by phone or via our platform.',
      step2Title: 'Describe your need',
      step2Desc: 'Explain your request and we will offer you the best solution.',
      step3Title: 'We take care of the rest',
      step3Desc: 'Our team takes care of everything and keeps you informed of progress.',
      ctaTitle: 'Ready to simplify your daily life?',
      ctaSubtitle: 'Contact our team of concierges to discover our services.',
      ctaButton: 'Request a quote'
    };
  }
  
  return {
    title: 'Conciergerie',
    subtitle: 'Services de conciergerie haut de gamme pour simplifier votre quotidien professionnel et personnel.',
    servicesTitle: 'Nos services de conciergerie',
    servicesSubtitle: 'Une gamme complète de services pour répondre à tous vos besoins',
    service1: 'Réservations',
    service1Desc: 'Réservation de restaurants, hôtels, spectacles et événements culturels.',
    service2: 'Courses',
    service2Desc: 'Courses personnalisées, livraison de repas et achats divers.',
    service3: 'Services administratifs',
    service3Desc: 'Gestion de démarches administratives et formalités diverses.',
    service4: 'Urgences',
    service4Desc: 'Service d\'urgence 24h/24 pour vos besoins imprévus.',
    service5: 'Localisation',
    service5Desc: 'Recherche et localisation d\'adresses, services et commerces.',
    service6: 'Support client',
    service6Desc: 'Accompagnement personnalisé et suivi de vos demandes.',
    howTitle: 'Comment ça marche ?',
    step1Title: 'Appelez-nous',
    step1Desc: 'Contactez notre équipe de concierges par téléphone ou via notre plateforme.',
    step2Title: 'Décrivez votre besoin',
    step2Desc: 'Expliquez-nous votre demande et nous vous proposons la meilleure solution.',
    step3Title: 'Nous nous occupons du reste',
    step3Desc: 'Notre équipe s\'occupe de tout et vous tient informé de l\'avancement.',
    ctaTitle: 'Prêt à simplifier votre quotidien ?',
    ctaSubtitle: 'Contactez notre équipe de concierges pour découvrir nos services.',
    ctaButton: 'Demander un devis'
  };
};

export default function ConciergeriePage() {
  const { language } = useLanguage();
  const data = getConciergerieData(language);
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{data.title}</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {data.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {data.servicesTitle}
              </h2>
              <p className="text-lg text-gray-600">
                {data.servicesSubtitle}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6 card-hover">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{data.service1}</h3>
                <p className="text-gray-600">
                  {data.service1Desc}
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 card-hover">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{data.service2}</h3>
                <p className="text-gray-600">
                  {data.service2Desc}
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 card-hover">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{data.service3}</h3>
                <p className="text-gray-600">
                  {data.service3Desc}
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 card-hover">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{data.service4}</h3>
                <p className="text-gray-600">
                  {data.service4Desc}
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 card-hover">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{data.service5}</h3>
                <p className="text-gray-600">
                  {data.service5Desc}
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 card-hover">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{data.service6}</h3>
                <p className="text-gray-600">
                  {data.service6Desc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {data.howTitle}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#1f2937' }}>
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{data.step1Title}</h3>
                <p className="text-gray-600">
                  {data.step1Desc}
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#1f2937' }}>
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{data.step2Title}</h3>
                <p className="text-gray-600">
                  {data.step2Desc}
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#1f2937' }}>
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{data.step3Title}</h3>
                <p className="text-gray-600">
                  {data.step3Desc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              {data.ctaTitle}
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              {data.ctaSubtitle}
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary-700 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              {data.ctaButton}
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}

