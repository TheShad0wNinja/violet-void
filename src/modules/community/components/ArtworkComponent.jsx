import { Container, Divider, Title } from "@modules/_shared/App";
import { getShuffledArtists } from "../utils/mockUserData";
import { MoreButton } from "@modules/community/App";

const artists = getShuffledArtists();
export default function ArtworkComponent() {
  return (
    <>
      <Container>
        <div className="flex flex-nowrap items-center justify-between">
          <Title>Artwork</Title>
          <MoreButton to="artwork" />
        </div>
        <Divider direction="center" className="mt-1 mb-4" />
        <div className="flex flex-wrap gap-x-5">
          {artists.map(artist => (
            <img
              src={artist.art}
              key={artist.art}
              className="h-full max-h-90 w-fit rounded-2xl object-contain"
            />
          ))}
        </div>
      </Container>
    </>
  );
}
