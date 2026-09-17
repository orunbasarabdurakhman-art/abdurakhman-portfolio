export const profile = {
  name: 'Abdurakhman',
  age: 16,
  school: 'Ibilim High School',
  direction: 'Informatics & Mathematics',
  role: 'Student Developer / Aspiring Software Engineer',
  location: 'Kazakhstan',
  focus: 'IT & Programming',
};

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#journey', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
] as const;

export const aboutFacts = [
  { label: 'Age', value: '16' },
  { label: 'School', value: 'Ibilim High School' },
  { label: 'Direction', value: 'Informatics & Mathematics' },
  { label: 'Focus', value: 'IT & Programming' },
] as const;

export type SkillLevel = 'Learning' | 'Developing' | 'Familiar';

export const skills: Array<{
  name: string;
  level: SkillLevel;
  group: 'Languages' | 'Tools' | 'Thinking';
  note: string;
}> = [
  { name: 'Python', level: 'Developing', group: 'Languages', note: 'Logic, automation, mini-projects' },
  { name: 'HTML', level: 'Developing', group: 'Languages', note: 'Semantic structure & accessibility' },
  { name: 'CSS', level: 'Developing', group: 'Languages', note: 'Layout, motion, modern UI' },
  { name: 'JavaScript', level: 'Learning', group: 'Languages', note: 'Interactivity & web logic' },
  { name: 'Git', level: 'Learning', group: 'Tools', note: 'Version control fundamentals' },
  { name: 'GitHub', level: 'Learning', group: 'Tools', note: 'Repos, collaboration, portfolio' },
  { name: 'AI Tools', level: 'Familiar', group: 'Tools', note: 'Research, drafting, faster learning' },
  { name: 'Problem Solving', level: 'Developing', group: 'Thinking', note: 'Breaking problems into steps' },
  { name: 'Algorithms', level: 'Learning', group: 'Thinking', note: 'Patterns, efficiency, practice' },
];

export const projects = [
  {
    name: 'FixCode',
    tag: 'Concept',
    description:
      'A cybersecurity-focused concept exploring digital safety and AI-powered ways to spot risky patterns in everyday tech use.',
    technologies: ['Python', 'AI Tools', 'Security'],
    github: '#github',
    demo: null as string | null,
  },
  {
    name: 'Student Assistant',
    tag: 'Concept',
    description:
      'A concept for a practical digital assistant that helps students organize tasks, notes and study routines in one place.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    github: '#github',
    demo: null,
  },
  {
    name: 'Python Mini Projects',
    tag: 'Practice',
    description:
      'A growing collection of beginner and intermediate Python experiments focused on logic, automation and clean problem-solving.',
    technologies: ['Python', 'Algorithms'],
    github: '#github',
    demo: null,
  },
];

export const journey = [
  {
    year: '2026',
    title: 'Going deeper into programming',
    text: 'Started developing deeper programming and IT skills — building a foundation in code, systems and problem solving.',
  },
  {
    year: '2026',
    title: 'Informatics & Mathematics',
    text: 'Studying Informatics & Mathematics at Ibilim High School, connecting theory with real technology practice.',
  },
  {
    year: 'Future',
    title: 'Real-world software',
    text: 'Build real-world projects and grow into a professional software engineer — one commit, one problem, one product at a time.',
  },
];

export const whyIt = [
  {
    title: 'Solving problems',
    text: 'I like taking a messy question, splitting it into steps, and finding a clear path through it.',
  },
  {
    title: 'Creating with code',
    text: 'Writing software feels like building something real — ideas becoming interfaces, tools and systems.',
  },
  {
    title: 'Learning new technologies',
    text: 'IT never stands still. That pace is exciting: every skill opens another door.',
  },
  {
    title: 'Understanding systems',
    text: 'I want to know how things actually work — from a line of code to the architecture behind it.',
  },
  {
    title: 'Solving real problems',
    text: 'Technology is most interesting when it helps people: school, safety, productivity, everyday life.',
  },
];

/**
 * Replace these placeholders with real profiles when ready.
 * Keep the shape — only the `href` values need to change.
 */
export const socials = [
  { name: 'GitHub', href: '#github', label: 'github.com/your-username' },
  { name: 'Telegram', href: '#telegram', label: 't.me/your-username' },
  { name: 'Instagram', href: '#instagram', label: '@your-username' },
  { name: 'Email', href: 'mailto:hello@example.com', label: 'hello@example.com' },
] as const;
