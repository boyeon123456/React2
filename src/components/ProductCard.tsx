interface ProductProps {
  title: string;
  price: number;
  img: string;
}

export default function ProductCard({ title, price, img }: ProductProps) {
  return (
    <div style={{
      background: "#fff",
      padding: "15px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      textAlign: "center"
    }}>
      <img
        src={img}
        alt={title}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <h3 style={{ marginTop: "15px", fontSize: "18px" }}>{title}</h3>
      <p style={{ marginTop: "5px", fontWeight: "bold" }}>{price.toLocaleString()}원</p>
      <button
        style={{
          marginTop: "10px",
          padding: "10px 15px",
          background: "#15b9e2ff",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        구매하기
      </button>
    </div>
  );
}
