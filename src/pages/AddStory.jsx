// // function AddStory() {
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const newStory = {
// //       title: e.target.title.value,
// //       author: e.target.author.value,
// //       content: e.target.content.value,
// //     };

// //     await fetch("http://localhost:3000/stories", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify(newStory),
// //     });

// //     alert("Story added!");
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <input name="title" placeholder="Title" required />
// //       <input name="author" placeholder="Author" required />
// //       <textarea name="content" placeholder="Write your story..." required />
// //       <button type="submit">Add Story</button>
// //     </form>
// //   );
// // }

// // export default AddStory;
// import React from "react";

// function AddStory() {
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newStory = {
//       title: e.target.title.value,
//       author: e.target.author.value,
//       content: e.target.content.value,
//     };

//     await fetch("http://localhost:3000/stories", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newStory),
//     });

//     alert("Story added!");
//     e.target.reset();
//   };

//   return (
//     <>
//       <style>
//         {`
//           .story-form {
//             max-width: 500px;
//             margin: 40px auto;
//             padding: 25px;
//             background: #fff;
//             border-radius: 12px;
//             box-shadow: 0 6px 16px rgba(0,0,0,0.1);
//             display: flex;
//             flex-direction: column;
//             gap: 15px;
//           }
//           .story-form input,
//           .story-form textarea {
//             padding: 12px;
//             border: 1px solid #ccc;
//             border-radius: 8px;
//             font-size: 15px;
//             outline: none;
//             transition: border-color 0.3s ease, box-shadow 0.3s ease;
//           }
//           .story-form input:focus,
//           .story-form textarea:focus {
//             border-color: #4a90e2;
//             box-shadow: 0 0 6px rgba(74,144,226,0.4);
//           }
//           .story-form textarea {
//             resize: vertical;
//             min-height: 120px;
//           }
//           .story-form button {
//             padding: 12px;
//             border: none;
//             border-radius: 8px;
//             font-size: 16px;
//             font-weight: bold;
//             background: linear-gradient(90deg, #4a90e2, #6a11cb);
//             color: #fff;
//             cursor: pointer;
//             transition: transform 0.3s ease, background 0.3s ease;
//           }
//           .story-form button:hover {
//             transform: scale(1.05);
//             background: linear-gradient(90deg, #6a11cb, #4a90e2);
//           }
//         `}
//       </style>

//       <form className="story-form" onSubmit={handleSubmit}>
//         <input name="title" placeholder="Title" required />
//         <input name="author" placeholder="Author" required />
//         <textarea name="content" placeholder="Write your story..." required />
//         <button type="submit">Add Story</button>
//       </form>
//     </>
//   );
// }

// export default AddStory;

import React from "react";

function AddStory() {
  const handleAddStory = async (e) => {
    e.preventDefault();
    const newStory = {
      title: e.target.title.value,
      author: e.target.author.value,
      content: e.target.content.value,
    };

    await fetch("http://localhost:3000/stories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStory),
    });

    alert("Story added successfully!");
    e.target.reset();
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #fde2f3, #e6ccff)", // pastel pink → lavender
      fontFamily: "'Poppins', sans-serif",
    },
    card: {
      background: "#fff",
      padding: "40px",
      borderRadius: "16px",
      width: "500px",
      boxShadow: "0 6px 25px rgba(200, 120, 220, 0.3)",
    },
    title: {
      fontSize: "2rem",
      marginBottom: "20px",
      color: "#ec4899", // soft pink
      textAlign: "center",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      borderRadius: "10px",
      border: "1px solid #d6a9f7",
      background: "#fdf9ff",
      color: "#333",
    },
    textarea: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      height: "150px",
      borderRadius: "10px",
      border: "1px solid #d6a9f7",
      background: "#fdf9ff",
      color: "#333",
      resize: "none",
    },
    button: {
      width: "100%",
      padding: "12px",
      marginTop: "15px",
      border: "none",
      borderRadius: "10px",
      background: "linear-gradient(90deg, #a855f7, #ec4899)", // purple → pink
      color: "#fff",
      fontWeight: "bold",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleAddStory} style={styles.card}>
        <h1 style={styles.title}>📖 Add New Story</h1>
        <input type="text" name="title" placeholder="Story Title" required style={styles.input} />
        <input type="text" name="author" placeholder="Author" required style={styles.input} />
        <textarea name="content" placeholder="Story Content" required style={styles.textarea}></textarea>
        <button type="submit" style={styles.button}>Add Story</button>
      </form>
    </div>
  );
}

export default AddStory
