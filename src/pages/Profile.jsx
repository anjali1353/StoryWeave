// import React, { useEffect, useState } from "react";

// function Profile() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // For now, load user from localStorage (you can replace with API later)
//     const savedUser = JSON.parse(localStorage.getItem("user"));
//     if (savedUser) {
//       setUser(savedUser);
//     }
//   }, []);

//   const styles = {
//     container: {
//       maxWidth: "900px",
//       margin: "40px auto",
//       padding: "30px",
//       borderRadius: "15px",
//       background: "linear-gradient(135deg, #fbcfe8, #e9d5ff)",
//       boxShadow: "0 6px 18px rgba(160, 100, 200, 0.2)",
//       fontFamily: "'Poppins', sans-serif",
//     },
//     header: {
//       display: "flex",
//       alignItems: "center",
//       gap: "20px",
//       marginBottom: "30px",
//     },
//     avatar: {
//       width: "100px",
//       height: "100px",
//       borderRadius: "50%",
//       background: "linear-gradient(135deg, #ec4899, #a855f7)",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       fontSize: "2rem",
//       fontWeight: "bold",
//       color: "#fff",
//       boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
//     },
//     name: {
//       fontSize: "1.8rem",
//       fontWeight: "600",
//       color: "#4a044e",
//     },
//     email: {
//       fontSize: "1rem",
//       color: "#6b21a8",
//     },
//     section: {
//       marginTop: "30px",
//     },
//     sectionTitle: {
//       fontSize: "1.3rem",
//       fontWeight: "600",
//       marginBottom: "10px",
//       color: "#6d28d9",
//     },
//     storyCard: {
//       background: "#fff",
//       borderRadius: "10px",
//       padding: "15px",
//       marginBottom: "15px",
//       boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//     },
//   };

//   if (!user) {
//     return (
//       <div style={styles.container}>
//         <h2>Please log in to view your profile.</h2>
//       </div>
//     );
//   }

//   return (
//     <div style={styles.container}>
//       {/* Profile Header */}
//       <div style={styles.header}>
//         <div style={styles.avatar}>{user.name[0].toUpperCase()}</div>
//         <div>
//           <h2 style={styles.name}>{user.name}</h2>
//           <p style={styles.email}>{user.email}</p>
//         </div>
//       </div>

//       {/* Stories Section */}
//       <div style={styles.section}>
//         <h3 style={styles.sectionTitle}>Your Stories</h3>
//         {/* Placeholder stories */}
//         <div style={styles.storyCard}>
//           <h4>🌸 Magical Nights</h4>
//           <p>A romance fantasy story...</p>
//         </div>
//         <div style={styles.storyCard}>
//           <h4>⚔️ The Lost Hero</h4>
//           <p>An adventure manga-style tale...</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;


// 
import React, { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    setUser(savedUser);
  }, []);

  if (!user) {
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>Profile</h1>
        <p style={styles.info}>No user is logged in.</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Profile</h1>
      <div style={styles.card}>
        <h2 style={styles.username}>{user.name}</h2>
        <p style={styles.detail}><strong>Email:</strong> {user.email}</p>
        <button
          style={styles.logoutBtn}
          onClick={() => {
            localStorage.removeItem("user");
            window.location.reload();
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    textAlign: "center",
    background: "linear-gradient(to bottom, #fce4ec, #ede7f6)", // 💖💜 theme
    minHeight: "100vh",
  },
  heading: {
    color: "#6a1b9a",
    marginBottom: "20px",
    fontSize: "2rem",
  },
  card: {
    display: "inline-block",
    padding: "20px",
    borderRadius: "12px",
    background: "#fff",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    minWidth: "300px",
  },
  username: {
    color: "#8e24aa",
    marginBottom: "10px",
  },
  detail: {
    color: "#333",
    marginBottom: "10px",
  },
  logoutBtn: {
    padding: "8px 16px",
    background: "linear-gradient(90deg, #ba68c8, #f48fb1)", // 💜💖
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Profile;

