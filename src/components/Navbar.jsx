import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
  return (
      <Nav>
        <Nav.Item>
          <Nav.Link href="/pokedex">Pokedex</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/types">Types</Nav.Link>
        </Nav.Item>
      </Nav>
  );
};

export default Navbar;