import React, { useState } from 'react';
import { Language, User } from '../types';
import { translations } from '../data/translations';
import { sound } from '../utils/sound';
import {
  Sparkles,
  Volume2,
  VolumeX,
  Sun,
  Moon,
  Menu,
  X,
  User as UserIcon,
  LogOut,
  Trophy,
} from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  currentUser: User | null;
  onOpenAuth: (mode?: 'login' | 'register') => void;
  onLogout: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  currentUser,
  onOpenAuth,
  onLogout,
  isDarkMode,
  onToggleDarkMode,
  activeSection,
  onNavigate,
}) => {
  const t = translations[currentLang];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSoundMuted, setIsSoundMuted] = useState(sound.getMuted());

  const handleToggleSound = () => {
    const next = sound.toggleMute();
    setIsSoundMuted(next);
  };

  const navLinks = [
    { id: 'subjects', label: t.navSubjects },
    { id: 'tests', label: t.navTests },
    { id: 'encyclopedia', label: t.navEncyclopedia },
    { id: 'daily', label: t.navDailyQuestion },
    { id: 'results', label: t.navMyResults },
    { id: 'about', label: t.navAbout },
  ];

  const handleNavClick = (id: string) => {
    sound.playClick();
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group shrink-0"
        >
          <div className="w-9 h-9 rounded-xl bg-linear-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-amber-300" />
          </div>
          <span className="text-xl font-extrabold tracking-tight font-display bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent whitespace-nowrap">
            {t.brandName}
          </span>
        </button>

        {/* Zone 2: Clean 5 nav links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNavClick(link.id)}
              className={`transition-colors whitespace-nowrap py-1 relative ${
                activeSection === link.id
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Zone 3: Controls & User Profile / Login */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Trilingual Language Selector */}
          <div className="flex items-center p-0.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">
            {(['uz', 'ru', 'en'] as Language[]).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => {
                  sound.playClick();
                  onLanguageChange(lang);
                }}
                className={`px-2 py-1 rounded-md uppercase transition-all ${
                  currentLang === lang
                    ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Sound Toggle */}
          <button
            type="button"
            onClick={handleToggleSound}
            title={isSoundMuted ? t.soundOff : t.soundOn}
            className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors hidden sm:inline-flex"
            aria-label="Toggle Sound"
          >
            {isSoundMuted ? <VolumeX className="w-4 h-4 text-rose-500" /> : <Volume2 className="w-4 h-4 text-blue-500" />}
          </button>

          {/* Dark Mode Toggle */}
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              onToggleDarkMode();
            }}
            title={isDarkMode ? t.themeLight : t.themeDark}
            className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-500" />}
          </button>

          {/* User Section / Action */}
          {currentUser ? (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleNavClick('profile')}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/80 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
              >
                <span className="text-base leading-none">{currentUser.avatar}</span>
                <span className="text-xs font-semibold text-blue-900 dark:text-blue-200 hidden sm:inline">
                  {currentUser.firstName}
                </span>
                <div className="flex items-center gap-1 text-[11px] font-bold text-amber-600 dark:text-amber-400 ml-1">
                  <Trophy className="w-3 h-3" />
                  <span>{currentUser.totalPoints}</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  onLogout();
                }}
                title={t.navLogout}
                className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-lg transition-colors"
                aria-label="Logout"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  onOpenAuth('login');
                }}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap hidden sm:inline-block"
              >
                {t.navLogin}
              </button>

              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  onOpenAuth('register');
                }}
                className="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap shadow-xs"
              >
                {t.navRegister}
              </button>
            </div>
          )}

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1.5 animate-in slide-in-from-top-2 duration-150">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left px-3.5 py-2.5 text-sm rounded-lg transition-colors font-medium ${
                activeSection === link.id
                  ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-300 font-semibold'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {link.label}
            </button>
          ))}

          {!currentUser && (
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAuth('login');
                }}
                className="flex-1 py-2 text-center text-xs font-semibold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg"
              >
                {t.navLogin}
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAuth('register');
                }}
                className="flex-1 py-2 text-center text-xs font-semibold text-white bg-blue-600 rounded-lg"
              >
                {t.navRegister}
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
