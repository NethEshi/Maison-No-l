'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface Step {
  number: string;
  title: string;
  eyebrow: string;
  products: Product[];
}

const stepsData: Step[] = [
  {
    number: '№ 01',
    title: 'Purify & Prime',
    eyebrow: 'THE CLEANSING BASE',
    products: [
      {
        id: 'aqua_toner',
        name: 'Aqua Toner',
        price: 38,
        image: '/images/product_blue_toner_1778645363549.png',
        description: 'Infused with marine botanicals for deep pre-hydration and clean balance.'
      },
      {
        id: 'simons_balm',
        name: 'Simons Cleansing Balm',
        price: 42,
        image: '/images/product_collection_1778645232381.png',
        description: 'A velvety melting balm that gently removes all impurities and softens skin.'
      }
    ]
  },
  {
    number: '№ 02',
    title: 'Target & Treat',
    eyebrow: 'THE ACTIVE ESSENCE',
    products: [
      {
        id: 'gold_serum',
        name: 'Aura Gold Peptide Serum',
        price: 65,
        image: '/images/product_gold_serum_1778645306050.png',
        description: 'Gilded active peptides restore collagen and smooth fine lines.'
      },
      {
        id: 'satin_nectar',
        name: 'Satin Renewal Nectar',
        price: 58,
        image: '/images/media__1778644925649.png',
        description: 'A luxurious liquid essence that restores glow and radiance.'
      }
    ]
  },
  {
    number: '№ 03',
    title: 'Hydrate & Lock',
    eyebrow: 'THE PROTECTIVE VEIL',
    products: [
      {
        id: 'cream_eclat',
        name: 'Rich Cream Éclat',
        price: 55,
        image: '/images/product_pink_jar_1778645259508.png',
        description: 'A whipped velvet moisture shield that deeply hydrates and firms.'
      },
      {
        id: 'mint_gel',
        name: 'Mint Hydrating Gel',
        price: 45,
        image: '/images/product_mint_tube_1778645439678.png',
        description: 'Ultra-light refreshing moisture that cools, plumps, and refines.'
      }
    ]
  }
];

export default function BundleExperience() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [selectedProducts, setSelectedProducts] = useState<Record<number, Product>>({
    0: stepsData[0].products[0], // default Aqua Toner
    1: stepsData[1].products[0], // default Gold Peptide Serum
    2: stepsData[2].products[0], // default Rich Cream Éclat
  });
  
  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);

  const handleProductSelect = (stepIdx: number, product: Product) => {
    setSelectedProducts((prev) => ({
      ...prev,
      [stepIdx]: product,
    }));
    
    // Automatically advance to the next step after a short delay for smooth transitions
    if (stepIdx < stepsData.length - 1) {
      setTimeout(() => {
        setActiveStep(stepIdx + 1);
      }, 350);
    }
  };

  // Calculate prices
  const originalTotalPrice = Object.values(selectedProducts).reduce((sum, p) => sum + p.price, 0);
  const bundlePromoPrice = 115; // fixed luxurious package price
  const savingsAmount = originalTotalPrice - bundlePromoPrice;

  return (
    <section className="bundle-section guide-section" id="bundle-experience">
      <div className="bundle-container">
        
        {/* Section Header */}
        <div className="bundle-header">
          <h2 className="section-title text-center">
            The Christmas <em>Bundle Experience</em>
          </h2>
          <p className="bundle-subtitle text-center">
            Compose your bespoke three-step ritual. Hand-packed in our signature green velvet gift box.
          </p>
        </div>

        <div className="bundle-grid">
          
          {/* Left Column: Step Rows */}
          <div className="bundle-steps">
            {stepsData.map((step, stepIdx) => {
              const isActive = activeStep === stepIdx;
              const selectedProduct = selectedProducts[stepIdx];

              return (
                <div 
                  key={stepIdx} 
                  className={`step-row ${isActive ? 'active' : ''}`}
                >
                  {/* Step Header (always visible, clickable) */}
                  <button 
                    type="button"
                    className="step-header"
                    onClick={() => setActiveStep(stepIdx)}
                    aria-expanded={isActive}
                  >
                    <div className="step-header-left">
                      <div className="step-circle">
                        {step.number}
                      </div>
                      <div className="step-title-group">
                        <span className="step-eyebrow eyebrow">{step.eyebrow}</span>
                        <h3 className="step-title">{step.title}</h3>
                      </div>
                    </div>
                    
                    <div className="step-header-right">
                      {selectedProduct && !isActive && (
                        <span className="step-current-selection">
                          {selectedProduct.name}
                        </span>
                      )}
                      <span className={`step-arrow-icon ${isActive ? 'rotated' : ''}`}>
                        ✦
                      </span>
                    </div>
                  </button>

                  {/* Step Content: Expanded options */}
                  <div className={`step-content-container ${isActive ? 'expanded' : ''}`}>
                    <div className="step-content-inner">
                      <div className="product-options">
                        {step.products.map((product) => {
                          const isSelected = selectedProduct.id === product.id;
                          return (
                            <div 
                              key={product.id}
                              className={`option-card ${isSelected ? 'selected' : ''}`}
                              onClick={() => handleProductSelect(stepIdx, product)}
                            >
                              <div className="option-image-wrapper">
                                <Image
                                  src={product.image}
                                  alt={product.name}
                                  fill
                                  sizes="(max-width: 900px) 50vw, 25vw"
                                  className="option-image"
                                />
                              </div>
                              <div className="option-info">
                                <div className="option-header">
                                  <h4 className="option-name">{product.name}</h4>
                                  <span className="option-price">${product.price}</span>
                                </div>
                                <p className="option-description">{product.description}</p>
                                <button
                                  type="button"
                                  className={`option-select-btn ${isSelected ? 'selected-btn' : ''}`}
                                >
                                  {isSelected ? '✓ Selected' : 'Choose Product'}
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Summary Card */}
          <div className="bundle-summary-wrapper">
            <div className="bundle-summary-card">
              {/* Corner Star Ornaments */}
              <span className="ornament-top-left">✦</span>
              <span className="ornament-top-right">✦</span>
              
              <div className="summary-card-inner">
                <span className="summary-eyebrow eyebrow">VOTRE COFFRET PERSONNALISÉ</span>
                <h3 className="summary-title">Bespoke Festive Ritual</h3>
                
                {/* Velvet box visualizer */}
                <div className="gift-box-visualizer">
                  <div className="velvet-box-lid">
                    <span className="gilded-seal">❀</span>
                  </div>
                  <div className="box-contents-list">
                    {stepsData.map((step, idx) => (
                      <div key={idx} className="box-item-row">
                        <span className="box-item-num">{step.number}</span>
                        <div className="box-item-details">
                          <span className="box-item-name">{selectedProducts[idx].name}</span>
                          <span className="box-item-price">${selectedProducts[idx].price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="summary-divider"></div>

                {/* Selected Products Breakdown Text */}
                <div className="selection-review">
                  <p className="selection-review-title">Included in your velvet-lined box:</p>
                  <p className="selection-review-text italic-accent">
                    Three full-sized apothecary formulas, a brass rituals scoop, and a hand-tied evergreen botanical sprig.
                  </p>
                </div>

                <div className="summary-pricing-section">
                  <div className="pricing-info">
                    <span className="original-price-label">Individual Value:</span>
                    <span className="original-price">${originalTotalPrice}</span>
                  </div>
                  
                  <div className="promo-price-row">
                    <div className="promo-price-group">
                      <span className="promo-price-label">Coffret Price:</span>
                      <span className="promo-price">${bundlePromoPrice}</span>
                    </div>
                    <span className="save-tag-pill">
                      Save ${savingsAmount}
                    </span>
                  </div>
                </div>

                {/* Interactive Purchase CTA */}
                <div className="summary-cta-section">
                  <button
                    type="button"
                    className="btn-gold w-full text-center"
                    onClick={() => {
                      setIsAddedToCart(true);
                      setTimeout(() => setIsAddedToCart(false), 3000);
                    }}
                    style={{ width: '100%' }}
                  >
                    {isAddedToCart ? '✦ Reserved to Rituals Cart ✓' : 'Reserve Bespoke Coffret'}
                  </button>
                  <p className="summary-fineprint caption text-center">
                    Complimentary worldwide shipping. Quantities limited to seven hundred rituals.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
