'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact form section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('faitesNousPart')}</h2>
          <p className="text-gray-600 mb-6">{t('demandeInformation')}</p>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('votreDemande')}*</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent">
                  <option value="contact">{t('contactOption')}</option>
                  <option value="devis">{t('devisOption')}</option>
                  <option value="sav">{t('savOption')}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('entreprise')}*</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('nom')}*</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('prenom')}*</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('email')}*</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('telephone')}*</label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('message')}*</label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                required
              ></textarea>
            </div>
            
            <div className="text-xs text-gray-500 mb-4">
              * {t('champsObligatoires')}<br />
              La collecte des informations demandées est nécessaire au traitement de votre demande. Dans le cadre de la gestion de nos prospects et clients, nous conservons les données personnelles qui y sont relatives pour un maximum de 1 an après le dernier contact. Conformément aux dispositions légales en vigueur, vous disposez d'un droit d'accès, de rectification, de portabilité, de limitation, d'opposition et de suppression des données qui vous concernent. Pour les exercer, envoyez votre demande par e-mail à l'adresse suivante: contact@mbntransport.fr
            </div>
            
            <button
              type="submit"
              className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-all font-medium shadow-md hover:shadow-lg"
            >
              {t('envoyer')}
            </button>
          </form>
        </div>

        {/* Company info */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-6 md:mb-0">
              <div className="mb-4">
                <img
                  src="/logo-mbn.png"
                  alt="MBN TRANSPORT Logo"
                  className="object-contain w-auto"
                  style={{ height: '120px' }}
                />
              </div>
              <p className="text-gray-600 mb-4">{t('specialisteLogistique')}</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/notre-groupe" className="text-gray-600 hover:text-primary-700 transition-colors">
                  {t('notreGroupe')}
                </Link>
                <Link href="/services" className="text-gray-600 hover:text-primary-700 transition-colors">
                  {t('nosServices')}
                </Link>
                <Link href="/carriere" className="text-gray-600 hover:text-primary-700 transition-colors">
                  {t('carriere')}
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-primary-700 transition-colors">
                  {t('contact')}
                </Link>
              </div>
            </div>
            
            <div className="text-right">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('contactezNous')}</h3>
              <p className="text-gray-600 mb-2">{t('horaireOuverture')}</p>
              <div className="text-gray-600">
                <p>Tél : {t('telephone')}</p>
                <p>E-mail : {t('email')}</p>
                <p className="text-sm mt-2">{t('adresseSiege')}</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-4">
            <Link 
              href="/mentions-legales" 
              className="text-sm text-gray-500 hover:text-primary-700 transition-colors"
            >
              {t('mentionsLegales')} | © Copyright 2024 - MBN TRANSPORT
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
