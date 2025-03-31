export default function GameCard({ game }) {
  const { coverImageUrl, title, price, type } = game;
  return (
    <div className="w-full flex flex-col justify-center items-center cursor-pointer hover:scale-105 hover:saturate-[120%] transition-transform">
      <div className="relative w-full h-[300px] sm:h-[280px] xl:h-[300px] rounded-xl overflow-hidden">
        <img
          className="absolute w-full h-full object-cover top-1/2 left-1/2 -translate-1/2 aspect-[3/4]"
          src={coverImageUrl}
          alt={title + " cover"}
        />
      </div>
      <div className="flex flex-col w-full mt-2">
        <p className="text-xs text-gray-400">{type}</p>
        <p className="font-semibold text-sm md:text-base line-clamp-2">{title}</p>
        <p className="text-xs md:text-sm text-gray-200">${price}</p>
      </div>
    </div>
  );
}
