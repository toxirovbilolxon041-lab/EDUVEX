import React, { useState } from 'react';
import { Language, EncyclopediaArticle } from '../types';
import { encyclopediaArticles } from '../data/encyclopediaData';
import { translations } from '../data/translations';
import { sound } from '../utils/sound';
import {
  Search,
  BookOpen,
  Orbit,
  Bot,
  Brain,
  Compass,
  Fish,
  Sparkles,
  Clock,
  Lightbulb,
  X,
  ArrowRight,
} from 'lucide-react';

interface EncyclopediaSectionProps {
  currentLang: Language;
}

export const EncyclopediaSection: React.FC<EncyclopediaSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeArticle, setActiveArticle] = useState<EncyclopediaArticle | null>(null);

  const getArticleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Orbit':
        return <Orbit className="w-5 h-5 text-indigo-500" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-cyan-500" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-rose-500" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-amber-500" />;
      case 'Fish':
        return <Fish className="w-5 h-5 text-emerald-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-500" />;
    }
  };

  const categories = [
    { id: 'all', label: t.encycloAllCategories },
    { id: 'space', label: currentLang === 'uz' ? 'Koinot' : currentLang === 'ru' ? 'Космос' : 'Space' },
    { id: 'technology', label: currentLang === 'uz' ? 'Texnologiya' : currentLang === 'ru' ? 'Технологии' : 'Tech' },
    { id: 'biology', label: currentLang === 'uz' ? 'Tabiat & Inson' : currentLang === 'ru' ? 'Человек и природа' : 'Nature' },
    { id: 'history', label: currentLang === 'uz' ? 'Tarix' : currentLang === 'ru' ? 'История' : 'History' },
    { id: 'math', label: currentLang === 'uz' ? 'Matematika' : currentLang === 'ru' ? 'Математика' : 'Math' },
  ];

  const filteredArticles = encyclopediaArticles.filter((item) => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const q = searchTerm.toLowerCase();
    const matchesSearch =
      item.title[currentLang].toLowerCase().includes(q) ||
      item.summary[currentLang].toLowerCase().includes(q) ||
      item.content[currentLang].toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  return (
    <section id="encyclopedia" className="py-12 md:py-16 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            {t.navEncyclopedia}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white mt-1">
            {t.encycloHeading}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            {t.encycloSubheading}
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Interactive filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  sound.playClick();
                  setSelectedCategory(c.id);
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  selectedCategory === c.id
                    ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t.encycloSearch}
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    {getArticleIcon(article.icon)}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime[currentLang]}</span>
                  </div>
                </div>

                <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-1">
                  {article.categoryName[currentLang]}
                </span>

                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {article.title[currentLang]}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                  {article.summary[currentLang]}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setActiveArticle(article);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors"
                >
                  <span>{t.encycloReadMore}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[88vh]">
            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 bg-slate-50 dark:bg-slate-950/60">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  {activeArticle.categoryName[currentLang]}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-5 flex-1">
              <h3 className="text-xl md:text-2xl font-bold font-display text-slate-900 dark:text-white">
                {activeArticle.title[currentLang]}
              </h3>

              <div className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
                <p>{activeArticle.content[currentLang]}</p>
              </div>

              {/* Fun Fact Callout */}
              <div className="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/80 text-xs text-amber-900 dark:text-amber-200 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-amber-800 dark:text-amber-300">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  <span>{t.encycloFunFact}</span>
                </div>
                <p className="leading-relaxed">{activeArticle.funFact[currentLang]}</p>
              </div>
            </div>

            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold rounded-xl transition-colors"
              >
                {t.encycloClose}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
