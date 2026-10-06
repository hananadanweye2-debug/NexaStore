import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Register() {
  const handleRegister = async () => {
    const name = document.querySelector('input[placeholder="Name"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const password = document.querySelector('input[placeholder="Password"]').value;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("User created:", userCredential.user);
      window.location.href = "/home";
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Create Account</h2>

        <input style={styles.input} placeholder="Name" />
        <input style={styles.input} placeholder="Email" />
        <input style={styles.input} placeholder="Password" type="password" />

        <button style={styles.btn} onClick={handleRegister}>
          Register
        </button>

        <p style={styles.text}>
          Already have an account?{" "}
          <span
            style={styles.link}
            onClick={() => (window.location.href = "/login")}
          >
            Login
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
    borderRadius: "12px",
    background: "#111827",
    color: "white",
    textAlign: "center",
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
  btn: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    background: "#22c55e",
    border: "none",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
  },
  text: {
    marginTop: "10px",
    fontSize: "12px",
  },
  link: {
    color: "#60a5fa",
    cursor: "pointer",
  },
};