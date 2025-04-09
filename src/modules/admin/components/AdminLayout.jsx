import { Outlet } from "react-router";
import AdminNavbar from "./AdminNavbar";
import { Branding, Button } from "@modules/_shared/App";
import { useState } from "react";

export default function AdminLayout() {
  const [navIsOpen, setNavIsOpen] = useState(true);
  return (
    <div>
      <div className="border-accent fixed top-0 z-50 flex w-full gap-2 border-b p-6">
        <button onClick={() => setNavIsOpen(!navIsOpen)}>Burger</button>
        <Branding />
      </div>
      <div className="mt-21 gap-4">
        <AdminNavbar isOpen={navIsOpen} />
        <div className={"pt-4 transition-all duration-100" + (navIsOpen ? " sm:pl-72" : " pl-0")}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
