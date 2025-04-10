import { PageModal } from "@modules/_shared/App";
import { useMemo } from "react";
import { useNavigate, useParams } from "react-router";
import { getShuffledArtworks } from "../utils/mockUserData";

export default function ArtworkItemModal() {
  const navigate = useNavigate();
  const { id } = useParams();

  const game = useMemo(
    () => getShuffledArtworks().find(artwork => artwork.id === Number(id)),
    [id]
  );

  return (
    <PageModal>
      <button onClick={() => navigate(-1)} className="absolute inset-0"></button>
      <img
        src={game.art}
        className="max-w-screen max-h-screen rounded-2xl sm:relative sm:max-h-[calc(100vh-50px)]"
      />
    </PageModal>
  );
}
