import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Check, Download, Globe } from "lucide-react";

export default function SlideProducts({ onNext }) {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0); // 0 to 100%

  const products = [
    {
      id: "hanzi-ca",
      name: "Hanzi.ca – Practice Writing Chinese",
      tagline: "Interactive Canvas for iPad & Apple Pencil",
      category: "Web App // Chinese Calligraphy & Handwriting",
      url: "https://www.hanzi.ca",
      isWeb: true,
      icon: "https://www.hanzi.ca/og-image.png",
      badges: ["WEB APP", "IPAD & PENCIL OPTIMIZED", "FREE"],
      screenshots: [
        "https://www.hanzi.ca/og-image.png"
      ],
      highlights: [
        "Natural handwriting canvas tuned for Apple Pencil pressure & tilt",
        "Interactive stroke guides with Mi-grid (米字格) & Tian-grid (田字格)",
        "Authentic calligraphy fonts: Noto Serif SC, Ma Shan Zheng & Long Cang",
        "Realtime canvas export, stroke animation playback, and collaboration"
      ],
      badge: "CREATIVE EDTECH"
    },
    {
      id: "momo-hsk",
      name: "Momo: Learn Chinese - HSK Prep",
      tagline: "Widget, Flashcards & Radicals (HSK 3.0)",
      category: "iOS App // Mandarin Exam Learning",
      url: "https://apps.apple.com/us/app/momo-learn-chinese-hsk-prep/id6802473798",
      isWeb: false,
      icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/96/43/f4/9643f4df-c9fe-e34b-fdfb-5fe326625b40/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
      badges: ["IOS APP", "NO ADS", "HSK 3.0"],
      screenshots: [
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ba/18/a9/ba18a93b-f50d-fc03-1e62-5224398922bd/IMG_3051-2.PNG/320x480bb.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/7f/0c/c9/7f0cc988-3d8d-64cc-8e2a-f195344b9016/IMG_3052-2.PNG/320x480bb.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f1/b4/44/f1b44431-03d4-f4c6-7f1c-5fed1c623012/IMG_3053-2.PNG/320x480bb.jpg"
      ],
      highlights: [
        "100% Free: No Ads & No In-App Purchases",
        "Interactive iOS Home Screen Widget to learn words passively",
        "Full HSK 3.0 Curriculum & Character Radicals breakdown",
        "Spaced repetition flashcards & native speaker audio"
      ],
      badge: "FEATURED EDTECH"
    },
    {
      id: "momo-puzzle",
      name: "Momo: Block Puzzle",
      tagline: "Stack Boxes, Clear Lines!",
      category: "iOS Game // Spatial Logic",
      url: "https://apps.apple.com/us/app/momo-block-puzzle/id6809551028",
      isWeb: false,
      icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/97/93/ca/9793ca8c-a104-aff8-1f8c-e51fd0e2b6dd/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg",
      badges: ["IOS GAME", "GAME CENTER", "HAPTICS"],
      screenshots: [
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/8e/38/9f/8e389f56-f1fb-979a-a3b5-c8044e601fc7/exec-46aaebd1-22e9-4740-9210-0b7bdb8118b7-2.png/320x480bb.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/71/90/d3/7190d32f-0542-ac9e-2063-747a982df7b0/exec-792778fe-e53a-40d3-ac6c-60331f070153-2.png/320x480bb.jpg",
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/6b/a6/03/6ba60370-3291-22da-e797-8f31000be6ce/exec-06b1ec40-fa4e-4b4d-9879-9f32966476ec-2.png/320x480bb.jpg"
      ],
      highlights: [
        "Dynamic falling block mechanics with grid snap & free-placement modes",
        "Special power-ups: Rewind Leaf, Momo Plane & Power Bomb",
        "Apple Game Center leaderboards & trophy achievements",
        "Playful Momo mascot animations with polished haptic feedback"
      ],
      badge: "INTERACTIVE GAMING"
    }
  ];

  // 15 seconds auto-switch timer with progress bar
  useEffect(() => {
    const duration = 15000;
    const intervalTime = 100;
    const step = (intervalTime / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveTab((cur) => (cur + 1) % products.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [activeTab, products.length]);

  const handleSelectTab = (idx) => {
    setActiveTab(idx);
    setProgress(0);
  };

  const currentProd = products[activeTab];
  const timeLeftSec = Math.max(0, Math.ceil((15 * (100 - progress)) / 100));

  return (
    <div className="container-fluid h-100 d-flex align-items-center justify-content-center">
      <div className="w-100" style={{ maxWidth: 1320 }}>
        
        {/* Header with multi-directional animation */}
        <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between mb-4 gap-3">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
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
                SLIDE 03 // LIVE PORTFOLIO
              </span>
            </div>
            <h2 style={{ 
              fontSize: "clamp(2.2rem, 4vw, 3.6rem)", 
              fontWeight: 900, 
              color: "#fff", 
              margin: 0 
            }}>
              OUR PRODUCTS
            </h2>
          </motion.div>

          <motion.div 
            className="d-flex flex-column align-items-md-end gap-2"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.38, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="d-flex flex-wrap align-items-center gap-2">
              {products.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => handleSelectTab(idx)}
                  style={{
                    background: activeTab === idx ? "var(--deck-blue-primary)" : "rgba(0, 210, 255, 0.1)",
                    color: activeTab === idx ? "#040814" : "#fff",
                    border: "1px solid var(--deck-blue-primary)",
                    padding: "7px 14px",
                    borderRadius: 6,
                    fontFamily: "var(--deck-font-mono)",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                >
                  0{idx + 1} {p.id === "hanzi-ca" ? "HANZI.CA" : p.id === "momo-hsk" ? "HSK PREP" : "BLOCK PUZZLE"}
                </button>
              ))}
            </div>

            {/* 15s Timer Progress readout */}
            <div className="d-flex align-items-center gap-2" style={{ fontFamily: "var(--deck-font-mono)", fontSize: "0.75rem", color: "var(--deck-text-muted)" }}>
              <span>AUTO-ROTATE:</span>
              <span style={{ color: "var(--deck-blue-primary)", fontWeight: 700 }}>{timeLeftSec}s</span>
            </div>
          </motion.div>
        </div>

        {/* Product Showcase Card */}
        <div 
          className="deck-3d-card p-4 p-lg-5"
          style={{
            background: "rgba(6, 16, 38, 0.85)",
            border: "2px solid rgba(0, 210, 255, 0.35)",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 210, 255, 0.2)"
          }}
        >
          {/* Top 15s Progress Bar */}
          <div className="product-timer-container mb-4">
            <div 
              className="product-timer-fill" 
              style={{ width: `${progress}%` }} 
            />
          </div>

          <div className="row align-items-center g-4">
            
            {/* Left: App Info & Highlights enters from LEFT */}
            <motion.div 
              key={`left-${currentProd.id}`}
              className="col-lg-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="d-flex align-items-center gap-3 mb-3">
                <div 
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: 18,
                    overflow: "hidden",
                    border: "2px solid var(--deck-blue-primary)",
                    boxShadow: "0 0 20px rgba(0, 210, 255, 0.4)",
                    backgroundColor: "#070e20",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  <img 
                    src={currentProd.icon} 
                    alt={currentProd.name} 
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: currentProd.isWeb ? "cover" : "contain"
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = '<span style="color:#00d2ff;font-weight:900;font-size:1.5rem">汉</span>';
                    }}
                  />
                </div>
                <div>
                  <span style={{ 
                    fontFamily: "var(--deck-font-mono)", 
                    fontSize: "0.76rem", 
                    color: "var(--deck-blue-bright)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase"
                  }}>
                    [{currentProd.category}]
                  </span>
                  <h3 style={{ fontSize: "1.55rem", fontWeight: 900, color: "#fff", margin: 0 }}>
                    {currentProd.name}
                  </h3>
                </div>
              </div>

              <div className="reference-badge-box py-2 px-3 mb-3">
                <span style={{ fontSize: "0.95rem", color: "var(--deck-blue-primary)", fontWeight: 900, letterSpacing: "0.1em" }}>
                  {currentProd.tagline}
                </span>
              </div>

              {/* Bullet Features */}
              <ul style={{ listStyle: "none", padding: 0, margin: "18px 0" }}>
                {currentProd.highlights.map((h, i) => (
                  <li key={i} className="d-flex align-items-start gap-2 mb-2" style={{ color: "var(--deck-text-muted)", fontSize: "0.95rem" }}>
                    <Check size={18} color="var(--deck-blue-primary)" style={{ flexShrink: 0, marginTop: 3 }} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="d-flex align-items-center gap-3 mt-4">
                <a 
                  href={currentProd.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="deck-nav-btn d-inline-flex align-items-center gap-2"
                  style={{ textDecoration: "none" }}
                >
                  {currentProd.isWeb ? <Globe size={16} /> : <Download size={16} />} 
                  {currentProd.isWeb ? "OPEN HANZI.CA" : "VIEW ON APP STORE"} 
                  <ExternalLink size={14} />
                </a>

                <button 
                  onClick={onNext}
                  className="btn btn-link text-decoration-none"
                  style={{ color: "var(--deck-blue-bright)", fontFamily: "var(--deck-font-mono)", fontSize: "0.85rem" }}
                >
                  NEXT: CONTACT &darr;
                </button>
              </div>
            </motion.div>

            {/* Right: Mockups / Screenshots enters from RIGHT (Hidden on small mobile screens to prevent cramped cards) */}
            <motion.div 
              key={`right-${currentProd.id}`}
              className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center gap-3 overflow-hidden" 
              style={{ perspective: 800 }}
              initial={{ opacity: 0, x: 50, scale: 0.94 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.38, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {currentProd.isWeb ? (
                /* Hanzi.ca Interactive Style Tablet / Browser Frame */
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: "100%",
                    maxWidth: 520,
                    borderRadius: 14,
                    overflow: "hidden",
                    border: "2px solid rgba(0, 210, 255, 0.4)",
                    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.7), 0 0 25px rgba(0, 210, 255, 0.25)",
                    background: "rgba(4, 10, 26, 0.95)"
                  }}
                >
                  {/* Browser Bar */}
                  <div className="d-flex align-items-center justify-content-between px-3 py-2" style={{ background: "rgba(0, 210, 255, 0.12)", borderBottom: "1px solid rgba(0, 210, 255, 0.2)" }}>
                    <div className="d-flex gap-1">
                      <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f56" }} />
                      <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#ffbd2e" }} />
                      <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#27c93f" }} />
                    </div>
                    <span style={{ fontFamily: "var(--deck-font-mono)", fontSize: "0.72rem", color: "var(--deck-blue-bright)" }}>
                      https://www.hanzi.ca
                    </span>
                    <span style={{ width: 16 }} />
                  </div>

                  {/* Tablet Screen Mockup with Calligraphy Grid Simulation */}
                  <div className="p-4 text-center position-relative" style={{ minHeight: 250, background: "radial-gradient(circle, #0e1e42 0%, #050b18 100%)" }}>
                    <div 
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 170,
                        height: 170,
                        border: "2px dashed rgba(0, 210, 255, 0.5)",
                        background: "rgba(0, 210, 255, 0.04)",
                        position: "relative",
                        boxShadow: "inset 0 0 20px rgba(0, 210, 255, 0.1)"
                      }}
                    >
                      {/* Grid diagonals & cross */}
                      <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 1, borderTop: "1px dotted rgba(0, 210, 255, 0.3)" }} />
                      <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, borderLeft: "1px dotted rgba(0, 210, 255, 0.3)" }} />
                      <span style={{ fontSize: "5.5rem", color: "var(--deck-blue-primary)", textShadow: "0 0 25px rgba(0, 210, 255, 0.8)", fontFamily: "Noto Serif SC, serif" }}>
                        字
                      </span>
                    </div>

                    <div className="mt-3">
                      <span className="deck-status-pill d-inline-flex">
                        Apple Pencil Pressure &bull; Stroke Animation &bull; Free Online
                      </span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* iOS Screenshots */
                currentProd.screenshots.map((sUrl, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ scale: 1.05, zIndex: 10, y: -8 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      borderRadius: 14,
                      overflow: "hidden",
                      border: "2px solid rgba(0, 210, 255, 0.4)",
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.6), 0 0 15px rgba(0, 210, 255, 0.2)",
                      maxWidth: 165,
                      transform: sIdx === 1 ? "translateY(-10px) scale(1.04)" : "none"
                    }}
                  >
                    <img 
                      src={sUrl} 
                      alt={`Screenshot ${sIdx + 1}`} 
                      className="img-fluid"
                      style={{ display: "block" }}
                    />
                  </motion.div>
                ))
              )}
            </motion.div>

          </div>
        </div>

      </div>
    </div>
  );
}
