export const profile = {
  name: 'Abdurakhman',
  age: 16,
  school: 'Ibilim мектебі',
  direction: 'Информатика және математика',
  role: 'Студент-әзірлеуші / Болашақ software engineer',
  location: 'Қазақстан',
  focus: 'IT және бағдарламалау',
};

export const navLinks = [
  { href: '#about', label: 'Мен туралы' },
  { href: '#skills', label: 'Дағдылар' },
  { href: '#projects', label: 'Жобалар' },
  { href: '#journey', label: 'Жолы' },
  { href: '#contact', label: 'Байланыс' },
] as const;

export const aboutFacts = [
  { label: 'Жасы', value: '16' },
  { label: 'Мектеп', value: 'Ibilim мектебі' },
  { label: 'Бағыт', value: 'Информатика және математика' },
  { label: 'Фокус', value: 'IT және бағдарламалау' },
] as const;

export type SkillLevel = 'Үйрену' | 'Дамыту' | 'Таныс';

export const skills: Array<{
  name: string;
  level: SkillLevel;
  group: 'Тілдер' | 'Құралдар' | 'Ойлау';
  note: string;
}> = [
  { name: 'Python', level: 'Дамыту', group: 'Тілдер', note: 'Логика, автоматтандыру, мини-жобалар' },
  { name: 'HTML', level: 'Дамыту', group: 'Тілдер', note: 'Семантикалық құрылым және қолжетімділік' },
  { name: 'CSS', level: 'Дамыту', group: 'Тілдер', note: 'Макет, анимация, заманауи UI' },
  { name: 'JavaScript', level: 'Үйрену', group: 'Тілдер', note: 'Интерактивтілік және веб-логика' },
  { name: 'Git', level: 'Үйрену', group: 'Құралдар', note: 'Нұсқаларды басқару негіздері' },
  { name: 'GitHub', level: 'Үйрену', group: 'Құралдар', note: 'Репозиторий, бірлесіп жұмыс, портфолио' },
  { name: 'AI құралдары', level: 'Таныс', group: 'Құралдар', note: 'Зерттеу, жазу, жылдамырақ үйрену' },
  { name: 'Мәселені шешу', level: 'Дамыту', group: 'Ойлау', note: 'Мәселені қадамдарға бөлу' },
  { name: 'Алгоритмдер', level: 'Үйрену', group: 'Ойлау', note: 'Үлгілер, тиімділік, жаттығу' },
];

export const projects = [
  {
    name: 'FixCode',
    tag: 'Концепт',
    description:
      'Цифрлық қауіпсіздікті және күнделікті технологиядағы қауіпті үлгілерді AI арқылы байқау тәсілдерін зерттейтін киберқауіпсіздік концепті.',
    technologies: ['Python', 'AI құралдары', 'Security'],
    github: '#github',
    demo: null as string | null,
  },
  {
    name: 'Student Assistant',
    tag: 'Концепт',
    description:
      'Оқушыларға тапсырмаларды, жазбаларды және оқу тәртібін бір жерде жинауға көмектесетін практикалық цифрлық көмекші концепті.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    github: '#github',
    demo: null,
  },
  {
    name: 'Python Mini Projects',
    tag: 'Практика',
    description:
      'Логикаға, автоматтандыруға және таза есеп шығаруға бағытталған бастауыш және орта деңгейлі Python тәжірибелерінің жинағы.',
    technologies: ['Python', 'Алгоритмдер'],
    github: '#github',
    demo: null,
  },
];

export const journey = [
  {
    year: '2026',
    title: 'Бағдарламалауға тереңірек үңілу',
    text: 'Бағдарламалау мен IT дағдыларын тереңірек дамыта бастадым — код, жүйелер және мәселені шешудің іргетасын қалап жатырмын.',
  },
  {
    year: '2026',
    title: 'Информатика және математика',
    text: 'Ibilim мектебінде информатика мен математиканы оқып, теорияны нақты технология тәжірибесімен байланыстырып жатырмын.',
  },
  {
    year: 'Болашақ',
    title: 'Нақты әлемдегі бағдарламалар',
    text: 'Нақты жобалар жасап, кәсіби software engineer болып өсу — бір commit, бір мәселе, бір өнімнен.',
  },
];

export const whyIt = [
  {
    title: 'Мәселелерді шешу',
    text: 'Күрделі сұрақты алып, оны қадамдарға бөліп, ішінен анық жол тапқанды ұнатамын.',
  },
  {
    title: 'Кодпен жасау',
    text: 'Бағдарлама жазу — шынайы нәрсе құрғандай: идея интерфейске, құралға, жүйеге айналады.',
  },
  {
    title: 'Жаңа технологияларды үйрену',
    text: 'IT бір орнында тұрмайды. Сол қарқын қызық: әр дағды жаңа есік ашады.',
  },
  {
    title: 'Жүйелерді түсіну',
    text: 'Заттардың шынымен қалай жұмыс істейтінін білгім келеді — бір жол кодтан бастап, артындағы архитектураға дейін.',
  },
  {
    title: 'Нақты мәселелерді шешу',
    text: 'Технология адамға көмектескенде ең қызық: мектеп, қауіпсіздік, өнімділік, күнделікті өмір.',
  },
];

export const socials = [
  { name: 'GitHub', href: '#github', label: 'github.com/your-username' },
  { name: 'Telegram', href: '#telegram', label: 't.me/your-username' },
  { name: 'Instagram', href: '#instagram', label: '@your-username' },
  { name: 'Email', href: 'mailto:hello@example.com', label: 'hello@example.com' },
] as const;
