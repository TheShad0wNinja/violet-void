/**
 * A component that's used for text input
 * 
 * @param {Object} props
 * @param {JSX.Element} [props.leftSection] An element ( icon ) that'll be added to the left side of the input
 * @param {JSX.Element} [props.rightSection] An element ( icon ) that'll be added to the right side of the input
 * @param {string} [props.placeholder=""] The placeholder text placed in the input
 * @param {string} props.value The reactive state of the input
 * @param {Function} props.setValue The funciton to set the state of hte input
 * @param {Function} [props.onEnter] The function to run on manual submitting of the input
 * @param {string} [props.className] Additional classes to be added to the component
 * @param {boolean} [props.required = false] Whether the input is required or not
 * @param {string} [ props.label ] Add a label to the input
 * @returns {JSX.Element}
 * 
 * @example
 * <TextInput
 *  leftSection={<IconSearch size={18} />}
 *  label="Search"
 *  value={searchQuery}
 *  setValue={v => setSearchQuery(v)}
 *  required
 *  className="my-4"
 *  placeholder="Search for item..."
 * />
 */
export default function TextInput({
  leftSection,
  rightSection,
  placeholder = "",
  value,
  setValue,
  onEnter,
  className,
  required = false,
  label: labelText
}) {
  let iconClasses = "";
  if (rightSection) iconClasses += " pr-12 ";

  if (leftSection) iconClasses += " pl-12 ";

  if (labelText) iconClasses += " pt-6";

  return (
    <div className={"relative h-min " + (className ? className : "")}>
      {leftSection && (
        <span className="absolute inset-y-0 left-4 grid items-center justify-center">
          {leftSection}
        </span>
      )}
      {labelText && (
        <label
          className={`absolute ${leftSection ? "left-12" : "left-5"} top-2 text-xs text-gray-200`}
        >
          {labelText}
        </label>
      )}

      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={e => e.key === "Enter" && onEnter()}
        className={"bg-secondary-700 w-full rounded-md px-5 py-3" + iconClasses}
        required={required}
      />

      {rightSection && (
        <span className="absolute inset-y-0 right-4 grid items-center justify-center">
          {rightSection}
        </span>
      )}
    </div>
  );
}
