import React from "react";
import { useQuery } from "@apollo/client";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

//componenents
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import { GET_VIEWER } from "../../services/queries";

const UserLoginStatus = () => {
  //hooks
  const [viewerName, setViewerName] = React.useState<string>("");
  const [viewerPicURL, setviewerPicURL] = React.useState<string>("");
  const [anchorEl, setAnchorEl] = React.useState<boolean>(false);
  const [anchorEl2, setAnchorEl2] = React.useState<any>(null);
  const {
    data: viewerData,
  } = useQuery(GET_VIEWER);
  const isMenuOpen = Boolean(anchorEl2);
  //functions
  const handleMenu = (event: any) => {
    setAnchorEl(!anchorEl);
  };


  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget);
  };

  const menuId = 'menu';

  React.useEffect(() => {
    console.log(viewerData);
    if (viewerData) {
      setViewerName(viewerData?.viewer?.login);
      setviewerPicURL(viewerData?.viewer?.avatarUrl);
    }
  }, [viewerData]);

  const handleMenuClose = () => {
    localStorage.clear()
    window.location.href = '/';
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl2}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={() => { setAnchorEl2(false) }}
    >
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <Toolbar
            style={{
              float: "right",
              maxHeight: 3,
            }}
          >
            <Avatar alt="pimg" src={viewerPicURL} />
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "18.75",
                color: "black",
                marginLeft: '10px'
              }}
            >
              {viewerName}
            </Typography>
            <div>
              <KeyboardArrowDownIcon
                onClick={handleMenu}
                sx={{ color: "black" }}
              />
            </div>
          </Toolbar>
        </IconButton>
        {renderMenu}
      </Box>

    </>
  );
};

export default UserLoginStatus;
