import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import Home from "./Home";
import ProtectedRoute from "./ProtectedRoute";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/log-in" />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/log-in" element={<LoginForm />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
