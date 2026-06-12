'use client';

import React, { useState } from 'react';

export default function PromoBanner() {
  const [copied, setCopied] = useState(false);
  const promoCode = 'NOELMMXXVI';

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(promoCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy promo code: ', err);
    }
  };

  return (
    <section className="promo-banner-section guide-section" id="promo-banner">
      <div className="promo-banner-container">
        <div className="promo-banner-grid">
          
          {/* Left Column: Content & Gilded Promo Box */}
          <div className="promo-banner-content">
            <h2 className="section-title">
              A Gilded <em>Offering</em>
            </h2>
            <p className="promo-banner-text">
              Receive complimentary travel elixirs and our signature hand-tied green ribbon velvet packaging with every order. Applied automatically at ceremony checkout.
            </p>

            <div className="promo-code-theater-wrapper">
              <div 
                className="promo-code-theater"
                onClick={handleCopyCode}
                role="button"
                tabIndex={0}
                aria-label={`Copy promotional code ${promoCode}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCopyCode();
                  }
                }}
              >
                {promoCode}
                {copied && (
                  <span className="promo-code-copied-toast">
                    Copied to Rituals ✓
                  </span>
                )}
              </div>
              <span className="promo-code-copy-tip">
                Click code to copy and apply at checkout
              </span>
            </div>
          </div>

          {/* Right Column: CTA */}
          <div className="promo-banner-action">
            <button
              type="button"
              className="btn-gold"
              onClick={() => {
                // Smooth scroll to top-selling or shop sections if they exist
                const shopSection = document.getElementById('top-selling');
                if (shopSection) {
                  shopSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explore Rituals ↗
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
