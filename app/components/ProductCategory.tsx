import React from 'react';
import Image from 'next/image';

const products = [
  {
    id: 1,
    title: 'Simons Collection',
    cta: 'View Collection ↗',
    topTags: ['Natural Care'],
    bottomTags: [],
    image: '/images/product_collection_1778645232381.png',
  },
  {
    id: 2,
    title: 'Face Cream',
    cta: 'View Product ↗',
    topTags: ['Face'],
    bottomTags: ['Hydration', 'Radiance'],
    image: '/images/product_pink_jar_1778645259508.png',
  },
  {
    id: 3,
    title: 'Face Serum',
    cta: 'View Product ↗',
    topTags: ['Serum'],
    bottomTags: ['Natural', 'Elegance'],
    image: '/images/product_gold_serum_1778645306050.png',
  },
  {
    id: 4,
    title: 'Aqua Toner',
    cta: 'View Product ↗',
    topTags: ['Toner'],
    bottomTags: ['Freshness', 'Hydration'],
    image: '/images/product_blue_toner_1778645363549.png',
  },
  {
    id: 5,
    title: 'Hydrating Gel',
    cta: 'View Product ↗',
    topTags: ['Gel'],
    bottomTags: ['Innovation', 'Hydration'],
    image: '/images/product_mint_tube_1778645439678.png',
  }
];

export default function ProductCategory() {
  return (
    <section className="product-category guide-section">
      <div className="category-container">
        <div className="category-header">
          <div className="category-header-text">
            <h2 className="category-title">My Products</h2>
            <p className="category-subtitle">Essential Cosmetics for Your Self-Esteem.</p>
          </div>
          <div className="category-pagination">01/10</div>
        </div>
        
        <div className="accordion-gallery">
          {products.map((product, index) => (
            <div key={product.id} className="accordion-item">
              <Image 
                src={product.image} 
                alt={product.title} 
                fill 
                className="accordion-image" 
              />
              {/* Overlay for inactive state (optional, just for contrast) */}
              <div className="accordion-overlay"></div>
              
              <div className="accordion-content">
                <div className="accordion-top">
                  {product.topTags.length > 0 && (
                    <span className="accordion-tag">{product.topTags[0]}</span>
                  )}
                </div>
                
                <div className="accordion-bottom">
                  {product.bottomTags.length > 0 && (
                    <div className="accordion-bottom-tags">
                      {product.bottomTags.map((tag, i) => (
                        <span key={i} className="accordion-bottom-tag">{tag}</span>
                      ))}
                    </div>
                  )}
                  
                  <div className="accordion-details">
                    <h3 className="accordion-item-title">{product.title}</h3>
                    <button className="accordion-cta">{product.cta}</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
