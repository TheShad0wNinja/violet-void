import { Container, Divider, Pagination, Title } from "@modules/_shared/App";
import { getReviews } from "../utils/reviewData";
import { IconStar, IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react";
import useUrlFilters from "@modules/store/hooks/useUrlFilters";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";

const games = getReviews();
const itemsPerPage = 2;

export default function ReviewsPage() {
  const { filters, setFilter } = useUrlFilters({ page: 1 });

  const lastItem = Number(filters.page) * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;

  const [reviews, setReviews] = useState([]);
  const location = useLocation();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/reviews`)
      .then(res => {
        setReviews(res.data.reviews);
      })
      .catch(e => console.log(e));
  }, [location.pathname]);

  const items = reviews.slice(firstItem, lastItem);

  return (
    <Container>
      <Title>Reviews</Title>
      <Divider direction="center" className="mt-1 mb-4" />
      <div className="flex gap-5">
        {items.map(game => (
          <div key={game.title} className="bg-background-900 my-5 flex w-full flex-wrap justify-evenly gap-5 rounded-2xl sm:w-[calc(50%-10px)]">
            <h1 className="text-accent my-5 w-full text-center text-4xl font-bold">{game.title}</h1>
            {game.official_reviews.map(review => {
              const rating = Number(review.score);
              return (
                <div 
									key={review.source + "_" + game.title}
									className="bg-secondary max=w-full h-min rounded-xl p-4 sm:max-w-[calc(50%-20px)]"
								>
                  <p className="bg-secondary-800 rounded-lg p-2">{review.text}</p>
                  <span className="mt-4 flex flex-wrap items-center gap-2 sm:flex-nowrap">
                    <img src={review.avatarUrl} className="border-accent rounded-full border-2" />
                    {review.source}
                    <div className="text-accent ml-auto flex w-max">
                      {[...Array(Math.floor(rating))].map((_, i) => (
                        <IconStarFilled size={15} key={`filled_${i}_${review.source}_${game.title}`}  />
                      ))}
                      {rating % 1 >= 0.5 && <IconStarHalfFilled size={15} />}
                      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
                        <IconStar size={15} key={`empty_${i}_${review.source}_${game.title}`}  />
                      ))}
                    </div>
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <Pagination
        totalItems={games.length}
        itemsPerPage={itemsPerPage}
        onPageChange={page => setFilter("page", page)}
        currentPage={Number(filters.page)}
        maxVisiblePages={3}
      />
    </Container>
  );
}
