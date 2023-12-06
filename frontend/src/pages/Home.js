import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState([]);
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    if (response.status === 200) {
      setData(response.data);
    }
  };
  const extractData = data[0];
  useEffect(() => {
    getUsers();
  }, []);
  console.log(extractData);
  return (
    <div style={{ marginTop: "150px" }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Contact</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item[0].name}</td>
                  <td>{item[0].email}</td>
                  <td>{item[0].contact}</td>
                  <td>
                    <Link to={`/update/${item.id}`}>
                      <button className="btn btn-edit">Edit</button>
                    </Link>
                    <button className="btn btn-delete">Delete</button>
                    <Link to={`/view/${item.id}`}>
                      <button className="btn btn-view">View</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default Home;
