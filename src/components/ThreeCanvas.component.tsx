import { useRef, useEffect } from "react";

import InitApp from "../three/init";
/**
 * Container of the threejs Scene
 *
 * @returns {JSX.Element} ReactElement
 */
export default function ThreeCanvas(): JSX.Element {
  const sceneRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    let ThreeAppController: InitApp;
    if (sceneRef.current) {
      ThreeAppController = new InitApp(sceneRef.current);
      ThreeAppController.init();
    }

    return () => ThreeAppController && ThreeAppController.destroy();
  }, []);

  return <div className="bg-black h-full w-full" ref={sceneRef}></div>;
}
