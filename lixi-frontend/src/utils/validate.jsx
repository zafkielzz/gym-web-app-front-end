import { useState } from "react";

export default function Validate(fullInfo) {
  const errors = {};

  if (!fullInfo.username.trim()) {
    errors.username = "Vui lòng điền tên đăng nhập ";
  } else if (fullInfo.username.trim().length < 4) {
    errors.username = "Tên đăng nhập phải có ít nhất 4 kí tự";
  }
  if (!fullInfo.password.trim()) {
    errors.password = "Vui lòng điền  mật khẩu ";
  } else if (fullInfo.password.trim().length < 6) {
    errors.password = "Mật khẩu phải có ít nhất 6 kí tự";
  }
  if (!fullInfo.lastName.trim()) {
    errors.lastName = "Vui lòng điền họ của bạn ";
  }
  if (!fullInfo.firstName.trim()) {
    errors.firstName = "Vui lòng điền tên của bạn ";
  }
  const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

  if (!fullInfo.dob.trim()) {
    errors.dob = "Vui lòng điền ngày sinh ";
  } else if (!dateRegex.test(fullInfo.dob)) {
    errors.dob = "Vui lòng nhập ngày sinh hợp lệ";
  } else {
    const dob = new Date(fullInfo.dob);
    const today = new Date();

    if (dob > today) {
      errors.dob = "Ngày sinh không thể sau  hôm nay";
    }
  }
  return errors;
}
