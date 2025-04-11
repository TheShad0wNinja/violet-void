/**
 * A button component
 * 
 * @param {Object} props
 * @param {Function} props.onClick The function trigger on button click
 * @param {string} props.className Additional classes to be added to the component
 * @param {boolean} [props.fullWidth=false] If the button should take full width of the container
 * @param {boolean} [props.uppercased=false] If the text should be UPPERCASED or not
 * @param {string} [props.type="submit"] Type of button when submitted
 *
 * @example
 * <Button onClick={handleClick} className="mt-4" fullWidth uppercased>
 *  Create
 * </Button>
 */
export default function Button({
  children,
  onClick,
  className,
  fullWidth = false,
  uppercased = false,
	type = "submit"
}) {
  return (
    <button
      onClick={onClick}
      className={
        `bg-secondary ${uppercased ? "uppercase" : "capitalize"} hover:bg-accent-400 font-semibold ${fullWidth ? "w-full" : ""} cursor-pointer rounded-md px-3 py-2 active:scale-95 ` +
        (className ? className : "")
      }
			type={type}
    >
      {children}
    </button>
  );
}
