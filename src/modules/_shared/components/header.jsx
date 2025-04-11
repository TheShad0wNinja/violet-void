import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import Branding from "./Branding";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useAuth } from "@modules/authorization/App";
import { Button, Divider } from "../App";

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
  const { user } = useAuth();
  console.log(user);

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
          <Divider className="block sm:hidden" direction="center" />
          {user !== null ? (
            <div className="flex w-full flex-col items-center justify-center gap-6 sm:hidden">
              <div className="flex flex-row flex-nowrap items-center gap-2">
                <p>{user.name}</p>
                <img src={user.avatar} alt="user_profile" className="h-10 w-10 rounded-md" />
              </div>
              <Link
                to="/auth/logout"
                className="bg-secondary hover:bg-primary-500 block h-min w-full cursor-pointer rounded-md px-4 py-2 text-center font-semibold tracking-wide text-nowrap uppercase duration-200 active:scale-95"
              >
                Logout
              </Link>
            </div>
          ) : (
            <div className="flex w-full flex-col justify-end gap-2 sm:hidden">
              <Link
                to="/auth/signup"
                className="bg-primary hover:bg-primary-500 block h-min w-full cursor-pointer rounded-md px-4 py-2 text-center font-semibold tracking-wide text-nowrap uppercase duration-200 active:scale-95"
              >
                Signup
              </Link>
              <Link
                to="/auth/login"
                className="bg-secondary hover:bg-primary-500 block h-min w-full cursor-pointer rounded-md px-4 py-2 text-center font-semibold tracking-wide text-nowrap uppercase duration-200 active:scale-95"
              >
                Login
              </Link>
            </div>
          )}
        </ol>
      </nav>
      {user !== null ? (
        <div className="hidden w-full justify-end gap-2 sm:flex">
          <div className="hidden flex-row flex-nowrap items-center justify-end gap-2 sm:flex">
            <p>{user.name}</p>
            <img src={user.avatar} alt="user_profile" className="h-10 w-10 rounded-md" />
          </div>
          <Link
            to="/auth/logout"
            className="bg-secondary hover:bg-primary-500 block h-min w-fit cursor-pointer rounded-md px-4 py-2 text-nowrap duration-200 active:scale-95"
          >
            Logout
          </Link>
        </div>
      ) : (
        <div className="hidden w-full justify-end gap-2 sm:flex">
          <Link
            to="/auth/signup"
            className="bg-primary hover:bg-primary-500 block h-min w-fit cursor-pointer rounded-md px-4 py-2 text-nowrap duration-200 active:scale-95"
          >
            Signup
          </Link>
          <Link
            to="/auth/login"
            className="bg-secondary hover:bg-secondary-500 block h-min w-fit cursor-pointer rounded-md px-4 py-2 text-nowrap duration-200 active:scale-95"
          >
            Login
          </Link>
        </div>
      )}
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
