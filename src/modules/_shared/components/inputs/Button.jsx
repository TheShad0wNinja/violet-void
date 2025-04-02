export default function Button({ children, onClick, className, fullWidth = false }) {
  return (
    <button
      onClick={onClick}
      className={
        `bg-secondary uppercase font-semibold hover:bg-accent-400 ${ fullWidth ? "w-full" : "" } cursor-pointer rounded-md p-2 active:scale-95 ` +
        (className ? className : "")
      }
    >
      {children}
    </button>
  );
}
