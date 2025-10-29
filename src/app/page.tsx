import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import CaseStudySection from '@/components/CaseStudySection';
import StatisticsSection from '@/components/StatisticsSection';

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <CaseStudySection />
      <StatisticsSection />
    </Layout>
  );
}