import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./components/pages/home/Home";

export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </ChakraProvider>
  );
}
