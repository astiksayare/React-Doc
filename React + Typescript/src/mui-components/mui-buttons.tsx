
import { Stack, Button, Typography, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material";

import { useState } from "react";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import SendIcon from '@mui/icons-material/Send';


const MuiButtons = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [formates, setFormates] = useState<string | null>(null);
    const [domain, setDomain] = useState<string | null>(null);
    const [disable, setDisable] = useState<boolean>(false);
    
    const handleFormateChange = () => {
        setFormates(formates);
    }

    const handleDomainChange = () => {
        setDomain(domain);
    }

    const handleDisableChange = () => {
        setDisable(disable => !disable);
    }
    return (
        <>
            <Stack direction={"column"} spacing={3} padding={3}>
                <Stack direction={"row"} spacing={2}>
                    <Button variant="text">Text</Button>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outlined</Button>
                </Stack>

                <Stack direction={"row"} spacing={2}>
                    <Button variant="text" color="error">Text</Button>
                    <Button variant="contained" color="success">Contained</Button>
                    <Button variant="outlined" color="secondary">Outlined</Button>
                </Stack>

                <Stack direction={"row"} spacing={2}>

                    {/* This button will disable the on click animation using two attributes namely disableElevation and disableRipple */}
                    <Button variant="contained" color="primary" disableElevation disableRipple>Disable Animation</Button>

                </Stack>

                <Stack direction={"row"} spacing={2}>
                    <Button variant="contained" color="success">Submit</Button>
                    <Button variant="contained" color="error">Delete</Button>
                    <Button variant="contained" color="primary">Send</Button>
                </Stack>

                {/* Icons button using mui */}
                <Stack direction={"row"} spacing={2}>
                    <Button variant="contained" color="primary" startIcon={<SendIcon />}>Send</Button>
                    <Button variant="contained" color="secondary" endIcon={<SendIcon />} href="https://google.com" loading={isLoading} onClick={() => setIsLoading(!isLoading)}>Google</Button>
                </Stack>

                {/* Loading button */}
                <Typography variant="h6" textAlign={'start'} color="secondary"> Loading Animation Type Buttons</Typography>
                <Stack direction={'row'} spacing={2}>
                    <Button variant="contained" color="primary" loading={isLoading} onClick={() => setIsLoading(!isLoading)} loadingPosition="start">Loading start</Button>
                    <Button variant="contained" color="primary" loading={isLoading} onClick={() => setIsLoading(!isLoading)} loadingPosition="end">Loading end</Button>
                    <Button variant="contained" color="primary" loading={isLoading} onClick={() => setIsLoading((prev) => !prev)} loadingPosition="center">Loading center</Button>
                </Stack>

                {/* Button Size */}
                <Stack direction={'row'} spacing={2}>
                    <Button variant="contained" color="secondary" size="small">Small</Button>
                    <Button variant="contained" color="secondary" size="medium">Medium</Button>
                    <Button variant="contained" color="secondary" size="large">large</Button>
                </Stack>

                {/* Buttons Group */}
                <Stack direction={'row'} spacing={2}>
                    <ButtonGroup variant="contained" color="primary" aria-label="button-group" orientation="vertical" size="small">
                      <Button onClick={() => alert("Add")}>Add</Button>
                      <Button onClick={() => alert("Delete")}>Delete</Button>
                    </ButtonGroup>
                </Stack>

                {/* Toggle button for multiple selection*/}
                <Stack direction={'row'} spacing={2}>
                    <ToggleButtonGroup color="secondary" size="medium" value={formates} onChange={handleFormateChange} aria-label="text formatting">
                        <ToggleButton
                        value={'bold'}
                        aria-label="bold"
                        >
                            <FormatBoldIcon />
                        </ToggleButton> 
                        
                        <ToggleButton
                        value={'italic'}
                        aria-label="italic"
                        >
                            <FormatItalicIcon />
                        </ToggleButton>
                        
                         <ToggleButton
                        value={'underline'}
                        aria-label="underline"
                        >
                            <FormatUnderlinedIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Stack>

                {/* Toggle buttons for specific selection */}
                <Stack direction={'row'} spacing={2}>
                    <ToggleButtonGroup color="primary" orientation="vertical" size="large" aria-label="domain-selector" value={domain} onChange={handleDomainChange} exclusive>
                        <ToggleButton value={'frontend'} aria-label="frontend" disabled={disable}>Frontend</ToggleButton>
                        <ToggleButton value={'backend'} aria-label="backend" disabled={disable}>Backend</ToggleButton>
                        <ToggleButton value={'full-stack'} aria-label="full-stack" onClick={handleDisableChange}>Full-Stack</ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
            </Stack>
        </>
    )
}

export default MuiButtons;