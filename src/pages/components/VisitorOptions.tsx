import React from "react";
import { useQuery } from "@apollo/client";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Logout from "@mui/icons-material/Logout";
import { GET_VIEWER } from "../../services/queries";

export interface Props {
  onLogOut: () => void;
}

const VisitorOptions: React.FC<Props> = ({ onLogOut }) => {
  const { data: viewerData } = useQuery(GET_VIEWER);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuClose = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          margin: "10px",
          marginRight: 15,
        }}
        data-testid="viewerBtn"
      >
        <Avatar
          data-testid="avatarBtn"
          alt="pimg"
          src={viewerData?.viewer?.avatarUrl}
        />
        <Typography
          data-testid="viewerNamebtn"
          sx={{ minWidth: 100, color: "black", marginLeft: "-12px" }}
        >
          {viewerData?.viewer?.login}
        </Typography>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2, marginLeft: "-22px" }}
            data-testid="optionToggleBtn"
          >
            <KeyboardArrowDownIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Logout fontSize="small" style={{ color: "#FF1733" }} />
          </ListItemIcon>
          <span style={{ color: "#FF1733" }}>Logout</span>
        </MenuItem>
      </Menu>
    </>
  );
};

export default VisitorOptions;
