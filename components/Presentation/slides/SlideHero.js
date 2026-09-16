import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function SlideHero({ onNext }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current < 120) {
        current += 6;
        setSpeed(current);
      } else {
        clearInterval(interval);
      }
    }, 15);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 18;
    const y = (clientY / window.innerHeight - 0.5) * -18;
    setMousePos({ x, y });
  };

  return (
    <div 
      className="container-fluid h-100 d-flex align-items-center justify-content-center"
      onMouseMove={handleMouseMove}
      style={{ perspective: 1000 }}
    >
      <div className="row w-100 align-items-center justify-content-between" style={{ maxWidth: 1350 }}>
        
        {/* Left Col: Slides in from LEFT (-80px) */}
        <motion.div 
          className="col-lg-5 col-12 mb-4 mb-lg-0"
          initial={{ opacity: 0, x: -90, filter: "blur(4px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          style={{
            transform: `rotateY(${mousePos.x * 0.3}deg) rotateX(${mousePos.y * 0.3}deg)`
          }}
        >
          {/* Reference Pointer: WE -> (Enters with a punch) */}
          <motion.div 
            className="reference-pointer-container mb-3"
            initial={{ opacity: 0, x: -40, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.35, delay: 0.05 }}
          >
            <h1 className="reference-pointer-tag">WE</h1>
            <svg 
              className="reference-arrow-svg" 
              viewBox="0 0 100 40" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="0" y1="20" x2="80" y2="20" stroke="#00d2ff" strokeWidth="8" strokeLinecap="round" />
              <polyline points="60,5 85,20 60,35" stroke="#00d2ff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>

          <div style={{ paddingLeft: "4px" }}>
            <motion.div 
              className="d-flex align-items-center gap-2 mb-2"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
            >
              <span className="deck-status-dot" />
              <span style={{ 
                fontFamily: "var(--deck-font-mono)", 
                color: "var(--deck-blue-bright)", 
                fontSize: "0.82rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase"
              }}>
                [ 88'S TECHNOLOGIES INC. ]
              </span>
            </motion.div>

            <motion.h2 
              style={{ 
                fontSize: "clamp(2.3rem, 3.8vw, 3.6rem)", 
                fontWeight: 900, 
                color: "#fff", 
                lineHeight: 1.12,
                marginBottom: "16px"
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.12 }}
            >
              ENGINEERED FOR <br/>
              <span style={{ color: "var(--deck-blue-primary)", textShadow: "0 0 25px rgba(0,210,255,0.7)" }}>
                HIGH VELOCITY
              </span>
            </motion.h2>

            <motion.p 
              style={{ color: "var(--deck-text-muted)", fontSize: "1.05rem", maxWidth: 440, lineHeight: 1.6, marginBottom: "20px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.18 }}
            >
              Founded by veterans of <strong style={{ color: "#fff" }}>Amazon & Facebook</strong>. We craft next-generation consumer apps, intelligent architectures, and mission-critical software solutions.
            </motion.p>

            <motion.div 
              className="d-flex flex-wrap gap-2 mb-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.22 }}
            >
              <span className="deck-status-pill">Top Big Tech Talent</span>
              <span className="deck-status-pill">iOS & Cloud Mastery</span>
              <span className="deck-status-pill">Global Scale</span>
            </motion.div>

            <motion.button 
              onClick={onNext}
              className="deck-nav-btn d-inline-flex align-items-center gap-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.25 }}
            >
              EXPLORE OUR SERVICES <ArrowRight size={16} />
            </motion.button>
          </div>
        </motion.div>

        {/* Right Col: 3D Visual Showcase + Speedometer HUD (Multi-Directional Entrances) */}
        <div 
          className="col-lg-7 col-12 d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-lg-end gap-4 position-relative"
          style={{
            transform: `rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`,
            transformStyle: "preserve-3d"
          }}
        >
          {/* Main Visual Image Layer: Zooms from deep center / 3D Z */}
          <motion.div 
            className="position-relative d-flex align-items-center justify-content-center" 
            style={{ zIndex: 5 }}
            initial={{ opacity: 0, scale: 0.75, z: -100 }}
            animate={{ opacity: 1, scale: 1, z: 0 }}
            transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
          >
            <img 
              src="/img/main-banner.png" 
              alt="88s Technologies Speed & Scale" 
              className="img-fluid visual-image-layer"
              style={{
                maxWidth: 420,
                filter: "drop-shadow(0 0 40px rgba(0, 210, 255, 0.4))",
                transform: "translateZ(40px)"
              }}
            />
          </motion.div>

          {/* Reference HUD Speedometer: Drops in from TOP-RIGHT */}
          <motion.div 
            className="hud-speedometer position-relative"
            initial={{ opacity: 0, y: -60, x: 50, rotate: 20 }}
            animate={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              transform: "translateZ(65px)",
              zIndex: 6
            }}
          >
            <div className="hud-speedometer-ring" />
            <div className="hud-speedometer-ring-inner" />
            
            <div className="text-center">
              <div className="hud-speedometer-number">
                {speed}
              </div>
              <div className="hud-speedometer-unit">
                KM/H &bull; BURST
              </div>
            </div>

            <div style={{
              position: "absolute",
              top: 22,
              fontFamily: "var(--deck-font-mono)",
              fontSize: "0.75rem",
              color: "rgba(0, 210, 255, 0.8)",
              letterSpacing: "0.2em"
            }}>
              ENTERPRISE VELOCITY
            </div>
          </motion.div>

          {/* Reference Badge Callout: Slides UP from BOTTOM */}
          <motion.div 
            className="position-absolute"
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.42, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              bottom: "-25px", 
              right: "6%", 
              zIndex: 10,
              transform: "translateZ(85px)"
            }}
          >
            <div className="reference-badge-box">
              <h3 className="reference-badge-text">ALGORITHM</h3>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
