import { useEffect, useState } from "react";
import Cabecera from "./components/Cabecera";
import Navegacion from "./components/Navegacion";
import Cartelera from "./pages/Cartelera";
import { actividades } from "./data/actividades";
import MisInscripciones from "./components/MisInscripciones";
function App() {
	const [categoria, setCategoria] = useState("Todas"); //useState react monitora la variable, y cuando esa variable cambia de valor, react vuelve a renderizar la pagina. TODAS son categorias, que puede ser musica o artes visuales.  por lo que si en filtros ponemos musica, la pagina se debe volver a renderizar a nivel de cliente, lo mismo con otros filtros.
	const visibles = categoria === "Todas" //=== operador ternario, la idea es reemplazar un if, si categoria es igual a todas, si le da verdadero, asigna actividades, si le da falso, asigna filter y demas...
		? actividades
		: actividades.filter((actividad) => actividad.categoria === categoria); //aqui el filter esta funcionando parecido a un map, tambien crea una funcion anonima, cuando se retorna verdadero el lo agrega al arreglo resultante, y viceversa. al ser filter es una funcion que debe devolverme true o false

	const [inscripciones, setInscripciones] = useState(() => {
		const guardadas = localStorage.getItem("inscripciones");
		return guardadas ? JSON.parse(guardadas) : [];
	});



	function inscribir(actividad) {
		const yaExiste = inscripciones.some((item) => item.id === actividad.id);
		if (yaExiste) return;
		setInscripciones([...inscripciones, actividad]);
	}
	
	function eliminarInscripcion(id) {
		setInscripciones(
			inscripciones.filter((item) => item.id !== id)
		);
	}


	useEffect(() => {   //yo defino la accion cuando hay un cambio dentro del useeffect, no necesariamente es visible, ni renderiza de nuevo como usestate.
		localStorage.setItem(
			"inscripciones",
			JSON.stringify(inscripciones)
		);
	}, [inscripciones]);

	return (
		<>
			<Cabecera />
			<Navegacion />
			<main className="container py-4">
				<select
					className="form-select mb-4"
					value={categoria}
					onChange={(evento) => setCategoria(evento.target.value)}
				>
					<option>Todas</option>
					<option>Mecánica</option>
					<option>Eventos</option>
					<option>Repuestos</option>
					<option>Estética y Tuning</option>
				</select>
				<Cartelera
          			actividades={visibles}
          			onInscribir={inscribir}
        		/>
				<hr></hr>
				<MisInscripciones inscripciones={inscripciones} onEliminar={eliminarInscripcion}/>
			</main>
		</>
	);
}
export default App;