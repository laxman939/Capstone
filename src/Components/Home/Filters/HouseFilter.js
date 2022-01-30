import * as React from "react";
import FormLabel from "@mui/material/FormLabel";

export default function HouseFilter() {
  return (
    <>
      <FormLabel id="demo-row-radio-buttons-group-label">House Type</FormLabel>
      <div className="form-box">
        <label>
          <input type="radio" name="HouseType" />
          <div className="circle"></div>
          <span>Independent</span>
        </label>
        <label>
          <input type="radio" name="HouseType" />
          <div className="circle"></div>
          <span>Flat</span>
        </label>
        <label>
          <input type="radio" name="HouseType" />
          <div className="circle"></div>
          <span>1st Floor</span>
        </label>
        <label>
          <input type="radio" name="HouseType" />
          <div className="circle"></div>
          <span>2nd Floor</span>
        </label>
        <label>
          <input type="radio" name="HouseType" />
          <div className="circle"></div>
          <span>3rd Floor</span>
        </label>
      </div>
    </>
  );
}