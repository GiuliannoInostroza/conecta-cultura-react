import { Link } from "react-router-dom";

function Bienvenida() {
  const nombreProyecto = "VCarMeet";

  return (
    <section className="presentacion text-white rounded-3 p-4 p-md-5 mb-5">
      <p className="text-uppercase small fw-bold mb-2">Aprendizaje y comunidad</p>
      <h1 className="display-6 fw-bold">Experiencias que conectan personas</h1>
      <p className="lead">
        Descubre en {nombreProyecto} reuniones de autos, competencias y talleres.
      </p>
      <Link className="btn btn-light" to="/actividades">
        Explorar actividades
      </Link>
    </section>
  );
}

export default Bienvenida;
