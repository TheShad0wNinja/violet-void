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
      "https://media.wired.com/photos/5f6cf5ec6f32a729dc0b3a89/master/w_1600%2Cc_limit/Culture_inline_Hades_PackArt.jpg",
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

export function getGamesList() {
  return games;
}
