import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Home/Main";
// import Story from './pages/Story/Story';
import "./App.css";
import Header from "./components/Header/header";
import Total from "./pages/Group/total";

function App() {
  return (
    <div className="web">
      <Header />
      <br />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path='/story' element={<Story />} /> */}
        <Route path="/group" element={<Total />} />
      </Routes>
    </div>
  );
}

export default App;
