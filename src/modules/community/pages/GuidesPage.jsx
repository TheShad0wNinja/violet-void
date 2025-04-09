import { Container, Divider, Title } from "@modules/_shared/App";
import { useState } from "react";
import { getGuides } from "../utils/guidesData";
import { Link, useLocation } from "react-router-dom";
import MoreButton from "../components/MoreButton";

export default function GuidesPage() {
  const location = useLocation();
  const isCommunitiesPage = location.pathname === "/community";
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <Container>
      <div className="my-[20px] p-6">
        <div className="mb-4 flex items-center justify-between">
          {isCommunitiesPage ? (
            <Link to="guides">
              <Title>Guides</Title>
            </Link>
          ) : (
            <Title>Guides</Title>
          )}

          {isCommunitiesPage ? <MoreButton to="guides" /> : null}
        </div>
        <Divider className="mb-4" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {getGuides().map((guide, index) => (
            <div
              key={guide.id}
              className={`bg-secondary-900 hover:bg-secondary-800 rounded-2xl p-6 transition-colors duration-200 ${index % 4 === 0 ? "col-span-3" : ""}`}
            >
              <div className="cursor-pointer">
                <div className="mb-2 flex items-start justify-between">
                  <h2 className="line-clamp-1 text-xl font-bold">{guide.title}</h2>
                  <span className="text-xs text-gray-400">{guide.date}</span>
                </div>
                <h3 className="text-accent-400 mb-3 line-clamp-1 text-lg font-medium">
                  {guide.subtitle}
                </h3>
                <p className="mb-4 line-clamp-2 text-sm text-gray-300">{guide.content}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="ml-1 text-xs text-gray-400">{guide.ratings}</span>
                  </div>
                  <div className="flex space-x-2 text-xs text-gray-400">
                    <span className="hover:text-accent">❤️{guide.Likes}</span>
                    <span className="hover:text-accent">💬{guide.Comments}</span>
                    <span className="hover:text-accent">👁️{guide.Views}</span>
                  </div>
                </div>
              </div>

              {selectedPost && (
                <PostPopUp
                  isOpen={!!selectedPost}
                  post={selectedPost}
                  onClose={() => setSelectedPost(null)}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
