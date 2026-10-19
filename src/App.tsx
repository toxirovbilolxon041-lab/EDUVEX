import React, { useState, useEffect } from 'react';
import { Language, User, Subject, TestResult } from './types';
import { AuthService } from './services/auth';
import { subjects } from './data/subjectsData';
import { achievementsList } from './data/achievementsData';
import { sound } from './utils/sound';

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SubjectsSection } from './components/SubjectsSection';
import { InteractiveSandbox } from './components/InteractiveSandbox';
import { DailyQuestionCard } from './components/DailyQuestionCard';
import { EncyclopediaSection } from './components/EncyclopediaSection';
import { MyResultsSection } from './components/MyResultsSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';

import { QuizModal } from './components/QuizModal';
import { AuthModal } from './components/AuthModal';
import { ProfileSettingsModal } from './components/ProfileSettingsModal';
import { Sparkles, Trophy } from 'lucide-react';

export default function App() {
  // 1. Language state (persisted)
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('eduvex_lang');
    if (saved === 'ru' || saved === 'en' || saved === 'uz') return saved;
    return 'uz';
  });

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('eduvex_lang', lang);
    document.documentElement.lang = lang;
  };

  // 2. Dark mode state (persisted)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('eduvex_dark') === 'true';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('eduvex_dark', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('eduvex_dark', 'false');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // 3. Current User & Results state
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    return AuthService.getCurrentUser();
  });

  const [userResults, setUserResults] = useState<TestResult[]>(() => {
    if (!currentUser) return [];
    return AuthService.getUserResults(currentUser.id);
  });

  useEffect(() => {
    if (currentUser) {
      setUserResults(AuthService.getUserResults(currentUser.id));
    } else {
      setUserResults([]);
    }
  }, [currentUser]);

  // 4. Navigation & Modals
  const [activeSection, setActiveSection] = useState<string>('home');
  const [activeQuizSubject, setActiveQuizSubject] = useState<Subject | null>(null);
  const [authModalOpen, setAuthModalOpen] = useState<boolean>(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'register'>('login');
  const [profileModalOpen, setProfileModalOpen] = useState<boolean>(false);

  // 5. Toast notification for newly unlocked badges
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showAchievementToast = (badgeName: string) => {
    setToastMessage(`🏆 Yangi nishon ochildi: ${badgeName}!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleOpenAuth = (mode: 'login' | 'register' = 'login') => {
    setAuthModalMode(mode);
    setAuthModalOpen(true);
  };

  const handleLogout = () => {
    AuthService.logout();
    setCurrentUser(null);
    setUserResults([]);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'profile') {
      if (currentUser) {
        setProfileModalOpen(true);
      } else {
        handleOpenAuth('login');
      }
      return;
    }

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSearch = (query: string) => {
    // Navigate down to encyclopedia
    const el = document.getElementById('encyclopedia');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTestComplete = (updatedUser: User | null, result: TestResult) => {
    if (updatedUser) {
      setCurrentUser(updatedUser);
      setUserResults(AuthService.getUserResults(updatedUser.id));

      // Check if user earned new badge
      if (result.percentage === 100) {
        showAchievementToast(
          currentLang === 'uz' ? 'Mukammal Natija (100%)' : currentLang === 'ru' ? 'Идеальный результат' : 'Perfect Score'
        );
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Navbar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        currentUser={currentUser}
        onOpenAuth={handleOpenAuth}
        onLogout={handleLogout}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          currentLang={currentLang}
          onStartQuiz={() => {
            const mathSubject = subjects.find((s) => s.id === 'math') || subjects[0];
            setActiveQuizSubject(mathSubject);
          }}
          onExploreSubjects={() => handleNavigate('subjects')}
          onSearch={handleSearch}
        />

        {/* 5 Subjects & Quizzes Section */}
        <SubjectsSection
          currentLang={currentLang}
          onSelectSubject={(subject) => setActiveQuizSubject(subject)}
        />

        {/* Interactive Lab / Sandbox */}
        <section id="tests" className="py-12 md:py-16 bg-slate-50 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {currentLang === 'uz' ? 'Amaliy Mashg‘ulot' : currentLang === 'ru' ? 'Практическая лаборатория' : 'Interactive Lab'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white mt-1">
                {currentLang === 'uz'
                  ? 'Tajribalar va interaktiv modellar'
                  : currentLang === 'ru'
                  ? 'Интерактивные визуализаторы'
                  : 'Interactive Learning Simulators'}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                {currentLang === 'uz'
                  ? 'Darslikdagi qoidalarni amalda sinab ko‘ring: kasrlar, ikkilik kodlar va koinot planetalari bilan o‘ynang!'
                  : currentLang === 'ru'
                  ? 'Проверь теорию на практике: дроби, биты двоичного кода и орбиты планет!'
                  : 'Test concepts hands-on: fraction pizzas, binary bit switches, and planetary distances!'}
              </p>
            </div>

            <InteractiveSandbox currentLang={currentLang} />
          </div>
        </section>

        {/* Daily Question */}
        <DailyQuestionCard
          currentLang={currentLang}
          currentUser={currentUser}
          onUserUpdate={(u) => setCurrentUser(u)}
          onOpenAuth={() => handleOpenAuth('login')}
        />

        {/* Kids Encyclopedia */}
        <EncyclopediaSection currentLang={currentLang} />

        {/* My Results Section */}
        <MyResultsSection
          currentLang={currentLang}
          currentUser={currentUser}
          results={userResults}
          onOpenAuth={() => handleOpenAuth('login')}
          onExploreSubjects={() => handleNavigate('subjects')}
        />

        {/* About & Contact */}
        <AboutSection currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onNavigate={handleNavigate}
      />

      {/* Modals */}
      {activeQuizSubject && (
        <QuizModal
          subject={activeQuizSubject}
          currentLang={currentLang}
          currentUser={currentUser}
          onClose={() => setActiveQuizSubject(null)}
          onTestComplete={handleTestComplete}
          onOpenAuth={() => handleOpenAuth('login')}
        />
      )}

      {authModalOpen && (
        <AuthModal
          currentLang={currentLang}
          initialMode={authModalMode}
          onClose={() => setAuthModalOpen(false)}
          onSuccess={(u) => setCurrentUser(u)}
        />
      )}

      {profileModalOpen && currentUser && (
        <ProfileSettingsModal
          currentLang={currentLang}
          currentUser={currentUser}
          onClose={() => setProfileModalOpen(false)}
          onUserUpdate={(u) => setCurrentUser(u)}
        />
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 p-4 bg-slate-900 text-white rounded-2xl shadow-xl border border-slate-700 flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-200">
          <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
            <Trophy className="w-4 h-4" />
          </div>
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
