export default games = [
  {
    id: 1,
    title: 'Grand Theft Auto V',
    teaser:
      'An action-adventure game developed by Rockstar North and published by Rockstar Games.',
    description:
      'Running out of options, the crew risks everything in a series of daring and dangerous heists that could set them up for life. Nine years after a failed robbery in the fictional town of Ludendorff, North Yankton, former bank robber Michael Townley and his family have relocated to Los Santos under a new identity.',
    rating: 4.8,
    category: ['Action', 'Adventure'],
    age: '17+',
    cover: require('../assets/games/GTA-V-main.jpg'),
    screenshots: [
      require('../assets/games/scr01.jpg'),
      require('../assets/games/scr02.jpg'),
      require('../assets/games/sc03.jpg'),
    ],
    backgroundColor: '#824571',
  },
  {
    id: 2,
    title: 'Arma 3',
    teaser:
      'ARMA 3 is an open-world, realism-based, military tactical shooter video game developed',
    description:
      'ARMA 3 takes place in the mid-2030s, on the islands of Altis and Stratis in the Aegean Sea, and the South Pacific island of Tanoa. The islands feature photo-realistic terrain and water environments. ',
    rating: 4.1,
    category: ['Strategy', 'Action', 'Simulation', 'Multiplayer'],
    age: '13+',
    cover: require('../assets/games/arma3.jpg'),
    screenshots: [
      require('../assets/games/sc04.jpg'),
      require('../assets/games/sc05.jpg'),
    ],
    backgroundColor: '#456382',
  },
  {
    id: 3,
    title: 'FIFA 20',
    teaser:
      'Enjoy more control over the Decisive Moments that determine the outcome of every match in FIFA 20.',
    description:
      'FIFA 20 is a football simulation video game published by Electronic Arts as part of the FIFA series.',
    rating: 2.4,
    category: ['Sports', 'Simulation', 'Multiplayer'],
    age: '13+',
    cover: require('../assets/games/fifa20.jpg'),
    screenshots: [
      require('../assets/games/sc07.jpg'),
      require('../assets/games/sc06.jpg'),
    ],
    backgroundColor: '#161D23',
  },
  {
    id: 4,
    title: 'Cities: Skyline',
    teaser: 'Cities: Skylines is a modern take on the classic city simulation.',
    description:
      'The game is a single-player open-ended city-building simulation. Players engage in urban planning by controlling zoning, road placement, taxation, public services, and public transportation of an area',
    rating: 2.4,
    category: ['Simulation', 'Casual', 'Strategy'],
    age: '13+',
    cover: require('../assets/games/cities.jpg'),
    screenshots: [require('../assets/games/sc8.jpg')],
    backgroundColor: '#45c8e4',
  },
];
