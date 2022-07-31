import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./components/pages/home/Home";
import { Profile } from "./components/pages/profile/Profile";
import { Register } from "./components/pages/register/Register";
import { Login } from "./components/pages/login/Login";

export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </ChakraProvider>
  );
}
