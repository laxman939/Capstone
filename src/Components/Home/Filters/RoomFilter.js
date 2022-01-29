import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RoomFilter() {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Room Type</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value="singleRoom"
          control={<Radio />}
          label="Single Room"
        />
        <FormControlLabel
          value="DoubleRoom"
          control={<Radio />}
          label="Double Room"
        />
        <FormControlLabel
          value="TripleRoom"
          control={<Radio />}
          label="Triple Room"
        />
        <FormControlLabel
          value="FourRoom"
          control={<Radio />}
          label="Four Room"
        />
        <FormControlLabel
          value="FiveRoom"
          control={<Radio />}
          label="Five Room"
        />
        <FormControlLabel
          value="SixRoom"
          control={<Radio />}
          label="Six Room"
        />
      </RadioGroup>
    </FormControl>
  );
}
