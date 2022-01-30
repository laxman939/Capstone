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
          <span>Single Room</span>
        </label>
        <label>
          <input type="radio" name="room" />
          <div className="circle"></div>
          <span>Single Share</span>
        </label>
        <label>
          <input type="radio" name="room" />
          <div className="circle"></div>
          <span>Two Share</span>
        </label>
        <label>
          <input type="radio" name="room" />
          <div className="circle"></div>
          <span>Three Share</span>
        </label>
        <label>
          <input type="radio" name="room" />
          <div className="circle"></div>
          <span>Four Share</span>
        </label>
        <label>
          <input type="radio" name="room" />
          <div className="circle"></div>
          <span>Five Share</span>
        </label>
        <label>
          <input type="radio" name="room" />
          <div className="circle"></div>
          <span>Six Share</span>
        </label>
      </div>
    </>
  );
}
