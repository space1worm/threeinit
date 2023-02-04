import { ReactComponent as MenuLogo } from "../../assets/svg/menu.svg";
import { ReactComponent as EventsIcon } from "../../assets/svg/events.svg";

import { ReactComponent as WireframeIcon } from "../../assets/svg/wireframe.svg";
import { ReactComponent as RoadIcon } from "../../assets/svg/road.svg";
import { ReactComponent as InfoIcon } from "../../assets/svg/info.svg";
import { ReactComponent as FullScreenIcon } from "../../assets/svg/fullscreen.svg";

import MenuIcon from "./MenuIcon.component";
import DroneMenu from "./DroneMenu.component";
import CameraViewMenu from "./CameraViewMenu.component";
import GeometryCutsMenu from "./GeometryCutsMenu.component";
import OpacirtyMenu from "./OpacirtyMenu.component";

/**
 *
 */
export default function Navigation(): JSX.Element {
  return (
    <div className="flex justify-center items-center top-0 w-full z-50">
      <nav className="flex items-center p-2 rounded-sm bg-dark gap-4 w-auto overflow-x-auto">
        <MenuIcon Icon={MenuLogo} />
        <MenuIcon Icon={EventsIcon} />
        <DroneMenu />
        <CameraViewMenu />
        <GeometryCutsMenu />
        <OpacirtyMenu />
        <MenuIcon Icon={WireframeIcon} />
        <MenuIcon Icon={RoadIcon} />
        <MenuIcon Icon={InfoIcon} />
        <MenuIcon Icon={FullScreenIcon} />
      </nav>
    </div>
  );
}
