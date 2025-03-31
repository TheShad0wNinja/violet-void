import IconAdjustmentHorizontal from "@modules/store/assets/IconAdjustmentHorizontal";

export default function FilterBtn({onClick}) {
  return (
    <button onClick={onClick} className="bg-secondary hover:bg-secondary-600 active:bg-secondary-700 transition-colors duration-[40ms] active:inset-2 h-min cursor-pointer rounded-md px-3 py-2 text-base hover:scale-105">
      <div className="flex items-center gap-0.5">
        <IconAdjustmentHorizontal size={18} />
        <span>Filter</span>
      </div>
    </button>
  );
}
