import React, { useState } from "react";

function Login() {
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Fetch users from JSON
    const res = await fetch("http://localhost:3000/users");
    const users = await res.json();

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      setError("");
      localStorage.setItem("user", JSON.stringify(user)); // ✅ Save logged-in user
      alert(`Welcome back, ${user.name}!`);
      window.location.href = "/#/profile"; // redirect to profile
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Login</h1>
      <form onSubmit={handleLogin} style={styles.form}>
        <input type="email" name="email" placeholder="Email" required style={styles.input} />
        <input type="password" name="password" placeholder="Password" required style={styles.input} />
        <button type="submit" style={styles.button}>Login</button>
      </form>
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
    background: "linear-gradient(to bottom, #fce4ec, #ede7f6)", // 💖💜
    minHeight: "100vh",
  },
  heading: {
    color: "#6a1b9a",
    marginBottom: "20px",
    fontSize: "2rem",
  },
  form: {
    display: "inline-block",
    padding: "20px",
    borderRadius: "12px",
    background: "#fff",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  input: {
    display: "block",
    width: "250px",
    margin: "10px auto",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },
  button: {
    padding: "10px 20px",
    background: "linear-gradient(90deg, #ba68c8, #f48fb1)", // 💜💖
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  error: {
    marginTop: "10px",
    color: "red",
    fontWeight: "bold",
  },
};

export default Login;
