import { PageModal } from "@modules/_shared/App";
import { useMemo } from "react";
import { useNavigate, useParams } from "react-router";
import { getScreenshotData } from "../utils/mockScreenshotsData";

export default function ScreenshotItemModal() {
  const navigate = useNavigate();
  const { id } = useParams();

  const panel = useMemo(
    () => getScreenshotData().find(screenshot => screenshot.id === Number(id)),
    [id]
  );

  return (
    <PageModal>
      <button onClick={() => navigate(-1)} className="absolute inset-0"></button>
      <div className="flex max-h-screen max-w-screen">
        <img
          src={panel.imageSrc}
          className="mx-auto max-h-screen max-w-screen rounded-lg sm:my-auto sm:max-h-[calc(100vh-50px)]"
        />
        <div className="bg-secondary border-accent-400 relative ml-auto h-screen w-1/4 flex-col border-l-2 p-5 text-center">
          <h1 className="text-2xl font-semibold">{panel.title}</h1>
          <p className="h-1/2 content-center text-start">{panel.description}</p>
          <h3 className="text-accent h-50 content-end">{panel.author}</h3>
        </div>
      </div>
    </PageModal>
  );
}
