import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select } from './ui/select';
import { ChevronRight, Clock, Flame } from 'lucide-react';

interface NutritionPageProps {
  onNavigate: (page: string) => void;
}

export function NutritionPage({ onNavigate }: NutritionPageProps) {
  const [waterIntake, setWaterIntake] = useState(1500);
  const waterGoal = 2500;

  // State for calculator
  const [age, setAge] = useState<number | ''>('');
  const [height, setHeight] = useState<number | ''>('');
  const [weight, setWeight] = useState<number | ''>('');
  const [gender, setGender] = useState<'m' | 'f' | ''>('');
  const [activity, setActivity] = useState<number | ''>('');
  const [goal, setGoal] = useState<number | ''>('');
  const [calculatedCalories, setCalculatedCalories] = useState<{
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
  } | null>(null);

  const calculateCalories = () => {
    if (!age || !height || !weight || !gender || !activity || !goal) {
      alert('Пожалуйста, заполните все поля калькулятора.');
      return;
    }

    let bmr: number;
    // Mifflin-St Jeor Equation
    if (gender === 'm') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const tdee = bmr * activity;
    const finalCalories = tdee * (1 + goal);

    // Macronutrient distribution (example: 30% protein, 30% fat, 40% carbs)
    const proteinCals = finalCalories * 0.3;
    const fatCals = finalCalories * 0.3;
    const carbsCals = finalCalories * 0.4;

    setCalculatedCalories({
      calories: Math.round(finalCalories),
      protein: Math.round(proteinCals / 4), // 4 calories per gram of protein
      fat: Math.round(fatCals / 9), // 9 calories per gram of fat
      carbs: Math.round(carbsCals / 4), // 4 calories per gram of carbs
    });
  };

  const mealPlans = [
    {
      title: 'Похудение на дефиците',
      calories: '1400-1600 ккал/день',
      macros: 'Б 100г / Ж 50г / У 150г',
      meals: '4-5',
      forWho: 'Женщины, похудение',
      description: 'Сбалансированный рацион с дефицитом калорий для безопасного похудения 0.5-1 кг в неделю',
      includes: [
        '7-дневное меню',
        '28 рецептов блюд',
        'Список покупок',
        'Замены продуктов'
      ],
      sampleDay: [
        { meal: 'Завтрак', food: 'Овсянка с ягодами', cal: 300 },
        { meal: 'Перекус', food: 'Творог с фруктами', cal: 150 },
        { meal: 'Обед', food: 'Куриная грудка с овощами', cal: 400 },
        { meal: 'Перекус', food: 'Орехи', cal: 150 },
        { meal: 'Ужин', food: 'Рыба с салатом', cal: 400 }
      ],
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
      includes: [
        '7-дневное меню',
        '35 рецептов',
        'Список покупок',
        'Рекомендации по добавкам'
      ],
      sampleDay: [
        { meal: 'Завтрак', food: 'Омлет + каша', cal: 600 },
        { meal: 'Перекус', food: 'Протеиновый коктейль', cal: 300 },
        { meal: 'Обед', food: 'Говядина + гречка', cal: 700 },
        { meal: 'Перекус', food: 'Творог + банан', cal: 350 },
        { meal: 'Ужин', food: 'Курица + рис + овощи', cal: 800 },
        { meal: 'Перед сном', food: 'Казеин', cal: 250 }
      ],
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
      includes: [
        '7-дневное меню',
        '30 рецептов',
        'Список покупок',
        'Советы по питанию'
      ],
      sampleDay: [
        { meal: 'Завтрак', food: 'Омлет + тост', cal: 400 },
        { meal: 'Обед', food: 'Паста с курицей', cal: 600 },
        { meal: 'Перекус', food: 'Фрукты + йогурт', cal: 200 },
        { meal: 'Ужин', food: 'Рыба + овощи', cal: 500 }
      ],
      price: '12 BYN/мес',
      image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Вегетарианское питание',
      calories: '1800-2000 ккал/день',
      macros: 'Б 80г / Ж 60г / У 250г',
      meals: '4-5',
      forWho: 'Вегетарианцы',
      description: 'Полноценный рацион без мяса с достаточным количеством белка',
      includes: [
        '7-дневное меню',
        '32 вегетарианских рецепта',
        'Список покупок',
        'Источники белка'
      ],
      sampleDay: [
        { meal: 'Завтрак', food: 'Овсянка + орехи', cal: 350 },
        { meal: 'Перекус', food: 'Хумус + овощи', cal: 200 },
        { meal: 'Обед', food: 'Чечевица + салат', cal: 500 },
        { meal: 'Перекус', food: 'Смузи', cal: 250 },
        { meal: 'Ужин', food: 'Тофу + овощи', cal: 450 }
      ],
      price: '12 BYN/мес',
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const recipes = [
    {
      title: 'Овсянка с ягодами и орехами',
      category: 'Завтрак',
      time: '10 мин',
      calories: 320,
      protein: 12,
      fat: 10,
      carbs: 45,
      difficulty: 'Легко',
      badge: 'Популярный',
      image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Куриная грудка с овощами на пару',
      category: 'Обед/Ужин',
      time: '25 мин',
      calories: 380,
      protein: 45,
      fat: 8,
      carbs: 30,
      difficulty: 'Средне',
      image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Протеиновые панкейки',
      category: 'Завтрак',
      time: '15 мин',
      calories: 280,
      protein: 25,
      fat: 8,
      carbs: 28,
      difficulty: 'Легко',
      badge: 'Высокий белок',
      image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Греческий салат с тунцом',
      category: 'Обед',
      time: '10 мин',
      calories: 350,
      protein: 30,
      fat: 18,
      carbs: 15,
      difficulty: 'Легко',
      image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Гречка с говядиной',
      category: 'Обед/Ужин',
      time: '40 мин',
      calories: 520,
      protein: 42,
      fat: 15,
      carbs: 55,
      difficulty: 'Средне',
      image: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Смузи-боул с фруктами',
      category: 'Завтрак/Перекус',
      time: '5 мин',
      calories: 290,
      protein: 10,
      fat: 5,
      carbs: 52,
      difficulty: 'Легко',
      badge: 'Быстро',
      image: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Запечённая рыба с лимоном',
      category: 'Ужин',
      time: '30 мин',
      calories: 320,
      protein: 40,
      fat: 12,
      carbs: 10,
      difficulty: 'Средне',
      image: 'https://images.pexels.com/photos/765548/pexels-photo-765548.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Творожная запеканка',
      category: 'Завтрак/Десерт',
      time: '45 мин',
      calories: 260,
      protein: 20,
      fat: 8,
      carbs: 28,
      difficulty: 'Средне',
      image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Чечевичный суп',
      category: 'Обед',
      time: '35 мин',
      calories: 280,
      protein: 18,
      fat: 5,
      carbs: 42,
      difficulty: 'Легко',
      badge: 'Вегетарианский',
      image: 'https://images.pexels.com/photos/13063293/pexels-photo-13063293.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Яичница с авокадо',
      category: 'Завтрак',
      time: '10 мин',
      calories: 380,
      protein: 20,
      fat: 28,
      carbs: 12,
      difficulty: 'Легко',
      image: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Овощное рагу с индейкой',
      category: 'Обед/Ужин',
      time: '50 мин',
      calories: 420,
      protein: 35,
      fat: 12,
      carbs: 40,
      difficulty: 'Средне',
      image: 'https://images.pexels.com/photos/2092897/pexels-photo-2092897.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Протеиновое печенье',
      category: 'Перекус/Десерт',
      time: '20 мин',
      calories: 150,
      protein: 12,
      fat: 6,
      carbs: 15,
      difficulty: 'Легко',
      badge: 'ПП-десерт',
      image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#FF6B35] to-[#FF006B] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm mb-4 text-white/80">
            <span className="cursor-pointer hover:text-white" onClick={() => onNavigate('home')}>Главная</span>
            <ChevronRight className="w-4 h-4" />
            <span>Питание</span>
          </div>
          <h1 className="mb-4 text-white text-3xl sm:text-4xl md:text-5xl font-bold">Планы питания и рецепты</h1>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl">Правильное питание для твоих целей. Вкусно, полезно и просто.</p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 sm:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="plans" className="w-full">
            <TabsList className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-4 w-full h-auto p-1 bg-gray-100 rounded-xl mb-8 gap-1">
              <TabsTrigger value="plans" className="w-full py-3">Планы питания</TabsTrigger>
              <TabsTrigger value="recipes" className="w-full py-3">Рецепты</TabsTrigger>
              <TabsTrigger value="calculator" className="w-full py-3">Калькулятор КБЖУ</TabsTrigger>
              <TabsTrigger value="water" className="w-full py-3">Трекер воды</TabsTrigger>
            </TabsList>

            {/* Meal Plans Tab */}
            <TabsContent value="plans">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {mealPlans.map((plan, index) => (
                  <div key={index} className="h-full">
                    <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
                      <div className="relative h-48 sm:h-56">
                        <img
                          src={plan.image}
                          alt={plan.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-5 sm:p-6 flex flex-col flex-grow">
                        <h3 className="mb-3 text-xl font-bold">{plan.title}</h3>
                        <div className="space-y-2 text-sm mb-4 bg-gray-50 p-3 rounded-lg">
                          <div className="flex justify-between">
                            <span className="text-gray-600 font-medium">Калорийность:</span>
                            <span>{plan.calories}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 font-medium">КБЖУ:</span>
                            <span>{plan.macros}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 font-medium">Приёмов пищи:</span>
                            <span>{plan.meals}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 font-medium">Для кого:</span>
                            <span>{plan.forWho}</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                        <div className="mb-4">
                          <div className="text-sm font-semibold mb-2">Что входит:</div>
                          <ul className="space-y-1">
                            {plan.includes.map((item, i) => (
                              <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mb-4">
                          <div className="text-sm font-semibold mb-2">Примерный день:</div>
                          <div className="space-y-1">
                            {plan.sampleDay.map((meal, i) => (
                              <div key={i} className="text-xs sm:text-sm text-gray-600 flex justify-between border-b border-gray-100 last:border-0 py-1">
                                <span><span className="font-medium">{meal.meal}:</span> {meal.food}</span>
                                <span className="text-gray-400">({meal.cal})</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="mt-auto pt-4 border-t">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#FF006B] bg-clip-text text-transparent">
                              {plan.price}
                            </span>
                          </div>
                          <Button variant="gradient" className="w-full">
                            Выбрать план
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Recipes Tab */}
            <TabsContent value="recipes">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.map((recipe, index) => (
                  <div key={index}>
                    <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer">
                      <div className="relative overflow-hidden h-48">
                        <img
                          src={recipe.image}
                          alt={recipe.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {recipe.badge && (
                          <Badge className="absolute top-4 right-4 bg-[#FF6B35] shadow-sm">
                            {recipe.badge}
                          </Badge>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                            <span className="text-white font-medium text-sm">Смотреть рецепт</span>
                        </div>
                      </div>
                      <CardContent className="p-5 flex flex-col flex-grow">
                        <div className="text-xs font-semibold text-[#FF6B35] uppercase tracking-wider mb-2">{recipe.category}</div>
                        <h4 className="mb-3 font-bold text-lg leading-tight">{recipe.title}</h4>
                        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span>{recipe.time}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Flame className="w-4 h-4 text-[#FF6B35]" />
                            <span>{recipe.calories} ккал</span>
                          </div>
                        </div>
                        <div className="space-y-2 text-sm mb-4 bg-gray-50 p-2 rounded">
                          <div className="flex justify-between">
                            <span className="text-gray-500">КБЖУ:</span>
                            <span className="font-medium text-gray-900">Б {recipe.protein} / Ж {recipe.fat} / У {recipe.carbs}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Уровень:</span>
                            <span className="font-medium text-gray-900">{recipe.difficulty}</span>
                          </div>
                        </div>
                        <div className="mt-auto">
                          <Button variant="outline" className="w-full group-hover:bg-[#FF6B35] group-hover:text-white group-hover:border-transparent transition-colors">
                            Приготовить
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Calculator Tab */}
            <TabsContent value="calculator">
              <div className="max-w-3xl mx-auto">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6 sm:p-8">
                    <h3 className="mb-6 text-2xl font-bold text-center">Рассчитай свою норму калорий</h3>
                    
                    <div className="mb-8">
                      <h4 className="mb-4 font-semibold text-lg flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#FF6B35] text-white flex items-center justify-center text-sm">1</span>
                        Базовые данные
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Пол</Label>
                          <Select value={gender} onValueChange={(value: 'm' | 'f') => setGender(value)}>
                            <option value="">Выберите</option>
                            <option value="m">Мужской</option>
                            <option value="f">Женский</option>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Возраст (лет)</Label>
                          <Input
                            type="number"
                            placeholder="25"
                            value={age}
                            onChange={(e) => setAge(Number(e.target.value))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Рост (см)</Label>
                          <Input
                            type="number"
                            placeholder="170"
                            value={height}
                            onChange={(e) => setHeight(Number(e.target.value))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Вес (кг)</Label>
                          <Input
                            type="number"
                            placeholder="70"
                            value={weight}
                            onChange={(e) => setWeight(Number(e.target.value))}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="mb-4 font-semibold text-lg flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#FF6B35] text-white flex items-center justify-center text-sm">2</span>
                        Активность и Цель
                      </h4>
                      <div className="space-y-4">
                        <div className="space-y-2">
                            <Label>Уровень активности</Label>
                            <Select value={String(activity)} onValueChange={(value) => setActivity(Number(value))}>
                                <option value="">Выберите уровень активности</option>
                                <option value="1.2">Сидячий образ жизни (x1.2)</option>
                                <option value="1.375">Лёгкая активность 1-2 раза/нед (x1.375)</option>
                                <option value="1.55">Средняя активность 3-5 раз/нед (x1.55)</option>
                                <option value="1.725">Высокая активность 6-7 раз/нед (x1.725)</option>
                                <option value="1.9">Экстремальная (x1.9)</option>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label>Ваша цель</Label>
                            <Select value={String(goal)} onValueChange={(value) => setGoal(Number(value))}>
                                <option value="">Выберите цель</option>
                                <option value="-0.2">Похудение (-20%)</option>
                                <option value="0">Поддержание (0%)</option>
                                <option value="0.15">Набор массы (+15%)</option>
                            </Select>
                        </div>
                      </div>
                    </div>

                    <Button
                      variant="gradient"
                      size="lg"
                      className="w-full mb-8 text-lg h-12"
                      onClick={calculateCalories}
                    >
                      Рассчитать норму
                    </Button>

                    {calculatedCalories && (
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200 animate-fade-in">
                        <h4 className="mb-6 font-bold text-xl text-center">Ваш результат:</h4>
                        <div className="space-y-6">
                          <div className="flex flex-col items-center">
                            <span className="text-gray-600 mb-1">Суточная норма</span>
                            <span className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#FF6B35] to-[#FF006B] bg-clip-text text-transparent">
                              {calculatedCalories.calories} <span className="text-xl text-gray-500 font-normal">ккал</span>
                            </span>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                            <div className="bg-white p-3 rounded-lg shadow-sm">
                              <div className="text-sm text-gray-500 mb-1">Белки</div>
                              <div className="font-bold text-lg">{calculatedCalories.protein} г</div>
                              <div className="text-xs text-gray-400">({Math.round((calculatedCalories.protein * 4 / calculatedCalories.calories) * 100)}%)</div>
                            </div>
                            <div className="bg-white p-3 rounded-lg shadow-sm">
                              <div className="text-sm text-gray-500 mb-1">Жиры</div>
                              <div className="font-bold text-lg">{calculatedCalories.fat} г</div>
                              <div className="text-xs text-gray-400">({Math.round((calculatedCalories.fat * 9 / calculatedCalories.calories) * 100)}%)</div>
                            </div>
                            <div className="bg-white p-3 rounded-lg shadow-sm">
                              <div className="text-sm text-gray-500 mb-1">Углеводы</div>
                              <div className="font-bold text-lg">{calculatedCalories.carbs} г</div>
                              <div className="text-xs text-gray-400">({Math.round((calculatedCalories.carbs * 4 / calculatedCalories.calories) * 100)}%)</div>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" className="w-full mt-6 bg-white hover:bg-gray-50">
                          Сохранить в профиль
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Water Tracker Tab */}
            <TabsContent value="water">
              <div className="max-w-2xl mx-auto">
                <Card>
                  <CardContent className="p-6 sm:p-8">
                    <h3 className="mb-6 text-2xl font-bold text-center">Трекер воды</h3>
                    <div className="text-center mb-10">
                      <div className="relative w-48 h-48 mx-auto mb-6 flex items-center justify-center">
                         {/* Circle Progress Simulation */}
                         <div className="absolute inset-0 rounded-full border-8 border-blue-100"></div>
                         <svg className="absolute inset-0 w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="46" fill="none" stroke="#3B82F6" strokeWidth="8" strokeDasharray={`${(waterIntake / waterGoal) * 289} 289`} strokeLinecap="round" />
                         </svg>
                         <div className="z-10 flex flex-col items-center">
                            <span className="text-3xl font-bold text-blue-600">{waterIntake}</span>
                            <span className="text-sm text-gray-500">из {waterGoal} мл</span>
                         </div>
                      </div>
                      
                      <div className="flex justify-center gap-4 mb-8">
                          <Button
                            variant="outline"
                            onClick={() => setWaterIntake(Math.max(0, waterIntake - 250))}
                            className="rounded-full w-12 h-12 p-0 flex items-center justify-center border-2"
                          >
                            -
                          </Button>
                          <Button
                            variant="gradient"
                            onClick={() => setWaterIntake(Math.min(waterIntake + 250, waterGoal))}
                            className="rounded-full px-8 bg-blue-500 hover:bg-blue-600"
                          >
                            + 250 мл
                          </Button>
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-4 font-semibold">Статистика за неделю</h4>
                      <div className="h-48 bg-white rounded-xl border border-gray-200 p-4">
                        <div className="flex items-end justify-between h-32 gap-2 mb-2">
                          {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day, i) => {
                            const waterAmount = Math.max(500, Math.sin(i / 2) * 1000 + 1500);
                            const percentage = (waterAmount / 2000) * 100;
                            return (
                              <div key={day} className="flex flex-col items-center flex-1 group cursor-pointer">
                                <div className="w-full max-w-[30px] bg-blue-100 rounded-t-lg relative overflow-hidden h-full flex items-end transition-all group-hover:bg-blue-200">
                                  <div 
                                    className="w-full bg-blue-500 transition-all duration-1000 ease-out"
                                    style={{height: `${percentage}%`}}
                                  ></div>
                                </div>
                                <span className="text-xs text-gray-500 mt-2 font-medium">{day}</span>
                              </div>
                            );
                          })}
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-4 px-2 border-t pt-2">
                          <span>Цель: 2.5л/день</span>
                          <span className="text-blue-600 font-semibold">Среднее: 1.8л</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#FF6B35] to-[#FF006B] text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">Получи персональный план питания</h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Мы составим для тебя идеальное меню на основе твоих целей, вкусовых предпочтений и образа жизни.
          </p>
          <Button
            size="lg"
            variant="accent"
            className="bg-white text-[#FF6B35] hover:bg-gray-100 font-bold px-8 py-6 h-auto text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all"
          >
            Составить план питания
          </Button>
        </div>
      </section>
    </div>
  );
}
