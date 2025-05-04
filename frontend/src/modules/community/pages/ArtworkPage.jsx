import { AnimatedOutlet, Container, Divider, Title } from "@modules/_shared/App";
import axios from "axios";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { Link, useLocation, useParams } from "react-router";

export default function ArtworkPage() {
  const params = useParams();

  const [artworks, setArtwork] = useState([]);
  const location = useLocation();

  useMemo(() => {
    if (location.pathname.includes("/artworks/")) return;
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/artworks`)
      .then(res => {
        setArtwork(res.data.shuffledArtworks);
      })
      .catch(e => console.log(e));
  }, [location.pathname]);

  return (
    <>
      <Container>
        <div className="flex justify-between">
          <Title>Artwork</Title>
          {params.artist && (
            <Link
              to="/community/artwork"
              className="bg-secondary hover:bg-accent-400 block h-min w-fit cursor-pointer rounded-md p-2 text-nowrap duration-200 active:scale-95"
            >
              Clear Filter
            </Link>
          )}
        </div>
        <Divider direction="center" className="mt-1 mb-4" />
        <div className="grid grid-flow-dense auto-rows-auto gap-4 sm:grid-cols-3 md:grid-cols-5 2xl:grid-cols-7">
          {artworks.map((artwork, index) => (
            <ArtworkItem
              key={artwork._id}
              artwork={artwork}
              index={index}
              isFiltered={!!params.artist}
            />
          ))}
        </div>
      </Container>
      <AnimatedOutlet />
    </>
  );
}

function ArtworkItem({ artwork, index, isFiltered }) {
  const [loading, setLoading] = useState(true);
  const [span, setSpan] = useState({ row: 1, col: 1 });

  const handleImageLoad = () => {
    const img = new Image();
    img.src = artwork.imageSrc;
    img.onload = () => {
      const aspectRatio = img.naturalWidth / img.naturalHeight;
      const rowSpan = aspectRatio < 0.8 ? 2 : 1;
      const colSpan = aspectRatio > 1.1 ? 2 : 1;
      setSpan({ row: rowSpan, col: colSpan });
      setLoading(false);
    };
  };

  return (
    <>
      {loading && <SkeletonItem idx={index} />}
      <motion.div
        className={`${loading ? "hidden" : ""} bg-accent-900 group border-accent-900 hover:border-secondary-500 relative max-h-fit max-w-fit cursor-pointer overflow-hidden rounded-2xl border-2 col-span-${span.col} row-span-${span.row}`}
        initial={{ opacity: 0, y: "100%" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{
          duration: 0.5,
          ease: "easeIn",
          type: "spring",
          bounce: 0.15,
          delay: 0.1 * (index % 5)
        }}
        viewport={{ once: true, margin: "0% 0px 40% 0px" }}
      >
        <Link to={isFiltered ? `${artwork._id}` : `all/${artwork._id}`}>
          <img
            src={artwork.imageSrc}
            alt={artwork.game.title + " by " + artwork.artist.displayName}
            className="h-full w-full object-cover"
            onLoad={handleImageLoad}
          />
        </Link>
        <Link
          to={`${artwork.artist.username}`}
          className={`bg-secondary-500 absolute inset-x-0 bottom-0 z-10 flex items-center gap-3 p-3 transition-transform duration-200 ease-in sm:translate-y-0 md:translate-y-full group-hover:md:translate-y-0`}
        >
          <img className="h-10 w-10 rounded-full sm:h-12 sm:w-12" src={artwork.artist.avatar} />
          <div className="flex flex-col">
            <span className="font-medium">{artwork.artist.displayName}</span>
            <span className="bg-accent-400 w-min rounded-2xl px-2 py-0.5 text-sm xl:text-base">
              {"@" + artwork.artist.username}
            </span>
          </div>
        </Link>
      </motion.div>
    </>
  );
}

const SkeletonItem = ({ idx }) => {
  const RATIO_PATTERN = [
    { w: 1, h: 1 }, // Square
    { w: 2, h: 1 }, // Horizontal
    { w: 1, h: 1 }, // Square
    { w: 2, h: 1 }, // Horizontal
    { w: 1, h: 2 }, // Vertical
    { w: 1, h: 2 } // Vertical
  ];
  const height = RATIO_PATTERN[idx % RATIO_PATTERN.length].h * 200;
  const width = RATIO_PATTERN[idx % RATIO_PATTERN.length].w * 200;

  const aspectRatio = width / height;
  const rowSpan = aspectRatio < 0.8 ? 2 : 1;
  const colSpan = aspectRatio > 1.1 ? 2 : 1;

  return (
    <motion.div
      className={`h-[${height}px] w-full col-span-${colSpan} row-span-${rowSpan} bg-secondary-800 rounded-2xl`}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 0.8 }}
      transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
    />
  );
};
