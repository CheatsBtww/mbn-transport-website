import Link from 'next/link';
import { Building2, Heart, ShoppingBag, Factory, Laptop, UtensilsCrossed, Hammer } from 'lucide-react';

const sectors = [
  {
    id: 'secteur-public',
    title: 'Secteur Public',
    icon: Building2,
    link: '/secteurs/secteur-public'
  },
  {
    id: 'sante',
    title: 'Santé',
    icon: Heart,
    link: '/secteurs/sante'
  },
  {
    id: 'mode-luxe',
    title: 'Mode et Luxe',
    icon: ShoppingBag,
    link: '/secteurs/mode-et-luxe'
  },
  {
    id: 'industrie',
    title: 'Industrie',
    icon: Factory,
    link: '/secteurs/industrie'
  },
  {
    id: 'service-high-tech',
    title: 'Service & High Tech',
    icon: Laptop,
    link: '/secteurs/service-high-tech'
  },
  {
    id: 'gourmet-retail',
    title: 'Gourmet & Retail',
    icon: UtensilsCrossed,
    link: '/secteurs/gourmet-retail'
  },
  {
    id: 'btp',
    title: 'BTP',
    icon: Hammer,
    link: '/secteurs/btp'
  }
];

export default function SectorsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Des secteurs d'activités
          </h2>
          <p className="text-lg text-gray-600">
            Une expertise métier pour chacun de vos secteurs d'activités.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
          {sectors.map((sector) => {
            const IconComponent = sector.icon;
            return (
              <div key={sector.id} className="group">
                <Link href={sector.link} className="block">
                  <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 card-hover border-2 border-transparent hover:border-primary-200">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-100 transition-colors shadow-sm">
                      <IconComponent className="h-6 w-6 text-gray-600 group-hover:text-primary-700 transition-colors" />
                    </div>
                    <h3 className="text-sm font-medium text-gray-900 group-hover:text-primary-700 transition-colors">
                      {sector.title}
                    </h3>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
