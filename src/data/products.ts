export interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  rating: number
  reviews: number
  discount?: number
  description: string
  features: string[]
  stock: number
  images?: string[]
}

export const products: Product[] = [
  {
    id: 1,
    name: '프리미엄 무선 이어폰',
    price: 129000,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500',
    category: '전자기기',
    rating: 4.8,
    reviews: 324,
    discount: 20,
    description: '최첨단 노이즈 캔슬링 기술이 적용된 프리미엄 무선 이어폰입니다. 뛰어난 음질과 편안한 착용감으로 장시간 사용해도 피로감이 없습니다.',
    features: [
      '최대 30시간 재생',
      'ANC 노이즈 캔슬링',
      'IPX5 방수',
      '블루투스 5.3',
      '고속 충전'
    ],
    stock: 50,
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800',
      'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=800',
      'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=800'
    ]
  },
  {
    id: 2,
    name: '스마트워치 프로',
    price: 349000,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    category: '전자기기',
    rating: 4.6,
    reviews: 289,
    description: '건강 관리부터 스마트 알림까지, 모든 것을 손목 위에서 관리하세요.',
    features: [
      '심박수 모니터링',
      '수면 추적',
      '50m 방수',
      'GPS 내장',
      '7일 배터리'
    ],
    stock: 35,
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800'
    ]
  },
  {
    id: 3,
    name: '프리미엄 백팩',
    price: 89000,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
    category: '패션',
    rating: 4.5,
    reviews: 156,
    discount: 15,
    description: '도시와 자연을 오가는 멀티 백팩. 내구성 좋은 소재와 실용적인 디자인.',
    features: [
      '15.6인치 노트북 수납',
      '방수 소재',
      '에어 메쉬 등판',
      'USB 충전 포트',
      '20L 용량'
    ],
    stock: 42,
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800'
    ]
  },
  {
    id: 4,
    name: '블루투스 스피커',
    price: 79000,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500',
    category: '전자기기',
    rating: 4.7,
    reviews: 412,
    description: '360도 서라운드 사운드로 어디서나 파티를 즐기세요.',
    features: [
      '360도 사운드',
      '12시간 재생',
      'IPX7 방수',
      '핸즈프리 통화',
      '저음 강화'
    ],
    stock: 67,
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800'
    ]
  },
  {
    id: 5,
    name: '4K 웹캠',
    price: 159000,
    image: 'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=500',
    category: '전자기기',
    rating: 4.4,
    reviews: 198,
    discount: 25,
    description: '화상회의와 스트리밍을 위한 프로페셔널 웹캠.',
    features: [
      '4K 해상도',
      '자동 초점',
      '광각 렌즈',
      '노이즈 감소 마이크',
      '삼각대 마운트'
    ],
    stock: 28,
    images: [
      'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=800'
    ]
  },
  {
    id: 6,
    name: '게이밍 마우스',
    price: 69000,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500',
    category: '전자기기',
    rating: 4.9,
    reviews: 567,
    description: '프로게이머를 위한 고성능 게이밍 마우스.',
    features: [
      '16000 DPI',
      'RGB 라이팅',
      '8개 프로그래밍 버튼',
      '초경량 디자인',
      '온보드 메모리'
    ],
    stock: 89,
    images: [
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800'
    ]
  }
]

// ID로 제품 찾기
export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id)
}

// 카테고리별 제품 필터링
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category)
}

// 할인 제품만 가져오기
export const getDiscountedProducts = (): Product[] => {
  return products.filter(product => product.discount && product.discount > 0)
}
