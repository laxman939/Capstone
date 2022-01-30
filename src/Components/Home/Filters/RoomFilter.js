import * as React from "react";

import FormLabel from "@mui/material/FormLabel";

export default function RoomFilter() {
  return (
    <>
      <FormLabel id="demo-row-radio-buttons-group-label">Room Type</FormLabel>
      <div className="form-box">
        <label>
          <input type="radio" name="room" />
          <div className="circle"></div>
          <span className="filter-type-name">Single Share</span>
        </label>
        <label>
          <input type="radio" name="room" />
          <div className="circle"></div>
          <span className="filter-type-name">Two Share</span>
        </label>
        <label>
          <input type="radio" name="room" />
          <div className="circle"></div>
          <span className="filter-type-name">Three Share</span>
        </label>
        <label>
          <input type="radio" name="room" />
          <div className="circle"></div>
          <span className="filter-type-name">Four Share</span>
        </label>
        <label>
          <input type="radio" name="room" />
          <div className="circle"></div>
          <span className="filter-type-name">Five Share</span>
        </label>
        <label>
          <input type="radio" name="room" />
          <div className="circle"></div>
          <span className="filter-type-name">Six Share</span>
        </label>
      </div>
    </>
  );
}
