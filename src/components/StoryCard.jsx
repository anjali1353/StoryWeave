import React from "react";

function StoryCard({ title, author, content }) {
  const styles = {
    card: {
      background: "#fff",
      borderRadius: "16px",
      padding: "20px",
      margin: "20px",
      width: "280px",
      boxShadow: "0 6px 18px rgba(200, 120, 220, 0.2)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      cursor: "pointer",
    },
    cardHover: {
      transform: "translateY(-6px)",
      boxShadow: "0 10px 25px rgba(200, 120, 220, 0.3)",
    },
    title: {
      fontSize: "1.3rem",
      color: "#a855f7", // purple
      marginBottom: "8px",
      fontWeight: "bold",
    },
    author: {
      fontSize: "0.9rem",
      color: "#ec4899", // pink
      marginBottom: "12px",
    },
    content: {
      fontSize: "0.95rem",
      color: "#444",
      lineHeight: "1.4",
      maxHeight: "90px",
      overflow: "hidden",
    },
    readMore: {
      display: "block",
      marginTop: "10px",
      color: "#a855f7",
      fontWeight: "bold",
      textDecoration: "none",
    },
  };

  return (
    <div
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = styles.cardHover.transform;
        e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = styles.card.boxShadow;
      }}
    >
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.author}>By {author}</p>
      <p style={styles.content}>{content}</p>
      <span style={styles.readMore}>Read more →</span>
    </div>
  );
}

export default StoryCard;
