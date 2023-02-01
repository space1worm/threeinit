import { useEffect, useRef } from 'react'
import { animate, stopAnimation, rendererDomElement } from './scene';

/**
 * Entry point of the app
 *
 * @returns {JSX.Element} JSX Element!
 */
function App(): JSX.Element {
  const sceneRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (sceneRef.current) {
      console.log("started");
      sceneRef.current.append(rendererDomElement);
      animate();
    }

    return () => {
      sceneRef.current?.removeChild(rendererDomElement);
      stopAnimation();
      console.log("stopped");
    }
  }, [])

  return <div className='bg-black' ref={sceneRef}>
    <h1 className='font-bold text-white text-md'>Hello</h1>
  </div>
}

export default App
