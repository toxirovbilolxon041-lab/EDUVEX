import { DailyQuestion } from '../types';

export const dailyQuestionsPool: DailyQuestion[] = [
  {
    id: 'daily-01',
    dateKey: '2026-10-19',
    category: {
      uz: 'Koinot sirlari',
      ru: 'Космические тайны',
      en: 'Space Wonders',
    },
    question: {
      uz: 'Quyosh tizimida qaysi sayyora "Qizil sayyora" deb ataladi?',
      ru: 'Какую планету в Солнечной системе называют «Красной планетой»?',
      en: 'Which planet in our Solar System is known as the "Red Planet"?',
    },
    options: {
      uz: ['Mars', 'Merkuriy', 'Venera', 'Saturn'],
      ru: ['Марс', 'Меркурий', 'Венера', 'Сатурн'],
      en: ['Mars', 'Mercury', 'Venus', 'Saturn'],
    },
    correctIndex: 0,
    points: 20,
    explanation: {
      uz: 'Mars sirtida temir oksidi (zang) ko‘p bo‘lganligi sababli u yorqin qizg‘ish-zarg‘aldoq rangda ko‘rinadi.',
      ru: 'Поверхность Марса богата оксидом железа (ржавчиной), что придаёт планете характерный красноватый оттенок.',
      en: 'Mars appears reddish because its surface rocks and dust are rich in iron oxide (rust).',
    },
  },
  {
    id: 'daily-02',
    dateKey: '2026-10-20',
    category: {
      uz: 'Raqamli olam',
      ru: 'Цифровой мир',
      en: 'Digital World',
    },
    question: {
      uz: 'Kompyuter klaviaturasida eng uzun va eng ko‘p bosiladigan tugma qaysi?',
      ru: 'Какая клавиша на клавиатуре самая длинная и нажимается чаще всего?',
      en: 'Which key on the computer keyboard is the longest and most frequently pressed?',
    },
    options: {
      uz: ['Enter', 'Probeldan joy tashlash (Spacebar)', 'Backspace', 'Shift'],
      ru: ['Enter', 'Пробел (Spacebar)', 'Backspace', 'Shift'],
      en: ['Enter', 'Spacebar', 'Backspace', 'Shift'],
    },
    correctIndex: 1,
    points: 20,
    explanation: {
      uz: 'Probel tugmasi so‘zlar orasida masofa qoldirish uchun xizmat qiladi va klaviaturadagi eng uzun tugmadir.',
      ru: 'Клавиша пробела — самая длинная на клавиатуре и предназначена для разделения слов.',
      en: 'The spacebar is the longest key on the keyboard, used to separate words while typing.',
    },
  },
  {
    id: 'daily-03',
    dateKey: '2026-10-21',
    category: {
      uz: 'Tezkor mantiq',
      ru: 'Быстрая логика',
      en: 'Fast Logic',
    },
    question: {
      uz: 'Agar daraxtda 5 ta qush o‘tirgan bo‘lsa va 1 tasi uchib ketsa, qolgan 4 tasi nima qiladi?',
      ru: 'Если на ветке сидело 5 воробьёв и 1 улетел, сколько воробьёв останется?',
      en: 'If 5 birds sit on a branch and 1 flies away, how many usually stay behind in nature?',
    },
    options: {
      uz: ['4 ta qush qoladi', 'Shovqindan barchasi uchib ketadi', '6 ta qush bo‘ladi', '3 ta qush qoladi'],
      ru: ['Останется 4', 'От взмаха крыльев улетят все остальные', 'Станет 6', 'Останется 3'],
      en: ['4 birds remain', 'The rest fly away from the sudden flutter', '6 birds arrive', '3 birds remain'],
    },
    correctIndex: 0,
    points: 20,
    explanation: {
      uz: 'Matematik jihatdan: 5 - 1 = 4 ta qush qoladi.',
      ru: 'С математической точки зрения: 5 - 1 = 4 воробья.',
      en: 'Mathematically: 5 - 1 = 4 birds remain.',
    },
  },
];

export function getTodayQuestion(): DailyQuestion {
  const day = new Date().getDate();
  const index = day % dailyQuestionsPool.length;
  return dailyQuestionsPool[index];
}
