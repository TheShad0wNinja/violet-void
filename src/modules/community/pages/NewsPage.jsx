import { AnimatedOutlet, Container, Divider, Title } from "@modules/_shared/App";
import { useState } from "react";
import { getNews } from "../utils/newsData";
import { Link, useLocation } from "react-router";
import MoreButton from "../components/MoreButton";
import NewsPostPopUp from "../components/NewsPostPopUp";
import { IconHeartFilled, IconSearch, IconEyeFilled, IconShare } from "@tabler/icons-react";

export default function NewsPage({ isDiscoverPage }) {
	if (isDiscoverPage)
    return (
      <div className="grid grid-cols-1 gap-6 py-6">
        {getNews().map(news => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    );
  return (
    <>
      <Container>
        <div className={`bg-background ${isDiscoverPage ? "sticky" : ""} top-0 z-10`}>
          <div className="">
            <div className="mb-4 flex items-center justify-between">
              {!isDiscoverPage && <Title>News</Title>}

              {isDiscoverPage ? (
                <MoreButton to="news" />
              ) : (
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search News..."
                    className="bg-secondary-700 focus:ring-accent-400 w-full max-w-xs px-4 py-2 underline-offset-2 focus:ring-2 focus:outline-none"
                  />
                  <IconSearch
                    size={22}
                    className="absolute top-2.5 right-3 h-5 w-5 text-gray-400"
                  />
                </div>
              )}
            </div>
            <Divider className="mb-4" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {getNews().map(news => (
            <NewsCard news={news} />
          ))}
        </div>
      </Container>
      <AnimatedOutlet />
    </>
  );
}

function NewsCard({ news }) {
  return (
    <Link
      to={`/community/news/${news.id}`}
      className={`bg-secondary-900 hover:bg-secondary-800 rounded-2xl p-6 transition-colors duration-200`}
    >
      <div className="cursor-pointer">
        <div className="mb-2 flex items-start justify-between">
          <h2 className="line-clamp-1 text-xl font-bold">{news.title}</h2>
          <span className="text-xs text-gray-400">{news.time}</span>
        </div>
        <h3 className="text-accent-400 mb-3 line-clamp-1 text-lg font-medium">{news.subtitle}</h3>
        <p className="mb-4 line-clamp-2 text-sm text-gray-300">{news.Body}</p>
        <div className="mt mb-2 flex max-h-[340px] min-w-[20px] justify-start rounded-sm">
          <img
            src={news.image}
            alt={news.title}
            className="rounded-mb w-auto object-contain object-left"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center"></div>
          <div className="flex space-x-2 text-xs text-gray-400">
            <span className="hover:text-accent flex items-center gap-1">
              <IconHeartFilled size={18} />
              {news.likes}
            </span>
            <span className="hover:text-accent flex items-center gap-1">
              <IconEyeFilled size={18} />
              {news.views}
            </span>
            <span className="hover:text-accent flex items-center gap-1">
              <IconShare size={18} />
              {news.share}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
