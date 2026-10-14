import { formatearPrecio } from "../utils/precio";

function TarjetaActividad({ actividad, onInscribir, children }) {
  return (
    <article className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        <h2 className="h5">{actividad.nombre}</h2>

        <p className="text-body-secondary mb-2">{actividad.categoria}</p>

        {actividad.precio !== undefined && (
          <p className="mb-1">Precio: {formatearPrecio(actividad.precio)}</p>
        )}

        <p className="mb-2">Cupos: {actividad.cupos}</p>

        {actividad.cupos > 0 && actividad.cupos <= 5 && (
          <p className="text-danger fw-bold">¡Últimos cupos!</p>
        )}

        <div className="mt-auto d-flex flex-wrap align-items-center gap-3">
          <button
            className="btn btn-primary"
            onClick={() => onInscribir(actividad)}
            disabled={actividad.cupos === 0}
          >
            Inscribirme
          </button>

          {children}
        </div>
      </div>
    </article>
  );
}

export default TarjetaActividad;
