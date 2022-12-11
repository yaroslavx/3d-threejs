import { TextureLoader } from 'three';
import fence from './fence.jpg';
import { useLoader } from '@react-three/fiber';

function Sphere() {
  const textuteMap = useLoader(TextureLoader, fence);

  return (
    <mesh position={[0, 0, -2]}>
      <sphereGeometry args={[2, 32]} />
      <meshStandardMaterial map={textuteMap} />
    </mesh>
  );
}
export default Sphere;
