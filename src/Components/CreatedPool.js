import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class CreatedPool extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <div>
        <Container className="px-4">
          <Row>
            <h2 className="font-weight-bold text-left">CREATED POOL</h2>
          </Row>
          {/* <Button varaint="primary" className="creatButn">
            CREATE
          </Button> */}

          <Container className="boxclr my-4 container">
            <Row>
              <div className="wholebox col-md-4">
                <div className="form-group text-left1 mb-3">
                  <label htmlFor="formGroupExampleInput" className="text-left1">
                    Pool List
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Example 0,1,2,3,4,5,6"
                  />
                </div>

                <div className="d-flex justify-content-start align-items-start">
                  <Button
                    varaint="primary"
                    className="creatButn"
                    onClick={() => {
                      this.setState({ show: !this.state.show });
                    }}
                  >
                    {this.state.show ? "HIDE" : "SHOW"} DETAILS
                  </Button>
                </div>

                {this.state.show ? (
                  <div>
                    <div className="card w-100 my-3 p-4">
                      <h4>
                        Lottery Pool ID: <span>#254587545</span>
                      </h4>
                    </div>
                  </div>
                ) : null}
              </div>
            </Row>
          </Container>
        </Container>
      </div>
    );
  }
}

export default CreatedPool;
