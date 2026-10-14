import { useState } from "react";
import { Alert, Button, Table } from "react-bootstrap";
import FormularioActividad from "./FormularioActividad";
import { formatearPrecio } from "../../utils/precio";

function AdminActividades({ actividades, onAgregar, onEliminar }) {
  const [mensaje, setMensaje] = useState("");

  function guardar(actividad) {
    onAgregar(actividad);
    setMensaje(`Actividad "${actividad.nombre}" agregada a la cartelera.`);
  }

  function eliminar(actividad) {
    onEliminar(actividad.id);
    setMensaje(`Actividad "${actividad.nombre}" eliminada.`);
  }

  return (
    <main className="container py-4">
      <h1 className="text-black">Administración de actividades</h1>

      {mensaje && (
        <Alert variant="success" onClose={() => setMensaje("")} dismissible>
          {mensaje}
        </Alert>
      )}

      <div className="row g-4">
        <section className="col-12 col-lg-5" aria-labelledby="titulo-nueva">
          <h2 id="titulo-nueva" className="h4">Nueva actividad</h2>
          <FormularioActividad onGuardar={guardar} />
        </section>

        <section className="col-12 col-lg-7" aria-labelledby="titulo-listado">
          <h2 id="titulo-listado" className="h4">
            Actividades registradas ({actividades.length})
          </h2>

          {actividades.length === 0 ? (
            <p>No hay actividades registradas.</p>
          ) : (
            <div className="table-responsive">
              <Table striped hover className="align-middle">
                <thead>
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Categoría</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cupos</th>
                    <th scope="col">Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {actividades.map((actividad) => (
                    <tr key={actividad.id}>
                      <td>{actividad.nombre}</td>
                      <td>{actividad.categoria}</td>
                      <td>{formatearPrecio(actividad.precio)}</td>
                      <td>{actividad.cupos}</td>
                      <td>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => eliminar(actividad)}
                          aria-label={`Eliminar ${actividad.nombre}`}
                        >
                          Eliminar
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default AdminActividades;
