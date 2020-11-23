import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

export default function App() {
  const [start, setStart] = useState(new Date());
  const apiurl = `localhost:4000`;
  useEffect(() => {
    async function getData(){
      const res=await axios.get(apiurl);
      console.log(res);
    }
    getData();
  }, []);
  return (
    <div className="App">
      <div className="row">

      </div>
      <button>submit</button>
    </div>
  );
}
