import {fireEvent, render, screen} from '@testing-library/react'
import { CounterApp } from '../src/CounterApp'

describe('Pruebas en el <CounterApp/>', () => { 
    const initialValue = 10;
    test('debe hacer match con el snapshot', () => { 
        const { container } = render(<CounterApp value={initialValue}/>)
        expect(container).toMatchSnapshot()
     })

    test('debe mostrar el valor inicial de 10 <CounterApp value={100}', () => { 
        render(<CounterApp value={100}/>)
        expect(screen.getAllByText('100')).toBeTruthy()
     })

     test('debe de incrementar con el boton +1', () => { 
        render(<CounterApp value={initialValue}/>)
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText('11')).toBeTruthy()
      })

      test('debe de decrementar con el boton de -1', () => { 
        render(<CounterApp value={initialValue}/>)
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText('9')).toBeTruthy()
       })

       test('debe de funcionar el boton de reset', () => { 
        render(<CounterApp value={10}/>)
        fireEvent.click(screen.getByText('+1'))
        //fireEvent.click(screen.getByText('Reset'))
        //expect(screen.getByText('10')).toBeTruthy()
        fireEvent.click(screen.getByRole('button',{name: 'btn-reset'}))
        expect(screen.getByText('10')).toBeTruthy()
       })
 })