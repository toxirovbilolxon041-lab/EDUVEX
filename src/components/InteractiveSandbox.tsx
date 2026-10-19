import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { sound } from '../utils/sound';

interface InteractiveSandboxProps {
  currentLang: Language;
}

export const InteractiveSandbox: React.FC<InteractiveSandboxProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [activeTab, setActiveTab] = useState<'math' | 'it' | 'science'>('math');

  // Math Sandbox State (Fractions)
  const [totalSlices, setTotalSlices] = useState<number>(8);
  const [selectedSlices, setSelectedSlices] = useState<number[]>([0, 1, 2]);

  const toggleSlice = (index: number) => {
    sound.playClick();
    if (selectedSlices.includes(index)) {
      setSelectedSlices(selectedSlices.filter((i) => i !== index));
    } else {
      setSelectedSlices([...selectedSlices, index]);
    }
  };

  // IT Sandbox State (8-bit Binary Byte)
  const [bits, setBits] = useState<number[]>([0, 1, 0, 0, 0, 0, 0, 1]); // 65 = 'A'
  const bitWeights = [128, 64, 32, 16, 8, 4, 2, 1];

  const toggleBit = (idx: number) => {
    sound.playClick();
    const updated = [...bits];
    updated[idx] = updated[idx] === 1 ? 0 : 1;
    setBits(updated);
  };

  const totalDecimal = bits.reduce((acc, bit, idx) => acc + bit * bitWeights[idx], 0);
  const asciiChar = totalDecimal >= 32 && totalDecimal <= 126 ? String.fromCharCode(totalDecimal) : '•';

  // Science Sandbox State (Solar Planets)
  const [selectedPlanetIndex, setSelectedPlanetIndex] = useState<number>(2); // Earth
  const planets = [
    {
      name: { uz: 'Merkuriy', ru: 'Меркурий', en: 'Mercury' },
      dist: '58 mln km',
      temp: '430°C / -180°C',
      color: '#94a3b8',
      fact: {
        uz: 'Quyoshga eng yaqin planeta, atmosferasi deyarli yo‘q.',
        ru: 'Ближайшая к Солнцу планета с экстремальными перепадами температур.',
        en: 'The closest planet to the Sun, with virtually no atmosphere.',
      },
    },
    {
      name: { uz: 'Venera', ru: 'Венера', en: 'Venus' },
      dist: '108 mln km',
      temp: '+465°C',
      color: '#f59e0b',
      fact: {
        uz: 'Quyosh tizimidagi eng issiq planeta (issiqxona effekti tufayli).',
        ru: 'Самая раскалённая планета из-за мощного парникового эффекта.',
        en: 'The hottest planet in the solar system due to a thick greenhouse atmosphere.',
      },
    },
    {
      name: { uz: 'Yer', ru: 'Земля', en: 'Earth' },
      dist: '150 mln km',
      temp: '+15°C (o‘rtacha)',
      color: '#0284c7',
      fact: {
        uz: 'Hozircha ma’lum bo‘lgan hayot mavjud yagona jonli makon!',
        ru: 'Наш общий космический дом — единственная известная планета с жизнью.',
        en: 'Our home planet, the only known place in the universe harboring life.',
      },
    },
    {
      name: { uz: 'Mars', ru: 'Марс', en: 'Mars' },
      dist: '228 mln km',
      temp: '-63°C',
      color: '#ef4444',
      fact: {
        uz: 'Qizil planeta. Unda Quyosh tizimidagi eng baland vulqon — Olimp bor.',
        ru: 'Красная планета с гигантским потухшим вулканом Олимп.',
        en: 'The Red Planet, home to Olympus Mons, the tallest volcano in the solar system.',
      },
    },
    {
      name: { uz: 'Yupiter', ru: 'Юпитер', en: 'Jupiter' },
      dist: '778 mln km',
      temp: '-110°C',
      color: '#d97706',
      fact: {
        uz: 'Barcha planetalarni qo‘shgandagidan ham 2.5 barobar kattaroq gaz giganti.',
        ru: 'Газовый гигант, масса которого превышает массу всех остальных планет вместе взятых.',
        en: 'A massive gas giant more than twice as massive as all other planets combined.',
      },
    },
    {
      name: { uz: 'Saturn', ru: 'Сатурн', en: 'Saturn' },
      dist: '1.4 mlrd km',
      temp: '-140°C',
      color: '#eab308',
      fact: {
        uz: 'Muz va changdan iborat ajoyib halqalari bilan mashhur.',
        ru: 'Знаменит потрясающими кольцами из миллиардов ледяных частиц.',
        en: 'World-famous for its magnificent rings made of ice, rock, and dust.',
      },
    },
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            {t.sandboxHeading}
          </span>
          <h3 className="text-xl md:text-2xl font-bold font-display text-slate-900 dark:text-white mt-1">
            {activeTab === 'math' && t.sandboxMathTitle}
            {activeTab === 'it' && t.sandboxItTitle}
            {activeTab === 'science' && t.sandboxScienceTitle}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            {activeTab === 'math' && t.sandboxMathDesc}
            {activeTab === 'it' && t.sandboxItDesc}
            {activeTab === 'science' && t.sandboxScienceDesc}
          </p>
        </div>

        {/* Tab switch buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl self-start md:self-auto">
          <button
            type="button"
            onClick={() => {
              setActiveTab('math');
              sound.playClick();
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'math'
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {currentLang === 'uz' ? '🍕 Kasrlar' : currentLang === 'ru' ? '🍕 Дроби' : '🍕 Fractions'}
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab('it');
              sound.playClick();
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'it'
                ? 'bg-white dark:bg-slate-700 text-cyan-600 dark:text-cyan-300 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {currentLang === 'uz' ? '⚡ 0 va 1 Bitlar' : currentLang === 'ru' ? '⚡ Биты 0 и 1' : '⚡ Binary Bits'}
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab('science');
              sound.playClick();
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'science'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {currentLang === 'uz' ? '🪐 Planetalar' : currentLang === 'ru' ? '🪐 Планеты' : '🪐 Planets'}
          </button>
        </div>
      </div>

      {/* 1. MATH FRACTIONS PIZZA */}
      {activeTab === 'math' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Pizza visual */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full border-4 border-amber-400 dark:border-amber-600 bg-amber-100 dark:bg-amber-950/40 p-2 shadow-inner">
              <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                {Array.from({ length: totalSlices }).map((_, i) => {
                  const angle = 360 / totalSlices;
                  const startAngle = (i * angle * Math.PI) / 180;
                  const endAngle = (((i + 1) * angle) * Math.PI) / 180;
                  const x1 = 50 + 46 * Math.cos(startAngle);
                  const y1 = 50 + 46 * Math.sin(startAngle);
                  const x2 = 50 + 46 * Math.cos(endAngle);
                  const y2 = 50 + 46 * Math.sin(endAngle);
                  const largeArc = angle > 180 ? 1 : 0;
                  const d = `M 50 50 L ${x1} ${y1} A 46 46 0 ${largeArc} 1 ${x2} ${y2} Z`;
                  const isSelected = selectedSlices.includes(i);

                  return (
                    <path
                      key={i}
                      d={d}
                      onClick={() => toggleSlice(i)}
                      className={`cursor-pointer transition-all duration-200 stroke-amber-500/50 stroke-1 ${
                        isSelected
                          ? 'fill-amber-500 hover:fill-amber-600'
                          : 'fill-amber-200/50 dark:fill-amber-900/30 hover:fill-amber-300'
                      }`}
                    />
                  );
                })}
              </svg>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-xs font-semibold px-2 py-1 bg-white/90 dark:bg-slate-900/90 rounded-md shadow-xs text-slate-800 dark:text-slate-200">
                  {selectedSlices.length} / {totalSlices}
                </span>
              </div>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-4">
              {currentLang === 'uz'
                ? '💡 Bo‘lak ustiga bosib, uni tanlang yoki bekor qiling'
                : currentLang === 'ru'
                ? '💡 Нажимай на кусочки пиццы, чтобы выбрать их'
                : '💡 Click any slice to toggle it on or off'}
            </span>
          </div>

          {/* Controls & Math Readouts */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  {currentLang === 'uz' ? 'Jami bo‘laklar soni' : currentLang === 'ru' ? 'Всего кусочков' : 'Total Slices'}
                </span>
                <span className="font-mono font-bold text-blue-600 dark:text-blue-400">{totalSlices}</span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {[2, 4, 6, 8, 12].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => {
                      setTotalSlices(num);
                      setSelectedSlices([0]);
                      sound.playClick();
                    }}
                    className={`py-2 text-xs font-semibold rounded-lg border transition-all ${
                      totalSlices === num
                        ? 'border-blue-600 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold'
                        : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Calculations display */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-blue-50/60 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/50 rounded-xl text-center">
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 block">
                  {currentLang === 'uz' ? 'Oddiy kasr' : currentLang === 'ru' ? 'Дробь' : 'Fraction'}
                </span>
                <span className="text-2xl font-bold font-display text-blue-700 dark:text-blue-300">
                  {selectedSlices.length}/{totalSlices}
                </span>
              </div>
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 block">
                  {currentLang === 'uz' ? 'O‘nli kasr' : currentLang === 'ru' ? 'Десятичная' : 'Decimal'}
                </span>
                <span className="text-2xl font-mono font-bold text-slate-900 dark:text-white">
                  {(selectedSlices.length / totalSlices).toFixed(2)}
                </span>
              </div>
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 block">
                  {currentLang === 'uz' ? 'Foiz' : currentLang === 'ru' ? 'Процент' : 'Percentage'}
                </span>
                <span className="text-2xl font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  {Math.round((selectedSlices.length / totalSlices) * 100)}%
                </span>
              </div>
            </div>

            <div className="text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-200/80 dark:border-slate-800">
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {currentLang === 'uz' ? 'Xulosa: ' : currentLang === 'ru' ? 'Вывод: ' : 'Summary: '}
              </span>
              {currentLang === 'uz'
                ? `${totalSlices} bo‘lakdan ${selectedSlices.length} tasi olindi, bu umumiy pissaning ${Math.round(
                    (selectedSlices.length / totalSlices) * 100
                  )} foizini tashkil qiladi.`
                : currentLang === 'ru'
                ? `Из ${totalSlices} частей выбрано ${selectedSlices.length}, что составляет ${Math.round(
                    (selectedSlices.length / totalSlices) * 100
                  )}% от целого.`
                : `Selected ${selectedSlices.length} of ${totalSlices} slices, equaling ${Math.round(
                    (selectedSlices.length / totalSlices) * 100
                  )}% of the whole.`}
            </div>
          </div>
        </div>
      )}

      {/* 2. IT BINARY BITS */}
      {activeTab === 'it' && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2.5">
            {bits.map((bit, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => toggleBit(idx)}
                className={`p-3 rounded-xl border flex flex-col items-center justify-center transition-all ${
                  bit === 1
                    ? 'bg-cyan-500 text-white border-cyan-400 shadow-sm scale-102'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-slate-300'
                }`}
              >
                <span className="text-[10px] font-mono opacity-80 mb-1">
                  +{bitWeights[idx]}
                </span>
                <span className="text-2xl font-mono font-bold">
                  {bit}
                </span>
                <span className="text-[10px] uppercase font-semibold mt-1">
                  {bit === 1 ? 'ON' : 'OFF'}
                </span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 bg-cyan-50/50 dark:bg-cyan-950/20 border border-cyan-100 dark:border-cyan-900/50 rounded-xl items-center">
            <div>
              <span className="text-xs text-slate-500 dark:text-slate-400 block">
                {currentLang === 'uz' ? 'Ikkilik kod (Binary)' : currentLang === 'ru' ? 'Двоичный код' : 'Binary Byte'}
              </span>
              <span className="text-xl font-mono font-bold text-cyan-700 dark:text-cyan-300">
                {bits.join('')}
              </span>
            </div>

            <div>
              <span className="text-xs text-slate-500 dark:text-slate-400 block">
                {currentLang === 'uz' ? 'O‘nlik sanoq (Decimal)' : currentLang === 'ru' ? 'Десятичное число' : 'Decimal Number'}
              </span>
              <span className="text-3xl font-mono font-bold text-slate-900 dark:text-white">
                {totalDecimal}
              </span>
            </div>

            <div>
              <span className="text-xs text-slate-500 dark:text-slate-400 block">
                {currentLang === 'uz' ? 'ASCII belgisi' : currentLang === 'ru' ? 'Символ ASCII' : 'ASCII Character'}
              </span>
              <span className="text-3xl font-bold font-display text-blue-600 dark:text-blue-400">
                "{asciiChar}"
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
            {currentLang === 'uz'
              ? '💡 65 sonini hosil qilib ko‘ring (01000001) — bu "A" harfining kompyuter tilidagi ko‘rinishi!'
              : currentLang === 'ru'
              ? '💡 Попробуй набрать число 65 (01000001) — именно так компьютер видит букву «A»!'
              : '💡 Try creating the number 65 (01000001) — that is the letter "A" in computer memory!'}
          </p>
        </div>
      )}

      {/* 3. SCIENCE SOLAR EXPLORER */}
      {activeTab === 'science' && (
        <div className="space-y-6">
          {/* Planet pills */}
          <div className="flex flex-wrap items-center gap-2">
            {planets.map((planet, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setSelectedPlanetIndex(idx);
                  sound.playClick();
                }}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg border transition-all ${
                  selectedPlanetIndex === idx
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50'
                }`}
              >
                {planet.name[currentLang]}
              </button>
            ))}
          </div>

          {/* Selected planet card */}
          {(() => {
            const planet = planets[selectedPlanetIndex];
            return (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl items-center">
                <div className="md:col-span-4 flex flex-col items-center justify-center">
                  <div
                    className="w-24 h-24 rounded-full shadow-lg flex items-center justify-center text-white font-bold text-lg transition-transform hover:scale-105 duration-300"
                    style={{ backgroundColor: planet.color }}
                  >
                    {planet.name[currentLang].substring(0, 2)}
                  </div>
                  <span className="text-base font-bold text-slate-900 dark:text-white mt-3">
                    {planet.name[currentLang]}
                  </span>
                </div>

                <div className="md:col-span-8 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                        {currentLang === 'uz' ? 'Quyoshdan masofa' : currentLang === 'ru' ? 'Расстояние до Солнца' : 'Distance from Sun'}
                      </span>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white font-mono">
                        {planet.dist}
                      </span>
                    </div>

                    <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                        {currentLang === 'uz' ? 'Sirt harorati' : currentLang === 'ru' ? 'Температура поверхности' : 'Surface Temp'}
                      </span>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white font-mono">
                        {planet.temp}
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-indigo-50/70 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 rounded-lg">
                    <span className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 block mb-0.5">
                      {currentLang === 'uz' ? 'Qiziqarli fakt:' : currentLang === 'ru' ? 'Интересный факт:' : 'Fun Fact:'}
                    </span>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      {planet.fact[currentLang]}
                    </p>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
};
