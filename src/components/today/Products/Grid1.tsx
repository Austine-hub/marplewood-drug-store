//src/components/today/Products/Grid1.tsx

import React from 'react';
import Image from 'next/image';
import styles from './Grid.module.css';

const ProductGrid: React.FC = () => {
  const renderStars = (rating: number) => (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s > Math.floor(rating) ? styles.starEmpty : ''}>★</span>
      ))}
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        
        {/* Left Column */}
        <div className={styles.column}>
          <ProductCard name="The Ginger People Ginger Rescue Soft Lozenges" price={7.88} rating={3.67} img="/products/pic1.jpg" />
          <div style={{height: '24px'}} />
          <ProductCard name="First Honey Manuka Ointment Medical Grade Liquid Wound..." price={8.17} originalPrice={14.90} rating={2.67} img="/products/pic2.jpg" />
          <div style={{height: '24px'}} />
          <ProductCard name="Upset Stomach & Nausea Support Dietary Supplement Ginger Berry" price={10.16} originalPrice={18.47} rating={3.00} img="/products/pic3.jpg" />
        </div>

        {/* Center Promo Column */}
        <div className={styles.column}>
          <div className={`${styles.promoCard} ${styles.promoMint}`}>
            <span className={styles.promoBadge}>Exclusive Discount</span>
            <h2 className={styles.promoTitle}>Magical Moments Start Here</h2>
            <p className={styles.promoSubtitle}>Find Joy with Our Exciting Selection of Kids Toys and Clothing</p>
            <a href="#" className={styles.promoLink}>View More →</a>
            <div className={styles.promoImageWrapper}>
              <Image src="/products/pic5.jpg" alt="Promo" width={180} height={220} />
            </div>
          </div>
          <div style={{height: '24px'}} />
          <div className={`${styles.promoCard} ${styles.promoGray}`}>
            <span className={styles.promoBadge}>Exclusive Discount</span>
            <h2 className={styles.promoTitle}>Fun Finds for Every Growing Mind</h2>
            <p className={styles.promoSubtitle}>Your Go-To Destination for Toys and Apparel That Inspire and Delight</p>
            <a href="#" className={styles.promoLink}>View More →</a>
            <div className={styles.promoImageWrapper}>
              <Image src="/products/pic6.jpg" alt="Promo" width={180} height={220} />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.column}>
          <ProductCard name="Equate No Drip Nasal Spray, Pump Mist 12 Hour" price={5.90} originalPrice={10.50} rating={2.00} img="/products/pic4.jpg" />
          <div style={{height: '24px'}} />
          <ProductCard name="MaryRuth's Kids Probiotic Gummies Strawberry Flavor" price={33.80} originalPrice={41.90} rating={3.50} img="/products/pic5.jpg" />
          <div style={{height: '24px'}} />
          <ProductCard name="Metamucil Fiber Supplement No Sugar Added Fiber Gummies for Dai..." price={16.55} originalPrice={28.22} rating={2.20} img="/products/pic6.jpg" />
        </div>

      </div>
    </div>
  );
};

// Internal Sub-component for cleaner architecture
const ProductCard = ({ name, price, originalPrice, rating, img }: any) => (
  <div className={styles.productCard}>
    <div className={styles.imageWrapper}>
      <Image src={img} alt={name} width={130} height={130} className={styles.productImage} />
    </div>
    <div className={styles.ratingWrapper}>
      <div className={styles.stars}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i + 1 > Math.floor(rating) ? styles.starEmpty : ''}>★</span>
        ))}
      </div>
      <span className={styles.reviewCount}>{rating.toFixed(2)}</span>
    </div>
    <h3 className={styles.productName}>{name}</h3>
    <div className={styles.priceWrapper}>
      <span className={styles.price}>${price.toFixed(2)}</span>
      {originalPrice && <span className={styles.originalPrice}>${originalPrice.toFixed(2)}</span>}
    </div>
    <button className={styles.addToCartBtn}>Add to cart</button>
  </div>
);

export default ProductGrid;