import ThreeCanvas from "./components/ThreeCanvas.component";

/**
 * Entry point of the app
 *
 * @returns {JSX.Element} JSX Element.
 */
function App(): JSX.Element {
  return (
    <div className="bg-black h-screen">
      <ThreeCanvas />
    </div>
  );
}

export default App;
