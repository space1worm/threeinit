import { useEffect, useRef } from 'react';
import { ThreeScene } from './three/scene';
import ThreeApp from './three/animate';

/**
 * Entry point of the app
 *
 * @returns {JSX.Element} JSX Element.
 */
function App(): JSX.Element {
  const sceneRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (sceneRef.current) {
      sceneRef.current.append(ThreeScene.renderer.domElement);
      ThreeScene.setRendererSize(window.innerWidth, window.innerHeight);
      ThreeApp.startAnimation();
    }

    return () => {
      sceneRef.current?.removeChild(ThreeScene.renderer.domElement);
      ThreeApp.stopAnimation();
    }
  }, [])

  return <div className='bg-black h-screen' ref={sceneRef}>
    <h1 className='font-bold text-white text-md'>Hello</h1>
  </div>
}

export default App
