import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Mail, Globe, User, MessageSquare } from "lucide-react";

export default function SlideContact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container-fluid h-100 d-flex align-items-center justify-content-center">
      <div className="w-100" style={{ maxWidth: 1140 }}>
        
        {/* Header: Slides in from TOP */}
        <motion.div 
          className="text-center mb-3"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="d-inline-flex align-items-center gap-2 mb-2">
            <span className="deck-status-dot" />
            <span style={{ 
              fontFamily: "var(--deck-font-mono)", 
              color: "var(--deck-blue-primary)", 
              letterSpacing: "0.2em", 
              fontSize: "0.85rem",
              fontWeight: 700 
            }}>
              SLIDE 04 // CONNECT WITH US
            </span>
          </div>

          {/* Desktop Title & Subtitle (Hidden on mobile) */}
          <h2 
            className="d-none d-md-block"
            style={{ 
              fontSize: "clamp(2rem, 3.8vw, 3.2rem)", 
              fontWeight: 900, 
              color: "#fff", 
              marginBottom: "6px",
              lineHeight: 1.2
            }}
          >
            LET'S BUILD SOMETHING GREAT
          </h2>
          <p 
            className="d-none d-md-block"
            style={{ color: "var(--deck-text-muted)", fontSize: "0.98rem", maxWidth: 580, margin: "0 auto" }}
          >
            Whether you need a custom mobile app, high-concurrency cloud architecture, or engineering consultation.
          </p>
        </motion.div>

        <div className="row g-4 align-items-stretch">
          {/* Left Column: Flies in from the LEFT (Compact info list on mobile) */}
          <motion.div 
            className="col-lg-5 d-flex flex-column justify-content-between mb-3 mb-lg-0"
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.42, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="deck-3d-card p-2 p-md-4 mb-2 mb-md-3" style={{ background: "rgba(6, 14, 32, 0.85)" }}>
              <div className="d-flex align-items-center gap-3">
                <div className="deck-card-icon mb-0" style={{ width: 38, height: 38, borderRadius: 8, flexShrink: 0 }}>
                  <Mail size={18} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--deck-font-mono)", fontSize: "0.68rem", color: "var(--deck-blue-bright)", letterSpacing: "0.1em" }}>
                    OFFICIAL INQUIRIES
                  </div>
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.92rem" }}>
                    contact@88stechnologies.com
                  </div>
                </div>
              </div>
            </div>

            <div className="deck-3d-card p-2 p-md-4 mb-2 mb-md-3" style={{ background: "rgba(6, 14, 32, 0.85)" }}>
              <div className="d-flex align-items-center gap-3">
                <div className="deck-card-icon mb-0" style={{ width: 38, height: 38, borderRadius: 8, flexShrink: 0 }}>
                  <Globe size={18} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--deck-font-mono)", fontSize: "0.68rem", color: "var(--deck-blue-bright)", letterSpacing: "0.1em" }}>
                    DEVELOPER REPOSITORY
                  </div>
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.92rem" }}>
                    88's Technologies Inc. on App Store
                  </div>
                </div>
              </div>
            </div>

            <div className="reference-badge-box w-100 py-2 py-md-3 text-center mt-2 mt-md-auto d-none d-md-block" style={{ background: "rgba(4, 10, 24, 0.95)" }}>
              <span className="reference-badge-text" style={{ fontSize: "1.1rem" }}>
                INNOVATE &bull; SCALE &bull; SHIP
              </span>
            </div>
          </motion.div>

          {/* Right Column: Flies in from the RIGHT */}
          <motion.div 
            className="col-lg-7"
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.42, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <div 
              className="deck-contact-card p-4 p-md-4 h-100 d-flex flex-column justify-content-center"
            >
              {submitted ? (
                <div className="text-center py-4">
                  <CheckCircle size={52} color="var(--deck-blue-primary)" className="mb-3" />
                  <h3 style={{ color: "#fff", fontWeight: 800, fontSize: "1.4rem" }}>TRANSMISSION RECEIVED</h3>
                  <p style={{ color: "var(--deck-text-muted)", fontSize: "0.95rem", maxWidth: 400, margin: "0 auto" }}>
                    Thank you, <strong style={{ color: "var(--deck-blue-primary)" }}>{formData.name || "friend"}</strong>. Our senior engineers will reach out to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", message: "" }); }}
                    className="deck-nav-btn mt-3"
                    style={{ fontSize: "0.8rem", padding: "6px 16px" }}
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    
                    {/* Name Input */}
                    <div className="col-md-6">
                      <div className="deck-input-group">
                        <label className="deck-input-label">
                          <User size={13} /> Full Name
                        </label>
                        <div className="deck-input-wrapper">
                          <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required 
                            placeholder="e.g. Alex Mercer" 
                            className="deck-input-field" 
                          />
                          <User size={16} className="deck-input-icon" />
                        </div>
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="col-md-6">
                      <div className="deck-input-group">
                        <label className="deck-input-label">
                          <Mail size={13} /> Work Email
                        </label>
                        <div className="deck-input-wrapper">
                          <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required 
                            placeholder="alex@enterprise.com" 
                            className="deck-input-field" 
                          />
                          <Mail size={16} className="deck-input-icon" />
                        </div>
                      </div>
                    </div>

                    {/* Message / Scope Textarea */}
                    <div className="col-12">
                      <div className="deck-input-group">
                        <label className="deck-input-label">
                          <MessageSquare size={13} /> Project Scope / Requirements
                        </label>
                        <div className="deck-input-wrapper deck-textarea-wrapper">
                          <textarea 
                            rows={3} 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required 
                            placeholder="Briefly describe your mobile app, cloud infrastructure, or consulting need..." 
                            className="deck-textarea-field" 
                          />
                          <MessageSquare size={16} className="deck-textarea-icon" />
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="col-12 mt-3">
                      <button 
                        type="submit" 
                        className="deck-submit-btn"
                      >
                        <Send size={16} />
                        TRANSMIT SPECIFICATION
                      </button>
                    </div>

                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Footer brand stamp: Fades up from BOTTOM */}
        <motion.div 
          className="text-center mt-3"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.25 }}
        >
          <span style={{ fontFamily: "var(--deck-font-mono)", fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>
            &copy; {new Date().getFullYear()} 88'S TECHNOLOGIES INC. &bull; SYSTEM OPERATIONAL
          </span>
        </motion.div>

      </div>
    </div>
  );
}
