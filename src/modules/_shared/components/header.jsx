import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import Branding from "./Branding";

function Header() {
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
      label: "Community",
      href: "/community"
    }
  ];

  const [borgorOpen, setBorgorOpen] = useState(false);

  return (
    <header className="grid grid-cols-4 p-6">
      <Branding className="col-span-2 sm:col-span-1 md:text-4xl" />
      <nav
        className={
          "bg-background fixed top-20 left-0 z-10 h-full w-full px-6 py-8 transition-all duration-100 sm:relative sm:top-0 sm:col-span-2 sm:p-0 sm:transition-none " +
          (borgorOpen ? "translate-x-0" : "translate-x-full sm:translate-0")
        }
      >
        <ol className="flex flex-col items-center justify-center gap-6 sm:h-full sm:flex-row">
          {links.map(link => (
            <NavLink
              to={link.href}
              key={link.label}
              className={({ isActive }) =>
                "cursor-pointer text-lg transition-transform duration-75 ease-out hover:scale-125" +
                (isActive ? " text-accent font-bold" : "")
              }
            >
              {link.label}
            </NavLink>
          ))}
        </ol>
      </nav>
      <div className="hidden flex-row flex-nowrap items-center justify-end gap-2 sm:flex">
        <p>Username</p>
        <div className="h-4 w-4 rounded-full bg-white"></div>
      </div>
      <div className="col-span-2 ml-auto block sm:hidden">
        <button
          onClick={() => setBorgorOpen(!borgorOpen)}
          className="grid h-full grid-cols-1 grid-rows-1 items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
