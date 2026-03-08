'use client';

import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const getCaseStudyData = (language: 'fr' | 'en') => {
  if (language === 'en') {
    return {
      requestTitle: 'Why Choose MBN TRANSPORT?',
      requestText: 'With over 75 years of experience in the transport sector, we offer reliable and flexible logistics solutions adapted to your needs.',
      solutionTitle: 'Our Commitment',
      solutionText: 'A fleet of 150 modern vehicles, a professional and trained team, and cutting-edge technology to track your shipments in real time. We operate 24/7 to guarantee optimal responsiveness.',
      resultTitle: 'Your Benefits',
      resultText: 'Fast and secure deliveries, personalized service, and transparent pricing. Join our 1000+ satisfied customers who trust us every day for their transport needs.',
      ctaText: 'Need a quick and personalized quote or simply have a question?',
      ctaButton: 'Send my request',
      features: [
        '75+ years of proven expertise',
        'Fleet of 150+ modern vehicles',
        '24/7 emergency service',
        '1000+ satisfied clients',
        'Pan-European coverage',
        'Specialized transport solutions'
      ]
    };
  }

  return {
    requestTitle: 'Pourquoi Choisir MBN TRANSPORT ?',
    requestText: 'Avec plus de 75 ans d\'expérience dans le transport, nous proposons des solutions logistiques fiables et flexibles adaptées à vos besoins.',
    solutionTitle: 'Notre Engagement',
    solutionText: 'Une flotte de 150 véhicules modernes, une équipe professionnelle et formée, et une technologie de pointe pour suivre vos expéditions en temps réel. Nous opérons 24h/24 et 7j/7 pour garantir une réactivité optimale.',
    resultTitle: 'Vos Avantages',
    resultText: 'Des livraisons rapides et sécurisées, un service personnalisé et des tarifs transparents. Rejoignez nos 1000+ clients satisfaits qui nous font confiance chaque jour pour leurs besoins en transport.',
    ctaText: 'Besoin d\'un devis rapide et personnalisé ou simplement d\'une question ?',
    ctaButton: 'Envoyer ma demande',
    features: [
      '75+ ans d\'expertise éprouvée',
      'Flotte de 150+ véhicules modernes',
      'Service d\'urgence 24h/24 7j/7',
      '1000+ clients satisfaits',
      'Couverture paneuropéenne',
      'Solutions de transport spécialisées'
    ]
  };
};

export default function CaseStudySection() {
  const { language } = useLanguage();
  const data = getCaseStudyData(language);

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: content */}
          <div>
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Notre expertise</p>
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">{data.requestTitle}</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              {data.requestText}
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              {data.solutionText}
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {data.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-400/40 blue-glow"
            >
              {data.ctaButton}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Right: card with logo + CTA */}
          <div className="flex flex-col gap-6">
            {/* Company card */}
            <div className="bg-slate-900 border border-slate-700/50 rounded-2xl p-8 flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-white rounded-2xl shadow-lg">
                <img
                  src="/logo-mbn.png"
                  alt="MBN TRANSPORT Logo"
                  className="object-contain w-auto"
                  style={{ height: '120px' }}
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">MBN TRANSPORT</h3>
              <p className="text-slate-400 text-sm mb-6">{data.ctaText}</p>
              <Link
                href="/contact"
                className="w-full text-center bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-blue-500/50 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
              >
                {data.ctaButton}
              </Link>
            </div>

            {/* Benefits card */}
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6">
              <h4 className="text-blue-400 font-semibold text-sm uppercase tracking-wide mb-4">{data.resultTitle}</h4>
              <p className="text-slate-300 text-sm leading-relaxed">{data.resultText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
