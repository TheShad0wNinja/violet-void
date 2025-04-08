import { Container, Divider, Title } from "@modules/_shared/App";
import PostCard from "../components/PostCard";
import MoreButton from "../components/MoreButton";
import { getDiscussions } from "../utils/disscusionData";
import { Link, useLocation } from "react-router-dom";
import PostPopUp from "../components/PostPopUp";
import { useState } from "react";

export default function DiscussionPage() {
  const location = useLocation();
  const isCommunitiesPage = location.pathname === "/community";
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <Container>
      <div className="min-h-screen p-6">
        <div className="mb-4 flex items-center justify-between">
          {isCommunitiesPage ? (
            <Link to="discussions">
              <Title>Discussions</Title>
            </Link>
          ) : (
            <Title>Discussions</Title>
          )}

          {isCommunitiesPage ? (
            <MoreButton to="Discussions" />
          ) : (
            <div className="relative">
              <input
                type="text"
                placeholder="Search discussions..."
                className="focus:ring-accent-400 w-full max-w-xs px-4 py-2 underline-offset-2 focus:ring-2 focus:outline-none"
              />
              <svg
                className="absolute top-2.5 right-3 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          )}
        </div>

        <Divider className="mb-4" />

        {getDiscussions().map((post, index) => (
          <div key={index} onClick={() => setSelectedPost(post)}>
            <PostCard post={post} />
          </div>
        ))}

        {selectedPost && (
          <PostPopUp
            isOpen={!!selectedPost}
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
          />
        )}
      </div>
    </Container>
  );
}
