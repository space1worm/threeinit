interface Props {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

/**
 *
 * @param root0
 * @param root0.Icon
 * @returns {JSX.Element} menuIcon
 */
export default function MenuIcon({ Icon }: Props): JSX.Element {
  return (
    <button className="p-1 border-2 border-transparent hover:border-gray-600 rounded transition-all">
      <Icon className="icon transition-all" />
    </button>
  );
}
