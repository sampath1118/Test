import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import Datatable from './datatables';

function history() {
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
            <div className="wholebox">
             <Datatable/>
            </div>
          </Row>
        </Container>
      </Container>
    </div>
  )
}

export default history
