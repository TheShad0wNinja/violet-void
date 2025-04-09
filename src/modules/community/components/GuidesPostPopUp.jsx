import { AnimatedOutlet, PageModal } from "@modules/_shared/App";
import { IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { IconHeartFilled, IconMessageCircleFilled, IconEyeFilled, IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react";

export default function GuidesPostPopUp({ guide, onClose }) {
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
          <h2 className="text-xl font-bold">{guide.title}</h2>
          <button onClick={onClose}>
            <IconX size={20} className="cursor-pointer text-2xl text-gray-400 hover:text-white" />
          </button>
        </div>

        <div className="overflow-y-auto p-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-accent-900/50 h-10 w-10 rounded-full"></div>
              <div>
                <p className="font-medium">{guide.author || "Unknown Author"}</p>
                <p className="text-sm text-gray-400">{guide.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-yellow-400">
                <IconStarFilled size={18} />
                <IconStarFilled size={18} />
                <IconStarFilled size={18} />
                <IconStarFilled size={18} />
                <IconStarHalfFilled size={18} />
              </span>
              <span className="text-sm text-gray-400">{guide.ratings}</span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <h3 className="text-accent-400 mb-4 text-lg font-medium">{guide.subtitle}</h3>
            <p className="mb-6 whitespace-pre-line">{guide.content}</p>

            {guide.sections.map((section, i) => (
              <div key={i} className="mb-8">
                <h4 className="border-secondary-700 mb-3 border-b pb-2 text-lg font-semibold">
                  {section.heading}
                </h4>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start">
                      <span className="bg-accent-400 mt-1 mr-2 inline-block h-1.5 w-1.5 rounded-full"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-secondary-700 bg-secondary-900 sticky bottom-0 border-t p-4">
          <div className="flex items-center justify-between">
            <div className="flex space-x-4 text-sm">
              <span className="hover:text-accent flex cursor-pointer items-center gap-1">
                <IconHeartFilled size={18} />
                {guide.Likes}
              </span>
              <span className="hover:text-accent flex cursor-pointer items-center gap-1">
                <IconMessageCircleFilled size={18} />
                {guide.Comments}
              </span>
              <span className="hover:text-accent flex cursor-pointer items-center gap-1">
                <IconEyeFilled size={18} /> Share
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </PageModal>
  );
}
