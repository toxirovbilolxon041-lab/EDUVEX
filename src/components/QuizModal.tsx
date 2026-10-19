import React, { useState, useEffect } from 'react';
import { Subject, Language, User, TestResult } from '../types';
import { translations } from '../data/translations';
import { AuthService } from '../services/auth';
import { sound } from '../utils/sound';
import { CheckCircle2, XCircle, Award, RotateCcw, X, Clock, HelpCircle, Sparkles } from 'lucide-react';

interface QuizModalProps {
  subject: Subject;
  currentLang: Language;
  currentUser: User | null;
  onClose: () => void;
  onTestComplete: (updatedUser: User | null, result: TestResult) => void;
  onOpenAuth: () => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  subject,
  currentLang,
  currentUser,
  onClose,
  onTestComplete,
  onOpenAuth,
}) => {
  const t = translations[currentLang];
  const questions = subject.questions; // 10 questions
  const totalQuestions = questions.length;

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [startTime] = useState<number>(Date.now());
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [finalResult, setFinalResult] = useState<TestResult | null>(null);

  // Timer
  useEffect(() => {
    if (isFinished) return;
    const interval = setInterval(() => {
      setElapsedSeconds(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [isFinished, startTime]);

  const currentQ = questions[currentIndex];
  const userChosenOption = selectedAnswers[currentIndex];

  const handleSelectOption = (optionIndex: number) => {
    if (isAnswerSubmitted) return;
    sound.playClick();
    setSelectedAnswers({ ...selectedAnswers, [currentIndex]: optionIndex });
    setIsAnswerSubmitted(true);

    if (optionIndex === currentQ.correctIndex) {
      sound.playCorrect();
    } else {
      sound.playWrong();
    }
  };

  const handleNext = () => {
    sound.playClick();
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsAnswerSubmitted(selectedAnswers[currentIndex + 1] !== undefined);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    sound.playComplete();
    setIsFinished(true);

    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        correctCount += 1;
      }
    });

    const percentage = Math.round((correctCount / totalQuestions) * 100);
    // Base 10 points per correct answer, bonus +20 if 100%
    let pointsEarned = correctCount * 10;
    if (percentage === 100) {
      pointsEarned += 20;
    }

    const result: TestResult = {
      id: `res_${Date.now()}`,
      userId: currentUser?.id || 'guest',
      subjectId: subject.id,
      score: correctCount,
      totalQuestions,
      percentage,
      pointsEarned,
      completedAt: new Date().toISOString(),
      timeSpentSeconds: elapsedSeconds,
    };

    setFinalResult(result);

    if (currentUser) {
      const { user: updatedUser } = AuthService.recordTestResult(result);
      onTestComplete(updatedUser, result);
    } else {
      onTestComplete(null, result);
    }
  };

  const restartQuiz = () => {
    sound.playClick();
    setSelectedAnswers({});
    setCurrentIndex(0);
    setIsAnswerSubmitted(false);
    setIsFinished(false);
    setFinalResult(null);
  };

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 bg-slate-50 dark:bg-slate-950/60">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold font-display text-slate-900 dark:text-white">
              {subject.name[currentLang]}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {currentIndex + 1} {t.testOf} {totalQuestions}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700">
              <Clock className="w-3.5 h-3.5 text-blue-500" />
              <span>{formatTime(elapsedSeconds)}</span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5">
          <div
            className="bg-blue-600 h-1.5 transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>

        {/* Main Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {!isFinished ? (
            <div className="space-y-6">
              {/* Question Text */}
              <div>
                <span className="text-xs font-semibold uppercase text-blue-600 dark:text-blue-400 tracking-wider">
                  {t.testQuestion} {currentIndex + 1}
                </span>
                <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-1 leading-snug">
                  {currentQ.question[currentLang]}
                </h4>
              </div>

              {/* 4 Choices */}
              <div className="space-y-2.5">
                {currentQ.options[currentLang].map((optText, optIdx) => {
                  const isSelected = userChosenOption === optIdx;
                  const isCorrect = optIdx === currentQ.correctIndex;

                  let btnStyle =
                    'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 hover:border-blue-400 text-slate-800 dark:text-slate-200';

                  if (isAnswerSubmitted) {
                    if (isCorrect) {
                      btnStyle =
                        'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 ring-2 ring-emerald-500/20';
                    } else if (isSelected && !isCorrect) {
                      btnStyle =
                        'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 ring-2 ring-rose-500/20';
                    } else {
                      btnStyle =
                        'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 opacity-60 text-slate-500';
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      disabled={isAnswerSubmitted}
                      onClick={() => handleSelectOption(optIdx)}
                      className={`w-full text-left p-4 rounded-xl border text-sm font-medium transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold flex items-center justify-center shrink-0">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span>{optText}</span>
                      </div>

                      {isAnswerSubmitted && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      )}
                      {isAnswerSubmitted && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation note when submitted */}
              {isAnswerSubmitted && (
                <div className="p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 text-xs text-blue-900 dark:text-blue-200 animate-in fade-in duration-200">
                  <div className="flex items-center gap-1.5 font-bold mb-1 text-blue-800 dark:text-blue-300">
                    <HelpCircle className="w-4 h-4" />
                    <span>{t.testExplanation}:</span>
                  </div>
                  <p className="leading-relaxed">{currentQ.explanation[currentLang]}</p>
                </div>
              )}
            </div>
          ) : (
            /* Results Screen */
            <div className="text-center py-4 space-y-6">
              <div className="relative inline-block">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-amber-100 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700/60 flex items-center justify-center text-amber-600 dark:text-amber-400 shadow-inner">
                  <Award className="w-10 h-10" />
                </div>
                <Sparkles className="w-6 h-6 text-amber-500 absolute -top-1 -right-2 animate-bounce" />
              </div>

              <div>
                <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                  {t.testScoreTitle}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  {finalResult?.percentage === 100
                    ? t.testFeedbackExcellent
                    : (finalResult?.percentage ?? 0) >= 70
                    ? t.testFeedbackGood
                    : t.testFeedbackTryAgain}
                </p>
              </div>

              {/* Score Breakdown Cards */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">
                    {t.testCorrectAnswers}
                  </span>
                  <span className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                    {finalResult?.score} / {totalQuestions}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">
                    {t.testAccuracy}
                  </span>
                  <span className="text-2xl font-bold font-display text-blue-600 dark:text-blue-400">
                    {finalResult?.percentage}%
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">
                    {t.testPointsAwarded}
                  </span>
                  <span className="text-2xl font-bold font-display text-emerald-600 dark:text-emerald-400">
                    +{finalResult?.pointsEarned} {t.pts}
                  </span>
                </div>
              </div>

              {!currentUser && (
                <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 text-left flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span>{t.testLoginPrompt}</span>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenAuth();
                    }}
                    className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg shrink-0 transition-colors"
                  >
                    {t.navLogin}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bottom Actions */}
        <div className="p-4 md:px-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 flex items-center justify-between gap-3">
          {!isFinished ? (
            <>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {t.testBackToSubjects}
              </button>

              <button
                type="button"
                disabled={!isAnswerSubmitted}
                onClick={handleNext}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 dark:disabled:bg-slate-800 disabled:text-slate-500 text-white text-xs font-semibold rounded-xl transition-all shadow-xs"
              >
                {currentIndex < totalQuestions - 1 ? t.testNext : t.testFinish}
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={restartQuiz}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{t.testRetake}</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold rounded-xl transition-colors"
              >
                {t.testBackToSubjects}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
