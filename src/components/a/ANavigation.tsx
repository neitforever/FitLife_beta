import { useState, useEffect } from 'react';
import { AButton } from './AButton';
import { Dumbbell, Menu, User, X } from 'lucide-react';

interface ANavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function ANavigation({ currentPage, onNavigate }: ANavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const menuItems = [
    { id: 'home', label: 'Главная' },
    { id: 'workouts', label: 'Тренировки' },
    { id: 'nutrition', label: 'Питание' },
    { id: 'community', label: 'Сообщество' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <Dumbbell className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-semibold text-gray-900">
              FitLife
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('profile')}
                className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors"
              >
                Войти
              </button>
              <AButton
                size="sm"
                onClick={() => onNavigate('profile')}
              >
                Начать бесплатно
              </AButton>
              <button 
                onClick={() => onNavigate('profile')} 
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Profile"
              >
                <User className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Mobile Menu Overlay */}
          <div 
            className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
                isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/50" 
                onClick={() => setIsOpen(false)} 
            />
            
            {/* Drawer */}
            <div 
                className={`absolute right-0 top-0 h-full w-[280px] bg-white border-l border-gray-200 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <span className="font-semibold text-lg text-gray-900">Меню</span>
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="p-2 rounded-lg hover:bg-gray-100 text-gray-500"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>
                
                <div className="flex flex-col gap-2 p-4 overflow-y-auto">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onNavigate(item.id);
                        setIsOpen(false);
                      }}
                      className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        currentPage === item.id
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                  
                  <div className="border-t border-gray-200 my-2 pt-4 flex flex-col gap-3">
                      <button
                        onClick={() => {
                          onNavigate('profile');
                          setIsOpen(false);
                        }}
                        className="text-left px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50"
                      >
                        Войти
                      </button>
                      <AButton
                        className="w-full"
                        onClick={() => {
                          onNavigate('profile');
                          setIsOpen(false);
                        }}
                      >
                        Начать бесплатно
                      </AButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

