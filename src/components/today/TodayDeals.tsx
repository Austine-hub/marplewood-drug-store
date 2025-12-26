import React from 'react';
import styles from './TodayDeals.module.css';

interface Product {
  id: string;
  name: string;
  price: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  imageAlt: string;
}

const products: Product[] = [
  {
    id: '1',
    name: "Physicians Choice Women's Probiotic 60 Billion CFU Capsules",
    price: '$34.77',
    rating: 4,
    reviewCount: 340,
    imageUrl: '/deals/ProbioticCapusules.jpg',
    imageAlt: "Physicians Choice Women's Probiotic",
  },
  {
    id: '2',
    name: 'The Ginger People Ginger Rescue Soft Lozenges',
    price: '$7.88',
    rating: 4.5,
    reviewCount: 367,
    imageUrl: '/deals/GingerPeople.jpg',
    imageAlt: 'The Ginger People Ginger Rescue',
  },
  {
    id: '3',
    name: 'Supermedic Basic Medical Nitrile Exam Gloves',
    price: '$14.45',
    rating: 4,
    reviewCount: 280,
    imageUrl: '/deals/NitrileExamGloves.jpg',
    imageAlt: 'Supermedic Medical Nitrile Gloves',
  },
];

const TodayDeals: React.FC = () => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className={styles.starFilled}>
          ★
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className={styles.starHalf}>
          ★
        </span>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className={styles.starEmpty}>
          ★
        </span>
      );
    }

    return stars;
  };

  return (
    <section className={styles.dealsSection}>
      <div className={styles.cardsContainer}>
        {products.map((product) => (
          <article key={product.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Today's Last Opportunity</h2>
              <p className={styles.cardSubtitle}>
                Cras sit amet mi erat. In at felis sit amet quam tincidunt
                pharetra sed quis risus.
              </p>
            </div>

            <div className={styles.productInfo}>
              <div className={styles.imageWrapper}>
                <img
                  src={product.imageUrl}
                  alt={product.imageAlt}
                  className={styles.productImage}
                />
              </div>

              <div className={styles.productDetails}>
                <div className={styles.ratingContainer}>
                  <div className={styles.stars}>{renderStars(product.rating)}</div>
                  <span className={styles.reviewCount}>{product.reviewCount}</span>
                </div>

                <h3 className={styles.productName}>{product.name}</h3>

                <p className={styles.price}>{product.price}</p>

                <button className={styles.addToCartButton} type="button">
                  Add to cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <aside className={styles.cashbackBanner}>
        <div className={styles.cashbackContent}>
          <p className={styles.cashbackText}>
            <span className={styles.cashbackLabel}>RETURN CASH BACK</span>
            <span className={styles.cashbackDescription}>
              Earn 5% cash back on <strong>Bumedi.com</strong> See if you're pre-approved with no credit risk.
            </span>
          </p>
          <button className={styles.discoverButton} type="button">
            Discover More
          </button>
        </div>
      </aside>
    </section>
  );
};

export default TodayDeals;