import React from 'react'
import { Typography } from "@mui/material";
import useStyles, {
    CustomButton,
  } from "./styles";


  export interface Props {
   title: string
   height: string
   width: string
  }

const Button: React.FC<Props> = ({
    title,
    height,
    width,
  }) => {
    const classes = useStyles();
    return (
        <CustomButton style={{height, width}}>
        <Typography variant="body1" className={classes.boldFont}>
          {title}
        </Typography>
      </CustomButton>
    )
}

export default Button