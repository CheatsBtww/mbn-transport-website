'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import UrgentBanner from './UrgentBanner';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/services', label: t('nosServices') },
    { href: '/nos-moyens', label: t('nosMoyens') },
    { href: '/notre-groupe', label: t('notreGroupe') },
    { href: '/carriere', label: t('carriere') },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Urgent Banner */}
      <UrgentBanner />

      {/* Main navigation */}
      <div className={`bg-slate-900/95 backdrop-blur-md border-b transition-all duration-300 ${isScrolled ? 'border-slate-700/80 shadow-lg shadow-black/30' : 'border-slate-800'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <img
                src="/logo-mbn.png"
                alt="MBN TRANSPORT Logo"
                className="object-contain w-auto"
                style={{ height: '70px' }}
              />
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-slate-300 hover:text-white font-medium px-4 py-2 rounded-lg hover:bg-slate-800 transition-all duration-200 text-sm group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                </Link>
              ))}
            </nav>

            {/* Right side: language + CTA */}
            <div className="hidden md:flex items-center gap-4">
              <LanguageSelector />
              <Link
                href="/contact"
                className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 text-sm shadow-lg shadow-blue-500/20 hover:shadow-blue-400/30"
              >
                {t('contact')}
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <LanguageSelector />
                <Link
                  href="/contact"
                  className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('contact')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
