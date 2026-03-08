'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const getNotreGroupeData = (language: 'fr' | 'en') => {
  if (language === 'en') {
    return {
      title: 'Our Group',
      subtitle: 'MBN TRANSPORT, specialized in road freight transport, moving and logistics in Europe.',
      companyTitle: 'MBN TRANSPORT',
      paragraph1: 'With over 75 years of experience in transport and express on-demand deliveries, our company has evolved to become the specialist in urban and agile logistics.',
      paragraph2: 'We contribute daily to the success of your missions through proven expertise and know-how, personalized solutions and tailored services, where innovation and digital are the drivers for an improved and ever more successful customer experience.',
      features: ['Over 75 years of experience', 'Innovation and digital', 'Personalized service'],
      imagePlaceholder: 'Group image',
      statsTitle: 'MBN TRANSPORT in figures',
      statsSubtitle: 'Results that demonstrate our excellence',
      stat1Title: 'Years of experience', stat1Subtitle: 'Proven expertise', stat1Value: '+75',
      stat2Title: 'Satisfied clients', stat2Subtitle: 'A trust that commits us', stat2Value: '1000+',
      stat3Title: 'Employees', stat3Subtitle: 'A team dedicated to your service', stat3Value: '+100',
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
    features: ['Plus de 75 ans d\'expérience', 'Innovation et numérique', 'Service personnalisé'],
    imagePlaceholder: 'Image du groupe',
    statsTitle: 'MBN TRANSPORT en chiffres',
    statsSubtitle: 'Des résultats qui témoignent de notre excellence',
    stat1Title: 'Années d\'expérience', stat1Subtitle: 'Un savoir-faire éprouvé', stat1Value: '+75',
    stat2Title: 'Clients satisfaits', stat2Subtitle: 'Une confiance qui nous engage', stat2Value: '1000+',
    stat3Title: 'Collaborateurs', stat3Subtitle: 'Une équipe dédiée à votre service', stat3Value: '+100',
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
      <div className="bg-slate-950">
        {/* Hero */}
        <section className="py-20 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Notre histoire</p>
            <h1 className="text-5xl font-extrabold text-white mb-4">{data.title}</h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">{data.subtitle}</p>
          </div>
        </section>

        {/* Company info */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Depuis 1950</p>
                <h2 className="text-4xl font-bold text-white mb-6">{data.companyTitle}</h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-5">{data.paragraph1}</p>
                <p className="text-slate-400 leading-relaxed mb-8">{data.paragraph2}</p>
                <div className="space-y-3 mb-8">
                  {data.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <span className="text-slate-300">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-black/50">
                <img
                  src="/mbn-archives-1950.jpg"
                  alt="Archives MBN Transport - Années 1950"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-slate-900 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Chiffres clés</p>
              <h2 className="text-4xl font-bold text-white mb-3">{data.statsTitle}</h2>
              <p className="text-slate-400">{data.statsSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { value: data.stat1Value, title: data.stat1Title, sub: data.stat1Subtitle, highlight: true },
                { value: data.stat2Value, title: data.stat2Title, sub: data.stat2Subtitle, highlight: false },
                { value: data.stat3Value, title: data.stat3Title, sub: data.stat3Subtitle, highlight: false },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-10 text-center ${stat.highlight ? 'bg-blue-500/10 border border-blue-500/40' : 'bg-slate-800 border border-slate-700'}`}
                >
                  <div className={`text-6xl font-extrabold mb-3 ${stat.highlight ? 'text-blue-400' : 'text-white'}`}>{stat.value}</div>
                  <p className="text-xl font-semibold text-white mb-1">{stat.title}</p>
                  <p className="text-slate-400 text-sm">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">{data.ctaTitle}</h2>
            <p className="text-lg text-slate-400 mb-8">{data.ctaSubtitle}</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/30"
            >
              {data.ctaButton}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
