import Cartelera from "./Cartelera";
import { formatearPrecio } from "../utils/precio";

const PRECIO_MAXIMO_OFERTA = 10000;

function Ofertas({ actividades, onInscribir }) {
  const ofertas = actividades.filter(
    (actividad) => actividad.precio <= PRECIO_MAXIMO_OFERTA
  );

  return (
    <main className="container py-4">
      <h1 className="text-black">Ofertas</h1>
      <p>
        Actividades gratuitas o de hasta {formatearPrecio(PRECIO_MAXIMO_OFERTA)}.
      </p>

      {ofertas.length === 0 ? (
        <p>No hay ofertas disponibles por ahora.</p>
      ) : (
        <Cartelera actividades={ofertas} onInscribir={onInscribir} />
      )}
    </main>
  );
}

export default Ofertas;
