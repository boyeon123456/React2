import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getProductById } from '../data/products'

const Product = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isAddedToCart, setIsAddedToCart] = useState(false)
  
  const product = getProductById(Number(id))
  
  useEffect(() => {
    if (!product) {
      navigate('/')
    }
  }, [product, navigate])
  
  if (!product) {
    return <div>제품을 찾을 수 없습니다...</div>
  }

  const discountedPrice = product.discount 
    ? product.price * (1 - product.discount / 100) 
    : product.price

  const handleAddToCart = () => {
    setIsAddedToCart(true)
    setTimeout(() => setIsAddedToCart(false), 2000)
    console.log(`장바구니에 추가: ${product.name} x ${quantity}`)
  }

  const handleBuyNow = () => {
    console.log(`바로 구매: ${product.name} x ${quantity}`)
  }

  const images = product.images || [product.image]

  return (
    <div className="product-page">
      <div className="breadcrumb">
        <a href="/">홈</a> / <a href="/">제품</a> / <span>{product.name}</span>
      </div>
      
      <div className="product-container">
        {/* 이미지 갤러리 */}
        <div className="product-images">
          <div className="main-image">
            <img src={images[selectedImage]} alt={product.name} />
          </div>
          {images.length > 1 && (
            <div className="thumbnail-images">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  className={`thumbnail ${selectedImage === idx ? 'active' : ''}`}
                  onClick={() => setSelectedImage(idx)}
                >
                  <img src={img} alt={`View ${idx + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 제품 상세 정보 */}
        <div className="product-details">
          <div className="category-badge">{product.category}</div>
          <h1>{product.name}</h1>
          
          <div className="rating-section">
            <div className="stars">
              {'★'.repeat(Math.floor(product.rating))}
              {'☆'.repeat(5 - Math.floor(product.rating))}
            </div>
            <span className="rating-score">{product.rating}</span>
            <span className="reviews">리뷰 {product.reviews}개</span>
          </div>

          <div className="price-box">
            {product.discount && (
              <div className="discount-info">
                <span className="discount-badge">{product.discount}%</span>
                <span className="original-price">{product.price.toLocaleString()}원</span>
              </div>
            )}
            <div className="final-price">{Math.floor(discountedPrice).toLocaleString()}원</div>
            <div className="savings">
              {product.discount && (
                <span>💰 {(product.price - discountedPrice).toLocaleString()}원 절약</span>
              )}
            </div>
          </div>

          <div className="stock-info">
            <span className={product.stock > 0 ? 'in-stock' : 'out-of-stock'}>
              {product.stock > 0 ? `✓ 재고 있음 (${product.stock}개)` : '품절'}
            </span>
          </div>

          <div className="description">
            <h3>📝 상품설명</h3>
            <p>{product.description}</p>
          </div>

          <div className="features">
            <h3>✨ 주요 특징</h3>
            <ul>
              {product.features.map((feature, idx) => (
                <li key={idx}>
                  <span className="check">✓</span> {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="purchase-section">
            <div className="quantity-selector">
              <label>수량</label>
              <div className="quantity-controls">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  −
                </button>
                <span>{quantity}</span>
                <button 
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  disabled={quantity >= product.stock}
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="total-price">
              <span>총 금액</span>
              <strong>{(Math.floor(discountedPrice) * quantity).toLocaleString()}원</strong>
            </div>
            
            <div className="action-buttons">
              <button 
                className={`add-to-cart ${isAddedToCart ? 'added' : ''}`}
                onClick={handleAddToCart}
                disabled={product.stock === 0}
              >
                {isAddedToCart ? '✓ 담김!' : '🛒 장바구니'}
              </button>
              <button 
                className="buy-now"
                onClick={handleBuyNow}
                disabled={product.stock === 0}
              >
                💳 바로 구매
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .breadcrumb {
          margin-bottom: 2rem;
          color: #6b7280;
          font-size: 0.9rem;
        }
        .breadcrumb a {
          color: #2563eb;
        }
        .breadcrumb a:hover {
          text-decoration: underline;
        }
        .breadcrumb span {
          color: #1f2937;
          font-weight: 500;
        }
        .product-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-top: 2rem;
        }
        .main-image {
          width: 100%;
          aspect-ratio: 1;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #e5e7eb;
        }
        .main-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .thumbnail-images {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
          flex-wrap: wrap;
        }
        .thumbnail {
          width: 80px;
          height: 80px;
          border-radius: 8px;
          overflow: hidden;
          border: 2px solid #e5e7eb;
          transition: border-color 0.3s;
          background: white;
        }
        .thumbnail:hover {
          border-color: #9ca3af;
        }
        .thumbnail.active {
          border-color: #2563eb;
        }
        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .category-badge {
          display: inline-block;
          background: #eff6ff;
          color: #2563eb;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .product-details h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        .rating-section {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #e5e7eb;
        }
        .stars {
          color: #fbbf24;
          font-size: 1.25rem;
        }
        .rating-score {
          font-weight: 600;
          color: #1f2937;
        }
        .reviews {
          color: #6b7280;
        }
        .price-box {
          background: #f9fafb;
          padding: 1.5rem;
          border-radius: 12px;
          margin-bottom: 1.5rem;
        }
        .discount-info {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }
        .discount-badge {
          background: #ef4444;
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-weight: 600;
          font-size: 1rem;
        }
        .original-price {
          color: #9ca3af;
          text-decoration: line-through;
          font-size: 1.125rem;
        }
        .final-price {
          font-size: 2.25rem;
          font-weight: 700;
          color: #2563eb;
          margin-bottom: 0.5rem;
        }
        .savings {
          color: #059669;
          font-weight: 600;
        }
        .stock-info {
          margin-bottom: 1.5rem;
        }
        .in-stock {
          color: #059669;
          font-weight: 600;
        }
        .out-of-stock {
          color: #ef4444;
          font-weight: 600;
        }
        .description, .features {
          margin-bottom: 2rem;
        }
        .description h3, .features h3 {
          margin-bottom: 1rem;
          font-size: 1.25rem;
          color: #1f2937;
        }
        .description p {
          line-height: 1.8;
          color: #4b5563;
        }
        .features ul {
          list-style: none;
        }
        .features li {
          padding: 0.75rem 0;
          color: #4b5563;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .features .check {
          color: #059669;
          font-weight: bold;
          font-size: 1.2rem;
        }
        .purchase-section {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 1.5rem;
        }
        .quantity-selector {
          margin-bottom: 1.5rem;
        }
        .quantity-selector label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #374151;
        }
        .quantity-controls {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: #f9fafb;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          width: fit-content;
        }
        .quantity-controls button {
          width: 32px;
          height: 32px;
          border-radius: 4px;
          background: white;
          font-size: 1.25rem;
          font-weight: 600;
          transition: all 0.3s;
          border: 1px solid #e5e7eb;
        }
        .quantity-controls button:hover:not(:disabled) {
          background: #2563eb;
          color: white;
          border-color: #2563eb;
        }
        .quantity-controls button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .quantity-controls span {
          font-size: 1.125rem;
          font-weight: 600;
          min-width: 40px;
          text-align: center;
        }
        .total-price {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
          border-top: 1px solid #e5e7eb;
          border-bottom: 1px solid #e5e7eb;
          margin-bottom: 1.5rem;
        }
        .total-price span {
          color: #6b7280;
        }
        .total-price strong {
          font-size: 1.5rem;
          color: #2563eb;
        }
        .action-buttons {
          display: flex;
          gap: 1rem;
        }
        .add-to-cart, .buy-now {
          flex: 1;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s;
        }
        .add-to-cart {
          background: white;
          color: #2563eb;
          border: 2px solid #2563eb;
        }
        .add-to-cart:hover:not(:disabled) {
          background: #eff6ff;
        }
        .add-to-cart.added {
          background: #059669;
          color: white;
          border-color: #059669;
        }
        .buy-now {
          background: #2563eb;
          color: white;
        }
        .buy-now:hover:not(:disabled) {
          background: #1d4ed8;
        }
        .add-to-cart:disabled, .buy-now:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        @media (max-width: 1024px) {
          .product-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
        
        @media (max-width: 768px) {
          .product-details h1 {
            font-size: 1.5rem;
          }
          .final-price {
            font-size: 1.75rem;
          }
          .action-buttons {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}

export default Product