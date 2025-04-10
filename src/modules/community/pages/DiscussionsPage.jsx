import { AnimatedOutlet, Container, Divider, Title } from "@modules/_shared/App";
import { MoreButton, PostCard } from "../App";
import { getDiscussions } from "../utils/disscusionData";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import PostPopUp from "../components/DiscussionsPostPopUp";
import { IconSearch, IconPlus } from "@tabler/icons-react";

export default function DiscussionPage() {
  const location = useLocation();
  const isCommunitiesPage = location.pathname === "/community";
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <Container className={`${isCommunitiesPage ? "max-h-200 overflow-auto" : "h-auto"}`}>
      <div className={`bg-background ${isCommunitiesPage ? "sticky" : ""} top-0 z-10`}>
        <div className="p-6">
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
                  className="bg-secondary-700 focus:ring-accent-400 w-full max-w-xs px-4 py-2 underline-offset-2 focus:ring-2 focus:outline-none"
                />
                <IconSearch size={22} className="absolute top-2.5 right-3 h-5 w-5 text-gray-400" />
              </div>
            )}
          </div>

          <Divider className="mb-4" />
        </div>
      </div>

      <div className="min-h-screen p-6">
        {getDiscussions().map((post, index) => (
          <div key={index} onClick={() => setSelectedPost(post)}>
            <PostCard post={post} />
          </div>
        ))}
        {!isCommunitiesPage ? (
          <Link
            to="add"
            className="bg-accent hover:bg-accent-200 fixed right-10 bottom-10 rounded-2xl duration-100 ease-in"
          >
            <IconPlus size={50} />
          </Link>
        ) : (
          ""
        )}
        {selectedPost && (
          <PostPopUp
            isOpen={!!selectedPost}
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
          />
        )}
      </div>
      <AnimatedOutlet />
    </Container>
  );
}
