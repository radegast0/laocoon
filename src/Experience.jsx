import { Environment, OrbitControls } from '@react-three/drei';
import React, { useRef } from 'react';
import Laocoon from './Laocoon';
import { useThree } from '@react-three/fiber';
import CameraControl from './CameraControl';

const Experience = ({ activePart }) => {
	const { camera } = useThree();
	const target = useRef();
	// console.log(camera?.position);
	// console.log(target?.current?.target);
	return (
		<>
			<Environment
				backgroundIntensity={0.1}
				environmentIntensity={1}
				background
				files={'./overcast_soil_puresky_4k.hdr'}
			/>
			<Laocoon />
			<OrbitControls
				camera={camera}
				ref={target}
				makeDefault
			/>
			<CameraControl
				activePart={activePart}
				targetRef={target}
				camera={camera}
			/>
		</>
	);
};

export default Experience;
