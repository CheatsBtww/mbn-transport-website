'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      {/* Contact form section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Contact</p>
              <h2 className="text-3xl font-bold text-white mb-4">{t('faitesNousPart')}</h2>
              <p className="text-slate-400 mb-8">{t('demandeInformation')}</p>

              <div className="space-y-4 text-sm text-slate-400">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <span>12 Avenue Maurice Thorez, 94200 Ivry-sur-Seine</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <span>01 49 60 56 50</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <span>ismail.iy.pro@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <span>{t('horaireOuverture')}</span>
                </div>
              </div>
            </div>

            <form
              className="space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmitting(true);
                setError(null);

                const formData = new FormData(e.currentTarget);
                const data = {
                  requestType: formData.get('requestType') as string,
                  company: formData.get('company') as string,
                  lastName: formData.get('lastName') as string,
                  firstName: formData.get('firstName') as string,
                  email: formData.get('email') as string,
                  phone: formData.get('phone') as string,
                  message: formData.get('message') as string,
                };

                try {
                  const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                  });

                  const result = await response.json();
                  if (!response.ok) throw new Error(result.error || 'Erreur lors de l\'envoi du message');

                  setIsSubmitted(true);
                  (e.target as HTMLFormElement).reset();
                  setTimeout(() => setIsSubmitted(false), 5000);
                } catch (err) {
                  setError(err instanceof Error ? err.message : 'Une erreur est survenue lors de l\'envoi du message');
                } finally {
                  setIsSubmitting(false);
                }
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">{t('votreDemande')}*</label>
                  <select
                    name="requestType"
                    required
                    className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 text-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  >
                    <option value="">{t('votreDemande')}</option>
                    <option value="contact">{t('contactOption')}</option>
                    <option value="devis">{t('devisOption')}</option>
                    <option value="sav">{t('savOption')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">{t('entreprise')}*</label>
                  <input
                    type="text"
                    name="company"
                    className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">{t('nom')}*</label>
                  <input type="text" name="lastName" className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" required />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">{t('prenom')}*</label>
                  <input type="text" name="firstName" className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">{t('email')}*</label>
                  <input type="email" name="email" className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" required />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">{t('telephone')}*</label>
                  <input type="tel" name="phone" className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" required />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">{t('message')}*</label>
                <textarea rows={4} name="message" className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none" required></textarea>
              </div>

              <p className="text-xs text-slate-500">
                * {t('champsObligatoires')} — Vos données sont conservées pour un maximum de 1 an.
              </p>

              {error && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl text-sm">
                  {error}
                </div>
              )}

              {isSubmitted && (
                <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-xl text-sm">
                  Message envoyé avec succès !
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Envoi en cours...' : t('envoyer')}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="mb-4 bg-white rounded-xl p-3 inline-block">
              <img
                src="/logo-mbn.png"
                alt="MBN TRANSPORT Logo"
                className="object-contain w-auto"
                style={{ height: '60px' }}
              />
            </div>
            <p className="text-slate-400 text-sm max-w-xs">{t('specialisteLogistique')}</p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            <Link href="/notre-groupe" className="text-slate-400 hover:text-white text-sm transition-colors">{t('notreGroupe')}</Link>
            <Link href="/services" className="text-slate-400 hover:text-white text-sm transition-colors">{t('nosServices')}</Link>
            <Link href="/nos-moyens" className="text-slate-400 hover:text-white text-sm transition-colors">{t('nosMoyens')}</Link>
            <Link href="/carriere" className="text-slate-400 hover:text-white text-sm transition-colors">{t('carriere')}</Link>
            <Link href="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">{t('contact')}</Link>
          </nav>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            href="/mentions-legales"
            className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
          >
            {t('mentionsLegales')}
          </Link>
          <p className="text-xs text-slate-500">© 2024 MBN TRANSPORT. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
