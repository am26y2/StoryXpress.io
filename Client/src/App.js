import React, { useEffect, useState } from "react";
import "./index.css";
//import axios from "axios";
import Yearpicker from "./Component/Yearpicker";
import SimpleCard from "./Component/SimpleCard";
import { Box } from "@material-ui/core";
export default function App() {
  const [start, setStart] = useState(new Date().getFullYear() - 50);
  const modifydata=[];
  const [match, setMatch] = useState([]);
  const [end, setEnd] = useState(2020);
  const [startOpen, setstartOpen] = React.useState(false);
  const [endOpen, setendOpen] = React.useState(false);
  const handleClose = (id) => {
    if (id === `start`) setstartOpen(false);
    else setendOpen(false);
  };
  useEffect(() => {
    var data;
    const  getData=async ()=> {
      const res = fetch('http://localhost:4000/').then(res=>res.json())
      .then(res=>{
        data=res.recordset;
        // console.log(data);
        //  console.log(res.recordset)
         for (let i = 0; i < data.length; i++) {
          //  console.log(data[i].movieId,data[i].title,data[i].genres);
          modifydata.push({
            movieId:data[i].movieId,
            title:data[i].title,
            genres:data[i].genres
          });
        }
        
      }).then(setMatch(modifydata)).catch(err=>console.log("error occure"));
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
  const handleSubmit=()=>{
    console.log(match);
    // console.log(modifydata);
  }
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
      <button onClick={handleSubmit}>submit</button>
      
      {match.map((el)=>(
        <Box>Hello Gaurav</Box>
      ))}
    </div>
  );
}
