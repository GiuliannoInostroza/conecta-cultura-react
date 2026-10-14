// src/utils/precio.spec.jsx
import { formatearPrecio } from "./precio";

describe("formatearPrecio", () => {
  // Requisito: una actividad gratuita se informa como "Gratis".
  it("muestra cero como Gratis", () => {
    expect(formatearPrecio(0)).toBe("Gratis");
  });

  // Requisito: los precios se muestran con separador de miles chileno.
  it("formatea un valor positivo", () => {
    expect(formatearPrecio(15000)).toContain("15.000");
  });
});
