import { Container, Divider, Title } from "@modules/_shared/App";
import { MoreButton } from "@modules/community/App";

export default function ScreenshotComponent() {
  return (
    <>
      <Container>
        <div className="flex flex-nowrap items-center justify-between">
          <Title>Screenshots</Title>
          <MoreButton to="screenshots" />
        </div>
        <Divider direction="center" className="mt-1 mb-4" />
        <div className="flex flex-wrap gap-4">
          <div className="max-h-xl flex max-w-2xl overflow-hidden rounded-2xl">
            <div className="bg-background-50 p-30">image</div>
            <div className="bg-secondary">
              <h2 className="mt-2 flex justify-center text-2xl font-semibold">Title</h2>
              <p className="m-4 mt-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae nostrum magnam
                itaque earum voluptatem dolorum similique praesentium totam quia ducimus excepturi
                eius accusamus, ullam atque commodi enim odit distinctio repellat!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
