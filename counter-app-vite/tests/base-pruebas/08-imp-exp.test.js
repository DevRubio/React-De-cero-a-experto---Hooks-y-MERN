import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"

describe('Pruebas en 08-imp-exp ', () => { 

    test('getHeroeById debe retornar un héroe por ID', () => { 
        const id = 1
        const hero = getHeroeById(id)
        
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
     })

     

     test('getHeroeById debe retornar undefined si no existe el id', () => { 
        const id = 100
        const hero = getHeroeById(id)

        expect(hero).toBeFalsy()
      })

      test('getHeroesByOwner debe regresar heroes de Dc', () => { 
        const owner = 'DC'
        const heroes = getHeroesByOwner(owner)

        

        expect(heroes.length).toBe(3)
        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ])
        expect (heroes).toEqual( heroes.filter( (heroe) => heroe.owner === owner ))
       })

       test('getHeroesByOwner debe retornar los heroes de Marvel', () => { 
        const owner = 'Marvel'
        const heroes = getHeroesByOwner(owner)

        expect(heroes.length).toBe(2)
        expect (heroes).toEqual( heroes.filter( (heroe) => heroe.owner === owner ))
        })

 })