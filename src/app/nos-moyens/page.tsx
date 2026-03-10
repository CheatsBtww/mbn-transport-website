'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import { ArrowRight, MapPin, Navigation, Gauge } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const getNosMoyensData = (language: 'fr' | 'en') => {
  if (language === 'en') {
    return {
      title: 'Our Means',
      subtitle: 'A modern and diversified fleet of vehicles to meet all your transport needs.',
      fleetTitle: 'Our vehicle fleet',
      fleetSubtitle: 'Over 700 vehicles and means of transport at your service',
      fleet: [
        { label: 'Light vehicles', desc: 'Cars and vans for fast urban deliveries.', count: '200+', unit: 'Vehicles' },
        { label: 'Heavy vehicles', desc: 'Trucks and trailers for freight transport.', count: '150+', unit: 'Vehicles' },
        { label: 'Refrigerated vehicles', desc: 'Controlled temperature transport for sensitive products.', count: '100+', unit: 'Vehicles' },
        { label: 'Special equipment', desc: 'Crane arms, lifts and handling equipment.', count: '50+', unit: 'Equipment' },
      ],
      specializedTitle: 'Specialized vehicles',
      specialized: [
        { title: 'ADR Transport', desc: 'Approved vehicles for transporting dangerous goods according to ADR regulations.', items: ['ADR trained drivers', 'Vehicles equipped according to regulations', 'Complete monitoring and traceability', 'Specialized insurance'] },
        { title: 'Medical transport', desc: 'Specialized vehicles for transporting health products and medicines.', items: ['Controlled temperature', 'Approved vehicles', 'Trained drivers', 'Complete traceability'] },
        { title: 'Secure vehicles', desc: 'Secure transport for valuables and sensitive documents.', items: ['Armored vehicles', 'Security agents', 'Real-time GPS tracking', 'Strict security protocols'] },
        { title: 'Handling equipment', desc: 'Specialized equipment for handling and lifting.', items: ['Crane arms', 'Lifting platforms', 'Pallet trucks', 'Forklifts'] },
      ],
      technologyTitle: 'Onboard technology',
      tech: [
        { icon: Navigation, title: 'GPS Tracking', desc: 'Real-time tracking of all our vehicles for complete traceability.' },
        { icon: Gauge, title: 'Monitoring', desc: 'Continuous monitoring of vehicle performance and condition.' },
        { icon: MapPin, title: 'Communication', desc: 'Integrated communication system for optimal coordination.' },
      ],
      ctaTitle: 'Need a specialized vehicle?',
      ctaSubtitle: 'Our diverse fleet can meet all your transport needs.',
      ctaButton: 'Request a quote'
    };
  }

  return {
    title: 'Nos moyens',
    subtitle: 'Un parc de véhicules moderne et diversifié pour répondre à tous vos besoins de transport.',
    fleetTitle: 'Notre flotte de véhicules',
    fleetSubtitle: 'Plus de 700 véhicules et moyens de transport à votre service',
    fleet: [
      { label: 'Véhicules légers', desc: 'Voitures et utilitaires pour les livraisons urbaines rapides.', count: '200+', unit: 'Véhicules' },
      { label: 'Poids lourds', desc: 'Camions et remorques pour le transport de marchandises.', count: '150+', unit: 'Véhicules' },
      { label: 'Véhicules frigorifiques', desc: 'Transport à température contrôlée pour produits sensibles.', count: '100+', unit: 'Véhicules' },
      { label: 'Équipements spéciaux', desc: 'Bras de grue, nacelles et matériel de manutention.', count: '50+', unit: 'Équipements' },
    ],
    specializedTitle: 'Véhicules spécialisés',
    specialized: [
      { title: 'Transport ADR', desc: 'Véhicules agréés pour le transport de matières dangereuses selon la réglementation ADR.', items: ['Chauffeurs formés ADR', 'Véhicules équipés selon la réglementation', 'Suivi et traçabilité complets', 'Assurance spécialisée'] },
      { title: 'Transport médical', desc: 'Véhicules spécialisés pour le transport de produits de santé et médicaments.', items: ['Température contrôlée', 'Véhicules agréés', 'Chauffeurs formés', 'Traçabilité complète'] },
      { title: 'Véhicules sécurisés', desc: 'Transport sécurisé pour valeurs et documents sensibles.', items: ['Véhicules blindés', 'Agents de sécurité', 'Suivi GPS en temps réel', 'Protocoles de sécurité stricts'] },
      { title: 'Équipements de manutention', desc: 'Matériel spécialisé pour la manutention et le levage.', items: ['Bras de grue', 'Nacelles élévatrices', 'Transpalettes', 'Chariots élévateurs'] },
    ],
    technologyTitle: 'Technologie embarquée',
    tech: [
      { icon: Navigation, title: 'GPS Tracking', desc: 'Suivi en temps réel de tous nos véhicules pour une traçabilité complète.' },
      { icon: Gauge, title: 'Monitoring', desc: 'Surveillance continue des performances et de l\'état des véhicules.' },
      { icon: MapPin, title: 'Communication', desc: 'Système de communication intégré pour une coordination optimale.' },
    ],
    ctaTitle: 'Besoin d\'un véhicule spécialisé ?',
    ctaSubtitle: 'Notre flotte diversifiée peut répondre à tous vos besoins de transport.',
    ctaButton: 'Demander un devis'
  };
};

export default function NosMoyensPage() {
  const { language } = useLanguage();
  const data = getNosMoyensData(language);

  return (
    <Layout>
      <div className="bg-slate-950">
        {/* Hero */}
        <section className="py-20 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Flotte & équipements</p>
            <h1 className="text-5xl font-extrabold text-white mb-4">{data.title}</h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">{data.subtitle}</p>
          </div>
        </section>

        {/* Fleet overview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Notre parc</p>
              <h2 className="text-4xl font-bold text-white mb-3">{data.fleetTitle}</h2>
              <p className="text-slate-400">{data.fleetSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.fleet.map((item, i) => (
                <div key={i} className="bg-slate-900 border border-slate-700/50 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 card-hover">
                  <div className="text-4xl font-extrabold text-blue-400 mb-1">{item.count}</div>
                  <p className="text-xs text-slate-500 mb-4 uppercase tracking-wide">{item.unit}</p>
                  <h3 className="text-base font-semibold text-white mb-2">{item.label}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized */}
        <section className="py-20 bg-slate-900 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Spécialisations</p>
              <h2 className="text-4xl font-bold text-white">{data.specializedTitle}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.specialized.map((item, i) => (
                <div key={i} className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm mb-5 leading-relaxed">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.items.map((li, j) => (
                      <li key={j} className="flex items-center gap-2 text-slate-300 text-sm">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Technologie</p>
              <h2 className="text-4xl font-bold text-white">{data.technologyTitle}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.tech.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-slate-900 border border-slate-700/50 rounded-2xl p-8 text-center">
                    <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                      <Icon className="h-7 w-7 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-900 border-t border-slate-800">
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
