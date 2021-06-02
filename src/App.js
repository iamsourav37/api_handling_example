import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";

import axios from "axios";
import Card from "./Card";

function App() {
  const API = "https://randomuser.me/api/";
  const [details, setdetails] = useState({});

  const fetchDetails = async () => {
    const { data } = await axios.get(API);
    const info = data.results[0];
    setdetails(info);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className="App container d-flex justify-content-center  align-items-center">
      <Card info={details} />
    </div>
  );
}

export default App;
