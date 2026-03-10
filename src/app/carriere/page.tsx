'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const getCarriereData = (language: 'fr' | 'en') => {
  if (language === 'en') {
    return {
      title: 'Careers',
      subtitle: 'Join our team and participate in the evolution of urban and agile logistics.',
      section1Title: 'Why join us?',
      section1Text: 'MBN TRANSPORT is a dynamic company specialized in road freight transport and logistics. We offer varied career opportunities in a rapidly evolving sector.',
      valuesTitle: 'Our values',
      values: [
        'Innovation and digital at the service of customer experience',
        'Proven expertise and know-how',
        '360° solutions and services',
        'Agility and responsiveness'
      ],
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
    values: [
      'Innovation et numérique au service de l\'expérience client',
      'Expertise et savoir-faire éprouvé',
      'Solutions et services à 360°',
      'Agilité et réactivité'
    ],
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
      <div className="bg-slate-950">
        {/* Hero */}
        <section className="py-20 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Rejoignez-nous</p>
            <h1 className="text-5xl font-extrabold text-white mb-4">{data.title}</h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">{data.subtitle}</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8">
              {/* Why join */}
              <div className="bg-slate-900 border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">{data.section1Title}</h2>
                <p className="text-slate-400 leading-relaxed">{data.section1Text}</p>
              </div>

              {/* Values */}
              <div className="bg-slate-900 border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">{data.valuesTitle}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.values.map((value, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Positions */}
              <div className="bg-slate-900 border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">{data.positionsTitle}</h3>
                <p className="text-slate-400 leading-relaxed">{data.positionsText}</p>
              </div>

              {/* CTA card */}
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-white mb-2">{data.spontaneousTitle}</h4>
                <p className="text-slate-300 mb-6">{data.spontaneousText}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/30"
                >
                  {data.spontaneousButton}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
