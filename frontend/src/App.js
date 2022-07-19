import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// TradingView 컴포넌트 임포트

import "./App.css";
import "./error.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./router/Home";
import Chat from "./router/Chat";
import Chart from "./router/Chart";
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/exchange" element={<Chart />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
