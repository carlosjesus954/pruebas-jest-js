import { getImagen } from "../../base-pruebas/11-async-await"

describe('Haciendo pruebas al 11-async', () => {
    test('Devolviendo la url de getImagen', async() => { 
        const url = await getImagen()
        console.log(url);
        expect( typeof url ).toBe( 'string' )
     })
})
