// import { IconChevronRight } from "@tabler/icons-react";
import { IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";

export default function Collapsible({ children, header }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button className={`flex cursor-pointer items-center justify-between gap-4 w-full hover:bg-secondary-800 ${isOpen ? "bg-transparent" : "bg-transparent"} p-2 rounded-md`} onClick={() => setIsOpen(!isOpen)}>
        <h2>{header}</h2>
				<IconChevronRight size={20} className={` transition-transform duration-100 ${isOpen ? "rotate-90" : ""} `} />
      </button>
      {isOpen && <div className="mt-3">{children}</div>}
    </div>
  );
}
