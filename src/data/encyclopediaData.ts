import { EncyclopediaArticle } from '../types';

export const encyclopediaArticles: EncyclopediaArticle[] = [
  {
    id: 'enc-solar-system',
    category: 'space',
    categoryName: {
      uz: 'Koinot',
      ru: 'Космос',
      en: 'Space',
    },
    title: {
      uz: 'Quyosh tizimining eng sirli tomonlari',
      ru: 'Тайны и чудеса Солнечной системы',
      en: 'Mysteries and Wonders of the Solar System',
    },
    summary: {
      uz: 'Quyosh atrofida 8 ta katta planeta aylanadi. Yupiter eng kattasi, Merkuriy esa eng issiq va eng tezkoridir.',
      ru: 'Вокруг Солнца вращаются 8 планет. Юпитер — самая большая, а Меркурий — самая близкая и быстрая.',
      en: 'Eight major planets orbit our Sun. Jupiter is the largest giant, while Mercury is the closest and swiftest.',
    },
    content: {
      uz: 'Bizning Quyosh tizimimiz taxminan 4.6 milliard yil oldin gaz va chang bulutidan hosil bo‘lgan. Markazda Quyosh joylashgan bo‘lib, butun tizim massasining 99.8 foizini tashkil qiladi! Planetalar ikki guruhga bo‘linadi: toshloq sayyoralar (Merkuriy, Venera, Yer, Mars) va gaz gigantlari (Yupiter, Saturn, Uran, Neptun). Saturn o‘zining ajoyib muz va tosh bo‘laklaridan iborat ulkan halqalari bilan mashhur.',
      ru: 'Наша Солнечная система образовалась около 4,6 миллиарда лет назад из гигантского газопылевого облака. В самом центре находится Солнце, на которое приходится 99,8% массы всей системы! Планеты делятся на две группы: каменные (Меркурий, Венера, Земля, Марс) и газовые гиганты (Юпитер, Сатурн, Уран, Нептун). Кольца Сатурна состоят из миллиардов ледяных и каменных частиц.',
      en: 'Our solar system formed around 4.6 billion years ago from a cloud of interstellar gas and dust. The Sun at the center holds 99.8% of the total mass! Planets are split into terrestrial worlds (Mercury, Venus, Earth, Mars) and gas giants (Jupiter, Saturn, Uranus, Neptune). Saturn’s rings are primarily composed of billions of pieces of ice and dust.',
    },
    funFact: {
      uz: 'Venerada bir kun (o‘z o‘qi atrofida to‘liq aylanishi) uning bir yilidan (Quyosh atrofida aylanishidan) uzoqroq davom etadi!',
      ru: 'На Венере один день длится дольше, чем целый венерианский год!',
      en: 'A day on Venus is longer than a whole year on Venus!',
    },
    readTime: {
      uz: '3 daqiqa',
      ru: '3 мин',
      en: '3 min read',
    },
    icon: 'Orbit',
  },
  {
    id: 'enc-ai-robotics',
    category: 'technology',
    categoryName: {
      uz: 'Texnologiya',
      ru: 'Технологии',
      en: 'Technology',
    },
    title: {
      uz: 'Sun’iy intellekt va robotlar qanday o‘rganadi?',
      ru: 'Как учатся искусственный интеллект и роботы?',
      en: 'How Do AI and Robots Actually Learn?',
    },
    summary: {
      uz: 'Robotlar temir va simlardan iborat bo‘lsa-da, ularning aqlli ishlashiga dasturchilar yozgan kodlar sabab bo‘ladi.',
      ru: 'Роботы состоят из микросхем и датчиков, но думать и принимать решения им помогают алгоритмы.',
      en: 'Robots are built from circuits and motors, but smart algorithms and data teach them to think.',
    },
    content: {
      uz: 'Sun’iy intellekt (AI) inson miyasi kabi o‘rganishga harakat qiladi. Bu "mashinani o‘qitish" (Machine Learning) deb ataladi. Masalan, kompyuterga mushukning 100 000 ta rasmini ko‘rsatilsa, u mushukning quloqlari, mo‘ylovi va ko‘zlarining shaklini eslab qoladi. Keyingi safar yangi rasm ko‘rsatilganda, bu mushuk ekanini 99% aniqlik bilan aytib beradi. Bugungi kunda robotlar Marsda tadqiqot olib boryapti va okean tubini o‘rganyapti.',
      ru: 'Искусственный интеллект учится на примерах. Чтобы научить компьютер узнавать кошку, ему показывают сотни тысяч фотографий кошек. Алгоритм выделяет ушки, форму глаз и усы. Со временем программа безошибочно узнает животное на новом снимке. Роботы исследуют глубины океанов и марсианские кратеры, где человеку находиться опасно.',
      en: 'Artificial Intelligence learns through patterns in data, a concept known as Machine Learning. By examining thousands of images of an object, algorithms identify features like contours, colors, and shapes. Today, intelligent rovers explore Mars and submarine probes chart deep ocean trenches safely.',
    },
    funFact: {
      uz: 'Dunyodagi birinchi dasturchi ayol Ada Lavleys bo‘lgan bo‘lib, u XIX asrda birinchi kompyuter algoritmini yaratgan!',
      ru: 'Первым программистом в истории была женщина — Ада Лавлейс, написавшая алгоритм в 1843 году!',
      en: 'Ada Lovelace wrote the world’s very first computer algorithm way back in 1843!',
    },
    readTime: {
      uz: '4 daqiqa',
      ru: '4 мин',
      en: '4 min read',
    },
    icon: 'Bot',
  },
  {
    id: 'enc-human-brain',
    category: 'biology',
    categoryName: {
      uz: 'Tabiat & Inson',
      ru: 'Человек и природа',
      en: 'Nature & Humans',
    },
    title: {
      uz: 'Inson miyasi: Dunyodagi eng kuchli superkompyuter',
      ru: 'Мозг человека: Главный суперкомпьютер природы',
      en: 'The Human Brain: Nature’s Ultimate Supercomputer',
    },
    summary: {
      uz: 'Bizning miyamizda 86 milliarddan ortiq neyron hujayralari bor va ular soniyasiga yuzlab signallarni uzatadi.',
      ru: 'В нашем мозге более 86 миллиардов нейронов, передающих сигналы со скоростью гоночного болида.',
      en: 'Your brain contains over 86 billion neurons communicating with lightning speed.',
    },
    content: {
      uz: 'Inson miyasi tana vaznining atigi 2 foizini tashkil qilsa-da, organizmdagi energiyaning 20 foizini sarflaydi. Har bir yangi narsa o‘rganganingizda, miyada yangi neyron aloqalar (sinapslar) hosil bo‘ladi. Matematika bilan shug‘ullanish, kitob o‘qish va yangi tillarni o‘rganish miyani kuchaytiradi va xotirani mustahkamlaydi.',
      ru: 'Хотя мозг составляет всего 2% массы тела, он потребляет почти 20% всей энергии организма. Каждый раз, когда вы учите новое правило, слово или решаете задачу, между нейронами образуются новые прочные связи (синапсы).',
      en: 'Though weighing just 2% of total body mass, the brain uses 20% of your daily energy. Whenever you learn a language or solve a puzzle, neurons form new physical synaptic connections.',
    },
    funFact: {
      uz: 'Miyadagi elektr signallari soatiga 400 kilometr tezlikda harakatlanadi!',
      ru: 'Нервные импульсы в мозге несутся со скоростью более 400 километров в час!',
      en: 'Neural impulses can travel through nerve fibers at speeds over 400 km/h!',
    },
    readTime: {
      uz: '3 daqiqa',
      ru: '3 мин',
      en: '3 min read',
    },
    icon: 'Brain',
  },
  {
    id: 'enc-dinosaurs',
    category: 'history',
    categoryName: {
      uz: 'Qadimiy tarix',
      ru: 'Древний мир',
      en: 'Ancient World',
    },
    title: {
      uz: 'Dinozavrlar davri va qazilma boyliklar siri',
      ru: 'Эпоха динозавров: Властелины доисторической Земли',
      en: 'The Age of Dinosaurs: Prehistoric Giants',
    },
    summary: {
      uz: 'Dinozavrlar Yer yuzida 160 million yildan ortiq hukmronlik qilgan. Ularning eng ulkani bo‘yi 30 metrgacha yetgan.',
      ru: 'Динозавры правили Землёй более 160 миллионов лет, достигая исполинских размеров.',
      en: 'Dinosaurs ruled Earth for over 160 million years, growing up to 30 meters long.',
    },
    content: {
      uz: 'Dinozavrlar mezozoy erasida (Trias, Yura va Bo‘r davrlari) yashagan. Ba’zilari o‘t bilan oziqlanuvchi bahaybat gigantlar (Diplodok, Braxiozavr) bo‘lsa, ba’zilari chaqqon yirtqichlar (Tirannozavr Reks, Velosiraptor) bo‘lgan. Qizig‘i shundaki, bugungi kunda biz ko‘rib turgan qushlar — dinozavrlarning bevosita avlodlari hisoblanadi!',
      ru: 'Динозавры жили в мезозойскую эру. Среди них были гигантские травоядные (брахиозавры, диплодоки) и свирепые хищники (тираннозавры). Палеонтологи доказали, что современные птицы произошли от пернатых динозавров-тероподов.',
      en: 'Dinosaurs lived across the Triassic, Jurassic, and Cretaceous periods. While some were colossal herbivores, others were agile carnivores. Paleontologists have proven that modern birds are direct living descendants of theropod dinosaurs.',
    },
    funFact: {
      uz: 'Tirannozavr Reksning bir dona tishi uzunligi banan mevasidan ham kattaroq — 30 santimetrga yetgan!',
      ru: 'Один зуб тираннозавра рекса мог достигать 30 сантиметров — размера большой линейки!',
      en: 'A single tooth of a T-Rex could reach 30 centimeters in length — bigger than a banana!',
    },
    readTime: {
      uz: '3 daqiqa',
      ru: '3 мин',
      en: '3 min read',
    },
    icon: 'Compass',
  },
  {
    id: 'enc-ocean-depths',
    category: 'biology',
    categoryName: {
      uz: 'Tabiat & Inson',
      ru: 'Человек и природа',
      en: 'Nature & Humans',
    },
    title: {
      uz: 'Dunyo okeanining tubidagi nur sochuvchi maxluqlar',
      ru: 'Обитатели бездны: Живое свечение океана',
      en: 'Deep Ocean Depths and Bioluminescent Life',
    },
    summary: {
      uz: 'Okeanning 1000 metrdan chuqur joylariga quyosh nuri tushmaydi, lekin u yerdagi baliqlar o‘zidan nur taratadi!',
      ru: 'На глубине более 1000 метров царит полная тьма, но многие животные умеют светиться сами!',
      en: 'Below 1,000 meters in total darkness, deep-sea creatures glow with biological light.',
    },
    content: {
      uz: 'Dunyodagi eng chuqur joy Tinch okeanidagi Mariana botig‘i bo‘lib, chuqurligi taxminan 11 000 metrga yetadi. Bu yerda quyosh nuri mutlaqo yo‘q va suv bosimi ulkan. Shunga qaramay, hayvonlar kimyoviy jarayon orqali o‘zidan yorug‘lik chiqarishni (biolyuminestsensiya) o‘rgangan. Ular bu nur orqali o‘zaro gaplashadi, o‘lja tutadi va dushmanlaridan himoyalanadi.',
      ru: 'Самая глубокая точка планеты — Марианская впадина (около 11 000 метров). Несмотря на ледяную воду и чудовищное давление, там кипит жизнь. Глубоководные рыбы и медузы используют биолюминесценцию, создавая завораживающие светящиеся узоры в океанской мгле.',
      en: 'The Mariana Trench drops nearly 11,000 meters into complete darkness with crushing hydrostatic pressure. Organisms thrive here through bioluminescence — chemical reactions producing glowing light to hunt, communicate, and camouflage.',
    },
    funFact: {
      uz: 'Insoniyat Oyni okean tubiga qaraganda yaxshiroq xaritaga tushirgan: okeanning 80% dan ko‘prog‘i hali to‘liq o‘rganilmagan!',
      ru: 'Поверхность Луны исследована лучше, чем дно Мирового океана: более 80% глубин до сих пор не изучены!',
      en: 'We have mapped more of the Moon’s surface than the deep ocean floor on Earth!',
    },
    readTime: {
      uz: '4 daqiqa',
      ru: '4 мин',
      en: '4 min read',
    },
    icon: 'Fish',
  },
  {
    id: 'enc-fibonacci-nature',
    category: 'math',
    categoryName: {
      uz: 'Matematika',
      ru: 'Математика',
      en: 'Mathematics',
    },
    title: {
      uz: 'Tabiatdagi sehrli raqamlar: Fibonachchi ketma-ketligi',
      ru: 'Магия чисел в природе: Последовательность Фибоначчи',
      en: 'Math in Nature: The Famous Fibonacci Sequence',
    },
    summary: {
      uz: 'Kungaboqar urug‘lari, chig‘anoqlar va o‘simlik barglari qat’iy matematik qonuniyat bo‘yicha joylashadi.',
      ru: 'Лепестки цветов, семена подсолнуха и морские раковины растут по строгим математическим правилам.',
      en: 'Flower petals, sunflower seeds, and pine cones arrange themselves in a golden spiral pattern.',
    },
    content: {
      uz: 'Fibonachchi sonlari: 1, 1, 2, 3, 5, 8, 13, 21, 34... Bu qatorda har bir yangi son o‘zidan oldingi ikkita sonning yig‘indisiga teng. Agar kungaboqarning markazidagi urug‘larning spiral qatorlarini sanasangiz, har doim 34 va 55 yoki 55 va 89 sonlarini topasiz. Tabiat ushbu spiral shakl orqali urug‘larni eng zich va mukammal joylashtiradi.',
      ru: 'Ряд Фибоначчи (1, 1, 2, 3, 5, 8, 13, 21...) удивителен: каждое следующее число равно сумме двух предыдущих. Спирали семян в подсолнухе почти всегда соответствуют этим числам, обеспечивая максимально плотную и гармоничную упаковку.',
      en: 'The Fibonacci series (1, 1, 2, 3, 5, 8, 13, 21, 34...) is generated by adding the two previous numbers. In sunflowers, spiraling seed rows match consecutive Fibonacci numbers to pack the maximum seeds in minimal space.',
    },
    funFact: {
      uz: 'Deyarli barcha olxo‘ri va shaftoli gullarida roppa-rosa 5 ta gulbarg bo‘ladi — bu ham Fibonachchi sonidir!',
      ru: 'У большинства цветков вишни и яблони ровно 5 лепестков — это классическое число Фибоначчи!',
      en: 'Most wild roses and cherry blossoms have exactly 5 petals — a pure Fibonacci number!',
    },
    readTime: {
      uz: '3 daqiqa',
      ru: '3 мин',
      en: '3 min read',
    },
    icon: 'Sparkle',
  },
];
