import { AButton } from './AButton';
import { ACard, ACardContent } from './ACard';
import { Heart, MessageCircle, Trophy, Users } from 'lucide-react';

interface ACommunityPageProps {
  onNavigate: (page: string) => void;
}

export function ACommunityPage({ onNavigate }: ACommunityPageProps) {
  const posts = [
    {
      avatar: 'АП',
      name: 'Анна Петрова',
      username: '@anna_fitlife',
      time: '2 часа назад',
      text: 'Завершила 30-дневный челлендж похудения! -6 кг, чувствую себя невероятно! Спасибо FitLife и всем за поддержку!',
      likes: 245,
      comments: 32
    },
    {
      avatar: 'ДВ',
      name: 'Дмитрий Волков',
      username: '@dmitry_coach',
      time: '5 часов назад',
      badge: 'Тренер',
      text: 'Совет дня: не пропускайте разминку! 5-10 минут разогрева снижают риск травм на 70%. Берегите себя!',
      likes: 512,
      comments: 67
    },
    {
      avatar: 'МИ',
      name: 'Мария Иванова',
      username: '@maria_health',
      time: 'вчера',
      text: 'День 12 программы "Тренировки дома". Сегодня была full body тренировка, выжала по максимуму! Кто ещё на этой программе?',
      likes: 178,
      comments: 24
    },
  ];

  const challenges = [
    {
      title: '30 дней планки',
      participants: 2453,
      startDate: '1 декабря',
      duration: '30 дней',
      goal: 'Удерживать планку каждый день, увеличивая время',
      status: 'Идёт (день 15/30)',
    },
    {
      title: 'Беги 5 км',
      participants: 1876,
      startDate: '5 ноября',
      duration: '10 недель',
      goal: 'Пробежать 5 км без остановок',
      status: 'Идёт (неделя 6/10)',
    },
    {
      title: '100 приседаний каждый день',
      participants: 3124,
      startDate: 'через 3 дня',
      duration: '30 дней',
      goal: 'Выполнять 100 приседаний ежедневно',
      status: 'Скоро старт',
    },
  ];

  const leaderboards = [
    {
      title: 'По тренировкам (за месяц)',
      entries: [
        { rank: 1, username: '@alex_strong', value: '62 тренировки' },
        { rank: 2, username: '@maria_fit', value: '58 тренировок' },
        { rank: 3, username: '@dmitry_power', value: '54 тренировки' },
        { rank: 4, username: '@anna_health', value: '52 тренировки' },
        { rank: 5, username: '@ivan_athlete', value: '50 тренировок' }
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-12 sm:py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Сообщество</h1>
          <p className="text-lg text-gray-600">Общайся, делись результатами и вдохновляйся</p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-12 sm:py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Последние посты</h2>
          <div className="space-y-6">
            {posts.map((post, index) => (
              <ACard key={index}>
                <ACardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-700">
                      {post.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-900">{post.name}</span>
                        <span className="text-sm text-gray-500">{post.username}</span>
                        {post.badge && (
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                            {post.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-gray-500">{post.time}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{post.text}</p>
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </button>
                  </div>
                </ACardContent>
              </ACard>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-12 sm:py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Активные челленджи</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <ACard key={index}>
                <ACardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{challenge.title}</h3>
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{challenge.participants} участников</span>
                    </div>
                    <p><strong>Цель:</strong> {challenge.goal}</p>
                    <p><strong>Длительность:</strong> {challenge.duration}</p>
                    <p><strong>Статус:</strong> {challenge.status}</p>
                  </div>
                  <AButton 
                    variant="secondary"
                    className="w-full"
                    onClick={() => onNavigate('profile')}
                  >
                    Присоединиться
                  </AButton>
                </ACardContent>
              </ACard>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Рейтинг</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leaderboards.map((board, index) => (
              <ACard key={index}>
                <ACardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    <h3 className="text-lg font-semibold text-gray-900">{board.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {board.entries.map((entry) => (
                      <div key={entry.rank} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium text-gray-500 w-6">{entry.rank}</span>
                          <span className="text-sm text-gray-700">{entry.username}</span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">{entry.value}</span>
                      </div>
                    ))}
                  </div>
                </ACardContent>
              </ACard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

