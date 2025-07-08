import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import HeroSection from '../HomeExtra/HeroSection';
import PartnershipSection from '../HomeExtra/PartnershipSection';
import CargoDisputeSection from '../HomeExtra/CargoDisputeSection';
import ServicesSection from '../HomeExtra/ServicesSection';

export default function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Welcome to AusPac - Trusted Marine Service Solutions</title>
        <meta
          name="description"
          content="AusPac offers trusted marine service solutions. Discover our partnerships, services, and expertise in marine operations."
        />
        <meta property="og:title" content="Welcome to AusPac - Trusted Marine Service Solutions" />
        <meta
          property="og:description"
          content="AusPac offers trusted marine service solutions. Discover our partnerships, services, and expertise in marine operations."
        />
        {/* Add more meta tags if needed */}
      </Helmet>

      <HeroSection />
      <PartnershipSection />
      <CargoDisputeSection />
      <ServicesSection />
    </HelmetProvider>
  );
}
