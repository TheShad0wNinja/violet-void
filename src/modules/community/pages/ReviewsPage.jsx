import { Container, Divider, Pagination, Title } from "@modules/_shared/App";
import { getReviews } from "../utils/reviewData";
import { IconStar, IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react";

const reviews = getReviews();

export default function ReviewsPage() {
  return (
    <>
      <Container>
        <Title>Reviews</Title>
        <Divider direction="center" className="mt-1 mb-4" />
        <div className="flex gap-5">
          {reviews.map(gameReview => (
            <div className="bg-background-900 my-5 flex w-[calc(50%-10px)] flex-wrap justify-evenly gap-5 rounded-2xl">
              <h1 className="text-accent my-5 w-full text-center text-4xl font-bold">
                {gameReview.game}
              </h1>
              {gameReview.critics.map(critic => {
                const rating = Number(critic.rating);
                return (
                  <div className="bg-secondary h-min max-w-[calc(50%-20px)] rounded-xl p-4">
                    <p className="bg-secondary-800 rounded-lg p-2">{critic.review}</p>
                    <span className="mt-4 flex flex-nowrap items-center gap-2">
                      <img src={critic.pic} className="border-accent rounded-full border-2" />
                      {critic.name}
                      <div className="text-accent ml-auto flex w-max">
                        {[...Array(Math.floor(rating))].map(i => (
                          <IconStarFilled size={15} key={`filled${i}`} />
                        ))}
                        {rating % 1 >= 0.5 && <IconStarHalfFilled size={15} />}
                        {[...Array(5 - Math.ceil(rating))].map(i => (
                          <IconStar size={15} key={`empty${i}`} />
                        ))}
                      </div>
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <Pagination />
      </Container>
    </>
  );
}
