
import { InputAdornment, Stack, TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";

const countries = [
  {
    countryName: "India",
    label: 'IND'
  },
  {
    countryName: 'Canada',
    label: 'CA',
  },
  {
    countryName: 'Australia',
    label: 'AUS',
  },
  {
    countryName: 'England',
    label: 'ENG',
  },
];

const MuiTextField = () => {

    const [value, setValue] = useState<string>();
    const [country, setCountry] = useState<string>('');

    console.log(country, 'country name')

    const handleCountry = (e : React.ChangeEvent<HTMLInputElement>) => {
      setCountry(e.target.value);
    }

    return (
        <>
        <Stack direction={'column'} spacing={3} margin={5}>
           <Stack direction={'row'} spacing={2}>
           <TextField
              label="Outlined"
              color="secondary"
              variant="outlined"
              size="small"
            />
             <TextField
              label="Filled"
              color="secondary"
              variant="filled"
              size="medium"
            />

            <TextField
              label="Standard"
              color="primary"
              variant="standard"
              size="small"
            />
           </Stack>

            {/* Forms props  */}
           <Stack direction={'row'} spacing={2}>
            <TextField
              label="Required"
              helperText="This field is required"
              required
            />

            <TextField 
            label="Disable"
            disabled
            />

            <TextField
            label="Read Only"
            defaultValue={'Read Only'}
            variant="standard"
            // InputProps={{readOnly: true}} deprecated in v7
            slotProps={
                {
                    input: { readOnly: true}
                }
            }
            />
           </Stack>

           {/* Validation */}
           <Stack direction={'row'} spacing={2}>

            <TextField
            label="Error"
            error
            />

            <TextField 
            label="Error with Helper-Text"
            helperText="error occurs"
            error
            />

            <TextField
            label="Validation"
            placeholder="Enter some value"
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
            error={!value}
            helperText={!value? "Required" : "Do not share your details"}
            required
            />
           </Stack>

           {/* Adornment  */}
           <Stack direction={'row'} spacing={2}>
            <TextField
              label="Amount"
            //   InputProps={{
            //     startAdornment: <InputAdornment position="start">$</InputAdornment>
            //   }}

            slotProps={{
                input: {
                    startAdornment: <InputAdornment position="start">$</InputAdornment>
                }
            }}
              
            />

            <TextField
              label="Weight"
              slotProps={{
                input: {
                    endAdornment: <InputAdornment position="end">kg</InputAdornment>
                }
              }}
              
            />
           </Stack>

           {/* Select using text-field */}
           <Stack direction={'row'} spacing={2} width={300}>
            <TextField
            select
            label="Select your country"
            fullWidth
            value={country}
            onChange={handleCountry}
            >
              {
                countries.map(ele => (
                  <MenuItem key={ele.label} value={ele.label}>{ele.countryName}</MenuItem>
                ))
              }
            </TextField>
           </Stack>
        </Stack>
        </>
    )
}

export default MuiTextField;