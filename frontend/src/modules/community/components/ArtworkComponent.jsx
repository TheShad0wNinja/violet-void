import { Carousel, Container, SkeletonBox } from "@modules/_shared/App";
import { MoreButton } from "@modules/community/App";
import { useMemo, useState } from "react";
import axios from "axios";

export default function ArtworkComponent() {
  const [artworks, setArtwork] = useState([]);

  useMemo(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/artworks`)
      .then(res => {
        setArtwork(res.data.shuffledArtworks);
      })
      .catch(e => console.log(e));
  }, []);
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
    </>
  );
}

function CarouselItem({ panel }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="max-h[400px] grid w-full grid-cols-1 justify-center px-2 py-2">
      {loading && <SkeletonBox className="h-full min-h-44 w-full" />}
      <img
        key={panel._id}
        src={panel.imageSrc}
        onLoad={() => setLoading(false)}
        className={`${loading ? "hidden" : ""} bg-secondary-800 h-full w-full rounded-2xl object-cover`}
      />
    </div>
  );
}
