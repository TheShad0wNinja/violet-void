const artists = [
  {
    name: "Chun Lo",
    handle: "belgeist",
    profilePic:
      "https://cdnb.artstation.com/p/users/avatars/000/002/295/large/25d34b3bcf966aadf0d9e5e08fc2bc3e.jpg?1437762114",
    art: "https://cdnb.artstation.com/p/assets/images/images/010/099/811/large/chun-lo-venom.jpg?1522588103",
    game: "Marvel Rivals"
  },
  {
    name: "Chun Lo",
    handle: "belgeist",
    profilePic:
      "https://cdnb.artstation.com/p/users/avatars/000/002/295/large/25d34b3bcf966aadf0d9e5e08fc2bc3e.jpg?1437762114",
    art: "https://pbs.twimg.com/media/GiVjcuNXcAA9xdM?format=jpg&name=large",
    game: "Marvel Rivals"
  },
  {
    name: "Chick L",
    handle: "CHICK_LLL",
    profilePic: "https://pbs.twimg.com/profile_images/1877047310053781504/ISfypusy_400x400.jpg",
    art: "https://pbs.twimg.com/media/GhalvzMboAAOMyi?format=jpg&name=large",
    game: "Dead Cells"
  },
  {
    name: "Whitewoodawake",
    handle: "teachmedraw",
    profilePic: "https://pbs.twimg.com/profile_images/1835260458963484672/c5Bfc9RS_400x400.jpg",
    art: "https://pbs.twimg.com/media/Gh-7qVjXoAA5aP7?format=jpg&name=large",
    game: "Risk of Rain"
  },
  {
    name: "噪",
    handle: "Hajizomenoise",
    profilePic: "https://pbs.twimg.com/profile_images/1551067658577068032/2c8HsnA8_400x400.png",
    art: "https://pbs.twimg.com/media/Fk01WS0aMAAs4iM?format=jpg&name=4096x4096",
    game: "Sekiro"
  },
  {
    name: "hungry clicker",
    handle: "click_burgundy",
    profilePic: "https://pbs.twimg.com/profile_images/1056400363580907520/463u_b7G_400x400.jpg",
    art: "https://pbs.twimg.com/media/FiVxMwEacAEhQel?format=jpg&name=medium",
    game: "Guilty Gear"
  },
  {
    name: "Creamy Ghost",
    handle: "CreamyGhost",
    profilePic: "https://pbs.twimg.com/profile_images/1532671534816718848/lN86TPHC_400x400.jpg",
    art: "https://pbs.twimg.com/media/Fh7-crZaMAAio76?format=jpg&name=4096x4096",
    game: "Devil May Cry"
  },
  {
    name: "kiki",
    handle: "sky_kiki77",
    profilePic: "https://pbs.twimg.com/profile_images/1030839877674455040/kYqq7kme_400x400.jpg",
    art: "https://pbs.twimg.com/media/Fe3hssFaUAAQCXu?format=jpg&name=large",
    game: "Destiny"
  },
  {
    name: "Jordan Fraser",
    handle: "EldergodFraserA",
    profilePic: "https://pbs.twimg.com/profile_images/1824510836884332544/Lt1GZafY_400x400.jpg",
    art: "https://pbs.twimg.com/media/FLu8-YWXwAAmzpx?format=jpg&name=medium",
    game: "Guilty Gear"
  },
  {
    name: "Toni Infante",
    handle: "toni_infante",
    profilePic: "https://pbs.twimg.com/profile_images/1091484462951608321/jQxZGM-r_400x400.jpg",
    art: "https://pbs.twimg.com/media/FdUrsqnXEAEa_H9?format=jpg&name=medium",
    game: "Devil May Cry"
  },
  {
    name: "荡",
    handle: "Blue_Saden",
    profilePic: "https://pbs.twimg.com/profile_images/1343223218589421568/URi1i3zf_400x400.jpg",
    art: "https://pbs.twimg.com/media/Fb5xL0zVsAAuyj8?format=jpg&name=4096x4096",
    game: "Devil May Cry"
  },
  {
    name: "hungry clicker",
    handle: "click_burgundy",
    profilePic: "https://pbs.twimg.com/profile_images/1056400363580907520/463u_b7G_400x400.jpg",
    art: "https://pbs.twimg.com/media/FZpJLUdacAYV9zg?format=jpg&name=medium",
    game: "Guilty Gear"
  },
  {
    name: "SGKG",
    handle: "sgkg108",
    profilePic: "https://pbs.twimg.com/profile_images/1471035495002132480/xU-Azr96_400x400.jpg",
    art: "https://pbs.twimg.com/media/FZfWiyZX0AAgw17?format=jpg&name=large",
    game: "Cyberpunk 2077"
  },
  {
    name: "Mememellow",
    handle: "MememellowA",
    profilePic: "https://pbs.twimg.com/profile_images/1891080341923803136/gWxAYLz5_400x400.jpg",
    art: "https://pbs.twimg.com/media/GE4UOokWwAAkBue?format=jpg&name=medium",
    game: "Hollow Knight"
  },
  {
    name: "hungry clicker",
    handle: "click_burgundy",
    profilePic: "https://pbs.twimg.com/profile_images/1056400363580907520/463u_b7G_400x400.jpg",
    art: "https://pbs.twimg.com/media/FrCjy-cagAIG_Lf?format=jpg&name=medium",
    game: "Guilty Gear"
  },
  {
    name: "mao",
    handle: "maddestmao",
    profilePic: "https://pbs.twimg.com/profile_images/1742266630196076547/WSVyxlX6_400x400.jpg",
    art: "https://pbs.twimg.com/media/FLCkmWkVQAEGitN?format=jpg&name=large",
    game: "Guilty Gear"
  },
  {
    name: "K-SUWABE",
    handle: "KSUWABE",
    profilePic: "https://pbs.twimg.com/profile_images/1509717492746268684/UbR0X5Xy_400x400.jpg",
    art: "https://pbs.twimg.com/media/FlY1jLjaUAMCGe6?format=jpg&name=medium",
    game: "Overwatch"
  },
  {
    name: "ヌートリ",
    handle: "nutori_manga",
    profilePic: "https://pbs.twimg.com/profile_images/1191212318304002054/PwqKsZNR_400x400.png",
    art: "https://pbs.twimg.com/media/GNGFGcMbAAAtlJQ?format=jpg&name=large",
    game: "NieR Automata"
  },
  {
    name: "K",
    handle: "K34dsds",
    profilePic: "https://pbs.twimg.com/profile_images/1692838482455171072/Ff4_gxv__400x400.jpg",
    art: "https://pbs.twimg.com/media/GM_JadpakAEyZpf?format=jpg&name=medium",
    game: "Dark Souls"
  },
  {
    name: "Morretlin",
    handle: "morretlin",
    profilePic: "https://pbs.twimg.com/profile_images/1900610086080311296/5SJMDa3o_400x400.jpg",
    art: "https://pbs.twimg.com/media/GQXXqyPW8AAtWQg?format=jpg&name=large",
    game: "Hollow Knight"
  },
  {
    name: "Oran",
    handle: "OranCxy",
    profilePic: "https://pbs.twimg.com/profile_images/1729220825021308928/J3nzeErW_400x400.jpg",
    art: "https://pbs.twimg.com/media/GJXnLELbgAAKkED?format=jpg&name=large",
    game: "Valorant"
  },
  {
    name: "MenasLG",
    handle: "MenasLG",
    profilePic: "https://pbs.twimg.com/profile_images/1883341337841356800/BH9_lnmp_400x400.jpg",
    art: "https://pbs.twimg.com/media/GPQIeIMbEAAwGWi?format=jpg&name=medium",
    game: "Dark Souls"
  },
  {
    name: "Void",
    handle: "clockwise8842",
    profilePic: "https://pbs.twimg.com/profile_images/1795840523535613952/UN7ukc46_400x400.jpg",
    art: "https://pbs.twimg.com/media/GO_y5-wXcAAjbGC?format=jpg&name=large",
    game: "Hollow Knight"
  },
  {
    name: "宴",
    handle: "huanyan420112",
    profilePic: "https://pbs.twimg.com/profile_images/1691184892095401984/4lg7u2Oh_400x400.jpg",
    art: "https://pbs.twimg.com/media/GO_iOXdacAA_S-a?format=jpg&name=4096x4096",
    game: "Dark Souls"
  },
  {
    name: "Zoan Luen",
    handle: "ZoanLuen",
    profilePic: "https://pbs.twimg.com/profile_images/1837289750387998720/oNBBFQ2G_400x400.png",
    art: "https://pbs.twimg.com/media/GOOSetjWgAAGY_y?format=jpg&name=4096x4096",
    game: "Hyper Light Drifter"
  },
  {
    name: "Lolipop",
    handle: "Shantysixix",
    profilePic: "https://pbs.twimg.com/profile_images/1755638801274146816/-kF1rwqj_400x400.jpg",
    art: "https://pbs.twimg.com/media/GNPwg7tWkAE7FQy?format=jpg&name=4096x4096",
    game: "Ultrakill"
  },
  {
    name: "Bojler",
    handle: "Bojlero1",
    profilePic: "https://pbs.twimg.com/profile_images/1724908002640076801/k9_61QQT_400x400.jpg",
    art: "https://pbs.twimg.com/media/GV6ysXGXoAAHb3S?format=jpg&name=large",
    game: "Deadlock"
  },
  {
    name: "Caznalt",
    handle: "Caznalt",
    profilePic: "https://pbs.twimg.com/profile_images/1528580158830964736/KXbHOmEa_400x400.jpg",
    art: "https://pbs.twimg.com/media/GXTDZwMbYAAJruK?format=jpg&name=4096x4096",
    game: "Overwatch"
  },
  {
    name: "laeriesann",
    handle: "itsurame",
    profilePic: "https://pbs.twimg.com/profile_images/1807782212848472064/tHVtGgiV_400x400.jpg",
    art: "https://pbs.twimg.com/media/GXS65_kbUAA1GtZ?format=jpg&name=large",
    game: "Valorant"
  },
  {
    name: "Morretlin",
    handle: "morretlin",
    profilePic: "https://pbs.twimg.com/profile_images/1900610086080311296/5SJMDa3o_400x400.jpg",
    art: "https://pbs.twimg.com/media/GW3v3PCWUAA9e5N?format=jpg&name=large",
    game: "Hollow Knight"
  },
  {
    name: "Zoan Luen",
    handle: "ZoanLuen",
    profilePic: "https://pbs.twimg.com/profile_images/1837289750387998720/oNBBFQ2G_400x400.png",
    art: "https://pbs.twimg.com/media/GV1jddrXEAE9mjv?format=jpg&name=large",
    game: "Hyper Light Drifter"
  },
  {
    name: "∆LICE",
    handle: "AliceZaKat",
    profilePic: "https://pbs.twimg.com/profile_images/1902630144055103488/J67IQdh6_400x400.jpg",
    art: "https://pbs.twimg.com/media/GTra85aaQAYK0mN?format=jpg&name=medium",
    game: "Hollow Knight"
  },
  {
    name: "$",
    handle: "chisi74444",
    profilePic: "https://pbs.twimg.com/profile_images/1909317924914884608/KilJHHCk_400x400.jpg",
    art: "https://pbs.twimg.com/media/GYsfwcCawAA2lTF?format=jpg&name=4096x4096",
    game: "Valorant"
  },
  {
    name: "TzzzR",
    handle: "tzzz_r",
    profilePic: "https://pbs.twimg.com/profile_images/1798027175561453568/VU11o6SG_400x400.jpg",
    art: "https://pbs.twimg.com/media/GYKaxJ3aYAEjLPw?format=jpg&name=large",
    game: "Valorant"
  },
  {
    name: "Aiiicy",
    handle: "4957316",
    profilePic: "https://pbs.twimg.com/profile_images/1889004861905317889/nzwaYw7G_400x400.jpg",
    art: "https://pbs.twimg.com/media/GXwgfwDaQAAbK2K?format=jpg&name=large",
    game: "Valorant"
  },
  {
    name: "$",
    handle: "chisi74444",
    profilePic: "https://pbs.twimg.com/profile_images/1909317924914884608/KilJHHCk_400x400.jpg",
    art: "https://pbs.twimg.com/media/GXhzqhSa4AELwHi?format=jpg&name=4096x4096",
    game: "Valorant"
  },
  {
    name: "Oakleaf",
    handle: "stupidgingerman",
    profilePic: "https://pbs.twimg.com/profile_images/1742743726504792064/iiN17ajD_400x400.jpg",
    art: "https://pbs.twimg.com/media/GeJsJwKXEAEQ2Rf?format=jpg&name=large",
    game: "Marvel Rivals"
  },
  {
    name: "MenasLG",
    handle: "MenasLG",
    profilePic: "https://pbs.twimg.com/profile_images/1883341337841356800/BH9_lnmp_400x400.jpg",
    art: "https://pbs.twimg.com/media/GcIjonYXkAAGBwv?format=jpg&name=large",
    game: "Dark Souls"
  },
  {
    name: "Mememellow",
    handle: "MememellowA",
    profilePic: "https://pbs.twimg.com/profile_images/1891080341923803136/gWxAYLz5_400x400.jpg",
    art: "https://pbs.twimg.com/media/GZ4YFAoWkAATK6P?format=jpg&name=large",
    game: "Hollow Knight"
  },
  {
    name: "ARTekin",
    handle: "CakmakTekin",
    profilePic: "https://pbs.twimg.com/profile_images/1839836920710320128/eGgEWFeF_400x400.jpg",
    art: "https://pbs.twimg.com/media/GeUECoIXoAEvAvt?format=jpg&name=large",
    game: "Marvel Rivals"
  },
  {
    name: "LimeHazard",
    handle: "TheLimeHazard",
    profilePic: "https://pbs.twimg.com/profile_images/1904625831508328448/-6h_lwtV_400x400.jpg",
    art: "https://pbs.twimg.com/media/GgtfvfuW4AArR9y?format=jpg&name=4096x4096",
    game: "Marvel Rivals"
  }
];

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export function getArtists() {
  return artists;
}

export function getShuffledArtists() {
  return shuffleArray(artists);
}
