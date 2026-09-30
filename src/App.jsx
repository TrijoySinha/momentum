import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import History from "./pages/History";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Progress from "./pages/Progress";
import Today from "./pages/Today";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/today" element={<Today />} />
        <Route path="/history" element={<History />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
