import React from 'react';
import { Subject, Language } from '../types';
import { subjects } from '../data/subjectsData';
import { translations } from '../data/translations';
import { sound } from '../utils/sound';
import {
  Calculator,
  Cpu,
  BookOpen,
  Landmark,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

interface SubjectsSectionProps {
  currentLang: Language;
  onSelectSubject: (subject: Subject) => void;
}

export const SubjectsSection: React.FC<SubjectsSectionProps> = ({
  currentLang,
  onSelectSubject,
}) => {
  const t = translations[currentLang];

  const getSubjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calculator':
        return <Calculator className="w-6 h-6 text-blue-600" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-600" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-emerald-600" />;
      case 'Landmark':
        return <Landmark className="w-6 h-6 text-amber-600" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <section id="subjects" className="py-12 md:py-16 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            {t.navSubjects}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white mt-1">
            {t.subjectsHeading}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            {t.subjectsSubheading}
          </p>
        </div>

        {/* 5 Subjects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subj) => (
            <div
              key={subj.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div>
                {/* Header of card */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getSubjectIcon(subj.icon)}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {t.subjectQuestionsCount}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {subj.name[currentLang]}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {subj.shortDescription[currentLang]}
                </p>

                {/* Topics list */}
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-1.5">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    {t.subjectTopicCount}:
                  </span>
                  <div className="space-y-1">
                    {subj.topics[currentLang].slice(0, 3).map((topic, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span className="truncate">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                  +100 ballgacha
                </span>
                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    onSelectSubject(subj);
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl transition-all shadow-xs"
                >
                  <span>{t.subjectStartTest}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
