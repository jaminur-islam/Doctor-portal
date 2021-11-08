import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const NaviBar = () => {
  const { user, logOut } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Link to="/appointment"> Appointment </Link>
          {user.email ? (
            <Box>
              <span> {user.displayName} </span>
              <a
                onClick={logOut}
                style={{ textDecoration: "none", marginLeft: "10px" }}
                color="inherit"
              >
                logOut
              </a>
            </Box>
          ) : (
            <Link
              style={{ textDecoration: "none", marginLeft: "10px" }}
              color="inherit"
              to="/login"
            >
              Login
            </Link>
          )}

          {user.email && (
            <Link
              style={{ textDecoration: "none", marginLeft: "10px" }}
              color="inherit"
              to="/dashbord"
            >
              Dashbord
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NaviBar;
