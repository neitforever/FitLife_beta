import { useState } from 'react';
import { AButton } from './AButton';
import { ACard, ACardContent } from './ACard';
import { AInput } from './AInput';
import {
  BarChart3,
  Dumbbell,
  Apple,
  TrendingUp,
  Trophy,
  Settings,
  CreditCard,
  LogOut,
  Flame,
  Calendar,
  Star,
} from 'lucide-react';

interface AProfilePageProps {
  onNavigate: (page: string) => void;
}

export function AProfilePage({ onNavigate }: AProfilePageProps) {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Моя панель', icon: BarChart3 },
    { id: 'workouts', label: 'Мои тренировки', icon: Dumbbell },
    { id: 'nutrition', label: 'Моё питание', icon: Apple },
    { id: 'progress', label: 'Мой прогресс', icon: TrendingUp },
    { id: 'achievements', label: 'Достижения', icon: Trophy },
    { id: 'settings', label: 'Настройки', icon: Settings },
    { id: 'subscription', label: 'Подписка', icon: CreditCard },
  ];

  const stats = [
    { icon: Dumbbell, label: 'Тренировки', value: '18', total: '124', subtitle: 'Этот месяц / Всего' },
    { icon: Flame, label: 'Калории', value: '12,450', subtitle: 'Сожжено за месяц' },
    { icon: Calendar, label: 'Дни подряд', value: '15', subtitle: 'Текущая серия' },
    { icon: Star, label: 'Уровень', value: '12', subtitle: '4,850 / 6,000 XP' },
  ];

  const measurements = [
    { param: 'Вес', start: '85 кг', current: '78 кг', change: '-7 кг' },
    { param: 'Талия', start: '95 см', current: '88 см', change: '-7 см' },
    { param: 'Грудь', start: '102 см', current: '98 см', change: '-4 см' },
    { param: 'Бёдра', start: '105 см', current: '100 см', change: '-5 см' },
  ];

  const achievements = [
    { emoji: '🔥', title: 'Неделя без пропусков', desc: '7 дней подряд' },
    { emoji: '💪', title: 'Первая тренировка', desc: 'Начал путь' },
    { emoji: '📉', title: 'Минус 5 кг', desc: 'Отличный старт' },
    { emoji: '🎯', title: '10 тренировок', desc: 'Продолжай в том же духе' },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ACard className="sticky top-20">
              <ACardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-xl font-semibold text-gray-700 mx-auto mb-4">
                    ИП
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900">Иван Петров</h3>
                  <div className="text-sm text-gray-500">@ivan_fitlife</div>
                </div>
                <nav className="space-y-2">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveMenu(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        activeMenu === item.id
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium text-sm">{item.label}</span>
                    </button>
                  ))}
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors mt-4 border-t border-gray-200">
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium text-sm">Выйти</span>
                  </button>
                </nav>
              </ACardContent>
            </ACard>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeMenu === 'dashboard' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Привет, Иван!</h1>
                  <p className="text-gray-600">Продолжай двигаться к своей цели</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <ACard key={index}>
                      <ACardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                            <stat.icon className="w-6 h-6 text-gray-700" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                            <div className="text-xs text-gray-500">{stat.subtitle}</div>
                            {stat.total && (
                              <div className="text-xs text-gray-500">Всего: {stat.total}</div>
                            )}
                          </div>
                        </div>
                      </ACardContent>
                    </ACard>
                  ))}
                </div>

                {/* Goal Card */}
                <ACard>
                  <ACardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Твоя цель</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-600 mb-1">Начальный вес</div>
                        <div className="text-xl font-semibold text-gray-900">85 кг</div>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-600 mb-1">Текущий вес</div>
                        <div className="text-xl font-semibold text-blue-600">78 кг</div>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-600 mb-1">Целевой вес</div>
                        <div className="text-xl font-semibold text-gray-900">75 кг</div>
                      </div>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Осталось сбросить</div>
                      <div className="text-2xl font-bold text-blue-600">3 кг</div>
                    </div>
                  </ACardContent>
                </ACard>
              </div>
            )}

            {activeMenu === 'progress' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-bold mb-2 text-gray-900">Мой прогресс</h1>
                  <p className="text-gray-600">Отслеживай изменения</p>
                </div>

                {/* Measurements */}
                <ACard>
                  <ACardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Измерения</h3>
                    <div className="space-y-3">
                      {measurements.map((measurement, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <div className="font-medium text-gray-900">{measurement.param}</div>
                            <div className="text-sm text-gray-600">
                              {measurement.start} → {measurement.current}
                            </div>
                          </div>
                          <div className={`text-sm font-semibold ${measurement.change.startsWith('-') ? 'text-blue-600' : 'text-gray-900'}`}>
                            {measurement.change}
                          </div>
                        </div>
                      ))}
                    </div>
                  </ACardContent>
                </ACard>
              </div>
            )}

            {activeMenu === 'achievements' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-bold mb-2 text-gray-900">Достижения</h1>
                  <p className="text-gray-600">Твои успехи и награды</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <ACard key={index}>
                      <ACardContent className="p-6 text-center">
                        <div className="text-4xl mb-3">{achievement.emoji}</div>
                        <h3 className="font-semibold text-gray-900 mb-1">{achievement.title}</h3>
                        <p className="text-sm text-gray-600">{achievement.desc}</p>
                      </ACardContent>
                    </ACard>
                  ))}
                </div>
              </div>
            )}

            {activeMenu === 'settings' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-bold mb-2 text-gray-900">Настройки</h1>
                  <p className="text-gray-600">Управляй своим профилем</p>
                </div>

                <ACard>
                  <ACardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Личная информация</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                        <AInput defaultValue="Иван" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <AInput type="email" defaultValue="ivan@example.com" />
                      </div>
                      <AButton>Сохранить изменения</AButton>
                    </div>
                  </ACardContent>
                </ACard>
              </div>
            )}

            {activeMenu === 'workouts' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-bold mb-2 text-gray-900">Мои тренировки</h1>
                  <p className="text-gray-600">Управляй своими программами</p>
                </div>
                <ACard>
                  <ACardContent className="p-6">
                    <p className="text-gray-600">Здесь будут твои активные программы тренировок</p>
                    <AButton className="mt-4" onClick={() => onNavigate('workouts')}>
                      Выбрать программу
                    </AButton>
                  </ACardContent>
                </ACard>
              </div>
            )}

            {activeMenu === 'nutrition' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-bold mb-2 text-gray-900">Моё питание</h1>
                  <p className="text-gray-600">Твой персональный план и статистика</p>
                </div>
                <ACard>
                  <ACardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Питание сегодня</h3>
                    <div className="mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">Съедено / Цель</span>
                        <span className="text-sm font-semibold text-gray-900">1,320 / 1,800 ккал</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div className="bg-blue-600 h-4 rounded-full" style={{ width: '73%' }} />
                      </div>
                      <div className="text-xs text-right text-gray-500 mt-1">Осталось: 480 ккал</div>
                    </div>
                    <AButton className="w-full" variant="secondary" onClick={() => onNavigate('nutrition')}>
                      Выбрать план питания
                    </AButton>
                  </ACardContent>
                </ACard>
              </div>
            )}

            {activeMenu === 'subscription' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-bold mb-2 text-gray-900">Подписка</h1>
                  <p className="text-gray-600">Управляй своей подпиской</p>
                </div>
                <ACard>
                  <ACardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Текущий план</h3>
                    <div className="p-4 bg-gray-50 rounded-lg mb-4">
                      <div className="font-semibold text-gray-900 mb-1">Базовый план</div>
                      <div className="text-sm text-gray-600">Доступ до 31 декабря 2024</div>
                    </div>
                    <AButton onClick={() => onNavigate('profile')}>
                      Обновить подписку
                    </AButton>
                  </ACardContent>
                </ACard>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

