import { Link, NavLink } from "react-router";
import Branding from "./Branding";
import Divider from "./Divider";

const links = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Store",
    href: "/store/browse"
  },
  {
    label: "About Us",
    href: ""
  }
];

export default function Footer() {
  return (
    <footer className="bg-secondary-dark bottom-0 mt-42 flex w-full flex-col items-center justify-center gap-4 py-8">
      <Branding />
      <nav className="flex flex-wrap items-center justify-center gap-8">
        {links.map(link => (
          <NavLink
            to={link.href}
            key={link.label}
            className={({ isActive }) => "text-xl " + (isActive ? " text-primary" : "")}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      <Divider direction="center" />
    </footer>
  );
}
