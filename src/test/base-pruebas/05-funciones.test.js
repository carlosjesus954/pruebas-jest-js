import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe("Prueba con 05 funciones", () => {
  test("obtener getUser", () => {
    const user = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const compararName = getUser();

    expect(user).toStrictEqual(compararName);
  });
  test("Debe retornar un objeto getUsuarioActivo", () => {
    const name = 'carlos';
    const user = getUsuarioActivo( name );
    expect(user).toEqual(
        {
            uid: 'ABC567',
            username: name
        }
    );
  });
});
