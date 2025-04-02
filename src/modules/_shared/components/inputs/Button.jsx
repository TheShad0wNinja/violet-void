export default function Button({ children, onClick, className, fullWidth = false, uppercased = false }) {
  return (
    <button
      onClick={onClick}
      className={
        `bg-secondary ${ uppercased ? "uppercase" : "capitalize" } font-semibold hover:bg-accent-400 ${ fullWidth ? "w-full" : "" } cursor-pointer rounded-md py-2 px-3 active:scale-95 ` +
        (className ? className : "")
      }
    >
      {children}
    </button>
  );
}
