import { PageModal } from "@modules/_shared/App";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { getShuffledArtworks } from "../utils/mockUserData";
import axios from "axios";

export default function ArtworkItemModal() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [artwork, setArtwork] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes(`${id}`)) return;
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/artworks/${id}`)
      .then(res => {
        setArtwork(res.data);
        console.log(res);
      })
      .catch(e => console.error(e));
  }, [location.pathname]);

  return (
    <PageModal>
      <button onClick={() => navigate(-1)} className="absolute inset-0"></button>
      <img
        src={artwork.imageSrc}
        className="mx-auto max-h-screen max-w-screen rounded-2xl sm:relative sm:max-h-[calc(100vh-50px)]"
      />
    </PageModal>
  );
}
