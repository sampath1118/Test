import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <Container>
          <Row>
            <h2 className="font-weight-bold text-left">1000 POOL</h2>
          </Row>
          {/* <Button varaint="primary" className="creatButn">
            CREATE
          </Button> */}

          <Container className="boxclr my-4">
            <Row>
              <div className="wholebox col-md-4">
                <div className="form-group text-left1 mb-3">
                  <label htmlFor="formGroupExampleInput" className="text-left1">
                    Pool Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Enter Pool Name"
                  />
                </div>

                <div className="form-group text-left1  mb-3">
                  <label htmlFor="formGroupExampleInput" className="text-left1">
                    Available Slots
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Slot"
                    id="formGroupExampleInput"
                  />
                </div>

                <div className="form-group text-left1 mb-3">
                  <label htmlFor="formGroupExampleInput" className="text-left1">
                    Entry Fee
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Entry Fee"
                    id="formGroupExampleInput"
                  />
                </div>
                <div className="d-flex justify-content-start align-items-start">
                  <Button varaint="primary" className="creatButn">
                     SUBMIT
                  </Button>
                </div>
              </div>
            </Row>
          </Container>
        </Container>
      </div>
    </>
  );
};

export default Home;
