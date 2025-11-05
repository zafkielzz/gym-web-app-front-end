import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Setting = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>Đây là setting, gồm chỉnh ngôn ngữ, dark/light mode,...</h2>
      <Button variant="outlined" onClick={() => navigate("/")}>
        Back to Home
      </Button>
    </>
  );
};
export default Setting;
