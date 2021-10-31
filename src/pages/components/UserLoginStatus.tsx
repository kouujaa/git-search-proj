import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Avatar from "@mui/material/Avatar";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";

const actions = [{ name: "Logout" }];
<Box sx={{ height: 320, transform: "translateY(0px)", flexGrow: 1 }}>
  <Avatar alt="Remy Sharp" src="/pimg.jpeg" sx={{ width: 56, height: 56 }} />
  <SpeedDial
    ariaLabel="log out menu"
    sx={{ position: "absolute", top: "0vh", left: "40vw" }}
    direction="down"
    icon={<KeyboardArrowDownIcon />}
  >
    {actions.map((action) => (
      <SpeedDialAction key={action.name} tooltipTitle={action.name} />
    ))}
  </SpeedDial>
</Box>;
export default function UserLoginStatus() {
  const [anchorEl, setAnchorEl] = React.useState<boolean>(false);

  const handleMenu = (event: any) => {
    setAnchorEl(!anchorEl);
    console.log(event)
  };
  const handleClose = () => {
    setAnchorEl(false);
  };
  return (
    <Toolbar style={{float: 'right'}}>
      <Avatar
        alt="pimg"
        src="/pimg.jpeg"
      />
      <Typography sx={{fontWeight: 400, fontSize: '16px', lineHeight: '18.75'}}>kelvin</Typography>
      <div>
      <KeyboardArrowDownIcon onClick={handleMenu}/>
      {anchorEl ? <div style={{minHeight: '10px',minWidth:'30px',backgroundColor: 'green'}}>dey</div> : null}
      </div>

    </Toolbar>
  );
}
