import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

describe("Pruebas en 08-imp", () => {
  test("getHeroeById debe retornar un heroe por ID ", () => {
    const id = 1;
    const hero = getHeroeById(id);
    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });
  test("getHeroeById debe retornar undefined si no existe ", () => {
    const id = 12;
    const hero = getHeroeById(id);
    // console.log(hero);
    expect(hero).toBeFalsy(); //para comprobar que es falso de manera mas rapida
  });
  test("Debe retornar un arreglo con los heroes de DC", () => {
    // Tarea:
    // Debe de retornar un arreglo con los heroes de DC
    // Length === 3
    // toEqual al arreglo filtrado

    const tipo = "DC";
    const owner = tipo;
    const heroes = getHeroesByOwner(owner);
    console.log(heroes);
    expect(heroes.length).toBe(3);
    expect(heroes).toEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);
  });

  test("Debe retornar un arreglo con los heroes de Marvel", () => {
    //Debe retornar un arreglo con los heroes de Marvel
    //length === 2

    const tipo = "Marvel";
    const owner = tipo;
    const heroes = getHeroesByOwner(owner);
    console.log(heroes);
    expect(heroes.length).toBe(2);
    expect(heroes).toEqual([
      { id: 2, name: "Spiderman", owner: "Marvel" },
      { id: 5, name: "Wolverine", owner: "Marvel" },
    ]);
  });
});
