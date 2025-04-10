import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { IconX, IconHeartFilled, IconMessageCircleFilled, IconShare } from "@tabler/icons-react";
import { useNavigate, useParams } from "react-router";
import { getDiscussions } from "../utils/disscusionData";
import { PageModal, SkeletonBox } from "@modules/_shared/App";

export default function DiscussionPostPopUp() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setPost(getDiscussions().find(i => i.id === Number(id)));
  }, [id]);

  return (
    <PageModal>
      <div className="bg-secondary-800 relative flex mx-auto max-h-[90vh] w-full max-w-4xl flex-col rounded-xl p-2 shadow-2xl">
        {!post ? (
          <>
            <button
              onClick={() => navigate(-1)}
              className="absolute top-4 right-4 cursor-pointer text-2xl font-bold text-gray-500"
            >
              <IconX size={20} className="hover:text-white" />
            </button>
            <div className="w-full overflow-y-auto p-6">
              <div className="mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <SkeletonBox className="h-4 w-24" />
                  <span>•</span>
                  <SkeletonBox className="h-4 w-16" />
                </div>
                <SkeletonBox className="mt-1 h-8 w-full" />
              </div>

              <div className="mb-6">
                <SkeletonBox className="h-24 w-full" />
                <div className="mt-4">
                  <SkeletonBox className="h-64 w-full" />
                </div>
              </div>

              <div className="flex gap-4 border-t border-b py-3 text-sm text-gray-400">
                <span className="hover:text-accent flex cursor-pointer items-center gap-1">
                  <IconHeartFilled size={18} />
                  <SkeletonBox className="h-4 w-6" />
                </span>
                <span className="flex items-center gap-1">
                  <IconMessageCircleFilled size={18} />
                  <SkeletonBox className="h-4 w-6" />
                </span>
                <span className="hover:text-accent flex cursor-pointer items-center gap-1">
                  <IconShare size={18} /> Share
                </span>
              </div>

              <div className="mt-6">
                <h3 className="mb-4 text-lg font-semibold">
                  Comments (<SkeletonBox className="inline-block h-4 w-6" />)
                </h3>

                <div className="mt-4">
                  <SkeletonBox className="h-20 w-full" />
                  <SkeletonBox className="mt-2 h-8 w-24" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <button
              onClick={() => navigate(-1)}
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
          </>
        )}
      </div>
    </PageModal>
  );
}
