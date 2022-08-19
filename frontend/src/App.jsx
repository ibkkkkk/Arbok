import React, { useContext } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Home } from "./components/pages/home/Home";
import { Profile } from "./components/pages/profile/Profile";
import { Register } from "./components/pages/register/Register";
import { Login } from "./components/pages/login/Login";
import { AuthContext } from "./state/AuthContext";

export default function App() {
  const { user } = useContext(AuthContext);

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
