import React from "react";
import { motion } from "framer-motion";
import { Layers, Smartphone, Wrench, ArrowRight } from "lucide-react";

export default function SlideServices({ onNext }) {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const touchStartX = React.useRef(0);

  const services = [
    {
      id: "01",
      icon: <Layers size={32} />,
      title: "SOFTWARE DESIGN & ARCHITECTURE",
      badge: "CONCEPT TO PROD",
      desc: "End-to-end architectural blueprints, microservices mapping, and high-concurrency systems engineered for flawless performance.",
      initialDirection: { opacity: 0, x: -60, y: 30 } // Slide from bottom-left
    },
    {
      id: "02",
      icon: <Smartphone size={32} />,
      title: "CUSTOM APPS & PLATFORMS",
      badge: "IOS / WEB / CLOUD",
      desc: "Full-cycle engineering from mobile apps on the Apple App Store to distributed web platforms and ServiceNow enterprise workflows.",
      initialDirection: { opacity: 0, y: 70, scale: 0.92 } // Slide up from bottom center
    },
    {
      id: "03",
      icon: <Wrench size={32} />,
      title: "SYSTEM MAINTENANCE & SCALE",
      badge: "99.99% UPTIME",
      desc: "Troubleshooting, code optimization, security hardening, and ongoing infrastructure scaling for mission-critical operations.",
      initialDirection: { opacity: 0, x: 60, y: 30 } // Slide from bottom-right
    }
  ];

  // Auto-switch card on mobile every 4.5 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % services.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [services.length]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 35) {
      if (diff > 0) {
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
            MOBILE ONLY: 3D SLIDING STACKED PANELS (Swipable)
            ==================================================== */}
        <div 
          className="d-block d-md-none position-relative w-100 mb-4"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{ perspective: 1000, height: 260 }}
        >
          {services.map((item, idx) => {
            const total = services.length;
            // Position relative to activeIdx (-1, 0, 1, etc.)
            let offset = (idx - activeIdx) % total;
            if (offset < 0) offset += total;

            const isCurrent = offset === 0;

            // Windows Vista Flip 3D cascade mathematics
            let x = 0;
            let y = 0;
            let z = 0;
            let rotateY = 0;
            let rotateX = 0;
            let scale = 1;
            let opacity = 1;
            let zIndex = 10;

            if (isCurrent) {
              x = 0;
              y = 0;
              z = 30;
              rotateY = -12;
              rotateX = 4;
              scale = 1;
              opacity = 1;
              zIndex = 10;
            } else if (offset === 1) {
              // 1 step back in cascade
              x = 28;
              y = -18;
              z = -60;
              rotateY = -18;
              rotateX = 6;
              scale = 0.92;
              opacity = 0.65;
              zIndex = 6;
            } else {
              // 2 steps back in cascade
              x = 54;
              y = -34;
              z = -130;
              rotateY = -24;
              rotateX = 8;
              scale = 0.84;
              opacity = 0.35;
              zIndex = 3;
            }

            return (
              <motion.div
                key={item.id}
                animate={{
                  x,
                  y,
                  z,
                  rotateY,
                  rotateX,
                  scale,
                  opacity
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 24,
                  mass: 0.8
                }}
                onClick={() => setActiveIdx(idx)}
                className="deck-3d-card position-absolute w-100"
                style={{
                  top: 15,
                  left: 0,
                  zIndex,
                  transformStyle: "preserve-3d",
                  cursor: "pointer",
                  boxShadow: isCurrent 
                    ? "0 20px 45px rgba(0, 210, 255, 0.3), -10px 15px 35px rgba(0,0,0,0.85)" 
                    : "0 10px 25px rgba(0,0,0,0.7)"
                }}
              >
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="deck-card-icon mb-0">
                    {item.icon}
                  </div>
                  <span style={{ 
                    fontFamily: "var(--deck-font-mono)", 
                    fontSize: "1.2rem", 
                    fontWeight: 900, 
                    color: isCurrent ? "var(--deck-blue-primary)" : "rgba(0, 210, 255, 0.45)" 
                  }}>
                    {item.id} / 03
                  </span>
                </div>

                <span style={{
                  fontFamily: "var(--deck-font-mono)",
                  color: "var(--deck-blue-bright)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.15em",
                  fontWeight: 700,
                  display: "block",
                  marginBottom: "4px"
                }}>
                  [{item.badge}]
                </span>

                <h3 style={{ 
                  fontSize: "1.05rem", 
                  fontWeight: 800, 
                  color: "#fff", 
                  marginBottom: "6px",
                  lineHeight: 1.25
                }}>
                  {item.title}
                </h3>

                <p style={{ color: "var(--deck-text-muted)", fontSize: "0.82rem", lineHeight: 1.45, margin: 0 }}>
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Stack Indicators / Dots */}
        <div className="d-flex d-md-none justify-content-center align-items-center gap-2 mb-3">
          {services.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setActiveIdx(dotIdx)}
              style={{
                width: activeIdx === dotIdx ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: activeIdx === dotIdx ? "var(--deck-blue-primary)" : "rgba(0, 210, 255, 0.25)",
                border: "none",
                padding: 0,
                transition: "all 0.3s ease"
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
