import { IconMessageCircleFilled, IconHeartFilled, IconShare } from "@tabler/icons-react";
import { Link } from "react-router";

export default function PostCard({ post, isDiscoverPage }) {
  return (
    <Link to={`${isDiscoverPage ? "discussions/" : ""}${post._id}`}>
      <div className="bg-secondary-900 border-accent hover:border-accent-600 mx-auto mb-6 w-full max-w-6xl cursor-pointer rounded-2xl border p-4 text-white shadow-md">
        <div className="mb-2 flex justify-between text-lg text-gray-400">
          <span className="hover:text-accent">{post.subreddit}</span>
          <span>{post.time}</span>
        </div>

        <h2 className="mt-2 mb-1 text-lg font-semibold">{post.title}</h2>

        {<p className="mb-2 text-gray-300">{post.body}</p>}

        {post.image && (
          <div className="mt mb-2 flex max-h-[340px] min-w-[20px] justify-start rounded-sm">
            <img
              src={post.image}
              alt="post image"
              className="rounded-mb w-auto object-contain object-left"
            />
          </div>
        )}

        <div className="flex space-x-6 text-sm text-gray-400">
          <span className="hover:text-accent flex cursor-pointer items-center gap-1">
            <IconHeartFilled size={18} />
            {post.upvotes}
          </span>
          <span className="hover:text-accent flex cursor-pointer items-center gap-1">
            <IconMessageCircleFilled size={18} />
            {post.comments}
          </span>
          <span className="hover:text-accent flex cursor-pointer items-center gap-1">
            <IconShare size={18} /> Share
          </span>
        </div>
      </div>
    </Link>
  );
}
