import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';
import { Suspense, useState } from 'react';
import { Loader } from '@react-three/drei';
import Layer from './Layer.jsx';
import './index.css';

function App() {
	const [activePart, setActivePart] = useState(0);
	const handlePartClick = (part) => {
		setActivePart(part);
	};

	return (
		<>
			<Loader containerStyles={{ backgroundColor: '#5a5856' }} />
			<Canvas
				style={{ position: 'absolute', inset: 0 }}
				camera={{ fov: 70, position: [0, -2, 6] }}
			>
				<Suspense>
					<Experience activePart={activePart} />
				</Suspense>
			</Canvas>
			<Layer handlePartClick={handlePartClick} />
		</>
	);
}

export default App;
