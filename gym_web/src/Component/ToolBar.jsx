import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Tabs,
  Tab,
  IconButton,
  Avatar,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link, useLocation, Outlet } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BrofitLogo from "../BrofitLogo.jpg";

function ToolBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const location = useLocation();
  const currentPath = location.pathname;

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const colors = {
    bgPrimary: "#242526",
    bgSecondary: "#3A3B3C",
    bgIcon: "#E4E6EB",
    textPrimary: "#E4E6EB",
    textSecondary: "#B0B3B8",
    fbBlue: "#0866FF",
    border: "#393a3b",
  };

  const menuId = "primary-account-menu";

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: colors.bgPrimary,
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{ justifyContent: "space-between", paddingX: { xs: 1, sm: 2 } }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                height: 60,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                <img
                  src={BrofitLogo}
                  alt="Brofit Logo"
                  style={{
                    height: 50,
                    width: "auto",
                    marginRight: "16px",
                    display: "block",
                  }}
                />
              </Link>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              sx={{
                backgroundColor: colors.bgSecondary,
                color: colors.bgIcon,
                marginLeft: 1,
              }}
            >
              <Badge badgeContent={2} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              sx={{ marginLeft: 1 }}
              onClick={handleProfileMenuOpen}
              aria-controls={menuId}
              aria-haspopup="true"
            >
              <Avatar
                sx={{ width: 40, height: 40 }}
                alt="User"
                src="/static/images/avatar/1.jpg"
              />
            </IconButton>
          </Box>
        </Toolbar>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            borderTop: `1px solid ${colors.border}`,
          }}
        >
          <Tabs
            value={currentPath}
            indicatorColor="primary"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: colors.fbBlue,
              },
            }}
          >
            <Tab
              label="Home"
              component={Link}
              to="/"
              value="/"
              sx={{
                color:
                  currentPath === "/" ? colors.fbBlue : colors.textSecondary,
                minWidth: "auto",
                padding: "12px 40px",
              }}
            />
            <Tab
              label="Exercise"
              component={Link}
              to="/exercise"
              value="/exercise"
              sx={{
                color:
                  currentPath === "/excercise"
                    ? colors.fbBlue
                    : colors.textSecondary,
                minWidth: "auto",
                padding: "12px 40px",
              }}
            />
            <Tab
              label="Food"
              component={Link}
              to="/food"
              value="/food"
              sx={{
                color:
                  currentPath === "/food"
                    ? colors.fbBlue
                    : colors.textSecondary,
                minWidth: "auto",
                padding: "12px 40px",
              }}
            />
            <Tab
              label="Routine"
              component={Link}
              to="/routine"
              value="/routine"
              sx={{
                color:
                  currentPath === "/routine"
                    ? colors.fbBlue
                    : colors.textSecondary,
                minWidth: "auto",
                padding: "12px 40px",
              }}
            />
          </Tabs>
        </Box>
      </AppBar>

      <Box component="main" sx={{ p: 3 }}>
        <Outlet />
      </Box>

      <Menu
        id={menuId}
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: colors.bgPrimary,
            color: colors.textPrimary,
            marginTop: "8px",
          },
        }}
      >
        <MenuItem
          onClick={() => {
            handleMenuClose();
            console.log("move to my profile");
          }}
        >
          My Profile
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleMenuClose();
            console.log("move to setting");
          }}
        >
          Setting
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleMenuClose();
            console.log("Log out");
          }}
        >
          Log out
        </MenuItem>
      </Menu>
    </>
  );
}

export default ToolBar;
