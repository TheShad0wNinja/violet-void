import { Carousel, Container, Divider, Title } from "@modules/_shared/App";
import { getShuffledArtworks } from "../utils/mockUserData";
import { MoreButton } from "@modules/community/App";
import { Link } from "react-router";


const artists = getShuffledArtworks();

const mobileView = [];
for (let i = 0; i < artists.length; i += 3) {
  mobileView.push(artists.slice(i, i + 3));
}

const desktopView = [];
for (let i = 0; i < artists.length; i += 5) {
  desktopView.push(artists.slice(i, i + 5));
}

export default function ArtworkComponent() {
  return (
    <>
      <Container>
        <div className="flex flex-nowrap items-center justify-between">
        <Link to="artwork">
              <Title>Artwork</Title>
            </Link>
          <MoreButton to="artwork" />
        </div>
        <Divider direction="center" className="mt-1 mb-4" />
        <Carousel
          items={mobileView}
          renderItem={panel => (
            <div className="flex justify-center gap-4">
              {panel.map(artist => (
                <img
                  key={artist.art}
                  src={artist.art}
                  className="bg-secondary-800 max-h-150 w-1/3 rounded-lg object-cover"
                />
              ))}
            </div>
          )}
          autoSlideInterval={10000}
          showIndicators={false}
          itemClass="bg-secondary-800 flex justify-center"
          containerClass="mx-auto w-full rounded-4xl block sm:hidden"
        />
        <Carousel
          items={desktopView}
          renderItem={panel => (
            <div className="flex justify-center gap-4">
              {panel.map(artist => (
                <img
                  key={artist.art}
                  src={artist.art}
                  className="bg-secondary-800 max-h-150 w-1/5 rounded-lg object-cover"
                />
              ))}
            </div>
          )}
          autoSlideInterval={10000}
          showIndicators={false}
          itemClass="bg-secondary-800 flex justify-center"
          containerClass="mx-auto w-full rounded-4xl hidden sm:block"
        />
      </Container>
      <div className="bg-secondary-800 flex justify-center" />
    </>
  );
}
