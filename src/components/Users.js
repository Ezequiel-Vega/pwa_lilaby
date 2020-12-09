import React, { useState } from "react";

import "./css/users.css";

export default function Users() {
  // Hooks
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        res.json().then((res) => setUsers(res));
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      });
  };

  return (
    <div>
      <h1 className="title">Get Users</h1>
      <div className="container">
        <button className="btn btn-danger btn-block" onClick={getUsers}>
          Obtener Usuarios
        </button>{" "}
      </div>
      {error === false ? (
        <div className="container">
          <h2 className="text-center display-4">Usuarios</h2>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {users.map((e) => (
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.username}</td>
                  <td>{e.email}</td>
                  <td>{e.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <br />
          <div className="alert alert-danger" role="alert">
            No puedes pedir los usuarios
          </div>
        </div>
      )}
    </div>
  );
}
