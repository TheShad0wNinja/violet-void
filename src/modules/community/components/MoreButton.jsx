import { Link } from "react-router";

export default function MoreButton({ to, className }) {
  return (
    <Link
      to={"/community/" + to}
      className={
        "bg-secondary hover:bg-accent-400 block h-min w-fit cursor-pointer text-nowrap rounded-md p-2 active:scale-95 " +
        (className ? className : "")
      }
    >
      View More
    </Link>
  );
}
