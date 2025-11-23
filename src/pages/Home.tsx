import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체')
  
  const categories = ['전체', '전자기기', '패션', '생활용품', '뷰티']
  
  const filteredProducts = selectedCategory === '전체'
    ? products
    : products.filter(p => p.category === selectedCategory)

  return (
    <div className="home">
      {/* 히어로 섹션 */}
      <section className="hero">
        <div className="hero-content">
          <h1>새로운 라이프스타일을 만나보세요 ✨</h1>
          <p>프리미엄 제품을 특별한 가격에 만나보실 수 있습니다</p>
          <button className="cta-btn">지금 쇼핑하기 →</button>
        </div>
      </section>

      {/* 제품 섹션 */}
      <section className="products-section">
        <div className="section-header">
          <h2>🔥 인기 상품</h2>
          <div className="filter-tabs">
            {categories.map(category => (
              <button
                key={category}
                className={`tab ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
              rating={product.rating}
              discount={product.discount}
            />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="no-products">
            <p>해당 카테고리에 제품이 없습니다 😢</p>
          </div>
        )}
      </section>

      <style>{`
        .hero {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 16px;
          padding: 4rem 2rem;
          text-align: center;
          color: white;
          margin-bottom: 3rem;
        }
        .hero-content h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }
        .hero-content p {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }
        .cta-btn {
          background: white;
          color: #667eea;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-size: 1.125rem;
          font-weight: 600;
          transition: transform 0.3s;
        }
        .cta-btn:hover {
          transform: scale(1.05);
        }
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .section-header h2 {
          font-size: 2rem;
          font-weight: 700;
        }
        .filter-tabs {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .tab {
          padding: 0.5rem 1.5rem;
          border-radius: 20px;
          background: white;
          font-weight: 500;
          transition: all 0.3s;
          font-size: 0.95rem;
        }
        .tab:hover {
          background: #f3f4f6;
        }
        .tab.active {
          background: #2563eb;
          color: white;
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
        }
        .no-products {
          text-align: center;
          padding: 4rem 2rem;
          color: #6b7280;
          font-size: 1.125rem;
        }
        
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 1.75rem;
          }
          .hero-content p {
            font-size: 1rem;
          }
          .section-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .products-grid {
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            gap: 1.5rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Home