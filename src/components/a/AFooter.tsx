import { Dumbbell, MessageCircle, Instagram, Music, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function AFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Column 1: FitLife */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Dumbbell className="w-6 h-6 text-blue-600" />
              <span className="text-lg font-semibold text-gray-900">
                FitLife
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Фитнес-платформа №1 в Беларуси. Тренируйся где угодно, когда угодно.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                <MessageCircle className="w-5 h-5 text-gray-700" />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Instagram className="w-5 h-5 text-gray-700" />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Music className="w-5 h-5 text-gray-700" />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Youtube className="w-5 h-5 text-gray-700" />
              </a>
            </div>
          </div>

          {/* Column 2: Программы */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-900">Программы</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Все тренировки</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Программы похудения</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Набор массы</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Планы питания</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Рецепты</a></li>
            </ul>
          </div>

          {/* Column 3: Сообщество */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-900">Сообщество</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Челленджи</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Рейтинги</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Форум</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Истории успеха</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Блог</a></li>
            </ul>
          </div>

          {/* Column 4: Контакты */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-900">Контакты</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>г. Минск, пр. Победителей, 84</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+375 (29) 777-88-99</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>hello@fitlife.by</span>
              </li>
              <li className="text-xs text-gray-500">Поддержка: 7:00 - 23:00</li>
            </ul>
          </div>

          {/* Column 5: Приложение */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-900">Приложение</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Скачать для iOS</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Скачать для Android</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Веб-версия</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Desktop-приложение</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200 text-center text-gray-600 text-sm">
          <p>
            © 2021-2025 FitLife Belarus. Все права защищены. |{' '}
            <a href="#" className="hover:text-blue-600 transition-colors">
              Пользовательское соглашение
            </a>{' '}
            |{' '}
            <a href="#" className="hover:text-blue-600 transition-colors">
              Политика конфиденциальности
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

