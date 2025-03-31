import Divider from "./Divider";
import Title from "./Title";

/**
 * @typedef {"left" | "right" | "top" | "bottom"} Position
 * @param {Object} param0
 * @param {Boolean} param0.isOpen Determines if the drawer is open or not
 * @param {String} param0.header The header's text
 * @param {FUnction} param0.setIsOpen The function to change the state of the drawer
 * @param {Position} param0.position Position of the drawer
 */
export default function Drawer({ children, isOpen, header, setIsOpen, position }) {
  const getPositionClasses = position => {
    switch (position) {
      case "right":
        return " top-0 bottom-0 right-0";
      case "left":
        return " top-0 bottom-0 left-0";
      case "bottom":
        return " bottom-0 left-0 right-0";
      case "top":
        return " top-0 left-0 right-0";
    }
  };

  const getTranslateClasses = position => {
    switch (position) {
      case "right":
        return " translate-x-full";
      case "left":
        return " -translate-x-full";
      case "bottom":
        return " translate-y-full";
      case "top":
        return " -translate-y-full";
    }
  };

  return (
    <aside
      className={
        "bg-secondary-900 fixed z-10 max-h-dvh w-full sm:max-w-md sm:w-md overflow-hidden p-4 transition-transform duration-100 ease-in-out" +
        getPositionClasses(position) +
        (isOpen ? " translate-0" : getTranslateClasses(position))
      }
    >
      <section className="flex items-center justify-between">
        <Title>{header}</Title>
        <button className="bg-accent hover:bg-accent-400 hover:scale-105 cursor-pointer rounded-md py-1 px-3 text-base" onClick={() => setIsOpen(false)}>
          x
        </button>
      </section>
      <Divider className="mt-2 mb-4" direction="right" />
      <section>{children}</section>
    </aside>
  );
}
