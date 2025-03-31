const games = [
    {
        coverImageUrl: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
        type: "Base Game",
        title: "The Witcher 3: Wild Hunt",
        price: 59.9
    },
    {
        coverImageUrl: "https://i.redd.it/w44jvkcns8461.png",
        type: "Base Game",
        title: "Cyberpunk 2077",
        price: 59.9
    },
    {
        coverImageUrl: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
        type: "Base Game",
        title: "God of War",
        price: 49.99
    },
    {
        coverImageUrl: "https://assets.vg247.com/current//2018/05/red_dead_redemption_2_cover_art_1.jpg",
        type: "Base Game",
        title: "Red Dead Redemption 2",
        price: 39.99
    },
    {
        coverImageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
        type: "Base Game",
        title: "The Legend of Zelda: Breath of the Wild",
        price: 54.99
    },
    {
        coverImageUrl: "https://cdn-images.dzcdn.net/images/cover/8b582bebc9f1fd2ac0a7ced8271fc68f/0x1900-000000-80-0-0.jpg",
        type: "Base Game",
        title: "Elden Ring",
        price: 59.99
    },
    {
        coverImageUrl: "https://media.wired.com/photos/5f6cf5ec6f32a729dc0b3a89/master/w_1600%2Cc_limit/Culture_inline_Hades_PackArt.jpg",
        type: "Base Game",
        title: "Hades",
        price: 29.99
    },
    {
        coverImageUrl: "https://cdn.mobygames.com/covers/11199918-persona-5-royal-windows-apps-front-cover.jpg",
        type: "Base Game",
        title: "Persona 5 Royal",
        price: 49.99
    },
    {
        coverImageUrl: "https://www.cnet.com/a/img/resize/2b05dadb6d20f076c3c07aeebeaf5028b8b8fe75/hub/2019/11/21/19db7c73-c881-4bd4-bf96-8c2174feff67/box-art-flat.png?auto=webp&width=1200",
        type: "Base Game",
        title: "Half-Life: Alyx",
        price: 59.99
    },
    {
        coverImageUrl: "https://upload.wikimedia.org/wikipedia/en/2/22/Death_Stranding.jpg",
        type: "Base Game",
        title: "Death Stranding",
        price: 34.99
    },
    {
        coverImageUrl: "https://upload.wikimedia.org/wikipedia/en/d/de/Cyberpunk_2077_Phantom_Liberty_cover_art.jpg",
        type: "DLC",
        title: "Cyberpunk 2077: Phantom Liberty",
        price: 19.99
    }
]

export function getGamesList() {
    return games;
}