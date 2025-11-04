import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import api from "./api/axiosInstance";
import { useNavigate } from "react-router-dom";
export default function ProtectedRoute({ children }) {
  const [isValid, setIsValid] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("token");
      if (!token) return setIsValid(false);

      try {
        const res = await api.post("/auth/introspect", { token });
        setIsValid(res.data.result.valid === true);
      } catch (err) {
        setIsValid(false);
      }
    };

    checkToken();
  }, []);

  if (isValid === null) return <p>Đang kiểm tra xác thực...</p>;
  else if (!isValid) return <Navigate to="/log-in" />;
  else {
    return children;
  }
}
