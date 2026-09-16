import React from "react";
import { motion } from "framer-motion";
import { Layers, Smartphone, Wrench, ArrowRight } from "lucide-react";

export default function SlideServices({ onNext }) {
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

  return (
    <div className="container-fluid h-100 d-flex align-items-center justify-content-center">
      <div className="w-100" style={{ maxWidth: 1280 }}>
        
        {/* Header with Multi-Directional Entrance */}
        <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between mb-5 gap-3">
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

          {/* Badge slides in from the RIGHT */}
          <motion.div 
            className="reference-badge-box"
            initial={{ opacity: 0, x: 70, rotate: -4 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="reference-badge-text" style={{ fontSize: "1.4rem" }}>
              SOLUTIONS
            </span>
          </motion.div>
        </div>

        {/* 3D Services Cards entering from distinct directions */}
        <div className="deck-grid-cols">
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
          className="d-flex justify-content-end mt-4"
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
