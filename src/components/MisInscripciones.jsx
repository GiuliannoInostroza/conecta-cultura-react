function MisInscripciones({ inscripciones, onEliminar }) {
  return (
    <section className="mt-5">
      <h2 className="text-dark">Mis inscripciones</h2>

      {inscripciones.length === 0 ? (
        <p>No tienes actividades inscritas.</p>
      ) : (
        <div className="row g-3">
          {inscripciones.map((actividad) => (
            <div className="col-12 col-md-6" key={actividad.id}>
              <div className="card">
                <div className="card-body">
                  <h3 className="h5">{actividad.nombre}</h3>
                  <p>{actividad.categoria}</p>

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
