import { Container, Divider, Title } from "@modules/_shared/App";
import { useState } from "react";
import { getGuides } from "../utils/guidesData";
import { Link, useLocation } from "react-router";
import MoreButton from "../components/MoreButton";
import GuidesPostPopUp from "../components/GuidesPostPopUp";
import {
  IconHeartFilled,
  IconSearch,
  IconStarFilled,
  IconMessageCircleFilled,
  IconEyeFilled,
  IconStarHalfFilled
} from "@tabler/icons-react";

export default function GuidesPage() {
  const location = useLocation();
  const isCommunitiesPage = location.pathname === "/community";
  const [selectedGuide, setSelectedGuide] = useState(null);

  return (
    <Container className={`${isCommunitiesPage ? "max-h-200 overflow-auto" : "h-auto"}`}>
      <div className={`bg-background ${isCommunitiesPage ? "sticky" : ""} top-0 z-10`}>
        <div className="my-[20px] p-6">
          <div className="mb-4 flex items-center justify-between">
            {isCommunitiesPage ? (
              <Link to="guides">
                <Title>Guides</Title>
              </Link>
            ) : (
              <Title>Guides</Title>
            )}

            {isCommunitiesPage ? (
              <MoreButton to="guides" />
            ) : (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Guides..."
                  className="bg-secondary-700 focus:ring-accent-400 w-full max-w-xs px-4 py-2 underline-offset-2 focus:ring-2 focus:outline-none"
                />
                <IconSearch size={22} className="absolute top-2.5 right-3 h-5 w-5 text-gray-400" />
              </div>
            )}
          </div>
          <Divider className="mb-4" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {getGuides().map((guide, index) => (
          <div
            key={guide.id}
            className={`bg-secondary-900 hover:bg-secondary-800 rounded-2xl p-6 transition-colors duration-200 ${
              index % 4 === 0 ? "sm:col-span-3" : ""
            }`}
            onClick={() => setSelectedGuide(guide)}
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
                  <span className="flex items-center gap-1 text-yellow-400">
                    <IconStarFilled size={18} />
                    <IconStarFilled size={18} />
                    <IconStarFilled size={18} />
                    <IconStarFilled size={18} />
                    <IconStarHalfFilled size={18} />
                  </span>
                  <span className="ml-1 text-xs text-gray-400">{guide.ratings}</span>
                </div>
                <div className="flex space-x-2 text-xs text-gray-400">
                  <span className="hover:text-accent flex items-center gap-1">
                    <IconHeartFilled size={18} />
                    {guide.Likes}
                  </span>
                  <span className="hover:text-accent flex items-center gap-1">
                    <IconMessageCircleFilled size={18} />
                    {guide.Comments}
                  </span>
                  <span className="hover:text-accent flex items-center gap-1">
                    <IconEyeFilled size={18} />
                    {guide.Views}
                  </span>
                </div>
              </div>
            </div>

            {selectedGuide && (
              <GuidesPostPopUp
                isOpen={!!selectedGuide}
                guide={selectedGuide}
                onClose={() => setSelectedGuide(null)}
              />
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}
