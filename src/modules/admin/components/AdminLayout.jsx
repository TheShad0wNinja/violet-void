import { Outlet } from "react-router";
import AdminNavbar from "./AdminNavbar";
import { Branding } from "@modules/_shared/App";

export default function AdminLayout() {
  return (
    <div >
      <div className="fixed top-0 z-50 w-full p-6 border-b border-accent">
        <Branding />
      </div>
			<div className="gap-4 mt-21">
				<AdminNavbar />
				<div className="sm:pl-72 pt-4">
					<Outlet />
				</div>
			</div>
    </div>
  );
}
