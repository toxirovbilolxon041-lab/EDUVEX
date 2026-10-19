import React, { useState } from 'react';
import { Language, User } from '../types';
import { translations } from '../data/translations';
import { AuthService } from '../services/auth';
import { sound } from '../utils/sound';
import { X, Check, ShieldCheck, Sparkles } from 'lucide-react';

interface ProfileSettingsModalProps {
  currentLang: Language;
  currentUser: User;
  onClose: () => void;
  onUserUpdate: (updatedUser: User) => void;
}

export const ProfileSettingsModal: React.FC<ProfileSettingsModalProps> = ({
  currentLang,
  currentUser,
  onClose,
  onUserUpdate,
}) => {
  const t = translations[currentLang];

  const [firstName, setFirstName] = useState(currentUser.firstName);
  const [selectedAvatar, setSelectedAvatar] = useState(currentUser.avatar);
  const [age, setAge] = useState<10 | 11 | 12>(currentUser.age);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const availableAvatars = ['🚀', '🦊', '🦁', '🌟', '🐬', '🦉', '⚡', '🎨', '🪐', '🦄'];

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playCorrect();

    const updated = AuthService.updateUserProfile(currentUser.id, {
      firstName: firstName.trim() || currentUser.firstName,
      avatar: selectedAvatar,
      age,
    });

    if (updated) {
      onUserUpdate(updated);
      setSavedSuccess(true);
      setTimeout(() => {
        setSavedSuccess(false);
        onClose();
      }, 600);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 bg-slate-50 dark:bg-slate-950/60">
          <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">
            {t.profileTitle}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="p-6 space-y-5">
          {savedSuccess && (
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 text-xs text-emerald-700 dark:text-emerald-300 rounded-xl flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>{t.profileSavedSuccess}</span>
            </div>
          )}

          {/* Avatar selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
              {t.profileAvatar}
            </label>
            <div className="grid grid-cols-5 gap-2">
              {availableAvatars.map((av) => (
                <button
                  key={av}
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setSelectedAvatar(av);
                  }}
                  className={`text-2xl p-2 rounded-xl border transition-all ${
                    selectedAvatar === av
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/50 scale-105 shadow-xs'
                      : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {av}
                </button>
              ))}
            </div>
          </div>

          {/* First name */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              {t.authFirstName}
            </label>
            <input
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
            />
          </div>

          {/* Age selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              {t.authAge}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[10, 11, 12].map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setAge(a as 10 | 11 | 12);
                  }}
                  className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                    age === a
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                      : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {a} {currentLang === 'uz' ? 'yosh' : currentLang === 'ru' ? 'лет' : 'years'}
                </button>
              ))}
            </div>
          </div>

          {/* Kid Safety Note */}
          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <p>{t.profileSafetyNotice}</p>
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 transition-colors"
            >
              Bekor qilish
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl transition-all shadow-xs flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>{t.profileSave}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
