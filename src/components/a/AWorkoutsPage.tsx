import { useState } from 'react';
import { AButton } from './AButton';
import { ACard, ACardContent } from './ACard';
import { X } from 'lucide-react';

interface AWorkoutsPageProps {
  onNavigate: (page: string) => void;
}

export function AWorkoutsPage({ onNavigate }: AWorkoutsPageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<any>(null);

  const programs = [
    {
      id: 1,
      title: 'Жиросжигание за 30 дней',
      description: 'Интенсивные кардио и силовые для максимального жиросжигания. В среднем -5 кг за месяц.',
      details: 'Программа включает 20 тренировок, 4-5 раз в неделю по 30-40 минут. Подходит для начинающих.',
    },
    {
      id: 2,
      title: 'Рельефное тело за 12 недель',
      description: 'Сплит-тренировки для прорисовки мышц. Рельефное тело, -8% жира.',
      details: 'Программа включает 48 тренировок, 4 раза в неделю по 45-60 минут. Для среднего уровня подготовки.',
    },
    {
      id: 3,
      title: 'Full Body дома',
      description: 'Тренировки всего тела без оборудования. Подтянутое тело.',
      details: 'Программа включает 24 тренировки, 3 раза в неделю по 40 минут. Подходит для любого уровня.',
    },
    {
      id: 4,
      title: 'Масса и сила',
      description: 'Прогрессивная перегрузка для роста. +6-8 кг мышц.',
      details: 'Программа включает 64 тренировки, 4 раза в неделю по 60-75 минут. Для продвинутых.',
    },
  ];

  const openModal = (program: any) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProgram(null);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="py-12 sm:py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Наши программы тренировок</h1>
          <p className="text-lg text-gray-700">
            Выбери программу, которая поможет тебе достичь своих целей.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <ACard key={program.id} className="p-6">
                <ACardContent className="p-0 flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                  <p className="text-gray-700 text-sm mb-4 flex-grow">{program.description}</p>
                  <AButton variant="secondary" onClick={() => openModal(program)} className="w-full">
                    Смотреть кейс
                  </AButton>
                </ACardContent>
              </ACard>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {isModalOpen && selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <ACard className="max-w-lg w-full p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedProgram.title}</h3>
            <p className="text-gray-700 mb-4">{selectedProgram.details}</p>
            <div className="flex justify-end gap-2">
              <AButton variant="primary" onClick={() => onNavigate('profile')}>
                Начать программу
              </AButton>
              <AButton variant="secondary" onClick={closeModal}>
                Закрыть
              </AButton>
            </div>
          </ACard>
        </div>
      )}
    </div>
  );
}
