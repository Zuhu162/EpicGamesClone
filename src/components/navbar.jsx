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
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Alert from "@mui/material/Alert";
import logo from "../assets/logo.png";
import { Button, Card, CardContent, Icon } from "@mui/material";

const drawerWidth = 350;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [selected, setSelected] = useState("Store");
  const handleSelect = (item) => {
    setSelected(item);
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
            <ShoppingCartIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Fresheries
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
