//src/components/header/Header.tsx

import React, { useState } from 'react';
import styles from './Header.module.css';
import { Menu } from 'lucide-react'; // Add this import
import Link from 'next/link'

import { useCartCount, useCartSubtotal } from "@/context/CartContext";



const Header: React.FC<{ onMenuToggle: () => void }> = ({ onMenuToggle }) => {
  const totalItems = useCartCount();
  const subtotal = useCartSubtotal();

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
    // Implement search functionality here
  };

  // Helper for currency formatting
const formatPrice = (amount: number) =>
  new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);


  return (
    <header className={styles.header} role="banner">
      <div className={styles.container}>


        {/* Mobile Menu Button - NEW */}
        <button 
          className={styles.menuButton} 
          onClick={onMenuToggle}
          aria-label="Open Menu"
        >
          <Menu size={24} />
        </button>
        
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <a href="/" className={styles.logoLink} aria-label="Marplewood Pharmacy - Home">
            <div className={styles.logo}>
              <span className={styles.logoText}>Marplewood</span>
              <span className={styles.logoSubtext}>PHARMACY</span>
              <span className={styles.logoTagline}>Caring Beyond Prescriptions</span>
            </div>
          </a>
        </div>

        {/* Search Section */}
        <div className={styles.searchSection}>
          <form onSubmit={handleSearch} className={styles.searchForm} role="search">
            <label htmlFor="search-input" className={styles.visuallyHidden}>
              Search everything at Marplewood Pharmacy
            </label>
            <div className={styles.searchWrapper}>
              <svg 
                className={styles.searchIcon} 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <input
                id="search-input"
                type="search"
                className={styles.searchInput}
                placeholder="Search everything at Marplewood Pharmacy..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search products"
              />
            </div>
            <button 
              type="submit" 
              className={styles.searchButton}
              aria-label="Submit search"
            >
              Search
            </button>
          </form>
        </div>

        {/* Actions Section */}
        <nav className={styles.actionsSection} aria-label="User actions">
          <Link
            className={styles.actionButton} 
            aria-label="Wishlist"
            title="Wishlist"
            href="/wishlist" 
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </Link>

          <Link 
            className={styles.actionButton} 
            aria-label="Compare products"
            title="Compare"
            href={`/compare`}
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="17 1 21 5 17 9"></polyline>
              <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
              <polyline points="7 23 3 19 7 15"></polyline>
              <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
            </svg>
          </Link>

         <Link 
            className={styles.actionButton} 
            aria-label="User account"
            title="Account"
            href="/auth/login" 
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <div className={styles.accountInfo}>
              <span className={styles.accountLabel}>Sign In</span>
              <span className={styles.accountSubLabel}>Account</span>
            </div>
         </Link>

          <Link
            className={styles.cartButton} 
            aria-label={`Shopping cart with ${totalItems} ${totalItems === 1 ? 'item' : 'items'}`}
            title="Cart"
            href="/cart" 
          >
            <div className={styles.cartIconWrapper}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </div>

            <div className={styles.cartPriceWrapper}>
              <span className={styles.cartPrice}>
                {formatPrice(subtotal)}
              </span>

              {totalItems > 0 && (
                <span className={styles.cartBadge} aria-hidden="true">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </div>

          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;