import { Divider } from "@modules/_shared/App";
import {
  ArtworkComponent,
  DiscussionPage,
  GuidesPage,
  NewsPage,
  ReviewsComponent,
  ScreenshotComponent
} from "@modules/community/App";

export default function DiscoverPage() {
  return (
    <>
      Discover
      <Divider direction="left" className="my-10" />
      <NewsPage />
      <Divider direction="left" className="my-10" />
      <ReviewsComponent />
      <Divider direction="left" className="my-10" />
      <DiscussionPage />
      <Divider direction="left" className="my-10" />
      <GuidesPage />
      <Divider direction="left" className="my-10" />
      <ScreenshotComponent />
      <Divider direction="left" className="my-10" />
      <ArtworkComponent />
    </>
  );
}
