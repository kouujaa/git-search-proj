import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { TARGET } from "../../../utils/constants";
import { formatTimeAgo } from "../../../utils/time";
import Tooltip from "@mui/material/Tooltip";
import useStyle from "./styles";

interface Props {
  repositories?: number;
  users?: number;
  data: any;
  type: string;
}

export const ResultRow: React.FC<Props> = ({ data, type }) => {
  const gotoURL = (URI: string) => {
    window.location.href = URI;
  };
  const classes = useStyle();
  return (
    <>
      {type === TARGET.REPOSITORY ? (
        <Tooltip title="Click To Visit Repo Page" placement="top-end">
          <Card
            className={classes.repoCardComponent}
            onClick={() => {
              gotoURL(data?.node?.url);
            }}
          >
            <CardContent>
              <Typography className={classes.textName} component="div">
                {data?.node?.name}
              </Typography>
              <Typography
                className={classes.textTitle}
                color="text.secondary"
                gutterBottom
              >
                {data?.node?.description}
              </Typography>
              <Typography
                className={classes.textFootnote}
                color="text.secondary"
              >
                {data?.node?.stargazerCount} Stars |{" "}
                {data?.node?.primaryLanguage?.name} |{" "}
                {data?.node?.licenseInfo?.name || " No Liscence"} | Updated{" "}
                {formatTimeAgo(data?.node?.updatedAt)}
              </Typography>
            </CardContent>
          </Card>
        </Tooltip>
      ) : null}
      {type === TARGET.USERS ? (
        <Tooltip title="Click To Visit User Profile Page" placement="top-end">
          <Card
            className={classes.userCardComponent}
            onClick={() => {
              gotoURL(data?.node?.url);
            }}
          >
            <CardContent>
              <Typography className={classes.textName} component="div">
                {data?.node?.name} / {data?.node?.login}
                <Typography
                  className={classes.textTitle}
                  color="text.secondary"
                  gutterBottom
                >
                  {data?.node?.company}
                </Typography>
              </Typography>
              <Typography
                className={classes.textFootnote}
                color="text.secondary"
              >
                {data?.node?.bio}
              </Typography>
            </CardContent>
          </Card>
        </Tooltip>
      ) : null}
    </>
  );
};
