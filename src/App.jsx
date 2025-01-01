import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, CreateRoom, JoinRoom } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-room" element={<CreateRoom />} />
        <Route path="/join-room" element={<JoinRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
