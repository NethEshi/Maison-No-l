'use client';
import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Target: Midnight, December 24th
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      let targetDate = new Date(`December 24, ${currentYear} 00:00:00`);
      
      // If we are past Dec 24 this year, target next year
      if (now.getTime() > targetDate.getTime()) {
        targetDate = new Date(`December 24, ${currentYear + 1} 00:00:00`);
      }

      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format to always show two digits
  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  // Prevent hydration mismatch by not rendering the countdown values until mounted
  if (!mounted) {
    return (
      <section className="countdown-section guide-section">
        <div className="countdown-container">
          <div className="countdown-header">
            <h2 className="countdown-title">
              Exclusive <em>Christmas</em> Offers
            </h2>
            <p className="countdown-subtitle">Unveil the magic before time runs out.</p>
          </div>
          <div className="countdown-blocks">
            {['DAYS', 'HOURS', 'MINUTES', 'SECONDS'].map((label) => (
              <div key={label} className="countdown-block">
                <span className="countdown-value">00</span>
                <span className="countdown-label">{label}</span>
              </div>
            ))}
          </div>
          <div className="countdown-action">
            <button className="btn-primary">Shop Offers</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="countdown-section guide-section">
      <div className="countdown-container">
        <div className="countdown-header">
          <h2 className="countdown-title">
            Exclusive <em>Christmas</em> Offers
          </h2>
          <p className="countdown-subtitle">Unveil the magic before time runs out.</p>
        </div>
        
        <div className="countdown-blocks">
          <div className="countdown-block">
            <span className="countdown-value">{formatNumber(timeLeft.days)}</span>
            <span className="countdown-label">DAYS</span>
          </div>
          <div className="countdown-block">
            <span className="countdown-value">{formatNumber(timeLeft.hours)}</span>
            <span className="countdown-label">HOURS</span>
          </div>
          <div className="countdown-block">
            <span className="countdown-value">{formatNumber(timeLeft.minutes)}</span>
            <span className="countdown-label">MINUTES</span>
          </div>
          <div className="countdown-block">
            <span className="countdown-value">{formatNumber(timeLeft.seconds)}</span>
            <span className="countdown-label">SECONDS</span>
          </div>
        </div>
        
        <div className="countdown-action">
          <button className="btn-gold">Shop Offers</button>
        </div>
      </div>
    </section>
  );
}
