import { Link } from 'react-router-dom'
import { useState } from 'react'

interface ProductCardProps {
  id: number
  name: string
  price: number
  image: string
  category: string
  rating?: number
  discount?: number
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  image, 
  category, 
  rating = 4.5, 
  discount 
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const discountedPrice = discount ? price * (1 - discount / 100) : price

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsWishlisted(!isWishlisted)
  }

  return (
    <Link to={`/product/${id}`} className="product-card">
      <div className="product-image">
        <img src={image} alt={name} loading="lazy" />
        {discount && (
          <span className="discount-badge">{discount}% OFF</span>
        )}
        <button 
          className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
          onClick={handleWishlistClick}
          aria-label="위시리스트에 추가"
        >
          {isWishlisted ? '❤️' : '🤍'}
        </button>
      </div>
      
      <div className="product-info">
        <span className="category">{category}</span>
        <h3 className="product-name">{name}</h3>
        <div className="rating">
          {'★'.repeat(Math.floor(rating))}
          {'☆'.repeat(5 - Math.floor(rating))}
          <span>({rating})</span>
        </div>
        <div className="price-section">
          {discount ? (
            <>
              <span className="original-price">{price.toLocaleString()}원</span>
              <span className="discounted-price">{Math.floor(discountedPrice).toLocaleString()}원</span>
            </>
          ) : (
            <span className="price">{price.toLocaleString()}원</span>
          )}
        </div>
      </div>
      
      <style>{`
        .product-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
          display: block;
          height: 100%;
        }
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.15);
        }
        .product-image {
          position: relative;
          padding-top: 100%;
          overflow: hidden;
          background: #f3f4f6;
        }
        .product-image img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }
        .product-card:hover .product-image img {
          transform: scale(1.05);
        }
        .discount-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: #ef4444;
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
          z-index: 2;
        }
        .wishlist-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          background: white;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          transition: all 0.3s;
          z-index: 2;
        }
        .wishlist-btn:hover {
          transform: scale(1.1);
        }
        .wishlist-btn.active {
          background: #fef2f2;
        }
        .product-info {
          padding: 1rem;
        }
        .category {
          font-size: 0.875rem;
          color: #6b7280;
          text-transform: uppercase;
          font-weight: 500;
        }
        .product-name {
          font-size: 1.125rem;
          font-weight: 600;
          margin: 0.5rem 0;
          color: #1f2937;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 2.6em;
        }
        .rating {
          color: #fbbf24;
          font-size: 0.875rem;
          margin: 0.5rem 0;
        }
        .rating span {
          color: #6b7280;
          margin-left: 0.25rem;
        }
        .price-section {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.75rem;
        }
        .original-price {
          color: #9ca3af;
          text-decoration: line-through;
          font-size: 0.875rem;
        }
        .discounted-price, .price {
          color: #2563eb;
          font-size: 1.25rem;
          font-weight: 700;
        }
      `}</style>
    </Link>
  )
}

export default ProductCard