// const reviews = [
//   {
//     game: "Cyberpunk 2077",
//     reviews: [
//       {
//         name: "IGN",
//         pic: "https://img.opencritic.com/outlet/56/edZfuPwc.jpg",
//         review:
//           "Cyberpunk 2077: Phantom Liberty completes an immense turnaround for CD Projekt Red's future RPG kickstarted with the anime spinoff, Cyberpunk: Edgerunners and its latest 2.0 Update.",
//         rating: "4.5",
//         official: true
//       },
//       {
//         name: "GameSpot",
//         pic: "https://img.opencritic.com/outlet/32/yXf7DyuJ.jpg",
//         review:
//           "Phantom Liberty embodies the best of Cyberpunk 2077 for a thrilling RPG-shooter with an evocative story, compelling side content, and unforgettable conclusions.",
//         rating: "5",
//         official: true
//       },
//       {
//         name: "Game Informer",
//         pic: "https://img.opencritic.com/outlet/35/eaPNPgDC.jpg",
//         review:
//           "While Phantom Liberty doesn't stand head and shoulders above the rest of the Cyberpunk package, it slots in nicely, like a preem piece of cyberware you’ve been waiting to be in stock.",
//         rating: "4.5",
//         official: true
//       },
//       {
//         name: "The Gamer",
//         pic: "https://img.opencritic.com/outlet/731/Hg7JHFV8.jpg",
//         review:
//           "That's crucial, because with the 2.0 Update, the game does a lot well. It still isn't an all-time great RPG, but there are fewer hiccups keeping you from enjoying the many things it succeeds at. Phantom Liberty is good, but 2.0 is the rising tide that lifts all boats. It makes Cyberpunk 2077, unambiguously, worth the trip.",
//         rating: "4",
//         official: true
//       },
//       {
//         name: "Game Rant",
//         pic: "https://img.opencritic.com/outlet/60/Xpi802fv.jpg",
//         review:
//           "As the capstone project to CD Projekt Red's efforts in fixing Cyberpunk 2077, Phantom Liberty and Update 2.0 see the studio at its best, delivering a story that is emotional, refreshing, and up to the caliber that fans expect from CDPR while also reworking the game into its best and presumably final form. If this is truly the end for Cyberpunk 2077, then we're excited to see where CD Projekt Red goes next with the franchise because it's clear there are more stories to tell in this world, either in Night City or outside of it.",
//         rating: "4.5",
//         official: true
//       },
//       {
//         name: "PC Gamer",
//         pic: "https://img.opencritic.com/outlet/162/Tzt3P7so.jpg",
//         review:
//           "Phantom Liberty doesn't reinvent Cyberpunk 2077, but it is CD Projekt firing on all cylinders to tell a great RPG story.",
//         rating: "4.5",
//         official: true
//       }
//     ]
//   },
//   {
//     game: "Elden Ring",
//     critics: [
//       {
//         name: "IGN",
//         pic: "https://img.opencritic.com/outlet/56/edZfuPwc.jpg",
//         review:
//           "Elden Ring is a massive iteration on what FromSoftware began with the Souls series, bringing its relentlessly challenging combat to an incredible open world that gives us the freedom to choose our own path.",
//         rating: "5",
//         official: true
//       },
//       {
//         name: "Eurogamer",
//         pic: "https://img.opencritic.com/outlet/114/U5o0V4A8.jpg",
//         review:
//           "Grandiose, mysterious, but now a touch more welcoming, Elden Ring tweaks the FromSoft formula to open up its world.",
//         rating: "5",
//         official: true
//       },
//       {
//         name: "Fextralife",
//         pic: "https://img.opencritic.com/outlet/501/v1Y40jnJ.jpg",
//         review:
//           "Elden Ring is FromSoftware's Magnum Opus, and it's hard to imagine them making a better game. The only negatives are performance related, which can by and large be overlooked. Elden Ring delivers on a scale that few games ever have, and likely ever will again. A day one buy for RPG and open world fans. Don't miss out on this once in a decade experience!",
//         rating: "5",
//         official: true
//       },
//       {
//         name: "Game Rant",
//         pic: "https://img.opencritic.com/outlet/60/Xpi802fv.jpg",
//         review:
//           "More than an open-world Dark Souls, FromSoftware's Elden Ring offers a new experience that will still feel familiar and satisfying to fans.",
//         rating: "5",
//         official: true
//       },
//       {
//         name: "PC Gamer",
//         pic: "https://img.opencritic.com/outlet/162/Tzt3P7so.jpg",
//         review:
//           "An open world action RPG from FromSoftware that reaches new heights, but spends too much time in the familiar.",
//         rating: "4.5",
//         official: true
//       },
//       {
//         name: "Game Informer",
//         pic: "https://img.opencritic.com/outlet/35/eaPNPgDC.jpg",
//         review:
//           "Elden Ring represents a truly amazing combination of various game elements that all come together to create something fascinating, special, and unforgettable. Elden Ring isn’t just the best game this year; it’s one of the best games ever made.",
//         rating: "5",
//         official: true
//       },
//       {
//         name: "The Gamer",
//         pic: "https://img.opencritic.com/outlet/731/Hg7JHFV8.jpg",
//         review:
//           "FromSoftware doesn’t rewrite the medium’s rulebook, but does tear its own tenets asunder while reconstructing them into a cohesive whole that outclasses all that came before it. The Lands Between invites you to explore it with an unparalleled level of freedom, offering up a plate of seemingly impenetrable challenges and intimately constructed stories that are always a delight to indulge in. This is, without doubt, one of the best games in recent memory.",
//         rating: "5",
//         official: true
//       },
//       {
//         name: "GamesRadar+",
//         pic: "https://img.opencritic.com/outlet/91/qqIbhWtu.jpg",
//         review:
//           "Elden Ring is both a refinement and evolution of the Dark Souls formula, presenting an expansive world that's as hostile as it is inviting. Despite the occasional excess, suffering has never been as much fun as this.",
//         rating: "5",
//         official: true
//       }
//     ]
//   }
// ];
//
const reviews = [
  {
    title: "The Witcher 3: Wild Hunt",
    official_reviews: [
      {
        source: "IGN",
        avatarUrl: "https://img.opencritic.com/outlet/56/edZfuPwc.jpg",
        score: 5,
        text: "A landmark game that raises the bar for open-world RPGs."
      },
      {
        source: "GameSpot",
        avatarUrl: "https://img.opencritic.com/outlet/32/yXf7DyuJ.jpg",
        score: 4.9,
        text: "A masterpiece of storytelling and world-building."
      }
    ],
    user_reviews: [
      {
        username: "GeraltFan42",
        avatarUrl: "https://api.dicebear.com/9.x/lorelei-neutral/svg?seed=GeraltFan42",
        rating: 5,
        text: "Spent 200 hours playing Gwent instead of saving Ciri. No regrets."
      },
      {
        username: "RoachLover",
        avatarUrl: "https://api.dicebear.com/9.x/lorelei-neutral/svg?seed=RoachLover",
        rating: 4,
        text: "10/10 game, -1 star because my horse keeps spawning on rooftops."
      },
      {
        username: "PamParam",
        avatarUrl: "https://api.dicebear.com/9.x/lorelei-neutral/svg?seed=PamParam",
        rating: 3.2,
        text: "The Bloody Baron quest hit me harder than my last breakup."
      },
      {
        username: "YenneferOrTriss",
        avatarUrl: "https://api.dicebear.com/9.x/lorelei-neutral/svg?seed=YenneferOrTriss",
        rating: 5,
        text: "Game is perfect but now I have commitment issues in real life too."
      }
    ]
  },
  {
    title: "Red Dead Redemption 2",
    official_reviews: [
      {
        source: "GamesRadar+",
        avatarUrl: "https://img.opencritic.com/outlet/91/qqIbhWtu.jpg",
        score: 4.5,
        text: "A stunning technical and artistic achievement."
      },
      {
        source: "Eurogamer",
        avatarUrl: "https://img.opencritic.com/outlet/114/U5o0V4A8.jpg",
        score: 4.7,
        text: "Rockstar's magnum opus - a living, breathing world."
      }
    ],
    user_reviews: [
      {
        username: "ArthurMorganStan",
        avatarUrl: "https://api.dicebear.com/9.x/lorelei-neutral/svg?seed=ArthurMorganStan",
        rating: 4.7,
        text: "I haven't washed my virtual cowboy hat in 3 in-game years."
      },
      {
        username: "HorseFallsALot",
        avatarUrl: "https://api.dicebear.com/9.x/lorelei-neutral/svg?seed=HorseFallsALot",
        rating: 3.4,
        text: "Great story but my horse trips more than a drunk college student."
      },
      {
        username: "LumbagoSufferer",
        avatarUrl: "https://api.dicebear.com/9.x/lorelei-neutral/svg?seed=LumbagoSufferer",
        rating: 4,
        text: "Uncle's lumbago is the most realistic chronic pain depiction in gaming."
      },
      {
        username: "MicahHater",
        avatarUrl: "https://api.dicebear.com/9.x/lorelei-neutral/svg?seed=MicahHater",
        rating: 5,
        text: "I'd give 6 stars if I could shoot Micah in Chapter 1."
      }
    ]
  },
  {
    title: "Cyberpunk 2077",
    official_reviews: [
      {
        source: "PC Gamer",
        avatarUrl: "https://img.opencritic.com/outlet/162/Tzt3P7so.jpg",
        score: 4,
        text: "A flawed but ambitious RPG with incredible world design."
      },
      {
        source: "GameSpot",
        avatarUrl: "https://img.opencritic.com/outlet/32/yXf7DyuJ.jpg",
        score: 4.5,
        text: "The Phantom Liberty expansion finally delivers on the original promise."
      },
      {
        source: "Game Informer",
        avatarUrl: "https://img.opencritic.com/outlet/35/eaPNPgDC.jpg",
        review:
          "While Phantom Liberty doesn't stand head and shoulders above the rest of the Cyberpunk package, it slots in nicely, like a preem piece of cyberware you’ve been waiting to be in stock.",
        score: 4.5
      }
    ],
    user_reviews: [
      {
        username: "ChoomGang",
        avatarUrl: "https://api.dicebear.com/9.x/lorelei-neutral/svg?seed=ChoomGang",
        rating: 5,
        text: "My V has more cyberware than common sense. Zero chrome hesitation."
      },
      {
        username: "PanamSimp",
        avatarUrl: "https://api.dicebear.com/9.x/lorelei-neutral/svg?seed=PanamSimp",
        rating: 5,
        text: "Would let Panam destroy my life 10/10 no questions asked."
      },
      {
        username: "T-Poser",
        avatarUrl: "https://api.dicebear.com/9.x/lorelei-neutral/svg?seed=T-Poser",
        rating: 3,
        text: "Game's good now but I miss the hilarious launch-day glitches."
      },
      {
        username: "KeanuFan",
        avatarUrl: "https://api.dicebear.com/9.x/lorelei-neutral/svg?seed=KeanuFan",
        rating: 5,
        text: "Johnny Silverhand roasted me so hard I cried. Worth every eddie."
      },
      {
        username: "NetrunnerNova",
        avatarUrl: "https://api.dicebear.com/9.x/lorelei-neutral/svg?seed=NetrunnerNova",
        rating: 4,
        text: "Spent 50 hours taking pictures of neon signs instead of doing missions."
      }
    ]
  }
];

export function getReviews() {
  return reviews;
}
