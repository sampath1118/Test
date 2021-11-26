import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export class getLotteryById extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  render() {
    return (
      <div>
        <div className="row">
          <Container className="px-4">
            <Row>
              <h2 className="font-weight-bold text-left">
                Get Lottary Pool by ID
              </h2>
            </Row>
            {/* <Button varaint="primary" className="creatButn">
          CREATE
        </Button> */}

            <Container className="boxclr my-4 container">
              <Row>
                <div className="wholebox col-md-4">
                  <div className="form-group text-left1 mb-3">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="text-left1"
                    >
                      Pool ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="Pool ID"
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
                </div>
                {this.state.show ? (
                  <div>
                    <div className="card w-100 my-3 w-100 p-4">
                      <Container className="card w-100 my-3 p-3">
                        <Row>
                          <Col xs={12} sm={12} md={3}>
                            <div className="div1">
                              <h6>
                                <span className="leftcls"> Pool Name: </span>
                                <span className="rightcls"> Pool Name1</span>
                              </h6>
                            </div>
                          </Col>
                          <Col xs={12} sm={12} md={3}>
                            <div className="div1">
                              <h6>
                                <span className="leftcls"> Pool ID: </span>
                                <span className="rightcls"> #1254FD45F</span>
                              </h6>
                            </div>
                          </Col>
                          <Col xs={12} sm={12} md={3}>
                            <div className="div1">
                              <h6>
                                <span className="leftcls">
                                  {" "}
                                  Available Slots:{" "}
                                </span>
                                <span className="rightcls"> 25632</span>
                              </h6>
                            </div>
                          </Col>
                          <Col xs={12} sm={12} md={3}>
                            <div className="div1">
                              <h6>
                                <span className="leftcls"> Joining Fee:</span>
                                <span className="rightcls">₹1300</span>
                              </h6>
                            </div>
                          </Col>

                          <Col xs={12} sm={12} md={3}>
                            <div className="div1">
                              <h6>
                                <span className="leftcls"> Addressess: </span>
                                <span className="rightcls">Hyderabad</span>
                              </h6>
                            </div>
                          </Col>

                          <Col xs={12} sm={12} md={3}>
                            <div className="div1">
                              <h6>
                                <span className="leftcls"> Pool Amount: </span>
                                <span className="rightcls">₹2,50,000</span>
                              </h6>
                            </div>
                          </Col>

                          <Col xs={12} sm={12} md={3}>
                            <div className="div1">
                              <h6>
                                <span className="leftcls">
                                  Active Or In-active:
                                </span>
                                <span className="rightcls"> Active</span>
                              </h6>
                            </div>
                          </Col>

                          <Col xs={12} sm={12} md={3}>
                            <div className="div1">
                              <h6>
                                <span className="leftcls"> Exits:</span>
                                <span className="rightcls"> Yes</span>
                              </h6>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </div>
                ) : null}
              </Row>
            </Container>
          </Container>
        </div>
      </div>
    );
  }
}

export default getLotteryById;
