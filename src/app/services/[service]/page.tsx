'use client';

import Layout from '@/components/Layout';
import { notFound } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { servicesData } from '@/lib/servicesData';
import { use } from 'react';
import Link from 'next/link';

interface ServicePageProps {
  params: Promise<{
    service: string;
  }>;
}

export default function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = use(params);
  const { language, t } = useLanguage();
  
  // Get service data based on current language
  const serviceData = servicesData[language][resolvedParams.service as keyof typeof servicesData['fr']];
  
  if (!serviceData) {
    notFound();
  }

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{serviceData.title}</h1>
              {serviceData.subtitle && (
                <h2 className="text-2xl text-primary-700 mb-6">{serviceData.subtitle}</h2>
              )}
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                {serviceData.description}
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {serviceData.solutionsTitle}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceData.features.map((feature: string, index: number) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-primary-700 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              {language === 'fr' ? 'Besoin de plus d\'informations ?' : 'Need more information?'}
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              {language === 'fr' 
                ? 'Contactez-nous pour un devis personnalisé' 
                : 'Contact us for a personalized quote'}
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-primary-700 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              {language === 'fr' ? 'Nous contacter' : 'Contact us'}
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
