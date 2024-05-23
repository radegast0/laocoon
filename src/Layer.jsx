import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Layer = ({ handlePartClick }) => {
	const [activePart, setActivePart] = useState(0);
	const resetButtonRef = useRef(null);
	const text1 = useRef(null);
	const text2 = useRef(null);
	const text3 = useRef(null);

	const handleClick = (part) => {
		setActivePart(part);
		handlePartClick(part);
	};

	useEffect(() => {
		if (resetButtonRef.current) {
			if (activePart !== 0) {
				gsap.to(resetButtonRef.current, {
					opacity: 1,
					duration: 0.5,
					display: 'block',
				});
			} else {
				gsap.to(resetButtonRef.current, {
					opacity: 0,
					duration: 0.5,
					display: 'none',
				});
			}
		}

		if (text1.current) {
			if (activePart === 1) {
				gsap.to(text1.current, {
					opacity: 1,
					duration: 1,
					ease: 'power2.in',
				});
			} else {
				gsap.to(text1.current, {
					opacity: 0,
					duration: 0.5,
				});
			}
		}
		if (text2.current) {
			if (activePart === 2) {
				gsap.to(text2.current, {
					opacity: 1,
					duration: 1,
					ease: 'power2.in',
				});
			} else {
				gsap.to(text2.current, {
					opacity: 0,
					duration: 0.5,
				});
			}
		}
		if (text3.current) {
			if (activePart === 3) {
				gsap.to(text3.current, {
					opacity: 1,
					duration: 1,
					ease: 'power2.in',
				});
			} else {
				gsap.to(text3.current, {
					opacity: 0,
					duration: 0.5,
				});
			}
		}
	}, [activePart]);

	return (
		<div className="fixed top-0 left-0 h-dvh w-dvw text-white">
			<div className="max-w-5xl container flex flex-col mx-auto h-full">
				<div className="flex-1">
					<div className="w-full h-full">
						<div
							ref={text1}
							className="text-center p-12"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
							veniam, quis nostrud exercitation ullamco
						</div>
						<div className="flex flex-row justify-between">
							<div
								ref={text2}
								className="text-start p-12"
							>
								laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu
							</div>
							<div
								ref={text3}
								className="text-end p-12"
							>
								fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-row items-center justify-center text-sm md:text-xl py-8 gap-12">
					<button
						className="hover:text-gray-300"
						onClick={() => handleClick(1)}
					>
						Laocoön{' '}
					</button>
					<button
						className="hover:text-gray-300"
						onClick={() => handleClick(2)}
					>
						Antiphantes{' '}
					</button>
					<button
						className="hover:text-gray-300"
						onClick={() => handleClick(3)}
					>
						Thymbraeus{' '}
					</button>
				</div>
			</div>
			<button
				ref={resetButtonRef}
				onClick={() => handleClick(0)}
				className="opacity-0 text-2xl md:text-3xl lg:text-4xl fixed md:top-12 md:right-12 top-4 font-extrabold right-4"
			>
				&#10005;
			</button>
		</div>
	);
};

export default Layer;
