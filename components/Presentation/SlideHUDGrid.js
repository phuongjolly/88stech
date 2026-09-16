import React from "react";

export default function SlideHUDGrid() {
  return (
    <div className="deck-grid-bg">
      {/* 3D Perspective Plane - Floor */}
      <div className="deck-grid-plane" />
      
      {/* 3D Perspective Plane - Ceiling */}
      <div className="deck-grid-plane-top" />

      {/* Cyber Blue Radial Ambient Glows */}
      <div className="deck-ambient-glow glow-center" />
      <div className="deck-ambient-glow glow-top-right" />
      <div className="deck-ambient-glow glow-bottom-left" />
    </div>
  );
}
