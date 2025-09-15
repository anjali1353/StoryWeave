import React, { useState } from "react";

function StoryCard({ title, author, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

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
      color: "#a855f7",
      marginBottom: "8px",
      fontWeight: "bold",
    },
    author: {
      fontSize: "0.9rem",
      color: "#ec4899",
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
      cursor: "pointer",
    },
    // --- Modal ---
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    modalContent: {
      background: "linear-gradient(to bottom, #fce4ec, #ede7f6)", // pink + purple
      padding: "30px",
      borderRadius: "16px",
      width: "600px",
      maxHeight: "80vh",
      overflowY: "auto",
      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
      textAlign: "left",
      position: "relative",
    },
    modalTitle: {
      color: "#6a1b9a",
      fontSize: "1.5rem",
      marginBottom: "10px",
    },
    modalAuthor: {
      color: "#ec4899",
      marginBottom: "15px",
      fontWeight: "bold",
    },
    modalText: {
      fontSize: "1rem",
      color: "#333",
      lineHeight: "1.6",
      marginBottom: "20px",
    },
    closeBtn: {
      position: "absolute",
      top: "10px",
      right: "15px",
      fontSize: "1.2rem",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      color: "#6a1b9a",
      fontWeight: "bold",
    },
    likeBtn: {
      background: "#a855f7",
      color: "#fff",
      border: "none",
      padding: "8px 16px",
      borderRadius: "8px",
      cursor: "pointer",
      marginBottom: "15px",
    },
    commentBox: {
      marginTop: "15px",
    },
    commentInput: {
      width: "100%",
      padding: "10px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      marginBottom: "10px",
    },
    commentBtn: {
      background: "#ec4899",
      color: "#fff",
      border: "none",
      padding: "8px 16px",
      borderRadius: "8px",
      cursor: "pointer",
      marginBottom: "15px",
    },
    commentList: {
      marginTop: "10px",
      paddingLeft: "15px",
    },
    commentItem: {
      background: "#fff",
      padding: "8px",
      borderRadius: "8px",
      marginBottom: "8px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    },
  };

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <>
      {/* Card */}
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
        <span style={styles.readMore} onClick={() => setIsOpen(true)}>
          Read more →
        </span>
      </div>

      {/* Modal */}
      {isOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <button style={styles.closeBtn} onClick={() => setIsOpen(false)}>
              ✕
            </button>
            <h2 style={styles.modalTitle}>{title}</h2>
            <p style={styles.modalAuthor}>By {author}</p>
            <p style={styles.modalText}>{content}</p>

            {/* Like button */}
            <button style={styles.likeBtn} onClick={() => setLikes(likes + 1)}>
              ❤️ Like ({likes})
            </button>

            {/* Comment box */}
            <div style={styles.commentBox}>
              <input
                type="text"
                placeholder="Write a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                style={styles.commentInput}
              />
              <button style={styles.commentBtn} onClick={handleAddComment}>
                Post
              </button>

              {/* Comment list */}
              <div style={styles.commentList}>
                {comments.map((c, index) => (
                  <div key={index} style={styles.commentItem}>
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default StoryCard;
