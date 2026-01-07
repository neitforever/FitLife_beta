import { useState, useEffect } from 'react';
import { ANavigation } from './ANavigation';
import { AFooter } from './AFooter';
import { AHomePage } from './AHomePage';
import { AWorkoutsPage } from './AWorkoutsPage';
import { ANutritionPage } from './ANutritionPage';
import { ACommunityPage } from './ACommunityPage';
import { AProfilePage } from './AProfilePage';

// Версия AApp для beta репозитория (без префикса /a)
export function AApp() {
  const [currentPage, setCurrentPage] = useState('home');

  // Sync with URL path (без префикса /a)
  useEffect(() => {
    const path = window.location.pathname;
    const page = path.replace('/', '') || 'home';
    setCurrentPage(page);
  }, []);

  // Update URL when page changes (без префикса /a)
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    const url = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({}, '', url);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <AHomePage onNavigate={handleNavigate} />;
      case 'workouts':
        return <AWorkoutsPage onNavigate={handleNavigate} />;
      case 'nutrition':
        return <ANutritionPage onNavigate={handleNavigate} />;
      case 'community':
        return <ACommunityPage onNavigate={handleNavigate} />;
      case 'profile':
        return <AProfilePage onNavigate={handleNavigate} />;
      default:
        return <AHomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Inter', sans-serif" }}>
      <ANavigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      {currentPage !== 'profile' && <AFooter />}
    </div>
  );
}

