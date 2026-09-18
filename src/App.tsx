/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { PartnerModal } from './components/PartnerModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';

import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ProgramsPage } from './components/ProgramsPage';
import { TrainingPage } from './components/TrainingPage';
import { WellnessPage } from './components/WellnessPage';
import { HealthCampsPage } from './components/HealthCampsPage';
import { CommunityImpactPage } from './components/CommunityImpactPage';
import { ExpertsPage } from './components/ExpertsPage';
import { EventsPage } from './components/EventsPage';
import { ResourcesPage } from './components/ResourcesPage';
import { ContactPage } from './components/ContactPage';
import { AdminDashboard } from './components/AdminDashboard';

const MainContent: React.FC = () => {
  const { currentPage } = useApp();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'programs':
        return <ProgramsPage />;
      case 'training':
        return <TrainingPage />;
      case 'wellness':
        return <WellnessPage />;
      case 'health-camps':
        return <HealthCampsPage />;
      case 'community':
        return <CommunityImpactPage />;
      case 'experts':
        return <ExpertsPage />;
      case 'events':
        return <EventsPage />;
      case 'resources':
        return <ResourcesPage />;
      case 'contact':
        return <ContactPage />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-50 text-slate-900 antialiased selection:bg-teal-500 selection:text-white">
      <Navbar />
      <main className="flex-grow">{renderCurrentPage()}</main>
      <Footer />

      {/* Global Modals */}
      <RegistrationModal />
      <PartnerModal />
      <GlobalSearchModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}

