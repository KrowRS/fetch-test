import "./App.css";
import Users from "./Test";
import React, { useState, useEffect } from "react";
const collect = require("collect.js");
const getURL = "https://jsonplaceholder.typicode.com/users";
const axios = require("axios").default;

const GetUsers = () => {
  const [users, setUsers] = useState([
    {
      usernum: "",
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      address: "",
      phone: "",
      website: "",
      company: "",
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(getURL);
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <h4>{JSON.stringify(users)}</h4>
    </div>
  );
};

function App() {
  return <GetUsers />;
}

export default App;
