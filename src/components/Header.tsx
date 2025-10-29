'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Bell, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import UrgentBanner from './UrgentBanner';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      {/* Urgent Banner */}
      <UrgentBanner />
      {/* Top utility bar */}
      <div className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center space-x-6">
              <Link href="/conciergerie" className="flex items-center space-x-2 hover:text-gray-300 transition-colors">
                <Bell className="h-4 w-4" />
                <span className="text-sm font-medium">{t('conciergerie')}</span>
              </Link>
              <div className="h-4 w-px bg-white"></div>
              <Link href="/contact" className="flex items-center space-x-2 hover:text-gray-300 transition-colors">
                <MessageCircle className="h-4 w-4" />
                <span className="text-sm font-medium">{t('contact')}</span>
              </Link>
            </div>
            <LanguageSelector />
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            {/* Logo */}
            <Link href="/" className="flex items-center">
                  <img
                    src="/logo-mbn.png"
                    alt="MBN TRANSPORT Logo"
                    className="object-contain w-auto"
                    style={{ height: '100px' }}
                  />
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                href="/services" 
                className="text-gray-900 font-bold transition-all duration-300 px-4 py-2 rounded-md hover:shadow-lg"
                style={{ transition: 'all 0.3s ease' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1f2937';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#111827';
                }}
              >
                {t('nosServices')}
              </Link>
              <Link 
                href="/nos-moyens" 
                className="text-gray-900 font-bold transition-all duration-300 px-4 py-2 rounded-md hover:shadow-lg"
                style={{ transition: 'all 0.3s ease' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1f2937';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#111827';
                }}
              >
                {t('nosMoyens')}
              </Link>
              <Link 
                href="/notre-groupe" 
                className="text-gray-900 font-bold transition-all duration-300 px-4 py-2 rounded-md hover:shadow-lg"
                style={{ transition: 'all 0.3s ease' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1f2937';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#111827';
                }}
              >
                {t('notreGroupe')}
              </Link>
              <Link 
                href="/carriere" 
                className="text-gray-900 font-bold transition-all duration-300 px-4 py-2 rounded-md hover:shadow-lg"
                style={{ transition: 'all 0.3s ease' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1f2937';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#111827';
                }}
              >
                {t('carriere')}
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-gray-900 hover:text-primary-700 hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/services"
                className="block px-3 py-2 text-gray-900 hover:text-primary-700 hover:bg-primary-50 rounded-md font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nosServices')}
              </Link>
              <Link
                href="/nos-moyens"
                className="block px-3 py-2 text-gray-900 hover:text-primary-700 hover:bg-primary-50 rounded-md font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nosMoyens')}
              </Link>
              <Link
                href="/notre-groupe"
                className="block px-3 py-2 text-gray-900 hover:text-primary-700 hover:bg-primary-50 rounded-md font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('notreGroupe')}
              </Link>
              <Link
                href="/carriere"
                className="block px-3 py-2 text-gray-900 hover:text-primary-700 hover:bg-primary-50 rounded-md font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('carriere')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
