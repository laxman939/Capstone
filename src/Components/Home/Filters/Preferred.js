import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function PreferredFilter() {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">
        Preferred for
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value="Professionals"
          control={<Radio />}
          label="Professionals"
        />
        <FormControlLabel
          value="Students"
          control={<Radio />}
          label="Students"
        />
      </RadioGroup>
    </FormControl>
  );
}
