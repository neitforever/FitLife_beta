import { useState } from 'react';
import { AButton } from './AButton';
import { ACard, ACardContent } from './ACard';
import { AInput } from './AInput';
import { Dumbbell, Apple, TrendingUp, Settings, LogOut, User } from 'lucide-react';

interface AProfilePageProps {
  onNavigate: (page: string) => void;
}

export function AProfilePage({ onNavigate }: AProfilePageProps) {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Моя панель', icon: User },
    { id: 'workouts', label: 'Мои тренировки', icon: Dumbbell },
    { id: 'nutrition', label: 'Моё питание', icon: Apple },
    { id: 'progress', label: 'Мой прогресс', icon: TrendingUp },
    { id: 'settings', label: 'Настройки', icon: Settings },
  ];

  const measurements = [
    { param: 'Вес', current: '78 кг', change: '-7 кг' },
    { param: 'Талия', current: '88 см', change: '-7 см' },
    { param: 'Грудь', current: '98 см', change: '-4 см' },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ACard className="p-0 sticky top-20">
              <ACardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold mx-auto mb-4">
                    ИП
                  </div>
                  <h3 className="font-bold text-lg">Иван Петров</h3>
                  <div className="text-sm text-gray-500">@ivan_fitlife</div>
                </div>
                <nav className="space-y-2">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveMenu(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-[8px] transition-colors ${
                        activeMenu === item.id
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  ))}
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-[8px] text-gray-700 hover:bg-gray-100 transition-colors mt-4 border-t border-gray-200 pt-4">
                    <LogOut className="w-5 h-5" />
                    <span>Выйти</span>
                  </button>
                </nav>
              </ACardContent>
            </ACard>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {activeMenu === 'dashboard' && (
              <>
                <h1 className="text-3xl font-bold mb-4">Моя панель</h1>
                <ACard className="p-6">
                  <ACardContent className="p-0">
                    <h3 className="text-xl font-semibold mb-4">Твоя цель</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between text-gray-700">
                        <span>Текущий вес:</span>
                        <span className="font-semibold">78 кг</span>
                      </div>
                      <div className="flex justify-between text-gray-700">
                        <span>Целевой вес:</span>
                        <span className="font-semibold">75 кг</span>
                      </div>
                      <div className="flex justify-between text-gray-700">
                        <span>Осталось сбросить:</span>
                        <span className="font-semibold text-blue-600">3 кг</span>
                      </div>
                    </div>
                    <AButton variant="primary" className="w-full mt-6" onClick={() => alert('Изменить цель')}>
                      Изменить цель
                    </AButton>
                  </ACardContent>
                </ACard>

                <ACard className="p-6">
                  <ACardContent className="p-0">
                    <h3 className="text-xl font-semibold mb-4">Последние измерения</h3>
                    <div className="space-y-3">
                      {measurements.map((m, index) => (
                        <div key={index} className="flex justify-between text-gray-700">
                          <span>{m.param}:</span>
                          <span className="font-semibold">{m.current} ({m.change})</span>
                        </div>
                      ))}
                    </div>
                    <AButton variant="secondary" className="w-full mt-6" onClick={() => alert('Добавить измерения')}>
                      Добавить измерения
                    </AButton>
                  </ACardContent>
                </ACard>
              </>
            )}

            {activeMenu === 'workouts' && (
              <>
                <h1 className="text-3xl font-bold mb-4">Мои тренировки</h1>
                <ACard className="p-6">
                  <ACardContent className="p-0">
                    <h3 className="text-xl font-semibold mb-4">Активная программа</h3>
                    <p className="text-gray-700 mb-4">
                      "Жиросжигание за 30 дней" - День 15 из 30
                    </p>
                    <AButton variant="primary" onClick={() => onNavigate('workouts')}>
                      Продолжить тренировку
                    </AButton>
                  </ACardContent>
                </ACard>
              </>
            )}

            {activeMenu === 'nutrition' && (
              <>
                <h1 className="text-3xl font-bold mb-4">Моё питание</h1>
                <ACard className="p-6">
                  <ACardContent className="p-0">
                    <h3 className="text-xl font-semibold mb-4">Текущий план</h3>
                    <p className="text-gray-700 mb-4">
                      "Похудение на дефиците" - 1500 ккал/день
                    </p>
                    <AButton variant="primary" onClick={() => onNavigate('nutrition')}>
                      Посмотреть план
                    </AButton>
                  </ACardContent>
                </ACard>
              </>
            )}

            {activeMenu === 'progress' && (
              <>
                <h1 className="text-3xl font-bold mb-4">Мой прогресс</h1>
                <ACard className="p-6">
                  <ACardContent className="p-0">
                    <h3 className="text-xl font-semibold mb-4">График веса</h3>
                    <p className="text-gray-700">
                      Здесь будет простой график изменения веса.
                    </p>
                    <AButton variant="secondary" className="w-full mt-6" onClick={() => alert('Показать полный график')}>
                      Показать полный график
                    </AButton>
                  </ACardContent>
                </ACard>
              </>
            )}

            {activeMenu === 'settings' && (
              <>
                <h1 className="text-3xl font-bold mb-4">Настройки</h1>
                <ACard className="p-6">
                  <ACardContent className="p-0 space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                      <AInput id="name" type="text" defaultValue="Иван Петров" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <AInput id="email" type="email" defaultValue="ivan@example.com" />
                    </div>
                    <AButton variant="primary" className="w-full">
                      Сохранить изменения
                    </AButton>
                  </ACardContent>
                </ACard>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
