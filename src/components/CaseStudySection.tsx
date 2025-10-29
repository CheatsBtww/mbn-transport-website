'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const getCaseStudyData = (language: 'fr' | 'en') => {
  if (language === 'en') {
    return {
      requestTitle: 'Why Choose MBN TRANSPORT?',
      requestText: 'With over 75 years of experience in the transport sector, we offer reliable and flexible logistics solutions adapted to your needs. Whether for urgent deliveries, moving services or specialized transport, we are your trusted partner.',
      solutionTitle: 'Our Commitment',
      solutionText: 'A fleet of 150 modern vehicles, a professional and trained team, and cutting-edge technology to track your shipments in real time. We operate 24/7 to guarantee optimal responsiveness.',
      resultTitle: 'Your Benefits',
      resultText: 'Fast and secure deliveries, personalized service, and transparent pricing. Join our 1000+ satisfied customers who trust us every day for their transport needs.',
      ctaText: 'Need a quick and personalized quote or simply have a question?',
      ctaButton: 'Send my request'
    };
  }
  
  return {
    requestTitle: 'Pourquoi Choisir MBN TRANSPORT ?',
    requestText: 'Avec plus de 75 ans d\'expérience dans le transport, nous proposons des solutions logistiques fiables et flexibles adaptées à vos besoins. Que ce soit pour des livraisons urgentes, des déménagements ou du transport spécialisé, nous sommes votre partenaire de confiance.',
    solutionTitle: 'Notre Engagement',
    solutionText: 'Une flotte de 150 véhicules modernes, une équipe professionnelle et formée, et une technologie de pointe pour suivre vos expéditions en temps réel. Nous opérons 24h/24 et 7j/7 pour garantir une réactivité optimale.',
    resultTitle: 'Vos Avantages',
    resultText: 'Des livraisons rapides et sécurisées, un service personnalisé et des tarifs transparents. Rejoignez nos 1000+ clients satisfaits qui nous font confiance chaque jour pour leurs besoins en transport.',
    ctaText: 'Besoin d\'un devis rapide et personnalisé ou simplement d\'une question ?',
    ctaButton: 'Envoyer ma demande'
  };
};

export default function CaseStudySection() {
  const { language } = useLanguage();
  const data = getCaseStudyData(language);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Case Study Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{data.requestTitle}</h3>
              <p className="text-gray-600 mb-8">
                {data.requestText}
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{data.solutionTitle}</h3>
              <p className="text-gray-600 mb-8">
                {data.solutionText}
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{data.resultTitle}</h3>
              <p className="text-gray-600">
                {data.resultText}
              </p>
            </div>
          </div>
          
          {/* Logo Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-8 shadow-sm h-full flex flex-col items-center justify-center">
                  <div className="mb-3">
                    <img
                      src="/logo-mbn.png"
                      alt="MBN TRANSPORT Logo"
                      className="object-contain w-auto"
                      style={{ height: '170px' }}
                    />
                  </div>
              <p className="text-gray-600 text-center mb-4">
                {data.ctaText}
              </p>
              <Link 
                href="/contact"
                className="inline-block text-white px-8 py-4 rounded-lg font-bold transition-all shadow-xl text-lg hover:opacity-90"
                style={{ backgroundColor: 'rgb(180, 130, 40)' }}
              >
                {data.ctaButton}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

