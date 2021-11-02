import React from "react";

//componenents
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";

const UserLoginStatus = () => {
  //hooks
  const [anchorEl, setAnchorEl] = React.useState<boolean>(false);

  //functions
  const handleMenu = (event: any) => {
    setAnchorEl(!anchorEl);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };

  return (
    <Toolbar
      style={{
        float: "right",
        maxHeight: 3,
      }}
    >
      <Avatar alt="pimg" src="/pimg.jpeg" />
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "18.75",
          color: "black",
        }}
      >
        USER_NAME
      </Typography>
      <div>
        <KeyboardArrowDownIcon onClick={handleMenu} sx={{ color: "black" }} />
      </div>
    </Toolbar>
  );
};

export default UserLoginStatus;
