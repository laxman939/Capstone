// check boxes
import * as React from "react";
import FormLabel from "@mui/material/FormLabel";

export default function GenderFilter() {
  return (
    <>
      <FormLabel id="demo-row-radio-buttons-group-label">PG for</FormLabel>
      <div className="form-box">
        <label>
          <input type="radio" name="gender" />
          <div className="circle"></div>
          <span>Male 🤵</span>
        </label>
        <label>
          <input type="radio" name="gender" />
          <div className="circle"></div>
          <span>Female 🙍‍♀️</span>
        </label>
      </div>
    </>
  );
}
