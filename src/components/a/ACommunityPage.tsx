import { ACard, ACardContent } from './ACard';
import { AButton } from './AButton';
import { Users, Trophy, MessageSquare } from 'lucide-react';

interface ACommunityPageProps {
  onNavigate: (page: string) => void;
}

export function ACommunityPage({ onNavigate }: ACommunityPageProps) {
  const posts = [
    {
      name: 'Анна Петрова',
      text: 'Завершила 30-дневный челлендж похудения! -6 кг, чувствую себя невероятно! 🔥💪',
      time: '2 часа назад',
    },
    {
      name: 'Дмитрий Волков',
      text: 'Совет дня: не пропускайте разминку! 5-10 минут разогрева снижают риск травм.',
      time: '5 часов назад',
    },
  ];

  const challenges = [
    {
      title: '30 дней планки',
      participants: 2453,
      status: 'Идёт (день 15/30)',
    },
    {
      title: 'Беги 5 км',
      participants: 1876,
      status: 'Идёт (неделя 6/10)',
    },
  ];

  const forumCategories = [
    {
      title: 'Вопросы новичков',
      topics: 1234,
      lastTopic: 'С чего начать похудение?',
    },
    {
      title: 'Общие тренировки',
      topics: 876,
      lastTopic: 'Лучшие упражнения для пресса',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="py-12 sm:py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Сообщество FitLife</h1>
          <p className="text-lg text-gray-700">
            Общайтесь, делитесь успехами и участвуйте в челленджах.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Последние посты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post, index) => (
              <ACard key={index} className="p-6">
                <ACardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-medium mr-3">
                      {post.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{post.name}</div>
                      <div className="text-sm text-gray-500">{post.time}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{post.text}</p>
                  <AButton variant="link" onClick={() => alert('Переход к посту')}>
                    Читать далее
                  </AButton>
                </ACardContent>
              </ACard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Активные челленджи</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <ACard key={index} className="p-6">
                <ACardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Trophy className="w-8 h-8 text-blue-600 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold">{challenge.title}</h3>
                      <div className="text-sm text-gray-600">{challenge.participants} участников</div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">Статус: {challenge.status}</p>
                  <AButton variant="primary" onClick={() => onNavigate('profile')} className="w-full">
                    Присоединиться
                  </AButton>
                </ACardContent>
              </ACard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Форум</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {forumCategories.map((category, index) => (
              <ACard key={index} className="p-6">
                <ACardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <MessageSquare className="w-8 h-8 text-blue-600 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                      <div className="text-sm text-gray-600">{category.topics} тем</div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">Последняя тема: {category.lastTopic}</p>
                  <AButton variant="secondary" onClick={() => alert('Переход на форум')} className="w-full">
                    Перейти на форум
                  </AButton>
                </ACardContent>
              </ACard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
