import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import Home from "./pages/Home";
import Exercise from "./pages/Excercise";
import Food from "./pages/Food";
import Routine from "./pages//Routine";

import ProtectedRoute from "./ProtectedRoute";
import ToolBar from "./Component/ToolBar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ĐÂY LÀ PHẦN QUAN TRỌNG */}
        <Route path="/" element={<ToolBar />}>
          <Route index element={<Home />} />
          <Route path="exercise" element={<Exercise />} />
          <Route path="food" element={<Food />} />
          <Route path="routine" element={<Routine />} />
        </Route>

        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/log-in" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
