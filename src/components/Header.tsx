import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const [cartCount] = useState(3)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  
  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen)
    console.log('검색 기능 실행')
  }
  
  const handleCartClick = () => {
    console.log('장바구니 페이지로 이동')
  }

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>🛍️ ShopHub</h1>
        </Link>
        
        <nav className="nav">
          <ul className="nav-menu">
            <li><Link to="/">홈</Link></li>
            <li><Link to="/products">제품</Link></li>
            <li><Link to="/categories">카테고리</Link></li>
            <li><Link to="/support">고객센터</Link></li>
          </ul>
        </nav>
        
        <div className="header-actions">
          <button 
            className="icon-btn" 
            onClick={handleSearchClick}
            aria-label="검색"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
          </button>
          
          <button 
            className="icon-btn cart-btn" 
            onClick={handleCartClick}
            aria-label="장바구니"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span>
            )}
          </button>
        </div>
      </div>
      
      <style>{`
        .header {
          background: white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .header .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
        }
        .logo h1 {
          font-size: 1.8rem;
          color: #2563eb;
          font-weight: 700;
        }
        .nav {
          flex: 1;
        }
        .nav-menu {
          display: flex;
          gap: 2rem;
          list-style: none;
          justify-content: center;
        }
        .nav-menu a {
          font-weight: 500;
          transition: color 0.3s;
          font-size: 1rem;
        }
        .nav-menu a:hover {
          color: #2563eb;
        }
        .header-actions {
          display: flex;
          gap: 1rem;
        }
        .icon-btn {
          background: transparent;
          padding: 0.5rem;
          border-radius: 50%;
          transition: background 0.3s;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .icon-btn:hover {
          background: #f3f4f6;
        }
        .cart-count {
          position: absolute;
          top: 0;
          right: 0;
          background: #ef4444;
          color: white;
          font-size: 0.75rem;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }
        
        @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }
          .header .container {
            padding: 0 1rem;
          }
        }
      `}</style>
    </header>
  )
}

export default Header
