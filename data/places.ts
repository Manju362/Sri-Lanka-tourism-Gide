import { HistoricalPlace } from '@/types';

export const historicalPlaces: HistoricalPlace[] = [
  {
    id: '1',
    name: 'Sigiriya Rock Fortress',
    nameEn: 'Sigiriya Rock Fortress',
    nameSi: 'සීගිරිය',
    location: 'Matale District, Central Province',
    description: 'An ancient rock fortress and palace ruin, considered one of the most valuable historical monuments of Sri Lanka.',
    history: 'Built by King Kashyapa in the 5th century AD (477-495 CE), Sigiriya is a UNESCO World Heritage Site. The king built his palace on top of this massive 200-meter high rock and decorated its sides with colorful frescoes. The fortress complex includes gardens, ponds, and sophisticated engineering.',
    legends: [
      'King Kashyapa built Sigiriya after overthrowing his father King Dhatusena. He chose this strategic location out of fear of revenge from his brother Moggallana.',
      'The Mirror Wall was once so well polished that the king could see his reflection in it. Today it contains ancient graffiti written by visitors over 1,500 years ago.',
      'The famous Sigiriya Frescoes depict celestial maidens (apsaras) and are considered masterpieces of ancient art.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    coordinates: { latitude: 7.9570, longitude: 80.7603 },
    category: 'fortress'
  },
  {
    id: '2',
    name: 'Temple of the Sacred Tooth Relic',
    nameEn: 'Temple of the Sacred Tooth Relic',
    nameSi: 'ශ්‍රී දළදා මාළිගාව',
    location: 'Kandy, Central Province',
    description: 'A Buddhist temple housing the relic of the tooth of the Buddha, one of the most sacred places of worship in the Buddhist world.',
    history: 'The temple was built in the 16th century as part of the royal palace complex when Kandy became the capital. The tooth relic arrived in Sri Lanka in the 4th century CE, hidden in the hair of a princess. The temple has been a site of pilgrimage for centuries and plays a crucial role in Sri Lankan Buddhism.',
    legends: [
      'The tooth relic is believed to have been taken from the Buddha\'s funeral pyre in 543 BCE and was brought to Sri Lanka in 371 CE.',
      'According to tradition, whoever possesses the tooth relic has the right to rule the country.',
      'The annual Esala Perahera, one of Asia\'s most magnificent festivals, celebrates the tooth relic with a grand procession featuring dancers, drummers, and decorated elephants.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1624127463126-670bb7939273?w=800',
    coordinates: { latitude: 7.2937, longitude: 80.6411 },
    category: 'temple'
  },
  {
    id: '3',
    name: 'Ancient City of Anuradhapura',
    nameEn: 'Ancient City of Anuradhapura',
    nameSi: 'අනුරාධපුරය',
    location: 'North Central Province',
    description: 'The first established capital of ancient Sri Lanka, a sacred city with magnificent stupas, monasteries, and the sacred Bodhi Tree.',
    history: 'Founded in the 4th century BCE, Anuradhapura was the capital for over 1,400 years. It became one of the most stable and durable centers of political power and urban life in South Asia. The city was home to sophisticated irrigation systems, massive stupas, and served as the center of Theravada Buddhism.',
    legends: [
      'The Sri Maha Bodhi tree is the oldest historically documented tree in the world, planted in 288 BCE from a cutting of the tree under which Buddha attained enlightenment.',
      'The Ruwanwelisaya stupa was built by King Dutugemunu and is said to contain relics of the Buddha. Legend says the king supervised its construction from his deathbed.',
      'The Jetavanarama stupa was once the third tallest structure in the ancient world, and one brick from it could fill a modern cargo truck.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1587474604006-67482f4c3b2f?w=800',
    coordinates: { latitude: 8.3114, longitude: 80.4037 },
    category: 'ancient-city'
  },
  {
    id: '4',
    name: 'Galle Dutch Fort',
    nameEn: 'Galle Dutch Fort',
    nameSi: 'ගාල්ල කොටුව',
    location: 'Galle, Southern Province',
    description: 'A fortified city built by the Portuguese and extensively fortified by the Dutch, showcasing European architecture in a South Asian context.',
    history: 'Built by the Portuguese in 1588, the fort was extensively fortified by the Dutch during the 17th century. It demonstrates the interaction between European architectural styles and South Asian traditions. The fort is a UNESCO World Heritage Site and still has a vibrant community living within its walls.',
    legends: [
      'The fort\'s massive walls protected it from the 2004 tsunami, saving hundreds of lives while the areas outside were devastated.',
      'The Dutch built a sophisticated drainage system that still functions today, keeping the fort dry during monsoons.',
      'The lighthouse at the fort\'s edge has guided ships safely for over 150 years and is one of the oldest in Sri Lanka.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1580709196676-e302c70e4c5e?w=800',
    coordinates: { latitude: 6.0262, longitude: 80.2170 },
    category: 'fortress'
  },
  {
    id: '5',
    name: 'Dambulla Cave Temple',
    nameEn: 'Dambulla Cave Temple',
    nameSi: 'දඹුල්ල ගුහා විහාරය',
    location: 'Dambulla, Central Province',
    description: 'The largest and best-preserved cave temple complex in Sri Lanka, with stunning Buddha statues and ancient murals.',
    history: 'Dating back to the 1st century BCE, this cave monastery has been a sacred pilgrimage site for 22 centuries. King Valagamba took refuge here in the 1st century BCE, and later transformed the caves into temples. The complex contains over 150 Buddha statues and 2,100 square meters of painted walls and ceilings.',
    legends: [
      'King Valagamba hid in these caves when driven out of Anuradhapura by Tamil invaders. When he reclaimed his throne, he built the magnificent temple in gratitude.',
      'The golden Buddha statue in the first cave is said to have been covered in gold leaf by a queen who used her entire dowry for this purpose.',
      'Water drips from the ceiling into a pot in one cave, flowing upwards defying gravity - a phenomenon still unexplained.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1608834976681-e2b0b5dfe8d1?w=800',
    coordinates: { latitude: 7.8567, longitude: 80.6489 },
    category: 'temple'
  },
  {
    id: '6',
    name: 'Adam\'s Peak (Sri Pada)',
    nameEn: 'Adam\'s Peak',
    nameSi: 'ශ්‍රී පාදය',
    location: 'Sabaragamuwa Province',
    description: 'A sacred mountain with a footprint-shaped mark at the summit, revered by multiple religions.',
    history: 'This 2,243-meter peak has been a pilgrimage site for over 1,000 years. The "footprint" at the summit is sacred to Buddhists (as Buddha\'s footprint), Hindus (Shiva), Muslims (Adam), and Christians (St. Thomas). The pilgrimage season runs from December to May when thousands climb the 5,500 steps during the night to reach the summit at sunrise.',
    legends: [
      'Buddhists believe Buddha visited this mountain and left his footprint on his third visit to Sri Lanka.',
      'Muslims believe Adam first set foot on Earth here after being exiled from paradise.',
      'The mountain casts a perfect triangular shadow at sunrise, a natural phenomenon that pilgrims consider sacred.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1594501508037-d5cf2a6f6c12?w=800',
    coordinates: { latitude: 6.8095, longitude: 80.4989 },
    category: 'natural'
  }
];
