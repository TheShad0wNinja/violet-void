import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { IconX, IconHeartFilled, IconMessageCircleFilled, IconShare } from "@tabler/icons-react";

export default function PostPopUp({ isOpen, onClose, post }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && post && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-secondary-800 relative mx-4 flex max-h-[90vh] w-full max-w-3xl flex-col rounded-xl shadow-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={e => e.stopPropagation()}
            style={{
              height: "auto",
              maxHeight: "90vh"
            }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 cursor-pointer text-2xl font-bold text-gray-500"
            >
              <IconX size={20} className="hover:text-white" />
            </button>

            <div className="overflow-y-auto p-6">
              <div className="mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="hover:text-accent cursor-pointer font-medium text-gray-400">
                    {post.subreddit}
                  </span>
                  <span>•</span>
                  <span>{post.time}</span>
                </div>
                <h2 className="mt-1 text-2xl font-bold">{post.title}</h2>
              </div>

              <div className="mb-6">
                <p className="whitespace-pre-line text-white dark:text-white">{post.body}</p>
                {post.image && (
                  <div className="mt-4">
                    <img
                      src={post.image}
                      alt="Post content"
                      className="max-h-[50vh] w-full rounded-lg object-contain"
                    />
                  </div>
                )}
              </div>
              <div className="flex gap-4 border-t border-b py-3 text-sm text-gray-400">
                <span className="hover:text-accent flex cursor-pointer items-center gap-1">
                  <IconHeartFilled size={18} />
                  {post.upvotes}
                </span>
                <span className="flex items-center gap-1">
                  <IconMessageCircleFilled size={18} />
                  {post.comments}
                </span>
                <span className="hover:text-accent flex cursor-pointer items-center gap-1">
                  <IconShare size={18} /> Share
                </span>
              </div>

              <div className="mt-6">
                <h3 className="mb-4 text-lg font-semibold">Comments ({post.comments})</h3>

                <div className="mt-4">
                  <textarea
                    placeholder="Add a comment..."
                    className="focus:ring-accent w-full rounded-lg border p-3 text-sm focus:ring-2 focus:outline-none"
                    rows={3}
                  />
                  <button className="bg-accent mt-2 rounded-lg px-4 py-2 text-sm font-medium text-white">
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
