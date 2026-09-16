import React from "react";
import { motion } from "framer-motion";
import { Activity, Award, TrendingUp, Users } from "lucide-react";

export default function SlideMetrics({ onNext }) {
  const metrics = [
    { value: "99.99%", label: "SYSTEM UPTIME SLA", icon: <Activity size={24} /> },
    { value: "10X", label: "THROUGHPUT MULTIPLIER", icon: <TrendingUp size={24} /> },
    { value: "150+", label: "ENTERPRISE DEPLOYS", icon: <Award size={24} /> },
    { value: "24/7", label: "CONTINUOUS OBSERVABILITY", icon: <Users size={24} /> }
  ];

  return (
    <div className="container-fluid h-100 d-flex align-items-center justify-content-center">
      <div className="w-100" style={{ maxWidth: 1240 }}>
        
        <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between mb-5 gap-3">
          <div>
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className="deck-status-dot" />
              <span style={{ 
                fontFamily: "var(--deck-font-mono)", 
                color: "var(--deck-blue-primary)", 
                letterSpacing: "0.2em", 
                fontSize: "0.85rem",
                fontWeight: 700 
              }}>
                SLIDE 04 // LIVE TELEMETRY
              </span>
            </div>
            <h2 style={{ 
              fontSize: "clamp(2.2rem, 4vw, 3.6rem)", 
              fontWeight: 900, 
              color: "#fff", 
              margin: 0 
            }}>
              PROVEN VELOCITY
            </h2>
          </div>

          <div className="reference-badge-box">
            <span className="reference-badge-text" style={{ fontSize: "1.4rem" }}>
              BENCHMARK
            </span>
          </div>
        </div>

        {/* 4 Metric Tiles with Cyber Blue Glows */}
        <div className="row g-4">
          {metrics.map((item, idx) => (
            <div key={idx} className="col-lg-3 col-sm-6">
              <motion.div 
                className="deck-metric-box h-100 d-flex flex-column justify-content-center align-items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
              >
                <div style={{ color: "var(--deck-blue-primary)", marginBottom: "12px" }}>
                  {item.icon}
                </div>
                <div className="deck-metric-val">
                  {item.value}
                </div>
                <div className="deck-metric-label">
                  {item.label}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* High impact quote banner */}
        <div 
          className="mt-5 p-4 rounded d-flex flex-column flex-md-row align-items-center justify-content-between gap-3"
          style={{
            background: "rgba(0, 210, 255, 0.06)",
            border: "1px solid rgba(0, 210, 255, 0.25)"
          }}
        >
          <div className="d-flex align-items-center gap-3">
            <div className="reference-badge-box py-2 px-3">
              <span style={{ fontFamily: "var(--deck-font-mono)", color: "var(--deck-blue-primary)", fontWeight: 900, fontSize: "1rem" }}>
                SCALE
              </span>
            </div>
            <p style={{ color: "#fff", fontSize: "1.05rem", margin: 0, fontWeight: 600 }}>
              Architecture built to absorb exponential user demand without friction.
            </p>
          </div>

          <button 
            onClick={onNext}
            className="deck-nav-btn d-inline-flex align-items-center gap-2 text-nowrap"
          >
            INITIATE CONTACT &darr;
          </button>
        </div>

      </div>
    </div>
  );
}
