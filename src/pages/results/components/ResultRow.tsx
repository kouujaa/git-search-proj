import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { TARGET } from "../../../utils/constants";
import { formatTimeAgo } from "../../../utils/time";

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
  return (
    <>
      {type === TARGET.REPOSITORY ? (
        <Card
          sx={{
            minWidth: 680,
            marginBottom: "20px",
            borderRadius: "3px",
            backgroundColor: "#FFFFF",
            minHeight: "98px",
            cursor: "pointer",
          }}
          onClick={() => {
            gotoURL(data?.node?.url);
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 16, fontWeight: 700, color: "#00000" }}
              component="div"
            >
              {data?.node?.name}
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 400,
                color: "#91929E",
                lineHeight: "18.23px",
              }}
              color="text.secondary"
              gutterBottom
            >
              {data?.node?.description}
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 400,
                color: "#91929E",
                lineHeight: "15.62px",
                maxWidth: "445px",
                textOverflow: "ellipsis",
              }}
              color="text.secondary"
            >
              {data?.node?.stargazerCount} Stars |
              {data?.node?.primaryLanguage?.name} |
              {data?.node?.licenseInfo?.name || "none"} | Updated{" "}
              {formatTimeAgo(data?.node?.updatedAt)}
            </Typography>
          </CardContent>
        </Card>
      ) : null}
      {type === TARGET.USERS ? (
        <Card
          sx={{
            minWidth: 580,
            marginBottom: "20px",
            borderRadius: "3px",
            backgroundColor: "#FFFFF",
            minHeight: "70px",
            cursor: "pointer",
          }}
          onClick={() => {
            gotoURL(data?.node?.url);
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 16, fontWeight: 700, color: "#00000" }}
              component="div"
            >
              {data?.node?.name} / {data?.node?.login}
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 400,
                  color: "#91929E",
                  lineHeight: "18.23px",
                }}
                color="text.secondary"
                gutterBottom
              >
                {data?.node?.company}
              </Typography>
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 400,
                color: "#91929E",
                lineHeight: "15.62px",
                maxWidth: "445px",
                textOverflow: "ellipsis",
              }}
              color="text.secondary"
            >
              {data?.node?.bio}
            </Typography>
          </CardContent>
        </Card>
      ) : null}
    </>
  );
};
