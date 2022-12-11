import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import './App.css';
import { Vinyls } from './components/earth/Vinyls';
import Sphere from './components/sphere/Sphere';

function App() {
  return (
    <div className='app'>
      <Canvas
        camera={{
          fov: 90,
          position: [0.3, 0.3, 0.3],
        }}
      >
        {/* <Sphere /> */}
        <ambientLight intensity={0.1} />
        <directionalLight position={[1, 1, 1]} intensity={0.7} />
        <Vinyls />
      </Canvas>
    </div>
  );
}

export default App;
