// fishingQuizData.ts

export interface QuizQuestion {
  id: number;
  category: string;
  question: string;
  options: {option: string; isCorrect: boolean}[];
}

export const fishingQuizData: QuizQuestion[] = [
  {
    id: 1,
    category: 'Freshwater Fishing',
    question: 'What type of bait is generally best for freshwater fish?',
    options: [
      {option: 'Shrimp', isCorrect: false},
      {option: 'Worms and minnows', isCorrect: true},
      {option: 'Squid', isCorrect: false},
    ],
  },
  {
    id: 2,
    category: 'Saltwater Fishing',
    question: 'When is the best time to fish in saltwater?',
    options: [
      {option: 'During low tide', isCorrect: false},
      {option: 'During incoming tide', isCorrect: true},
      {option: 'During high noon', isCorrect: false},
    ],
  },
  {
    id: 3,
    category: 'Beginner Basics',
    question: 'Which knot is commonly recommended for beginners?',
    options: [
      {option: 'Palomar knot', isCorrect: true},
      {option: 'Figure-eight knot', isCorrect: false},
      {option: 'Square knot', isCorrect: false},
    ],
  },
  {
    id: 4,
    category: 'Seasonal Tips',
    question: 'Where are fish more likely to be found in the spring?',
    options: [
      {option: 'In deep water', isCorrect: false},
      {option: 'Near river mouths or shallow areas', isCorrect: true},
      {option: 'At the surface', isCorrect: false},
    ],
  },
  {
    id: 5,
    category: 'Tech Tips',
    question: 'What can a fish finder help you locate?',
    options: [
      {option: 'The water temperature', isCorrect: false},
      {option: 'Schools of fish', isCorrect: true},
      {option: 'Water plants', isCorrect: false},
    ],
  },
  {
    id: 6,
    category: 'Conservation Tips',
    question: 'Why should you avoid fishing during breeding seasons?',
    options: [
      {option: 'Fish become more aggressive', isCorrect: false},
      {option: 'It helps protect fish populations', isCorrect: true},
      {option: 'Fish are harder to catch', isCorrect: false},
    ],
  },
  {
    id: 7,
    category: 'Freshwater Fishing',
    question: 'What do fish typically look for near rocks or structures?',
    options: [
      {option: 'Food and shelter', isCorrect: true},
      {option: 'Open space', isCorrect: false},
      {option: 'Fast currents', isCorrect: false},
    ],
  },
  {
    id: 8,
    category: 'Saltwater Fishing',
    question:
      'What should you do after a saltwater fishing trip to preserve your gear?',
    options: [
      {option: 'Dry it in the sun', isCorrect: false},
      {option: 'Rinse it with fresh water', isCorrect: true},
      {option: 'Use more bait next time', isCorrect: false},
    ],
  },
  {
    id: 9,
    category: 'Beginner Basics',
    question: 'Which species is good for beginners to target?',
    options: [
      {option: 'Bluegill', isCorrect: true},
      {option: 'Marlin', isCorrect: false},
      {option: 'Pike', isCorrect: false},
    ],
  },
  {
    id: 10,
    category: 'Seasonal Tips',
    question: 'When are fish most active in summer?',
    options: [
      {option: 'Midday', isCorrect: false},
      {option: 'Dawn and dusk', isCorrect: true},
      {option: 'Midnight', isCorrect: false},
    ],
  },
  {
    id: 11,
    category: 'Tech Tips',
    question: 'Why should you use a portable battery for fishing apps?',
    options: [
      {option: 'Phones drain quickly', isCorrect: true},
      {option: 'It provides better signal', isCorrect: false},
      {option: 'It helps catch more fish', isCorrect: false},
    ],
  },
  {
    id: 12,
    category: 'Conservation Tips',
    question: 'Why use barbless hooks in catch-and-release?',
    options: [
      {option: 'They make casting easier', isCorrect: false},
      {option: 'They reduce fish injury', isCorrect: true},
      {option: 'They attract more fish', isCorrect: false},
    ],
  },
  {
    id: 13,
    category: 'Freshwater Fishing',
    question: 'What kind of casting motion is best for accuracy?',
    options: [
      {option: 'Quick, jerky movement', isCorrect: false},
      {option: 'Smooth, controlled motion', isCorrect: true},
      {option: 'Rapid, circular motion', isCorrect: false},
    ],
  },
  {
    id: 14,
    category: 'Saltwater Fishing',
    question: 'What might seabirds diving into the water indicate?',
    options: [
      {option: 'Weather changes', isCorrect: false},
      {option: 'Fish activity nearby', isCorrect: true},
      {option: 'Increased water temperature', isCorrect: false},
    ],
  },
  {
    id: 15,
    category: 'Conservation Tips',
    question: 'What should you use when handling a fish to protect its health?',
    options: [
      {option: 'Dry hands', isCorrect: false},
      {option: 'Wet hands', isCorrect: true},
      {option: 'Gloves', isCorrect: false},
    ],
  },
];
