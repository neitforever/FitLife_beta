import { AButton } from './AButton';
import { ACard, ACardContent } from './ACard';
import { Apple } from 'lucide-react';

interface ANutritionPageProps {
  onNavigate: (page: string) => void;
}

export function ANutritionPage({ onNavigate }: ANutritionPageProps) {
  const mealPlans = [
    {
      title: 'Похудение на дефиците',
      description: 'Сбалансированный рацион с дефицитом калорий для безопасного похудения.',
      calories: '1400-1600 ккал/день',
    },
    {
      title: 'Набор мышечной массы',
      description: 'Высококалорийный рацион для роста мышц с профицитом калорий.',
      calories: '2800-3200 ккал/день',
    },
    {
      title: 'Здоровое питание',
      description: 'Сбалансированный рацион для поддержания веса и здоровья.',
      calories: '2000-2200 ккал/день',
    },
    {
      title: 'Вегетарианское питание',
      description: 'Полноценный рацион без мяса с достаточным количеством белка.',
      calories: '1800-2000 ккал/день',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="py-12 sm:py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Планы питания</h1>
          <p className="text-lg text-gray-700">
            Индивидуальные планы питания с рецептами и расчетом КБЖУ для достижения твоих целей.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mealPlans.map((plan, index) => (
              <ACard key={index} className="p-6">
                <ACardContent className="p-0 flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                  <p className="text-gray-700 text-sm mb-4 flex-grow">{plan.description}</p>
                  <div className="text-gray-600 text-sm mb-4">
                    <span className="font-medium">Калории:</span> {plan.calories}
                  </div>
                  <AButton variant="primary" onClick={() => onNavigate('profile')} className="w-full">
                    Выбрать план
                  </AButton>
                </ACardContent>
              </ACard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Персональные рекомендации</h2>
          <p className="text-lg text-gray-700 mb-8">
            Получите индивидуальные рекомендации по питанию, основанные на ваших целях и предпочтениях.
          </p>
          <AButton size="lg" onClick={() => onNavigate('profile')}>
            <Apple className="w-5 h-5 mr-2" />
            Получить рекомендации
          </AButton>
        </div>
      </section>
    </div>
  );
}
