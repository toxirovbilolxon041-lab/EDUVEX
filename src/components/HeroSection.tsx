import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { sound } from '../utils/sound';
import { Search, Sparkles, BookOpen, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  currentLang: Language;
  onStartQuiz: () => void;
  onExploreSubjects: () => void;
  onSearch: (query: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLang,
  onStartQuiz,
  onExploreSubjects,
  onSearch,
}) => {
  const t = translations[currentLang];
  const [searchVal, setSearchVal] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchVal.trim()) {
      sound.playClick();
      onSearch(searchVal.trim());
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-12 md:pt-12 md:pb-16 bg-linear-to-b from-blue-50/50 via-white to-slate-50/50 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Balanced Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline, Subtitle, Search, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-100/70 dark:bg-blue-950/60 px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-800/60">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>{t.safetyBadge}</span>
              <span aria-hidden="true">·</span>
              <span>{t.testLevelBadge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight leading-[1.15] text-balance">
              {t.heroTitle}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {t.heroSubtitle}
            </p>

            {/* Quick Search */}
            <form onSubmit={handleSearchSubmit} className="relative max-w-lg">
              <input
                type="text"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                placeholder={t.heroSearchPlaceholder}
                className="w-full pl-11 pr-24 py-3 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl shadow-xs focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
              >
                Izlash
              </button>
            </form>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  onStartQuiz();
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-sm rounded-xl shadow-sm hover:shadow-md transition-all active:scale-98"
              >
                <span>{t.heroStartQuiz}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  onExploreSubjects();
                }}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-semibold text-sm rounded-xl transition-all"
              >
                <BookOpen className="w-4 h-4 text-blue-500" />
                <span>{t.heroExploreSubjects}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-800 aspect-16/10 lg:aspect-4/3 group">
              <img
                src="/src/assets/images/hero_eduvex_kids_1792389691774.jpg"
                alt="EDUVEX Kids Learning Science & Math"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md rounded-xl border border-white/20 shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white block">
                      {currentLang === 'uz' ? 'Qiziqarli darslar' : currentLang === 'ru' ? 'Увлекательные уроки' : 'Fun & Interactive'}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      10–12 yosh
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-amber-500 font-mono">
                  +10 ball / test
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column KPI Trust Strip below hero */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-200/80 dark:border-slate-800">
          <div className="p-4 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700/80">
            <span className="text-2xl font-extrabold font-display text-blue-600 dark:text-blue-400 block tabular-nums">
              5,000+
            </span>
            <span className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 block">
              {t.heroStatStudents}
            </span>
          </div>

          <div className="p-4 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700/80">
            <span className="text-2xl font-extrabold font-display text-indigo-600 dark:text-indigo-400 block tabular-nums">
              50+
            </span>
            <span className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 block">
              {t.heroStatQuizzes}
            </span>
          </div>

          <div className="p-4 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700/80">
            <span className="text-2xl font-extrabold font-display text-emerald-600 dark:text-emerald-400 block tabular-nums">
              3 xil
            </span>
            <span className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 block">
              {t.heroStatLanguages}
            </span>
          </div>

          <div className="p-4 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700/80">
            <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
              <ShieldCheck className="w-5 h-5 shrink-0" />
              <span className="text-sm font-bold">Kid-Safe</span>
            </div>
            <span className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 block">
              {t.heroStatBadge}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
