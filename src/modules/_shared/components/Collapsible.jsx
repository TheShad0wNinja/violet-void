import { useState } from "react";
import rightCarret from "../assets/RightCarret.svg"

export default function Collapsible({ children, header }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button className={`flex cursor-pointer justify-between gap-4 w-full hover:bg-secondary-800 ${isOpen ? "bg-transparent" : "bg-transparent"} p-2 rounded-md`} onClick={() => setIsOpen(!isOpen)}>
        <h2>{header}</h2>
        <img className={ `transition-transform duration-100 ${isOpen ? "rotate-90" : ""}`  } src={rightCarret} alt="CollapseIcon" />
      </button>
      {isOpen && <div className="mt-3">{children}</div>}
    </div>
  );
}
