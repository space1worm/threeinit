// Components
import Navigation from "./components/navigation/Navigation.component";
import ThreeCanvas from "./components/ThreeCanvas.component";

import SettingsModal from "./components/modal/modals/Settings.modal";
import { useState } from "react";

/**
 * Entry point of the app
 *
 * @returns {JSX.Element} JSX Element.
 */
function App(): JSX.Element {
  const [show, setShow] = useState(true);

  return (
    <div className="bg-black h-screen">
      <Navigation />
      <ThreeCanvas />
      <SettingsModal show={show} onClose={(): void => setShow(!show)} />
    </div>
  );
}

export default App;
