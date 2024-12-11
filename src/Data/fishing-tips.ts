// fishing-tips.ts

type Tip = {
  id: number;
  title: string;
  content: string;
};

type Category = {
  id: number,
  categoryName: string;
  tips: Tip[];
};

export const fishingTips: Category[] = [
  {
    id: 1,
    categoryName: 'Freshwater Fishing',
    tips: [
      {
        id: 1,
        title: 'Bait Basics',
        content:
          'Use live bait like worms or minnows for freshwater fish. These are especially effective for species like bass and trout. Live bait can mimic the natural prey of freshwater fish, increasing your chances of a bite.',
      },
      {
        id: 2,
        title: 'Casting Technique',
        content:
          'For more accurate casting, aim your rod tip in the direction you want to cast, then release the line smoothly. Avoid jerky movements, which may scare fish away.',
      },
      {
        id: 3,
        title: 'Look for Structures',
        content:
          'Freshwater fish often gather near structures like rocks, plants, or fallen trees. These areas offer shelter and attract smaller prey, making them ideal fishing spots.',
      },
      {
        id: 4,
        title: 'Adjust for Seasons',
        content:
          'Fish activity changes with the seasons. During warmer months, fish are more active in shallow areas. In colder months, they move to deeper waters, so adjust your casting distance accordingly.',
      },
      {
        id: 5,
        title: 'Check Water Temperature',
        content:
          'Fish are more likely to bite in water temperatures they prefer. For example, trout are more active in cooler water, while bass prefer warmer conditions. Bring a thermometer to gauge water temperature and adjust your approach.',
      },
    ],
  },
  {
    id: 2,
    categoryName: 'Saltwater Fishing',
    tips: [
      {
        id: 1,
        title: 'Tide Awareness',
        content:
          'Tides have a big impact on fish activity in saltwater. Fish are generally more active during incoming tides when food is more accessible. Check tide charts and plan your fishing trip around peak tides.',
      },
      {
        id: 2,
        title: 'Use Heavier Gear',
        content:
          'Saltwater fish can be larger and stronger than freshwater fish. Make sure to use heavier rods and lines that can withstand the fight. Lighter gear may break or wear down, especially with big catches.',
      },
      {
        id: 3,
        title: 'Watch the Birds',
        content:
          'Seabirds diving into the water usually indicate schools of baitfish, and larger fish are often nearby. Follow bird activity to find good fishing spots.',
      },
      {
        id: 4,
        title: 'Choose Lures Wisely',
        content:
          'Saltwater fish are more attracted to brighter, larger lures that mimic small fish. Consider colors like silver or white to resemble baitfish under water.',
      },
      {
        id: 5,
        title: 'Clean Your Gear',
        content:
          'Saltwater can quickly corrode fishing equipment. After every trip, rinse rods, reels, and hooks with fresh water to prevent rust. This extends the lifespan of your gear and keeps it ready for future trips.',
      },
    ],
  },
  {
    id: 3,
    categoryName: 'Beginner Basics',
    tips: [
      {
        id: 1,
        title: 'Start with Easy Targets',
        content:
          'As a beginner, start by targeting fish that are easier to catch, like bluegill or crappie in freshwater, or mackerel in saltwater. These species are more abundant and forgiving for new anglers.',
      },
      {
        id: 2,
        title: 'Learn Knot Tying',
        content:
          'Knowing how to tie a strong fishing knot is essential. Practice the improved clinch knot or the Palomar knot, as these are easy to learn and hold securely.',
      },
      {
        id: 3,
        title: 'Practice Casting at Home',
        content:
          'Try casting practice in an open area, like your yard. Use a small weight on the line instead of a hook and practice your aim. This will make your first trips smoother.',
      },
      {
        id: 4,
        title: 'Stay Quiet',
        content:
          'Fish can detect noise and vibrations in the water. Avoid loud sounds or movements while fishing, especially in shallow waters, where fish are more easily startled.',
      },
      {
        id: 5,
        title: 'Research Local Regulations',
        content:
          'Every area has specific fishing regulations. Learn about the types of fish you can catch, size limits, and restricted seasons. This helps preserve fish populations and keeps you compliant.',
      },
    ],
  },
  {
    id: 4,
    categoryName: 'Seasonal Tips',
    tips: [
      {
        id: 1,
        title: 'Spring Fishing',
        content:
          'In spring, fish move to shallow waters to spawn. Look for them near river mouths or sheltered coves. Use lures that mimic smaller fish, as these are abundant during spring.',
      },
      {
        id: 2,
        title: 'Summer Fishing',
        content:
          'Fish are active at dawn and dusk in summer, when temperatures are cooler. Try topwater lures during early morning hours to attract bass and similar species in freshwater.',
      },
      {
        id: 3,
        title: 'Fall Fishing',
        content:
          'Fall brings an increase in fish feeding activity as they prepare for winter. Look for fish in deeper areas and use live bait, as it’s more appealing to fish storing up for colder months.',
      },
      {
        id: 4,
        title: 'Winter Ice Fishing',
        content:
          'For winter ice fishing, try jigging with bright lures to attract fish in low light under the ice. Keep your movements subtle, as fish are less active in cold water.',
      },
      {
        id: 5,
        title: 'Dress for Weather',
        content:
          'Always prepare for sudden weather changes. For example, in spring, rain is common, so bring waterproof clothing. In winter, layer up to stay warm, especially if you’re fishing in cold climates.',
      },
    ],
  },
  {
    id: 5,
    categoryName: 'Tech Tips',
    tips: [
      {
        id: 1,
        title: 'Use a Fish Finder',
        content:
          'Fish finders help locate schools underwater and are great for deep-sea or lake fishing. Choose one with clear sonar imaging for the best results, but keep it simple if you’re new to tech.',
      },
      {
        id: 2,
        title: 'Weather Apps',
        content:
          'Use a weather app to check conditions before your trip. Look for features that show wind speed, temperature, and barometric pressure, as these can affect fish behavior.',
      },
      {
        id: 3,
        title: 'Log Your Catches',
        content:
          'Apps like Fishbrain let you log fish size, type, and location. Keeping track of catches helps you learn which techniques work best and refine your strategy over time.',
      },
      {
        id: 4,
        title: 'Map Apps',
        content:
          'Use map apps with offline features to explore new fishing spots without internet. Mark promising areas to revisit and note conditions like water depth and vegetation.',
      },
      {
        id: 5,
        title: 'Battery Backup',
        content:
          'Fishing apps and GPS drain your phone battery. Invest in a portable battery pack so your devices don’t run out of power in remote fishing areas.',
      },
    ],
  },
  {
    id: 6,
    categoryName: 'Conservation Tips',
    tips: [
      {
        id: 1,
        title: 'Catch and Release',
        content:
          'When practicing catch and release, use barbless hooks to reduce injury. Handle fish gently, keeping them in water as much as possible, and avoid squeezing to protect their organs.',
      },
      {
        id: 2,
        title: 'Pick Up Litter',
        content:
          'Keep fishing spots clean by taking any litter with you, including fishing lines, hooks, or packaging. A clean environment helps maintain a healthy ecosystem for fish.',
      },
      {
        id: 3,
        title: 'Respect Breeding Seasons',
        content:
          'Avoid fishing for species during their breeding seasons. This helps protect fish populations and ensures that fish continue to thrive in natural habitats.',
      },
      {
        id: 4,
        title: 'Use Eco-Friendly Gear',
        content:
          'Consider using lead-free weights and biodegradable fishing lines to minimize environmental impact. These products are safer for both fish and the ecosystem.',
      },
      {
        id: 5,
        title: 'Practice Proper Fish Handling',
        content:
          'Use wet hands when handling fish, as dry hands can remove protective slime. This slime acts as a barrier against disease and bacteria, helping the fish recover after release.',
      },
    ],
  },
];
