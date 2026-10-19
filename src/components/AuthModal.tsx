import React, { useState } from 'react';
import { Language, User } from '../types';
import { translations } from '../data/translations';
import { AuthService } from '../services/auth';
import { sound } from '../utils/sound';
import { X, Lock, ShieldCheck, UserCheck, Sparkles, KeyRound } from 'lucide-react';

interface AuthModalProps {
  currentLang: Language;
  initialMode?: 'login' | 'register';
  onClose: () => void;
  onSuccess: (user: User) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  currentLang,
  initialMode = 'login',
  onClose,
  onSuccess,
}) => {
  const t = translations[currentLang];
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);

  // Form states
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [age, setAge] = useState<10 | 11 | 12>(11);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // UI state
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showForgotHelper, setShowForgotHelper] = useState<boolean>(false);

  const resetForm = () => {
    setErrorMsg(null);
    setSuccessMsg(null);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    resetForm();
    setIsLoading(true);

    try {
      const res = await AuthService.login(username, password);
      if (res.success && res.user) {
        sound.playCorrect();
        setSuccessMsg(t.successLogin);
        setTimeout(() => {
          onSuccess(res.user!);
          onClose();
        }, 600);
      } else {
        sound.playWrong();
        if (res.error === 'empty_fields') setErrorMsg(t.errEmptyFields);
        else if (res.error === 'user_not_found') setErrorMsg(t.errUserNotFound);
        else if (res.error === 'wrong_password') setErrorMsg(t.errWrongPassword);
        else setErrorMsg(t.errWrongPassword);
      }
    } catch {
      setErrorMsg(t.errWrongPassword);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    resetForm();
    setIsLoading(true);

    try {
      const res = await AuthService.register({
        firstName,
        lastName,
        username,
        age,
        password,
        confirmPassword,
      });

      if (res.success && res.user) {
        sound.playCorrect();
        setSuccessMsg(t.successRegister);
        setTimeout(() => {
          onSuccess(res.user!);
          onClose();
        }, 700);
      } else {
        sound.playWrong();
        if (res.error === 'empty_fields') setErrorMsg(t.errEmptyFields);
        else if (res.error === 'username_too_short') setErrorMsg(t.errUsernameShort);
        else if (res.error === 'username_invalid_chars') setErrorMsg(t.errUsernameInvalid);
        else if (res.error === 'invalid_age') setErrorMsg(t.errInvalidAge);
        else if (res.error === 'password_too_short') setErrorMsg(t.errPasswordShort);
        else if (res.error === 'passwords_mismatch') setErrorMsg(t.errPasswordsMismatch);
        else if (res.error === 'username_taken') setErrorMsg(t.errUsernameTaken);
        else setErrorMsg(t.errEmptyFields);
      }
    } catch {
      setErrorMsg(t.errEmptyFields);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickDemoLogin = async (demoUsername: string) => {
    sound.playClick();
    setUsername(demoUsername);
    setPassword('eduvex123');
    setIsLoading(true);
    resetForm();

    const res = await AuthService.login(demoUsername, 'eduvex123');
    setIsLoading(false);
    if (res.success && res.user) {
      sound.playCorrect();
      setSuccessMsg(t.successLogin);
      setTimeout(() => {
        onSuccess(res.user!);
        onClose();
      }, 500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 bg-slate-50 dark:bg-slate-950/60">
          <div>
            <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
              {mode === 'login' ? t.authLoginTitle : t.authRegisterTitle}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              {mode === 'login' ? t.authLoginSubtitle : t.authRegisterSubtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="px-6 pt-4 pb-2">
          <div className="grid grid-cols-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
            <button
              type="button"
              onClick={() => {
                setMode('login');
                resetForm();
                sound.playClick();
              }}
              className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                mode === 'login'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t.navLogin}
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('register');
                resetForm();
                sound.playClick();
              }}
              className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                mode === 'register'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t.navRegister}
            </button>
          </div>
        </div>

        {/* Form Container */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {errorMsg && (
            <div className="p-3 text-xs rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-rose-700 dark:text-rose-300 flex items-center gap-2">
              <span className="font-bold">⚠️</span>
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="p-3 text-xs rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {mode === 'login' ? (
            /* LOGIN FORM */
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  {t.authUsername}
                </label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder={t.authUsernamePlaceholder}
                  className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {t.authPassword}
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowForgotHelper(!showForgotHelper)}
                    className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {t.authForgotPassword}
                  </button>
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t.authPasswordPlaceholder}
                  className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-slate-900 dark:text-white"
                />
              </div>

              {showForgotHelper && (
                <div className="p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl text-xs text-amber-900 dark:text-amber-300">
                  <div className="flex items-center gap-1.5 font-bold mb-1">
                    <KeyRound className="w-3.5 h-3.5" />
                    <span>{t.authForgotPassword}</span>
                  </div>
                  <p>{t.authForgotPassHelp}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-semibold rounded-xl transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4" />
                <span>{isLoading ? '...' : t.authSubmitLogin}</span>
              </button>

              {/* Quick Demo Accounts */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block mb-2 text-center">
                  {t.authQuickDemo}
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handleQuickDemoLogin('jasurbek')}
                    className="p-2.5 text-left border border-slate-200 dark:border-slate-700 rounded-xl hover:border-blue-400 hover:bg-blue-50/50 dark:hover:bg-slate-800 transition-all text-xs"
                  >
                    <span className="font-bold text-slate-800 dark:text-slate-200 block">🚀 Jasurbek</span>
                    <span className="text-[11px] text-slate-500">11 yosh · 240 ball</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickDemoLogin('malika')}
                    className="p-2.5 text-left border border-slate-200 dark:border-slate-700 rounded-xl hover:border-blue-400 hover:bg-blue-50/50 dark:hover:bg-slate-800 transition-all text-xs"
                  >
                    <span className="font-bold text-slate-800 dark:text-slate-200 block">🌟 Malika</span>
                    <span className="text-[11px] text-slate-500">10 yosh · 180 ball</span>
                  </button>
                </div>
              </div>
            </form>
          ) : (
            /* REGISTER FORM */
            <form onSubmit={handleRegister} className="space-y-3.5">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {t.authFirstName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder={t.authFirstNamePlaceholder}
                    className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {t.authLastName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder={t.authLastNamePlaceholder}
                    className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 items-end">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {t.authUsername} *
                  </label>
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder={t.authUsernamePlaceholder}
                    className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {t.authAge} (10–12) *
                  </label>
                  <div className="grid grid-cols-3 gap-1">
                    {[10, 11, 12].map((a) => (
                      <button
                        key={a}
                        type="button"
                        onClick={() => {
                          setAge(a as 10 | 11 | 12);
                          sound.playClick();
                        }}
                        className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                          age === a
                            ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                            : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {a}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t.authPassword} *
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t.authPasswordPlaceholder}
                  className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t.authConfirmPassword} *
                </label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder={t.authConfirmPasswordPlaceholder}
                  className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-slate-900 dark:text-white"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-semibold rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 mt-2"
              >
                <UserCheck className="w-4 h-4" />
                <span>{isLoading ? '...' : t.authSubmitRegister}</span>
              </button>
            </form>
          )}

          {/* Kid Safety Note */}
          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-800 flex items-start gap-2.5 text-[11px] text-slate-500 dark:text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-slate-700 dark:text-slate-300 font-semibold">
                {t.kidSafetyTitle}:
              </strong>{' '}
              {t.kidSafetyDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
