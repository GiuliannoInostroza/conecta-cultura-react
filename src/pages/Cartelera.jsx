import { Link } from "react-router-dom";
import TarjetaActividad from "../components/TarjetaActividad";

function Cartelera({ actividades, onInscribir }) {
  return (
    <div className="row g-4">
      {actividades.map((actividad) => (
        <div className="col-12 col-md-6 col-lg-4" key={actividad.id}>
          <TarjetaActividad actividad={actividad} onInscribir={onInscribir}>
            <Link to={`/actividades/${actividad.id}`}>Ver detalle</Link>
          </TarjetaActividad>
        </div>
      ))}
    </div>
  );
}

export default Cartelera;
