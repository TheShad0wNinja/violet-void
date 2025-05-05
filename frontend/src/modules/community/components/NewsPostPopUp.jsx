import { PageModal, SkeletonBox } from "@modules/_shared/App";
import { IconShare, IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { IconHeartFilled, IconMessageCircleFilled, IconEyeFilled } from "@tabler/icons-react";
import { getNews } from "../utils/newsData";
import { useLocation, useNavigate, useParams } from "react-router";
import axios from "axios";

export default function NewsPostPopUp() {
  const { id } = useParams();
  const [news, setNews] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes(`/api/news/${id}`)) return;

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/news/${id}`)
      .then(res => {
        setNews(res.data);
      })
      .catch(e => console.log(e));
  });
  


  useEffect(() => {
    setNews(getNews().find(news => news._id === Number(id)) || null);
  }, [id]);

  return (
    <PageModal>
      <div className="bg-secondary-800 relative mx-auto flex max-h-[90vh] w-full max-w-4xl flex-col rounded-xl p-2 shadow-2xl">
        {news === null ? (
          <>
            <div className="border-secondary-700 bg-secondary-900 sticky top-0 z-10 flex items-center justify-between border-b p-4">
              <SkeletonBox className={"h-6 w-3/4"} />
              <button onClick={() => navigate(-1)}>
                <IconX
                  size={20}
                  className="cursor-pointer text-2xl text-gray-400 hover:text-white"
                />
              </button>
            </div>
            <div className="overflow-y-auto p-6">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div>
                    <SkeletonBox className="h-3 w-32" />
                    <SkeletonBox className="mt-2 h-3 w-24" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400"></span>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <SkeletonBox className="mb-4 h-4 w-3/5" />
                <SkeletonBox className="mb-4 h-24 w-5/6" />
                <div>
                  <SkeletonBox className="h-44 w-150" />
                </div>
              </div>
            </div>
            <div className="border-secondary-700 bg-secondary-900 sticky bottom-0 border-t p-4">
              <div className="flex items-center justify-between">
                <div className="flex space-x-4 text-sm">
                  <span className="hover:text-accent flex cursor-pointer items-center gap-1">
                    <IconHeartFilled size={18} />
                    <SkeletonBox className="h-4 w-4" />
                  </span>
                  <span className="hover:text-accent flex cursor-pointer items-center gap-1">
                    <IconEyeFilled size={18} />
                    <SkeletonBox className="h-4 w-4" />
                  </span>
                  <span className="hover:text-accent flex cursor-pointer items-center gap-1">
                    <IconEyeFilled size={18} /> Share
                  </span>
                </div>
                <button>
                  <span className="item-center bg-accent hover:bg-accent-600 mt-2 flex cursor-pointer gap-1 rounded-lg px-4 py-2 text-sm font-medium text-white duration-50">
                    <IconMessageCircleFilled size={18} /> Discuss
                  </span>
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="border-secondary-700 bg-secondary-900 sticky top-0 z-10 flex items-center justify-between border-b p-4">
              <h2 className="text-xl font-bold">{news.title}</h2>
              <button onClick={() => navigate(-1)}>
                <IconX
                  size={20}
                  className="cursor-pointer text-2xl text-gray-400 hover:text-white"
                />
              </button>
            </div>
            <div className="overflow-y-auto p-6">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div>
                    <p className="font-medium">{news.subtitle || "Unknown Author"}</p>
                    <p className="text-sm text-gray-400">{news.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400"></span>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <h3 className="text-accent-400 mb-4 text-lg font-medium">{news.subtitle}</h3>
                <p className="mb-6 whitespace-pre-line">{news.body}</p>
                <div>
                  <img
                    src={news.image}
                    alt={news.title}
                    className="rounded-mb w-150 object-contain object-left"
                  />
                </div>
              </div>
            </div>
            <div className="border-secondary-700 bg-secondary-900 sticky bottom-0 border-t p-4">
              <div className="flex items-center justify-between">
                <div className="flex space-x-4 text-sm">
                  <span className="hover:text-accent flex cursor-pointer items-center gap-1">
                    <IconHeartFilled size={18} />
                    {news.likes}
                  </span>
                  <span className="hover:text-accent flex cursor-pointer items-center gap-1">
                    <IconEyeFilled size={18} />
                    {news.views}
                  </span>
                  <span className="hover:text-accent flex cursor-pointer items-center gap-1">
                    <IconShare size={18} /> Share
                  </span>
                </div>
                <button className="item-center bg-accent hover:bg-accent-600 mt-2 flex cursor-pointer gap-1 rounded-lg px-4 py-2 text-sm font-medium text-white duration-50">
                  <IconMessageCircleFilled size={18} /> Discuss
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </PageModal>
  );
}
