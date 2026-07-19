import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CategorySection from '../components/CategorySection';
import ProductGrid from '../components/ProductGrid';
import FeaturesSection from '../components/FeaturesSection';
import CraftsmanshipSection from '../components/CraftsmanshipSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main className="font-body">
      <Navbar />
      <HeroSection />
      <CategorySection />
      <ProductGrid />
      <FeaturesSection />
      <CraftsmanshipSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
