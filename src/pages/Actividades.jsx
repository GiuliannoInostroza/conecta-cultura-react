import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import TarjetaActividad from "../components/TarjetaActividad";
import {
  actividades as actividadesIniciales,
  categorias,
} from "../data/actividades";

function Actividades({ actividades = actividadesIniciales, onInscribir }) {
  const [categoria, setCategoria] = useState("Todas");

  const visibles = categoria === "Todas"
    ? actividades
    : actividades.filter((actividad) => actividad.categoria === categoria);

  return (
    <main className="container py-4">
      <h1 className="text-black">Actividades</h1>

      <Form.Group className="mb-2 filtro-categoria" controlId="filtro-categoria">
        <Form.Label>Filtrar por categoría</Form.Label>
        <Form.Select
          value={categoria}
          onChange={(evento) => setCategoria(evento.target.value)}
        >
          <option>Todas</option>
          {categorias.map((nombre) => (
            <option key={nombre}>{nombre}</option>
          ))}
        </Form.Select>
      </Form.Group>

      <Container className="py-4 px-0">
        {visibles.length === 0 ? (
          <p>No hay actividades en esta categoría.</p>
        ) : (
          <Row className="g-4">
            {visibles.map((actividad) => (
              <Col xs={12} md={6} lg={4} key={actividad.id}>
                <TarjetaActividad
                  actividad={actividad}
                  onInscribir={onInscribir}
                >
                  <Link to={`/actividades/${actividad.id}`}>Ver detalle</Link>
                </TarjetaActividad>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </main>
  );
}

export default Actividades;
