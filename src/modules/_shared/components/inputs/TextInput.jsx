export default function TextInput({
  leftSection,
  rightSection,
  placeholder = "",
  value,
  setValue,
  onEnter,
  className,
  required,
  label: labelText
}) {
  let iconClasses = "";
  if (rightSection) iconClasses += " pr-12 ";

  if (leftSection) iconClasses += " pl-12 ";

  if (labelText) iconClasses += " pt-6"

  return (
    <div className={ "relative h-min " + (className ? className : "") }>
      {leftSection && (
        <span className="absolute inset-y-0 left-4 grid items-center justify-center">
          {leftSection}
        </span>
      )}
      { labelText && (
        <label className={ `absolute ${leftSection ? "left-12" : "left-5"} top-2 text-xs text-gray-200` }>{labelText}</label>
      ) }

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
