// Centralised site content — all copy and media in one place.

export const MEDIA = {
  logo: 'https://ppfm.naderhajjar.com/wp-content/uploads/2025/07/logo.png',
  founder: 'https://ppfm.naderhajjar.com/wp-content/uploads/2025/07/about-576x1024-350x622.jpg',
}

export const CONTACT = {
  email: 'pitchpartnersmgmt@gmail.com',
  instagram: { handle: '@pitchpartners.mgmt', url: 'https://instagram.com/pitchpartners.mgmt' },
  linkedin: { handle: 'Pitch Partners', url: 'https://www.linkedin.com/company/pitch-partners' },
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Contact', href: '#contact' },
]

export const STATS = [
  { value: 4, suffix: '', label: 'Training Programs' },
  { value: 3, suffix: '', label: 'Countries Played In', note: 'Canada · France · Lebanon' },
  { value: 1, prefix: '', suffix: '', label: 'National Team Call-Up', display: 'NAT’L' },
  { value: 100, suffix: '%', label: 'Player-First Coaching' },
]

export const HERO = {
  badge: 'Professional Football Coaching',
  titleStatic: 'Unlock Your',
  rotatingWords: ['Potential', 'Game', 'Future', 'Greatness'],
  subtitle:
    'Expert guidance, personalized training, and professional connections — built on real experience at the highest levels of the game.',
}

export const ABOUT = {
  eyebrow: 'About the Founder',
  name: 'Nicholas Aramouni',
  role: 'Founder & Head Coach — Pitch Partners',
  paragraphs: [
    "Nicholas's football journey began in the competitive local clubs of Ottawa, where he built his technical foundation before earning a place at university-level competition across Canada.",
    'His determination took him overseas — earning a move to play club football in France and ultimately receiving a call-up to the Lebanese National Team, cementing his status as a professional player with true international experience.',
    "He founded Pitch Partners to share the knowledge, experience, and connections built throughout his career — giving the next generation a clear, proven pathway to achieve their football goals.",
  ],
  journey: ['Ottawa Local Clubs', 'Canadian University', 'Club Football — France', 'Lebanese National Team'],
}

export const PROGRAMS = [
  {
    id: 'individual',
    icon: 'user',
    name: 'Individual Training',
    desc: 'One-on-one sessions built entirely around your development. Every rep, every drill — designed specifically for you.',
    details:
      'This program offers you personalized training tailored to your needs, significantly enhancing skill development and performance. Through one-on-one coaching focused on specific skill areas, the approach accelerates your advancement and deepens your comprehension of the game.',
    tags: ['Player Specific', 'Personalized', 'Tailored'],
  },
  {
    id: 'group',
    icon: 'users',
    name: 'Group Training',
    desc: 'Train alongside driven players who share your ambition. Build chemistry, healthy competition, and collective growth.',
    details:
      'This program combines the benefits of personalized attention with the advantages of a team environment. Athletes receive individualized feedback while participating in collaborative drills that emphasize teamwork, communication, and realistic match conditions.',
    tags: ['Team Oriented', 'Collaborative', 'Common Goals'],
  },
  {
    id: 'tactical',
    icon: 'analysis',
    name: 'Tactical Analysis',
    desc: 'Understand the game at a deeper level. We dissect your performances to identify strengths, expose weaknesses, and sharpen your football IQ.',
    details:
      'This program allows you to dive deeply into your individual performance and tactical understanding. By examining your in-game positioning and decisions, we develop customized enhancement strategies that help you understand your role contributions and improve your field intelligence.',
    tags: ['Film Review', 'Strategic Insight', 'Performance'],
  },
  {
    id: 'scouting',
    icon: 'scouting',
    name: 'Scouting',
    desc: 'Leveraging professional networks to connect talented players with real opportunities — evaluation, exposure, and recruitment support.',
    details:
      'This program is offered to professional clubs and universities, providing expert recruitment assistance. The service evaluates prospective players’ abilities, tactical comprehension, and development trajectory to guide roster-building decisions aligned with your organizational objectives.',
    tags: ['Talent ID', 'Recruitment', 'Evaluation'],
  },
]
