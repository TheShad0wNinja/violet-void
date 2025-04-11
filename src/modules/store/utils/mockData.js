const games = [
  {
    coverImageUrl: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
    bannerImageUrl: "https://cdn2.steamgriddb.com/hero/33e25ce2b801662e46a7b801301d5b94.jpg",
    type: "Base Game",
    title: "The Witcher 3: Wild Hunt",
    price: 59.9
  },
  {
    coverImageUrl: "https://i.redd.it/w44jvkcns8461.png",
    bannerImageUrl: "https://cdn2.steamgriddb.com/hero_thumb/5988319f8fdeb1b2d254a9a38518f52e.jpg",
    type: "Base Game",
    title: "Cyberpunk 2077",
    price: 59.9
  },
  {
    coverImageUrl: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
    bannerImageUrl: "https://cdn2.steamgriddb.com/hero_thumb/33e70269806c88720e2d89ed1d3f1be3.jpg",
    type: "Base Game",
    title: "God of War",
    price: 49.99
  },
  {
    coverImageUrl:
      "https://assets.vg247.com/current//2018/05/red_dead_redemption_2_cover_art_1.jpg",
    bannerImageUrl: "https://cdn2.steamgriddb.com/hero_thumb/964e7520947a0d3ac39504daea604d83.jpg",
    type: "Base Game",
    title: "Red Dead Redemption 2",
    price: 39.99
  },
  {
    coverImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
    bannerImageUrl: "https://cdn2.steamgriddb.com/hero_thumb/71d1c0c06e1ab5049644acb5cc69a090.jpg",
    type: "Base Game",
    title: "The Legend of Zelda: Breath of the Wild",
    price: 54.99
  },
  {
    coverImageUrl:
      "https://cdn-images.dzcdn.net/images/cover/8b582bebc9f1fd2ac0a7ced8271fc68f/0x1900-000000-80-0-0.jpg",
    bannerImageUrl: " https://cdn2.steamgriddb.com/hero_thumb/0c239762d3a80dad4458be9d4540ba95.jpg",
    type: "Base Game",
    title: "Elden Ring",
    price: 59.99
  },
  {
    coverImageUrl:
      "https://media.wired.com/photOs/5f6cf5ec6f32a729dc0b3a89/master/w_1600%2Cc_limit/Culture_inline_Hades_PackArt.jpg",
    bannerImageUrl: "https://cdn2.steamgriddb.com/hero_thumb/ca2fb9274851370321bfa0017a5cc0d8.jpg",
    type: "Base Game",
    title: "Hades",
    price: 29.99
  },
  {
    coverImageUrl:
      "https://cdn.mobygames.com/covers/11199918-persona-5-royal-windows-apps-front-cover.jpg",
    bannerImageUrl: "https://cdn2.steamgriddb.com/hero_thumb/a45613e8740e38fe7d019d79fbf8712b.jpg",
    type: "Base Game",
    title: "Persona 5 Royal",
    price: 49.99
  },
  {
    coverImageUrl:
      "https://www.cnet.com/a/img/resize/2b05dadb6d20f076c3c07aeebeaf5028b8b8fe75/hub/2019/11/21/19db7c73-c881-4bd4-bf96-8c2174feff67/box-art-flat.png?auto=webp&width=1200",
    bannerImageUrl: "https://cdn2.steamgriddb.com/hero_thumb/17e26f45b3daec2660dc407d326276cf.jpg",
    type: "Base Game",
    title: "Half-Life: Alyx",
    price: 59.99
  },
  {
    coverImageUrl: "https://upload.wikimedia.org/wikipedia/en/2/22/Death_Stranding.jpg",
    bannerImageUrl: "https://cdn2.steamgriddb.com/hero_thumb/c81e728d9d4c2f636f067f89cc14862c.jpg",
    type: "Base Game",
    title: "Death Stranding",
    price: 34.99
  },
  {
    coverImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/de/Cyberpunk_2077_Phantom_Liberty_cover_art.jpg",
    bannerImageUrl: "https://cdn2.steamgriddb.com/hero_thumb/0969564c18cf69fb6b4182f0f56e83bf.jpg",
    type: "DLC",
    title: "Cyberpunk 2077: Phantom Liberty",
    price: 19.99
  }
];

const GameRanking = [
  {
    coverImageUrl: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
    bannerImageUrl: "https://cdn2.steamgriddb.com/hero/33e25ce2b801662e46a7b801301d5b94.jpg",
    type: "Base Game",
    ranking: "1",
    title: "The Witcher 3: Wild Hunt",
    price: 59.9
  },
  {
    coverImageUrl: "https://i.redd.it/w44jvkcns8461.png",
    bannerImageUrl: "https://cdn2.steamgriddb.com/hero_thumb/5988319f8fdeb1b2d254a9a38518f52e.jpg",
    type: "Base Game",
    ranking: "2",
    title: "Cyberpunk 2077",
    price: 59.9
  },
  {
    coverImageUrl: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
    bannerImageUrl: "https://cdn2.steamgriddb.com/hero_thumb/33e70269806c88720e2d89ed1d3f1be3.jpg",
    type: "Base Game",
    ranking: "3",
    title: "God of War",
    price: 49.99
  },
  {
    coverImageUrl: "https://upload.wikimedia.org/wikipedia/en/2/22/Death_Stranding.jpg",
    bannerImageUrl: "https://cdn2.steamgriddb.com/hero_thumb/c81e728d9d4c2f636f067f89cc14862c.jpg",
    type: "Base Game",
    ranking: "4",

    title: "Death Stranding",
    price: 34.99
  }
];

const gamesPageData = [
  {
    id: 101,
    name: "Cyber Nexus Odyssey",
    rating: 8.4,
    price: 59.99,
    discount: 20,
    platforms: ["PC", "PlayStation 5", "Xbox Series X"],
    releaseDate: "2023-11-15",
    releaseYear: 2023,
    developer: "Neon Giant StudiOs",
    publisher: "Digital Horizon Interactive",
    metacriticScore: 78,
    similarGames: ["Cyberpunk 2077", "Deus Ex: Mankind Divided"],
    tags: ["RPG", "Open World", "Cyberpunk", "Action", "Singleplayer"],
    gameFeatures: [
      "Multiplayer",
      "CrOss-play",
      "Crafting",
      "Stealth Mechanics",
      "Dynamic Weather",
      "Player Choices Matter"
    ],
    description: "An open-world action RPG set in a dystopian cyberpunk future.",
    detailedDescription:
      "Explore a vast cyberpunk city filled with intrigue and danger in this deep narrative RPG with branching storylines and revolutionary gameplay mechanics.",
    images: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    requirements: {
      minimum: {
        Os: "Windows 10 64-bit",
        processor: "Intel Core i5-4460",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 960"
      },
      recommended: {
        Os: "Windows 10/11 64-bit",
        processor: "Intel Core i7-8700K",
        memory: "16 GB RAM",
        graphics: "NVIDIA RTX 2060"
      }
    },
    dlcs: [
      {
        id: 1011,
        name: "Neon Underground",
        price: 14.99,
        image:
          "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      },
      {
        id: 1012,
        name: "Cyber Samurai Pack",
        price: 4.99,
        image:
          "https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      }
    ],
    ageRating: "Mature 17+",
    playersAmount: "1-4"
  },
  {
    id: 102,
    name: "Elden Realms",
    rating: 9.2,
    price: 49.99,
    discount: 10,
    platforms: ["PC", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X"],
    releaseDate: "2022-02-25",
    releaseYear: 2022,
    developer: "FromSoftware",
    publisher: "Bandai Namco",
    metacriticScore: 94,
    similarGames: ["Cyberpunk 2077", "Deus Ex: Mankind Divided"],
    tags: ["RPG", "Souls-like", "Fantasy", "Difficult", "Multiplayer"],
    gameFeatures: ["Multiplayer", "Co-op", "Stealth Mechanics", "Player Choices Matter"],
    description: "A challenging open-world fantasy RPG with deep combat mechanics.",
    detailedDescription:
      "Journey through the Lands Between, a world of vast landscapes and ominous dungeons. Encounter adversaries with profound backgrounds and meet characters with their own motivations.",
    images: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a044?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1193&q=80",
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    requirements: {
      minimum: {
        Os: "Windows 10",
        processor: "Intel Core i5-8400",
        memory: "12 GB RAM",
        graphics: "NVIDIA GTX 1060"
      },
      recommended: {
        Os: "Windows 10/11",
        processor: "Intel Core i7-8700K",
        memory: "16 GB RAM",
        graphics: "NVIDIA RTX 2070"
      }
    },
    dlcs: [
      {
        id: 1021,
        name: "Shadow of the Erdtree",
        price: 19.99,
        image:
          "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      }
    ],
    ageRating: "Mature 17+",
    playersAmount: "1-2"
  },
  {
    id: 103,
    name: "Starfleet Command",
    rating: 7.8,
    price: 39.99,
    discount: 30,
    platforms: ["PC", "PlayStation 5", "Xbox Series X"],
    releaseDate: "2023-05-18",
    releaseYear: 2023,
    developer: "Quantum Games",
    publisher: "Universal Interactive",
    metacriticScore: 82,
    similarGames: ["Cyberpunk 2077", "Deus Ex: Mankind Divided"],
    tags: ["Strategy", "Space", "Simulation", "Multiplayer", "Sci-fi"],
    gameFeatures: ["Multiplayer", "Co-op", "PvP", "Space Exploration", "Fleet Management"],
    description: "Command your own starship in this epic space strategy game.",
    detailedDescription:
      "Take control of a massive starship and its crew as you explore unknown sectors of space, engage in tactical combat, and make decisions that affect the fate of your crew and the galaxy.",
    images: [
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1211&q=80",
      "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
      "https://images.unsplash.com/photo-1501862700950-18382cd41497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1179&q=80"
    ],
    requirements: {
      minimum: {
        Os: "Windows 10",
        processor: "Intel Core i5-6500",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 970"
      },
      recommended: {
        Os: "Windows 10/11",
        processor: "Intel Core i7-9700K",
        memory: "16 GB RAM",
        graphics: "NVIDIA RTX 2060"
      }
    },
    dlcs: [
      {
        id: 1031,
        name: "Klingon Armada",
        price: 12.99,
        image:
          "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
      },
      {
        id: 1032,
        name: "Borg Invasion",
        price: 14.99,
        image:
          "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      }
    ],
    ageRating: "Teen",
    playersAmount: "1-4"
  }
];

// Example similar games data with actual images
const similarGamesData = [
  {
    id: 201,
    name: "Cyberpunk 2077",
    price: 49.99,
    rating: 7.9,
    image:
      "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 202,
    name: "Deus Ex: Mankind Divided",
    price: 19.99,
    rating: 8.1,
    image:
      "https://images.unsplash.com/photo-1562976540-1502c2145186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 203,
    name: "The Ascent",
    price: 29.99,
    rating: 7.5,
    image:
      "https://images.unsplash.com/photo-1638549811659-19eab16a1e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }
];

const gamingProfiles = [
  {
    id: 1,
    profile: {
      name: "AetherGamer99",
      email: "aethergamer99@example.com",
      password: "hashed_secure_password_1",
      avatar: "https://i.imgur.com/J6LX7XK.png",
      coverImage: "https://i.imgur.com/5m4h5zW.jpg",
      gamesPlayed: 147,
      badges: 23,
      level: 47,
      lastOnline: "3 hours ago",
      totalHours: 1284,
      stats: {
        achievements: 327,
        favoriteGenre: "RPG",
        currentStreak: 7,
        longestSession: {
          game: "Cyber Odyssey 2077",
          hours: 14.5
        }
      }
    },
    friends: [
      {
        id: 101,
        username: "ShadowHunter42",
        status: "Online now",
        avatar: "https://i.imgur.com/3ZqX9Xp.png"
      },
      {
        id: 102,
        username: "PixelPirate",
        status: "Online 15m ago",
        avatar: "https://i.imgur.com/4QZ9X9p.png"
      }
    ],
    recentlyPlayed: [
      {
        id: 1001,
        title: "Cyber Odyssey 2077",
        hours: 58,
        lastPlayed: "Today",
        price: 59.99,
        coverImageUrl: "https://i.imgur.com/K3mPv14.png"
      },
      {
        id: 1002,
        title: "Cyber Odyssey5 2077",
        hours: 585,
        lastPlayed: "To5day",
        price: 59.599,
        coverImageUrl: "https://i.imgur.com/K3mPv14.png"
      }
    ],
    wishlist: [
      {
        id: 1003,
        title: "Elden Ring",
        price: 59.99,
        coverImageUrl: "https://i.imgur.com/P6mPv64.png",
        releaseDate: "2022-02-25",
        isOnSale: false,
        ranking: 1
      },
      {
        id: 1004,
        title: "Starfield",
        price: 69.99,
        coverImageUrl: "https://i.imgur.com/Q7mPv74.png",
        releaseDate: "2023-09-06",
        isOnSale: true,
        discount: 15,
        ranking: 2
      },
      {
        id: 1005,
        title: "Starfield",
        price: 69.99,
        coverImageUrl: "https://i.imgur.com/Q7mPv74.png",
        releaseDate: "2023-09-06",
        isOnSale: true,
        discount: 15,
        ranking: 3
      }
    ]
  },
  {
    id: 2,
    profile: {
      name: "NeonNinja",
      email: "neonninja@example.com",
      password: "hashed_secure_password_2",
      avatar: "https://i.imgur.com/6n7X9Xp.png",
      coverImage: "https://i.imgur.com/X2mPv14.jpg",
      gamesPlayed: 89,
      badges: 15,
      level: 32,
      lastOnline: "1 hour ago",
      totalHours: 756,
      stats: {
        achievements: 215,
        favoriteGenre: "FPS",
        currentStreak: 12,
        longestSession: {
          game: "Stellar Conquest",
          hours: 10.2
        }
      }
    },
    friends: [
      {
        id: 201,
        username: "QuantumQueen",
        status: "Online",
        avatar: "https://i.imgur.com/5m4h5zW.png"
      },
      {
        id: 202,
        username: "AetherGamer99",
        status: "3 hours ago",
        avatar: "https://i.imgur.com/J6LX7XK.png"
      }
    ],
    recentlyPlayed: [
      {
        id: 2001,
        title: "Stellar Conquest",
        hours: 112,
        lastPlayed: "Today",
        price: 49.99,
        coverImageUrl: "https://i.imgur.com/Y3mPv24.png"
      }
    ],
    wishlist: [
      {
        id: 2002,
        title: "Cyberpunk 2077: Phantom Liberty",
        price: 29.99,
        coverImageUrl: "https://i.imgur.com/R8mPv84.png",
        releaseDate: "2023-09-26",
        isOnSale: false,
        ranking: 1
      },
      {
        id: 2003,
        title: "Hogwarts Legacy",
        price: 59.99,
        coverImageUrl: "https://i.imgur.com/S9mPv94.png",
        releaseDate: "2023-02-10",
        isOnSale: false,
        ranking: 2,
        discount: 20
      }
    ]
  },
  {
    id: 3,
    profile: {
      name: "PixelPirate",
      email: "pixelpirate@example.com",
      password: "hashed_secure_password_3",
      avatar: "https://i.imgur.com/4QZ9X9p.png",
      coverImage: "https://i.imgur.com/Z4mPv34.jpg",
      gamesPlayed: 203,
      badges: 37,
      level: 58,
      lastOnline: "Online now",
      totalHours: 1842,
      stats: {
        achievements: 512,
        favoriteGenre: "Adventure",
        currentStreak: 21,
        longestSession: {
          game: "Ancient Empires",
          hours: 18.7
        }
      }
    },
    friends: [
      {
        id: 301,
        username: "FrostByte",
        status: "2 hours ago",
        avatar: "https://i.imgur.com/7m8X9Xp.png"
      },
      {
        id: 302,
        username: "AetherGamer99",
        status: "3 hours ago",
        avatar: "https://i.imgur.com/J6LX7XK.png"
      }
    ],
    recentlyPlayed: [
      {
        id: 3001,
        title: "Pixel Dungeon",
        hours: 247,
        lastPlayed: "Today",
        price: 19.99,
        coverImageUrl: "https://i.imgur.com/O5mPv54.png"
      }
    ],
    wishlist: [
      {
        id: 3002,
        title: "The Legend of Zelda: Tears of the Kingdom",
        price: 69.99,
        ranking: 1,
        coverImageUrl: "https://i.imgur.com/T0mPv04.png",
        releaseDate: "2023-05-12",
        isOnSale: false
      },
      {
        id: 3003,
        title: "Final Fantasy XVI",
        price: 69.99,
        coverImageUrl: "https://i.imgur.com/U1mPv14.png",
        releaseDate: "2023-06-22",
        isOnSale: true,
        ranking: 2,
        discount: 10
      },
      {
        id: 3004,
        title: "Final Fantasy XVI",
        price: 69.99,
        coverImageUrl: "https://i.imgur.com/U1mPv14.png",
        releaseDate: "2023-06-22",
        isOnSale: true,
        ranking: 3,
        discount: 10
      }
    ]
  }
];

export default gamingProfiles;
export function getGamesList() {
  return games;
}

export function getGamesPageData() {
  return gamesPageData;
}
export function getRankingGamesList() {
  return GameRanking;
}
export function getSimilarGamesData() {
  return similarGamesData;
}
export function getGamingProfiles() {
  return gamingProfiles;
}
