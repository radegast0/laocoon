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
        <div className="z-10 fixed top-0 left-0 text-white w-dvw h-dvh">
            <div className="flex flex-row h-full items-end justify-center text-sm md:text-xl py-8 gap-12">
                <button className='hover:text-gray-300' onClick={() => handleClick(1)}>Laocoön </button>
                <button className='hover:text-gray-300' onClick={() => handleClick(2)}>Antiphantes </button>
                <button className='hover:text-gray-300' onClick={() => handleClick(3)}>Thymbraeus </button>
            </div>
            <button
                ref={resetButtonRef}
                onClick={() => handleClick(0)}
                className="opacity-0 text-5xl display-none  fixed top-12 right-12"
            >
                &#10005;
            </button>
        </div>
    );
};

export default Layer;
