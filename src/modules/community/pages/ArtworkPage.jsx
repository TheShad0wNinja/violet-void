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
    img.onload = () => resolve(img.naturalWidth / img.naturalHeight);
    img.onerror = () => resolve(1);
    img.src = url;
  });
export default function ArtworkPage() {
  const [ratios, setRatios] = useState({});
  useEffect(() => {
    async () =>
      setRatios(
        Object.fromEntries(
          await Promise.all(artists.map(async artist => [artist.art, await getRatio(artist.art)]))
        )
      );
    AOS.init();
  }, []);

  return (
    <>
      <div className="flex">
        <Title>Artwork</Title>
        <MoreButton to="artwork" />
      </div>
      <Divider direction="center" className="my-5"></Divider>
      <Container className="flex flex-wrap gap-8">
        {artists.map((artist, index) => (
          <div
            className="bg-accent-900 max-h-fit max-w-fit overflow-hidden rounded-4xl"
            key={artist.art}
            id={"art" + index++}
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-anchor={index == 1 ? "" : "#art" + (index - 2)}
          >
            <img
              src={artist.art}
              alt={artist.game + " by " + artist.name}
              className={ratios[artist.art] > 1 ? "aspect-auto max-h-80" : "aspect-auto max-w-80"}
            />
            <div className="bg-accent flex flex-wrap items-center">
              <img className="ml-5 max-h-16 rounded-full" src={artist.profilePic} />
              <span>{artist.name}</span>
              <span className="bg-accent-600 rounded-2xl px-1.5">{"@" + artist.handle}</span>
            </div>
          </div>
        ))}
      </Container>
    </>
  );
}
