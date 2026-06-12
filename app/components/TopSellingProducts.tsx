'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  category: string;
  priceNow: number;
  priceWas: number;
  rating: number;
  reviews: number;
  image: string;
  tag: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Aura Gold Peptide Serum',
    category: 'SERUM',
    priceNow: 65,
    priceWas: 85,
    rating: 5,
    reviews: 128,
    image: '/images/product_gold_serum_1778645306050.png',
    tag: 'Best Seller',
  },
  {
    id: 2,
    name: 'Rich Cream Éclat',
    category: 'MOISTURIZER',
    priceNow: 55,
    priceWas: 70,
    rating: 5,
    reviews: 94,
    image: '/images/product_pink_jar_1778645259508.png',
    tag: 'Award Winner',
  },
  {
    id: 3,
    name: 'Aqua Infusion Toner',
    category: 'TONER',
    priceNow: 38,
    priceWas: 48,
    rating: 4,
    reviews: 112,
    image: '/images/product_blue_toner_1778645363549.png',
    tag: 'Seasonal Favorite',
  },
  {
    id: 4,
    name: 'Mint Hydrating Gel',
    category: 'REFRESHER',
    priceNow: 45,
    priceWas: 58,
    rating: 5,
    reviews: 76,
    image: '/images/product_mint_tube_1778645439678.png',
    tag: 'Limited Edition',
  },
];

export default function TopSellingProducts() {
  const [addedItems, setAddedItems] = useState<Record<number, boolean>>({});

  const handleAddToCart = (productId: number) => {
    setAddedItems((prev) => ({ ...prev, [productId]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [productId]: false }));
    }, 2000);
  };

  const renderStars = (rating: number) => {
    return (
      <span className="product-stars-selling">
        {'★'.repeat(rating)}
        {'☆'.repeat(5 - rating)}
      </span>
    );
  };

  return (
    <section className="top-selling-section guide-section" id="top-selling">
      <div className="top-selling-container">
        
        {/* Section Header */}
        <div className="top-selling-header">
          <h2 className="section-title">
            Top Selling <em>Products</em>
          </h2>
          <p className="top-selling-subtitle">
            Indulge in our most coveted botanical formulas, formulated for radiant ceremony.
          </p>
        </div>

        {/* Product Grid */}
        <div className="top-selling-grid">
          {products.map((product) => {
            const isAdded = addedItems[product.id];
            return (
              <article key={product.id} className="product-card-selling">
                {/* Image Container with linen gradient background */}
                <div className="product-image-container">
                  {product.tag && (
                    <span className="product-tag-pill">{product.tag}</span>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 500px) 100vw, (max-width: 900px) 50vw, 25vw"
                    className="product-image-selling"
                  />
                </div>

                {/* Product Info */}
                <div className="product-info-selling">
                  <span className="product-category-selling eyebrow">
                    {product.category}
                  </span>
                  <h3 className="product-name-selling">
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="product-rating-selling">
                    {renderStars(product.rating)}
                    <span className="product-reviews-selling">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Pricing and Action Button */}
                  <div className="product-price-row-selling">
                    <span className="product-price-now-selling">
                      ${product.priceNow}
                    </span>
                    {product.priceWas && (
                      <span className="product-price-was-selling">
                        ${product.priceWas}
                      </span>
                    )}
                  </div>

                  {/* Sharp rectangular button (no border-radius) */}
                  <button
                    type="button"
                    className={`product-action-btn-selling ${isAdded ? 'added' : ''}`}
                    onClick={() => handleAddToCart(product.id)}
                    aria-label={`Reserve ${product.name}`}
                  >
                    {isAdded ? '✦ Reserved ✓' : 'Reserve Product ↗'}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
