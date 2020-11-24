import React, { useEffect, useState } from "react";
import "./index.css";
//import axios from "axios";
import Yearpicker from "./Yearpicker";

import "./styles.css";

export default function App() {
  const [start, setStart] = useState(new Date().getFullYear() - 50);
  const [end, setEnd] = useState(2020);
  const [startOpen, setstartOpen] = React.useState(false);
  const [endOpen, setendOpen] = React.useState(false);
  const handleClose = (id) => {
    if (id === `start`) setstartOpen(false);
    else setendOpen(false);
  };
  useEffect(() => {
    async function getData() {
      const res = await fetch('/localhost:4000');
      const data=res.json();
      console.log(res);
    }
    getData();
  }, []);
  const handleOpen = (id) => {
    console.log(id);
    if (id === "start") setstartOpen(true);
    else setendOpen(true);
  };
  const handleChange = (id, value) => {
    console.log(id, value);
    if (id === `start`) setStart(value);
    if (id === `end`) setEnd(value);
  };
  return (
    <div className="App">
      <div className="row">
        <Yearpicker
          tag={`start`}
          id={`start`}
          open={startOpen}
          year={start}
          handleChange={handleChange}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
        <Yearpicker
          tag={`end`}
          id={`end`}
          open={endOpen}
          year={end}
          handleChange={handleChange}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      </div>
      <button>submit</button>
    </div>
  );
}
