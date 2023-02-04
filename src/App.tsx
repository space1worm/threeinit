import { useState } from "react";

import Navigation from "./components/navigation/Navigation.component";
import ThreeCanvas from "./components/ThreeCanvas.component";
import Modal from "./components/modal/Modal";

/**
 * Entry point of the app
 *
 * @returns {JSX.Element} JSX Element.
 */
function App(): JSX.Element {
  const [show, setShow] = useState<boolean>(true);

  return (
    <div className="bg-black h-screen">
      <Navigation />
      <ThreeCanvas />
      <button onClick={(): void => setShow(true)} className="absolute text-black bg-white left-12 top-10">
        Show Modal
      </button>
      <Modal title="test" show={show} onClose={(): void => setShow(false)}>
        <p>Hi</p>
      </Modal>
    </div>
  );
}

export default App;
