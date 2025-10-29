'use client';

import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const getCarriereData = (language: 'fr' | 'en') => {
  if (language === 'en') {
    return {
      title: 'Careers',
      subtitle: 'Join our team and participate in the evolution of urban and agile logistics.',
      section1Title: 'Why join us?',
      section1Text: 'MBN TRANSPORT is a dynamic company specialized in road freight transport and logistics. We offer varied career opportunities in a rapidly evolving sector.',
      valuesTitle: 'Our values',
      value1: 'Innovation and digital at the service of customer experience',
      value2: 'Proven expertise and know-how',
      value3: '360° solutions and services',
      value4: 'Agility and responsiveness',
      positionsTitle: 'Available positions',
      positionsText: 'We are looking for various profiles: drivers, logistics specialists, sales representatives, technicians, and many other professions to support our growth.',
      spontaneousTitle: 'Spontaneous application',
      spontaneousText: 'Can\'t find a position matching your profile? Send us your spontaneous application.',
      spontaneousButton: 'Send my application'
    };
  }
  
  return {
    title: 'Carrière',
    subtitle: 'Rejoignez notre équipe et participez à l\'évolution de la logistique urbaine et agile.',
    section1Title: 'Pourquoi nous rejoindre ?',
    section1Text: 'MBN TRANSPORT est une entreprise dynamique spécialisée dans le transport routier de marchandises et la logistique. Nous offrons des opportunités de carrière variées dans un secteur en pleine évolution.',
    valuesTitle: 'Nos valeurs',
    value1: 'Innovation et numérique au service de l\'expérience client',
    value2: 'Expertise et savoir-faire éprouvé',
    value3: 'Solutions et services à 360°',
    value4: 'Agilité et réactivité',
    positionsTitle: 'Postes disponibles',
    positionsText: 'Nous recherchons des profils variés : chauffeurs, logisticiens, commerciaux, techniciens, et bien d\'autres métiers pour accompagner notre croissance.',
    spontaneousTitle: 'Candidature spontanée',
    spontaneousText: 'Vous ne trouvez pas de poste correspondant à votre profil ? Envoyez-nous votre candidature spontanée.',
    spontaneousButton: 'Envoyer ma candidature'
  };
};

export default function CarrierePage() {
  const { language } = useLanguage();
  const data = getCarriereData(language);
  
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

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{data.section1Title}</h2>
              <p className="text-gray-600 mb-6">
                {data.section1Text}
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{data.valuesTitle}</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>{data.value1}</li>
                <li>{data.value2}</li>
                <li>{data.value3}</li>
                <li>{data.value4}</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{data.positionsTitle}</h3>
              <p className="text-gray-600 mb-6">
                {data.positionsText}
              </p>
              
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-primary-800 mb-2">{data.spontaneousTitle}</h4>
                <p className="text-brand-orange mb-4">
                  {data.spontaneousText}
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-primary-700 text-white px-6 py-2 rounded-md hover:bg-primary-800 transition-colors"
                >
                  {data.spontaneousButton}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
