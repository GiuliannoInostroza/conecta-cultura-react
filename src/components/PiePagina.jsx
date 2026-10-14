function PiePagina() {
  return (
    <footer className="py-4 mt-auto bg-dark text-white">
      <div className="container">
        <p className="mb-1">
          <strong>VCarMeet</strong>
        </p>
        <address className="mb-1">
          Contacto:{" "}
          <a className="link-light" href="mailto:hola@conectacultura.cl">
            hola@conectacultura.cl
          </a>
        </address>
        <p className="mb-0">
          <small>Proyecto académico - Desarrollo FullStack II</small>
        </p>
      </div>
    </footer>
  );
}

export default PiePagina;
