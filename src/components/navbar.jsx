import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";
import logo from "../assets/logo.png";
import { Avatar, Button, Card, CardContent, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const drawerWidth = 350;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const location = useLocation();

  const [selected, setSelected] = useState(location.pathname);
  const handleSelect = (item) => {
    setSelected(item);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenu2 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <div>
      <Card>
        <CardContent
          sx={{ bgcolor: "#121212", color: "white", height: "100vh" }}
        >
          <Toolbar>
            <img
              src={logo}
              style={{ width: "50px", marginLeft: "100px" }}
              alt=""
            />
          </Toolbar>
          <Divider />
          <List>
            <Link className="text-link" to="/">
              <ListItem
                button
                onClick={() => handleSelect("/")}
                sx={{
                  bgcolor: selected === "/" ? "#232323" : "inherit",
                  padding: "25px",
                  "&:hover": {
                    backgroundColor: "#363636",
                  },
                  borderRadius: "10px",
                }}
              >
                <ListItemIcon>
                  <LocalOfferIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText>Store</ListItemText>
              </ListItem>
            </Link>
            <Link className="text-link" to="/library">
              <ListItem
                button
                onClick={() => handleSelect("/library")}
                sx={{
                  bgcolor: selected === "/library" ? "#232323" : "inherit",
                  padding: "25px",
                  "&:hover": {
                    backgroundColor: "#363636",
                  },
                  borderRadius: "10px",
                }}
              >
                <ListItemIcon>
                  <GridViewSharpIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText>Library</ListItemText>
              </ListItem>
            </Link>
          </List>
          <List></List>
        </CardContent>
      </Card>
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
          width: { sm: `calc(100%)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "#121212",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xl: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ width: "100%", textAlign: "right" }}>
            <a target="_blank" href="https://github.com/Zuhu162">
              <Button>
                <GitHubIcon sx={{ color: "gray" }} />
              </Button>
            </a>
            <Button>
              <PeopleIcon sx={{ color: "gray" }} />
            </Button>
            <Button onClick={handleMenu}>
              <Avatar sx={{ bgcolor: "#232323" }}>S</Avatar>
            </Button>
          </Box>
          <Menu
            sx={{ mt: "50px" }}
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Card
              sx={{
                bgcolor: "#232323",
                color: "gray",
                width: "400px",

                mt: "-10px",
                mb: "-8px",
                padding: "5px",
              }}
            >
              <CardContent sx={{ bgcolor: "#23232" }}>
                <Typography variant="h5" fontWeight="bold" color="white" mt={3}>
                  Zuhu162
                </Typography>
                <Divider sx={{ bgcolor: "gray", mt: "30px" }}></Divider>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <Divider sx={{ bgcolor: "gray", mt: "30px" }}></Divider>
                <MenuItem onClick={handleClose}>Sign Out</MenuItem>
              </CardContent>
            </Card>
          </Menu>
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
            display: { xs: "block", xl: "none" },
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
            display: { xs: "none", xl: "block" },
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
    </Box>
  );
}
export default ResponsiveDrawer;
