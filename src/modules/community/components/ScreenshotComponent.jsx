import { Carousel, Container, Divider, Title } from "@modules/_shared/App";
import { MoreButton } from "@modules/community/App";
import { getShuffledScreenshotData } from "../utils/mockScreenshotsData";

const ScreenshotData = getShuffledScreenshotData();

export default function ScreenshotComponent() {
  const mobileView = ScreenshotData.map(post => post);
  const desktopView = [];
  for (let i = 0; i < ScreenshotData.length; i += 4) {
    desktopView.push(ScreenshotData.slice(i, i + 4));
  }

  return (
    <>
      <Container>
        <div className="flex flex-nowrap items-center justify-between">
          <Title>Screenshots</Title>
          <MoreButton to="screenshots" />
        </div>
        <Divider direction="center" className="mt-1 mb-4" />
        <Carousel
          items={mobileView}
          renderItem={post => (
            <div className="overflow-hidden rounded-xl">
              <img src={post.imageSrc} className="h-48 w-full object-cover" />
              <div className="bg-secondary p-4">
                <h2 className="mb-2 text-center text-xl font-semibold">{post.title}</h2>
                <p className="text-accent-200 mb-2">{post.author}</p>
                <p className="pb-5">{post.description}</p>
              </div>
            </div>
          )}
          autoSlideInterval={0}
          containerClass="block sm:hidden"
        />
        <Carousel
          items={desktopView}
          renderItem={group => (
            <div className="grid grid-cols-2 gap-4 p-4">
              <div className="space-y-4">
                {group.slice(0, 2).map(post => (
                  <div className="overflow-hidden rounded-xl">
                    <img src={post.imageSrc} className="h-90 w-full object-cover" />
                    <div className="bg-secondary p-4">
                      <h2 className="mb-2 text-center text-xl font-semibold">{post.title}</h2>
                      <p className="text-accent mb-2">{post.author}</p>
                      <p className="pb-5">{post.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {group.slice(2, 4).map(post => (
                  <div className="overflow-hidden rounded-xl">
                    <img src={post.imageSrc} className="h-90 w-full object-cover" />
                    <div className="bg-secondary p-4">
                      <h2 className="mb-2 text-center text-xl font-semibold">{post.title}</h2>
                      <p className="text-accent mb-2">{post.author}</p>
                      <p className="pb-5">{post.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          autoSlideInterval={0}
          containerClass="hidden sm:block"
        />
      </Container>
    </>
  );
}
