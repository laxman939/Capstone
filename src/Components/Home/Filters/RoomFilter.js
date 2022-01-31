import * as React from "react";

import FormLabel from "@mui/material/FormLabel";

export default function RoomFilter() {
  return (
    <>
      <FormLabel id="demo-row-radio-buttons-group-label">Room Type</FormLabel>
      <div className="form-box">
        <label htmlFor="single">
          <input type="radio" name="room" id="single" />
          <div className="circle"></div>
          <span className="filter-type-name">Single Share</span>
        </label>
        <label htmlFor="two">
          <input type="radio" name="room" id="two" />
          <div className="circle"></div>
          <span className="filter-type-name">Two Share</span>
        </label>
        <label htmlFor="three">
          <input type="radio" name="room" id="three" />
          <div className="circle"></div>
          <span className="filter-type-name">Three Share</span>
        </label>
        <label htmlFor="four">
          <input type="radio" name="room" id="four" />
          <div className="circle"></div>
          <span className="filter-type-name">Four Share</span>
        </label>
        <label htmlFor="five">
          <input type="radio" name="room" id="five" />
          <div className="circle"></div>
          <span className="filter-type-name">Five Share</span>
        </label>
        <label htmlFor="six">
          <input type="radio" name="room" id="six" />
          <div className="circle"></div>
          <span className="filter-type-name">Six Share</span>
        </label>
      </div>
    </>
  );
}
