import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  TextField,
  Button,
  styled,
  Dialog,
  DialogContent,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { createUser } from "./api/userApi";
import { SignUpValidate as validate } from "./utils/validate";

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
    confirmedPassword: "",
    lastName: "",
    firstName: "",
    dob: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFullInfo((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const navigate = useNavigate();
  const [openSuccess, setOpenSuccess] = useState(false);
  const handleSubmit = () => {
    const validateErrors = validate(fullInfo);
    setErrors(validateErrors);

    if (Object.keys(validateErrors).length === 0) {
      const formattedDob = fullInfo.dob.split("-").reverse().join("-");
      const { confirmedPassword, ...dataToSend } = fullInfo;
      createUser({ ...dataToSend, dob: formattedDob });
      setOpenSuccess(true);
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
          { label: "Tên đăng nhập", name: "username", type: "text" },
          { label: "Mật khẩu", name: "password", type: "password" },
          {
            label: "Xác nhận mật khẩu",
            name: "confirmedPassword",
            type: "password",
          },
          { label: "Họ", name: "lastName", type: "text" },
          { label: "Tên", name: "firstName", type: "text" },
        ].map((field) => (
          <Box key={field.name}>
            <CustomTextField
              fullWidth
              label={field.label}
              name={field.name}
              type={field.type}
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
      <Dialog open={openSuccess}>
        <DialogContent sx={{ textAlign: "center", p: 4 }}>
          <CheckCircleIcon style={{ fontSize: 60, color: "green" }} />

          <Typography variant="h6" sx={{ mt: 2 }}>
            Đăng ký thành công!
          </Typography>
          <Typography variant="body2" sx={{ mb: 3 }}>
            Chúng tôi đang chuyển bạn đến trang đăng nhập...
          </Typography>

          <Button variant="contained" onClick={() => navigate("/log-in")}>
            Đi đến đăng nhập ngay
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
