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
		<div className="absolute inset-0 text-white font-mono">
			<div className="max-w-5xl mx-auto">
				<div className="flex justify-end">
					<button
						className="opacity-0 text-3xl font-extrabold p-12 hover:text-gray-300 transition-colors"
						ref={resetButtonRef}
						onClick={() => handleClick(0)}
					>
						&#10005;
					</button>
				</div>
				<div className="">
					<div
						ref={text1}
						className=" text-right max-w-[512px] mx-auto px-4 text-base lg:text-2xl font-thin"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco
					</div>
					<div className="flex">
						<div className="w-1/2 mr-auto">
							<div
								ref={text2}
								className="text-start text-balance md:p-12 p-4 text-base lg:text-2xl"
							>
								laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu
							</div>
						</div>
						<div className="w-1/2 ml-auto">
							<div
								ref={text3}
								className="text-end text-pretty md:p-12 p-4 text-base lg:text-2xl"
							>
								fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</div>
						</div>
					</div>
				</div>
				<div className="fixed font-serif sm:tracking-widest bottom-0 left-0 w-full">
					<div className="flex flex-row items-center justify-center  text-sm sm:text-base md:text-xl lg:text-2xl py-8 gap-12">
						<button
							className="hover:text-gray-300 transition-all"
							onClick={() => handleClick(1)}
						>
							Laocoön
						</button>
						<button
							className="hover:text-gray-300 transition-all"
							onClick={() => handleClick(2)}
						>
							Antiphantes
						</button>
						<button
							className="hover:text-gray-300 transition-all"
							onClick={() => handleClick(3)}
						>
							Thymbraeus
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Layer;
