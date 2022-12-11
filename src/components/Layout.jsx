
import Navbar from "./Navbar";
import {Outlet} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Layout = () => {
  return (
      <Container>
        <Row>
          <Navbar />
          <Outlet />
        </Row>
      </Container>
  )
}

export default Layout