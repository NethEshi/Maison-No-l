import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-brand">
          Maison Noël
        </Link>
        <nav className="navbar-nav">
          <Link href="#home" className="nav-link">Home</Link>
          <Link href="#our-story" className="nav-link">Our Story</Link>
          <Link href="#benefits" className="nav-link">Benefits</Link>
          <Link href="#ingredients" className="nav-link">Ingredients</Link>
          <Link href="#reviews" className="nav-link">Reviews</Link>
          <Link href="#skincare-routine" className="nav-link">Skincare Routine</Link>
        </nav>
        <div className="navbar-actions">
          <Link href="#shop-now" className="btn-navbar-cta">
            Shop Now ↗
          </Link>
        </div>
      </div>
    </header>
  );
}
