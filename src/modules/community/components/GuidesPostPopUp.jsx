import { motion } from "framer-motion";
import { useEffect } from "react";
import { getGuides } from "../utils/guidesData";

export default function GuidesPostPopUp({ guide, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative mx-4 flex max-h-[90vh] w-full max-w-4xl flex-col rounded-lg bg-secondary-700 shadow-xl"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 text-2xl text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <div className="overflow-y-auto">
          {/* Header with image */}
          <div className="relative h-64 w-full bg-accent-900">
            <img 
              src={getGuides.image} 
              alt="Guide banner"
              className="h-full w-full object-cover opacity-90"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="mb-6 flex items-center gap-4">
              <img 
                src={getGuides.profilePic} 
                alt={getGuides.author}
                className="h-14 w-14 rounded-full"
              />
              <div>
                <h2 className="text-2xl font-bold text-white">{getGuides.title}</h2>
                <p className="text-accent-400">{getGuides.subtitle}</p>
                <p className="text-sm text-gray-400">by {getGuides.author} ({getGuides.handle})</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-300">{getGuides.content}</p>
            </div>

            {getGuides.sections.map((section, i) => (
              <div key={i} className="mb-6">
                <h3 className="mb-3 text-xl font-bold text-accent-300">{section.heading}</h3>
                <ul className="ml-6 list-disc space-y-2 text-gray-300">
                  {section.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-gray-700 pt-4">
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1 text-gray-400">
                  <ThumbUpIcon /> {getGuides.upvotes}
                </span>
                <span className="text-gray-400">{getGuides.views} views</span>
              </div>
              <button className="rounded bg-accent-500 px-4 py-2 text-sm font-medium text-white hover:bg-accent-600">
                View Full Guide
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const ThumbUpIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
  </svg>
);