import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

const NavBar = () => {
  return (
    <Navbar>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav>
        <Nav.Item>
          <Nav.Link href="/pokedex">Pokedex</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/types">Types</Nav.Link>
        </Nav.Item>
      </Nav>
      
    </Navbar>
  );
};

export default NavBar;