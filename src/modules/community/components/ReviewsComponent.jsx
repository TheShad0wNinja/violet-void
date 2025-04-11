import { Container } from "@modules/_shared/App";
import { getReviews } from "../utils/reviewData";
import MiniReviewsComponent from "./MiniReviewsComponent";
import MoreButton from "./MoreButton";

const games = getReviews();

export default function ReviewsComponent() {
  return (
    <Container>
			<MoreButton to="reviews" className="ml-auto my-6" />
      {games.map(game => (
        <div key={game.title} className="from-secondary to-background my-4 bg-radial py-15">
          <h1 className="text-accent mb-10 text-center text-5xl font-bold">{game.title}</h1>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-5">
            <MiniReviewsComponent game={game} />
          </div>
        </div>
      ))}
    </Container>
  );
}
