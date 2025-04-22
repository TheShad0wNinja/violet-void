import { Branding } from "@modules/_shared/App";
import { IconDeviceGamepad, IconHome } from "@tabler/icons-react";
import { NavLink } from "react-router";

const sections = [
	{
		label: "Home",
		href: "/",
		icon: <IconHome />
	},
  {
    label: "Products",
    href: "/admin/products",
    icon: <IconDeviceGamepad />
  }
];

export default function AdminNavbar({ isOpen = false }) {
  return (
    <aside
      className={`${isOpen ? "translate-x-0" : "-translate-x-full"} bg-background z-[999] border-accent fixed left-0 h-screen w-full border-t border-r p-4 transition-transform duration-75 sm:w-60`}
    >
      <nav>
        <ul>
          {sections.map(link => (
            <li key={link.href} className="my-2">
              <NavLink
                to={link.href}
                className={ ({isActive}) => 
                  `flex flex-nowrap items-center justify-center gap-2 text-xl hover:bg-accent p-2 rounded-md ${isActive ? "bg-accent" : ""}`
                }
              >
                {link.icon}
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
