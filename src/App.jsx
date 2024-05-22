import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
// import './index.css';
import Layer from './Layer.jsx';
import Experience from './Experience.jsx';
import { Loader } from '@react-three/drei';

function App() {
	// const [activePart, setActivePart] = useState(0);
	// const handlePartClick = (part) => {
	// 	setActivePart(part);
	// };

	return (
		<>
				<Canvas
					camera={{
						position: [0, -2, 6],
					}}
				>
					<Experience />
				</Canvas>
			{/* <Layer handlePartClick={handlePartClick} /> */}
		</>
	);
}

export default App;
