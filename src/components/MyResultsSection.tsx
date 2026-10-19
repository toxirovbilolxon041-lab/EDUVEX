import React from 'react';
import { Language, User, TestResult } from '../types';
import { translations } from '../data/translations';
import { achievementsList } from '../data/achievementsData';
import { subjects } from '../data/subjectsData';
import { sound } from '../utils/sound';
import {
  Trophy,
  Award,
  CheckCircle,
  Clock,
  Sparkles,
  Lock,
  ArrowRight,
  Shield,
  Star,
  Rocket,
  Crown,
  Calculator,
  Cpu,
} from 'lucide-react';

interface MyResultsSectionProps {
  currentLang: Language;
  currentUser: User | null;
  results: TestResult[];
  onOpenAuth: () => void;
  onExploreSubjects: () => void;
}

export const MyResultsSection: React.FC<MyResultsSectionProps> = ({
  currentLang,
  currentUser,
  results,
  onOpenAuth,
  onExploreSubjects,
}) => {
  const t = translations[currentLang];

  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-indigo-500" />;
      case 'Crown':
        return <Crown className="w-5 h-5 text-amber-500" />;
      case 'Calculator':
        return <Calculator className="w-5 h-5 text-blue-500" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-cyan-500" />;
      case 'Star':
        return <Star className="w-5 h-5 text-amber-400" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-emerald-500" />;
      default:
        return <Award className="w-5 h-5 text-blue-500" />;
    }
  };

  const getSubjectName = (subjectId: string) => {
    const s = subjects.find((item) => item.id === subjectId);
    return s ? s.name[currentLang] : subjectId;
  };

  if (!currentUser) {
    return (
      <section id="results" className="py-16 bg-slate-50 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto shadow-xs">
            <Lock className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
              {t.resultsHeading}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              {t.authGuestNotice}
            </p>
          </div>
          <div className="flex justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onOpenAuth();
              }}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl transition-all shadow-xs"
            >
              {t.navLogin}
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Level determination: 100 points per level
  const userLevel = Math.max(1, Math.floor(currentUser.totalPoints / 100) + 1);

  return (
    <section id="results" className="py-12 md:py-16 bg-slate-50 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* User Summary Header */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800/80 text-3xl flex items-center justify-center shrink-0">
              {currentUser.avatar}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
                  {currentUser.firstName}
                </h2>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                  {currentUser.age} yosh
                </span>
              </div>
              <span className="text-xs text-slate-500 font-mono">@{currentUser.username}</span>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                {t.resultsRank}: <strong className="text-blue-600 dark:text-blue-400">Level {userLevel} Bilimdon</strong>
              </p>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/80 text-center">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                {t.resultsTotalPoints}
              </span>
              <span className="text-xl font-bold font-display text-amber-600 dark:text-amber-400 tabular-nums">
                {currentUser.totalPoints}
              </span>
            </div>

            <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/80 text-center">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                {t.resultsTestsCount}
              </span>
              <span className="text-xl font-bold font-display text-blue-600 dark:text-blue-400 tabular-nums">
                {currentUser.completedTestsCount}
              </span>
            </div>

            <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/80 text-center">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                {t.resultsBestScore}
              </span>
              <span className="text-xl font-bold font-display text-emerald-600 dark:text-emerald-400 tabular-nums">
                {currentUser.bestScorePercentage}%
              </span>
            </div>
          </div>
        </div>

        {/* Badges / Achievements Matrix */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {t.resultsAchievements}
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 dark:text-white mt-0.5">
                {currentUser.achievements.length} / {achievementsList.length} nishon ochildi
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievementsList.map((badge) => {
              const isUnlocked = currentUser.achievements.includes(badge.id);

              return (
                <div
                  key={badge.id}
                  className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                    isUnlocked
                      ? 'bg-amber-50/40 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/60'
                      : 'bg-slate-50/50 dark:bg-slate-800/30 border-slate-200 dark:border-slate-800 opacity-60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isUnlocked
                          ? 'bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-300'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-400'
                      }`}
                    >
                      {getBadgeIcon(badge.icon)}
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                        isUnlocked
                          ? 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-500'
                      }`}
                    >
                      {isUnlocked ? t.resultsUnlocked : t.resultsLocked}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                      {badge.title[currentLang]}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                      {badge.description[currentLang]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Test History */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-4">
          <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">
            {t.resultsRecentHistory}
          </h3>

          {results.length === 0 ? (
            <div className="text-center py-8 space-y-3">
              <p className="text-xs text-slate-500 dark:text-slate-400">{t.resultsNoHistory}</p>
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  onExploreSubjects();
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl transition-colors"
              >
                <span>{t.heroStartQuiz}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider">
                    <th className="py-2.5 px-3">{t.resultsSubject}</th>
                    <th className="py-2.5 px-3">{t.resultsScore}</th>
                    <th className="py-2.5 px-3">{t.testAccuracy}</th>
                    <th className="py-2.5 px-3">{t.testPointsAwarded}</th>
                    <th className="py-2.5 px-3">{t.testTimeSpent}</th>
                    <th className="py-2.5 px-3">{t.resultsDate}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
                  {results.slice(0, 10).map((res) => (
                    <tr key={res.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                      <td className="py-3 px-3 font-semibold text-slate-900 dark:text-white">
                        {getSubjectName(res.subjectId)}
                      </td>
                      <td className="py-3 px-3 font-mono font-bold text-slate-700 dark:text-slate-300">
                        {res.score} / {res.totalQuestions}
                      </td>
                      <td className="py-3 px-3 font-mono">
                        <span
                          className={`font-semibold ${
                            res.percentage >= 80
                              ? 'text-emerald-600 dark:text-emerald-400'
                              : res.percentage >= 60
                              ? 'text-blue-600 dark:text-blue-400'
                              : 'text-amber-600 dark:text-amber-400'
                          }`}
                        >
                          {res.percentage}%
                        </span>
                      </td>
                      <td className="py-3 px-3 font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                        +{res.pointsEarned} {t.pts}
                      </td>
                      <td className="py-3 px-3 font-mono text-slate-500">
                        {res.timeSpentSeconds} {t.sec}
                      </td>
                      <td className="py-3 px-3 text-slate-500">
                        {new Date(res.completedAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
