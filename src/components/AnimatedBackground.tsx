'use client'

import { Canvas } from '@react-three/fiber'
import StarField from './StarField'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} style={{ background: 'transparent' }}>
        <StarField />
      </Canvas>
    </div>
  )
}
