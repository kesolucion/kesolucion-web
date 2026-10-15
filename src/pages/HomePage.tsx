import { useState } from 'react';
import SiteHeader from '../components/layout/SiteHeader';
import SiteFooter from '../components/layout/SiteFooter';
import HeroSection from '../sections/HeroSection';
import ProductsSection from '../features/products/ProductsSection';
import ValueSection from '../sections/ValueSection';
import ProcessSection from '../sections/ProcessSection';
import FaqSection from '../sections/FaqSection';
import ContactSection from '../sections/ContactSection';
import { site } from '../data/content';
import { scrollToContact } from '../lib/navigation';
export default function HomePage() {
  const [interest, setInterest] = useState<string>(site.defaultInterest);
  function requestDemo(value: string) {
    setInterest(value);
    scrollToContact();
  }
  return (
    <>
      <a href="#contenido" className="skip">
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="contenido">
        <HeroSection />
        <ProductsSection onRequestDemo={requestDemo} />
        <ValueSection />
        <ProcessSection />
        <FaqSection />
        <ContactSection interest={interest} onInterestChange={setInterest} />
      </main>
      <SiteFooter />
    </>
  );
}
