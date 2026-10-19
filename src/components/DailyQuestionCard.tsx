import React, { useState, useEffect } from 'react';
import { Language, User } from '../types';
import { getTodayQuestion } from '../data/dailyQuestionsData';
import { translations } from '../data/translations';
import { AuthService } from '../services/auth';
import { sound } from '../utils/sound';
import { Sparkles, CheckCircle2, XCircle, Award } from 'lucide-react';

interface DailyQuestionCardProps {
  currentLang: Language;
  currentUser: User | null;
  onUserUpdate: (updatedUser: User) => void;
  onOpenAuth: () => void;
}

export const DailyQuestionCard: React.FC<DailyQuestionCardProps> = ({
  currentLang,
  currentUser,
  onUserUpdate,
  onOpenAuth,
}) => {
  const t = translations[currentLang];
  const dailyQ = getTodayQuestion();

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const storageKey = currentUser
    ? `eduvex_daily_${dailyQ.dateKey}_${currentUser.id}`
    : `eduvex_daily_${dailyQ.dateKey}_guest`;

  useEffect(() => {
    const raw = localStorage.getItem(storageKey);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        setSelectedOption(parsed.selected);
        setIsAnswered(true);
        setIsCorrect(parsed.isCorrect);
      } catch {
        // ignore
      }
    }
  }, [storageKey]);

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    sound.playClick();
    setSelectedOption(idx);
    const correct = idx === dailyQ.correctIndex;
    setIsCorrect(correct);
    setIsAnswered(true);

    localStorage.setItem(
      storageKey,
      JSON.stringify({ selected: idx, isCorrect: correct, timestamp: Date.now() })
    );

    if (correct) {
      sound.playCorrect();
      if (currentUser) {
        const updated = AuthService.recordDailyQuestionPoints(currentUser.id, dailyQ.points);
        if (updated) {
          onUserUpdate(updated);
        }
      }
    } else {
      sound.playWrong();
    }
  };

  return (
    <section id="daily" className="py-12 bg-linear-to-b from-blue-50/40 via-white to-indigo-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden p-6 sm:p-8 relative">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-700/60 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider block">
                  {t.dailyBadge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
                  {t.dailyTitle}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                {t.dailyPointsBadge}
              </span>
              <span className="text-xs font-medium text-slate-500">
                {dailyQ.category[currentLang]}
              </span>
            </div>
          </div>

          {/* Question Body */}
          <div className="py-6 space-y-5">
            <p className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white leading-relaxed">
              {dailyQ.question[currentLang]}
            </p>

            {/* Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {dailyQ.options[currentLang].map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrectOption = idx === dailyQ.correctIndex;

                let btnStyle =
                  'border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200';

                if (isAnswered) {
                  if (isCorrectOption) {
                    btnStyle =
                      'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 ring-2 ring-emerald-500/20';
                  } else if (isSelected && !isCorrectOption) {
                    btnStyle =
                      'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 ring-2 ring-rose-500/20';
                  } else {
                    btnStyle =
                      'border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/50 opacity-60 text-slate-500';
                  }
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={isAnswered}
                    onClick={() => handleSelect(idx)}
                    className={`p-4 rounded-xl border text-sm font-medium text-left transition-all flex items-center justify-between gap-2 ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {isAnswered && isCorrectOption && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                    {isAnswered && isSelected && !isCorrectOption && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation & result */}
            {isAnswered && (
              <div
                className={`p-4 rounded-xl text-xs leading-relaxed border ${
                  isCorrect
                    ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                    : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                <div className="font-bold flex items-center gap-1.5 mb-1">
                  <Award className="w-4 h-4" />
                  <span>{isCorrect ? t.dailyCorrectNote : t.dailyWrongNote}</span>
                </div>
                <p>{dailyQ.explanation[currentLang]}</p>
              </div>
            )}

            {!currentUser && isAnswered && isCorrect && (
              <div className="p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl text-xs text-amber-900 dark:text-amber-200 flex items-center justify-between">
                <span>{t.authGuestNotice}</span>
                <button
                  type="button"
                  onClick={onOpenAuth}
                  className="px-3 py-1 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
                >
                  {t.navLogin}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
