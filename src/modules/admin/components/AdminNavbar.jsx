import { Branding } from "@modules/_shared/App";
import { NavLink } from "react-router";

const sections = [
  {
    heading: "Products",
    links: [
      {
        label: "List Products",
        href: "/admin/products"
      },
      {
        label: "Add Product",
        href: "/admin/products/create"
      }
    ]
  }
];

export default function AdminNavbar({ isOpen = false }) {
  return (
    <aside
      className={`${isOpen ? "translate-x-0" : "-translate-x-full"} border-accent border-t border-r fixed left-0 h-screen w-full p-4 transition-transform duration-75 sm:w-72 sm:translate-x-0`}
    >
      <ul>
        {sections.map(section => (
          <li key={section.heading}>
            <h3>{section.heading}</h3>
            <ol className="mt-2 ml-2 grid gap-2">
              {section.links.map(link => (
                <li key={link.href}>
                  <NavLink to={link.href} className={"hover:text-gray-400"}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ul>
    </aside>
  );
}
