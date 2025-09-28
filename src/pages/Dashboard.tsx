import React, { useState, useEffect } from 'react';
import TopNav from '../components/dashboard/TopNav';
import WelcomeSection from '../components/dashboard/WelcomeSection';
import StatsOverview from '../components/dashboard/StatsOverview';
import LearningModules from '../components/dashboard/LearningModules';
import ProgressTracker from '../components/dashboard/ProgressTracker';
import RecentActivity from '../components/dashboard/RecentActivity';
import Modal from '../components/dashboard/Modal';
import BackgroundElements from '../components/dashboard/BackgroundElements';
import { showToast } from '../utils/toast';
import '../styles/Dashboard.css';

const Dashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<any>(null);

  const handleModuleClick = (moduleType: string) => {
    setModalData(moduleType);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  const handleQuickAction = (action: string) => {
    showToast(`Loading ${action}...`);
  };

  const handleActivityClick = (title: string) => {
    showToast(`Opening ${title}...`);
  };

  const handleOverviewClick = (label: string) => {
    showToast(`Viewing ${label} details...`);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      <BackgroundElements />
      
      <TopNav />

      <main className="main-dashboard">
        <WelcomeSection onQuickAction={handleQuickAction} />
        
        <StatsOverview onCardClick={handleOverviewClick} />

        <div className="dashboard-grid">
          <div className="main-content">
            <LearningModules onModuleClick={handleModuleClick} />
          </div>

          <div className="sidebar-content">
            <ProgressTracker />
            <RecentActivity onActivityClick={handleActivityClick} />
          </div>
        </div>
      </main>

      <Modal 
        isOpen={isModalOpen}
        moduleType={modalData}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Dashboard;