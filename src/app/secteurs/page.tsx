import Layout from '@/components/Layout';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const sectors = [
  { id: 'secteur-public', title: 'Secteur Public', description: 'Solutions logistiques pour les administrations et collectivités.', link: '/secteurs/secteur-public' },
  { id: 'sante', title: 'Santé', description: 'Transport spécialisé pour établissements médicaux et produits de santé.', link: '/secteurs/sante' },
  { id: 'mode-luxe', title: 'Mode et Luxe', description: 'Logistique haut de gamme pour l\'industrie textile et du luxe.', link: '/secteurs/mode-et-luxe' },
  { id: 'industrie', title: 'Industrie', description: 'Solutions de transport pour la fabrication et la production industrielle.', link: '/secteurs/industrie' },
  { id: 'service-high-tech', title: 'Service & High Tech', description: 'Transport spécialisé pour matériels informatiques et technologies.', link: '/secteurs/service-high-tech' },
  { id: 'gourmet-retail', title: 'Gourmet & Retail', description: 'Logistique alimentaire et distribution retail.', link: '/secteurs/gourmet-retail' },
  { id: 'btp', title: 'BTP', description: 'Transport de matériaux et équipements pour le bâtiment.', link: '/secteurs/btp' }
];

const caseStudies = [
  { title: 'Secteur Public', desc: 'Plan de transport spécifique pour la gestion des risques d\'inondation en région parisienne.', link: '/secteurs/secteur-public' },
  { title: 'High Tech', desc: 'Déploiement de solutions matérielles bureautiques dans 87 établissements publics.', link: '/secteurs/service-high-tech' },
];

export default function SecteursPage() {
  return (
    <Layout>
      <div className="bg-slate-950">
        {/* Hero */}
        <section className="py-20 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Expertise sectorielle</p>
            <h1 className="text-5xl font-extrabold text-white mb-4">Secteurs d&apos;activité</h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Une expertise métier pour chacun de vos secteurs d&apos;activités.
            </p>
          </div>
        </section>

        {/* Sectors grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectors.map((sector) => (
                <div key={sector.id} className="bg-slate-900 border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 card-hover group">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">{sector.title}</h3>
                  <p className="text-slate-400 text-sm mb-5 leading-relaxed">{sector.description}</p>
                  <Link
                    href={sector.link}
                    className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors group-hover:gap-2.5"
                  >
                    Découvrir nos solutions
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case studies */}
        <section className="py-20 bg-slate-900 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Études de cas</p>
              <h2 className="text-4xl font-bold text-white mb-3">Nos références par secteur</h2>
              <p className="text-slate-400">Découvrez comment nous accompagnons nos clients dans chaque secteur d&apos;activité.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudies.map((cs, i) => (
                <div key={i} className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-white mb-3">{cs.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{cs.desc}</p>
                  <Link
                    href={cs.link}
                    className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors"
                  >
                    Voir l&apos;étude de cas
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Votre secteur n&apos;est pas listé ?</h2>
            <p className="text-lg text-slate-400 mb-8">
              Contactez-nous pour découvrir nos solutions adaptées à votre secteur d&apos;activité.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/30"
            >
              Nous contacter
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
