import { Link, useParams } from "react-router-dom";
import { actividades as actividadesIniciales } from "../data/actividades";
import { formatearPrecio } from "../utils/precio";

function DetalleActividad({ actividades = actividadesIniciales }) {
  const { id } = useParams();
  const actividad = actividades.find((item) => item.id === Number(id));

  if (!actividad) {
    return (
      <main className="container py-4">
        <p>La actividad solicitada no existe.</p>
        <Link to="/actividades">Volver a actividades</Link>
      </main>
    );
  }

  return (
    <main className="container py-4">
      <h1 className="text-dark">{actividad.nombre}</h1>
      <p className="text-body-secondary">{actividad.categoria}</p>
      <p>{actividad.descripcion}</p>
      <p className="mb-1">Precio: {formatearPrecio(actividad.precio)}</p>
      <p>Cupos: {actividad.cupos}</p>
      <Link to="/actividades">Volver</Link>
    </main>
  );
}

export default DetalleActividad;
