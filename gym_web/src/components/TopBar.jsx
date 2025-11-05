import React, { useState } from "react";
import {
  Toolbar,
  Box,
  IconButton,
  Avatar,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BrofitLogo from "../assets/BrofitLogo.jpg";

const colors = {
  bgSecondary: "#3A3B3C",
  bgIcon: "#E4E6EB",
  bgPrimary: "#242526",
  textPrimary: "#E4E6EB",
};

function TopBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const navigate = useNavigate();
  const menuId = "primary-account-menu";

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path) => {
    handleMenuClose();
    navigate(path);
  };
  const handleLogout = () => {
    handleMenuClose();
    localStorage.removeItem("token");
    navigate("/log-in");
  };

  return (
    <>
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
        <MenuItem onClick={() => handleNavigate("/profile")}>
          My Profile
        </MenuItem>
        <MenuItem onClick={() => handleNavigate("/setting")}>Setting</MenuItem>
        <MenuItem onClick={handleLogout}>Log out</MenuItem>
      </Menu>
    </>
  );
}

export default TopBar;
