import { Container, Divider, Title } from "@modules/_shared/App";
import { getShuffledArtists } from "../utils/mockUserData";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const artists = getShuffledArtists();
const getRatio = url =>
  new Promise(resolve => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(img.naturalWidth / img.naturalHeight);
    img.onerror = () => resolve(1);
  });

export default function ArtworkPage() {
  const [ratios, setRatios] = useState({});
  const [artistHover, setArtistHover] = useState({});

  useEffect(() => {
    Promise.all(artists.map(async artist => [artist.art, await getRatio(artist.art)])).then(data =>
      setRatios(Object.fromEntries(data))
    );
  }, []);

  return (
    <>
      <Container>
        <Title>Artwork</Title>
        <Divider direction="center" className="mt-1 mb-4" />
        <div className="grid grid-flow-dense auto-rows-auto gap-4 sm:grid-cols-3 md:grid-cols-5 2xl:grid-cols-7">
          {artists.map((artist, index) => {
            const isPortrait = ratios[artist.art] < 0.8;
            const isLandscape = ratios[artist.art] > 1.1;

            let className = "";
            if (Object.keys(ratios).length !== 0)
              className = `${isPortrait ? "col-span-1 row-span-2" : isLandscape ? "col-span-2 row-span-1" : "col-span-1 row-span-1"}`;

            return (
              <motion.div
                className={`bg-accent-900 border-accent-900 hover:border-secondary-500 relative max-h-fit max-w-fit cursor-pointer overflow-hidden rounded-2xl border-2 ${className}`}
                key={artist.art}
                onMouseEnter={() => setArtistHover(index)}
                onMouseLeave={() => setArtistHover(null)}
                initial={{ opacity: 0, y: "100%" }}
                whileInView={{ opacity: 1, y: "0" }}
                transition={{
                  duration: 0.5,
                  ease: "easeIn",
                  type: "tween",
                  delay: 0.1 * (index % 5)
                }}
                viewport={{ once: true, margin: "0% 0px 40% 0px" }}
              >
                <img
                  src={artist.art}
                  alt={artist.game + " by " + artist.name}
                  className="h-full w-full object-cover"
                />
                <div
                  className={`bg-secondary-500 absolute inset-x-0 bottom-0 z-10 flex items-center gap-3 p-3 transition-transform duration-200 ease-in sm:translate-y-0 ${artistHover === index ? "md:translate-y-0" : "md:translate-y-full"}`}
                >
                  <img className="h-12 w-12 rounded-full" src={artist.profilePic} />
                  <div className="flex flex-col">
                    <span className="font-medium">{artist.name}</span>
                    <span className="bg-accent-400 w-min rounded-2xl px-2 py-0.5 text-sm">
                      {"@" + artist.handle}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </>
  );
}
