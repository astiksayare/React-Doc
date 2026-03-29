import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React, { useState } from "react";
import TemporaryDrawer from "./mui-drawer";
import BasicSpeedDial from "./mui-speed-dial";

const MuiAppBar = () => {
  const [endIcon, setEndIcon] = useState<boolean>(true);
  const [drawer, setDrawer] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setEndIcon(!endIcon);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setEndIcon(!endIcon);
  };

  return (
    <Box component={"div"}>
        <TemporaryDrawer open={drawer} setOpen={setDrawer}/>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <IconButton edge="start" size="large" color="inherit" onClick={() => setDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component={"span"} sx={{ flexGrow: 1 }}>
            Logo
          </Typography>

          <Stack direction={"row"} spacing={2}>
            <Button color="inherit" variant="text">
              Home
            </Button>
            <Button color="inherit" variant="text">
              About
            </Button>
            <Button
              color="inherit"
              disableRipple
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              endIcon={
                endIcon ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />
              }
            >
              Resource
            </Button>
            <Button color="inherit" variant="text">
              Contact Us
            </Button>
            <Button variant="contained">Login</Button>
          </Stack>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <BasicSpeedDial />
    </Box>
  );
};

export default MuiAppBar;
