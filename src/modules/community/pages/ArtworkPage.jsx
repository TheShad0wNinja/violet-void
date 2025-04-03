import { Container, Divider, Title } from "@modules/_shared/App";
import { getArtists } from "../utils/mockUserData";
import { useEffect, useState } from "react";
import MoreButton from "../components/MoreButton";

import AOS from "aos";
import "aos/dist/aos.css";

const artists = getArtists();
const getRatio = url =>
  new Promise(resolve => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(img.naturalWidth / img.naturalHeight);
    // img.onload = () => resolve({width: img.naturalWidth, height:img.naturalHeight})
    img.onerror = () => resolve(1);
  });

export default function ArtworkPage() {
  const [ratios, setRatios] = useState({});

  useEffect(() => {
    Promise.all(artists.map(async artist => [artist.art, await getRatio(artist.art)])).then(data =>
      setRatios(Object.fromEntries(data))
    );

    AOS.init();
  }, []);

  console.log(ratios);

  return (
    <>
      <Container>
        <div className="flex flex-nowrap items-center justify-between">
          <Title>Artwork</Title>
          <MoreButton to="artwork" />
        </div>
        <Divider direction="center" className="mt-1 mb-4" />
        <div className="grid grid-flow-dense auto-rows-auto grid-cols-5 gap-4">
          {artists.map((artist, index) => {
            const isPortrait = ratios[artist.art] < 0.8;
            const isLandscape = ratios[artist.art] > 1.2;

            let className = "";
            if (Object.keys(ratios).length !== 0)
              className = `${isPortrait ? "col-span-1 row-span-2" : isLandscape ? "col-span-2 row-span-1" : "col-span-1 row-span-1"}`;

            return (
              <div
                className={ `bg-accent-900 relative max-h-fit max-w-fit overflow-hidden rounded-2xl ${className}` }
                key={artist.art}
                // data-aos="fade-up" 
                // data-aos-delay={100 * index}
              >
                <img
                  src={artist.art}
                  alt={artist.game + " by " + artist.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 z-10 bg-accent flex items-center gap-3 p-3">
                  <img className="h-12 w-12 rounded-full" src={artist.profilePic} />
                  <div className="flex flex-col">
                    <span className="font-medium">{artist.name}</span>
                    <span className="bg-accent-600 rounded-2xl px-2 py-0.5 text-sm">
                      {"@" + artist.handle}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}
