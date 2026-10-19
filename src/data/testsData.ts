import { Question, SubjectId } from '../types';

export const questionsBySubject: Record<SubjectId, Question[]> = {
  // 1. MATEMATIKA (10 ta savol, 10–12 yosh)
  math: [
    {
      id: 1,
      question: {
        uz: 'Agar to‘g‘ri to‘rtburchakning bo‘yi 8 sm, eni 5 sm bo‘lsa, uning yuzasi (S) nechaga teng?',
        ru: 'Если длина прямоугольника 8 см, а ширина 5 см, чему равна его площадь (S)?',
        en: 'If a rectangle has a length of 8 cm and a width of 5 cm, what is its area (S)?',
      },
      options: {
        uz: ['13 sm²', '26 sm²', '40 sm²', '80 sm²'],
        ru: ['13 см²', '26 см²', '40 см²', '80 см²'],
        en: ['13 cm²', '26 cm²', '40 cm²', '80 cm²'],
      },
      correctIndex: 2,
      points: 10,
      explanation: {
        uz: 'To‘g‘ri to‘rtburchak yuzasi: S = a × b = 8 × 5 = 40 sm².',
        ru: 'Площадь прямоугольника вычисляется по формуле: S = a × b = 8 × 5 = 40 см².',
        en: 'The area of a rectangle is: S = a × b = 8 × 5 = 40 cm².',
      },
    },
    {
      id: 2,
      question: {
        uz: 'Amallarni bajaring: 15 + 5 × 4 - 10 = ?',
        ru: 'Выполните действия: 15 + 5 × 4 - 10 = ?',
        en: 'Solve the equation: 15 + 5 × 4 - 10 = ?',
      },
      options: {
        uz: ['25', '70', '10', '35'],
        ru: ['25', '70', '10', '35'],
        en: ['25', '70', '10', '35'],
      },
      correctIndex: 0,
      points: 10,
      explanation: {
        uz: 'Amallar tartibi bo‘yicha avval ko‘paytirish: 5 × 4 = 20. Keyin: 15 + 20 - 10 = 25.',
        ru: 'Сначала умножение: 5 × 4 = 20. Затем сложение и вычитание: 15 + 20 - 10 = 25.',
        en: 'Multiplication first: 5 × 4 = 20. Then addition and subtraction: 15 + 20 - 10 = 25.',
      },
    },
    {
      id: 3,
      question: {
        uz: '3/4 kasr qaysi o‘nli kasrga teng?',
        ru: 'Какая десятичная дробь равна 3/4?',
        en: 'Which decimal fraction is equal to 3/4?',
      },
      options: {
        uz: ['0.34', '0.75', '0.5', '0.25'],
        ru: ['0.34', '0.75', '0.5', '0.25'],
        en: ['0.34', '0.75', '0.5', '0.25'],
      },
      correctIndex: 1,
      points: 10,
      explanation: {
        uz: '3 ni 4 ga bo‘lsak: 3 ÷ 4 = 0.75 hosil bo‘ladi (yoki 75%).',
        ru: '3 разделить на 4 равно 0.75 (или 75%).',
        en: 'Dividing 3 by 4 gives 0.75 (or 75%).',
      },
    },
    {
      id: 4,
      question: {
        uz: 'Uchburchakning ichki burchaklari yig‘indisi har doim nechaga teng?',
        ru: 'Чему всегда равна сумма внутренних углов любого треугольника?',
        en: 'What is always the sum of the interior angles of any triangle?',
      },
      options: {
        uz: ['90°', '180°', '360°', '270°'],
        ru: ['90°', '180°', '360°', '270°'],
        en: ['90°', '180°', '360°', '270°'],
      },
      correctIndex: 1,
      points: 10,
      explanation: {
        uz: 'Ixtiyoriy uchburchakning ichki burchaklari yig‘indisi doimo 180 gradusga teng.',
        ru: 'Сумма внутренних углов любого треугольника на плоскости равна 180°.',
        en: 'The sum of angles in any planar triangle is always 180 degrees.',
      },
    },
    {
      id: 5,
      question: {
        uz: '200 sonining 25% qismi nechaga teng?',
        ru: 'Сколько составляет 25% от числа 200?',
        en: 'What is 25% of the number 200?',
      },
      options: {
        uz: ['25', '50', '75', '100'],
        ru: ['25', '50', '75', '100'],
        en: ['25', '50', '75', '100'],
      },
      correctIndex: 1,
      points: 10,
      explanation: {
        uz: '25% bu chorak (1/4) qism: 200 ÷ 4 = 50.',
        ru: '25% — это одна четверть числа: 200 ÷ 4 = 50.',
        en: '25% is one-quarter of a number: 200 ÷ 4 = 50.',
      },
    },
    {
      id: 6,
      question: {
        uz: 'Tenglamani yeching: 3x + 9 = 24. x ning qiymati nechaga teng?',
        ru: 'Решите уравнение: 3x + 9 = 24. Чему равен x?',
        en: 'Solve the equation: 3x + 9 = 24. What is the value of x?',
      },
      options: {
        uz: ['x = 3', 'x = 5', 'x = 7', 'x = 9'],
        ru: ['x = 3', 'x = 5', 'x = 7', 'x = 9'],
        en: ['x = 3', 'x = 5', 'x = 7', 'x = 9'],
      },
      correctIndex: 1,
      points: 10,
      explanation: {
        uz: '3x = 24 - 9 = 15; x = 15 ÷ 3 = 5.',
        ru: '3x = 24 - 9 = 15; затем x = 15 ÷ 3 = 5.',
        en: '3x = 24 - 9 = 15; hence x = 15 ÷ 3 = 5.',
      },
    },
    {
      id: 7,
      question: {
        uz: 'Qaysi son tub son (faqat 1 ga va o‘ziga bo‘linadigan son) hisoblanadi?',
        ru: 'Какое из этих чисел является простым (делится только на 1 и само себя)?',
        en: 'Which of these numbers is a prime number (divisible only by 1 and itself)?',
      },
      options: {
        uz: ['9', '15', '17', '21'],
        ru: ['9', '15', '17', '21'],
        en: ['9', '15', '17', '21'],
      },
      correctIndex: 2,
      points: 10,
      explanation: {
        uz: '17 soni tub son, chunki u faqat 1 ga va 17 ga bo‘linadi.',
        ru: '17 — простое число, так как делится без остатка только на 1 и на 17.',
        en: '17 is a prime number because it only divides by 1 and 17.',
      },
    },
    {
      id: 8,
      question: {
        uz: 'Kvadratning perimetri 36 sm bo‘lsa, uning bir tomoni necha sm?',
        ru: 'Если периметр квадрата 36 см, какова длина одной его стороны?',
        en: 'If the perimeter of a square is 36 cm, what is the length of one side?',
      },
      options: {
        uz: ['6 sm', '8 sm', '9 sm', '12 sm'],
        ru: ['6 см', '8 см', '9 см', '12 см'],
        en: ['6 cm', '8 cm', '9 cm', '12 cm'],
      },
      correctIndex: 2,
      points: 10,
      explanation: {
        uz: 'Kvadratning 4 tomoni teng: a = P ÷ 4 = 36 ÷ 4 = 9 sm.',
        ru: 'У квадрата 4 равные стороны: a = P ÷ 4 = 36 ÷ 4 = 9 см.',
        en: 'A square has 4 equal sides: a = P ÷ 4 = 36 ÷ 4 = 9 cm.',
      },
    },
    {
      id: 9,
      question: {
        uz: 'Quyidagi manfiy sonlardan qaysi biri eng kattasi?',
        ru: 'Какое из следующих отрицательных чисел наибольшее?',
        en: 'Which of the following negative numbers is the greatest?',
      },
      options: {
        uz: ['-1', '-5', '-10', '-100'],
        ru: ['-1', '-5', '-10', '-100'],
        en: ['-1', '-5', '-10', '-100'],
      },
      correctIndex: 0,
      points: 10,
      explanation: {
        uz: 'Manfiy sonlar ichida 0 ga eng yaqini eng katta hisoblanadi. -1 soni -100 dan ancha katta.',
        ru: 'Чем ближе отрицательное число к нулю на координатной прямой, тем оно больше: -1 > -5 > -100.',
        en: 'On the number line, numbers closer to 0 are larger: -1 is greater than -100.',
      },
    },
    {
      id: 10,
      question: {
        uz: 'Avtomobil 60 km/soat tezlik bilan 3 soatda qancha masofani bosib o‘tadi?',
        ru: 'Какое расстояние проедет автомобиль за 3 часа со скоростью 60 км/ч?',
        en: 'How far will a car travel in 3 hours at a speed of 60 km/h?',
      },
      options: {
        uz: ['120 km', '150 km', '180 km', '200 km'],
        ru: ['120 км', '150 км', '180 км', '200 км'],
        en: ['120 km', '150 km', '180 km', '200 km'],
      },
      correctIndex: 2,
      points: 10,
      explanation: {
        uz: 'Masofa formulasi: S = v × t = 60 × 3 = 180 km.',
        ru: 'Формула пути: S = v × t = 60 × 3 = 180 км.',
        en: 'Distance formula: S = v × t = 60 × 3 = 180 km.',
      },
    },
  ],

  // 2. INFORMATIKA (10 ta savol, 10–12 yosh)
  it: [
    {
      id: 1,
      question: {
        uz: 'Kompyuterning eng kichik axborot o‘lchov birligi nima?',
        ru: 'Какова наименьшая единица измерения информации в компьютере?',
        en: 'What is the smallest unit of digital information in a computer?',
      },
      options: {
        uz: ['Bayt', 'Bit', 'Kilobayt', 'Megabayt'],
        ru: ['Байт', 'Бит', 'Килобайт', 'Мегабайт'],
        en: ['Byte', 'Bit', 'Kilobyte', 'Megabyte'],
      },
      correctIndex: 1,
      points: 10,
      explanation: {
        uz: 'Eng kichik birlik — Bit (0 yoki 1). 1 Bayt esa 8 ta bitdan iborat.',
        ru: 'Наименьшая единица — бит (0 или 1). 1 байт состоит из 8 бит.',
        en: 'The smallest unit is a bit (0 or 1). 1 byte equals 8 bits.',
      },
    },
    {
      id: 2,
      question: {
        uz: 'Kompyuterning "miyasi" deb qaysi qurilma ataladi?',
        ru: 'Какое устройство называют «мозгом» компьютера?',
        en: 'Which hardware device is called the "brain" of the computer?',
      },
      options: {
        uz: ['Monitor', 'Qattiq disk (HDD)', 'Markaziy protsessor (CPU)', 'Klaviatura'],
        ru: ['Монитор', 'Жёсткий диск (HDD)', 'Процессор (CPU)', 'Клавиатура'],
        en: ['Monitor', 'Hard Drive (HDD)', 'Central Processor (CPU)', 'Keyboard'],
      },
      correctIndex: 2,
      points: 10,
      explanation: {
        uz: 'Markaziy protsessor (CPU) barcha hisoblash va buyruqlarni boshqaradi.',
        ru: 'Центральный процессор (CPU) выполняет все вычисления и руководит работой системы.',
        en: 'The CPU (Central Processing Unit) executes instructions and calculations.',
      },
    },
    {
      id: 3,
      question: {
        uz: 'Internetda xavfsiz parol qanday bo‘lishi kerak?',
        ru: 'Каким должен быть безопасный пароль в Интернете?',
        en: 'What makes a password secure on the internet?',
      },
      options: {
        uz: ['"123456" yoki o‘z ismi', 'Katta-kichik harflar, son va belgilardan iborat', 'Faqat tug‘ilgan sana', 'Oddiy birgina so‘z'],
        ru: ['«123456» или своё имя', 'Содержать большие и маленькие буквы, цифры и символы', 'Только дата рождения', 'Одно простое слово'],
        en: ['"123456" or your name', 'Mix of uppercase, lowercase letters, numbers & symbols', 'Just your birthdate', 'A single easy word'],
      },
      correctIndex: 1,
      points: 10,
      explanation: {
        uz: 'Kuchli parol har xil harflar, sonlar va belgilarni o‘z ichiga olishi va boshqalarga aytilmasligi lozim.',
        ru: 'Надёжный пароль сложен для подбора и содержит разные типы знаков.',
        en: 'A strong password mixes letters, numbers, and symbols and is kept secret.',
      },
    },
    {
      id: 4,
      question: {
        uz: 'Algoritm nima?',
        ru: 'Что такое алгоритм?',
        en: 'What is an algorithm?',
      },
      options: {
        uz: ['Kompyuter ekrani', 'Maqsadga erishish uchun aniq ketma-ketlikdagi ko‘rsatmalar', 'O‘yin turi', 'Internet kabeli'],
        ru: ['Экран компьютера', 'Чёткая последовательность шагов для решения задачи', 'Тип компьютерной игры', 'Сетевой кабель'],
        en: ['A computer monitor', 'A step-by-step sequence of instructions to solve a task', 'A genre of gaming', 'A network cable'],
      },
      correctIndex: 1,
      points: 10,
      explanation: {
        uz: 'Algoritm — bu muammoni hal qilish yoki natijaga erishish uchun qadamma-qadam ko‘rsatmalar to‘plamidir.',
        ru: 'Алгоритм — это пошаговый порядок действий для достижения поставленной цели.',
        en: 'An algorithm is an unambiguous, step-by-step set of instructions.',
      },
    },
    {
      id: 5,
      question: {
        uz: 'Scratch dasturida kod qanday yoziladi?',
        ru: 'Как пишется код в визуальной среде Scratch?',
        en: 'How is code constructed in Scratch?',
      },
      options: {
        uz: ['Faqat inglizcha murakkab matn terish orqali', 'Rangli buyruq bloklarini bir-biriga ulash orqali', 'Faqat rasm chizish orqali', 'Klaviatura ishlatilmaydi'],
        ru: ['Сложным текстовым кодом', 'Соединением цветных блоков-команд', 'Только рисованием', 'Клавиатура не поддерживается'],
        en: ['Typing dense text commands', 'Snapping together colorful visual command blocks', 'Only by painting', 'Without using logic'],
      },
      correctIndex: 1,
      points: 10,
      explanation: {
        uz: 'Scratch blokli vizual dasturlash muhiti bo‘lib, bloklarni lego kabi ulash orqali o‘yin va animatsiyalar yaratiladi.',
        ru: 'Scratch использует визуальные блоки, которые собираются как детали конструктора.',
        en: 'Scratch is a block-based visual environment where blocks connect like puzzle pieces.',
      },
    },
    {
      id: 6,
      question: {
        uz: '1 Bayt nechta bitga teng?',
        ru: 'Сколько бит содержится в 1 байте?',
        en: 'How many bits are in 1 Byte?',
      },
      options: {
        uz: ['4 bit', '8 bit', '16 bit', '100 bit'],
        ru: ['4 бита', '8 бит', '16 бит', '100 бит'],
        en: ['4 bits', '8 bits', '16 bits', '100 bits'],
      },
      correctIndex: 1,
      points: 10,
      explanation: {
        uz: '1 Bayt = 8 bit. Masalan bitta lotin harfi xotirada odatda 1 bayt joy oladi.',
        ru: '1 байт ровно равен 8 битам. Один символ текста обычно занимает 1 байт.',
        en: '1 Byte equals exactly 8 bits.',
      },
    },
    {
      id: 7,
      question: {
        uz: 'Matn nusxasini olish (Copy) uchun qaysi klaviatura tugmalari kombinatsiyasi ishlatiladi?',
        ru: 'Какая комбинация клавиш используется для копирования (Copy)?',
        en: 'Which keyboard shortcut is used to Copy text or files?',
      },
      options: {
        uz: ['Ctrl + V', 'Ctrl + C', 'Ctrl + Z', 'Ctrl + P'],
        ru: ['Ctrl + V', 'Ctrl + C', 'Ctrl + Z', 'Ctrl + P'],
        en: ['Ctrl + V', 'Ctrl + C', 'Ctrl + Z', 'Ctrl + P'],
      },
      correctIndex: 1,
      points: 10,
      explanation: {
        uz: 'Ctrl + C nusxa oladi, Ctrl + V esa uni kerakli joyga qo‘yadi (Paste).',
        ru: 'Ctrl + C копирует объект в буфер, а Ctrl + V вставляет его.',
        en: 'Ctrl + C copies to clipboard, while Ctrl + V pastes it.',
      },
    },
    {
      id: 8,
      question: {
        uz: 'Veb-saytlarni ko‘rish uchun ishlatiladigan dastur qanday ataladi?',
        ru: 'Как называется программа для просмотра веб-страниц в Интернете?',
        en: 'What is software used to browse web pages called?',
      },
      options: {
        uz: ['Brauzer (Browser)', 'Kalkulyator', 'Antivirus', 'Arxivator'],
        ru: ['Браузер (Browser)', 'Калькулятор', 'Антивирус', 'Архиватор'],
        en: ['Web Browser', 'Calculator', 'Antivirus', 'File Archiver'],
      },
      correctIndex: 0,
      points: 10,
      explanation: {
        uz: 'Google Chrome, Firefox, Safari kabi dasturlar veb-brauzer hisoblanadi.',
        ru: 'Браузеры (Chrome, Edge, Firefox) позволяют просматривать страницы в Сети.',
        en: 'Web browsers allow users to view and interact with websites on the Internet.',
      },
    },
    {
      id: 9,
      question: {
        uz: 'Kompyuter o‘chirilganda qaysi xotiradagi ma’lumotlar butunlay o‘chib ketadi?',
        ru: 'В какой памяти данные стираются при выключении компьютера?',
        en: 'Which memory loses its data when the computer is turned off?',
      },
      options: {
        uz: ['Qattiq disk (SSD / HDD)', 'Tezkor xotira (RAM / OZU)', 'Fleshka (USB)', 'CD disk'],
        ru: ['Жёсткий диск (SSD / HDD)', 'Оперативная память (RAM / ОЗУ)', 'Флешка (USB)', 'CD-диск'],
        en: ['Hard Drive (SSD / HDD)', 'Random Access Memory (RAM)', 'USB Flash Drive', 'Optical Disc'],
      },
      correctIndex: 1,
      points: 10,
      explanation: {
        uz: 'RAM — vaqtinchalik tezkor xotira. Tok uzilganda undagi ochiq dasturlar ma’lumoti tozalanadi.',
        ru: 'Оперативная память (ОЗУ / RAM) энергозависима и очищается при выключении питания.',
        en: 'RAM is volatile memory; its contents disappear when the device powers down.',
      },
    },
    {
      id: 10,
      question: {
        uz: 'Internetda begona odam shaxsiy telefon raqamingiz yoki manzilingizni so‘rasa, nima qilish kerak?',
        ru: 'Что делать, если незнакомец в Интернете просит твой телефон или домашний адрес?',
        en: 'What should you do if a stranger on the internet asks for your home address or phone number?',
      },
      options: {
        uz: ['Darhol aytish', 'Hech qachon bermaslik va ota-onaga xabar berish', 'Boshqa do‘stning manzilini berish', 'O‘ylab ko‘rish'],
        ru: ['Сразу назвать', 'Никогда не давать и рассказать родителям', 'Дать адрес друга', 'Подумать потом'],
        en: ['Tell them immediately', 'Never share personal info and notify your parents', 'Give a friend’s address', 'Post it on public chat'],
      },
      correctIndex: 1,
      points: 10,
      explanation: {
        uz: 'Kiberxavfsizlik qoidasi: Shaxsiy manzil, maktab va telefon raqamini internetda notanishlarga aslo berilmaydi!',
        ru: 'Золотое правило кибербезопасности: никогда не делись личными данными с незнакомцами.',
        en: 'Cyber safety rule: Never share your address, phone, or school with strangers online.',
      },
    },
  ],

  // 3. INGLIZ TILI (10 ta savol, 10–12 yosh)
  english: [
    {
      id: 1,
      question: {
        uz: 'Bo‘sh joyni to‘ldiring: "She _____ reading an interesting book right now."',
        ru: 'Вставьте правильное слово: "She _____ reading an interesting book right now."',
        en: 'Fill in the blank: "She _____ reading an interesting book right now."',
      },
      options: {
        uz: ['are', 'is', 'am', 'be'],
        ru: ['are', 'is', 'am', 'be'],
        en: ['are', 'is', 'am', 'be'],
      },
      correctIndex: 1,
      points: 10,
      explanation: {
        uz: 'Uchinchi shaxs birlikda (he/she/it) Present Continuous zamonida "is" qo‘yiladi.',
        ru: 'С местоимениями he/she/it в настоящем длительном времени используется форма "is".',
        en: 'For third person singular (she), Present Continuous uses "is" + verb-ing.',
      },
    },
    {
      id: 2,
      question: {
        uz: '"Child" (bola) so‘zining ko‘plik shakli qaysi?',
        ru: 'Какая форма множественного числа у слова "child" (ребёнок)?',
        en: 'What is the plural form of the word "child"?',
      },
      options: {
        uz: ['Childs', 'Children', 'Childrens', 'Childes'],
        ru: ['Childs', 'Children', 'Childrens', 'Childes'],
        en: ['Childs', 'Children', 'Childrens', 'Childes'],
      },
      correctIndex: 1,
      points: 10,
      explanation: {
        uz: '"Child" noto‘g‘ri ot bo‘lib, ko‘plikda "children" bo‘ladi.',
        ru: 'Слово "child" является исключением и образует форму множественного числа "children".',
        en: '"Child" is an irregular noun; its plural form is "children".',
      },
    },
    {
      id: 3,
      question: {
        uz: '"Fast" (tez) sifatining qiyosiy darajasi qaysi?',
        ru: 'Какая сравнительная степень у прилагательного "fast" (быстрый)?',
        en: 'What is the comparative form of the adjective "fast"?',
      },
      options: {
        uz: ['More fast', 'Faster', 'Fastest', 'Fastly'],
        ru: ['More fast', 'Faster', 'Fastest', 'Fastly'],
        en: ['More fast', 'Faster', 'Fastest', 'Fastly'],
      },
      correctIndex: 1,
      points: 10,
      explanation: {
        uz: 'Qisqa bir bo‘g‘inli sifatlarga "-er" qo‘shimchasi qo‘shiladi: fast -> faster (tezroq).',
        ru: 'К коротким односложным прилагательным добавляется суффикс -er: fast -> faster.',
        en: 'Short one-syllable adjectives take the "-er" suffix: fast -> faster.',
      },
    },
    {
      id: 4,
      question: {
        uz: 'Qaysi jumla to‘g‘ri yozilgan?',
        ru: 'Какое предложение составлено грамматически верно?',
        en: 'Which sentence is grammatically correct?',
      },
      options: {
        uz: ['They plays football on Sunday.', 'They play football on Sunday.', 'They playing football on Sunday.', 'They is play football.'],
        ru: ['They plays football on Sunday.', 'They play football on Sunday.', 'They playing football on Sunday.', 'They is play football.'],
        en: ['They plays football on Sunday.', 'They play football on Sunday.', 'They playing football on Sunday.', 'They is play football.'],
      },
      correctIndex: 1,
      points: 10,
      explanation: {
        uz: 'Present Simple zamonida "They" olmoshidan keyin fe’lga "-s" qo‘shilmaydi: "They play".',
        ru: 'Во множественном числе (They) к глаголу в настоящем простом времени окончание -s не добавляется.',
        en: 'In Present Simple with "They", verbs do not take an "-s" suffix: "They play".',
      },
    },
    {
      id: 5,
      question: {
        uz: '"Go" (bormoq) fe’lining o‘tgan zamon (Past Simple) shakli qanday?',
        ru: 'Какая форма прошедшего времени (Past Simple) у глагола "go" (идти)?',
        en: 'What is the Past Simple form of the irregular verb "go"?',
      },
      options: {
        uz: ['Goed', 'Gone', 'Went', 'Going'],
        ru: ['Goed', 'Gone', 'Went', 'Going'],
        en: ['Goed', 'Gone', 'Went', 'Going'],
      },
      correctIndex: 2,
      points: 10,
      explanation: {
        uz: '"Go" noto‘g‘ri fe’l, uning ikkinchi shakli "went": I went to school yesterday.',
        ru: '"Go" — неправильный глагол: go -> went -> gone.',
        en: '"Go" is an irregular verb: go -> went -> gone.',
      },
    },
    {
      id: 6,
      question: {
        uz: 'Bo‘sh o‘rinni to‘ldiring: "We have English lesson _____ Monday."',
        ru: 'Вставьте подходящий предлог: "We have English lesson _____ Monday."',
        en: 'Choose the correct preposition: "We have English lesson _____ Monday."',
      },
      options: {
        uz: ['at', 'in', 'on', 'by'],
        ru: ['at', 'in', 'on', 'by'],
        en: ['at', 'in', 'on', 'by'],
      },
      correctIndex: 2,
      points: 10,
      explanation: {
        uz: 'Hafta kunlari bilan har doim "on" predlogi ishlatiladi (on Monday, on Friday).',
        ru: 'С днями недели в английском языке всегда употребляется предлог "on".',
        en: 'Days of the week always take the preposition "on".',
      },
    },
    {
      id: 7,
      question: {
        uz: '"Big" so‘zining antonimi (qarama-qarshi ma’noli so‘zi) qaysi?',
        ru: 'Какое слово является антонимом к слову "big" (большой)?',
        en: 'Which word is the antonym of "big"?',
      },
      options: {
        uz: ['Huge', 'Small', 'Tall', 'Wide'],
        ru: ['Huge', 'Small', 'Tall', 'Wide'],
        en: ['Huge', 'Small', 'Tall', 'Wide'],
      },
      correctIndex: 1,
      points: 10,
      explanation: {
        uz: 'Big = katta, Small = kichik.',
        ru: 'Big означает «большой», а противоположное по значению слово — Small («маленький»).',
        en: 'Big means large; its direct opposite is Small.',
      },
    },
    {
      id: 8,
      question: {
        uz: '"I am thirsty" jumlasining ma’nosi nima?',
        ru: 'Что означает фраза "I am thirsty"?',
        en: 'What does the expression "I am thirsty" mean?',
      },
      options: {
        uz: ['Qornim ochdi', 'Chanqadim (suv ichgim keldi)', 'Charchadim', 'Sovuq qotdim'],
        ru: ['Я голоден', 'Я хочу пить', 'Я устал', 'Мне холодно'],
        en: ['I want to eat', 'I want to drink water', 'I am sleepy', 'I feel cold'],
      },
      correctIndex: 1,
      points: 10,
      explanation: {
        uz: '"Thirsty" so‘zi chanqagan degan ma’noni bildiradi (Hungry esa qorni och).',
        ru: 'Thirsty означает жажду («хочу пить»), а hungry — голод.',
        en: '"Thirsty" refers to the need for a drink; "hungry" means wanting food.',
      },
    },
    {
      id: 9,
      question: {
        uz: 'Qaysi so‘z uy hayvoni EMAS?',
        ru: 'Какое из этих животных НЕ является домашним?',
        en: 'Which of these animals is NOT a domestic pet/animal?',
      },
      options: {
        uz: ['Dog', 'Cat', 'Tiger', 'Cow'],
        ru: ['Dog', 'Cat', 'Tiger', 'Cow'],
        en: ['Dog', 'Cat', 'Tiger', 'Cow'],
      },
      correctIndex: 2,
      points: 10,
      explanation: {
        uz: 'Tiger (yo‘lbars) yovvoyi hayvon hisoblanadi.',
        ru: 'Tiger (тигр) — дикий хищник, а не домашний питомец.',
        en: 'A tiger is a wild carnivore, not a domestic pet.',
      },
    },
    {
      id: 10,
      question: {
        uz: '"How _____ books are there in your backpack?" — Bo‘sh joyga nima qo‘yiladi?',
        ru: 'Какое слово пропущено: "How _____ books are there in your backpack?"',
        en: 'Fill in: "How _____ books are there in your backpack?"',
      },
      options: {
        uz: ['much', 'many', 'old', 'long'],
        ru: ['much', 'many', 'old', 'long'],
        en: ['much', 'many', 'old', 'long'],
      },
      correctIndex: 1,
      points: 10,
      explanation: {
        uz: 'Sanalsa bo‘ladigan ko‘plikdagi otlar (books) bilan "How many" ishlatiladi.',
        ru: 'С исчисляемыми существительными во множественном числе (books) используется "How many".',
        en: 'Countable plural nouns (books) require "How many".',
      },
    },
  ],

  // 4. TARIX (10 ta savol, 10–12 yosh)
  history: [
    {
      id: 1,
      question: {
        uz: 'Qadimgi davrlarda Sharq va G‘arbni bog‘lagan mashhur karvon yo‘li qanday atalgan?',
        ru: 'Как назывался знаменитый торговый караванный путь, связывавший Восток и Запад?',
        en: 'What was the famous trade route connecting the East and West in ancient times?',
      },
      options: {
        uz: ['Oltin yo‘l', 'Buyuk Ipak yo‘li', 'Temir yo‘l', 'Dengiz yo‘li'],
        ru: ['Золотой путь', 'Великий шёлковый путь', 'Железный путь', 'Морской путь'],
        en: ['Amber Way', 'Great Silk Road', 'Iron Way', 'Spice Channel'],
      },
      correctIndex: 1,
      points: 10,
      explanation: {
        uz: 'Buyuk Ipak yo‘li Xitoydan O‘rta Osiyo orqali Yevropagacha cho‘zilgan qadimiy savdo yo‘lidir.',
        ru: 'Великий шёлковый путь соединял Китай, Центральную Азию и страны Средиземноморья.',
        en: 'The Great Silk Road connected Asia with the Mediterranean for centuries.',
      },
    },
    {
      id: 2,
      question: {
        uz: 'Algebra faniga asos solgan buyuk alloma kim?',
        ru: 'Какой великий учёный Востока считается основателем алгебры?',
        en: 'Which great scholar is recognized as the father of algebra?',
      },
      options: {
        uz: ['Al-Xorazmiy', 'Ibn Sino', 'Mirzo Ulug‘bek', 'Arximed'],
        ru: ['Аль-Хорезми', 'Ибн Сина (Авиценна)', 'Мирзо Улугбек', 'Архимед'],
        en: ['Al-Khwarizmi', 'Ibn Sina (Avicenna)', 'Mirzo Ulugh Beg', 'Archimedes'],
      },
      correctIndex: 0,
      points: 10,
      explanation: {
        uz: 'Muhammad al-Xorazmiy "Al-Jabr" asari orqali algebra faniga va "algoritm" tushunchasiga asos solgan.',
        ru: 'Мухаммад аль-Хорезми написал трактат «Аль-Джебр», давший название алгебре и понятию алгоритма.',
        en: 'Al-Khwarizmi pioneered algebra and the mathematical concept of algorithms.',
      },
    },
    {
      id: 3,
      question: {
        uz: 'Dunyodagi eng qadimgi mo‘jizalardan biri bo‘lgan Gizadagi Buyuk Piramidalar qaysi mamlakatda joylashgan?',
        ru: 'В какой стране находятся знаменитые пирамиды Гизы — одно из чудес света?',
        en: 'In which country are the Great Pyramids of Giza located?',
      },
      options: {
        uz: ['Gretsiya', 'Misr', 'Iroq', 'Hindiston'],
        ru: ['Греция', 'Египет', 'Ирак', 'Индия'],
        en: ['Greece', 'Egypt', 'Iraq', 'India'],
      },
      correctIndex: 1,
      points: 10,
      explanation: {
        uz: 'Piramidalar qadimgi Misr fir’avnlari tomonidan Nil daryosi bo‘yida bunyod etilgan.',
        ru: 'Египетские пирамиды были возведены фараонами вдоль реки Нил тысячи лет назад.',
        en: 'The Pyramids of Giza were built along the Nile in ancient Egypt.',
      },
    },
    {
      id: 4,
      question: {
        uz: 'Samarqandda ulkan rasadxona (observatoriya) qurdirib, yulduzlar jadvalini tuzgan alloma hukmdor kim?',
        ru: 'Какой правитель и астроном построил грандиозную обсерваторию в Самарканде?',
        en: 'Which scholar-ruler built a legendary astronomical observatory in Samarkand?',
      },
      options: {
        uz: ['Alisher Navoiy', 'Mirzo Ulug‘bek', 'Zahiriddin Muhammad Bobur', 'Amir Temur'],
        ru: ['Алишер Навои', 'Мирзо Улугбек', 'Захириддин Бабур', 'Амир Темур'],
        en: ['Alisher Navoi', 'Mirzo Ulugh Beg', 'Babur', 'Amir Timur'],
      },
      correctIndex: 1,
      points: 10,
      explanation: {
        uz: 'Mirzo Ulug‘bek 1018 ta yulduzning aniq koordinatasini o‘z ichiga olgan "Ziji Jadidi Ko‘ragoniy" jadvalini yaratgan.',
        ru: 'Мирзо Улугбек составил точный каталог 1018 звёзд в своей обсерватории.',
        en: 'Mirzo Ulugh Beg cataloged 1,018 stars with remarkable precision.',
      },
    },
    {
      id: 5,
      question: {
        uz: 'Kitob bosib chiqarish (tipografiya) dastgohini Yevropada birinchi bo‘lib kim ixtiro qilgan?',
        ru: 'Кто изобрел европейский печатный станок с подвижными литерами в XV веке?',
        en: 'Who invented the movable-type printing press in Europe during the 15th century?',
      },
      options: {
        uz: ['Iogann Gutenberg', 'Isaak Nyuton', 'Leonardo da Vinchi', 'Galiley'],
        ru: ['Иоганн Гутенберг', 'Исаак Ньютон', 'Леонардо да Винчи', 'Галилей'],
        en: ['Johannes Gutenberg', 'Isaac Newton', 'Leonardo da Vinci', 'Galileo'],
      },
      correctIndex: 0,
      points: 10,
      explanation: {
        uz: 'Gutenberg ixtiro qilgan matbaa mashinasi kitoblarning butun dunyoga tez tarqalishiga yo‘l ochdi.',
        ru: 'Печатный станок Иоганна Гутенберга положил начало массовому книгопечатанию.',
        en: 'Johannes Gutenberg revolutionized bookmaking with the movable-type printing press.',
      },
    },
    {
      id: 6,
      question: {
        uz: 'Birinchi Olimpiya o‘yinlari qayerda vujudga kelgan?',
        ru: 'Где зародились первые Олимпийские игры в древности?',
        en: 'Where did the first ancient Olympic Games originate?',
      },
      options: {
        uz: ['Qadimgi Rimda', 'Qadimgi Yunonistonda (Gretsiya)', 'Qadimgi Xitoyda', 'Misrda'],
        ru: ['В Древнем Риме', 'В Древней Греции', 'В Древнем Китае', 'В Египте'],
        en: ['Ancient Rome', 'Ancient Greece', 'Ancient China', 'Ancient Egypt'],
      },
      correctIndex: 1,
      points: 10,
      explanation: {
        uz: 'Ilk Olimpiya o‘yinlari miloddan avvalgi 776-yilda Qadimgi Gretsiyaning Olimpiya shahrida o‘tkazilgan.',
        ru: 'Первые Олимпийские игры состоялись в 776 году до н.э. в древней Олимпии.',
        en: 'The original Olympic Games started in Olympia, Ancient Greece, in 776 BC.',
      },
    },
    {
      id: 7,
      question: {
        uz: '"Tib qonunlari" kitobining muallifi, butun dunyoga "Avitsenna" nomi bilan mashhur bo‘lgan tabib kim?',
        ru: 'Кто автор знаменитого «Канона врачебной науки», известный в Европе как Авиценна?',
        en: 'Who wrote "The Canon of Medicine", famously recognized in Europe as Avicenna?',
      },
      options: {
        uz: ['Al-Farg‘oniy', 'Abu Ali ibn Sino', 'Beruniy', 'Farobiy'],
        ru: ['Аль-Фергани', 'Абу Али ибн Сина', 'Беруни', 'Фараби'],
        en: ['Al-Farghani', 'Abu Ali Ibn Sina', 'Al-Biruni', 'Al-Farabi'],
      },
      correctIndex: 1,
      points: 10,
      explanation: {
        uz: 'Ibn Sino yaratgan tibbiy qo‘llanma bir necha asrlar davomida dunyo universitetlarida asosiy darslik bo‘lgan.',
        ru: 'Ибн Сина написал «Канон врачебной науки», служивший главным учебником медицины веками.',
        en: 'Ibn Sina authored "The Canon of Medicine", standard reading for centuries worldwide.',
      },
    },
    {
      id: 8,
      question: {
        uz: 'Dengizchilarga qadimdan ochiq dengizda yo‘nalishni aniqlashga yordam bergan asbob qaysi?',
        ru: 'Какой прибор с магнитной стрелкой помогал мореплавателям находить стороны света?',
        en: 'Which magnetic navigational instrument helped sailors navigate the open seas?',
      },
      options: {
        uz: ['Termometr', 'Kompas', 'Barometr', 'Teleskop'],
        ru: ['Термометр', 'Компас', 'Барометр', 'Телескоп'],
        en: ['Thermometer', 'Compass', 'Barometer', 'Telescope'],
      },
      correctIndex: 1,
      points: 10,
      explanation: {
        uz: 'Kompasning magnit mili har doim Yerning shimoliy magnit qutbini ko‘rsatadi.',
        ru: 'Стрелка компаса реагирует на магнитное поле Земли и указывает на север.',
        en: 'A magnetic compass aligns with Earth’s magnetic field to point north.',
      },
    },
    {
      id: 9,
      question: {
        uz: 'Qadimgi Samarqand shahrining eng mashhur tarixiy maydoni qanday ataladi?',
        ru: 'Как называется всемирно известная историческая площадь Самарканда с тремя медресе?',
        en: 'What is the world-renowned historic public square of Samarkand featuring three madrasahs?',
      },
      options: {
        uz: ['Qizil maydon', 'Registon maydoni', 'Eski shahar', 'Ichan qal’a'],
        ru: ['Красная площадь', 'Площадь Регистан', 'Старый город', 'Ичан-Кала'],
        en: ['Red Square', 'Registan Square', 'Old Citadel', 'Ichan Kala'],
      },
      correctIndex: 1,
      points: 10,
      explanation: {
        uz: 'Registon maydoni Ulug‘bek, Sherdor va Tillakori madrasalaridan iborat ajoyib me’moriy ansambldir.',
        ru: 'Регистан — жемчужина Самарканда, окружённая тремя величественными медресе.',
        en: 'Registan is an architectural ensemble of three majestic madrasahs in Samarkand.',
      },
    },
    {
      id: 10,
      question: {
        uz: 'Yer shari bo‘ylab birinchi dunyo bo‘ylab sayohatni kim boshqargan?',
        ru: 'Кто возглавил первое в истории кругосветное морское плавание?',
        en: 'Who led the first expedition to circumnavigate the globe?',
      },
      options: {
        uz: ['Xristofor Kolumb', 'Fernan Magellan', 'Vasko da Gama', 'Jeyms Kuk'],
        ru: ['Христофор Колумб', 'Фернан Магеллан', 'Васко да Гама', 'Джеймс Кук'],
        en: ['Christopher Columbus', 'Ferdinand Magellan', 'Vasco da Gama', 'James Cook'],
      },
      correctIndex: 1,
      points: 10,
      explanation: {
        uz: '1519-1522 yillarda Magellan ekspeditsiyasi Yerning dumaloqligini amalda isbotladi.',
        ru: 'Экспедиция Фернана Магеллана (1519–1522) практически доказала шарообразность Земли.',
        en: 'Magellan’s expedition (1519–1522) proved in practice that the Earth is a sphere.',
      },
    },
  ],

  // 5. TABIIY FANLAR (10 ta savol, 10–12 yosh)
  science: [
    {
      id: 1,
      question: {
        uz: 'O‘simliklar quyosh nuri, suv va karbonat angidrid yordamida oziq modda ishlab chiqarish jarayoni nima deyiladi?',
        ru: 'Как называется процесс, при котором растения под действием света вырабатывают кислород и органические вещества?',
        en: 'What is the biological process by which plants convert sunlight, water, and carbon dioxide into food?',
      },
      options: {
        uz: ['Nafas olish', 'Fotosintez', 'Bug‘lanish', 'Eritish'],
        ru: ['Дыхание', 'Фотосинтез', 'Испарение', 'Растворение'],
        en: ['Respiration', 'Photosynthesis', 'Evaporation', 'Digestion'],
      },
      correctIndex: 1,
      points: 10,
      explanation: {
        uz: 'Fotosintez xlorofill donachalari yordamida kechadi va Yer yuzini kislorod bilan ta’minlaydi.',
        ru: 'Фотосинтез происходит в хлоропластах листьев и обогащает атмосферу кислородом.',
        en: 'Photosynthesis happens in plant chloroplasts, releasing life-sustaining oxygen.',
      },
    },
    {
      id: 2,
      question: {
        uz: 'Quyosh tizimidagi eng katta planeta qaysi?',
        ru: 'Какая планета в Солнечной системе является самой большой?',
        en: 'Which planet in our Solar System is the largest?',
      },
      options: {
        uz: ['Mars', 'Yupiter', 'Saturn', 'Yer'],
        ru: ['Марс', 'Юпитер', 'Сатурн', 'Земля'],
        en: ['Mars', 'Jupiter', 'Saturn', 'Earth'],
      },
      correctIndex: 1,
      points: 10,
      explanation: {
        uz: 'Yupiter — gaz giganti bo‘lib, uning ichiga 1300 tadan ortiq Yer sig‘ishi mumkin.',
        ru: 'Юпитер — планета-гигант, в объёме которой поместилось бы более 1300 таких планет, как Земля.',
        en: 'Jupiter is a massive gas giant that could easily hold over 1,300 Earths inside.',
      },
    },
    {
      id: 3,
      question: {
        uz: 'Inson tanasida qonni butun vujud bo‘ylab haydab beruvchi asosiy mushak a’zosi qaysi?',
        ru: 'Какой мышечный орган перекачивает кровь по всему организму человека?',
        en: 'Which muscular organ pumps blood throughout the human body?',
      },
      options: {
        uz: ['Jigar', 'O‘pka', 'Yurak', 'Oshqozon'],
        ru: ['Печень', 'Лёгкие', 'Сердце', 'Желудок'],
        en: ['Liver', 'Lungs', 'Heart', 'Stomach'],
      },
      correctIndex: 2,
      points: 10,
      explanation: {
        uz: 'Yurak daqiqasiga o‘rtacha 70-80 marta urib, to‘xtovsiz qon aylanishini ta’minlaydi.',
        ru: 'Сердце работает как неутомимый природный насос, сокращаясь десятки тысяч раз в день.',
        en: 'The human heart acts as a tireless pump, beating around 100,000 times a day.',
      },
    },
    {
      id: 4,
      question: {
        uz: 'Suv necha gradus Selsiy haroratda qaynaydi (normal atmosfera bosimida)?',
        ru: 'При какой температуре по Цельсию закипает чистая вода при нормальном давлении?',
        en: 'At what temperature in Celsius does pure water boil at sea level?',
      },
      options: {
        uz: ['50°C', '80°C', '100°C', '120°C'],
        ru: ['50°C', '80°C', '100°C', '120°C'],
        en: ['50°C', '80°C', '100°C', '120°C'],
      },
      correctIndex: 2,
      points: 10,
      explanation: {
        uz: 'Suv 0°C da muzlaydi va 100°C da bug‘ga aylanib qaynaydi.',
        ru: 'Вода замерзает при 0°C и закипает при 100°C.',
        en: 'Water freezes at 0°C and boils at 100°C at normal atmospheric pressure.',
      },
    },
    {
      id: 5,
      question: {
        uz: 'Narsalarning pastga, Yerga qulashiga sabab bo‘ladigan kuch qanday ataladi?',
        ru: 'Как называется сила, притягивающая все предметы к Земле?',
        en: 'What fundamental force pulls objects downward toward Earth?',
      },
      options: {
        uz: ['Ishqalanish kuchi', 'Og‘irlik kuchi (Gravitatsiya)', 'Elastiklik kuchi', 'Magnit kuchi'],
        ru: ['Сила трения', 'Гравитация (сила тяжести)', 'Сила упругости', 'Магнитная сила'],
        en: ['Friction force', 'Gravity (Gravitational force)', 'Elastic tension', 'Centrifugal force'],
      },
      correctIndex: 1,
      points: 10,
      explanation: {
        uz: 'Gravitatsiya (tortishish kuchi) tufayli barcha jismlar Yer yuzida ushlanib turadi.',
        ru: 'Гравитационное поле Земли притягивает все предметы к её центру.',
        en: 'Gravity is the universal force of attraction between masses.',
      },
    },
    {
      id: 6,
      question: {
        uz: 'Quyidagilardan qaysi biri sutemizuvchi hayvon hisoblanadi (bolasini sut bilan boqadi)?',
        ru: 'Какое из этих животных относится к млекопитающим?',
        en: 'Which of the following animals is classified as a mammal?',
      },
      options: {
        uz: ['Akula (Shark)', 'Kit (Delfin/Ko‘k kit)', 'Burgut', 'Krokodil'],
        ru: ['Акула', 'Синий кит', 'Орёл', 'Крокодил'],
        en: ['Shark', 'Blue Whale', 'Golden Eagle', 'Crocodile'],
      },
      correctIndex: 1,
      points: 10,
      explanation: {
        uz: 'Kit baliq emas, balki suvda yashovchi, o‘pka bilan nafas oluvchi sutemizuvchidir.',
        ru: 'Кит — не рыба, а млекопитающее, дышащее лёгкими и вскармливающее детёнышей молоком.',
        en: 'Whales are warm-blooded mammals that breathe air through lungs and nurse young.',
      },
    },
    {
      id: 7,
      question: {
        uz: 'Osh tuzi (xlorid natriy) qaysi kimyoviy formula bilan yoziladi?',
        ru: 'Какова химическая формула поваренной соли?',
        en: 'What is the chemical formula for common table salt?',
      },
      options: {
        uz: ['H2O', 'CO2', 'NaCl', 'O2'],
        ru: ['H2O', 'CO2', 'NaCl', 'O2'],
        en: ['H2O', 'CO2', 'NaCl', 'O2'],
      },
      correctIndex: 2,
      points: 10,
      explanation: {
        uz: 'NaCl — natriy (Na) va xlor (Cl) birikmasi bo‘lgan osh tuzining formulasidir.',
        ru: 'Формула поваренной соли — NaCl (хлорид натрия). H2O — это вода.',
        en: 'Table salt is sodium chloride, NaCl. H2O is water, and CO2 is carbon dioxide.',
      },
    },
    {
      id: 8,
      question: {
        uz: 'Nima uchun kechasi osmonda Oy nur sochib turgandek ko‘rinadi?',
        ru: 'Почему Луна светится ночью на небе?',
        en: 'Why does the Moon appear bright in the night sky?',
      },
      options: {
        uz: ['Oy o‘zidan kuchli olov chiqaradi', 'Oy Quyosh nurini o‘zidan aks ettiradi', 'Oyda ulkan chiroqlar bor', 'Yulduzlar uni yoritadi'],
        ru: ['Луна горит сама', 'Луна отражает свет Солнца как зеркало', 'На Луне есть источники света', 'Её освещают кометы'],
        en: ['The Moon generates its own light', 'The Moon reflects sunlight like a mirror', 'The Moon has glowing lava', 'Stars light it up'],
      },
      correctIndex: 1,
      points: 10,
      explanation: {
        uz: 'Oy o‘zidan nur chiqarmaydi, u Quyoshdan kelayotgan yorug‘likni Yerga qaytaradi.',
        ru: 'Луна сама не излучает свет, а лишь отражает солнечные лучи.',
        en: 'The Moon doesn’t produce its own light; it reflects light from the Sun.',
      },
    },
    {
      id: 9,
      question: {
        uz: 'Qaysi qatlam Yerni Quyoshning zararli ultrabinafsha nurlaridan himoya qiladi?',
        ru: 'Какой слой атмосферы защищает Землю от опасного солнечного ультрафиолета?',
        en: 'Which atmospheric layer shields Earth from harmful solar ultraviolet radiation?',
      },
      options: {
        uz: ['Ozon qatlami', 'Bulut qatlami', 'Muzlik qatlami', 'Tuproq qatlami'],
        ru: ['Озоновый слой', 'Облачный слой', 'Ледяной щит', 'Слой пыли'],
        en: ['Ozone layer', 'Cloud layer', 'Ice blanket', 'Dust layer'],
      },
      correctIndex: 0,
      points: 10,
      explanation: {
        uz: 'Stratosferadagi ozon (O3) gazi biosferani xavfli ultrabinafsha nurlardan asraydi.',
        ru: 'Озоновый экран в стратосфере поглощает губительные ультрафиолетовые лучи.',
        en: 'The ozone layer (O3) in the stratosphere absorbs harmful solar ultraviolet rays.',
      },
    },
    {
      id: 10,
      question: {
        uz: 'Tabiatdagi suv aylanishida suv bug‘lanib osmonga ko‘tarilgach, bulutlarga aylanish jarayoni qanday ataladi?',
        ru: 'Как называется переход водяного пара в капли воды при охлаждении с образованием облаков?',
        en: 'What is the condensation process where evaporated water vapor cools to form clouds?',
      },
      options: {
        uz: ['Erib ketish', 'Kondensatsiya', 'Muzlash', 'Yonish'],
        ru: ['Таяние', 'Конденсация', 'Кристаллизация', 'Горение'],
        en: ['Melting', 'Condensation', 'Sublimation', 'Combustion'],
      },
      correctIndex: 1,
      points: 10,
      explanation: {
        uz: 'Bug‘langan suv yuqorida sovib, mayda suv tomchilariga aylanadi — bu kondensatsiya deyiladi.',
        ru: 'Конденсация — это превращение пара обратно в капельки воды при охлаждении.',
        en: 'Condensation happens when warm vapor cools into water droplets that form clouds.',
      },
    },
  ],
};
