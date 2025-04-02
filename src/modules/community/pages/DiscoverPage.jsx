import { Divider } from "@modules/_shared/App";
import {
  ArtworkPage,
  DiscussionPage,
  GuidesPage,
  NewsPage,
  ReviewsPage,
  ScreenshotsPage
} from "@modules/community/App";

export default function DiscoverPage() {
  return (
    <>
      Discover
      <Divider direction="left" />
      <NewsPage />
      <Divider direction="left" />
      <ReviewsPage />
      <Divider direction="left" />
      <DiscussionPage />
      <Divider direction="left" />
      <GuidesPage />
      <Divider direction="left" />
      <ScreenshotsPage />
      <Divider direction="left" />
      <ArtworkPage />
    </>
  );
}
