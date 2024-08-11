import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import ChatWindow from "../Pages/ChatWindow";
import HomePage from "../Pages/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/chat" element={<ChatWindow />} />
    </Routes>
  );
};

export default AppRoutes;
