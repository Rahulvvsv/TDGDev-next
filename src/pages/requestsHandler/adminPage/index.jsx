// "use client"
// import style from "./index.module.css"
// import { useState } from "react";
// import DataGridApprover from "@/components/newMolecules/DGApprover";
// import DataGridEmailApprover from "@/components/newMolecules/DGEmail";

// const AdminPage = () => {
//   const [item, setItem] = useState(1);
//   const [authenticated, setAuthenticated] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const response = await fetch("/api/authenticate", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, password }),
//     });

//     const data = await response.json();

//     if (data.success) {
//       setAuthenticated(true);
//       setError("");
//     } else {
//       setError("Invalid username or password");
//       if(data.message){

//         setError(data.message)
//         }
//     }
//   };

//   return (
//     <>
//       {!authenticated ? (
//         <form onSubmit={handleLogin} className={style.formDiv}>
//           <div className={style.formDivinside} >
//             <label htmlFor="username">Username:</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}

//               className={style.input}
//               required
//             />
//           </div>
//           <div className={style.formDivinside}>
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               className={style.input}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           {error && <p style={{ color: "red" }}>{error}</p>}
//           <button type="submit" className={style.btn1 + " " + style.btn55}>Login</button>
//         </form>
//       ) : (
//         <>
//           <button
//             onClick={() => {
//               setItem(1);
//             }}
//             className={item?style.btn1:style.btn2}
//             style={{ marginLeft: 100, marginBottom: 50 }}
//           >
//             Approve Image
//           </button>

//           <button
//             onClick={() => {
//               setItem(0);
//             }}


//             className={item?style.btn2:style.btn1}
//             style={{ marginLeft: 50, marginBottom: 50 }}
//           >
//             Email Handler
//           </button>
//           <br />
//           {item ? <DataGridApprover /> : <DataGridEmailApprover />}
//         </>
//       )}
//     </>
//   );
// };

// export default AdminPage;

"use client";
import style from "./index.module.css";
import { useState, useEffect } from "react";
import DataGridApprover from "@/components/newMolecules/DGApprover";
import DataGridEmailApprover from "@/components/newMolecules/DGEmail";

const AdminPage = () => {
  const [item, setItem] = useState(1);
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    const storedAuthenticated = localStorage.getItem("authenticated") === "true";

    if (storedUsername && storedPassword && storedAuthenticated) {
      setUsername(storedUsername);
      setPassword(storedPassword);
      handleLogin(null, storedUsername, storedPassword, true);
    }
  }, []);

  const handleLogin = async (e, cachedUsername = username, cachedPassword = password, initialLoad = false) => {
    if (e) e.preventDefault();

    const response = await fetch("/api/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: cachedUsername, password: cachedPassword }),
    });

    const data = await response.json();

    if (data.success) {
      setAuthenticated(true);
      setError("");
      if (rememberMe || initialLoad) {
        localStorage.setItem("username", cachedUsername);
        localStorage.setItem("password", cachedPassword);
        localStorage.setItem("authenticated", "true");
      } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        localStorage.removeItem("authenticated");
      }
    } else {
      setError("Invalid username or password");
      if (data.message) {
        setError(data.message);
      }
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setUsername("");
    setPassword("");
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("authenticated");
  };

  return (
    <>
      {!authenticated ? (
        <form onSubmit={handleLogin} className={style.formDiv}>
          <div className={style.formDivinside}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={style.input}
              required
            />
          </div>
          <div className={style.formDivinside}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              className={style.input}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={style.formDivinside1}>
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" className={style.btn1 + " " + style.btn55}>Login</button>
        </form>
      ) : (
        <>
          <button
            onClick={() => {
              setItem(1);
            }}
            className={item ? style.btn1 : style.btn2}
            style={{ marginLeft: 50, marginBottom: 50 }}
          >
            Approve Image
          </button>

          <button
            onClick={() => {
              setItem(0);
            }}
            className={item ? style.btn2 : style.btn1}
            style={{ marginLeft: 50, marginBottom: 50 }}
          >
            Email Handler
          </button>
          <button onClick={handleLogout} className={style.btn1} style={{ position:"absolute",right:"50px" }}>
            Logout
          </button>
          <br />
          {item ? <DataGridApprover /> : <DataGridEmailApprover />}
        </>
      )}
    </>
  );
};

export default AdminPage;

