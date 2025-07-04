// import React, { useState, useEffect, useRef } from 'react';
// import { motion, useAnimation, useInView } from 'framer-motion';
// import { imagesProject } from '../../data/constants';
// import './styles.css';

// const ProjectImage = () => {
//     const project = imagesProject[0];
//     const containerRef = useRef(null);
//     const [activeIndex, setActiveIndex] = useState(0);
//     const isInView = useInView(containerRef, { once: false, amount: 0.3 });
//     const controls = useAnimation();

//     // Auto-advance images
//     useEffect(() => {
//         let interval;

//         if (isInView) {
//             // Start animation when in view
//             controls.start('visible');

//             // Set up auto-advancement
//             interval = setInterval(() => {
//                 setActiveIndex(prevIndex => (prevIndex + 1) % project.images.length);
//             }, 3000); // Change image every 3 seconds
//         } else {
//             controls.start('hidden');
//         }

//         return () => {
//             if (interval) clearInterval(interval);
//         };
//     }, [isInView, controls, project.images.length]);

//     // Animation variants
//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: { duration: 0.5 }
//         }
//     };

//     return (
//         <div className="mobile-gallery-container" ref={containerRef}>
//             <motion.h2
//                 className="gallery-title"
//                 initial={{ opacity: 0, y: -30 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
//                 transition={{ duration: 0.7 }}
//             >
//                 {project.title}
//             </motion.h2>

//             <motion.div
//                 className="gallery-description"
//                 initial={{ opacity: 0 }}
//                 animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//                 transition={{ duration: 0.7, delay: 0.2 }}
//             >
//                 Mobile application screenshots showcasing the user interface
//             </motion.div>

//             <motion.div
//                 className="device-showcase"
//                 variants={containerVariants}
//                 initial="hidden"
//                 animate={controls}
//             >
//                 {/* Main centered phone */}
//                 <div className="device device-main">
//                     {/* Phone frame elements */}
//                     <div className="device-frame">
//                         <div className="device-screen">
//                             {project.images.map((src, index) => (
//                                 <div
//                                     key={index}
//                                     className={`screen-slide ${index === activeIndex ? 'active' : ''}`}
//                                 >
//                                     <img
//                                         src={src}
//                                         alt={`${project.title} - Screen ${index + 1}`}
//                                         loading="lazy"
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                         <div className="device-notch">
//                             <div className="device-speaker"></div>
//                             <div className="device-camera"></div>
//                         </div>
//                         <div className="device-home-indicator"></div>
//                         <div className="device-buttons left">
//                             <div className="device-button volume-up"></div>
//                             <div className="device-button volume-down"></div>
//                         </div>
//                         <div className="device-buttons right">
//                             <div className="device-button power"></div>
//                         </div>
//                         <div className="device-reflection"></div>
//                     </div>

//                     {/* Screen indicator dots */}
//                     <div className="screen-indicators">
//                         {project.images.map((_, index) => (
//                             <div
//                                 key={index}
//                                 className={`indicator ${index === activeIndex ? 'active' : ''}`}
//                                 onClick={() => setActiveIndex(index)}
//                             ></div>
//                         ))}
//                     </div>

//                     {/* Screen counter */}
//                     <div className="screen-counter">
//                         {activeIndex + 1} / {project.images.length}
//                     </div>
//                 </div>

//                 {/* Decorative elements */}
//                 <div className="decorative-circle circle-1"></div>
//                 <div className="decorative-circle circle-2"></div>
//                 <div className="decorative-circle circle-3"></div>
//             </motion.div>
//         </div>
//     );
// };

// export default ProjectImage;
// import React, { useState, useEffect, useRef } from 'react';
// import { imagesProject } from '../../data/constants';
// import './styles.css';

// const ProjectImage = () => {
//     const project = imagesProject[0];
//     const containerRef = useRef(null);
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [direction, setDirection] = useState(null);
//     const [isAnimating, setIsAnimating] = useState(false);
//     const [isVisible, setIsVisible] = useState(false);

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

//     // Auto-advance images
//     useEffect(() => {
//         let interval;

//         if (isVisible && !isAnimating) {
//             // Set up auto-advancement
//             interval = setInterval(() => {
//                 handleNext();
//             }, 4000); // Change image every 4 seconds
//         }

//         return () => {
//             if (interval) clearInterval(interval);
//         };
//     }, [isVisible, isAnimating]);

//     // Calculate indices for visible slides
//     const getVisibleIndices = () => {
//         const totalSlides = project.images.length;

//         // For previous slide
//         const prevIndex = (activeIndex - 1 + totalSlides) % totalSlides;

//         // For next slide
//         const nextIndex = (activeIndex + 1) % totalSlides;

//         return { prevIndex, nextIndex };
//     };

//     // Handle next slide
//     const handleNext = () => {
//         if (isAnimating) return;

//         setDirection('next');
//         setIsAnimating(true);

//         setTimeout(() => {
//             setActiveIndex((prev) => (prev + 1) % project.images.length);
//             setIsAnimating(false);
//         }, 500); // Match with CSS transition duration
//     };

//     // Handle previous slide
//     const handlePrev = () => {
//         if (isAnimating) return;

//         setDirection('prev');
//         setIsAnimating(true);

//         setTimeout(() => {
//             setActiveIndex((prev) =>
//                 (prev - 1 + project.images.length) % project.images.length
//             );
//             setIsAnimating(false);
//         }, 500); // Match with CSS transition duration
//     };

//     // Go to specific slide
//     const goToSlide = (index) => {
//         if (index === activeIndex || isAnimating) return;

//         setDirection(index > activeIndex ? 'next' : 'prev');
//         setIsAnimating(true);

//         setTimeout(() => {
//             setActiveIndex(index);
//             setIsAnimating(false);
//         }, 500);
//     };

//     const { prevIndex, nextIndex } = getVisibleIndices();

//     return (
//         <div className="clean-phones-container" ref={containerRef}>
//             <div className={`phones-showcase ${isAnimating ? 'animating' : ''} ${direction}`}>
//                 {/* The three phone displays */}
//                 <div className="phone-left">
//                     <div className="phone-frame">
//                         <img
//                             src={project.images[prevIndex]}
//                             alt={`Screen ${prevIndex + 1}`}
//                             loading="lazy"
//                         />
//                     </div>
//                 </div>

//                 <div className="phone-center">
//                     <div className="phone-frame">
//                         <img
//                             src={project.images[activeIndex]}
//                             alt={`Screen ${activeIndex + 1}`}
//                             loading="lazy"
//                         />
//                     </div>
//                 </div>

//                 <div className="phone-right">
//                     <div className="phone-frame">
//                         <img
//                             src={project.images[nextIndex]}
//                             alt={`Screen ${nextIndex + 1}`}
//                             loading="lazy"
//                         />
//                     </div>
//                 </div>
//             </div>

//             {/* Navigation controls */}
//             <div className="navigation-controls">
//                 <button className="nav-button prev" onClick={handlePrev}>
//                     &lt;
//                 </button>

//                 <div className="screen-indicators">
//                     {project.images.map((_, index) => (
//                         <div
//                             key={index}
//                             className={`indicator ${index === activeIndex ? 'active' : ''}`}
//                             onClick={() => goToSlide(index)}
//                         ></div>
//                     ))}
//                 </div>

//                 <button className="nav-button next" onClick={handleNext}>
//                     &gt;
//                 </button>
//             </div>

//             {/* Screen counter */}
//             <div className="screen-counter">
//                 {activeIndex + 1} / {project.images.length}
//             </div>
//         </div>
//     );
// };

// export default ProjectImage;



import React, { useState, useEffect, useRef } from 'react';
import { imagesProject } from '../../data/constants';
import './styles.css';

const ProjectImage = () => {
    const project = imagesProject[0];
    const containerRef = useRef(null);
    const [currentSetIndex, setCurrentSetIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [animationType, setAnimationType] = useState('fade-scale'); // Default animation type

    // Calculate number of phones and sets
    const totalImages = project.images.length;
    const totalSets = Math.ceil(totalImages / 3);

    // Check if element is in viewport
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

    // Auto-advance sets
    useEffect(() => {
        let interval;

        if (isVisible && !isAnimating && totalSets > 1) {
            // Set up auto-advancement
            interval = setInterval(() => {
                // Rotate between different animation types for variety
                const animations = ['fade-scale', 'slide-3d', 'flip-staggered', 'zoom-rotate'];
                const nextAnimIndex = (animations.indexOf(animationType) + 1) % animations.length;

                handleNext(animations[nextAnimIndex]);
            }, 5000); // Change set every 5 seconds
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isVisible, isAnimating, totalSets, animationType, currentSetIndex]);

    // Generate sets of phones
    const getPhoneSet = (setIndex) => {
        const setPhones = [];
        const startIndex = setIndex * 3;

        for (let j = 0; j < 3; j++) {
            const imageIndex = startIndex + j;
            if (imageIndex < totalImages) {
                setPhones.push({
                    src: project.images[imageIndex],
                    index: imageIndex
                });
            } else {
                // Add empty placeholder to maintain 3 phones per set
                setPhones.push(null);
            }
        }

        return setPhones;
    };

    // Handle navigation
    const handleNext = (animType = 'fade-scale') => {
        if (isAnimating || totalSets <= 1) return;

        setAnimationType(animType);
        setIsAnimating(true);

        setTimeout(() => {
            setCurrentSetIndex((prev) => (prev + 1) % totalSets);

            // Allow time for the new set to render before ending animation
            setTimeout(() => {
                setIsAnimating(false);
            }, 100);
        }, 700); // Match with longest animation duration
    };

    const handlePrev = (animType = 'fade-scale') => {
        if (isAnimating || totalSets <= 1) return;

        setAnimationType(animType);
        setIsAnimating(true);

        setTimeout(() => {
            setCurrentSetIndex((prev) => (prev - 1 + totalSets) % totalSets);

            // Allow time for the new set to render before ending animation
            setTimeout(() => {
                setIsAnimating(false);
            }, 100);
        }, 700); // Match with longest animation duration
    };

    const goToSet = (index) => {
        if (index === currentSetIndex || isAnimating) return;

        // Choose animation based on direction
        const animType = index > currentSetIndex ? 'slide-3d' : 'flip-staggered';

        setAnimationType(animType);
        setIsAnimating(true);

        setTimeout(() => {
            setCurrentSetIndex(index);

            // Allow time for the new set to render before ending animation
            setTimeout(() => {
                setIsAnimating(false);
            }, 100);
        }, 700);
    };

    // Get the current set of phones
    const currentPhones = getPhoneSet(currentSetIndex);

    return (
        <div className="enhanced-gallery-container" ref={containerRef}>
            <div className={`gallery-viewport ${animationType} ${isAnimating ? 'animating' : ''}`}>
                {/* Current set */}
                <div className="phone-set current-set">
                    {currentPhones.map((phone, index) => (
                        phone && (
                            <div
                                key={index}
                                className={`phone-frame phone-${index}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <img
                                    src={phone.src}
                                    alt={`Screen ${phone.index + 1}`}
                                    loading="lazy"
                                />
                            </div>
                        )
                    ))}
                </div>

                {/* Progress bar for set transitions */}
                {totalSets > 1 && !isAnimating && (
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

            {/* Only show navigation if we have more than one set */}
            {totalSets > 1 && (
                <>
                    {/* Navigation controls */}
                    <div className="navigation-controls">
                        <button
                            className="nav-button prev"
                            onClick={() => handlePrev('flip-staggered')}
                            disabled={isAnimating}
                        >
                            &lt;
                        </button>

                        <div className="set-indicators">
                            {Array.from({ length: totalSets }).map((_, index) => (
                                <div
                                    key={index}
                                    className={`indicator ${index === currentSetIndex ? 'active' : ''}`}
                                    onClick={() => goToSet(index)}
                                ></div>
                            ))}
                        </div>

                        <button
                            className="nav-button next"
                            onClick={() => handleNext('slide-3d')}
                            disabled={isAnimating}
                        >
                            &gt;
                        </button>
                    </div>

                    {/* Set counter */}
                    <div className="set-counter">
                        {currentSetIndex + 1} / {totalSets}
                    </div>
                </>
            )}
        </div>
    );
};

export default ProjectImage;

