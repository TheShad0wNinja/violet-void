function Container({ children, className }) {
  return (
    <div className={"max-w-default mx-auto px-4 " + (className ? className : "")}>{children}</div>
  );
}

export default Container;
