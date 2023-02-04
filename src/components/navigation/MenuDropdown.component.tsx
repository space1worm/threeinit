interface Props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode | React.ReactNode[];
}

/**
 *
 * @param root0
 * @param root0.children
 * @param root0.className
 */
export default function MenuDropdown({ children, className }: Props): JSX.Element {
  return (
    <div
      className={`fixed hidden group-hover:flex group-active:flex flex-col bg-dark border border-gray-600 rounded ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
}
