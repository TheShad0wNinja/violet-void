import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import Branding from "./Branding";
import { IconMenu2, IconX } from "@tabler/icons-react";

function Header() {
  const links = [
    {
      label: "Home",
      href: "/"
    },
		{
			label: "Admin", 
			href: "/admin"
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
          "bg-background fixed top-20 left-0 z-50 h-full w-full px-6 py-8 transition-all duration-100 sm:relative sm:top-0 sm:col-span-2 sm:p-0 sm:transition-none " +
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
          className="grid h-full cursor-pointer p-1 hover:scale-110"
        >
          {borgorOpen ? <IconX size={26} /> : <IconMenu2 size={26} />}
        </button>
      </div>
    </header>
  );
}

export default Header;
