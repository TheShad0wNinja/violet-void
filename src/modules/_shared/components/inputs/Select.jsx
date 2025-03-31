export default function Select({ options, setValue, value }) {
  return (
    <select
      name="Headline"
      id="Headline"
      className="mt-0.5 w-full border-accent-500 border p-2 rounded-md sm:text-sm "
      onChange={e => setValue(e.currentTarget.value)}
      value={value}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
