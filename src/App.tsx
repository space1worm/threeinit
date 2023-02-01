import { useEffect, useRef } from 'react';
import { ThreeScene } from './three/scene';
import AnimateThree from './three/animate';

/**
 * Entry point of the app
 *
 * @returns {JSX.Element} JSX Element
 */
function App(): JSX.Element {
  const sceneRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (sceneRef.current) {
      console.log("started");
      sceneRef.current.append(ThreeScene.renderer.domElement);
      ThreeScene.setRendererSize(window.innerWidth, window.innerHeight);
      AnimateThree.init();
    }

    return () => {
      sceneRef.current?.removeChild(ThreeScene.renderer.domElement);
      AnimateThree.stopAnimation();
      console.log("stopped");
    }
  }, [])

  return <div className='bg-black h-screen' ref={sceneRef}>
    <h1 className='font-bold text-white text-md'>Hello</h1>
  </div>
}

export default App
