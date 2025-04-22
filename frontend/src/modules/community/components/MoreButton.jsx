import { Link } from "react-router";

export default function MoreButton({ to, className }) {
  return (
    <Link
      to={to}
      onClick={() => window.scrollTo(0, 0)}
      className={
        "bg-secondary hover:bg-accent-400 block h-min w-fit cursor-pointer rounded-md p-2 text-nowrap duration-200 active:scale-95 " +
        (className ? className : "")
      }
    >
      View More
    </Link>
  );
}
