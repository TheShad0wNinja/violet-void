import { AnimatedOutlet, Container, Divider, Title } from "@modules/_shared/App";
import { getShuffledArtworks } from "../utils/mockUserData";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Link, useParams } from "react-router";

const rawArtworks = getShuffledArtworks();

export default function ArtworkPage() {
  const params = useParams();
  console.log(params.artist);

  const artworks = useMemo(() => {
    if (params.artist && params.artist === "all") return rawArtworks;

    return rawArtworks.filter(artwork => artwork.handle.includes(params.artist || ""));
  }, [params.artist]);

  return (
    <>
      <Container>
        <div className="flex justify-between">
          <Title>Artwork</Title>
          {params.artist && <Link to="/community/artwork">Clear</Link>}
        </div>
        <Divider direction="center" className="mt-1 mb-4" />
        <div className="grid grid-flow-dense auto-rows-auto gap-4 sm:grid-cols-3 md:grid-cols-5 2xl:grid-cols-7">
          {artworks.map((artwork, index) => (
            <ArtworkItem
              key={artwork.art}
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

function ArtworkItem({ artwork, index, setArtist, isFiltered }) {
  const [loading, setLoading] = useState(true);
  const [span, setSpan] = useState({ row: 1, col: 1 });

  const handleImageLoad = () => {
    const img = new Image();
    img.src = artwork.art;
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
        <Link to={isFiltered ? `${artwork.id}` : `all/${artwork.id}`}>
          <img
            src={artwork.art}
            alt={artwork.game + " by " + artwork.name}
            className="h-full w-full object-cover"
            onLoad={handleImageLoad}
          />
        </Link>
        <Link
          to={`${artwork.handle}`}
          className={`bg-secondary-500 absolute inset-x-0 bottom-0 z-10 flex items-center gap-3 p-3 transition-transform duration-200 ease-in sm:translate-y-0 md:translate-y-full group-hover:md:translate-y-0`}
        >
          <img className="h-12 w-12 rounded-full" src={artwork.profilePic} />
          <div className="flex flex-col">
            <span className="font-medium">{artwork.name}</span>
            <span className="bg-accent-400 text-m w-min rounded-2xl px-2 py-0.5">
              {"@" + artwork.handle}
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
      className={`h-[${height}px] w-full col-span-${colSpan} row-span-${rowSpan} rounded-2xl`}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 0.8 }}
      transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
      style={{
        backgroundColor: "#e0e0e0"
      }}
    />
  );
};
