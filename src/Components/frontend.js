import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function frontend() {
  return (
    <div>
      <Container>
        <Row>
          <h2 className="font-weight-bold text-left">HISTORY</h2>
        </Row>
        <Button varaint="primary" className="creatButn">
          CREATE
        </Button>

        <Container className="boxclr my-4">
          <Row>
            <div className="wholebox col-md-4">
              <div className="form-group text-left1 mb-3">
                <label htmlFor="formGroupExampleInput" className="text-left1">
                  Enter Entry
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Enter Entry"
                />
              </div>

              <Button
                varaint="primary"
                className="creatButn text-center col-md-4 my-3"
              >
                SUBMIT
              </Button>
            </div>

            <div className="wholebox col-md-4">
              <div className="form-group text-left1 mb-3">
                <label htmlFor="formGroupExampleInput" className="text-left1">
                  Winners Sections
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Enter Winner"
                />
              </div>
              <Button
                varaint="primary"
                className="creatButn text-center col-md-4 my-3"
              >
                SUBMIT
              </Button>
            </div>
            <div className="wholebox col-md-4">
              <div className="form-group text-left1 mb-3">
                <label htmlFor="formGroupExampleInput" className="text-left1">
                  Amount(₹)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Enter Amount(₹)"
                />
              </div>
              <Button
                varaint="primary"
                className="creatButn text-center col-md-4 my-3"
              >
                SUBMIT
              </Button>
            </div>
            <div className="wholebox col-md-4">
              <div className="form-group text-left1 mb-3">
                <label htmlFor="formGroupExampleInput" className="text-left1">
                  Matic
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Enter Matic"
                />
              </div>
              <Button
                varaint="primary"
                className="creatButn text-center col-md-4 my-3"
              >
                SUBMIT
              </Button>
            </div>

            <div className="wholebox col-md-4">
              <div className="form-group text-left1 mb-3">
                <label htmlFor="formGroupExampleInput" className="text-left1">
                  Enter Information
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Enter Info"
                />
              </div>
              <Button
                varaint="primary"
                className="creatButn text-center col-md-4 my-3"
              >
                SUBMIT
              </Button>
            </div>

            <div className="wholebox col-md-4">
              <div className="form-group text-left1 mb-3">
                <label htmlFor="formGroupExampleInput" className="text-left1">
                  Enter Rupees
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Enter Info"
                />
              </div>
              <Button
                varaint="primary"
                className="creatButn text-center col-md-4 my-3"
              >
                SUBMIT
              </Button>
            </div>

            <div className="wholebox col-md-4">
              <div className="form-group text-left1 mb-3">
                <label htmlFor="formGroupExampleInput" className="text-left1">
                  Set Timer
                </label>
                <Row>
                  <Col xs={4} md={4} lg={4}>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="02"
                    />
                  </Col>

                  <Col xs={4} md={4} lg={4}>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="02"
                    />
                  </Col>

                  <Col xs={4} md={4} lg={4}>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="02"
                    />
                  </Col>
                </Row>
              </div>
              <Button
                varaint="primary"
                className="creatButn text-center col-md-4 my-3"
              >
                SUBMIT
              </Button>
            </div>
          </Row>
        </Container>
      </Container>

      <Container className="boxclr">
        <Row>
          <div className="wholebox col-md-4">
            <div className="form-group text-left1 mb-3">
              <label htmlFor="formGroupExampleInput" className="text-left1">
                Enter Title
              </label>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                  Basic textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                />
              </div>
            </div>
            <Button
              varaint="primary"
              className="creatButn text-center col-md-4 my-3"
            >
              UPDATE
            </Button>
          </div>

          <div className="wholebox col-md-4">
            <div className="form-group text-left1 mb-3">
              <label htmlFor="formGroupExampleInput" className="text-left1">
                Enter Paragraph
              </label>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                  Basic textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                />
              </div>
            </div>
            <Button
              varaint="primary"
              className="creatButn text-center col-md-4 my-3"
            >
              UPDATE
            </Button>
          </div>

          <div className="wholebox col-md-4">
            <div className="form-group text-left1 mb-3">
              <label htmlFor="formGroupExampleInput" className="text-left1">
                Enter Paragraph
              </label>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                  Basic textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                />
              </div>
            </div>
            <Button
              varaint="primary"
              className="creatButn text-center col-md-4 my-3"
            >
              UPDATE
            </Button>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default frontend;
