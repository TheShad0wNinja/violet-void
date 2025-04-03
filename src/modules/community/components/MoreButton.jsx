import { Link } from "react-router";

export default function MoreButton({ to, className }) {
  return (
    <Link
      to={"/community/" + to}
      className={
        "bg-secondary hover:bg-accent-400 mr-15 ml-auto block w-fit cursor-pointer rounded-md p-2 active:scale-95 " +
        (className ? className : "")
      }
    >
      View More
    </Link>
  );
}
