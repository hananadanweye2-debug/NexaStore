import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    // Prevent multiple popup requests from the same browser
    if (loading) return;

    setLoading(true);

    try {
      const result = await signInWithPopup(auth, provider);

      console.log("Logged in user:", result.user);

      window.location.href = "/home";
    } catch (error) {
      console.error("Google login error:", error);

      if (error.code === "auth/popup-closed-by-user") {
        console.log("User closed the Google login window.");
      } else if (error.code === "auth/cancelled-popup-request") {
        console.log("Another Google login request was already active.");
      } else {
        alert("Google login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back</h2>

        <p style={styles.subtitle}>
          Sign in to continue
        </p>

        <button
          onClick={handleGoogleLogin}
          style={{
            ...styles.googleBtn,
            opacity: loading ? 0.6 : 1,
          }}
          disabled={loading}
        >
          {loading ? "Signing in..." : "Continue with Google"}
        </button>

        <div style={styles.divider}>OR</div>

        <input
          style={styles.input}
          placeholder="Email"
        />

        <input
          style={styles.input}
          placeholder="Password"
          type="password"
        />

        <button
          style={styles.loginBtn}
          onClick={() => alert("Email login not connected yet")}
        >
          Login
        </button>

        <p style={styles.footer}>
          Don't have an account?{" "}
          <span
            onClick={() => (window.location.href = "/register")}
            style={styles.link}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    fontFamily: "Arial",
  },

  card: {
    width: "350px",
    padding: "30px",
    borderRadius: "16px",
    background: "#111827",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
    color: "white",
    textAlign: "center",
  },

  title: {
    marginBottom: "5px",
  },

  subtitle: {
    fontSize: "14px",
    opacity: 0.7,
    marginBottom: "20px",
  },

  googleBtn: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    background: "#fff",
    color: "#000",
    fontWeight: "bold",
  },

  divider: {
    margin: "10px 0",
    fontSize: "12px",
    opacity: 0.6,
  },

  input: {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    borderRadius: "8px",
    border: "1px solid #374151",
    background: "#1f2937",
    color: "white",
  },

  loginBtn: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "8px",
    border: "none",
    background: "#3b82f6",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },

  footer: {
    marginTop: "15px",
    fontSize: "12px",
    opacity: 0.8,
  },

  link: {
    color: "#60a5fa",
    cursor: "pointer",
  },
};