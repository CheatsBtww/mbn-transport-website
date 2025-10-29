'use client';

import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const getNotreGroupeData = (language: 'fr' | 'en') => {
  if (language === 'en') {
    return {
      title: 'Our Group',
      subtitle: 'MBN TRANSPORT, specialized in road freight transport, moving and logistics in Europe.',
      companyTitle: 'MBN TRANSPORT',
      paragraph1: 'With over 75 years of experience in transport and express on-demand deliveries, our company has evolved to become the specialist in urban and agile logistics.',
      paragraph2: 'We contribute daily to the success of your missions through proven expertise and know-how, personalized solutions and tailored services, where innovation and digital are the drivers for an improved and ever more successful customer experience.',
    feature1: 'Over 75 years of experience',
    feature2: 'Innovation and digital',
    feature3: 'Personalized service',
      imagePlaceholder: 'Group image',
      statsTitle: 'MBN TRANSPORT in figures',
      statsSubtitle: 'Results that demonstrate our excellence',
      stat1Title: 'Years of experience',
      stat1Subtitle: 'Proven expertise',
      stat2Title: 'Satisfied clients',
      stat2Subtitle: 'A trust that commits us',
      stat3Title: 'Employees',
      stat3Subtitle: 'A team dedicated to your service',
      ctaTitle: 'Join our ecosystem',
      ctaSubtitle: 'Discover how our solutions can transform your logistics.',
      ctaButton: 'Contact us'
    };
  }
  
  return {
    title: 'Notre groupe',
    subtitle: 'MBN TRANSPORT, spécialisée dans le transport routier de marchandises, le déménagement et la logistique en Europe.',
    companyTitle: 'MBN TRANSPORT',
    paragraph1: 'Avec plus de 75 ans d\'expérience dans le transport et les courses à la demande en Express, notre entreprise a su évoluer pour devenir le spécialiste de la logistique urbaine et agile.',
    paragraph2: 'Nous contribuons chaque jour à la réussite de vos missions au travers d\'une expertise et d\'un savoir-faire éprouvé, de solutions personnalisées et services adaptés, dont l\'innovation et le numérique sont les moteurs pour une expérience client améliorée et toujours plus réussie.',
    feature1: 'Plus de 75 ans d\'expérience',
    feature2: 'Innovation et numérique',
    feature3: 'Service personnalisé',
    imagePlaceholder: 'Image du groupe',
    statsTitle: 'MBN TRANSPORT en chiffres',
    statsSubtitle: 'Des résultats qui témoignent de notre excellence',
    stat1Title: 'Années d\'expérience',
    stat1Subtitle: 'Un savoir-faire éprouvé',
    stat2Title: 'Clients satisfaits',
    stat2Subtitle: 'Une confiance qui nous engage',
    stat3Title: 'Collaborateurs',
    stat3Subtitle: 'Une équipe dédiée à votre service',
    ctaTitle: 'Rejoignez notre écosystème',
    ctaSubtitle: 'Découvrez comment nos solutions peuvent transformer votre logistique.',
    ctaButton: 'Nous contacter'
  };
};

export default function NotreGroupePage() {
  const { language } = useLanguage();
  const data = getNotreGroupeData(language);
  
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

        {/* Company Info */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{data.companyTitle}</h2>
                <p className="text-lg text-gray-600 mb-6">
                  {data.paragraph1}
                </p>
                <p className="text-gray-600 mb-8">
                  {data.paragraph2}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-primary-700 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{data.feature1}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-primary-700 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{data.feature2}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-primary-700 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{data.feature3}</span>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg h-96 overflow-hidden shadow-lg">
                <img 
                  src="/mbn-archives-1950.jpg" 
                  alt="Archives MBN Transport - Années 1950" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{data.statsTitle}</h2>
              <p className="text-lg text-gray-600">
                {data.statsSubtitle}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* +75 Années d'expérience */}
              <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="text-5xl font-bold text-primary-700 mb-3">+75</div>
                <p className="text-xl text-gray-900 font-semibold mb-2">{data.stat1Title}</p>
                <p className="text-gray-600">{data.stat1Subtitle}</p>
              </div>

              {/* 1000+ Clients satisfaits */}
              <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-5xl font-bold text-primary-700 mb-3">1000+</div>
                <p className="text-xl text-gray-900 font-semibold mb-2">{data.stat2Title}</p>
                <p className="text-gray-600">{data.stat2Subtitle}</p>
              </div>

              {/* +100 Collaborateurs */}
              <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="text-5xl font-bold text-primary-700 mb-3">+100</div>
                <p className="text-xl text-gray-900 font-semibold mb-2">{data.stat3Title}</p>
                <p className="text-gray-600">{data.stat3Subtitle}</p>
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
