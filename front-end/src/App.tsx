import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./components/pages/home/Home";
import { Profile } from "./components/pages/profile/Profile";
import { Register } from "./components/pages/register/Register";

export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    </ChakraProvider>
  );
}
