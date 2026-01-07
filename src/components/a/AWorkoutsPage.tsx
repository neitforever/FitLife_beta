import { useState } from 'react';
import { AButton } from './AButton';
import { ACard, ACardContent } from './ACard';
import { Star, Clock, Users, MapPin, X } from 'lucide-react';

interface AWorkoutsPageProps {
  onNavigate: (page: string) => void;
}

interface Program {
  id: number;
  title: string;
  badge?: string;
  rating: number;
  reviews: number;
  goal: string;
  level: string;
  place: string;
  duration: string;
  programLength: string;
  workouts: number;
  frequency: string;
  time: string;
  trainer: string;
  description: string;
  results: string;
  image: string;
}

export function AWorkoutsPage({ onNavigate }: AWorkoutsPageProps) {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const programs: Program[] = [
    {
      id: 1,
      title: 'Жиросжигание за 30 дней',
      badge: 'Бестселлер',
      rating: 4.9,
      reviews: 1245,
      goal: 'weight-loss',
      level: 'beginner',
      place: 'home',
      duration: '30-45',
      programLength: '30 дней',
      workouts: 20,
      frequency: '4-5 в неделю',
      time: '30-40 мин',
      trainer: 'Анна Сидорова',
      description: 'Интенсивные кардио и силовые для максимального жиросжигания',
      results: 'В среднем -5 кг за месяц',
      image: 'https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Рельефное тело за 12 недель',
      badge: 'Популярная',
      rating: 4.8,
      reviews: 892,
      goal: 'definition',
      level: 'intermediate',
      place: 'gym',
      duration: '45-60',
      programLength: '12 недель',
      workouts: 48,
      frequency: '4 в неделю',
      time: '45-60 мин',
      trainer: 'Дмитрий Волков',
      description: 'Сплит-тренировки для прорисовки мышц',
      results: 'Рельефное тело, -8% жира',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Full Body дома',
      badge: 'Для дома',
      rating: 4.7,
      reviews: 756,
      goal: 'tone',
      level: 'any',
      place: 'home',
      duration: '30-45',
      programLength: '8 недель',
      workouts: 24,
      frequency: '3 в неделю',
      time: '40 мин',
      trainer: 'Елена Петрова',
      description: 'Тренировки всего тела без оборудования',
      results: 'Подтянутое тело',
      image: 'https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'Масса и сила',
      badge: 'Продвинутая',
      rating: 4.9,
      reviews: 623,
      goal: 'muscle-gain',
      level: 'advanced',
      place: 'gym',
      duration: '60+',
      programLength: '16 недель',
      workouts: 64,
      frequency: '4 в неделю',
      time: '60-75 мин',
      trainer: 'Максим Иванов',
      description: 'Прогрессивная перегрузка для роста',
      results: '+6-8 кг мышц',
      image: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-12 sm:py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Программы тренировок</h1>
          <p className="text-lg text-gray-600">Выбери программу под свою цель</p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <ACard key={program.id} className="overflow-hidden">
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover" 
                  />
                  {program.badge && (
                    <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-lg text-xs font-medium text-gray-900">
                      {program.badge}
                    </div>
                  )}
                </div>
                <ACardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{program.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium text-gray-900">{program.rating}</span>
                    <span className="text-sm text-gray-500">({program.reviews})</span>
                  </div>
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{program.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{program.workouts} тренировок</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{program.place === 'home' ? 'Дома' : 'В зале'}</span>
                    </div>
                  </div>
                  <AButton 
                    className="w-full" 
                    onClick={() => setSelectedProgram(program)}
                  >
                    Смотреть кейс
                  </AButton>
                </ACardContent>
              </ACard>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProgram && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setSelectedProgram(null)}
        >
          <div 
            className="bg-white rounded-[12px] max-w-md w-full p-6 border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900">{selectedProgram.title}</h3>
              <button
                onClick={() => setSelectedProgram(null)}
                className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="space-y-3 text-gray-600 text-sm mb-6">
              <p>{selectedProgram.description}</p>
              <p><strong>Тренер:</strong> {selectedProgram.trainer}</p>
              <p><strong>Результат:</strong> {selectedProgram.results}</p>
              <p><strong>Длительность:</strong> {selectedProgram.programLength}</p>
              <p><strong>Частота:</strong> {selectedProgram.frequency}</p>
            </div>
            <div className="flex gap-3">
              <AButton 
                className="flex-1"
                onClick={() => {
                  onNavigate('profile');
                  setSelectedProgram(null);
                }}
              >
                Начать программу
              </AButton>
              <AButton 
                variant="secondary"
                onClick={() => setSelectedProgram(null)}
              >
                Закрыть
              </AButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

