import Layout from '@/components/Layout';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const sectors = [
  {
    id: 'secteur-public',
    title: 'Secteur Public',
    description: 'Solutions logistiques pour les administrations et collectivités.',
    link: '/secteurs/secteur-public'
  },
  {
    id: 'sante',
    title: 'Santé',
    description: 'Transport spécialisé pour établissements médicaux et produits de santé.',
    link: '/secteurs/sante'
  },
  {
    id: 'mode-luxe',
    title: 'Mode et Luxe',
    description: 'Logistique haut de gamme pour l\'industrie textile et du luxe.',
    link: '/secteurs/mode-et-luxe'
  },
  {
    id: 'industrie',
    title: 'Industrie',
    description: 'Solutions de transport pour la fabrication et la production industrielle.',
    link: '/secteurs/industrie'
  },
  {
    id: 'service-high-tech',
    title: 'Service & High Tech',
    description: 'Transport spécialisé pour matériels informatiques et technologies.',
    link: '/secteurs/service-high-tech'
  },
  {
    id: 'gourmet-retail',
    title: 'Gourmet & Retail',
    description: 'Logistique alimentaire et distribution retail.',
    link: '/secteurs/gourmet-retail'
  },
  {
    id: 'btp',
    title: 'BTP',
    description: 'Transport de matériaux et équipements pour le bâtiment.',
    link: '/secteurs/btp'
  }
];

export default function SecteursPage() {
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Secteurs d'activité</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Une expertise métier pour chacun de vos secteurs d'activités.
              </p>
            </div>
          </div>
        </section>

        {/* Sectors Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sectors.map((sector) => (
                <div key={sector.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 card-hover">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{sector.title}</h3>
                  <p className="text-gray-600 mb-4">{sector.description}</p>
                  <Link 
                    href={sector.link}
                    className="inline-flex items-center text-primary-700 hover:text-brand-orange font-medium transition-colors"
                  >
                    Découvrir nos solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Preview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nos références par secteur
              </h2>
              <p className="text-lg text-gray-600">
                Découvrez comment nous accompagnons nos clients dans chaque secteur d'activité.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Secteur Public</h3>
                <p className="text-gray-600 mb-4">
                  Plan de transport spécifique pour la gestion des risques d'inondation en région parisienne.
                </p>
                <Link 
                  href="/secteurs/secteur-public"
                  className="text-primary-700 hover:text-brand-orange font-medium"
                >
                  Voir l'étude de cas →
                </Link>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">High Tech</h3>
                <p className="text-gray-600 mb-4">
                  Déploiement de solutions matérielles bureautiques dans 87 établissements publics.
                </p>
                <Link 
                  href="/secteurs/service-high-tech"
                  className="text-primary-700 hover:text-brand-orange font-medium"
                >
                  Voir l'étude de cas →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary-700 to-primary-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Votre secteur n'est pas listé ?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Contactez-nous pour découvrir nos solutions adaptées à votre secteur d'activité.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-primary-700 px-8 py-3 rounded-md font-medium hover:bg-brand-orange hover:text-white transition-all shadow-lg"
            >
              Nous contacter
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}

