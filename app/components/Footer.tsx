'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-container">
        
        {/* Main Footer Grid */}
        <div className="footer-grid">
          
          {/* Brand Block Column */}
          <div className="footer-brand-col">
            <div className="footer-brand-title">
              Maison <em>Noël</em>
            </div>
            <p className="footer-brand-text">
              Formulated with pure botanicals, crafted for mindful skincare rituals. Parisian apothecary meets candlelit Christmas elegance.
            </p>
            
            {/* Social Icons in 36px circles */}
            <div className="footer-socials">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
                aria-label="Instagram profile of Maison Noël"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a 
                href="https://pinterest.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
                aria-label="Pinterest board of Maison Noël"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M12.017 0c-6.627 0-12 5.373-12 12 0 5.077 3.153 9.422 7.625 11.169-.103-.949-.19-2.405.04-3.438.207-.902 1.341-5.685 1.341-5.685s-.343-.689-.343-1.707c0-1.6 1.05-2.795 2.193-2.795.94 0 1.393.705 1.393 1.55 0 .943-.6 2.355-.908 3.665-.26.11-.519.221-.774.331-.763-.332-1.393-1.077-1.393-2.037 0-1.802 1.458-3.262 3.262-3.262 1.802 0 3.262 1.46 3.262 3.262 0 .961-.26 1.884-.716 2.684.256-.11.516-.22.772-.33 1.385-1.002 2.179-2.613 2.179-4.382 0-3.66-2.969-6.63-6.63-6.63-3.662 0-6.63 2.97-6.63 6.63 0 1.258.342 2.441.939 3.486l-.508 1.9c-.314.135-.629.27-.942.404-.949-.41-1.688-1.144-2.18-2.034-.59-1.071-.852-2.344-.852-3.66 0-4.636 3.758-8.394 8.394-8.394 4.636 0 8.394 3.758 8.394 8.394 0 1.9-.508 3.654-1.39 5.034.464-.197.927-.394 1.391-.592 1.442-1.074 2.274-2.733 2.274-4.57 0-3.66-2.969-6.63-6.63-6.63z" />
                </svg>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
                aria-label="Facebook page of Maison Noël"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Discover */}
          <div className="footer-nav-col">
            <h4 className="footer-nav-title">Discover</h4>
            <ul className="footer-nav-links">
              <li><Link href="#categories" className="footer-nav-link">Collections</Link></li>
              <li><Link href="#bundle-experience" className="footer-nav-link">Skincare Rituals</Link></li>
              <li><Link href="#top-selling" className="footer-nav-link">Gift Sets</Link></li>
              <li><Link href="#skincare-routine" className="footer-nav-link">Botanical Science</Link></li>
            </ul>
          </div>

          {/* Column 3: The Maison */}
          <div className="footer-nav-col">
            <h4 className="footer-nav-title">The Maison</h4>
            <ul className="footer-nav-links">
              <li><Link href="#our-story" className="footer-nav-link">Our Story</Link></li>
              <li><Link href="#journal" className="footer-nav-link">Apothecary Journal</Link></li>
              <li><Link href="#boutiques" className="footer-nav-link">Boutique Finder</Link></li>
              <li><Link href="#gatherings" className="footer-nav-link">Festive Gatherings</Link></li>
            </ul>
          </div>

          {/* Column 4: Rituals Service */}
          <div className="footer-nav-col">
            <h4 className="footer-nav-title">Rituals Service</h4>
            <ul className="footer-nav-links">
              <li><Link href="#support" className="footer-nav-link">Concierge Support</Link></li>
              <li><Link href="#shipping" className="footer-nav-link">Shipping & Returns</Link></li>
              <li><Link href="#corporate" className="footer-nav-link">Corporate Gifting</Link></li>
              <li><Link href="#faqs" className="footer-nav-link">FAQs</Link></li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom copyright and legal links */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © MMXXVI Maison Noël. All rituals reserved.
          </div>
          <div className="footer-bottom-links">
            <Link href="#privacy" className="footer-bottom-link">Privacy Policy</Link>
            <Link href="#terms" className="footer-bottom-link">Terms of Service</Link>
            <Link href="#cookies" className="footer-bottom-link">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
