import { AnimatedOutlet, PageModal, SkeletonBox } from "@modules/_shared/App";
import { IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  IconHeartFilled,
  IconMessageCircleFilled,
  IconEyeFilled,
  IconStarFilled,
  IconStarHalfFilled
} from "@tabler/icons-react";
import { useNavigate, useParams } from "react-router";
import { getGuides } from "../utils/guidesData";

export default function GuidesPostPopUp() {
  const { id } = useParams();
  const [guide, setGuide] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setGuide(getGuides().find(g => g.id === Number(id)));
  }, [id]);

  return (
    <PageModal>
      <div className="bg-secondary-800 relative mx-auto flex max-h-[90vh] w-full max-w-4xl flex-col rounded-xl p-2 shadow-2xl">
        {!guide ? (
          <>
            <div className="border-secondary-700 bg-secondary-900 sticky top-0 z-10 flex items-center justify-between border-b p-4">
              <SkeletonBox className="h-7 w-48" />
              <button onClick={() => navigate(-1)}>
                <IconX
                  size={20}
                  className="cursor-pointer text-2xl text-gray-400 hover:text-white"
                />
              </button>
            </div>

            <div className="overflow-y-auto p-6">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <SkeletonBox className="h-10 w-10 rounded-full" />
                  <div>
                    <SkeletonBox className="h-5 w-32" />
                    <SkeletonBox className="mt-1 h-4 w-24" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <SkeletonBox className="h-5 w-5" />
                    <SkeletonBox className="h-5 w-5" />
                    <SkeletonBox className="h-5 w-5" />
                    <SkeletonBox className="h-5 w-5" />
                    <SkeletonBox className="h-5 w-5" />
                  </div>
                  <SkeletonBox className="h-4 w-8" />
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <SkeletonBox className="mb-4 h-6 w-64" />
                <SkeletonBox className="mb-6 h-24 w-full" />

                {[...Array(2)].map((_, i) => (
                  <div key={`section_${i}`} className="mb-8">
                    <SkeletonBox className="mb-3 h-6 w-48" />
                    <ul className="space-y-3">
                      {[...Array(3)].map((_, j) => (
                        <li key={`section_${i}_item_${j}`} className="flex items-start">
                          <SkeletonBox className="mt-1 mr-2 h-2 w-2 rounded-full" />
                          <SkeletonBox className="h-4 w-40" />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-secondary-700 bg-secondary-900 sticky bottom-0 border-t p-4">
              <div className="flex items-center justify-between">
                <div className="flex space-x-4 text-sm">
                  <span className="hover:text-accent flex cursor-pointer items-center gap-1">
                    <IconHeartFilled size={18} />
                    <SkeletonBox className="h-4 w-6" />
                  </span>
                  <span className="hover:text-accent flex cursor-pointer items-center gap-1">
                    <IconMessageCircleFilled size={18} />
                    <SkeletonBox className="h-4 w-6" />
                  </span>
                  <span className="hover:text-accent flex cursor-pointer items-center gap-1">
                    <IconEyeFilled size={18} /> Share
                  </span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="border-secondary-700 bg-secondary-900 sticky top-0 z-10 flex items-center justify-between border-b p-4">
              <h2 className="text-xl font-bold">{guide.title}</h2>
              <button onClick={() => navigate(-1)}>
                <IconX
                  size={20}
                  className="cursor-pointer text-2xl text-gray-400 hover:text-white"
                />
              </button>
            </div>
            <div className="overflow-y-auto p-6">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-accent-900/50 h-10 w-10 rounded-full"></div>
                  <div>
                    <p className="font-medium">{guide.author || "Unknown Author"}</p>
                    <p className="text-sm text-gray-400">{guide.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 text-yellow-400">
                    <IconStarFilled size={18} />
                    <IconStarFilled size={18} />
                    <IconStarFilled size={18} />
                    <IconStarFilled size={18} />
                    <IconStarHalfFilled size={18} />
                  </span>
                  <span className="text-sm text-gray-400">{guide.ratings}</span>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <h3 className="text-accent-400 mb-4 text-lg font-medium">{guide.subtitle}</h3>
                <p className="mb-6 whitespace-pre-line">{guide.content}</p>

                {guide.sections.map((section, i) => (
                  <div key={`section_${i}`} className="mb-8">
                    <h4 className="border-secondary-700 mb-3 border-b pb-2 text-lg font-semibold">
                      {section.heading}
                    </h4>
                    <ul className="space-y-3">
                      {section.items.map((item, j) => (
                        <li key={`section_${i}_item_${j}`} className="flex items-start">
                          <span className="bg-accent-400 mt-1 mr-2 inline-block h-1.5 w-1.5 rounded-full"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-secondary-700 bg-secondary-900 sticky bottom-0 border-t p-4">
              <div className="flex items-center justify-between">
                <div className="flex space-x-4 text-sm">
                  <span className="hover:text-accent flex cursor-pointer items-center gap-1">
                    <IconHeartFilled size={18} />
                    {guide.Likes}
                  </span>
                  <span className="hover:text-accent flex cursor-pointer items-center gap-1">
                    <IconMessageCircleFilled size={18} />
                    {guide.Comments}
                  </span>
                  <span className="hover:text-accent flex cursor-pointer items-center gap-1">
                    <IconEyeFilled size={18} /> Share
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </PageModal>
  );
}
