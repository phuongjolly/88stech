import React, { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SlideHUDGrid from "./SlideHUDGrid";
import SlideHero from "./slides/SlideHero";
import SlideAlgorithm from "./slides/SlideAlgorithm";
import SlideSolutions from "./slides/SlideSolutions";
import SlideContact from "./slides/SlideContact";
import Link from "next/link";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function PresentationDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isScrollingGlow, setIsScrollingGlow] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  
  // Refs for bulletproof scroll throttling
  const currentSlideRef = useRef(0);
  currentSlideRef.current = currentSlide;
  const isLockedRef = useRef(false);
  const lastWheelTimeRef = useRef(0);
  const touchStartY = useRef(0);

  // 4 Slides
  const slides = [
    { title: "COMPANY", component: SlideHero },
    { title: "SERVICES", component: SlideAlgorithm },
    { title: "PRODUCTS", component: SlideSolutions },
    { title: "CONTACT", component: SlideContact }
  ];

  const totalSlides = slides.length;

  // Track mouse coordinates for the subtle glowing cursor aura
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const goToSlide = useCallback((targetIndex, fromScroll = false) => {
    // Boundary check
    if (targetIndex < 0 || targetIndex >= totalSlides) {
      return;
    }
    // Prevent re-trigger if already locked or same slide
    if (isLockedRef.current || targetIndex === currentSlideRef.current) {
      return;
    }

    // Lock transitions
    isLockedRef.current = true;
    lastWheelTimeRef.current = Date.now();

    if (fromScroll) {
      setIsScrollingGlow(true);
    }

    setDirection(targetIndex > currentSlideRef.current ? 1 : -1);
    setCurrentSlide(targetIndex);

    // Cooldown lockout period (600ms prevents trackpad inertial momentum from chaining)
    setTimeout(() => {
      isLockedRef.current = false;
      setIsScrollingGlow(false);
    }, 600);
  }, [totalSlides]);

  const nextSlide = useCallback((fromScroll = false) => {
    goToSlide(currentSlideRef.current + 1, fromScroll);
  }, [goToSlide]);

  const prevSlide = useCallback((fromScroll = false) => {
    goToSlide(currentSlideRef.current - 1, fromScroll);
  }, [goToSlide]);

  // Wheel, Keyboard & Touch navigation with strict inertial dampening
  useEffect(() => {
    const handleWheel = (e) => {
      // Always prevent default native scroll chaining
      e.preventDefault();

      const now = Date.now();
      // If locked or triggered within cooldown, discard event
      if (isLockedRef.current || now - lastWheelTimeRef.current < 600) {
        return;
      }

      // Filter out micro-scroll jitters
      if (Math.abs(e.deltaY) < 25) {
        return;
      }

      if (e.deltaY > 0) {
        nextSlide(true);
      } else {
        prevSlide(true);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        nextSlide(false);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        prevSlide(false);
      }
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const now = Date.now();
      if (isLockedRef.current || now - lastWheelTimeRef.current < 600) {
        return;
      }

      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY.current - touchEndY;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          nextSlide(true);
        } else {
          prevSlide(true);
        }
      }
    };

    // Non-passive wheel event listener so e.preventDefault() stops default document scrolling
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [nextSlide, prevSlide]);

  // Fast, punchy transitions
  const slideVariants = {
    enter: (dir) => ({
      y: dir > 0 ? "40%" : "-40%",
      opacity: 0,
      scale: 0.96,
      rotateX: dir > 0 ? -6 : 6
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        y: { type: "spring", stiffness: 320, damping: 28, mass: 0.7 },
        opacity: { duration: 0.28, ease: "easeOut" },
        scale: { duration: 0.3, ease: "easeOut" },
        rotateX: { duration: 0.3, ease: "easeOut" }
      }
    },
    exit: (dir) => ({
      y: dir > 0 ? "-35%" : "35%",
      opacity: 0,
      scale: 0.96,
      rotateX: dir > 0 ? 6 : -6,
      transition: {
        y: { type: "spring", stiffness: 340, damping: 30 },
        opacity: { duration: 0.22, ease: "easeIn" },
        scale: { duration: 0.22 }
      }
    })
  };

  const CurrentComponent = slides[currentSlide].component;

  return (
    <div className="presentation-container">
      {/* 3D Perspective Grid Background */}
      <SlideHUDGrid />

      {/* Gentle & Elegant Glowing Cursor Ring */}
      <div 
        className={`deck-scroll-cursor-glow ${isScrollingGlow ? "active" : ""}`}
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`
        }}
      />

      {/* Top Navigation Header */}
      <header className="deck-nav-header">
        <Link href="/" className="deck-logo">
          88's <span>TECHNOLOGIES</span>
        </Link>

        <div className="deck-status-pill d-none d-md-flex">
          <span className="deck-status-dot" />
          <span>PORTFOLIO & PRODUCTS // SYSTEM 88</span>
        </div>

        <div className="deck-nav-links">
          <button 
            onClick={() => goToSlide(2)}
            className="btn btn-link text-decoration-none d-none d-sm-inline"
            style={{ color: "var(--deck-blue-bright)", fontFamily: "var(--deck-font-mono)", fontSize: "0.85rem" }}
          >
            OUR PRODUCTS
          </button>

          <button 
            onClick={() => goToSlide(totalSlides - 1)}
            className="deck-nav-btn"
          >
            GET IN TOUCH
          </button>
        </div>
      </header>

      {/* Right Side Pagination Dots */}
      <nav className="deck-pagination" aria-label="Slide Navigation">
        {slides.map((s, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`deck-page-dot ${currentSlide === idx ? "active" : ""}`}
            title={`Slide 0${idx + 1}: ${s.title}`}
          >
            <span className="deck-dot-label">0{idx + 1} {s.title}</span>
            <div className="deck-dot-indicator" />
          </button>
        ))}
      </nav>

      {/* Main Slide Carousel Viewport */}
      <main className="deck-slides-viewport" style={{ perspective: 1200 }}>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="deck-slide"
          >
            <CurrentComponent onNext={() => nextSlide(false)} />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Scroll to Explore Interactive Prompt */}
      {currentSlide < totalSlides - 1 && (
        <div 
          className="deck-scroll-explore-hint"
          onClick={() => nextSlide(false)}
          style={{ pointerEvents: "auto" }}
        >
          <div className="deck-mouse-icon">
            <div className="deck-mouse-wheel" />
          </div>
          <span className="deck-scroll-text">SCROLL TO EXPLORE</span>
        </div>
      )}

      {/* Bottom Telemetry Bar */}
      <footer className="deck-footer-bar">
        <div className="deck-hint d-none d-sm-flex">
          <span>NAVIGATION:</span>
          <span className="deck-hint-key">&uarr;</span>
          <span className="deck-hint-key">&darr;</span>
          <span>OR SCROLL WHEEL</span>
        </div>

        <div className="d-flex align-items-center gap-3">
          <button 
            onClick={() => prevSlide(false)} 
            disabled={currentSlide === 0}
            style={{ 
              background: "none", 
              border: "1px solid rgba(255,255,255,0.2)", 
              borderRadius: 4, 
              color: currentSlide === 0 ? "rgba(255,255,255,0.2)" : "var(--deck-blue-bright)", 
              padding: "2px 8px", 
              cursor: currentSlide === 0 ? "default" : "pointer" 
            }}
          >
            <ChevronUp size={16} />
          </button>
          
          <span style={{ color: "var(--deck-blue-primary)", fontWeight: 700 }}>
            0{currentSlide + 1} / 0{totalSlides}
          </span>

          <button 
            onClick={() => nextSlide(false)} 
            disabled={currentSlide === totalSlides - 1}
            style={{ 
              background: "none", 
              border: "1px solid rgba(255,255,255,0.2)", 
              borderRadius: 4, 
              color: currentSlide === totalSlides - 1 ? "rgba(255,255,255,0.2)" : "var(--deck-blue-bright)", 
              padding: "2px 8px", 
              cursor: currentSlide === totalSlides - 1 ? "default" : "pointer" 
            }}
          >
            <ChevronDown size={16} />
          </button>
        </div>
      </footer>
    </div>
  );
}
