interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

/**
 *
 * @param root0
 * @param root0.Icon
 * @returns {JSX.Element} menuIcon
 */
export default function MenuIcon({ Icon, ...other }: Props): JSX.Element {
  return (
    <button {...other} className="p-1 border-2 border-transparent hover:border-gray-600 rounded transition-all z-50">
      <Icon className="icon transition-all" />
    </button>
  );
}
