import React from "react";
import { useQuery } from "@apollo/client";

//componenents
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import { GET_VIEWER } from '../../services/queries';

const UserLoginStatus = () => {
  //hooks
  const [viewerName, setViewerName] = React.useState<string>('');
  const [viewerPicURL, setviewerPicURL] = React.useState<string>('');
  const [anchorEl, setAnchorEl] = React.useState<boolean>(false);
  const {
    data: viewerData,
    loading: loadingViewer,
    error: viewerError,
    refetch: refetchViewer,
  } = useQuery(GET_VIEWER);

  //functions
  const handleMenu = (event: any) => {
    setAnchorEl(!anchorEl);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };

  React.useEffect(() => {
    console.log(viewerData)
    if (viewerData) {
      setViewerName(viewerData?.viewer?.login)
      setviewerPicURL(viewerData?.viewer?.avatarUrl)
    }
  }, [viewerData])

  return (
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
        }}
      >
        {viewerName}
      </Typography>
      <div>
        <KeyboardArrowDownIcon onClick={handleMenu} sx={{ color: "black" }} />
      </div>
    </Toolbar>
  );
};

export default UserLoginStatus;
