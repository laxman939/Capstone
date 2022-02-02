import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Axios from "axios";
// import axios from "axios";
// const api = Axios.create({
//   baseURL: "https://need-based-stay.herokuapp.com/locationFilter",
// });

export default function SearchLocation() {
  const [searchPlace, setSearchPlace] = useState();
  // const [timeOutId, setTimeOutId] = useState("");

  useEffect(() => {
    Axios.post("https://need-based-stay.herokuapp.com/filter", {
      propertyLocation: searchPlace,
    })
      .then((res) => console.log("res" + res))
      .catch((err) => console.log(err));
  }, [searchPlace]);

  function handleSearch(e) {
    setSearchPlace({ [e.target.name]: e.target.value });
    console.log(searchPlace);
  }

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <div id="searchLocation">
        <TextField
          id="standard-search"
          label="Search Location"
          type="search"
          variant="standard"
          onChange={handleSearch}
        />
      </div>
    </Box>
  );
}
