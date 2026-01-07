import { useState, useEffect } from 'react';
import { ANavigation } from './ANavigation';
import { AFooter } from './AFooter';
import { AHomePage } from './AHomePage';
import { AWorkoutsPage } from './AWorkoutsPage';
import { ANutritionPage } from './ANutritionPage';
import { ACommunityPage } from './ACommunityPage';
import { AProfilePage } from './AProfilePage';

// Базовый прототип FitLife - всегда работает по корневому пути /
export function AApp() {
  // Инициализируем состояние из URL сразу
  const getInitialPage = () => {
    let path = window.location.pathname;
    if (path.startsWith('/a')) {
      path = path.replace('/a', '') || '/';
    }
    return path === '/' || path === '' ? 'home' : path.replace(/^\//, '');
  };

  const [currentPage, setCurrentPage] = useState(() => getInitialPage());

  // Sync with URL path - игнорируем префикс /a если есть
  useEffect(() => {
    const updatePageFromPath = () => {
      let path = window.location.pathname;
      // Убираем префикс /a если он есть
      if (path.startsWith('/a')) {
        path = path.replace('/a', '') || '/';
      }
      // Убираем ведущий слэш и получаем имя страницы
      const page = path === '/' || path === '' ? 'home' : path.replace(/^\//, '');
      setCurrentPage((prevPage) => {
        if (prevPage !== page) {
          return page;
        }
        return prevPage;
      });
    };
    
    // Обновляем при монтировании
    updatePageFromPath();
    
    // Обработка навигации браузера (back/forward)
    window.addEventListener('popstate', updatePageFromPath);
    
    // Слушаем изменения URL через интервал (для отслеживания прямых переходов)
    const interval = setInterval(updatePageFromPath, 50);
    
    return () => {
      window.removeEventListener('popstate', updatePageFromPath);
      clearInterval(interval);
    };
  }, []);

  // Update URL when page changes - всегда используем корневой путь без /a
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    const url = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({ page }, '', url);
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

