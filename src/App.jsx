import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Home from "./Home";
import SumatePage from "./Sumate"; 
import FiscalizaPage from "./Fiscaliza";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sumate" element={<SumatePage />} />
      <Route path="/fiscaliza" element={<FiscalizaPage />} />
    </Routes>
  );
}

export default App;
