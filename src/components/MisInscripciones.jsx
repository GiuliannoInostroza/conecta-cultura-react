import { Link } from "react-router-dom";
import { formatearPrecio } from "../utils/precio";

function MisInscripciones({ inscripciones, onEliminar }) {
  return (
    <section>
      <h1 className="text-dark">Mis inscripciones</h1>

      {inscripciones.length === 0 ? (
        <p>
          No tienes actividades inscritas.{" "}
          <Link to="/actividades">Ver actividades</Link>
        </p>
      ) : (
        <div className="row g-3">
          {inscripciones.map((actividad) => (
            <div className="col-12 col-md-6" key={actividad.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h2 className="h5">{actividad.nombre}</h2>
                  <p className="text-body-secondary mb-1">{actividad.categoria}</p>
                  <p>Precio: {formatearPrecio(actividad.precio)}</p>

                  <button
                    className="btn btn-danger"
                    onClick={() => onEliminar(actividad.id)}
                  >
                    Eliminar inscripción
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default MisInscripciones;
