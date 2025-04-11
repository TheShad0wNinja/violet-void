import { Container, Divider, Title } from "@modules/_shared/App";
import {
  ArtworkComponent,
  DiscussionPage,
  GuidesPage,
  NewsPage,
  ReviewsComponent,
  ScreenshotComponent
} from "@modules/community/App";
import { AnimatePresence, motion } from "motion/react";
import useUrlFilters from "@modules/store/hooks/useUrlFilters";

const tabs = {
  news: {
    label: "News",
    element: <NewsPage isDiscoverPage />
  },
  reviews: {
    label: "Reviews",
    element: <ReviewsComponent />
  },
  discussions: {
    label: "Discussions",
    element: <DiscussionPage isDiscoverPage />
  },
  guides: {
    label: "Guides",
    element: <GuidesPage isDiscoverPage />
  },
  screenshots: {
    label: "Screenshots",
    element: <ScreenshotComponent />
  },
  artworks: {
    label: "Artworks",
    element: <ArtworkComponent />
  }
};

export default function DiscoverPage() {
  const {
    filters: { section },
    setFilter
  } = useUrlFilters({ section: "news" });

  return (
    <>
      <Container>
        <Title withDivider>Discover</Title>
        <Tabs selectedTab={section} tabs={tabs} onSelect={item => setFilter("section", item)} />
      </Container>
      {tabs[section].element}
    </>
  );
}

function Tabs({ selectedTab, onSelect, tabs }) {
  return (
    <nav className="border-b-secondary flex w-full border-b-3 flex-col sm:flex-row">
      {Object.entries(tabs).map(([k, v]) => (
        <button
          key={k}
          onClick={() => onSelect(k)}
          className={`relative flex-1 cursor-pointer overflow-hidden rounded-t-lg px-2 pt-2 pb-1`}
        >
          {v.label}
          <AnimatePresence>
            {k === selectedTab ? (
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{
                  duration: 0.1,
                  type: "tween"
                }}
                className="bg-secondary absolute inset-0 -z-10"
              />
            ) : null}
          </AnimatePresence>
        </button>
      ))}
    </nav>
  );
}
