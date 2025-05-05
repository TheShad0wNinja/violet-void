import { PageModal } from "@modules/_shared/App";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import axios from "axios";

export default function ScreenshotItemModal() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [screenshot, setScreenshot] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes(`/api/screenshots/${id}`)) return;
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/screenshots/${id}`)
      .then(res => {
        setScreenshot(res.data);
        console.log(res);
      })
      .catch(e => console.error(e));
  }, [location.pathname]);

  return (
    <PageModal>
      <button onClick={() => navigate(-1)} className="absolute inset-0"></button>
      <div className="flex max-h-screen max-w-screen">
        <img
          src={screenshot.imageSrc}
          className="mx-auto rounded-lg sm:my-auto sm:max-h-[calc(100vh-50px)]"
        />
        <div className="bg-secondary border-accent-400 relative ml-auto h-screen w-1/4 flex-col border-l-2 p-5 text-center">
          <h1 className="h-1/8 content-center text-4xl font-semibold">{screenshot.title}</h1>
          <p className="border-accent-400 h-1/3 content-center border-b text-start text-lg">
            {screenshot.description}
          </p>
          <h3 className="text-accent h-1/2 content-end">{`by ${screenshot.author.displayName}`}</h3>
        </div>
      </div>
    </PageModal>
  );
}
