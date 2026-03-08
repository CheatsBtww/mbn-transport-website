'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

const contactSchema = z.object({
  requestType: z.string().min(1, 'Veuillez sélectionner un type de demande'),
  company: z.string().min(1, 'Le nom de l\'entreprise est requis'),
  lastName: z.string().min(1, 'Le nom est requis'),
  firstName: z.string().min(1, 'Le prénom est requis'),
  email: z.string().email('Veuillez entrer une adresse email valide'),
  phone: z.string().min(1, 'Le numéro de téléphone est requis'),
  message: z.string().min(1, 'Le message est requis')
});

type ContactFormData = z.infer<typeof contactSchema>;

const inputClass = (hasError: boolean) =>
  `w-full px-4 py-3 bg-slate-800 border ${hasError ? 'border-red-500/50' : 'border-slate-700'} text-slate-200 placeholder-slate-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-colors`;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Erreur lors de l\'envoi du message');

      setIsSubmitted(true);
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue lors de l\'envoi du message');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
          <div className="max-w-md w-full bg-slate-900 border border-slate-700 rounded-2xl p-10 text-center">
            <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-3">Message envoyé !</h1>
            <p className="text-slate-400 mb-8">
              Merci pour votre message. Nous vous contacterons dans les plus brefs délais.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Envoyer un autre message
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-slate-950">
        {/* Hero */}
        <section className="py-20 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Contact</p>
            <h1 className="text-5xl font-extrabold text-white mb-4">Contactez-nous</h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Une demande d&apos;information ? Un devis ? Notre équipe est à votre disposition pour répondre à vos besoins.
            </p>
          </div>
        </section>

        {/* Contact info + form */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact cards */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white mb-6">Nos coordonnées</h2>
                {[
                  { icon: Phone, label: 'Téléphone', value: '01 73 08 08 90', href: 'tel:0173080890' },
                  { icon: Mail, label: 'E-mail', value: 'ismail.iy.pro@gmail.com', href: 'mailto:ismail.iy.pro@gmail.com' },
                  { icon: Clock, label: 'Horaires', value: 'Lun – Ven : 08h00 – 19h00', href: null },
                  { icon: MapPin, label: 'Adresse', value: '12 Avenue Maurice Thorez, 94200 Ivry-sur-Seine', href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="bg-slate-900 border border-slate-700/50 rounded-2xl p-5 flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-1">{label}</p>
                      {href ? (
                        <a href={href} className="text-slate-200 hover:text-white text-sm transition-colors">{value}</a>
                      ) : (
                        <p className="text-slate-200 text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-slate-900 border border-slate-700/50 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Faites-nous part de votre demande</h2>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-1.5">Votre demande*</label>
                        <select {...register('requestType')} className={inputClass(!!errors.requestType)}>
                          <option value="">Sélectionnez un type de demande</option>
                          <option value="contact">Contact</option>
                          <option value="devis">Demande de devis</option>
                          <option value="sav">Service après vente</option>
                        </select>
                        {errors.requestType && <p className="mt-1 text-xs text-red-400">{errors.requestType.message}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-1.5">Entreprise*</label>
                        <input type="text" {...register('company')} className={inputClass(!!errors.company)} placeholder="Nom de votre entreprise" />
                        {errors.company && <p className="mt-1 text-xs text-red-400">{errors.company.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-1.5">Nom*</label>
                        <input type="text" {...register('lastName')} className={inputClass(!!errors.lastName)} placeholder="Votre nom" />
                        {errors.lastName && <p className="mt-1 text-xs text-red-400">{errors.lastName.message}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-1.5">Prénom*</label>
                        <input type="text" {...register('firstName')} className={inputClass(!!errors.firstName)} placeholder="Votre prénom" />
                        {errors.firstName && <p className="mt-1 text-xs text-red-400">{errors.firstName.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-1.5">E-mail*</label>
                        <input type="email" {...register('email')} className={inputClass(!!errors.email)} placeholder="votre@email.com" />
                        {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-1.5">Téléphone*</label>
                        <input type="tel" {...register('phone')} className={inputClass(!!errors.phone)} placeholder="01 23 45 67 89" />
                        {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">Message*</label>
                      <textarea rows={6} {...register('message')} className={inputClass(!!errors.message)} placeholder="Décrivez votre demande en détail..." />
                      {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
                    </div>

                    <p className="text-xs text-slate-500">
                      * Champs obligatoires — La collecte des informations demandées est nécessaire au traitement de votre demande. Données conservées 1 an maximum.
                    </p>

                    {error && (
                      <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl text-sm">{error}</div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
