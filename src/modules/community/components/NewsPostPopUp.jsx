import { AnimatedOutlet, PageModal } from "@modules/_shared/App";
import { IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import {
  IconHeartFilled,
  IconMessageCircleFilled,
  IconEyeFilled,
  IconStarFilled,
  IconStarHalfFilled
} from "@tabler/icons-react";
import { getNews } from "../utils/newsData";

export default function NewsPostPopUp({ news, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <PageModal className="bg-accent backdrop-blur-sm">
      <motion.div
        className="bg-secondary-800 relative mx-4 flex max-h-[90vh] w-full max-w-4xl flex-col rounded-xl shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="border-secondary-700 bg-secondary-900 sticky top-0 z-10 flex items-center justify-between border-b p-4">
          <h2 className="text-xl font-bold">{news.title}</h2>
          <button onClick={onClose}>
            <IconX size={20} className="cursor-pointer text-2xl text-gray-400 hover:text-white" />
          </button>
        </div>

        <div className="overflow-y-auto p-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div>
                <p className="font-medium">{news.subReddit || "Unknown Author"}</p>
                <p className="text-sm text-gray-400">{news.Time}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">{}</span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <h3 className="text-accent-400 mb-4 text-lg font-medium">{news.subTitle}</h3>
            <p className="mb-6 whitespace-pre-line">{news.Body}</p>
            <div>
              <img
                src={news.Image}
                alt={news.Title}
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
                {news.Likes}
              </span>
              <span className="hover:text-accent flex cursor-pointer items-center gap-1">
                <IconEyeFilled size={18} />
                {news.Views}
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
      </motion.div>
    </PageModal>
  );
}
