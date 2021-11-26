import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function videos() {
  return (
    <div>
      <Container>
        <Row>
          <h2 className="font-weight-bold text-left">VIDEOS</h2>
        </Row>

        <Row>
          <Col xs={12} sm={12} lg={6} className="card my-3">
            <div className="form-group text-left1 mb-3">
              <label htmlFor="formGroupExampleInput" className="text-left1">
                Section1 Video Text
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Enter Title here"
              />
            </div>

            <div className="form-group text-left1 mb-3 my-3">
              <label htmlFor="formGroupExampleInput" className="text-left1">
                Upload Video
              </label>
              <input
                type="file"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Enter Title here"
              />
            </div>

            <Button varaint="primary" className="creatButn text-center col-md-4 my-3">
              UPDATE
            </Button>
          </Col>

          <Col xs={12} sm={12} lg={6} className="card my-3">
            <div className="form-group text-left1 mb-3">
              <label htmlFor="formGroupExampleInput" className="text-left1">
                Section2 Video Text
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Enter Title here"
              />
            </div>

            <div className="form-group text-left1 mb-3 my-3">
              <label htmlFor="formGroupExampleInput" className="text-left1">
                Upload Video
              </label>
              <input
                type="file"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Enter Title here"
              />
            </div>

            <Button varaint="primary" className="creatButn text-center col-md-4 my-3">
              UPDATE
            </Button>
          </Col>

          <Col xs={12} sm={12} lg={6} className="card my-3">
            <div className="form-group text-left1 mb-3">
              <label htmlFor="formGroupExampleInput" className="text-left1">
                Section3 Video Text
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Enter Title here"
              />
            </div>

            <div className="form-group text-left1 mb-3 my-3">
              <label htmlFor="formGroupExampleInput" className="text-left1">
                Upload Video
              </label>
              <input
                type="file"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Enter Title here"
              />
            </div>

            <Button varaint="primary" className="creatButn text-center col-md-4 my-3">
              UPDATE
            </Button>

          </Col>

          <Col xs={12} sm={12} lg={6} className="card my-3">
            <div className="form-group text-left1 mb-3">
              <label htmlFor="formGroupExampleInput" className="text-left1">
                Section4 Video Text
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Enter Title here"
              />
            </div>

            <div className="form-group text-left1 mb-3 my-3">
              <label htmlFor="formGroupExampleInput" className="text-left1">
                Upload Video
              </label>
              <input
                type="file"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Enter Title here"
              />
            </div>

            <Button varaint="primary" className="creatButn text-center col-md-4 my-3">
              UPDATE
            </Button>


          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default videos;
