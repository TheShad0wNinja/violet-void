import { Carousel, Container, Divider, Title } from "@modules/_shared/App";
import { MoreButton } from "@modules/community/App";
import { getShuffledScreenshotData } from "../utils/mockScreenshotsData";
import { Link } from "react-router";

const screenshots = getShuffledScreenshotData();

export default function ScreenshotComponent() {
  const desktopView = [];
  for (let i = 0; i < screenshots.length; i += 2) {
    desktopView.push(screenshots.slice(i, i + 2));
  }

  return (
    <>
      <Container>
				<MoreButton to="screenshots" className="my-6 ml-auto" />
        <Carousel
          items={screenshots}
          renderItem={panel => <CarouselItem post={panel} />}
          autoSlideInterval={0}
          containerClass="block sm:hidden"
        />
        <Carousel
          items={desktopView}
          renderItem={group => <DesktopCarouselItem group={group} />}
          autoSlideInterval={0}
          itemsPerPage={2}
          containerClass="hidden mx-auto max-w-11/12 sm:block"
        />
      </Container>
    </>
  );
}

function CarouselItem({ post }) {
  return (
    <div className="overflow-hidden rounded-xl">
      <img src={post.imageSrc} className="h-48 w-full object-cover" />
      <div className="bg-secondary p-4">
        <h2 className="mb-2 text-center text-xl font-semibold">{post.title}</h2>
        <p className="text-accent-200 mb-2">{post.author}</p>
        <p className="line-clamp-3 pb-5">{post.description}</p>
      </div>
    </div>
  );
}

function DesktopCarouselItem({ group }) {
  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      {group.map(post => (
        <div className="bg-background-900 relative overflow-hidden rounded-xl">
          <img src={post.imageSrc} className="h-90 w-full object-contain" />
          <div className="bg-secondary/90 absolute bottom-0 left-0 max-w-1/2 rounded-tr-4xl p-4">
            <h2 className="mb-2 text-xl font-semibold">{post.title}</h2>
            <p className="text-accent">{post.author}</p>
          </div>
        </div>
      ))}
      {/* <div className="space-y-4"> */}
      {/*   {group.slice(2, 4).map(post => ( */}
      {/*     <div className="bg-background-900 relative overflow-hidden rounded-xl"> */}
      {/*       <img src={post.imageSrc} className="h-90 w-full object-contain" /> */}
      {/*       <div className="bg-secondary/90 absolute bottom-0 left-0 max-w-1/2 rounded-tr-4xl p-4"> */}
      {/*         <h2 className="mb-2 text-xl font-semibold">{post.title}</h2> */}
      {/*         <p className="text-accent">{post.author}</p> */}
      {/*       </div> */}
      {/*     </div> */}
      {/*   ))} */}
      {/* </div> */}
    </div>
  );
}
