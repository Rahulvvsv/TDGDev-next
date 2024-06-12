"use client"
import style from "./index.module.css"
import { useState } from "react";
import DataGridApprover from "@/components/newMolecules/DGApprover";
import DataGridEmailApprover from "@/components/newMolecules/DGEmail";

const AdminPage = () => {
  const [item, setItem] = useState(1);
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (data.success) {
      setAuthenticated(true);
      setError("");
    } else {
      setError("Invalid username or password");
      if(data.message){

        setError(data.message)
        }
    }
  };

  return (
    <>
      {!authenticated ? (
        <form onSubmit={handleLogin} className={style.formDiv}>
          <div className={style.formDivinside} >
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
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" className={style.btn1 + " " + style.btn55}>Login</button>
        </form>
      ) : (
        <>
          <button
            onClick={() => {
              setItem(1);
            }}
            className={item?style.btn1:style.btn2}
            style={{ marginLeft: 100, marginBottom: 50 }}
          >
            Approve Image
          </button>

          <button
            onClick={() => {
              setItem(0);
            }}


            className={item?style.btn2:style.btn1}
            style={{ marginLeft: 50, marginBottom: 50 }}
          >
            Email Handler
          </button>
          <br />
          {item ? <DataGridApprover /> : <DataGridEmailApprover />}
        </>
      )}
    </>
  );
};

export default AdminPage;
