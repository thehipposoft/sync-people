'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loading = () => {
    const svgRef = useRef<SVGSVGElement>(null);
    const tealSectionRef = useRef<SVGPathElement>(null);
    const purpleSectionRef = useRef<SVGPathElement>(null);
    const orangeSectionRef = useRef<SVGPathElement>(null);
    const dotsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const svg = svgRef.current;
        const tealSection = tealSectionRef.current;
        const purpleSection = purpleSectionRef.current;
        const orangeSection = orangeSectionRef.current;
        const dots = dotsRef.current;

        if (!svg || !tealSection || !purpleSection || !orangeSection || !dots) return;

        // Initial state - hide all elements
        gsap.set([tealSection, purpleSection, orangeSection], {
            opacity: 0,
            scale: 0.8,
            transformOrigin: "center center"
        });
        gsap.set(svg, { scale: 0.8, opacity: 0 });
        gsap.set(dots.children, { y: 20, opacity: 0 });

        // Create master timeline
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

        // Animate SVG container entrance
        tl.to(svg, {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.7)"
        })

        // Animate sections sequentially with morphing effect
        .to(purpleSection, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "elastic.out(1, 0.3)"
        }, "-=0.2")

        .to(tealSection, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "elastic.out(1, 0.3)"
        }, "-=0.4")

        .to(orangeSection, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "elastic.out(1, 0.3)"
        }, "-=0.4")

        // Add floating animation to the whole SVG
        .to(svg, {
            y: -10,
            duration: 1.5,
            ease: "power2.inOut",
            yoyo: true,
            repeat: 1
        }, "-=0.5")

        // Animate dots
        .to(dots.children, {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.1,
            ease: "back.out(1.7)"
        }, "-=1")

        // Add pulsing effect to sections
        .to([tealSection, purpleSection, orangeSection], {
            scale: 1.1,
            duration: 0.6,
            ease: "power2.inOut",
            stagger: 0.2,
            yoyo: true,
            repeat: 1
        }, "-=0.5")

        // Pause before restart
        .to({}, { duration: 1 });

        // Cleanup
        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-50 to-blue-50">
            <div className="relative flex flex-col items-center">
                {/* Animated SVG Logo */}
                <div>
                    <svg
                        ref={svgRef}
                        xmlns="http://www.w3.org/2000/svg"
                        width="120"
                        height="125"
                        viewBox="0 0 289 302"
                        fill="none"
                    >
                        <mask id="mask0_2001_2533" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="151" y="157" width="139" height="145">
                            <path d="M151.703 229.129C151.703 189.351 183.949 157.104 223.728 157.104H289V232.506C289 270.419 258.265 301.154 220.351 301.154C182.438 301.154 151.703 270.419 151.703 232.506V229.129Z" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_2001_2533)">
                            <path
                                ref={tealSectionRef}
                                d="M151.703 229.129C151.703 189.351 183.949 157.104 223.728 157.104H289V232.506C289 270.419 258.265 301.154 220.351 301.154C182.438 301.154 151.703 270.419 151.703 232.506V229.129Z"
                                fill="#3EC1AA"
                            />
                        </g>
                        <mask id="mask1_2001_2533" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="138" height="302">
                            <path d="M0 68.6488C0 30.7351 30.7351 0 68.6488 0C106.562 0 137.298 30.7351 137.298 68.6488V301.154C61.4702 301.154 0 239.684 0 163.857V68.6488Z" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask1_2001_2533)">
                            <path
                                ref={purpleSectionRef}
                                d="M0 68.6488C0 30.7351 30.7351 0 68.6488 0C106.562 0 137.298 30.7351 137.298 68.6488V301.154C61.4702 301.154 0 239.684 0 163.857V68.6488Z"
                                fill="#7052E5"
                            />
                        </g>
                        <mask id="mask2_2001_2533" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="151" y="0" width="139" height="145">
                            <path d="M151.703 68.6488C151.703 30.7351 182.438 0 220.351 0C258.265 0 289 30.7351 289 68.6488V72.0249C289 111.803 256.753 144.05 216.975 144.05H151.703V68.6488Z" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask2_2001_2533)">
                            <path
                                ref={orangeSectionRef}
                                d="M151.703 68.6488C151.703 30.7351 182.438 0 220.351 0C258.265 0 289 30.7351 289 68.6488V72.0249C289 111.803 256.753 144.05 216.975 144.05H151.703V68.6488Z"
                                fill="#FF8149"
                            />
                        </g>
                    </svg>
                </div>

                {/* Loading text */}
                <div className="mt-8 flex flex-col items-center">
                    <div ref={dotsRef} className="flex space-x-1 mb-3">
                        <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                        <div className="h-2 w-2 bg-teal-500 rounded-full"></div>
                        <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
