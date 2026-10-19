import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { sound } from '../utils/sound';
import { Sparkles, ShieldCheck } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onLanguageChange,
  onNavigate,
}) => {
  const t = translations[currentLang];

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
              <Sparkles className="w-4 h-4 text-amber-300" />
            </div>
            <div>
              <span className="text-lg font-bold font-display tracking-tight text-white block">
                {t.brandName}
              </span>
              <span className="text-xs text-slate-400">{t.brandTagline}</span>
            </div>
          </div>

          {/* Quick nav links as clean unboxed text */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400">
            <button
              type="button"
              onClick={() => onNavigate('subjects')}
              className="hover:text-white transition-colors"
            >
              {t.navSubjects}
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => onNavigate('tests')}
              className="hover:text-white transition-colors"
            >
              {t.navTests}
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => onNavigate('encyclopedia')}
              className="hover:text-white transition-colors"
            >
              {t.navEncyclopedia}
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => onNavigate('daily')}
              className="hover:text-white transition-colors"
            >
              {t.navDailyQuestion}
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => onNavigate('about')}
              className="hover:text-white transition-colors"
            >
              {t.navAbout}
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              EDUVEX © {new Date().getFullYear()}. {t.rightsReserved} (10–12 yosh uchun).
            </span>
          </div>

          {/* Language selector in footer */}
          <div className="flex items-center gap-2">
            <span className="text-slate-400">{t.languageSelect}:</span>
            {(['uz', 'ru', 'en'] as Language[]).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => {
                  sound.playClick();
                  onLanguageChange(lang);
                }}
                className={`uppercase px-2 py-0.5 rounded-md text-[11px] font-semibold transition-colors ${
                  currentLang === lang
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
