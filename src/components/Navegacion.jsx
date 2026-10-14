import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/icon.png";

function Navegacion({ totalInscripciones }) {
  return (
    <Navbar expand="md" bg="light" data-bs-theme="light" className="border-bottom">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center gap-2">
          <img src={logo} alt="" width="32" height="32" />
          VCarMeet
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="menu-principal" />

        <Navbar.Collapse id="menu-principal">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              Inicio
            </Nav.Link>

            <Nav.Link as={NavLink} to="/actividades">
              Actividades
            </Nav.Link>

            <Nav.Link as={NavLink} to="/categorias">
              Categorías
            </Nav.Link>

            <Nav.Link as={NavLink} to="/ofertas">
              Ofertas
            </Nav.Link>

            <Nav.Link as={NavLink} to="/inscripciones">
              Mis inscripciones{" "}
              <Badge bg="primary" pill>
                {totalInscripciones}
              </Badge>
            </Nav.Link>

            <Nav.Link as={NavLink} to="/admin/actividades">
              Administración
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacion;
