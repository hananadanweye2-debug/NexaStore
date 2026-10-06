export default function BottomNav({ page, setPage, darkMode }) {
  const activeColor = "#0d6efd";
  const normalColor = darkMode ? "#fff" : "#111";

  const btnStyle = (active) => ({
    flex: 1,
    background: "transparent",
    border: "none",
    cursor: "pointer",
    color: active ? activeColor : normalColor,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: 13,
    fontWeight: active ? "bold" : "normal",
  });

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: 65,
        background: darkMode ? "#1b1b1b" : "#fff",
        borderTop: darkMode ? "1px solid #333" : "1px solid #ddd",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        zIndex: 9999,
      }}
    >
      <button style={btnStyle(page === "home")} onClick={() => setPage("home")}>
        🏠
        <span>Home</span>
      </button>

      <button
        style={btnStyle(page === "wishlist")}
        onClick={() => setPage("wishlist")}
      >
        ❤️
        <span>Wishlist</span>
      </button>

      <button style={btnStyle(page === "cart")} onClick={() => setPage("cart")}>
        🛒
        <span>Cart</span>
      </button>

      <button
        style={btnStyle(page === "account")}
        onClick={() => setPage("account")}
      >
        👤
        <span>Account</span>
      </button>
    </div>
  );
}