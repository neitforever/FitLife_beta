import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Input } from './ui/input';
import { Label } from './ui/label';
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
  Check,
  Upload
} from 'lucide-react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area
} from 'recharts';

interface ProfilePageProps {
  onNavigate: (page: string) => void;
}

export function ProfilePage({ onNavigate }: ProfilePageProps) {
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
    { icon: Dumbbell, label: 'Тренировки', value: '18', total: '124', subtitle: 'Этот месяц / Всего', badge: 'Молодец! 🔥' },
    { icon: Flame, label: 'Калории', value: '12,450', subtitle: 'Сожжено за месяц', extra: 'Средне: 692 ккал' },
    { icon: Calendar, label: 'Дни подряд', value: '15', subtitle: 'Текущая серия 🔥', extra: 'Лучшая: 23 дня' },
    { icon: Star, label: 'Уровень', value: '12', subtitle: '4,850 / 6,000 XP', progress: 81 },
  ];

  const measurements = [
    { param: 'Вес', start: '85 кг', current: '78 кг', change: '-7 кг' },
    { param: 'Талия', start: '95 см', current: '88 см', change: '-7 см' },
    { param: 'Грудь', start: '102 см', current: '98 см', change: '-4 см' },
    { param: 'Бёдра', start: '105 см', current: '100 см', change: '-5 см' },
    { param: 'Руки', start: '36 см', current: '35 см', change: '-1 см' },
  ];

  const weightData = [
    { name: 'Июль', weight: 88 },
    { name: 'Авг', weight: 86 },
    { name: 'Сен', weight: 84 },
    { name: 'Окт', weight: 81 },
    { name: 'Ноя', weight: 79 },
    { name: 'Дек', weight: 78 },
  ];

  const activityData = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    activity: Math.floor(Math.random() * 50) + 20 // Random activity minutes
  }));

  const achievementsUnlocked = [
    { emoji: '🔥', title: 'Неделя без пропусков', desc: '7 дней подряд' },
    { emoji: '💪', title: 'Первая тренировка', desc: 'Начал путь' },
    { emoji: '📉', title: 'Минус 5 кг', desc: 'Отличный старт' },
    { emoji: '🎯', title: '10 тренировок', desc: 'Продолжай в том же духе' },
    { emoji: '⭐', title: 'Месяц на платформе', desc: 'Уже месяц с нами' },
  ];

  const achievementsInProgress = [
    { emoji: '🏆', title: 'Минус 10 кг', progress: 70, current: 7, total: 10 },
    { emoji: '🔥', title: '30 дней подряд', progress: 50, current: 15, total: 30 },
    { emoji: '💪', title: '50 тренировок', progress: 36, current: 18, total: 50 },
  ];

  const achievementsLocked = [
    { emoji: '👑', title: '100 тренировок' },
    { emoji: '🎖️', title: 'Год на платформе' },
    { emoji: '🏅', title: 'Челлендж-мастер' },
  ];

  const mealLog = [
    { meal: 'Завтрак', food: 'Овсянка с ягодами', calories: 350, done: true },
    { meal: 'Обед', food: 'Курица с гречкой', calories: 520, done: true },
    { meal: 'Перекус', food: 'Творог', calories: 200, done: true },
    { meal: 'Ужин', food: 'запланирован', calories: 450, done: false },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-white shadow-lg sticky top-24">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-[#FF6B35]/20">
                    <AvatarFallback className="bg-gradient-to-r from-[#FF6B35] to-[#FF006B] text-white text-2xl font-bold">
                      ИП
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-bold text-lg">Иван Петров</h3>
                  <div className="text-sm text-gray-500">@ivan_fitlife</div>
                </div>
                <nav className="space-y-2">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveMenu(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                        activeMenu === item.id
                          ? 'bg-gradient-to-r from-[#FF6B35] to-[#FF006B] text-white shadow-md transform scale-105'
                          : 'text-gray-700 hover:bg-gray-100 hover:translate-x-1'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  ))}
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors mt-4 border-t">
                    <LogOut className="w-5 h-5" />
                    <span>Выйти</span>
                  </button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeMenu === 'dashboard' && (
              <div className="space-y-6">
                <div className="animate-fade-in">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Привет, Иван! 👋</h1>
                  <p className="text-gray-600">Продолжай двигаться к своей цели</p>
                </div>

                {/* Goal Card */}
                <Card className="overflow-hidden border-none shadow-xl bg-white">
                  <CardContent className="p-6">
                    <h3 className="mb-6 font-bold text-lg">Твоя цель</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                      <div className="space-y-4">
                          <div className="flex justify-between items-center text-sm p-3 bg-gray-50 rounded-lg">
                            <span className="text-gray-600">Начальный вес</span>
                            <span className="font-semibold">85 кг</span>
                        </div>
                          <div className="flex justify-between items-center text-sm p-3 bg-gray-50 rounded-lg">
                            <span className="text-gray-600">Текущий вес</span>
                            <span className="font-semibold text-[#FF6B35]">78 кг</span>
                        </div>
                          <div className="flex justify-between items-center text-sm p-3 bg-gray-50 rounded-lg">
                            <span className="text-gray-600">Целевой вес</span>
                            <span className="font-semibold text-[#10B981]">75 кг</span>
                        </div>
                        </div>
                        <div className="flex items-end justify-between">
                      <div>
                            <span className="text-gray-600 text-sm">Осталось сбросить</span>
                            <div className="text-3xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#FF006B] bg-clip-text text-transparent">
                              3 кг
                              </div>
                              </div>
                              </div>
                            </div>
                      <div className="flex flex-col h-full">
                        <div className="mb-2 text-sm text-gray-600 flex justify-between">
                            <span>Прогресс</span>
                            <span>70%</span>
                          </div>
                        <Progress value={70} className="h-4 mb-6" />
                        
                        <div className="flex-grow min-h-[150px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={weightData}>
                                    <defs>
                                        <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#FF6B35" stopOpacity={0.8}/>
                                            <stop offset="95%" stopColor="#FF6B35" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                    <YAxis domain={['dataMin - 1', 'dataMax + 1']} hide />
                                    <Tooltip 
                                        contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    />
                                    <Area type="monotone" dataKey="weight" stroke="#FF6B35" fillOpacity={1} fill="url(#colorWeight)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="transform hover:-translate-y-1 transition-transform duration-300">
                      <Card className="h-full">
                        <CardContent className="p-6 flex flex-col h-full">
                          <stat.icon className="w-8 h-8 text-[#FF6B35] mb-3" />
                          <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-[#FF6B35] to-[#FF006B] bg-clip-text text-transparent">
                            {stat.value}
                          </div>
                          <div className="text-sm font-medium text-gray-700 mb-2">{stat.label}</div>
                          <div className="text-xs text-gray-500 mt-auto">{stat.subtitle}</div>
                          {stat.extra && (
                            <div className="text-xs text-gray-500 mt-1">{stat.extra}</div>
                          )}
                          {stat.progress && (
                            <Progress value={stat.progress} className="h-1.5 mt-3" />
                          )}
                          {stat.badge && (
                            <Badge className="mt-3 bg-[#10B981] self-start">{stat.badge}</Badge>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>

                {/* Photo Progress */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-6 font-bold text-lg">Фото до/после</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { label: '1 октября - Старт (85 кг)', image: 'https://images.pexels.com/photos/1552248/pexels-photo-1552248.jpeg?auto=compress&cs=tinysrgb&w=800' },
                        { label: '15 октября - 2 недели (83 кг)', image: 'https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=800' },
                        { label: '1 ноября - 1 месяц (81 кг)', image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800' },
                        { label: 'Сегодня - Результат (78 кг)', image: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=800' }
                      ].map((item, index) => (
                        <div key={index} className="group cursor-pointer">
                          <div className="bg-gray-100 rounded-xl aspect-[3/4] overflow-hidden shadow-sm relative mb-3">
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
                            <img
                              src={item.image}
                              alt={item.label}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold shadow-sm z-20">
                                {index + 1}
                          </div>
                          </div>
                          <div className="text-xs text-center font-medium text-gray-700">{item.label}</div>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="mt-6 w-full hover:bg-[#FF6B35] hover:text-white transition-colors">
                      <Upload className="w-4 h-4 mr-2" />
                      Загрузить новые фото
                    </Button>
                  </CardContent>
                </Card>

                {/* Today's Workout */}
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="mb-4 font-bold text-lg">Тренировка на сегодня</h3>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1 space-y-3">
                        <div className="flex justify-between text-sm py-2 border-b border-gray-100">
                          <span className="text-gray-600">Программа:</span>
                          <span className="font-medium">"Жиросжигание за 30 дней"</span>
                          </div>
                        <div className="flex justify-between text-sm py-2 border-b border-gray-100">
                          <span className="text-gray-600">День:</span>
                          <span className="font-medium">15 / 30</span>
                        </div>
                        <div className="flex justify-between text-sm py-2 border-b border-gray-100">
                          <span className="text-gray-600">Тренировка:</span>
                          <span className="font-medium">"Full Body HIIT"</span>
                      </div>
                        <div className="flex justify-between text-sm py-2 border-b border-gray-100">
                          <span className="text-gray-600">Длительность:</span>
                          <span className="font-medium">35 минут</span>
                          </div>
                        <div className="flex justify-between text-sm py-2">
                          <span className="text-gray-600">Упражнений:</span>
                          <span className="font-medium">8</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 justify-center min-w-[200px]">
                        <div className="text-center mb-2">
                            <Badge className="bg-gray-100 text-gray-600 hover:bg-gray-200">Не начата</Badge>
                          </div>
                        <Button variant="gradient-card" className="w-full shadow-md hover:shadow-lg">
                          Начать тренировку
                      </Button>
                    <Button
                          variant="outline"
                          className="bg-white hover:bg-gray-50"
                          onClick={() => alert('Функция замены тренировки будет доступна в премиум версии')}
                    >
                          Заменить
                    </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Nutrition Today */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-6 font-bold text-lg">Питание сегодня</h3>
                    <div className="mb-8">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-600">Съедено / Цель</span>
                        <span className="text-sm font-bold">1,320 / 1,800 ккал</span>
                      </div>
                      <Progress value={73} className="h-4 mb-2" />
                      <div className="text-xs text-right text-gray-500">Осталось: 480 ккал</div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      <div className="text-center p-3 bg-blue-50 rounded-xl">
                        <div className="text-sm text-gray-600 mb-1">Белки</div>
                        <div className="text-lg font-bold text-blue-700 mb-1">105/120</div>
                        <Progress value={88} className="h-1.5" />
                      </div>
                      <div className="text-center p-3 bg-yellow-50 rounded-xl">
                        <div className="text-sm text-gray-600 mb-1">Жиры</div>
                        <div className="text-lg font-bold text-yellow-700 mb-1">48/60</div>
                        <Progress value={80} className="h-1.5" />
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-xl">
                        <div className="text-sm text-gray-600 mb-1">Углеводы</div>
                        <div className="text-lg font-bold text-green-700 mb-1">152/180</div>
                        <Progress value={84} className="h-1.5" />
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      {mealLog.map((meal, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between py-3 px-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            {meal.done ? (
                              <div className="w-6 h-6 rounded-full bg-[#10B981]/10 flex items-center justify-center">
                                <Check className="w-4 h-4 text-[#10B981]" />
                              </div>
                            ) : (
                              <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
                            )}
                            <div>
                              <div className="text-sm font-medium">{meal.meal}</div>
                              <div className="text-xs text-gray-500">{meal.food}</div>
                            </div>
                          </div>
                          <div className="text-sm font-medium text-gray-600">{meal.calories} ккал</div>
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full bg-white hover:bg-gray-50 mt-2"
                      onClick={() => alert('Функция добавления приема пищи будет доступна в премиум версии')}
                    >
                      Добавить приём пищи
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeMenu === 'nutrition' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-bold mb-2">Моё питание</h1>
                  <p className="text-gray-600">Отслеживание калорий и макронутриентов</p>
                </div>

                {/* Today's Nutrition Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Apple className="w-6 h-6 text-orange-600" />
                        <Badge className="bg-orange-200 text-orange-700">Сегодня</Badge>
                      </div>
                      <div className="text-2xl font-bold text-orange-700 mb-1">1,320</div>
                      <div className="text-sm text-orange-600">ккал съедено</div>
                      <Progress value={73} className="h-2 mt-3" />
                      <div className="text-xs text-orange-600 mt-1">из 1,800 ккал</div>
                    </CardContent>
                  </Card>

                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-6">
                      <div className="text-sm text-gray-600 mb-2">Белки</div>
                      <div className="text-2xl font-bold text-blue-700 mb-1">105г</div>
                      <div className="text-xs text-gray-500 mb-2">из 120г</div>
                      <Progress value={88} className="h-2" />
                    </CardContent>
                  </Card>

                  <Card className="bg-yellow-50 border-yellow-200">
                    <CardContent className="p-6">
                      <div className="text-sm text-gray-600 mb-2">Жиры</div>
                      <div className="text-2xl font-bold text-yellow-700 mb-1">48г</div>
                      <div className="text-xs text-gray-500 mb-2">из 60г</div>
                      <Progress value={80} className="h-2" />
                    </CardContent>
                  </Card>

                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="p-6">
                      <div className="text-sm text-gray-600 mb-2">Углеводы</div>
                      <div className="text-2xl font-bold text-green-700 mb-1">152г</div>
                      <div className="text-xs text-gray-500 mb-2">из 180г</div>
                      <Progress value={84} className="h-2" />
                    </CardContent>
                  </Card>
                </div>

                {/* Weekly Calories Chart */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 font-bold text-lg">Калории за неделю</h3>
                    <div className="h-[250px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={[
                          { day: 'Пн', calories: 1850, goal: 1800 },
                          { day: 'Вт', calories: 1920, goal: 1800 },
                          { day: 'Ср', calories: 1750, goal: 1800 },
                          { day: 'Чт', calories: 1880, goal: 1800 },
                          { day: 'Пт', calories: 1650, goal: 1800 },
                          { day: 'Сб', calories: 2100, goal: 1800 },
                          { day: 'Вс', calories: 1320, goal: 1800 }
                        ]}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} />
                          <XAxis dataKey="day" axisLine={false} tickLine={false} />
                          <YAxis axisLine={false} tickLine={false} />
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                          />
                          <Bar dataKey="calories" fill="url(#colorCalories)" radius={[4, 4, 0, 0]} />
                          <defs>
                            <linearGradient id="colorCalories" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#FF6B35" />
                              <stop offset="100%" stopColor="#FF006B" />
                            </linearGradient>
                          </defs>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                {/* Today's Meals */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-bold text-lg">Приёмы пищи сегодня</h3>
                      <Button 
                        variant="gradient-card" 
                        size="sm"
                        onClick={() => alert('Функция добавления приема пищи будет доступна в премиум версии')}
                      >
                        <Apple className="w-4 h-4 mr-2" />
                        Добавить
                      </Button>
                    </div>
                    
                    <div className="space-y-3">
                      {mealLog.map((meal, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-[#FF6B35] hover:shadow-md transition-all"
                        >
                          <div className="flex items-center gap-4 flex-1">
                            {meal.done ? (
                              <div className="w-10 h-10 rounded-full bg-[#10B981]/10 flex items-center justify-center">
                                <Check className="w-5 h-5 text-[#10B981]" />
                              </div>
                            ) : (
                              <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center">
                                <div className="w-3 h-3 rounded-full bg-gray-300" />
                              </div>
                            )}
                            <div className="flex-1">
                              <div className="font-semibold text-gray-900">{meal.meal}</div>
                              <div className="text-sm text-gray-500">{meal.food}</div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-gray-900">{meal.calories} ккал</div>
                              {meal.done && (
                                <Badge className="bg-green-100 text-green-700 mt-1">Съедено</Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Meal Plan */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-6 font-bold text-lg">План питания на неделю</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        { day: 'Понедельник', meals: 4, calories: 1850, status: 'completed' },
                        { day: 'Вторник', meals: 4, calories: 1920, status: 'completed' },
                        { day: 'Среда', meals: 4, calories: 1750, status: 'completed' },
                        { day: 'Четверг', meals: 4, calories: 1880, status: 'completed' },
                        { day: 'Пятница', meals: 4, calories: 1650, status: 'completed' },
                        { day: 'Суббота', meals: 4, calories: 2100, status: 'completed' },
                        { day: 'Воскресенье', meals: 3, calories: 1320, status: 'in-progress' }
                      ].map((day, index) => (
                        <div
                          key={index}
                          className={`p-4 rounded-xl border-2 ${
                            day.status === 'completed'
                              ? 'border-green-200 bg-green-50'
                              : day.status === 'in-progress'
                              ? 'border-[#FF6B35] bg-orange-50'
                              : 'border-gray-200 bg-gray-50'
                          }`}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div className="font-semibold text-gray-900">{day.day}</div>
                            {day.status === 'completed' && (
                              <Check className="w-5 h-5 text-green-600" />
                            )}
                            {day.status === 'in-progress' && (
                              <Badge className="bg-[#FF6B35] text-white">Сегодня</Badge>
                            )}
                          </div>
                          <div className="text-sm text-gray-600 mb-1">{day.meals} приёма пищи</div>
                          <div className="text-lg font-bold text-gray-900">{day.calories} ккал</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recommendations */}
                <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                  <CardContent className="p-6">
                    <h3 className="mb-4 font-bold text-lg flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-500" />
                      Рекомендации
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-white/50 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                        <div>
                          <div className="font-medium text-gray-900">Увеличьте потребление белка</div>
                          <div className="text-sm text-gray-600">Добавьте куриную грудку или рыбу на ужин</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-white/50 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                        <div>
                          <div className="font-medium text-gray-900">Пейте больше воды</div>
                          <div className="text-sm text-gray-600">Выпито 1.2л из 2.5л сегодня</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-white/50 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                        <div>
                          <div className="font-medium text-gray-900">Отличная неделя!</div>
                          <div className="text-sm text-gray-600">Вы придерживались плана 6 из 7 дней</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeMenu === 'progress' && (
              <div className="space-y-6">
                <div>
                    <h1 className="text-2xl font-bold mb-2">Мой прогресс</h1>
                    <p className="text-gray-600">Динамика веса и измерений</p>
                </div>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 font-bold">Мои измерения</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 text-gray-500 font-medium">Параметр</th>
                            <th className="text-right py-3 text-gray-500 font-medium">1 окт</th>
                            <th className="text-right py-3 text-gray-500 font-medium">Сегодня</th>
                            <th className="text-right py-3 text-gray-500 font-medium">Изменение</th>
                          </tr>
                        </thead>
                        <tbody>
                          {measurements.map((m, index) => (
                            <tr key={index} className="border-b last:border-0 hover:bg-gray-50">
                              <td className="py-4 font-medium">{m.param}</td>
                              <td className="text-right py-4 text-gray-600">{m.start}</td>
                              <td className="text-right py-4 text-gray-900 font-medium">{m.current}</td>
                              <td className="text-right py-4 text-[#10B981] font-medium">{m.change} ↓</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="mt-8">
                        <h4 className="text-sm font-medium mb-4">График изменения веса</h4>
                        <div className="h-[300px] w-full bg-gray-50 rounded-xl p-4 border border-gray-100">
                             <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={weightData}>
                                    <defs>
                                        <linearGradient id="colorWeightProgress" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                                            <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12}} />
                                    <YAxis domain={['dataMin - 1', 'dataMax + 1']} axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12}} />
                                    <Tooltip 
                                        contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    />
                                    <Area type="monotone" dataKey="weight" stroke="#10B981" strokeWidth={3} fillOpacity={1} fill="url(#colorWeightProgress)" />
                                </AreaChart>
                            </ResponsiveContainer>
                          </div>
                        </div>
                    
                    <Button variant="outline" className="mt-6 w-full">
                      Добавить новое измерение
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeMenu === 'achievements' && (
              <div className="space-y-6">
                <div>
                    <h1 className="text-2xl font-bold mb-2">Достижения</h1>
                    <p className="text-gray-600">Твои награды и цели</p>
                </div>

                <Card className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-8">
                      <h4 className="mb-4 font-bold text-gray-800">Получены</h4>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {achievementsUnlocked.map((achievement, index) => (
                          <div
                            key={index}
                            className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-xl p-4 text-center text-white shadow-md transform hover:scale-105 transition-transform"
                          >
                            <div className="text-4xl mb-2 drop-shadow-md">{achievement.emoji}</div>
                            <div className="text-xs font-bold mb-1 shadow-black/10">{achievement.title}</div>
                            <div className="text-[10px] opacity-90">{achievement.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="mb-4 font-bold text-gray-800">В процессе</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {achievementsInProgress.map((achievement, index) => (
                          <div
                            key={index}
                            className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-gray-300 transition-colors"
                          >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="text-2xl">{achievement.emoji}</div>
                                <div className="font-medium text-sm">{achievement.title}</div>
                            </div>
                            <Progress value={achievement.progress} className="h-2 mb-2" />
                            <div className="text-xs text-right text-gray-500">
                              {achievement.current} / {achievement.total} ({achievement.progress}%)
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-4 font-bold text-gray-800">Заблокированы</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {achievementsLocked.map((achievement, index) => (
                          <div
                            key={index}
                            className="bg-gray-100 rounded-xl p-4 text-center opacity-60 grayscale"
                          >
                            <div className="text-3xl mb-2">{achievement.emoji}</div>
                            <div className="text-xs font-medium">{achievement.title}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeMenu === 'settings' && (
              <div className="space-y-6">
                <div>
                    <h1 className="text-2xl font-bold mb-2">Настройки</h1>
                    <p className="text-gray-600">Управление профилем</p>
                </div>

                    <Card className="bg-white shadow-lg">
                      <CardContent className="p-6 space-y-4">
                    <h3 className="mb-2 font-bold">Основная информация</h3>
                    <div>
                      <Label htmlFor="name">Имя</Label>
                      <Input id="name" type="text" defaultValue="Иван Петров" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="ivan.petrov@example.com" className="mt-1" />
                    </div>
                    <Button
                      variant="gradient-card"
                      onClick={() => alert('Изменения сохранены!')}
                      className="mt-2"
                    >
                      Сохранить изменения
                    </Button>
                  </CardContent>
                </Card>

                    <Card className="bg-white shadow-lg">
                      <CardContent className="p-6 space-y-4">
                    <h3 className="mb-2 font-bold">Смена пароля</h3>
                    <div>
                      <Label htmlFor="current-password">Текущий пароль</Label>
                      <Input id="current-password" type="password" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="new-password">Новый пароль</Label>
                      <Input id="new-password" type="password" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="confirm-password">Подтвердите новый пароль</Label>
                      <Input id="confirm-password" type="password" className="mt-1" />
                    </div>
                    <Button
                      variant="gradient-card"
                      onClick={() => alert('Пароль успешно изменен!')}
                      className="mt-2"
                    >
                      Сменить пароль
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeMenu === 'subscription' && (
              <div className="space-y-6">
                <div>
                    <h1 className="text-2xl font-bold mb-2">Моя подписка</h1>
                    <p className="text-gray-600">Управление планом FitLife</p>
                </div>

                <Card className="bg-gradient-to-r from-[#FF6B35] to-[#FF006B] text-white overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <CardContent className="p-8 relative z-10">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h3 className="text-white text-2xl font-bold mb-1">Premium Plan</h3>
                            <Badge className="bg-white/20 text-white hover:bg-white/30 border-none">Активен</Badge>
                      </div>
                        <div className="text-right">
                            <div className="text-3xl font-bold">29 BYN</div>
                            <div className="text-sm opacity-80">/ месяц</div>
                      </div>
                      </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-sm text-white/90">
                      <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                        <div className="opacity-70 text-xs mb-1">Действует до</div>
                        <div className="font-semibold">20 января 2026</div>
                    </div>
                      <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                        <div className="opacity-70 text-xs mb-1">Автопродление</div>
                        <div className="font-semibold">Включено</div>
                      </div>
                      <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                        <div className="opacity-70 text-xs mb-1">Следующее списание</div>
                        <div className="font-semibold">Через 15 дней</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button variant="accent" className="bg-white text-[#FF6B35] hover:bg-gray-100">
                        Управлять подпиской
                      </Button>
                      <Button variant="outline" className="text-white border-white hover:bg-white/20">
                        Отменить
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 font-bold">Доступные тарифы</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="mb-2 font-bold text-lg">Базовый</h4>
                        <div className="text-3xl font-bold mb-4 text-gray-700">0 BYN</div>
                        <ul className="text-sm text-gray-600 text-left space-y-3 mb-6">
                          <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500"/>Ограниченные тренировки</li>
                          <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500"/>Базовые рецепты</li>
                          <li className="flex items-center gap-2 text-gray-400"><div className="w-4 h-4 flex items-center justify-center">✕</div>Персональный план</li>
                        </ul>
                        <Button
                          variant="outline"
                          className="w-full bg-white"
                          onClick={() => alert('Переход к оплате базовой подписки')}
                        >
                          Перейти на базовый
                        </Button>
                      </div>
                      <div className="border-2 border-[#FF6B35] rounded-xl p-6 text-center bg-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-[#FF6B35] text-white text-xs px-2 py-1 rounded-bl-lg">Текущий</div>
                        <h4 className="mb-2 font-bold text-lg text-[#FF6B35]">Premium</h4>
                        <div className="text-3xl font-bold mb-4 text-[#FF6B35]">29 BYN</div>
                        <ul className="text-sm text-gray-600 text-left space-y-3 mb-6">
                          <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#FF6B35]"/>Все тренировки</li>
                          <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#FF6B35]"/>Все рецепты</li>
                          <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#FF6B35]"/>Персональный план</li>
                          <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#FF6B35]"/>Трекер прогресса</li>
                        </ul>
                        <Button
                          variant="gradient"
                          className="w-full opacity-50 cursor-not-allowed"
                          disabled
                        >
                          Уже активен
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeMenu === 'workouts' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-bold mb-2">Мои тренировки</h1>
                  <p className="text-gray-600">История и статистика тренировок</p>
          </div>

                <Card className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="mb-4 font-bold">Последние завершенные</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm py-3 border-b border-gray-100">
                        <span className="font-medium">Full Body HIIT</span>
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-none">Завершено</Badge>
        </div>
                      <div className="flex items-center justify-between text-sm py-3 border-b border-gray-100">
                        <span className="font-medium">Кардио 30 мин</span>
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-none">Завершено</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm py-3">
                        <span className="font-medium">Йога для спины</span>
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-none">Завершено</Badge>
                      </div>
                    </div>
                    <Button
                      variant="gradient-card" className="mt-6 w-full"
                      onClick={() => onNavigate('workouts')}
                    >
                      Посмотреть все тренировки
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="mb-6 font-bold">Активность за 30 дней</h3>
                    <div className="h-[250px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={activityData}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} />
                          <Tooltip 
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
                            cursor={{ fill: 'transparent' }}
                          />
                          <Bar dataKey="activity" fill="url(#colorActivity)" radius={[4, 4, 0, 0]} />
                          <defs>
                            <linearGradient id="colorActivity" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#FF6B35" />
                              <stop offset="100%" stopColor="#FF006B" />
                            </linearGradient>
                          </defs>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
