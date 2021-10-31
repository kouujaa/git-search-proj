import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


interface Props {
  navComponents?: React.ReactNode
}

const NavBar: React.FC<Props> = ({
  navComponents,
}) => {
  return (
    <AppBar position="static" color="transparent">
    <Toolbar>
    <img
      src="/gitHub-Emblem.png"
      alt="gitHub_logo"
      height={80}
      width={150}
    />
    {navComponents}

    </Toolbar>
  </AppBar>
  )
}

export default NavBar