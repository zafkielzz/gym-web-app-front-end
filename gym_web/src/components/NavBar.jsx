import React from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

// Định nghĩa màu sắc ở đây
const colors = {
  textSecondary: "#B0B3B8",
  fbBlue: "#0866FF",
  border: "#393a3b",
};

function NavBar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
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
            color: currentPath === "/" ? colors.fbBlue : colors.textSecondary,
            minWidth: "auto",
            padding: "12px 40px",
          }}
        />
        <Tab
          label="Exercise" // Sửa lỗi typo "Excercise"
          component={Link}
          to="/exercise"
          value="/exercise"
          sx={{
            color:
              currentPath === "/exercise" // Sửa lỗi typo
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
              currentPath === "/food" ? colors.fbBlue : colors.textSecondary,
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
              currentPath === "/routine" ? colors.fbBlue : colors.textSecondary,
            minWidth: "auto",
            padding: "12px 40px",
          }}
        />
      </Tabs>
    </Box>
  );
}

export default NavBar;
