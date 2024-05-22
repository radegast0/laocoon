import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Layer = ({ handlePartClick }) => {
    const [activePart, setActivePart] = useState(0);
    const resetButtonRef = useRef(null);

    const handleClick = (part) => {
        setActivePart(part);
        handlePartClick(part);
    };

    useEffect(() => {
        if (resetButtonRef.current) {
            if (activePart !== 0) {
                gsap.to(resetButtonRef.current, { opacity: 1, duration: 0.5, display: 'block' });
            } else {
                gsap.to(resetButtonRef.current, { opacity: 0, duration: 0.5, display: 'none' });
            }
        }
    }, [activePart]);

    return (
        <div className="z-10 absolute top-0 left-0 text-gray w-full h-full">
            <div className="flex flex-row justify-center gap-12">
                <button onClick={() => handleClick(1)}>Laocoön </button>
                <button onClick={() => handleClick(2)}>Antiphantes </button>
                <button onClick={() => handleClick(3)}>Thymbraeus </button>
            </div>
            <button
                ref={resetButtonRef}
                onClick={() => handleClick(0)}
                className="opacity-0 display-none rounded-full mt-12 mx-auto"
            >
                reset
            </button>
        </div>
    );
};

export default Layer;
