import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUpForm from "./pages/SignUp";
import LoginForm from "./pages/Login";
import Home from "./pages/Home";
import Exercise from "./pages/Excercise";
import Food from "./pages/Food";
import Routine from "./pages//Routine";
import Setting from "./pages//Setting";
import Profile from "./pages//Profile";
import MainLayout from "./components/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import SimpleLayout from "./components/SimpleLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ĐÂY LÀ PHẦN QUAN TRỌNG */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="exercise" element={<Exercise />} />
          <Route path="food" element={<Food />} />
          <Route path="routine" element={<Routine />} />
        </Route>

        <Route element={<SimpleLayout />}>
          <Route path="setting" element={<Setting />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/log-in" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
