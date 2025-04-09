import { Container, Divider, Title } from "@modules/_shared/App";
import { useState } from "react";
import { getNews } from "../utils/newsData";
import { Link, useLocation } from "react-router";
import MoreButton from "../components/MoreButton";
import NewsPostPopUp from "../components/NewsPostPopUp";
import { IconHeartFilled, IconSearch, IconEyeFilled, IconShare } from "@tabler/icons-react";

export default function NewsPage() {
  const location = useLocation();
  const isCommunitiesPage = location.pathname === "/community";
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <Container className={`${isCommunitiesPage ? "max-h-200 overflow-auto" : "h-auto"}`}>
      <div className={`bg-background ${isCommunitiesPage ? "sticky" : ""} top-0 z-10`}>
        <div className="my-[20px] p-6">
          <div className="mb-4 flex items-center justify-between">
            {isCommunitiesPage ? (
              <Link to="news">
                <Title>News</Title>
              </Link>
            ) : (
              <Title>News</Title>
            )}

            {isCommunitiesPage ? (
              <MoreButton to="news" />
            ) : (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search News..."
                  className="bg-secondary-700 focus:ring-accent-400 w-full max-w-xs px-4 py-2 underline-offset-2 focus:ring-2 focus:outline-none"
                />
                <IconSearch size={22} className="absolute top-2.5 right-3 h-5 w-5 text-gray-400" />
              </div>
            )}
          </div>
          <Divider className="mb-4" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {getNews().map(news => (
          <div
            key={news.id}
            className={`bg-secondary-900 hover:bg-secondary-800 rounded-2xl p-6 transition-colors duration-200`}
            onClick={() => setSelectedNews(news)}
          >
            <div className="cursor-pointer">
              <div className="mb-2 flex items-start justify-between">
                <h2 className="line-clamp-1 text-xl font-bold">{news.Title}</h2>
                <span className="text-xs text-gray-400">{news.Time}</span>
              </div>
              <h3 className="text-accent-400 mb-3 line-clamp-1 text-lg font-medium">
                {news.Subtitle}
              </h3>
              <p className="mb-4 line-clamp-2 text-sm text-gray-300">{news.Body}</p>
              <div className="mt mb-2 flex max-h-[340px] min-w-[20px] justify-start rounded-sm">
                <img
                  src={news.Image}
                  alt={news.Title}
                  className="rounded-mb w-auto object-contain object-left"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center"></div>
                <div className="flex space-x-2 text-xs text-gray-400">
                  <span className="hover:text-accent flex items-center gap-1">
                    <IconHeartFilled size={18} />
                    {news.Likes}
                  </span>
                  <span className="hover:text-accent flex items-center gap-1">
                    <IconEyeFilled size={18} />
                    {news.Views}
                  </span>
                  <span className="hover:text-accent flex items-center gap-1">
                    <IconShare size={18} />
                    {news.Share}
                  </span>
                </div>
              </div>
            </div>

            {selectedNews && (
              <NewsPostPopUp
                isOpen={!!selectedNews}
                news={selectedNews}
                onClose={() => setSelectedNews(null)}
              />
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}
