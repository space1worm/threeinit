import { useState } from "react";

// Components
import Navigation from "./components/navigation/Navigation.component";
import SettingsModal from "./components/modal/modals/Settings.modal";

// Three
import Scene from "./three/init";

/**
 * Entry point of the app
 *
 * @returns {JSX.Element} JSX Element.
 */
function App(): JSX.Element {
  const [show, setShow] = useState(true);

  return (
    <div className="h-screen">
      <Navigation />
      <SettingsModal show={!show} onClose={(): void => setShow(!show)} />
      <div className="absolute w-full h-full top-0 left-0">
        <Scene />
      </div>
    </div>
  );
}

export default App;
