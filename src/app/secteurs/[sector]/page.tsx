import Layout from '@/components/Layout';
import { notFound } from 'next/navigation';

interface SectorPageProps {
  params: {
    sector: string;
  };
}

const sectorsData = {
  'secteur-public': {
    title: 'Secteur Public',
    subtitle: 'Améliorer l\'expérience des citoyens',
    description: 'Dans un contexte économique complexe, le secteur public doit offrir un service performant aux citoyens, aux entreprises et autres organismes, tout en améliorant son efficacité et sa qualité et en intégrant des réformes budgétaires importantes. Compte tenu de la diversité des métiers et des modes de fonctionnement des acteurs publics, MBN TRANSPORT adopte une approche « projet » spécifique en fonction de ses clients, de leurs organisations et de leurs enjeux.',
    solutions: [
      'La livraison de vos matériels et documents sensibles',
      'Bureau d\'étude',
      'Plis & colis',
      'Course urgente',
      'Véhicule plombé',
      'Navettes régulières',
      'Transferts inter-sites',
      'Livraison 7J7 - 24hH24, 365 jours par an'
    ],
    caseStudy: {
      title: 'Etudes de cas',
      demand: 'Un acteur majeur du secteur public confie à nos équipes d\'ingénierie et opérationnelles la conception, la gestion et la supervision d\'un plan de transport spécifique établie dans le cadre du PPRI « Plan prévention risque inondation » dans un contexte critique.',
      solution: 'Nos plateformes de proximité répartis sur la région Ile de France couplés à nos moyens de transport nous permet de préparer et déployer l\'ensemble des matériels dans des délais très court sur la région. Plus de 50 véhicules sont par exemple mobilisés sur la première phase d\'alerte dans le cadre de cette opération.',
      result: 'L\'organisation sur mesure mise en place a garanti la continuité d\'activité de notre client permettant à ses usagers de bénéficier pleinement de leurs services en limitant le désagrément lié à un évènement exceptionnel.'
    }
  },
  'service-high-tech': {
    title: 'Service & High Tech',
    subtitle: 'Distribution Spécialisée by MBN TRANSPORT',
    description: 'La livraison de matériels spécialisés ou sensibles est une étape clé dans la chaîne logistique de nos clients qui requiert un savoir-faire technique permettant de répondre à leurs enjeux. De la logistique à la livraison en passant par un catalogue de services techniques nos équipes élaborent chaque jour des solutions « on demand » à forte valeur ajoutée.',
    solutions: [
      'Un réseau national dédié à la logistique et au transport de matériels de haute technologie',
      'Réception et stockage temporaire',
      'Test & assemblage des matériels',
      'Intégration des flux EDI',
      'Système de suivi (track & trace)',
      'Interlocuteur dédié',
      'Prise de RDV /Validation des accès / Pré visite',
      'Matériels et équipements de manutention adaptés',
      'Livraison à l\'endroit souhaité à 2 ou 4 personnes',
      'Paramétrage/ Masterisation /Formation des utilisateurs finaux',
      'Reverse logistique de l\'ancien matériel',
      'Revue & analyse de la performance'
    ],
    caseStudy: {
      title: 'Etude de cas High Tech',
      demand: 'Déployer un ensemble de solutions matérielles bureautiques pour le compte d\'un acteur majeur spécialisé dans les services pour les systèmes d\'information à l\'échelle nationale.',
      solution: 'Nos équipes dédiés ont conçu et mis en œuvre une organisation logistique à forte valeur ajoutée, depuis la gestion des approvisionnements jusqu\'à la livraison et installation de la solution matériel en passant par la gestion des flux retours au travers d\'une approche méthodologique éprouvée.',
      result: 'Dans le cadre d\'un projet stratégique, nous avons livré et installé en un mois 87 établissements publics sur l\'ensemble territoire français dans le respect des délais impartis et des indicateurs de performance définis dans le cadre du marché.'
    }
  },
  'sante': {
    title: 'Santé',
    subtitle: 'Transport médical spécialisé',
    description: 'Le secteur de la santé nécessite une expertise particulière dans le transport de produits sensibles, médicaments et équipements médicaux. Nos équipes sont formées aux exigences spécifiques du transport médical.',
    solutions: [
      'Transport de produits sanguins labiles (PSL)',
      'Transport de prélèvements biologiques',
      'Livraison d\'équipements médicaux',
      'Transport à température contrôlée',
      'Véhicules agréés',
      'Chauffeurs formés',
      'Suivi en temps réel',
      'Interlocuteur dédié'
    ],
    caseStudy: {
      title: 'Etude de cas Santé',
      demand: 'Un établissement de SANTE parisien souhaite envoyer des prélèvements hautement infectieux (code UN 2814 : Les matières infectieuses répondant à ces critères provoquent des maladies chez l\'homme) dans un laboratoire de la région lyonnaise afin qu\'ils puissent être analysés.',
      solution: 'En relation avec l\'établissement de SANTE et les autorités de police, un processus de livraison a été préparé puis mis en place afin de sécuriser le transport de ces prélèvements, hautement infectieux. Du chargement à la livraison, ces transports, traités par nos équipages sous ADR, ont fait l\'objet d\'un suivi très particulier pour une traçabilité globale et complète de ces prélèvements.',
      result: 'Notre solution de transport proposée et mise en place a garanti, non seulement la sécurisation complète de l\'enlèvement à la livraison, mais aussi la qualité du prélèvement lors de la livraison au laboratoire.'
    }
  }
};

export default async function SectorPage({ params }: SectorPageProps) {
  const resolvedParams = await params;
  const sector = sectorsData[resolvedParams.sector as keyof typeof sectorsData];
  
  if (!sector) {
    notFound();
  }

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{sector.title}</h1>
              <h2 className="text-2xl text-primary-700 mb-6">{sector.subtitle}</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                {sector.description}
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nos solutions dans le domaine du {sector.title.toLowerCase()}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sector.solutions.map((solution, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-primary-700 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {sector.caseStudy.title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">La demande</h3>
                <p className="text-gray-600">{sector.caseStudy.demand}</p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">La solution</h3>
                <p className="text-gray-600">{sector.caseStudy.solution}</p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Le résultat</h3>
                <p className="text-gray-600">{sector.caseStudy.result}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Besoin de plus d'informations ?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Contactez-nous pour un devis personnalisé
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary-700 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Demander un devis
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export async function generateStaticParams() {
  return Object.keys(sectorsData).map((sector) => ({
    sector,
  }));
}

