import { Subject } from '../types';
import { questionsBySubject } from './testsData';

export const subjects: Subject[] = [
  {
    id: 'math',
    name: {
      uz: 'Matematika',
      ru: 'Математика',
      en: 'Mathematics',
    },
    shortDescription: {
      uz: 'Sonlar, mantiqiy misollar, geometriya va qiziqarli hisob-kitoblar olami.',
      ru: 'Мир чисел, логических уравнений, геометрических фигур и расчётов.',
      en: 'The world of numbers, logical puzzles, geometry, and calculations.',
    },
    detailedDescription: {
      uz: '10–12 yoshli bolalar uchun mo‘ljallangan interaktiv matematika kursi: to‘g‘ri to‘rtburchak va uchburchak yuzalari, kasrlar va foizlar, tub sonlar va tezkor hisoblash usullarini qiziqarli shaklda o‘rganing.',
      ru: 'Интерактивный курс математики для 10–12 лет: площади фигур, дроби, проценты, простые числа и методы быстрого устного счёта.',
      en: 'Interactive math for ages 10–12: geometric areas, fractions, percentages, prime numbers, and fast mental arithmetic.',
    },
    icon: 'Calculator',
    color: {
      bgLight: 'bg-blue-50',
      bgDark: 'dark:bg-blue-950/30',
      textLight: 'text-blue-700',
      textDark: 'dark:text-blue-300',
      border: 'border-blue-200 dark:border-blue-800',
      accent: 'blue',
    },
    topics: {
      uz: ['Oddiy va o‘nli kasrlar', 'Geometrik shakllar yuzasi', 'Foizlar va proporsiya', 'Amallar tartibi', 'Tub va murakkab sonlar'],
      ru: ['Обыкновенные и десятичные дроби', 'Площади фигур', 'Проценты и пропорции', 'Порядок действий', 'Простые числа'],
      en: ['Common & Decimal Fractions', 'Geometric Area', 'Percentages & Ratios', 'Order of Operations', 'Prime Numbers'],
    },
    questions: questionsBySubject.math,
  },
  {
    id: 'it',
    name: {
      uz: 'Informatika',
      ru: 'Информатика',
      en: 'Computer Science',
    },
    shortDescription: {
      uz: 'Kompyuter qanday ishlaydi, algoritm, xavfsiz internet va dasturlash asoslari.',
      ru: 'Как устроен компьютер, алгоритмы, кибербезопасность и основы кода.',
      en: 'How computers work, algorithms, cyber safety, and coding fundamentals.',
    },
    detailedDescription: {
      uz: 'Kompyuterning miyasi (CPU), tezkor xotira (RAM), ikkilik sanoq tizimi (0 va 1 lar), Scratch dasturlash muhiti hamda kiberxavfsizlik sirlari bilan tanishing.',
      ru: 'Узнай о процессоре, оперативной памяти, двоичном коде (нули и единицы), визуальном программировании Scratch и правилах кибербезопасности.',
      en: 'Explore the CPU, RAM, binary code (0s and 1s), block coding with Scratch, and essential cyber safety habits.',
    },
    icon: 'Cpu',
    color: {
      bgLight: 'bg-cyan-50',
      bgDark: 'dark:bg-cyan-950/30',
      textLight: 'text-cyan-700',
      textDark: 'dark:text-cyan-300',
      border: 'border-cyan-200 dark:border-cyan-800',
      accent: 'cyan',
    },
    image: '/src/assets/images/subject_it_coding_1792389708807.jpg',
    topics: {
      uz: ['Bit va Bayt o‘lchovlari', 'Kompyuter qurilmalari (CPU, RAM)', 'Algoritm nima?', 'Scratch dasturlash', 'Xavfsiz internet qoidalari'],
      ru: ['Биты и байты', 'Устройство ПК (CPU, RAM)', 'Что такое алгоритм', 'Scratch программирование', 'Безопасность в сети'],
      en: ['Bits & Bytes', 'Computer Hardware (CPU, RAM)', 'What is an Algorithm', 'Scratch Block Coding', 'Online Safety'],
    },
    questions: questionsBySubject.it,
  },
  {
    id: 'english',
    name: {
      uz: 'Ingliz tili',
      ru: 'Английский язык',
      en: 'English Language',
    },
    shortDescription: {
      uz: 'Lug‘at boyligini oshirish, zamonlar va kundalik iboralar bilan jonli muloqot.',
      ru: 'Пополнение словарного запаса, времена глаголов и живое общение.',
      en: 'Vocabulary building, verb tenses, everyday conversational English.',
    },
    detailedDescription: {
      uz: 'Present Simple, Present Continuous, o‘tgan zamon noto‘g‘ri fe’llari, sifat darajalari hamda qiziqarli so‘zlashuv mashqlarini bajarib, ingliz tilida erkin fikrlang.',
      ru: 'Осваивай Present Simple, Present Continuous, неправильные глаголы, степени сравнения и полезные фразы на каждый день.',
      en: 'Master Present Simple, Present Continuous, irregular verbs, comparatives, and practical daily expressions.',
    },
    icon: 'BookOpen',
    color: {
      bgLight: 'bg-emerald-50',
      bgDark: 'dark:bg-emerald-950/30',
      textLight: 'text-emerald-700',
      textDark: 'dark:text-emerald-300',
      border: 'border-emerald-200 dark:border-emerald-800',
      accent: 'emerald',
    },
    topics: {
      uz: ['Present Simple & Continuous', 'Noto‘g‘ri fe’llar (Went, Seen)', 'Sifat darajalari (Big - Bigger)', 'Predloglar (in, on, at)', 'Uy va yovvoyi hayvonlar'],
      ru: ['Present Simple & Continuous', 'Неправильные глаголы', 'Степени сравнения', 'Предлоги времени и места', 'Словарь: животные и дом'],
      en: ['Present Simple & Continuous', 'Irregular Verbs', 'Comparative Adjectives', 'Prepositions (in, on, at)', 'Animals & Daily Routines'],
    },
    questions: questionsBySubject.english,
  },
  {
    id: 'history',
    name: {
      uz: 'Tarix',
      ru: 'История',
      en: 'World & Local History',
    },
    shortDescription: {
      uz: 'Buyuk allomalar, qadimiy sivilizatsiyalar, me’moriy obidalar va ixtirolar.',
      ru: 'Великие учёные Востока, древние цивилизации, пирамиды и открытия.',
      en: 'Great thinkers, ancient civilizations, pyramids, and epochal inventions.',
    },
    detailedDescription: {
      uz: 'Buyuk Ipak yo‘li, Samarqand Registon maydoni, Mirzo Ulug‘bek rasadxonasi, Al-Xorazmiy va Ibn Sino kashfiyotlari hamda Gutenberg matbaa dastgohi haqidagi tarixiy sahifalar.',
      ru: 'Шёлковый путь, площадь Регистан в Самарканде, обсерватория Улугбека, открытия Аль-Хорезми и Авиценны, эпоха великих путешествий.',
      en: 'The Silk Road, Registan Square, Ulugh Beg observatory, contributions of Al-Khwarizmi and Avicenna, and age of discoveries.',
    },
    icon: 'Landmark',
    color: {
      bgLight: 'bg-amber-50',
      bgDark: 'dark:bg-amber-950/30',
      textLight: 'text-amber-700',
      textDark: 'dark:text-amber-300',
      border: 'border-amber-200 dark:border-amber-800',
      accent: 'amber',
    },
    topics: {
      uz: ['Buyuk Ipak yo‘li tarixi', 'Mirzo Ulug‘bek va yulduzlar', 'Al-Xorazmiy — algebra otasi', 'Misr piramidalari siri', 'Dunyoni o‘zgartirgan ixtirolar'],
      ru: ['Великий шёлковый путь', 'Мирзо Улугбек и звёзды', 'Аль-Хорезми и алгебра', 'Тайны пирамид Египта', 'Изобретения, изменившие мир'],
      en: ['The Great Silk Road', 'Ulugh Beg & Astronomy', 'Al-Khwarizmi & Algebra', 'Secrets of the Pyramids', 'Inventions that Shaped History'],
    },
    questions: questionsBySubject.history,
  },
  {
    id: 'science',
    name: {
      uz: 'Tabiiy fanlar',
      ru: 'Естествознание',
      en: 'Natural Sciences',
    },
    shortDescription: {
      uz: 'Sayyoramiz, koinot, hayvonlar olami, inson tanasi va tabiat qonunlari.',
      ru: 'Планета Земля, космос, живая природа, организм человека и физика.',
      en: 'Our planet, outer space, wildlife, human anatomy, and physics wonders.',
    },
    detailedDescription: {
      uz: 'O‘simliklardagi fotosintez jarayoni, Quyosh tizimidagi ulkan planetalar, tortishish kuchi (gravitatsiya), suvning tabiatdagi aylanishi va inson yuragi haqida qiziqarli bilimlar.',
      ru: 'Фотосинтез растений, планеты-гиганты Солнечной системы, сила гравитации, круговорот воды и строение сердца человека.',
      en: 'Plant photosynthesis, the planets of the Solar System, universal gravitation, the water cycle, and human anatomy.',
    },
    icon: 'Sparkles',
    color: {
      bgLight: 'bg-indigo-50',
      bgDark: 'dark:bg-indigo-950/30',
      textLight: 'text-indigo-700',
      textDark: 'dark:text-indigo-300',
      border: 'border-indigo-200 dark:border-indigo-800',
      accent: 'indigo',
    },
    image: '/src/assets/images/subject_natural_science_1792389708509.jpg',
    topics: {
      uz: ['Fotosintez va kislorod', 'Quyosh tizimi planetalari', 'Gravitatsiya qonuni', 'Inson anatomiyasi (Yurak)', 'Suvning tabiatda aylanishi'],
      ru: ['Фотосинтез и кислород', 'Планеты Солнечной системы', 'Закон гравитации', 'Анатомия человека (Сердце)', 'Круговорот воды в природе'],
      en: ['Photosynthesis & Oxygen', 'Solar System Planets', 'Law of Gravity', 'Human Anatomy (Heart)', 'Water Cycle in Nature'],
    },
    questions: questionsBySubject.science,
  },
];
