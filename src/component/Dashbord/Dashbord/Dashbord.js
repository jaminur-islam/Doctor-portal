import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import DashbordHome from "../DashbordHome/DashbordHome";
import { Switch, Route, useParams, useRouteMatch } from "react-router-dom";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddDoctor from "../AddDoctor/AddDoctor";
import useAuth from "../../Hooks/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import Payment from "../Payment/Payment";

const drawerWidth = 200;

function Dashbord(props) {
  const { admin } = useAuth();

  let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ul style={{ listStyle: "none" }}>
          <li>
            <Link
              style={{
                marginBottom: "10px",
                textDecoration: "none",
                fontSize: "18px",
                display: "inline-block",
              }}
              to="/appointment"
            >
              Appointment
            </Link>
          </li>
          <li>
            <Link to={`${url}`}>Dashbord</Link>
          </li>
          {admin && (
            <Box>
              <li>
                <Link
                  style={{ margin: "10px 0", display: "inline-block" }}
                  to={`${url}/makeAdmin`}
                >
                  Make Admin
                </Link>
              </li>
              <li>
                <Link to={`${url}/addDoctor`}>Add Doctor </Link>
              </li>
            </Box>
          )}
        </ul>
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashbord
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={`${path}`}>
            <DashbordHome> </DashbordHome>
          </Route>

          <Route  path={`${path}/payment/:id`}>
            <Payment></Payment>
          </Route>

          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>

          <AdminRoute path={`${path}/addDoctor`}>
            <AddDoctor> </AddDoctor>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashbord.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashbord;
