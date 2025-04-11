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
    element: <DiscussionPage />
  },
  guides: {
    label: "Guides",
    element: <GuidesPage />
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
        {tabs[section].element}
      </Container>
    </>
  );
}

function Tabs({ selectedTab = "news", onSelect, tabs = {} }) {
  return (
    <nav className="border-b-secondary flex w-full border-b-3">
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

function Wrapper({ children }) {
  return <div className="bg-secondary-800 rounded-lg p-2">{children}</div>;
}
