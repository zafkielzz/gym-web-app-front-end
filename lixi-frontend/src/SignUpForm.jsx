import React, { useState } from "react";
import { Box, TextField, Button, styled } from "@mui/material";
import createUser from "./api/userApi";
import validate from "./utils/validate";

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
export default function SignUpForm() {
  const [fullInfo, setFullInfo] = useState({
    username: "",
    password: "",
    lastName: "",
    firstName: "",
    dob: "",
  });
  console.log(fullInfo);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFullInfo((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = () => {
    const validateErrors = validate(fullInfo);
    setErrors(validateErrors);

    if (Object.keys(validateErrors).length === 0) {
      const formattedDob = fullInfo.dob.split("-").reverse().join("-");
      createUser({ ...fullInfo, dob: formattedDob });
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
      <h2>Đăng ký tài khoản</h2>
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
        {[
          { label: "Tên đăng nhập", name: "username" },
          { label: "Mật khẩu", name: "password" },
          { label: "Họ", name: "lastName" },
          { label: "Tên", name: "firstName" },
        ].map((field) => (
          <Box key={field.name}>
            <CustomTextField
              fullWidth
              label={field.label}
              name={field.name}
              variant="outlined"
              value={fullInfo[field.name]}
              onChange={handleChange}
            />
            <ErrorText>{errors[field.name]}</ErrorText>
          </Box>
        ))}
        <Box key="dob">
          <CustomTextField
            fullWidth
            label="Ngày sinh"
            type="date"
            name="dob"
            variant="outlined"
            value={fullInfo.dob}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
          <ErrorText>{errors.dob}</ErrorText>
        </Box>
        <Button onClick={handleSubmit} variant="contained" color="secondary">
          Xác nhận
        </Button>
      </Box>
    </Box>
  );
}
