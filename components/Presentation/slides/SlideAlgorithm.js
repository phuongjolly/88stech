import React from "react";
import { motion } from "framer-motion";
import { Layers, Smartphone, Wrench, ArrowRight } from "lucide-react";

export default function SlideServices({ onNext }) {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const [isInteracting, setIsInteracting] = React.useState(false);
  const interactionTimerRef = React.useRef(null);
  const touchStartX = React.useRef(0);
  const touchStartY = React.useRef(0);

  const services = [
    {
      id: "01",
      icon: <Layers size={32} />,
      title: "SOFTWARE DESIGN & ARCHITECTURE",
      badge: "CONCEPT TO PROD",
      desc: "End-to-end architectural blueprints, microservices mapping, and high-concurrency systems engineered for flawless performance.",
      initialDirection: { opacity: 0, x: -60, y: 30 }
    },
    {
      id: "02",
      icon: <Smartphone size={32} />,
      title: "CUSTOM APPS & PLATFORMS",
      badge: "IOS / WEB / CLOUD",
      desc: "Full-cycle engineering from mobile apps on the Apple App Store to distributed web platforms and ServiceNow enterprise workflows.",
      initialDirection: { opacity: 0, y: 70, scale: 0.92 }
    },
    {
      id: "03",
      icon: <Wrench size={32} />,
      title: "SYSTEM MAINTENANCE & SCALE",
      badge: "99.99% UPTIME",
      desc: "Troubleshooting, code optimization, security hardening, and ongoing infrastructure scaling for mission-critical operations.",
      initialDirection: { opacity: 0, x: 60, y: 30 }
    }
  ];

  const resetInteractionTimer = React.useCallback(() => {
    setIsInteracting(true);
    if (interactionTimerRef.current) clearTimeout(interactionTimerRef.current);
    interactionTimerRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 7000);
  }, []);

  // Auto-switch card on mobile every 4.5 seconds (pauses on user touch/interaction)
  React.useEffect(() => {
    if (isInteracting) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % services.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isInteracting, services.length]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartX.current - touchEndX;
    const diffY = touchStartY.current - touchEndY;

    // Trigger only if horizontal swipe dominates vertical gesture
    if (Math.abs(diffX) > 30 && Math.abs(diffX) > Math.abs(diffY)) {
      resetInteractionTimer();
      if (diffX > 0) {
        // Swipe left -> Next card
        setActiveIdx((prev) => (prev + 1) % services.length);
      } else {
        // Swipe right -> Prev card
        setActiveIdx((prev) => (prev - 1 + services.length) % services.length);
      }
    }
  };

  return (
    <div className="container-fluid h-100 d-flex align-items-center justify-content-center">
      <div className="w-100" style={{ maxWidth: 1280 }}>
        
        {/* Header with Multi-Directional Entrance */}
        <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between mb-3 mb-md-5 gap-3">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className="deck-status-dot" />
              <span style={{ 
                fontFamily: "var(--deck-font-mono)", 
                color: "var(--deck-blue-primary)", 
                letterSpacing: "0.2em", 
                fontSize: "0.85rem",
                fontWeight: 700 
              }}>
                SLIDE 02 // EXPERTISE & CAPABILITIES
              </span>
            </div>
            <h2 style={{ 
              fontSize: "clamp(2.2rem, 4vw, 3.6rem)", 
              fontWeight: 900, 
              color: "#fff", 
              letterSpacing: "0.04em",
              margin: 0
            }}>
              SERVICES WE DELIVER
            </h2>
          </motion.div>

          {/* Badge slides in from the RIGHT (Hidden on small mobile) */}
          <motion.div 
            className="reference-badge-box d-none d-md-inline-flex"
            initial={{ opacity: 0, x: 70, rotate: -4 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="reference-badge-text" style={{ fontSize: "1.4rem" }}>
              SOLUTIONS
            </span>
          </motion.div>
        </div>

        {/* ====================================================
            MOBILE ONLY: 3D CAROUSEL PANELS (Swipable)
            ==================================================== */}
        <div 
          className="deck-carousel-container d-block d-md-none mb-3"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{ height: 300 }}
        >
          {services.map((item, idx) => {
            const total = services.length;
            let offset = (idx - activeIdx) % total;
            if (offset > 1) offset -= total;
            if (offset < -1) offset += total;

            const isCurrent = offset === 0;

            // 3D Carousel Coverflow transformation coordinates
            let x = "0%";
            let z = 40;
            let rotateY = 0;
            let scale = 1;
            let opacity = 1;
            let zIndex = 10;

            if (isCurrent) {
              x = "0%";
              z = 40;
              rotateY = 0;
              scale = 1;
              opacity = 1;
              zIndex = 10;
            } else if (offset === 1) {
              // Right card (Next)
              x = "60%";
              z = -75;
              rotateY = -32;
              scale = 0.85;
              opacity = 0.55;
              zIndex = 5;
            } else {
              // Left card (Prev, offset === -1)
              x = "-60%";
              z = -75;
              rotateY = 32;
              scale = 0.85;
              opacity = 0.55;
              zIndex = 5;
            }

            return (
              <motion.div
                key={item.id}
                animate={{
                  x,
                  y: 0,
                  z,
                  rotateY,
                  scale,
                  opacity,
                  zIndex
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 26,
                  mass: 0.8
                }}
                onClick={() => {
                  resetInteractionTimer();
                  setActiveIdx(idx);
                }}
                className="deck-carousel-card"
                style={{
                  width: "88%",
                  left: "6%",
                  top: 8,
                  minHeight: 270,
                  padding: "16px 18px",
                  border: isCurrent 
                    ? "2px solid var(--deck-blue-primary)" 
                    : "1.5px solid rgba(0, 210, 255, 0.25)",
                  boxShadow: isCurrent 
                    ? "0 20px 45px rgba(0, 210, 255, 0.28), 0 0 25px rgba(0, 210, 255, 0.2), 0 12px 30px rgba(0,0,0,0.9)" 
                    : "0 10px 25px rgba(0,0,0,0.75)"
                }}
              >
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="deck-card-icon mb-0" style={{ width: 44, height: 44, borderRadius: 10 }}>
                    {item.icon}
                  </div>
                  <span style={{ 
                    fontFamily: "var(--deck-font-mono)", 
                    fontSize: "1.15rem", 
                    fontWeight: 900, 
                    color: isCurrent ? "var(--deck-blue-primary)" : "rgba(0, 210, 255, 0.45)" 
                  }}>
                    {item.id} / 03
                  </span>
                </div>

                <span style={{
                  fontFamily: "var(--deck-font-mono)",
                  color: "var(--deck-blue-bright)",
                  fontSize: "0.76rem",
                  letterSpacing: "0.15em",
                  fontWeight: 700,
                  display: "block",
                  marginBottom: "4px"
                }}>
                  [{item.badge}]
                </span>

                <h3 style={{ 
                  fontSize: "1.08rem", 
                  fontWeight: 800, 
                  color: "#fff", 
                  marginBottom: "8px",
                  lineHeight: 1.28
                }}>
                  {item.title}
                </h3>

                <p style={{ color: "var(--deck-text-muted)", fontSize: "0.86rem", lineHeight: 1.5, margin: 0 }}>
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Carousel Indicators / Dots */}
        <div className="d-flex d-md-none justify-content-center align-items-center gap-2 mb-3">
          {services.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => {
                resetInteractionTimer();
                setActiveIdx(dotIdx);
              }}
              style={{
                width: activeIdx === dotIdx ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: activeIdx === dotIdx ? "var(--deck-blue-primary)" : "rgba(0, 210, 255, 0.25)",
                border: "none",
                padding: 0,
                transition: "all 0.3s ease",
                cursor: "pointer"
              }}
              aria-label={`Go to section ${dotIdx + 1}`}
            />
          ))}
        </div>

        {/* ====================================================
            DESKTOP ONLY: 3-COLUMN 3D GRID
            ==================================================== */}
        <div className="deck-grid-cols d-none d-md-grid">
          {services.map((item, idx) => (
            <motion.div 
              key={idx}
              className="deck-3d-card position-relative"
              initial={item.initialDirection}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              transition={{ duration: 0.42, delay: 0.1 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="deck-card-icon mb-0">
                  {item.icon}
                </div>
                <span style={{ 
                  fontFamily: "var(--deck-font-mono)", 
                  fontSize: "1.4rem", 
                  fontWeight: 900, 
                  color: "rgba(0, 210, 255, 0.45)" 
                }}>
                  {item.id}
                </span>
              </div>

              <span style={{
                fontFamily: "var(--deck-font-mono)",
                color: "var(--deck-blue-bright)",
                fontSize: "0.8rem",
                letterSpacing: "0.15em",
                fontWeight: 700,
                display: "block",
                marginBottom: "6px"
              }}>
                [{item.badge}]
              </span>

              <h3 style={{ 
                fontSize: "1.25rem", 
                fontWeight: 800, 
                color: "#fff", 
                letterSpacing: "0.04em",
                marginBottom: "14px",
                lineHeight: 1.3
              }}>
                {item.title}
              </h3>

              <p style={{ color: "var(--deck-text-muted)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
                {item.desc}
              </p>

              <div style={{ 
                marginTop: "24px", 
                height: "2px", 
                width: "100%", 
                background: "linear-gradient(90deg, var(--deck-blue-primary), transparent)" 
              }} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="d-flex justify-content-end mt-2 mt-md-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.3 }}
        >
          <button 
            onClick={onNext}
            className="deck-nav-btn d-inline-flex align-items-center gap-2"
          >
            DISCOVER OUR PRODUCTS <ArrowRight size={16} />
          </button>
        </motion.div>

      </div>
    </div>
  );
}
