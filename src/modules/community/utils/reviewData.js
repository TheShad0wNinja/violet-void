const reviews = [
  {
    game: "Cyberpunk 2077",
    critics: [
      {
        name: "IGN",
        pic: "https://img.opencritic.com/outlet/56/edZfuPwc.jpg",
        review:
          "Cyberpunk 2077: Phantom Liberty completes an immense turnaround for CD Projekt Red's future RPG kickstarted with the anime spinoff, Cyberpunk: Edgerunners and its latest 2.0 Update.",
        rating: "4.5"
      },
      {
        name: "GameSpot",
        pic: "https://img.opencritic.com/outlet/32/yXf7DyuJ.jpg",
        review:
          "Phantom Liberty embodies the best of Cyberpunk 2077 for a thrilling RPG-shooter with an evocative story, compelling side content, and unforgettable conclusions.",
        rating: "5"
      },
      {
        name: "Game Informer",
        pic: "https://img.opencritic.com/outlet/35/eaPNPgDC.jpg",
        review:
          "While Phantom Liberty doesn't stand head and shoulders above the rest of the Cyberpunk package, it slots in nicely, like a preem piece of cyberware you’ve been waiting to be in stock.",
        rating: "4.5"
      },
      {
        name: "The Gamer",
        pic: "https://img.opencritic.com/outlet/731/Hg7JHFV8.jpg",
        review:
          "That's crucial, because with the 2.0 Update, the game does a lot well. It still isn't an all-time great RPG, but there are fewer hiccups keeping you from enjoying the many things it succeeds at. Phantom Liberty is good, but 2.0 is the rising tide that lifts all boats. It makes Cyberpunk 2077, unambiguously, worth the trip.",
        rating: "4"
      },
      {
        name: "Game Rant",
        pic: "https://img.opencritic.com/outlet/60/Xpi802fv.jpg",
        review:
          "As the capstone project to CD Projekt Red's efforts in fixing Cyberpunk 2077, Phantom Liberty and Update 2.0 see the studio at its best, delivering a story that is emotional, refreshing, and up to the caliber that fans expect from CDPR while also reworking the game into its best and presumably final form. If this is truly the end for Cyberpunk 2077, then we're excited to see where CD Projekt Red goes next with the franchise because it's clear there are more stories to tell in this world, either in Night City or outside of it.",
        rating: "4.5"
      },
      {
        name: "PC Gamer",
        pic: "https://img.opencritic.com/outlet/162/Tzt3P7so.jpg",
        review:
          "Phantom Liberty doesn't reinvent Cyberpunk 2077, but it is CD Projekt firing on all cylinders to tell a great RPG story.",
        rating: "4.5"
      }
    ]
  },
  {
    game: "Elden Ring",
    critics: [
      {
        name: "IGN",
        pic: "https://img.opencritic.com/outlet/56/edZfuPwc.jpg",
        review:
          "Elden Ring is a massive iteration on what FromSoftware began with the Souls series, bringing its relentlessly challenging combat to an incredible open world that gives us the freedom to choose our own path.",
        rating: "5"
      },
      {
        name: "Eurogamer",
        pic: "https://img.opencritic.com/outlet/114/U5o0V4A8.jpg",
        review:
          "Grandiose, mysterious, but now a touch more welcoming, Elden Ring tweaks the FromSoft formula to open up its world.",
        rating: "5"
      },
      {
        name: "Fextralife",
        pic: "https://img.opencritic.com/outlet/501/v1Y40jnJ.jpg",
        review:
          "Elden Ring is FromSoftware's Magnum Opus, and it's hard to imagine them making a better game. The only negatives are performance related, which can by and large be overlooked. Elden Ring delivers on a scale that few games ever have, and likely ever will again. A day one buy for RPG and open world fans. Don't miss out on this once in a decade experience!",
        rating: "5"
      },
      {
        name: "Game Rant",
        pic: "https://img.opencritic.com/outlet/60/Xpi802fv.jpg",
        review:
          "More than an open-world Dark Souls, FromSoftware's Elden Ring offers a new experience that will still feel familiar and satisfying to fans.",
        rating: "5"
      },
      {
        name: "PC Gamer",
        pic: "https://img.opencritic.com/outlet/162/Tzt3P7so.jpg",
        review:
          "An open world action RPG from FromSoftware that reaches new heights, but spends too much time in the familiar.",
        rating: "4.5"
      },
      {
        name: "Game Informer",
        pic: "https://img.opencritic.com/outlet/35/eaPNPgDC.jpg",
        review:
          "Elden Ring represents a truly amazing combination of various game elements that all come together to create something fascinating, special, and unforgettable. Elden Ring isn’t just the best game this year; it’s one of the best games ever made.",
        rating: "5"
      },
      {
        name: "The Gamer",
        pic: "https://img.opencritic.com/outlet/731/Hg7JHFV8.jpg",
        review:
          "FromSoftware doesn’t rewrite the medium’s rulebook, but does tear its own tenets asunder while reconstructing them into a cohesive whole that outclasses all that came before it. The Lands Between invites you to explore it with an unparalleled level of freedom, offering up a plate of seemingly impenetrable challenges and intimately constructed stories that are always a delight to indulge in. This is, without doubt, one of the best games in recent memory.",
        rating: "5"
      },
      {
        name: "GamesRadar+",
        pic: "https://img.opencritic.com/outlet/91/qqIbhWtu.jpg",
        review:
          "Elden Ring is both a refinement and evolution of the Dark Souls formula, presenting an expansive world that's as hostile as it is inviting. Despite the occasional excess, suffering has never been as much fun as this.",
        rating: "5"
      }
    ]
  }
];

export function getReviews() {
  return reviews;
}
