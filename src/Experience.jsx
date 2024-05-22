import { Environment, OrbitControls } from '@react-three/drei'
import React from 'react'
import Laocoon from './Laocoon'

const Experience = () => {
  return (
    <>
     <Environment background files={'./overcast_soil_puresky_4k.hdr'} />   
     <Laocoon />
     
     <OrbitControls />
    </>
  )
}

export default Experience