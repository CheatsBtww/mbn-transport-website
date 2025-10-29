import Layout from '@/components/Layout';

export default function AgencesPage() {
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos agences</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                27 agences réparties sur toute la France pour vous servir au plus près de vos besoins.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="text-4xl font-bold text-primary-700 mb-2">27</div>
                <p className="text-gray-600 font-medium">Agences en France</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="text-4xl font-bold text-primary-700 mb-2">5000</div>
                <p className="text-gray-600 font-medium">Clients satisfaits</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="text-4xl font-bold text-primary-700 mb-2">3500</div>
                <p className="text-gray-600 font-medium">Missions par jour</p>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos implantations</h2>
              <p className="text-lg text-gray-600">
                Un réseau national pour une couverture optimale de vos besoins logistiques.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-500">Carte interactive des agences</p>
                  <p className="text-sm text-gray-400 mt-2">Cliquez sur les marqueurs pour voir les détails</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-primary-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Besoin de localiser une agence ?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Contactez-nous pour obtenir les coordonnées de l'agence la plus proche de chez vous.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary-700 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Nous contacter
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}

