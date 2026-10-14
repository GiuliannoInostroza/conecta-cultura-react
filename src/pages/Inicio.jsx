import { Link } from "react-router-dom";
import Bienvenida from "../components/Bienvenida";
import imagenDrift from "../assets/img/drift.avif";
import imagenDrag from "../assets/img/drag.jpg";

function Inicio() {
  return (
    <main className="container py-4">
      <Bienvenida />

      <section aria-labelledby="titulo-destacadas" className="mb-5">
        <h2 id="titulo-destacadas" className="h3 mb-4">Actividades destacadas</h2>

        <div className="row g-4">
          <div className="col-12 col-md-6">
            <article className="card h-100 shadow-sm">
              <img
                src={imagenDrift}
                className="card-img-top img-fluid imagen-destacada"
                alt="Dos autos derrapando en tándem con humo en una competencia de drift"
              />
              <div className="card-body">
                <h3 className="h5">Competencia de drift</h3>
                <p>Compite por el primer lugar en esta emocionante competencia.</p>
                <Link to="/categorias/Eventos">Ver eventos</Link>
              </div>
            </article>
          </div>

          <div className="col-12 col-md-6">
            <article className="card h-100 shadow-sm">
              <img
                src={imagenDrag}
                className="card-img-top img-fluid imagen-destacada"
                alt="Autos en la partida de una competencia de drag de Time Attack Chile"
              />
              <div className="card-body">
                <h3 className="h5">Competencia de drag</h3>
                <p>Demuestra tu habilidad en esta intensa competencia de drag.</p>
                <Link to="/categorias/Eventos">Ver eventos</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <aside className="aviso rounded-3 p-4" aria-labelledby="titulo-aviso">
        <h2 id="titulo-aviso" className="h4">¿Quieres proponer una actividad?</h2>
        <p>Desde Administración puedes agregar nuevas actividades a la cartelera.</p>
        <Link className="btn btn-primary" to="/admin/actividades">
          Ir a Administración
        </Link>
      </aside>
    </main>
  );
}

export default Inicio;
