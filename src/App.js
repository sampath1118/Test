import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateLottary from "./Components/CreateLottary";
import DrawWinner from "./Components/DrawWinner";
import CreatedPool from "./Components/CreatedPool";
import LottaryPools from "./Components/LottaryPools";
import Sidebar from "./Components/Sidebar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Frontend from "./Components/frontend";
import Header from "./Components/header";
import History from "./Components/history";
import Videos from "./Components/videos";
import { Row, Container, Col } from "react-bootstrap";
import "./App.css";
import GetLotteryById from "./Components/getLotteryById";
import GetMemberByID from "./Components/MemberPoolID";
import Owner from "./Components/owner";
const App = () => {
  return (
    <>
      <div className="row">
        <Router>
          <Row className="p-0 m-0">
            <Header />
          </Row>
          <div className="col-md-2 my-3">
            <Sidebar />
          </div>
          <div className="col-md-10 my-3">
            <div className="card">
              <Routes>
                <Route exact path="/" element={<CreateLottary />} />
                <Route exact path="/DrawWinner" element={<DrawWinner />} />
                <Route exact path="/CreatedPool" element={<CreatedPool />} />
                <Route exact path="/LottaryPools" element={<LottaryPools />} />
                <Route exact path="/Frontend" element={<Frontend />} />
                <Route exact path="/History" element={<History />} />
                <Route exact path="/Videos" element={<Videos />} />
                <Route
                  exact
                  path="/GetLottaryById"
                  element={<GetLotteryById />}
                />
                <Route
                  exact
                  path="/GetMemberByID"
                  element={<GetMemberByID />}
                />
                <Route exact path="/Owner" element={<Owner />} />
              </Routes>
            </div>
          </div>
        </Router>
      </div>
    </>
  );
};

export default App;
