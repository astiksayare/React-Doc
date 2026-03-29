import * as Mui from "@mui/material";
import { useState } from "react";

const MuiRadioButton = () => {
  const [gender, setGender] = useState<string>('Male');
  const handleRadioGroup = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value as string);
  }

  return (
    <Mui.Box margin={4}>
      <Mui.FormControl>
        <Mui.FormLabel id="gender-form">Gender</Mui.FormLabel>
        <Mui.RadioGroup 
        name="gender-form" 
        aria-label="gender-form" 
        defaultValue={'Male'}
        value={gender}
        onChange={handleRadioGroup}
        >
          <Mui.FormControlLabel
            control={<Mui.Radio />}
            label="Male"
            value={"Male"}
          />
          <Mui.FormControlLabel
            control={<Mui.Radio />}
            label="Female"
            value={"Female"}
          />
          <Mui.FormControlLabel
            control={<Mui.Radio />}
            label="Others"
            value={"Others"}
          />
        </Mui.RadioGroup>
      </Mui.FormControl>
    </Mui.Box>
  );
};

export default MuiRadioButton;
