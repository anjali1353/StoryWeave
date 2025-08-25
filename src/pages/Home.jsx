// import React, { useEffect, useState } from "react";
// import StoryCard from "../components/StoryCard";

// function Home() {
//   const [stories, setStories] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3000/stories")
//       .then((res) => res.json())
//       .then((data) => setStories(data));
//   }, []);

//   const styles = {
//     container: {
//       minHeight: "100vh",
//       background: "linear-gradient(135deg, #fde2f3, #e6ccff)", // pink → lavender
//       padding: "40px 20px",
//       fontFamily: "'Poppins', sans-serif",
//     },
//     heading: {
//       fontSize: "2.5rem",
//       textAlign: "center",
//       color: "#a855f7",
//       marginBottom: "30px",
//       fontWeight: "bold",
//       textShadow: "1px 1px 3px rgba(236, 72, 153, 0.3)",
//     },
//     grid: {
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
//       gap: "20px",
//       justifyItems: "center",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>✨ Stories By Anjali ✨</h1>
//       <div style={styles.grid}>
//         {stories.length > 0 ? (
//           stories.map((story, idx) => (
//             <StoryCard
//               key={idx}
//               title={story.title}
//               author={story.author}
//               content={story.content}
//             />
//           ))
//         ) : (
//           <p style={{ textAlign: "center", color: "#666" }}>No stories yet... Add one!</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;




import React, { useEffect, useState } from "react";
import StoryCard from "../components/StoryCard";

function Home() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/stories")
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, []);

  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #fde2f3, #e6ccff)", // pink → lavender
      padding: "40px 20px",
      fontFamily: "'Poppins', sans-serif",
    },
    heading: {
      fontSize: "2.5rem",
      textAlign: "center",
      color: "#a855f7",
      marginBottom: "30px",
      fontWeight: "bold",
      textShadow: "1px 1px 3px rgba(236, 72, 153, 0.3)",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: "20px",
      justifyItems: "center",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>✨ Stories By Anjali ✨</h1>
      <div style={styles.grid}>
        {stories.length > 0 ? (
          stories.map((story, idx) => (
            <StoryCard
              key={idx}
              title={story.title}
              author={story.author}
              content={story.content}
            />
          ))
        ) : (
          <p style={{ textAlign: "center", color: "#666" }}>No stories yet... Add one!</p>
        )}
      </div>
    </div>
  );
}

export default Home;

