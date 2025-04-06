const discussions = [

    {
        subreddit: 'skyrimmods',
        time: '17 hr ago',
        title: 'I wish the modding community for Skyrim was a bit more friendly...',
        body: `Biggest issue I've noticed is how condescending it gets for beginners.`,
        upvotes: 247,
        comments: 159,
      },
      {
        subreddit: 'skyrimmods',
        time: '3 days ago',
        title: 'VRAM v14 has released!',
        body: `Optimization algorithms tuned. VRAM now excludes x, y...`,
        image:'https://uploads.disquscdn.com/images/dea0235c7218f52474ef3ae1aa992481ca41848de10d213bbd0186e850ececc4.jpg?w=800&h=503',
        upvotes: 210,
        comments: 113,
      },
      {
        subreddit: 'BatmanArkhamKnight',
        time: '3 days ago',
        title: 'Batmans Reign',
        body: 'Batman beat up the Joker so bad he farted at him and made him mad',
        image: 'https://uploads.disquscdn.com/images/fcce8bd08a8498b7f862b3df81e8d3b4b748fc57882f5a00b98a3505981e4c26.jpg?w=800&h=468',
        upvotes: 354,
        comments: 273,
      },
];

export function getDiscussions() {
    return discussions;
}
