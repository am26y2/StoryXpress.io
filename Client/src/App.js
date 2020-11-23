import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import YearPicker from "react-year-picker";

export default function App() {
  const [start, setStart] = useState(2016);
  const apiurl = `localhost:4000`;
  useEffect(() => {
    async function getData() {
      const res = await axios.get(apiurl);
      console.log(res);
    }
    getData();
  }, []);
  const handleChange = (el) => {
    console.log(el);
    setStart(el);
  };
  return (
    <div className="center">
      <div className="row">
        <YearPicker onChange={handleChange} value={start} />
        <YearPicker onChange={handleChange} value={start} />
      </div>
      <div>
        <button>submit</button>
      </div>
    </div>
  );
}
