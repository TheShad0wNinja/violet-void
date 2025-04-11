import { IconStar, IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react";
import { getReviews } from "../utils/reviewData";

export default function MiniReviewsComponent({ game }) {
  return (
    <>
      {game.official_reviews.map(review => {
        const rating = Number(review.score);
        return (
          <div
            key={review.source + "_" + game.title}
            className="bg-secondary flex h-min w-min flex-nowrap items-center gap-2 rounded-2xl p-1"
          >
            <img src={review.avatarUrl} className="border-accent h-12 w-12 rounded-full border-2" />
            <h2 className="font-medium text-nowrap">{review.source}</h2>
            <div className="text-accent flex w-max pr-12">
              {[...Array(Math.floor(rating))].map((_, i) => (
                <IconStarFilled size={15} key={`filled_${i}_${review.source}_${game.title}`} />
              ))}
              {rating % 1 >= 0.5 && <IconStarHalfFilled size={15} />}
              {[...Array(5 - Math.ceil(rating))].map((_, i) => (
                <IconStar size={15} key={`empty_${i}_${review.source}_${game.title}`} />
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}
