import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Axios from "axios";

// const api = Axios.create({
//   baseURL: "https://need-based-stay.herokuapp.com/filter",
// });

export default function SearchLocation() {
  const [info, setInfo] = useState([]);
  // const [timeOutId, setTimeOutId] = useState("");

  //https://need-based-stay.herokuapp.com/filter?q=uppal ---> query

  console.log("info " + info);

  useEffect(() => {
    const fetchInfo = async () => {
      const response = await Axios.get(
        `https://need-based-stay.herokuapp.com/filter`
      );
      setInfo(response.data);
    };

    fetchInfo();
  }, []);

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      {info.map((item) => console.log("Map " + item.gender))}
      <div id="searchLocation">
        <TextField
          id="standard-search"
          label="Search Location"
          type="search"
          variant="standard"
        />
      </div>
    </Box>
  );
}
