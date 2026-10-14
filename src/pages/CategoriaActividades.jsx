import { Link, useParams } from "react-router-dom";
import Cartelera from "./Cartelera";
import { categorias } from "../data/actividades";

function CategoriaActividades({ actividades, onInscribir }) {
  const { nombre } = useParams();

  if (!categorias.includes(nombre)) {
    return (
      <main className="container py-4">
        <p>La categoría solicitada no existe.</p>
        <Link to="/categorias">Volver a categorías</Link>
      </main>
    );
  }

  const visibles = actividades.filter(
    (actividad) => actividad.categoria === nombre
  );

  return (
    <main className="container py-4">
      <h1 className="text-black">{nombre}</h1>
      <p>
        <Link to="/categorias">Volver a categorías</Link>
      </p>

      {visibles.length === 0 ? (
        <p>No hay actividades en esta categoría.</p>
      ) : (
        <Cartelera actividades={visibles} onInscribir={onInscribir} />
      )}
    </main>
  );
}

export default CategoriaActividades;
