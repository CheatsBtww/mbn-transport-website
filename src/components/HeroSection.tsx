'use client';

import Link from 'next/link';
import { ArrowRight, Phone, Shield, Clock, Truck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-slate-950">
      {/* Background Image with deep overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/hero-mbn.jpg"
          alt="MBN TRANSPORT - Camion de transport"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold px-4 py-2 rounded-full mb-8">
            <Shield className="h-4 w-4" />
            <span>75+ ans d&apos;expertise en logistique</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
            {t('heroTitle')}{' '}
            <span className="text-blue-400">{t('heroSubtitle')}</span>
          </h1>

          {/* Description */}
          <p className="text-lg lg:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">
            {t('heroDescription')}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-400/40 text-lg blue-glow"
            >
              Demander un devis
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:+33123456789"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 text-lg"
            >
              <Phone className="h-5 w-5 text-blue-400" />
              Nous appeler
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/30 rounded-lg flex items-center justify-center">
                <Truck className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">150+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">Véhicules</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/30 rounded-lg flex items-center justify-center">
                <Clock className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">Disponibilité</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/30 rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">Clients satisfaits</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
