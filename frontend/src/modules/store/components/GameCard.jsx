export default function GameCard({ game, withoutPrice = false, withoutType = false, onMouseOver }) {
  const { coverImageUrl, title, price, type } = game;
  return (
    <div onMouseOver={onMouseOver} className="flex w-full cursor-pointer flex-col items-center justify-center transition-transform hover:brightness-75">
      <div className="relative h-[300px] w-full overflow-hidden rounded-xl sm:h-[280px] xl:h-[300px]">
        <img
          className="absolute top-1/2 left-1/2 aspect-[3/5] h-full w-full -translate-1/2 object-cover"
          src={coverImageUrl}
          alt={title + " cover"}
        />
      </div>
      <div className="mt-2 flex w-full flex-col">
        {!withoutType && <p className="text-xs text-gray-400">{type}</p>}
        <p className="line-clamp-2 text-xl font-semibold ">{title}</p>
        {!withoutPrice && <p className="text-xs text-gray-200 md:text-sm">${price}</p>}
      </div>
    </div>
  );
}
