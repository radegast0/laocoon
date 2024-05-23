import { useEffect } from 'react';
import gsap from 'gsap';

const cameraConfigurations = {
    1: {
        target: { x: -0.44, y: 2.55, z: -1.17 },
        position: { x: 0.79, y: 3.63, z: 2.68 },
        duration: 1.25
    },
    2: {
        target: { x: -1.94, y: 1.24, z: 0.40 },
        position: { x: -0.13, y: 2.94, z: 2.00 },
        duration: 1.25
    },
    3: {
        target: { x: 1.94, y: 0, z: -0.50 },
        position: { x: 1.5, y: 2.52, z: 2.55 },
        duration: 1.25
    },
    default: {
        target: { x: 0, y: 0, z: 0 },
        position: { x: 0, y: -2, z: 6 },
        duration: 1.75
    }
};

const CameraControl = ({ activePart, targetRef, camera }) => {
    useEffect(() => {
        const config = cameraConfigurations[activePart] || cameraConfigurations.default;

        gsap.to(targetRef?.current?.target, {
            ...config.target,
            duration: config.duration,
            ease: 'power2.inOut'
        });
        gsap.to(camera?.position, {
            ...config.position,
            duration: config.duration,
            ease: 'power2.inOut'
        });
    }, [activePart, targetRef, camera]);

    return null; // Side effect only component
};

export default CameraControl;
