import { Link, Outlet, useNavigate } from "react-router";
import AdminNavbar from "./AdminNavbar";
import { Branding, Button } from "@modules/_shared/App";
import { useEffect, useState } from "react";
import { IconMenu2 } from "@tabler/icons-react";
import { useAuth } from "@modules/authorization/App";

export default function AdminLayout() {
  const [navIsOpen, setNavIsOpen] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <div className="border-accent fixed top-0 z-50 flex items-center w-full gap-4 border-b p-6">
        <button className="cursor-pointer hover:scale-110" onClick={() => setNavIsOpen(!navIsOpen)}>
          <IconMenu2 />
        </button>
        <Branding />
        {user && <UserIcon user={user} />}
      </div>
      <div className="mt-24.5 gap-4">
        <AdminNavbar isOpen={navIsOpen} />
        <div className={"pt-4 transition-all duration-100" + (navIsOpen ? " sm:pl-60" : " pl-0")}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

function UserIcon({ user }) {
  return (
    <div className="ml-auto flex-row flex-nowrap items-center justify-end gap-2 sm:flex">
      <Link to={`/account/${user.name}`}>
        <p className="cursor-pointer hover:underline">{user.name}</p>
      </Link>
      <Link to={`/account/${user.name}`}>
        <img
          src={user.avatar}
          alt="user_profile"
          className="h-10 w-10 cursor-pointer rounded-md hover:brightness-75"
        />
      </Link>
    </div>
  );
}
