import { render } from '@testing-library/react'
import { FirstApp } from '../src/FirstApp'

describe('Pruebas en <FirstApp/>', () => { 

   /*  test('debe de hacer match con el snapshot', () => { 
        const title = 'Hola test'

        const { container } = render(<FirstApp title={title}/>)

        expect(container).toMatchSnapshot()
     }) */

     test('debe mostar el titulo en un h1', () => { 
        const title = 'Hola, Soy Rubio'
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />)

        expect (getByText(title)).toBeTruthy()

        const h1 = container.querySelector('h1')
        expect(h1.innerHTML).toBe(title)
        expect(h1.innerHTML).toContain(title)
        expect(getByTestId('test-title').innerHTML).toBe(title)

      })

      test('debe mostrar el subtitle enviado por props', () => { 
        const title = 'Hola'
        const subtitle= 'Como estan?'

        const { getByText} = render(
            <FirstApp 
                title={title}
                subtitle={subtitle}
            />
        )

        expect(getByText(subtitle)).toBeTruthy()
       })
 })