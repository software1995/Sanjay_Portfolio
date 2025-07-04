// import React, { useState, useEffect, useRef } from 'react';
// import { imagesProject } from '../../data/constants';
// import './styles.css';

// const ProjectImage = () => {
//     const project = imagesProject[0];
//     const containerRef = useRef(null);
//     const [currentSetIndex, setCurrentSetIndex] = useState(0);
//     const [isAnimating, setIsAnimating] = useState(false);
//     const [isVisible, setIsVisible] = useState(false);
//     const [animationType, setAnimationType] = useState('fade-scale'); // Default animation type

//     // Calculate number of phones and sets
//     const totalImages = project.images.length;
//     const totalSets = Math.ceil(totalImages / 3);

//     // Check if element is in viewport
//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach(entry => {
//                     setIsVisible(entry.isIntersecting);
//                 });
//             },
//             { threshold: 0.3 }
//         );

//         if (containerRef.current) {
//             observer.observe(containerRef.current);
//         }

//         return () => {
//             if (containerRef.current) {
//                 observer.unobserve(containerRef.current);
//             }
//         };
//     }, []);

//     // Auto-advance sets
//     useEffect(() => {
//         let interval;

//         if (isVisible && !isAnimating && totalSets > 1) {
//             // Set up auto-advancement
//             interval = setInterval(() => {
//                 // Rotate between different animation types for variety
//                 const animations = ['fade-scale', 'slide-3d', 'flip-staggered', 'zoom-rotate'];
//                 const nextAnimIndex = (animations.indexOf(animationType) + 1) % animations.length;

//                 handleNext(animations[nextAnimIndex]);
//             }, 5000); // Change set every 5 seconds
//         }

//         return () => {
//             if (interval) clearInterval(interval);
//         };
//     }, [isVisible, isAnimating, totalSets, animationType, currentSetIndex]);

//     // Generate sets of phones
//     const getPhoneSet = (setIndex) => {
//         const setPhones = [];
//         const startIndex = setIndex * 3;

//         for (let j = 0; j < 3; j++) {
//             const imageIndex = startIndex + j;
//             if (imageIndex < totalImages) {
//                 setPhones.push({
//                     src: project.images[imageIndex],
//                     index: imageIndex
//                 });
//             } else {
//                 // Add empty placeholder to maintain 3 phones per set
//                 setPhones.push(null);
//             }
//         }

//         return setPhones;
//     };

//     // Handle navigation
//     const handleNext = (animType = 'fade-scale') => {
//         if (isAnimating || totalSets <= 1) return;

//         setAnimationType(animType);
//         setIsAnimating(true);

//         setTimeout(() => {
//             setCurrentSetIndex((prev) => (prev + 1) % totalSets);

//             // Allow time for the new set to render before ending animation
//             setTimeout(() => {
//                 setIsAnimating(false);
//             }, 100);
//         }, 700); // Match with longest animation duration
//     };

//     const handlePrev = (animType = 'fade-scale') => {
//         if (isAnimating || totalSets <= 1) return;

//         setAnimationType(animType);
//         setIsAnimating(true);

//         setTimeout(() => {
//             setCurrentSetIndex((prev) => (prev - 1 + totalSets) % totalSets);

//             // Allow time for the new set to render before ending animation
//             setTimeout(() => {
//                 setIsAnimating(false);
//             }, 100);
//         }, 700); // Match with longest animation duration
//     };

//     const goToSet = (index) => {
//         if (index === currentSetIndex || isAnimating) return;

//         // Choose animation based on direction
//         const animType = index > currentSetIndex ? 'slide-3d' : 'flip-staggered';

//         setAnimationType(animType);
//         setIsAnimating(true);

//         setTimeout(() => {
//             setCurrentSetIndex(index);

//             // Allow time for the new set to render before ending animation
//             setTimeout(() => {
//                 setIsAnimating(false);
//             }, 100);
//         }, 700);
//     };

//     // Get the current set of phones
//     const currentPhones = getPhoneSet(currentSetIndex);

//     return (
//         <div className="enhanced-gallery-container" ref={containerRef}>
//             <div className={`gallery-viewport ${animationType} ${isAnimating ? 'animating' : ''}`}>
//                 {/* Current set */}
//                 <div className="phone-set current-set">
//                     {currentPhones.map((phone, index) => (
//                         phone && (
//                             <div
//                                 key={index}
//                                 className={`phone-frame phone-${index}`}
//                                 style={{ animationDelay: `${index * 0.1}s` }}
//                             >
//                                 <img
//                                     src={phone.src}
//                                     alt={`Screen ${phone.index + 1}`}
//                                     loading="lazy"
//                                 />
//                             </div>
//                         )
//                     ))}
//                 </div>

//                 {/* Progress bar for set transitions */}
//                 {totalSets > 1 && !isAnimating && (
//                     <div className="set-progress-container">
//                         <div
//                             className="set-progress-bar"
//                             style={{
//                                 animation: `progressBar 5s linear`,
//                                 animationPlayState: isVisible ? 'running' : 'paused'
//                             }}
//                         ></div>
//                     </div>
//                 )}
//             </div>

//             {/* Only show navigation if we have more than one set */}
//             {totalSets > 1 && (
//                 <>
//                     {/* Navigation controls */}
//                     <div className="navigation-controls">
//                         <button
//                             className="nav-button prev"
//                             onClick={() => handlePrev('flip-staggered')}
//                             disabled={isAnimating}
//                         >
//                             &lt;
//                         </button>

//                         <div className="set-indicators">
//                             {Array.from({ length: totalSets }).map((_, index) => (
//                                 <div
//                                     key={index}
//                                     className={`indicator ${index === currentSetIndex ? 'active' : ''}`}
//                                     onClick={() => goToSet(index)}
//                                 ></div>
//                             ))}
//                         </div>

//                         <button
//                             className="nav-button next"
//                             onClick={() => handleNext('slide-3d')}
//                             disabled={isAnimating}
//                         >
//                             &gt;
//                         </button>
//                     </div>

//                     {/* Set counter */}
//                     <div className="set-counter">
//                         {currentSetIndex + 1} / {totalSets}
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };

// export default ProjectImage;

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { imagesProject } from '../../data/constants';
import './styles.css';

const ProjectImage = () => {
    const project = imagesProject[0];
    const containerRef = useRef(null);
    const [currentSetIndex, setCurrentSetIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [animationType, setAnimationType] = useState('galaxy-shuffle');
    const [direction, setDirection] = useState(1);

    // Mouse tracking for parallax effect - scales with container size
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    const totalImages = project.images.length;
    const totalSets = Math.ceil(totalImages / 3);

    // --- Animation Variants for the entire phone set ---
    // Uses 'calc()' and percentage values for 'x' and 'y' to ensure responsiveness
    const setVariants = {
        'galaxy-shuffle': {
            initial: {
                opacity: 0,
                scale: 0.7,
                rotateY: direction > 0 ? -90 : 90,
                x: direction > 0 ? 'calc(-50% - 100vw)' : 'calc(-50% + 100vw)', // Moves relative to viewport width
                y: '-50%', // Centers vertically
                transition: { duration: 0.01 }
            },
            animate: {
                opacity: 1,
                scale: 1,
                rotateY: 0,
                x: '-50%', // Animates to center
                y: '-50%',
                transition: {
                    type: "spring",
                    stiffness: 70,
                    damping: 10,
                    mass: 0.8,
                    delayChildren: 0.3,
                    staggerChildren: 0.1
                }
            },
            exit: {
                opacity: 0,
                scale: 1.2,
                rotateY: direction > 0 ? 90 : -90,
                x: direction > 0 ? 'calc(-50% + 100vw)' : 'calc(-50% - 100vw)',
                y: '-50%',
                transition: {
                    type: "spring",
                    stiffness: 50,
                    damping: 8,
                    mass: 0.6,
                    staggerChildren: 0.05,
                    staggerDirection: -1
                }
            },
        },
        'slide-3d': {
            initial: {
                opacity: 0,
                x: direction > 0 ? 'calc(-50% + 150%)' : 'calc(-50% - 150%)', // Relative to element's width
                y: '-50%',
                rotateY: direction > 0 ? 60 : -60,
                z: -300,
                filter: 'blur(8px)',
                perspective: 1000,
            },
            animate: {
                opacity: 1,
                x: '-50%',
                y: '-50%',
                rotateY: 0,
                z: 0,
                filter: 'blur(0px)',
                transition: {
                    type: "spring",
                    stiffness: 80,
                    damping: 15,
                    mass: 1,
                    delayChildren: 0.2,
                    staggerChildren: 0.08
                }
            },
            exit: {
                opacity: 0,
                x: direction > 0 ? 'calc(-50% - 150%)' : 'calc(-50% + 150%)',
                y: '-50%',
                rotateY: direction > 0 ? -60 : 60,
                z: -300,
                filter: 'blur(8px)',
                transition: { duration: 0.8, ease: "easeIn" }
            },
        },
        'dynamic-flip': {
            initial: {
                opacity: 0,
                x: '-50%',
                y: '-50%',
                rotateX: direction > 0 ? 120 : -120,
                scale: 0.6,
                perspective: 1000,
                filter: 'brightness(0.5)'
            },
            animate: {
                opacity: 1,
                x: '-50%',
                y: '-50%',
                rotateX: 0,
                scale: 1,
                filter: 'brightness(1)',
                transition: {
                    type: "spring",
                    stiffness: 90,
                    damping: 12,
                    mass: 0.8,
                    delayChildren: 0.2,
                    staggerChildren: 0.08
                }
            },
            exit: {
                opacity: 0,
                x: '-50%',
                y: '-50%',
                rotateX: direction > 0 ? -120 : 120,
                scale: 0.6,
                filter: 'brightness(0.5)',
                transition: { duration: 0.7, ease: "easeIn" }
            },
        },
        'advanced-zoom-rotate': {
            initial: {
                opacity: 0, scale: 0.2, rotate: direction > 0 ? -30 : 30,
                x: '-50%',
                y: direction > 0 ? 'calc(-50% + 200px)' : 'calc(-50% - 200px)' // Using fixed px here, consider vh for larger shifts if needed
            },
            animate: {
                opacity: 1,
                scale: 1,
                rotate: 0,
                x: '-50%',
                y: '-50%',
                transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    mass: 0.7,
                    delayChildren: 0.2,
                    staggerChildren: 0.08
                }
            },
            exit: {
                opacity: 0,
                scale: 0.2,
                rotate: direction > 0 ? 30 : -30,
                x: '-50%',
                y: direction > 0 ? 'calc(-50% - 200px)' : 'calc(-50% + 200px)',
                transition: { duration: 0.6, ease: "easeIn" }
            },
        },
    };

    // --- Variants for individual phone appearance within a set ---
    // Scale values are percentages of their container, adapting automatically
    const phoneChildVariants = {
        initial: (index) => ({
            opacity: 0,
            y: 80, // Can consider 'vh' units here for larger devices, but px is often fine for small offsets
            scale: index === 1 ? 0.9 : 0.7,
            rotateX: 20
        }),
        animate: (index) => ({
            opacity: 1,
            y: 0,
            scale: index === 1 ? 1.05 : 0.85,
            rotateX: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.6
            }
        }),
        exit: (index) => ({
            opacity: 0,
            y: -80,
            scale: index === 1 ? 0.9 : 0.7,
            rotateX: -20,
            transition: { duration: 0.3 }
        }),
        wobble: {
            y: [0, -5, 0],
            rotateZ: [0, 0.5, -0.5, 0],
            transition: {
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: Math.random() * 2
            }
        }
    };

    // Intersection Observer (No change, works universally)
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    setIsVisible(entry.isIntersecting);
                });
            },
            { threshold: 0.3 }
        );
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    // Mouse tracking effect for parallax (Normalization makes it responsive)
    useEffect(() => {
        const handleMouseMove = (event) => {
            if (containerRef.current) {
                const { left, top, width, height } = containerRef.current.getBoundingClientRect();
                const x = ((event.clientX - left) / width) * 2 - 1;
                const y = ((event.clientY - top) / height) * 2 - 1;
                setMouseX(x);
                setMouseY(y);
            }
        };

        const handleMouseLeave = () => {
            setMouseX(0);
            setMouseY(0);
        };

        const currentContainer = containerRef.current;
        if (currentContainer) {
            currentContainer.addEventListener('mousemove', handleMouseMove);
            currentContainer.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (currentContainer) {
                currentContainer.removeEventListener('mousemove', handleMouseMove);
                currentContainer.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    // Auto-advance sets (No change, timing is absolute)
    useEffect(() => {
        let interval;
        if (isVisible && totalSets > 1) {
            interval = setInterval(() => {
                const animations = ['galaxy-shuffle', 'slide-3d', 'dynamic-flip', 'advanced-zoom-rotate'];
                const nextAnimIndex = (animations.indexOf(animationType) + 1) % animations.length;
                handleNavigation((currentSetIndex + 1) % totalSets, animations[nextAnimIndex], 1);
            }, 5000);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isVisible, totalSets, animationType, currentSetIndex]);

    const getPhoneSet = (setIndex) => {
        const setPhones = [];
        const startIndex = setIndex * 3;
        for (let j = 0; j < 3; j++) {
            const imageIndex = startIndex + j;
            if (imageIndex < totalImages) {
                setPhones.push({ src: project.images[imageIndex], index: j });
            } else {
                setPhones.push(null);
            }
        }
        return setPhones;
    };

    const handleNavigation = (newIndex, animType, newDirection) => {
        if (newIndex === currentSetIndex) return;
        setDirection(newDirection);
        setAnimationType(animType);
        setCurrentSetIndex(newIndex);
    };

    const handleNext = (animType = 'slide-3d') => {
        handleNavigation((currentSetIndex + 1) % totalSets, animType, 1);
    };

    const handlePrev = (animType = 'dynamic-flip') => {
        handleNavigation((currentSetIndex - 1 + totalSets) % totalSets, animType, -1);
    };

    const goToSet = (index) => {
        if (index === currentSetIndex) return;
        const newDirection = index > currentSetIndex ? 1 : -1;
        const animType = newDirection > 0 ? 'slide-3d' : 'dynamic-flip';
        handleNavigation(index, animType, newDirection);
    };

    const currentPhones = getPhoneSet(currentSetIndex);

    const parallaxOffsetX = mouseX * 30; // Parallax multiplier can be adjusted for different screen sizes if needed
    const parallaxOffsetY = mouseY * 20;

    return (
        <div className="enhanced-gallery-container" ref={containerRef}>
            <div className="gallery-viewport">
                <AnimatePresence>
                    <motion.div
                        key={currentSetIndex}
                        className="phone-set current-set"
                        variants={setVariants[animationType]}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        custom={direction}
                        style={{
                            translateX: parallaxOffsetX,
                            translateY: parallaxOffsetY,
                        }}
                        transition={{
                            translateX: { type: "spring", stiffness: 100, damping: 20 },
                            translateY: { type: "spring", stiffness: 100, damping: 20 },
                        }}
                    >
                        {currentPhones.map((phone, index) => (
                            phone && (
                                <motion.div
                                    key={`${currentSetIndex}-${phone.index}`}
                                    className={`phone-frame phone-${index}`}
                                    variants={phoneChildVariants}
                                    initial="initial"
                                    animate={['animate', 'wobble']}
                                    exit="exit"
                                    custom={index}
                                >
                                    <img
                                        src={phone.src}
                                        alt={`Screen ${phone.index + 1}`}
                                        loading="lazy"
                                    />
                                </motion.div>
                            )
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Progress bar */}
                {totalSets > 1 && (
                    <div className="set-progress-container">
                        <div
                            className="set-progress-bar"
                            style={{
                                animation: `progressBar 5s linear`,
                                animationPlayState: isVisible ? 'running' : 'paused'
                            }}
                        ></div>
                    </div>
                )}
            </div>

            {/* Navigation controls */}
            {totalSets > 1 && (
                <>
                    <div className="navigation-controls">
                        <motion.button
                            className="nav-button prev"
                            onClick={() => handlePrev('dynamic-flip')}
                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        >
                            &lt;
                        </motion.button>

                        <div className="set-indicators">
                            {Array.from({ length: totalSets }).map((_, index) => (
                                <motion.div
                                    key={index}
                                    className={`indicator ${index === currentSetIndex ? 'active' : ''}`}
                                    onClick={() => goToSet(index)}
                                    whileHover={{ scale: 1.3, backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                >
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            className="nav-button next"
                            onClick={() => handleNext('slide-3d')}
                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        >
                            &gt;
                        </motion.button>
                    </div>

                    <div className="set-counter">
                        {currentSetIndex + 1} / {totalSets}
                    </div>
                </>
            )}
        </div>
    );
};

export default ProjectImage;