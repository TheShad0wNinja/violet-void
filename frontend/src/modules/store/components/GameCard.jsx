import { Link } from "react-router";

export default function GameCard({ game, withoutPrice = false, withoutType = false, onMouseOver }) {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const coverimg = backendUrl + game.images.cover;
  return (
    <Link to={`/store/product/${game._id}`}>
    <div onMouseOver={onMouseOver} className="flex w-full cursor-pointer flex-col items-center justify-center transition-transform hover:brightness-75">
      <div className="relative h-[300px] w-full overflow-hidden rounded-xl sm:h-[280px] xl:h-[300px]">
        <img
          className="absolute top-1/2 left-1/2 aspect-[3/5] h-full w-full -translate-1/2 object-cover"
          src={coverimg}
          alt={game.title + " cover"}
        />
      </div>
      <div className="mt-2 flex w-full flex-col">
        {!withoutType && <p className="text-xs text-gray-400">{game.type}</p>}
        <p className="line-clamp-2 text-xl font-semibold ">{game.title}</p>
        {!withoutPrice && <p className="text-xs text-gray-200 md:text-sm">${game.price}</p>}
      </div>
    </div>
    </Link>
  );
}
