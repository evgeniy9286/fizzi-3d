"use client"
import {Canvas} from "@react-three/fiber"

type Props = object

export function ViewCanvas({}: Props) {
  return (
    <Canvas>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial/>
      </mesh>
    </Canvas>
  )
}
