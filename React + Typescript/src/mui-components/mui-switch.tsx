
import * as Mui from "@mui/material";
import { useEffect, useState } from "react";

const MuiSwitch = () => {

    const [check, setCheck] = useState<boolean>(false);

    useEffect(() => {
        console.log({check})
    }, [check]);

    const handleSwitchChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheck(e.target.checked);
    }
    
    return (
        <Mui.Box component={'div'} margin={5}>
        <Mui.Typography color="primary" fontWeight={800} textAlign={'center'} fontSize={30}>Switch Component</Mui.Typography>

        <Mui.Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
         <Mui.FormControlLabel  control={<Mui.Switch size="small" checked={check} value={check} onChange={handleSwitchChecked}/>} label="Dark Mode"/>
        
        </Mui.Box>
        </Mui.Box>
    )
}

export default MuiSwitch;