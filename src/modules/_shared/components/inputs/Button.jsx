export default function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={"bg-accent w-full rounded-md p-2 hover:bg-accent-400 cursor-pointer active:scale-95 " + (className ? className : "")}
    >
      {children}
    </button>
  );
}
