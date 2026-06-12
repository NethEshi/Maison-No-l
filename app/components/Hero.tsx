import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        {/* Large background typography */}
        <div className="hero-bg-text">Maison Noël</div>
        {/* Main background image covering the top part */}
        <div className="hero-image-wrapper">
          <Image
            src="/images/hero.jpg"
            alt="Maison Noël"
            fill
            priority
            className="hero-image"
          />
          {/* Subtle gradient overlay to ensure text readability */}
          <div className="hero-overlay"></div>
        </div>
      </div>

      <div className="hero-content">
        {/* Center floating elements */}
        <div className="hero-center-group">
          {/* Social Proof floating card */}
          <div className="social-proof-pill">
            <div className="avatars">
              <div className="avatar bg-gray-300"></div>
              <div className="avatar bg-gray-400"></div>
              <div className="avatar bg-gray-500"></div>
            </div>
            <div className="social-proof-text">
              Trusted by <strong>5M+</strong> skincare lovers
            </div>
          </div>

          <h1 className="hero-title">
            Healthy skin begins<br />
            with <span className="italic-accent">mindful care.</span>
          </h1>
          <p className="hero-subtitle">
            Premium skincare products crafted with skin-loving ingredients to hydrate deeply,<br />
            restore balance, and reveal your natural radiance every day.
          </p>

          <div style={{ marginTop: "50px", zIndex: 20, position: "relative" }}>
            <button className="btn-hero-cta">
              Start Your Glow Journey ↗
            </button>
          </div>
        </div>
      </div>

      {/* Bottom curved section */}
      <div className="hero-bottom-wrapper">
        <div className="hero-bottom-curve">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,80 L0,20 L400,20 C480,20 500,80 580,80 L860,80 C940,80 960,20 1040,20 L1440,20 L1440,80 Z" fill="var(--cream)" />
          </svg>
        </div>
        <div className="hero-bottom-panel">
          <div className="hero-bottom-content">
            <div className="stats-group">
              <div className="stat-number">4.9</div>
              <div className="stars">
                ★ ★ ★ ★ ★
              </div>
              <div className="stat-label">Average Rating —<br/>Loved by thousands worldwide.</div>
            </div>

            <div className="stats-group">
              <div className="stat-number">10M+</div>
              <div className="stat-label">skincare products<br/>delivered worldwide.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
