import { ReactComponent as MenuLogo } from "../assets/svg/menu.svg";

import MenuIcon from "./menuIcon.component";

/**
 *
 */
export default function Navigation(): JSX.Element {
  return (
    <div className="bg-black flex justify-center">
      <div className="flex justify-center bg-dark rounded-sm pt-2 pb-2">
        <nav className="flex items-center gap-4 mr-2 ml-2">
          <MenuIcon Icon={MenuLogo} />
          <MenuIcon Icon={MenuLogo} />
          <MenuIcon Icon={MenuLogo} />
          <MenuIcon Icon={MenuLogo} />
          <MenuIcon Icon={MenuLogo} />
        </nav>
      </div>
    </div>
  );
}
