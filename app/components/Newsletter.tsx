'use client';

import React, { useState, FormEvent } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    
    // Simulate API registration
    setSubscribed(true);
    setEmail('');
  };

  return (
    <section className="newsletter-section guide-section" id="newsletter">
      <div className="newsletter-container">
        
        {/* Ornamented Warm Panel */}
        <div className="newsletter-panel">
          
          {/* Corner Ornaments */}
          <span className="ornament-top-left">✦</span>
          <span className="ornament-top-right">✦</span>

          {/* Header */}
          <div className="newsletter-header">
            <h2 className="section-title">
              Join the <em>Maison</em>
            </h2>
            <p className="newsletter-subtitle">
              Subscribe to receive our editorial chronicles, early ritual reserves, and seasonal invitations from the apothecary.
            </p>
          </div>

          {/* Form / Success State */}
          {!subscribed ? (
            <form onSubmit={handleSubmit} className="newsletter-form">
              <div className="newsletter-form-inner">
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email address for newsletter"
                />
                <button 
                  type="submit" 
                  className="newsletter-submit-btn"
                >
                  Subscribe
                </button>
              </div>
            </form>
          ) : (
            <p className="newsletter-success">
              Your invitation has been received. Welcome to the Maison. ✦
            </p>
          )}

        </div>

      </div>
    </section>
  );
}
