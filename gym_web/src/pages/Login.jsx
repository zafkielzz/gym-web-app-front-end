import React, { useState } from "react";
import { Box, TextField, Button, styled } from "@mui/material";
import { loginValidate as validate } from "../utils/validate";
import { loginUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "orange" },
    "&:hover fieldset": { borderColor: "red" },
    "&.Mui-focused fieldset": { borderColor: "green" },
  },
  "& .MuiInputLabel-root": { color: "orange" },
  "& .MuiInputLabel-root.Mui-focused": { color: "green" },
});

const ErrorText = styled("p")({
  color: "red",
  fontSize: "0.875rem",
  marginTop: "4px",
  marginBottom: 0,
});
export default function LoginForm() {
  const [fullInfo, setFullInfo] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFullInfo((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };
  const handleSubmit = async () => {
    const validateErrors = validate(fullInfo);
    setErrors(validateErrors);

    if (Object.keys(validateErrors).length === 0) {
      try {
        await loginUser(fullInfo);
        navigate("/home");
      } catch (err) {
        console.log("LOGIN ERROR: ", err.response?.data || err);
        alert("Sai tài khoản hoặc mật khẩu!");
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        width: "100vw",
        bgcolor: "#8d7373ff",
        flexDirection: "column",
      }}
    >
      <h2>Đăng nhập</h2>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 2,
          width: 400,
          maxWidth: 600,
        }}
      >
        <Box>
          <CustomTextField
            fullWidth
            label="Tên đăng nhập"
            name="username"
            variant="outlined"
            value={fullInfo.username}
            onChange={handleChange}
          />
          <ErrorText>{errors.username}</ErrorText>
        </Box>
        <Box>
          <CustomTextField
            fullWidth
            label="Mật khẩu"
            name="password"
            type="password"
            variant="outlined"
            value={fullInfo.password}
            onChange={handleChange}
          />
          <ErrorText>{errors.password}</ErrorText>
        </Box>

        <Button onClick={handleSubmit} variant="contained" color="secondary">
          Xác nhận
        </Button>
      </Box>
    </Box>
  );
}
