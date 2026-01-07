import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { WorkoutsPage } from './components/WorkoutsPage';
import { NutritionPage } from './components/NutritionPage';
import { CommunityPage } from './components/CommunityPage';
import { ProfilePage } from './components/ProfilePage';
import { AApp } from './components/a/AApp';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isVariantA, setIsVariantA] = useState(false);

  // Check if we're on /a route
  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith('/a')) {
      setIsVariantA(true);
    } else {
      setIsVariantA(false);
    }

    // Handle browser back/forward
    const handlePopState = () => {
      const newPath = window.location.pathname;
      if (newPath.startsWith('/a')) {
        setIsVariantA(true);
      } else {
        setIsVariantA(false);
        const page = newPath.replace('/', '') || 'home';
        setCurrentPage(page);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // If variant A, render AApp
  if (isVariantA) {
    return <AApp />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'workouts':
        return <WorkoutsPage onNavigate={setCurrentPage} />;
      case 'nutrition':
        return <NutritionPage onNavigate={setCurrentPage} />;
      case 'community':
        return <CommunityPage onNavigate={setCurrentPage} />;
      case 'profile':
        return <ProfilePage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      {currentPage !== 'profile' && <Footer />}
    </div>
  );
}
