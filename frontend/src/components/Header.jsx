export default function Header({
  darkMode,
  setDarkMode,
  cartCount,
}) {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: darkMode ? "#1b1b1b" : "#fff",
        color: darkMode ? "#fff" : "#111",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 20px",
        borderBottom: darkMode
          ? "1px solid #333"
          : "1px solid #ddd",
      }}
    >
      <div>
        <h2 style={{ margin: 0 }}>🛍 NexaStore</h2>
        <small style={{ color: darkMode ? "#bbb" : "#666" }}>
          Beauty • Fashion • Lifestyle
        </small>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 15,
        }}
      >
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            background: "transparent",
            border: "none",
            fontSize: 22,
            cursor: "pointer",
            color: darkMode ? "#fff" : "#111",
          }}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <div
          style={{
            position: "relative",
            fontSize: 24,
          }}
        >
          🛒

          {cartCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: -8,
                right: -10,
                background: "red",
                color: "#fff",
                borderRadius: "50%",
                width: 18,
                height: 18,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
              }}
            >
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}