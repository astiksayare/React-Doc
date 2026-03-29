import * as Mui from "@mui/material";
import { useState, useEffect } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const MuiCheckbox = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [check, setCheck] = useState<boolean>(false);

  useEffect(() => {
    console.log({skills}, '---- skills ------')
  }, [skills])

  const handleCheckbox = (e : React.ChangeEvent<HTMLInputElement>) => {
      const index = skills.indexOf(e.target.value);
      if(index === -1){
        setSkills([...skills, e.target.value])
      }else {
        setSkills(skills.filter(ele => ele !== e.target.value))
      }
  }

  return (
    <Mui.Box component={"div"} m={5}>
      <Mui.FormControl>
        <Mui.FormLabel id="skills">Skills</Mui.FormLabel>
        <Mui.FormControlLabel
          label="Frontend"
          control={
            <Mui.Checkbox value={"Frontend"} checked={skills.includes("Frontend")} onChange={handleCheckbox} />
          }
        />

        <Mui.FormControlLabel
          label="Backend"
          control={<Mui.Checkbox value={"Backend"} checked={skills.includes("Backend")} onChange={handleCheckbox} />}
        />

        <Mui.FormControlLabel
          label="FullStack"
          control={
            <Mui.Checkbox value={"Fullstack"} checked={skills.includes("Fullstack")} onChange={handleCheckbox} />
          }
        />
      </Mui.FormControl>

      <Mui.Box component={"div"} m={3}>
        <Mui.FormControlLabel
          control={
            <Mui.Checkbox
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
              checked={check}
              value={check}
              onChange={() => setCheck(!check)}
            />
          }
          label="Bookmark"
        />
      </Mui.Box>
    </Mui.Box>
  );
};

export default MuiCheckbox;
