export default function TextInput({
  leftSection,
  rightSection,
  placeholder = "",
  value,
  setValue,
  onEnter
}) {
  let iconClasses = "";
  if (rightSection) iconClasses += " pr-12 ";

  if (leftSection) iconClasses += " pl-12 ";

  return (
    <div className="relative h-min">
      {leftSection && (
        <span className="absolute inset-y-0 left-4 grid items-center justify-center">
          {leftSection}
        </span>
      )}

      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={e => e.key === "Enter" && onEnter()}
        className={"bg-secondary-700 w-full rounded-3xl border-gray-300 px-5 py-3" + iconClasses}
      />

      {rightSection && (
        <span className="absolute inset-y-0 right-4 grid items-center justify-center">
          {rightSection}
        </span>
      )}
    </div>
  );
}
