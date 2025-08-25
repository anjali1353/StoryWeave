import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const styles = {
    nav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 40px",
      background: "linear-gradient(90deg, #ec4899, #a855f7)",
      color: "#fff",
      fontFamily: "'Poppins', sans-serif",
      boxShadow: "0 4px 12px rgba(200, 120, 220, 0.3)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    },
    logo: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      letterSpacing: "1px",
      textShadow: "1px 1px 4px rgba(0,0,0,0.2)",
    },
    links: {
      display: "flex",
      gap: "20px",
    },
    link: {
      textDecoration: "none",
      color: "#fff",
      fontSize: "1rem",
      fontWeight: "500",
      transition: "all 0.2s ease",
      padding: "6px 12px",
      borderRadius: "8px",
    },
    linkHover: {
      background: "rgba(255, 255, 255, 0.2)",
      transform: "scale(1.05)",
    },
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>StoryWeave</div>
      <div style={styles.links}>
        <Link
          to="/"
          style={styles.link}
          onMouseEnter={(e) => Object.assign(e.target.style, styles.linkHover)}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.transform = "none";
          }}
        >
          Home
        </Link>
        <Link
          to="/add"
          style={styles.link}
          onMouseEnter={(e) => Object.assign(e.target.style, styles.linkHover)}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.transform = "none";
          }}
        >
          Add Story
        </Link>
        <Link
  to="/profile"
  style={styles.link}
  onMouseEnter={(e) => Object.assign(e.target.style, styles.linkHover)}
  onMouseLeave={(e) => {
    e.target.style.background = "transparent";
    e.target.style.transform = "none";
  }}
>
  Profile
</Link>
        <Link
          to="/login"
          style={styles.link}
          onMouseEnter={(e) => Object.assign(e.target.style, styles.linkHover)}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.transform = "none";
          }}
        >
          Login
        </Link>
        <Link
          to="/signup"
          style={styles.link}
          onMouseEnter={(e) => Object.assign(e.target.style, styles.linkHover)}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.transform = "none";
          }}
        >
          Signup
        </Link>
      </div>
    </nav>
  );
}

export default Header;
