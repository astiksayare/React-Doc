

import * as Mui from "@mui/material";
import { useState } from "react";

const skills = ['HTML', 'CSS', 'Javascript', 'Java', 'Typescript', 'React'];


const MuiAutoComplete = () => {

    const [tech, setTech] = useState<string | null>(null);

    const handleAutoComplete = (e: any, newValue: string | null) => {
        e.preventDefault();
        setTech(newValue);
    }
    
    return (
        <Mui.Box margin={5}>
            <Mui.Stack direction={'row'} spacing={3} width={350}>

                <Mui.Autocomplete
                fullWidth
                options={skills}
                renderInput={(params) => <Mui.TextField {...params} placeholder="Select your skills" label="Skills" />}
                value={tech}
                onChange={(e: any, newValue: string | null) => handleAutoComplete(e, newValue)}
                freeSolo
                />
            </Mui.Stack>
        </Mui.Box>
    )
}

export default MuiAutoComplete;