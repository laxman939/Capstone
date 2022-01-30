import * as React from "react";
import FormLabel from "@mui/material/FormLabel";

export default function PreferredFilter() {
  return (
    <>
      <FormLabel id="demo-row-radio-buttons-group-label">
        Preferred for
      </FormLabel>
      <div className="form-box">
        <label>
          <input type="radio" name="preferred" />
          <div className="circle"></div>
          <span>Students 👨‍🎓</span>
        </label>
        <label>
          <input type="radio" name="preferred" />
          <div className="circle"></div>
          <span>Professionals 👨‍💻</span>
        </label>
      </div>
    </>
  );
}
