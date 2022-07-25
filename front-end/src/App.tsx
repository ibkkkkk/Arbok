import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./components/pages/home/Home";
import { Profile } from "./components/pages/profile/Profile";

export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    </ChakraProvider>
  );
}
