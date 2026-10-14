import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import TarjetaActividad from "./TarjetaActividad";

describe("TarjetaActividad", () => {
  const actividad = { id: 1, nombre: "Taller de frenos", cupos: 4 };

  // Requisito: la tarjeta presenta los datos recibidos por props.
  it("muestra el nombre recibido por props", () => {
    render(<TarjetaActividad actividad={actividad} />);
    expect(screen.getByText("Taller de frenos")).toBeInTheDocument();
  });

  // Requisito: con 1 a 5 cupos se avisa que quedan pocos.
  it("muestra aviso cuando quedan pocos cupos", () => {
    render(<TarjetaActividad actividad={actividad} />);
    expect(screen.getByText(/últimos/i)).toBeInTheDocument();
  });

  // Requisito: el botón avisa al padre qué actividad se eligió.
  it("ejecuta onInscribir al presionar el botón", async () => {
    const usuario = userEvent.setup();
    const onInscribir = vi.fn();
    render(
      <TarjetaActividad actividad={actividad} onInscribir={onInscribir} />
    );
    await usuario.click(
      screen.getByRole("button", { name: /inscribir/i })
    );
    expect(onInscribir).toHaveBeenCalledWith(actividad);
  });
});
