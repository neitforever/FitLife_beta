import { AButton } from './AButton';
import { ACard, ACardContent } from './ACard';
import { Dumbbell, Apple, Users, Flame, Star } from 'lucide-react';

interface AHomePageProps {
  onNavigate: (page: string) => void;
}

export function AHomePage({ onNavigate }: AHomePageProps) {
  const stats = [
    { icon: Users, number: '15,000+', label: 'Активных пользователей' },
    { icon: Flame, number: '500,000+', label: 'Завершённых тренировок' },
    { icon: Star, number: '4.8', label: 'Рейтинг приложения' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 sm:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Достигай своих фитнес-целей с FitLife
            </h1>
            <p className="text-lg sm:text-xl mb-10 text-gray-600 max-w-2xl mx-auto">
              Персональные тренировки и планы питания, адаптированные под твой ритм жизни
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AButton
                size="lg"
                onClick={() => onNavigate('profile')}
                className="w-full sm:w-auto min-w-[200px]"
              >
                Бесплатная неделя
              </AButton>
              <AButton
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto min-w-[200px]"
              >
                Смотреть демо
              </AButton>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-[12px] border border-gray-200">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 mb-4">
                    <stat.icon className="w-6 h-6 text-gray-700" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Всё для твоих тренировок</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Мы объединили лучшие методики и технологии для твоего результата</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ACard>
              <ACardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                    <Dumbbell className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Персональные тренировки</h3>
                <p className="text-gray-600 mb-8">Программы тренировок от сертифицированных тренеров, адаптированные под твой уровень подготовки.</p>
                <AButton variant="secondary" className="w-full sm:w-auto">
                  Выбрать программу
                </AButton>
              </ACardContent>
            </ACard>
            <ACard>
              <ACardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                    <Apple className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Планы питания</h3>
                <p className="text-gray-600 mb-8">Индивидуальные планы питания с рецептами и расчетом КБЖУ для достижения твоих целей.</p>
                <AButton variant="secondary" className="w-full sm:w-auto">
                  Составить план
                </AButton>
              </ACardContent>
            </ACard>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 sm:py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Популярные программы</h2>
            <p className="text-lg text-gray-600">Выбери программу под свою цель</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ACard className="overflow-hidden">
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img 
                    src="https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Похудение" 
                    className="w-full h-full object-cover" 
                />
              </div>
              <ACardContent className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-gray-900">Похудение для начинающих</h4>
                <p className="text-gray-600 mb-4 text-sm flex items-center gap-4">
                    <span>⏱ 8 недель</span>
                    <span>•</span>
                    <span>🏃‍♂️ Новичок</span>
                </p>
                <AButton className="w-full" onClick={() => onNavigate('workouts')}>
                  Начать программу
                </AButton>
              </ACardContent>
            </ACard>
            <ACard className="overflow-hidden">
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img 
                    src="https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Масса" 
                    className="w-full h-full object-cover" 
                />
              </div>
              <ACardContent className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-gray-900">Набор мышечной массы</h4>
                <p className="text-gray-600 mb-4 text-sm flex items-center gap-4">
                    <span>⏱ 12 недель</span>
                    <span>•</span>
                    <span>💪 Средний</span>
                </p>
                <AButton className="w-full" onClick={() => onNavigate('workouts')}>
                  Начать программу
                </AButton>
              </ACardContent>
            </ACard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Начни меняться уже сегодня</h2>
          <p className="text-lg sm:text-xl mb-10 text-gray-300">Первая неделя бесплатно. Без привязки карты.</p>
          <AButton 
            size="lg" 
            variant="secondary"
            onClick={() => onNavigate('profile')}
            className="bg-white text-gray-900 hover:bg-gray-100"
          >
            Попробовать бесплатно
          </AButton>
        </div>
      </section>
    </div>
  );
}

