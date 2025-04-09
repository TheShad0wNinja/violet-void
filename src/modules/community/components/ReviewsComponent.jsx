import { Container, Divider, Title } from "@modules/_shared/App";
import { getReviews } from "../utils/reviewData";
import MiniReviewsComponent from "./MiniReviewsComponent";
import MoreButton from "./MoreButton";

const reviews = getReviews();

export default function ReviewsComponent() {
  return (
    <Container>
      <div className="flex flex-nowrap items-center justify-between">
        <Title>Reviews</Title>
        <MoreButton to="reviews" />
      </div>
      <Divider direction="center" className="mt-1 mb-4" />
      {reviews.map(gameReview => (
        <div className="from-secondary to-background my- bg-radial py-15">
          <h1 className="text-accent mb-10 text-center text-5xl font-bold">{gameReview.game}</h1>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-5">
            <MiniReviewsComponent GameName={gameReview.game} />
          </div>
        </div>
      ))}
    </Container>
  );
}
