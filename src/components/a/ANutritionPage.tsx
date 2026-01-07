import { useState } from 'react';
import { AButton } from './AButton';
import { ACard, ACardContent } from './ACard';
import { Clock, Flame } from 'lucide-react';

interface ANutritionPageProps {
  onNavigate: (page: string) => void;
}

export function ANutritionPage({ onNavigate }: ANutritionPageProps) {
  const [waterIntake, setWaterIntake] = useState(1500);
  const waterGoal = 2500;

  const mealPlans = [
    {
      title: 'Похудение на дефиците',
      calories: '1400-1600 ккал/день',
      macros: 'Б 100г / Ж 50г / У 150г',
      meals: '4-5',
      forWho: 'Женщины, похудение',
      description: 'Сбалансированный рацион с дефицитом калорий для безопасного похудения 0.5-1 кг в неделю',
      price: '15 BYN/мес',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Набор мышечной массы',
      calories: '2800-3200 ккал/день',
      macros: 'Б 180г / Ж 80г / У 400г',
      meals: '5-6',
      forWho: 'Мужчины, набор массы',
      description: 'Высококалорийный рацион для роста мышц с профицитом калорий',
      price: '18 BYN/мес',
      image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Здоровое питание (поддержание)',
      calories: '2000-2200 ккал/день',
      macros: 'Б 120г / Ж 70г / У 250г',
      meals: '4',
      forWho: 'Мужчины/женщины, поддержание',
      description: 'Сбалансированный рацион для поддержания веса и здоровья',
      price: '12 BYN/мес',
      image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-12 sm:py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Планы питания</h1>
          <p className="text-lg text-gray-600">Выбери план под свою цель</p>
        </div>
      </section>

      {/* Meal Plans */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mealPlans.map((plan, index) => (
              <ACard key={index} className="overflow-hidden">
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img 
                    src={plan.image} 
                    alt={plan.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <ACardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{plan.title}</h3>
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Flame className="w-4 h-4" />
                      <span>{plan.calories}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{plan.meals} приёмов пищи</span>
                    </div>
                    <p className="text-xs text-gray-500">{plan.macros}</p>
                    <p className="text-xs text-gray-500">{plan.forWho}</p>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-gray-900">{plan.price}</span>
                  </div>
                  <AButton 
                    className="w-full"
                    onClick={() => onNavigate('profile')}
                  >
                    Выбрать план
                  </AButton>
                </ACardContent>
              </ACard>
            ))}
          </div>
        </div>
      </section>

      {/* Water Intake */}
      <section className="py-12 sm:py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ACard>
            <ACardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Вода сегодня</h3>
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Выпито / Цель</span>
                  <span className="text-sm font-semibold text-gray-900">{waterIntake} / {waterGoal} мл</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div 
                    className="bg-blue-600 h-4 rounded-full transition-all"
                    style={{ width: `${(waterIntake / waterGoal) * 100}%` }}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <AButton 
                  variant="secondary"
                  size="sm"
                  onClick={() => setWaterIntake(Math.min(waterIntake + 250, waterGoal))}
                >
                  +250 мл
                </AButton>
                <AButton 
                  variant="secondary"
                  size="sm"
                  onClick={() => setWaterIntake(Math.min(waterIntake + 500, waterGoal))}
                >
                  +500 мл
                </AButton>
              </div>
            </ACardContent>
          </ACard>
        </div>
      </section>
    </div>
  );
}

