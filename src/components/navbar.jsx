import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Alert from "@mui/material/Alert";
import PeopleIcon from "@mui/icons-material/People";
import logo from "../assets/logo.png";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Container,
  Icon,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 350;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [selected, setSelected] = useState("Store");
  const handleSelect = (item) => {
    setSelected(item);
  };

  const handleMenu = (event) => {
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
                onClick={() => handleSelect("Store")}
                sx={{
                  bgcolor: selected === "Store" ? "#232323" : "inherit",
                  padding: "25px",
                  "&:hover": {
                    backgroundColor: "#363636",
                  },
                  borderRadius: "10px",
                }}
              >
                <ListItemIcon>
                  <ShoppingCartIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText>Store</ListItemText>
              </ListItem>
            </Link>
            <ListItem
              button
              onClick={() => handleSelect("Library")}
              sx={{
                bgcolor: selected === "Library" ? "#232323" : "inherit",
                padding: "25px",
                "&:hover": {
                  backgroundColor: "#363636",
                },
                borderRadius: "10px",
              }}
            >
              <ListItemIcon>
                <ArrowForwardIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText>Library</ListItemText>
            </ListItem>
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

          <Box
            sx={{
              width: "100%",
              textAlign: "center",
              display: { xs: "none", lg: "block" },
            }}
          >
            <SearchIcon sx={{ mt: "15px", mr: "10px" }}></SearchIcon>
            <TextField
              sx={{
                backgroundColor: "white",
                borderRadius: "20px",
                height: "50px",
              }}
              placeholder="Search"
            ></TextField>
          </Box>
          <Box sx={{ width: "100%", textAlign: "right" }}>
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
                height: "400px",
                mt: "-10px",
                mb: "-8px",
                padding: "5px",
              }}
            >
              <CardContent sx={{ bgcolor: "#23232" }}>
                <Link to="https://github.com/Zuhu162">
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    color="white"
                    mt={3}
                  >
                    Zuhu162
                  </Typography>
                </Link>
                <Divider sx={{ bgcolor: "gray", mt: "30px" }}></Divider>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Sign Out</MenuItem>
                <Divider sx={{ bgcolor: "gray", mt: "30px" }}></Divider>
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
            display: { xs: "none", lg: "block" },
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
