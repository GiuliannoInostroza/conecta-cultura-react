import { Link } from "react-router-dom";
import { categorias } from "../data/actividades";

function Categorias({ actividades }) {
  return (
    <main className="container py-4">
      <h1 className="text-black">Categorías</h1>

      <div className="row g-4">
        {categorias.map((nombre) => {
          const cantidad = actividades.filter(
            (actividad) => actividad.categoria === nombre
          ).length;

          return (
            <div className="col-12 col-sm-6 col-lg-3" key={nombre}>
              <article className="card h-100 shadow-sm">
                <div className="card-body">
                  <h2 className="h5">{nombre}</h2>
                  <p>
                    {cantidad} {cantidad === 1 ? "actividad" : "actividades"}
                  </p>
                  <Link to={`/categorias/${encodeURIComponent(nombre)}`}>
                    Ver actividades de {nombre}
                  </Link>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Categorias;
