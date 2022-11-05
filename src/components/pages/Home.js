import React from "react";
import FormFunc from "../FormFunc";
import AllUsers from "../AllUsers";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { Container, Row, Col, Button } from "react-bootstrap";

function Home() {
  const logout = () => {
    try {
      signOut(auth);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Container>
      <Row>
        <Col>
          <FormFunc />
        </Col>
        <Col>
          <AllUsers />
        </Col>
      </Row>
      <Button onClick={logout} style={{marginTop:"20px"}}>Logout</Button>
    </Container>
  );
}

export default Home;