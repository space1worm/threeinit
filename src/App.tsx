import ThreeCanvas from "./components/ThreeCanvas.component";
import Navigation from "./components/navigation/Navigation.component";

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
