import { Canvas, useLoader } from '@react-three/fiber';
import { useState } from 'react';
import { DoubleSide, TextureLoader } from 'three';
import './App.css';
import { OrbitControls } from '@react-three/drei';
import { Vinyls } from './components/earth/Vinyls';
import Sphere from './components/sphere/Sphere';
import road from './components/composition/road.jpg';
import { Truck } from './components/composition/Truck';

function App() {
  const textureMap = useLoader(TextureLoader, road);
  return (
    <div className='app'>
      <Canvas
        camera={{
          fov: 90,
          position: [10, 10, 10],
        }}
      >
        {/* <Sphere /> */}
        <ambientLight intensity={0.1} />
        <directionalLight position={[1, 1, 1]} intensity={0.7} />
        {/* <Vinyls /> */}
        <OrbitControls />
        <Truck />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.4, 0]}>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial map={textureMap} side={DoubleSide} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
