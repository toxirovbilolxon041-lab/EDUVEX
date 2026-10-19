export type Language = 'uz' | 'ru' | 'en';

export type SubjectId = 'math' | 'it' | 'english' | 'history' | 'science';

export interface User {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  age: 10 | 11 | 12;
  passwordHash: string;
  avatar: string;
  totalPoints: number;
  completedTestsCount: number;
  bestScorePercentage: number;
  achievements: string[];
  createdAt: string;
  lastActive: string;
}

export interface Question {
  id: number;
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
  points: number;
}

export interface Subject {
  id: SubjectId;
  name: Record<Language, string>;
  shortDescription: Record<Language, string>;
  detailedDescription: Record<Language, string>;
  icon: string;
  color: {
    bgLight: string;
    bgDark: string;
    textLight: string;
    textDark: string;
    border: string;
    accent: string;
  };
  topics: Record<Language, string[]>;
  image?: string;
  questions: Question[];
}

export interface TestResult {
  id: string;
  userId: string;
  subjectId: SubjectId;
  score: number; // e.g. 8 out of 10
  totalQuestions: number;
  percentage: number;
  pointsEarned: number;
  completedAt: string;
  timeSpentSeconds: number;
}

export interface DailyQuestion {
  id: string;
  dateKey: string;
  category: Record<Language, string>;
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
  points: number;
}

export interface EncyclopediaArticle {
  id: string;
  category: string;
  categoryName: Record<Language, string>;
  title: Record<Language, string>;
  summary: Record<Language, string>;
  content: Record<Language, string>;
  funFact: Record<Language, string>;
  readTime: Record<Language, string>;
  icon: string;
  image?: string;
}

export interface Achievement {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  icon: string;
  requiredValue: number;
  type: 'points' | 'tests' | 'percentage' | 'streak';
}
