// // import React from "react";

// // function Signup() {
// //   const handleSignup = async (e) => {
// //     e.preventDefault();
// //     const newUser = {
// //       name: e.target.name.value,
// //       email: e.target.email.value,
// //       password: e.target.password.value
// //     };

// //     // Save to JSON server
// //     await fetch("http://localhost:3000/users", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify(newUser),
// //     });

// //     alert("Signup successful! You can now login.");
// //     e.target.reset();
// //   };

// //   return (
// //     <div>
// //       <h1>Signup</h1>
// //       <form onSubmit={handleSignup}>
// //         <input type="text" name="name" placeholder="Name" required /><br/>
// //         <input type="email" name="email" placeholder="Email" required /><br/>
// //         <input type="password" name="password" placeholder="Password" required /><br/>
// //         <button type="submit">Signup</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Signup;

// import React from "react";

// function Signup() {
//   const handleSignup = async (e) => {
//     e.preventDefault();
//     const newUser = {
//       name: e.target.name.value,
//       email: e.target.email.value,
//       password: e.target.password.value,
//     };

//     // Save to JSON server
//     await fetch("http://localhost:3000/users", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newUser),
//     });

//     alert("Signup successful! You can now login.");
//     e.target.reset();
//   };

//   return (
//     <>
//       <style>
//         {`
//           .signup-container {
//             max-width: 400px;
//             margin: 60px auto;
//             padding: 30px;
//             background: #fff;
//             border-radius: 12px;
//             box-shadow: 0 6px 16px rgba(0,0,0,0.1);
//             text-align: center;
//           }
//           .signup-container h1 {
//             margin-bottom: 20px;
//             font-size: 28px;
//             color: #6a11cb;
//           }
//           .signup-container form {
//             display: flex;
//             flex-direction: column;
//             gap: 15px;
//           }
//           .signup-container input {
//             padding: 12px;
//             border: 1px solid #ccc;
//             border-radius: 8px;
//             font-size: 15px;
//             outline: none;
//             transition: border-color 0.3s ease, box-shadow 0.3s ease;
//           }
//           .signup-container input:focus {
//             border-color: #6a11cb;
//             box-shadow: 0 0 6px rgba(106,17,203,0.3);
//           }
//           .signup-container button {
//             padding: 12px;
//             border: none;
//             border-radius: 8px;
//             font-size: 16px;
//             font-weight: bold;
//             background: linear-gradient(90deg, #6a11cb, #4a90e2);
//             color: #fff;
//             cursor: pointer;
//             transition: transform 0.3s ease, background 0.3s ease;
//           }
//           .signup-container button:hover {
//             transform: scale(1.05);
//             background: linear-gradient(90deg, #4a90e2, #6a11cb);
//           }
//         `}
//       </style>

//       <div className="signup-container">
//         <h1>Signup</h1>
//         <form onSubmit={handleSignup}>
//           <input type="text" name="name" placeholder="Name" required />
//           <input type="email" name="email" placeholder="Email" required />
//           <input type="password" name="password" placeholder="Password" required />
//           <button type="submit">Signup</button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Signup;

import React from "react";

function Signup() {
  const handleSignup = async (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value
    };

    await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    alert("Signup successful! You can now login.");
    e.target.reset();
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f9e2f4, #e6d6f7)", // light pink → light purple
      color: "#333",
      fontFamily: "'Poppins', sans-serif",
    },
    card: {
      background: "#fff",
      padding: "40px",
      borderRadius: "16px",
      width: "350px",
      textAlign: "center",
      boxShadow: "0 6px 25px rgba(180, 130, 200, 0.3)",
    },
    title: {
      fontSize: "2rem",
      marginBottom: "20px",
      color: "#a855f7", // soft purple
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
      outline: "none",
    },
    button: {
      width: "100%",
      padding: "12px",
      marginTop: "15px",
      border: "none",
      borderRadius: "10px",
      background: "linear-gradient(90deg, #ec4899, #a855f7)", // pink → purple
      color: "#fff",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "0.3s",
    },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSignup} style={styles.card}>
        <h1 style={styles.title}>💜 Signup</h1>
        <input type="text" name="name" placeholder="Name" required style={styles.input} />
        <input type="email" name="email" placeholder="Email" required style={styles.input} />
        <input type="password" name="password" placeholder="Password" required style={styles.input} />
        <button type="submit" style={styles.button}>Signup</button>
      </form>
    </div>
  );
}

export default Signup;
