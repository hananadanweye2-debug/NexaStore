export default function Splash() {
  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <h1 style={styles.logo}>NexaStore</h1>
        <p style={styles.tagline}>Your shopping starts here</p>

        <button
          style={styles.button}
          onClick={() => (window.location.href = "/login")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "url('https://images.unsplash.com/photo-1523275335684-37898b6baf30') center/cover no-repeat",
  },

  overlay: {
    textAlign: "center",
    background: "rgba(0,0,0,0.6)",
    padding: "40px",
    borderRadius: "16px",
    color: "white",
    backdropFilter: "blur(6px)",
  },

  logo: {
    fontSize: "40px",
    fontWeight: "bold",
    marginBottom: "10px",
  },

  tagline: {
    fontSize: "16px",
    opacity: 0.8,
    marginBottom: "20px",
  },

  button: {
    padding: "12px 25px",
    background: "#3b82f6",
    border: "none",
    borderRadius: "10px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },
};