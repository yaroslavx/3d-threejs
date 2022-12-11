/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Roxy (https://sketchfab.com/RoxanneWolf27)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/tesla-semi-truck-6f90014adea6439784aecdc112c98152
title: Tesla Semi Truck
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Truck(props) {
  const { nodes, materials } = useGLTF('/truck.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.03, 1.7, 5.03]} rotation={[0, -0.01, -1.57]} scale={1.4}>
            <mesh geometry={nodes.Object_4.geometry} material={materials['Material.009']} />
            <mesh geometry={nodes.Object_5.geometry} material={materials['Material.007']} />
            <mesh geometry={nodes.Object_6.geometry} material={materials['Material.014']} />
          </group>
          <group position={[0.03, 1.7, 5.03]} rotation={[0, -0.01, -1.57]}>
            <mesh geometry={nodes.Object_8.geometry} material={materials['Material.013']} />
            <mesh geometry={nodes.Object_9.geometry} material={materials['Material.010']} />
            <mesh geometry={nodes.Object_10.geometry} material={materials['Material.006']} />
            <mesh geometry={nodes.Object_11.geometry} material={materials['Material.045']} />
            <mesh geometry={nodes.Object_12.geometry} material={materials['Material.047']} />
            <mesh geometry={nodes.Object_13.geometry} material={materials['Material.022']} />
            <mesh geometry={nodes.Object_14.geometry} material={materials['Material.048']} />
            <mesh geometry={nodes.Object_15.geometry} material={materials['Material.052']} />
            <mesh geometry={nodes.Object_16.geometry} material={materials['Material.050']} />
            <mesh geometry={nodes.Object_17.geometry} material={materials['Material.014']} />
            <mesh geometry={nodes.Object_18.geometry} material={materials['Material.051']} />
            <mesh geometry={nodes.Object_19.geometry} material={materials['Material.053']} />
            <mesh geometry={nodes.Object_20.geometry} material={materials['Material.057']} />
            <mesh geometry={nodes.Object_21.geometry} material={materials['Material.058']} />
            <mesh geometry={nodes.Object_22.geometry} material={materials['Material.066']} />
            <mesh geometry={nodes.Object_23.geometry} material={materials['Material.049']} />
            <mesh geometry={nodes.Object_24.geometry} material={materials.Material} />
            <mesh geometry={nodes.Object_25.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Object_26.geometry} material={materials['Material.002']} />
            <mesh geometry={nodes.Object_27.geometry} material={materials['Material.003']} />
          </group>
          <group position={[0.03, 1.7, 5.03]} rotation={[0, -0.01, -1.57]} scale={1.4}>
            <mesh geometry={nodes.Object_29.geometry} material={materials['Material.009']} />
            <mesh geometry={nodes.Object_30.geometry} material={materials['Material.014']} />
            <mesh geometry={nodes.Object_31.geometry} material={materials['Material.007']} />
          </group>
          <group position={[-4.47, 3.35, -0.42]} rotation={[0, -0.01, -1.57]}>
            <mesh geometry={nodes.Object_33.geometry} material={materials['Material.013']} />
            <mesh geometry={nodes.Object_34.geometry} material={materials['Material.010']} />
            <mesh geometry={nodes.Object_35.geometry} material={materials['Material.045']} />
            <mesh geometry={nodes.Object_36.geometry} material={materials['Material.047']} />
          </group>
          <group position={[4.6, 3.34, -0.36]} rotation={[0, -0.01, -1.57]}>
            <mesh geometry={nodes.Object_38.geometry} material={materials['Material.013']} />
            <mesh geometry={nodes.Object_39.geometry} material={materials['Material.010']} />
            <mesh geometry={nodes.Object_40.geometry} material={materials['Material.045']} />
            <mesh geometry={nodes.Object_41.geometry} material={materials['Material.047']} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/truck.gltf')
