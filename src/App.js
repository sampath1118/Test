import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Menu1 from "./Components/Menu1";
import Menu2 from "./Components/Menu2";
import Menu3 from "./Components/Menu3";
import Sidebar from "./Components/Sidebar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <div className="row">
        <Router>
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/menu1" element={<Menu1 />} />
              <Route exact path="/menu2" element={<Menu2 />} />
              <Route exact path="/menu3" element={<Menu3 />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
};

export default App;
