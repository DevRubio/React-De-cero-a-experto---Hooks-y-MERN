import { render, screen } from '@testing-library/react'
import { FirstApp } from '../src/FirstApp'

describe('Pruebas en <FirstApp/>', () => { 

  const title = 'Hola, Soy Goku'
  const subtitle= 'Soy un Subtitle'

  test('debe de hacer match con el snapshop', () => { 
    const {container} = render(<FirstApp title={title} />)
    expect(container).toMatchSnapshot()
   })
   
   test('Debe mostrar el mensaje "Hola. Soy Goku"', () => { 
      render(<FirstApp title={title} />)
      expect(screen.getByText(title)).toBeTruthy()
    })

    test('Debe mostrar el titulo en un H1', () => { 
      render(<FirstApp title={title} />)
      expect(screen.getByRole('heading',{level: 1}).innerHTML).toContain(title)
     })

     test('Debe mostrar el subtitulo enviado por props', () => { 
      render(
        <FirstApp
          title={title}
          subtitle={subtitle}
        />
      )
      expect(screen.getAllByText(subtitle).length).toBe(1)
      })



 })