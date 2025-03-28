import Divider from "./Divider";

/**
 * @param {Boolean} withDivider
 */
export default function Title({ children, withDivider }) {
  return (
    <>
      <h1 className="text-3xl font-bold mt-2 mb-2">{children}</h1>
      {withDivider && <Divider direction="left" className="mb-4" />}
    </>
  );
}
