import ThreeCanvas from "./components/threeCanvas.component";
import Navigation from "./components/navigation.component";

/**
 * Entry point of the app
 *
 * @returns {JSX.Element} JSX Element.
 */
function App(): JSX.Element {
  return (
    <div className="bg-black h-screen">
      <Navigation />
      <ThreeCanvas />
    </div>
  );
}

export default App;
