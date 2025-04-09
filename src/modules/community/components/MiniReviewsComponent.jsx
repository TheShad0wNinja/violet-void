import { IconStar, IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react";
import { getReviews } from "../utils/reviewData";

export default function MiniReviewsComponent({ GameName }) {
  const reviews = getReviews().find(review => review.game === GameName);

  return (
    <>
      {reviews.critics.map(review => {
        const rating = Number(review.rating);
        return (
          <div
            key={review.review}
            className="bg-secondary flex h-min w-min flex-nowrap items-center gap-2 rounded-2xl p-1"
          >
            <img src={review.pic} className="border-accent h-12 w-12 rounded-full border-2" />
            <h2 className="font-medium text-nowrap">{review.name}</h2>
            <div className="text-accent flex w-max pr-12">
              {[...Array(Math.floor(rating))].map(i => (
                <IconStarFilled size={15} key={`filled${i}`} />
              ))}
              {rating % 1 >= 0.5 && <IconStarHalfFilled size={15} />}
              {[...Array(5 - Math.ceil(rating))].map(i => (
                <IconStar size={15} key={`empty${i}`} />
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}
