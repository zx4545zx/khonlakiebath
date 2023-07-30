import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox({label="", data=[], value, setValue }) {
  return (
    <Autocomplete
      freeSolo
      autoSelect
      id="combo-box-demo"
      options={data}
      sx={{ width: "100%", mb: "1rem" }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue?.label || event.target.value);
      }}
      renderInput={(params) => (
        <TextField {...params} label={label} />
      )}
    />
  );
}
