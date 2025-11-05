import React from "react";
import { AppBar, Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import NavBar from "./NavBar";

const colors = { bgPrimary: "#242526" };

function MainLayout() {
  return (
    <>
      <AppBar sx={{ backgroundColor: colors.bgPrimary, boxShadow: "none" }}>
        <TopBar />
        <NavBar />
      </AppBar>
      <Box component="main" sx={{ p: 3 }}>
        <Outlet />
      </Box>
    </>
  );
}

export default MainLayout;
