import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>Đây là profile, chứa thông tin cá nhân </h2>
      <Button variant="outlined" onClick={() => navigate("/")}>
        Back to Home
      </Button>
    </>
  );
};
export default Profile;
