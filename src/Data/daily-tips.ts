// dailyTipsData.ts

// Тип даних для підказки
export interface Tip {
  id: number;
  title: string;
  text: string;
}

// Масив підказок
export const dailyTips: Tip[] = [
  {
    id: 1,
    title: '🎣 Daily tip #1',
    text: 'Ready to get started? Tap to see your first tip and head out fishing with fresh insights!',
  },
  {
    id: 2,
    title: '🎣 Daily tip #2',
    text: 'Remember to stay patient and observe your surroundings for the best catch!',
  },
  {
    id: 3,
    title: '🎣 Daily tip #3',
    text: 'Try different bait types to attract a variety of fish species!',
  },
  // Додайте більше підказок за потреби
];

// Функція для отримання підказки за індексом
export function getTipById(id: number): Tip | undefined {
  return dailyTips.find(tip => tip.id === id);
}

// Функція для отримання випадкової підказки
export function getRandomTip(): Tip {
  const randomIndex = Math.floor(Math.random() * dailyTips.length);
  return dailyTips[randomIndex];
}
