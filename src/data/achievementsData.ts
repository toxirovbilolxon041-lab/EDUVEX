import { Achievement } from '../types';

export const achievementsList: Achievement[] = [
  {
    id: 'first_step',
    title: {
      uz: 'Birinchi qadam',
      ru: 'Первый шаг',
      en: 'First Step',
    },
    description: {
      uz: 'EDUVEX da ro‘yxatdan o‘tib, bilim sayohatini boshlaganlik uchun!',
      ru: 'За регистрацию в EDUVEX и начало пути к знаниям!',
      en: 'For joining EDUVEX and beginning your learning journey!',
    },
    icon: 'Rocket',
    requiredValue: 1,
    type: 'points',
  },
  {
    id: 'perfect_score',
    title: {
      uz: 'Mukammal natija (100%)',
      ru: 'Идеальный результат (100%)',
      en: 'Perfect Score (100%)',
    },
    description: {
      uz: 'Har qanday testda 10 tadan 10 ta to‘g‘ri javob berganingiz uchun!',
      ru: 'За 10 правильных ответов из 10 в любом предметном тесте!',
      en: 'For answering 10 out of 10 questions correctly in any quiz!',
    },
    icon: 'Crown',
    requiredValue: 100,
    type: 'percentage',
  },
  {
    id: 'math_genius',
    title: {
      uz: 'Matematika dahosi',
      ru: 'Математический гений',
      en: 'Math Wizard',
    },
    description: {
      uz: 'Matematika testida 80% yoki undan yuqori natija ko‘rsatganlik uchun!',
      ru: 'За отличный результат (80%+) в тесте по математике!',
      en: 'For scoring 80% or higher in the Mathematics quiz!',
    },
    icon: 'Calculator',
    requiredValue: 80,
    type: 'percentage',
  },
  {
    id: 'cyber_coder',
    title: {
      uz: 'Kiber-usta',
      ru: 'Кибер-мастер',
      en: 'Cyber Coder',
    },
    description: {
      uz: 'Informatika testida 80% yoki undan yuqori natija ko‘rsatganlik uchun!',
      ru: 'За высокий балл (80%+) в тесте по информатике!',
      en: 'For achieving 80% or higher in Computer Science!',
    },
    icon: 'Cpu',
    requiredValue: 80,
    type: 'percentage',
  },
  {
    id: 'cosmic_explorer',
    title: {
      uz: 'Kosmik tadqiqotchi',
      ru: 'Исследователь космоса',
      en: 'Cosmic Explorer',
    },
    description: {
      uz: 'Tabiiy fanlar testida a’lo natija ko‘rsatganlik uchun!',
      ru: 'За блестящий результат в тесте по естествознанию!',
      en: 'For outstanding performance in Natural Sciences!',
    },
    icon: 'Sparkles',
    requiredValue: 80,
    type: 'percentage',
  },
  {
    id: 'point_master',
    title: {
      uz: 'Ballar ustasi (200+ ball)',
      ru: 'Мастер баллов (200+)',
      en: 'Point Master (200+ pts)',
    },
    description: {
      uz: 'EDUVEX hisobida 200 dan ortiq umumiy ball to‘plaganlik uchun!',
      ru: 'За накопление более 200 баллов на своём балансе!',
      en: 'For accumulating over 200 total points on your account!',
    },
    icon: 'Award',
    requiredValue: 200,
    type: 'points',
  },
  {
    id: 'speedy_solver',
    title: {
      uz: 'Faol o‘quvchi',
      ru: 'Активный эрудит',
      en: 'Dedicated Scholar',
    },
    description: {
      uz: 'Kamida 5 ta mustaqil testni muvaffaqiyatli yakunlaganlik uchun!',
      ru: 'За успешное прохождение 5 и более тестов!',
      en: 'For completing 5 or more quizzes successfully!',
    },
    icon: 'Trophy',
    requiredValue: 5,
    type: 'tests',
  },
  {
    id: 'daily_champion',
    title: {
      uz: 'Kun chempioni',
      ru: 'Чемпион дня',
      en: 'Daily Champion',
    },
    description: {
      uz: 'Kun savoliga birinchi urinishda to‘g‘ri javob berganlik uchun!',
      ru: 'За правильный ответ на специальный вопрос дня!',
      en: 'For correctly answering the daily challenge question!',
    },
    icon: 'Star',
    requiredValue: 1,
    type: 'streak',
  },
];
