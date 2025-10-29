'use client';

import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const getNosMoyensData = (language: 'fr' | 'en') => {
  if (language === 'en') {
    return {
      title: 'Our Means',
      subtitle: 'A modern and diversified fleet of vehicles to meet all your transport needs.',
      fleetTitle: 'Our vehicle fleet',
      fleetSubtitle: 'Over 700 vehicles and means of transport at your service',
      lightTitle: 'Light vehicles',
      lightDesc: 'Cars and vans for fast urban deliveries.',
      lightLabel: 'Vehicles',
      heavyTitle: 'Heavy vehicles',
      heavyDesc: 'Trucks and trailers for freight transport.',
      heavyLabel: 'Vehicles',
      fridgeTitle: 'Refrigerated vehicles',
      fridgeDesc: 'Controlled temperature transport for sensitive products.',
      fridgeLabel: 'Vehicles',
      specialTitle: 'Special equipment',
      specialDesc: 'Crane arms, lifts and handling equipment.',
      specialLabel: 'Equipment',
      specializedTitle: 'Specialized vehicles',
      adrTitle: 'ADR Transport',
      adrDesc: 'Approved vehicles for transporting dangerous goods according to ADR regulations.',
      adrList1: '• ADR trained drivers',
      adrList2: '• Vehicles equipped according to regulations',
      adrList3: '• Complete monitoring and traceability',
      adrList4: '• Specialized insurance',
      medicalTitle: 'Medical transport',
      medicalDesc: 'Specialized vehicles for transporting health products and medicines.',
      medicalList1: '• Controlled temperature',
      medicalList2: '• Approved vehicles',
      medicalList3: '• Trained drivers',
      medicalList4: '• Complete traceability',
      secureTitle: 'Secure vehicles',
      secureDesc: 'Secure transport for valuables and sensitive documents.',
      secureList1: '• Armored vehicles',
      secureList2: '• Security agents',
      secureList3: '• Real-time GPS tracking',
      secureList4: '• Strict security protocols',
      handlingTitle: 'Handling equipment',
      handlingDesc: 'Specialized equipment for handling and lifting.',
      handlingList1: '• Crane arms',
      handlingList2: '• Lifting platforms',
      handlingList3: '• Pallet trucks',
      handlingList4: '• Forklifts',
      technologyTitle: 'Onboard technology',
      gpsTitle: 'GPS Tracking',
      gpsDesc: 'Real-time tracking of all our vehicles for complete traceability.',
      monitoringTitle: 'Monitoring',
      monitoringDesc: 'Continuous monitoring of vehicle performance and condition.',
      commTitle: 'Communication',
      commDesc: 'Integrated communication system for optimal coordination.',
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
    lightTitle: 'Véhicules légers',
    lightDesc: 'Voitures et utilitaires pour les livraisons urbaines rapides.',
    lightLabel: 'Véhicules',
    heavyTitle: 'Poids lourds',
    heavyDesc: 'Camions et remorques pour le transport de marchandises.',
    heavyLabel: 'Véhicules',
    fridgeTitle: 'Véhicules frigorifiques',
    fridgeDesc: 'Transport à température contrôlée pour produits sensibles.',
    fridgeLabel: 'Véhicules',
    specialTitle: 'Équipements spéciaux',
    specialDesc: 'Bras de grue, nacelles et matériel de manutention.',
    specialLabel: 'Équipements',
    specializedTitle: 'Véhicules spécialisés',
    adrTitle: 'Transport ADR',
    adrDesc: 'Véhicules agréés pour le transport de matières dangereuses selon la réglementation ADR.',
    adrList1: '• Chauffeurs formés ADR',
    adrList2: '• Véhicules équipés selon la réglementation',
    adrList3: '• Suivi et traçabilité complets',
    adrList4: '• Assurance spécialisée',
    medicalTitle: 'Transport médical',
    medicalDesc: 'Véhicules spécialisés pour le transport de produits de santé et médicaments.',
    medicalList1: '• Température contrôlée',
    medicalList2: '• Véhicules agréés',
    medicalList3: '• Chauffeurs formés',
    medicalList4: '• Traçabilité complète',
    secureTitle: 'Véhicules sécurisés',
    secureDesc: 'Transport sécurisé pour valeurs et documents sensibles.',
    secureList1: '• Véhicules blindés',
    secureList2: '• Agents de sécurité',
    secureList3: '• Suivi GPS en temps réel',
    secureList4: '• Protocoles de sécurité stricts',
    handlingTitle: 'Équipements de manutention',
    handlingDesc: 'Matériel spécialisé pour la manutention et le levage.',
    handlingList1: '• Bras de grue',
    handlingList2: '• Nacelles élévatrices',
    handlingList3: '• Transpalettes',
    handlingList4: '• Chariots élévateurs',
    technologyTitle: 'Technologie embarquée',
    gpsTitle: 'GPS Tracking',
    gpsDesc: 'Suivi en temps réel de tous nos véhicules pour une traçabilité complète.',
    monitoringTitle: 'Monitoring',
    monitoringDesc: 'Surveillance continue des performances et de l\'état des véhicules.',
    commTitle: 'Communication',
    commDesc: 'Système de communication intégré pour une coordination optimale.',
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

        {/* Fleet Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {data.fleetTitle}
              </h2>
              <p className="text-lg text-gray-600">
                {data.fleetSubtitle}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 rounded-lg p-6 text-center card-hover">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{data.lightTitle}</h3>
                <p className="text-gray-600 mb-4">
                  {data.lightDesc}
                </p>
                <div className="text-2xl font-bold text-primary-700">200+</div>
                <p className="text-sm text-gray-500">{data.lightLabel}</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 text-center card-hover">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{data.heavyTitle}</h3>
                <p className="text-gray-600 mb-4">
                  {data.heavyDesc}
                </p>
                <div className="text-2xl font-bold text-primary-700">150+</div>
                <p className="text-sm text-gray-500">{data.heavyLabel}</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 text-center card-hover">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{data.fridgeTitle}</h3>
                <p className="text-gray-600 mb-4">
                  {data.fridgeDesc}
                </p>
                <div className="text-2xl font-bold text-primary-700">100+</div>
                <p className="text-sm text-gray-500">{data.fridgeLabel}</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 text-center card-hover">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{data.specialTitle}</h3>
                <p className="text-gray-600 mb-4">
                  {data.specialDesc}
                </p>
                <div className="text-2xl font-bold text-primary-700">50+</div>
                <p className="text-sm text-gray-500">{data.specialLabel}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Vehicles */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {data.specializedTitle}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{data.adrTitle}</h3>
                <p className="text-gray-600 mb-6">
                  {data.adrDesc}
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>{data.adrList1}</li>
                  <li>{data.adrList2}</li>
                  <li>{data.adrList3}</li>
                  <li>{data.adrList4}</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{data.medicalTitle}</h3>
                <p className="text-gray-600 mb-6">
                  {data.medicalDesc}
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>{data.medicalList1}</li>
                  <li>{data.medicalList2}</li>
                  <li>{data.medicalList3}</li>
                  <li>{data.medicalList4}</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{data.secureTitle}</h3>
                <p className="text-gray-600 mb-6">
                  {data.secureDesc}
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>{data.secureList1}</li>
                  <li>{data.secureList2}</li>
                  <li>{data.secureList3}</li>
                  <li>{data.secureList4}</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{data.handlingTitle}</h3>
                <p className="text-gray-600 mb-6">
                  {data.handlingDesc}
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>{data.handlingList1}</li>
                  <li>{data.handlingList2}</li>
                  <li>{data.handlingList3}</li>
                  <li>{data.handlingList4}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {data.technologyTitle}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{data.gpsTitle}</h3>
                <p className="text-gray-600">
                  {data.gpsDesc}
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{data.monitoringTitle}</h3>
                <p className="text-gray-600">
                  {data.monitoringDesc}
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{data.commTitle}</h3>
                <p className="text-gray-600">
                  {data.commDesc}
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
