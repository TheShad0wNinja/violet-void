import { Carousel, Container, Divider, SkeletonBox, Title } from "@modules/_shared/App";
import { getShuffledArtworks } from "../utils/mockUserData";
import { MoreButton } from "@modules/community/App";
import { Link } from "react-router";
import { useState } from "react";

const artworks = getShuffledArtworks();

export default function ArtworkComponent() {
  return (
    <>
      <Container>
        <MoreButton to="artwork" className="my-6 ml-auto" />
        <Carousel
          items={artworks}
          renderItem={panel => <CarouselItem panel={panel} />}
          itemsPerPage={2}
          autoSlideInterval={10000}
          showIndicators={false}
          itemClass="bg-secondary-800 flex justify-center"
          containerClass="mx-auto w-full rounded-2xl block sm:hidden"
					infiniteLoop={true}
        />
        <Carousel
          items={artworks}
          renderItem={panel => <CarouselItem panel={panel} />}
          itemsPerPage={3}
          autoSlideInterval={10000}
          showIndicators={false}
          itemClass="bg-secondary-800 flex justify-center"
          containerClass="mx-auto w-full rounded-2xl hidden sm:block md:hidden"
					infiniteLoop={true}
        />
        <Carousel
          items={artworks.slice(0, 12)}
          renderItem={panel => <CarouselItem panel={panel} />}
          itemsPerPage={5}
          autoSlideInterval={10000}
          showIndicators={true}
          itemClass="bg-secondary-800 flex justify-center"
          containerClass="mx-auto w-full rounded-2xl hidden md:block"
					infiniteLoop={true}
        />
      </Container>
      {/* <div className="bg-secondary-800 flex justify-center" /> */}
    </>
  );
}

function CarouselItem({ panel }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="max-h[400px] grid w-full grid-cols-1 justify-center px-2 py-2">
      {loading && <SkeletonBox className="min-h-44 h-full w-full" />}
      <img
        key={panel.art}
        src={panel.art}
        onLoad={() => setLoading(false)}
        className={`${loading ? "hidden" : ""} bg-secondary-800 h-full w-full rounded-2xl object-cover`}
      />
    </div>
  );
}
