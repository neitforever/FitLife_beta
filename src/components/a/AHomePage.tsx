import { AButton } from './AButton';
import { ACard, ACardContent } from './ACard';
import { Dumbbell, Apple, Users, Star } from 'lucide-react';

interface AHomePageProps {
  onNavigate: (page: string) => void;
}

export function AHomePage({ onNavigate }: AHomePageProps) {
  const stats = [
    { icon: Users, number: '15,000+', label: 'Активных пользователей' },
    { icon: Star, number: '4.8', label: 'Рейтинг приложения' },
    { icon: Dumbbell, number: '500,000+', label: 'Завершённых тренировок' },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="py-20 sm:py-24 text-center bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Достигай своих фитнес-целей с <span className="text-blue-600">FitLife</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8">
            Персональные тренировки и планы питания, адаптированные под твой ритм жизни.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AButton size="lg" onClick={() => onNavigate('profile')}>
              Начать бесплатно
            </AButton>
            <AButton variant="secondary" size="lg" onClick={() => onNavigate('workouts')}>
              Смотреть программы
            </AButton>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4">
                <stat.icon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Наши возможности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ACard className="p-6 text-center">
              <ACardContent className="p-0 flex flex-col items-center">
                <Dumbbell className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Персональные тренировки</h3>
                <p className="text-gray-700 text-center">
                  Программы тренировок от сертифицированных тренеров, адаптированные под твой уровень подготовки.
                </p>
                <AButton variant="link" onClick={() => onNavigate('workouts')} className="mt-4">
                  Подробнее
                </AButton>
              </ACardContent>
            </ACard>
            <ACard className="p-6 text-center">
              <ACardContent className="p-0 flex flex-col items-center">
                <Apple className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Планы питания</h3>
                <p className="text-gray-700 text-center">
                  Индивидуальные планы питания с рецептами и расчетом КБЖУ для достижения твоих целей.
                </p>
                <AButton variant="link" onClick={() => onNavigate('nutrition')} className="mt-4">
                  Подробнее
                </AButton>
              </ACardContent>
            </ACard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Готовы начать?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Присоединяйтесь к FitLife сегодня и начните свой путь к здоровому образу жизни.
          </p>
          <AButton size="lg" onClick={() => onNavigate('profile')}>
            Начать бесплатно
          </AButton>
        </div>
      </section>
    </div>
  );
}
