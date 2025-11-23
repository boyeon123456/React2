const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* 회사 정보 섹션 */}
          <div className="footer-section">
            <h3>🛍️ ShopHub</h3>
            <p>최고의 제품을 최저가로 만나보세요</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <span>f</span>
              </a>
              <a href="#" aria-label="Instagram">
                <span>📷</span>
              </a>
              <a href="#" aria-label="Twitter">
                <span>🐦</span>
              </a>
            </div>
          </div>
          
          {/* 고객센터 섹션 */}
          <div className="footer-section">
            <h4>고객센터</h4>
            <ul>
              <li><a href="#">공지사항</a></li>
              <li><a href="#">자주 묻는 질문</a></li>
              <li><a href="#">1:1 문의</a></li>
              <li><a href="#">배송 조회</a></li>
            </ul>
          </div>
          
          {/* 회사 정보 섹션 */}
          <div className="footer-section">
            <h4>회사정보</h4>
            <ul>
              <li><a href="#">회사소개</a></li>
              <li><a href="#">이용약관</a></li>
              <li><a href="#">개인정보처리방침</a></li>
              <li><a href="#">채용정보</a></li>
            </ul>
          </div>
          
          {/* 연락처 섹션 */}
          <div className="footer-section">
            <h4>고객센터</h4>
            <p className="phone">📞 1588-0000</p>
            <p className="time">평일 09:00 - 18:00</p>
            <p className="time">주말/공휴일 휴무</p>
            <p className="email">📧 support@shophub.com</p>
          </div>
        </div>
        
        {/* 하단 저작권 */}
        <div className="footer-bottom">
          <p>&copy; 2024 ShopHub. All rights reserved.</p>
          <p className="address">서울특별시 강남구 테헤란로 123 | 사업자등록번호: 123-45-67890</p>
        </div>
      </div>
      
      <style>{`
        .footer {
          background: #1f2937;
          color: #d1d5db;
          padding: 3rem 0 1rem;
          margin-top: 4rem;
        }
        .footer .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        .footer-section h3 {
          color: #2563eb;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .footer-section h4 {
          color: white;
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }
        .footer-section p {
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }
        .footer-section ul {
          list-style: none;
        }
        .footer-section li {
          margin-bottom: 0.5rem;
        }
        .footer-section a {
          transition: color 0.3s;
          display: inline-block;
        }
        .footer-section a:hover {
          color: #2563eb;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-links a {
          width: 40px;
          height: 40px;
          background: #374151;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          transition: all 0.3s;
        }
        .social-links a:hover {
          background: #2563eb;
          transform: translateY(-2px);
        }
        .phone {
          font-size: 1.5rem;
          color: #2563eb;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .time {
          font-size: 0.9rem;
          color: #9ca3af;
        }
        .email {
          margin-top: 0.5rem;
          color: #2563eb;
        }
        .footer-bottom {
          border-top: 1px solid #374151;
          padding-top: 1.5rem;
          text-align: center;
        }
        .footer-bottom p {
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }
        .address {
          font-size: 0.85rem;
          color: #9ca3af;
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: repeat(2, 1fr);
          }
          .footer .container {
            padding: 0 1rem;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer