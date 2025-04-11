import { AnimatedOutlet, Container, Divider, TextInput, Title } from "@modules/_shared/App";
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
  IconStarHalfFilled,
  IconPlus
} from "@tabler/icons-react";

export default function GuidesPage({ isDiscoverPage }) {
  if (isDiscoverPage)
    return (
      <Container>
        <MoreButton to="guides" className="my-6 ml-auto" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {getGuides().map((guide, index) => (
            <GuideCard key={guide.id} guide={guide} index={index} />
          ))}
        </div>
      </Container>
    );

  return (
    <Container>
      <div className="my-[20px] p-6">
        <div className="mb-4 flex items-center justify-between">
          <Title>Guides</Title>

          <TextInput rightSection={<IconSearch size={22} />} placeholder="Search Guides..." />
        </div>
        <Divider className="mb-4" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {getGuides().map((guide, index) => (
          <GuideCard key={guide.id} guide={guide} index={index} />
        ))}
      </div>
      <Link
        to="add"
        className="bg-accent hover:bg-accent-200 fixed right-10 bottom-10 rounded-2xl duration-100 ease-in"
      >
        <IconPlus size={50} />
      </Link>
      <AnimatedOutlet />
    </Container>
  );
}

function GuideCard({ guide, index }) {
  return (
    <div
      className={`bg-secondary-900 hover:bg-secondary-800 rounded-2xl p-6 transition-colors duration-200 ${
        index % 4 === 0 ? "sm:col-span-3" : ""
      }`}
    >
      <Link to={`/community/guides/${guide.id}`}>
        <div className="mb-2 flex items-start justify-between">
          <h2 className="line-clamp-1 text-xl font-bold">{guide.title}</h2>
          <span className="text-xs text-gray-400">{guide.date}</span>
        </div>
        <h3 className="text-accent-400 mb-3 line-clamp-1 text-lg font-medium">{guide.subtitle}</h3>
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
      </Link>
    </div>
  );
}
