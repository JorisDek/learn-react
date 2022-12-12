import Header from "./Header"
import Footer from "./Footer"

import {Outlet} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Layout = () => {
  return (
    <Container fluid>
      <Header /> 
      <main>
        <Row>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </main>
      <Footer />
    </Container>
  )
}

export default Layout